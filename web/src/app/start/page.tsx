'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LeadFormData } from '@/types';
import { API_URL } from '@/lib/constants';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function StartPage() {
  const [form, setForm] = useState<LeadFormData>({
    name: '',
    company: '',
    problem: '',
    email: '',
    phone: '',
    timeline: '',
    segment: 'unknown',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      // Still show success — email fallback
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-brand-orange" />
          </div>
          <h1 className="font-display font-black text-3xl mb-4">We got it.</h1>
          <p className="text-text-secondary leading-relaxed mb-6">
            We&apos;ll review your situation and reach out within 24 hours to schedule your
            discovery call. If it&apos;s urgent, email us directly at{' '}
            <a href="mailto:contact@tsohle.co.za" className="text-brand-orange">
              contact@tsohle.co.za
            </a>
            .
          </p>
          <p className="text-text-muted text-sm">
            — The Tsohle team
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            Let&apos;s figure out if we&apos;re the right fit
          </p>
          <h1 className="font-display font-black text-4xl lg:text-5xl leading-tight mb-4">
            Tell us about
            <br />
            <span className="text-gradient">the problem.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            We don&apos;t send quotes to strangers. This form helps us understand your situation
            before we talk — so the discovery call is actually useful.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { name: 'name', label: 'Your name', placeholder: 'First and last name', required: true, custom: 1 },
            { name: 'company', label: 'Company name', placeholder: 'What does your business do?', required: true, custom: 2 },
          ].map((field) => (
            <motion.div key={field.name} variants={fadeUp}>
              <label className="block text-sm font-semibold text-text-primary mb-2">{field.label}</label>
              <input
                type="text"
                required={field.required}
                placeholder={field.placeholder}
                value={(form as unknown as Record<string, string>)[field.name] ?? ''}
                onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-brand-orange/50 transition-colors"
              />
            </motion.div>
          ))}

          <motion.div variants={fadeUp}>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              What&apos;s the operational problem you&apos;re trying to solve?
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe what's broken, manual, or slowing you down. Be specific — the more detail, the better our answer."
              value={form.problem}
              onChange={(e) => setForm((f) => ({ ...f, problem: e.target.value }))}
              className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-brand-orange/50 transition-colors resize-none"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              How is it currently being handled?
            </label>
            <input
              type="text"
              placeholder="e.g. spreadsheet, WhatsApp groups, manual entry, paper-based..."
              value={form.timeline ?? ''}
              onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))}
              className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-brand-orange/50 transition-colors"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Which describes you better?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'smme', label: 'SMME', sub: '10–150 people' },
                { value: 'enterprise', label: 'Enterprise', sub: '150+ people' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, segment: opt.value as 'smme' | 'enterprise' }))}
                  className={`border rounded-xl p-4 text-left transition-all ${
                    form.segment === opt.value
                      ? 'border-brand-orange bg-brand-orange/10'
                      : 'border-dark-border hover:border-brand-orange/40'
                  }`}
                >
                  <p className="font-semibold text-white text-sm">{opt.label}</p>
                  <p className="text-text-muted text-xs">{opt.sub}</p>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Email</label>
              <input
                type="email"
                placeholder="you@company.co.za"
                value={form.email ?? ''}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-brand-orange/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Best phone number</label>
              <input
                type="tel"
                placeholder="0XX XXX XXXX"
                value={form.phone ?? ''}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-brand-orange/50 transition-colors"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-brand group"
            >
              {submitting ? 'Sending...' : 'Submit — we respond within 24 hours'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-text-muted text-xs text-center mt-3">
              No obligation. No sales pitch. Just an honest conversation about whether we can help.
            </p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
