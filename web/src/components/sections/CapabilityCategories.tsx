'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CAPABILITY_CATEGORIES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export function CapabilityCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="systems" className="py-24 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            Systems We Engineer
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight mb-4">
            Not a portfolio.
            <br />
            <span className="text-gradient">A capability map.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Every category below represents real systems we&apos;ve designed, built, and delivered — not
            technology we&apos;ve read about.
          </p>
        </div>

        {/* Problem-to-System Map */}
        <div className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-6">
            We recognise these problems
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                problem: '"Our sales team tracks leads in 3 different places and nothing syncs."',
                system: 'CRM with pipeline automation, quote generation, and commission tracking in one place',
              },
              {
                problem: '"Loan applications come in on paper, get captured manually, and we lose track."',
                system: 'Digital origination pipeline with KYC, scoring, document verification, and funder reporting',
              },
              {
                problem: '"We can\'t report on anything without spending a day in Excel."',
                system: 'Operations dashboard that pulls from every system in real time',
              },
              {
                problem: '"We onboard new staff by sending them a WhatsApp explaining the job."',
                system: 'HR and onboarding workflow automating contracting, access provisioning, and training tracking',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 flex gap-4"
              >
                <div className="flex-1">
                  <p className="text-text-secondary text-sm italic mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-orange mt-0.5 shrink-0">→</span>
                    <p className="text-white text-sm font-medium">{item.system}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capability cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITY_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="group bg-dark-card border border-dark-border hover:border-brand-orange/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{cat.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{cat.description}</p>
              <ul className="space-y-2">
                {cat.examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2 text-text-secondary text-sm">
                    <CheckCircle2 size={14} className="text-brand-orange shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
