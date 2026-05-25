import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { v4 as uuidv4 } from 'uuid';
import { KnowledgeBaseService } from '../knowledge-base/knowledge-base.service';

export type LeadStage =
  | 'greeting'
  | 'problem_discovery'
  | 'qualification'
  | 'solution_fit'
  | 'booking'
  | 'closed';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface Session {
  id: string;
  language: string;
  stage: LeadStage;
  messages: ChatMessage[];
  leadData: Record<string, string>;
  createdAt: Date;
  lastActivity: Date;
}

@Injectable()
export class ChatbotService {
  private readonly logger = new Logger(ChatbotService.name);
  private readonly client: OpenAI;
  private readonly model: string;
  private readonly sessions = new Map<string, Session>();

  constructor(
    private readonly config: ConfigService,
    private readonly kb: KnowledgeBaseService,
  ) {
    const provider = this.config.get<string>('AI_PROVIDER') ?? 'grok';

    if (provider === 'llama') {
      this.client = new OpenAI({
        apiKey: this.config.get('GROQ_API_KEY') ?? 'no-key',
        baseURL: 'https://api.groq.com/openai/v1',
      });
      this.model = 'llama-3.3-70b-versatile';
    } else {
      // Default: Grok (xAI)
      this.client = new OpenAI({
        apiKey: this.config.get('XAI_API_KEY') ?? 'no-key',
        baseURL: 'https://api.x.ai/v1',
      });
      this.model = 'grok-2-latest';
    }

    // Clean up stale sessions every 30 minutes
    setInterval(() => this.cleanStaleSessions(), 30 * 60 * 1000);
  }

  async chat(
    message: string,
    sessionId?: string,
    language?: string,
  ): Promise<{ sessionId: string; reply: string; stage: LeadStage; leadCaptured: boolean }> {
    const sid = sessionId && this.sessions.has(sessionId) ? sessionId : uuidv4();
    const session = this.getOrCreateSession(sid, language);

    // Update language if provided
    if (language && language !== session.language) {
      session.language = language;
    }

    // Add user message to history
    session.messages.push({ role: 'user', content: message });
    session.lastActivity = new Date();

    // Extract any lead data from message
    this.extractLeadData(message, session);

    // Advance stage based on conversation length and signals
    session.stage = this.computeStage(session);

    const systemPrompt = this.kb.buildSystemPrompt(session.language, session.stage);

    let reply: string;
    try {
      const completion = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          { role: 'system', content: systemPrompt },
          ...session.messages.slice(-10), // keep last 10 messages for context window
        ],
        max_tokens: 500,
        temperature: 0.7,
      });
      reply = completion.choices[0]?.message?.content ?? this.getFallbackReply(session.language);
    } catch (err) {
      this.logger.error('AI completion failed', err);
      reply = this.getFallbackReply(session.language);
    }

    // Add assistant reply to history
    session.messages.push({ role: 'assistant', content: reply });

    const leadCaptured =
      Boolean(session.leadData.name) && Boolean(session.leadData.contact);

    return { sessionId: sid, reply, stage: session.stage, leadCaptured };
  }

  getSession(sessionId: string): Session | undefined {
    return this.sessions.get(sessionId);
  }

  private getOrCreateSession(id: string, language?: string): Session {
    if (!this.sessions.has(id)) {
      this.sessions.set(id, {
        id,
        language: language ?? 'en',
        stage: 'greeting',
        messages: [],
        leadData: {},
        createdAt: new Date(),
        lastActivity: new Date(),
      });
    }
    return this.sessions.get(id)!;
  }

  private computeStage(session: Session): LeadStage {
    const msgCount = session.messages.filter((m) => m.role === 'user').length;
    const combinedText = session.messages
      .map((m) => m.content)
      .join(' ')
      .toLowerCase();

    if (session.leadData.name && session.leadData.contact) return 'closed';

    const bookingSignals = ['schedule', 'book', 'call', 'consultation', 'demo', 'meeting',
      'bespreek', 'chwela', 'bua', 'kopano'];
    if (bookingSignals.some((s) => combinedText.includes(s)) && msgCount >= 3) return 'booking';

    const solutionSignals = ['how', 'can you', 'does it', 'will it', 'what about',
      'hoe', 'kan julle', 'ngabe', 'na'];
    if (solutionSignals.some((s) => combinedText.includes(s)) && msgCount >= 4) return 'solution_fit';

    if (msgCount >= 3) return 'qualification';
    if (msgCount >= 1) return 'problem_discovery';
    return 'greeting';
  }

  private extractLeadData(message: string, session: Session): void {
    // Simple phone number detection (SA formats)
    const phoneRegex = /(\+27|0)[6-8][0-9]{8}/;
    const phone = message.match(phoneRegex);
    if (phone) session.leadData.contact = phone[0];

    // Email detection
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const email = message.match(emailRegex);
    if (email) session.leadData.contact = email[0];

    // Rough name detection (capitalised words not at start)
    if (!session.leadData.name && message.length < 40) {
      const nameRegex = /^(?:I(?:'m| am) )?([A-Z][a-z]+(?: [A-Z][a-z]+)?)/;
      const name = message.match(nameRegex);
      if (name) session.leadData.name = name[1];
    }
  }

  private getFallbackReply(language: string): string {
    const fallbacks: Record<string, string> = {
      en: "I'm having a brief moment of downtime. Please email us at contact@tsohle.co.za and we'll respond within a few hours.",
      af: "Ek ondervind 'n kort oomblik van stilstand. Stuur asseblief 'n e-pos aan contact@tsohle.co.za.",
      zu: "Nginenkinga encane. Sicela uthumele i-imeyili ku-contact@tsohle.co.za.",
      st: "Ke na le bothata ba bonnyane. Ka kopo romela imeile ho contact@tsohle.co.za.",
    };
    return fallbacks[language] ?? fallbacks.en;
  }

  private cleanStaleSessions(): void {
    const cutoff = Date.now() - 2 * 60 * 60 * 1000; // 2 hours
    for (const [id, session] of this.sessions) {
      if (session.lastActivity.getTime() < cutoff) this.sessions.delete(id);
    }
  }
}
