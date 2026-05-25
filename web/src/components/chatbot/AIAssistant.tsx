'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
const uuidv4 = () => crypto.randomUUID();
import { cn } from '@/lib/utils';
import { SA_LANGUAGES, API_URL } from '@/lib/constants';
import type { ChatMessage, ChatApiResponse } from '@/types';

const GREETING: Record<string, string> = {
  en:  "Hi, I'm Tsohle's assistant. What operational problem are you trying to solve today?",
  zu:  "Sawubona, ngingumsizi kaTsohle. Iyiphi inkinga yezokusebenza ofuna ukuyisombulula namuhla?",
  af:  "Hallo, ek is Tsohle se assistent. Watter operasionele probleem probeer u vandag oplos?",
  xh:  "Molo, ndingumsebenzisi kaTsohle. Yeyiphi ingxaki ye-operational ofuna ukuyisombulula namhlanje?",
  st:  "Dumela, ke mothusi wa Tsohle. Na ke bothata bofe ba tshebetso bo o lekang ho rarolla kajeno?",
  nso: "Dumela, ke molaodi wa Tsohle. Ke bothata byang bja tshepedišo bjo o lekago go rarolla lehono?",
};

function getGreeting(lang: string): string {
  return GREETING[lang] ?? GREETING.en;
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [langPickerOpen, setLangPickerOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialise session + greeting on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      const sid = uuidv4();
      setSessionId(sid);
      setMessages([
        {
          id: uuidv4(),
          role: 'assistant',
          content: getGreeting(language),
          timestamp: new Date(),
        },
      ]);
    }
  }, [open, messages.length, language]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input on open
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  const handleLanguageChange = useCallback((code: string) => {
    setLanguage(code);
    setLangPickerOpen(false);
    const langName = SA_LANGUAGES.find((l) => l.code === code)?.name ?? 'English';
    setMessages((prev) => [
      ...prev,
      {
        id: uuidv4(),
        role: 'assistant',
        content: `Language switched to ${langName}. How can I assist you?`,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: uuidv4(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId, language }),
      });

      if (!res.ok) throw new Error('API error');

      const data: ChatApiResponse = await res.json();
      if (data.sessionId && !sessionId) setSessionId(data.sessionId);

      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: 'assistant',
          content:
            "I'm having a brief issue. Please email us at contact@tsohle.co.za and we'll respond within a few hours.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, sessionId, language]);

  const currentLang = SA_LANGUAGES.find((l) => l.code === language);

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full',
          'bg-gradient-to-br from-brand-orange to-brand-gold',
          'flex items-center justify-center shadow-brand',
          'hover:scale-110 transition-transform',
          open && 'hidden',
        )}
        style={{ animation: 'float 6s ease-in-out infinite' }}
        aria-label="Open Tsohle assistant"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[370px] sm:w-[420px] h-[580px] flex flex-col bg-dark-card border border-dark-border rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-orange to-brand-gold px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">Tsohle Assistant</p>
                  <p className="text-white/70 text-xs">Ask me anything in any SA language</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors hover:rotate-90 transition-transform duration-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Language selector */}
            <div className="relative px-4 py-2 border-b border-dark-border shrink-0">
              <button
                type="button"
                onClick={() => setLangPickerOpen((v) => !v)}
                className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors"
              >
                <span>🌐</span>
                <span>{currentLang?.name ?? 'English'}</span>
                <ChevronDown
                  size={12}
                  className={cn('transition-transform', langPickerOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {langPickerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute left-4 top-full mt-1 bg-dark border border-dark-border rounded-xl shadow-card z-10 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-px max-h-48 overflow-y-auto p-1">
                      {SA_LANGUAGES.map((lang) => (
                        <button
                          type="button"
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={cn(
                            'text-left text-xs px-3 py-2 rounded-lg hover:bg-dark-card transition-colors',
                            lang.code === language
                              ? 'text-brand-orange font-semibold'
                              : 'text-text-secondary',
                          )}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'flex gap-2',
                    msg.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-brand-orange/20 flex items-center justify-center text-sm shrink-0 mt-0.5">
                      🤖
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-brand-orange text-white rounded-tr-sm'
                        : 'bg-dark border border-dark-border text-text-primary rounded-tl-sm',
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-brand-orange/20 flex items-center justify-center text-sm shrink-0">
                    🤖
                  </div>
                  <div className="bg-dark border border-dark-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    {(['dot-0', 'dot-1', 'dot-2'] as const).map((cls) => (
                      <span key={cls} className={`w-2 h-2 rounded-full bg-text-muted typing-dot ${cls}`} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-dark-border shrink-0">
              <div className="flex items-center gap-2 bg-dark border border-dark-border rounded-xl px-4 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-lg bg-brand-orange disabled:opacity-40 flex items-center justify-center hover:bg-brand-orange-dark transition-colors"
                  aria-label="Send"
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
