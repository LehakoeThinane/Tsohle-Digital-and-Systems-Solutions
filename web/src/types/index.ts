export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  sessionId: string;
  language: string;
  messages: ChatMessage[];
}

export interface ChatApiResponse {
  sessionId: string;
  message: string;
  language: string;
  leadStage: string;
  leadCaptured: boolean;
}

export interface LeadFormData {
  name: string;
  company: string;
  email?: string;
  phone?: string;
  problem: string;
  timeline?: string;
  segment?: 'smme' | 'enterprise' | 'unknown';
}
