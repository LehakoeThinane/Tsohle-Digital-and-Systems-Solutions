'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-dark-card">
      <div className="max-w-[1400px] mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
              Who We Are
            </p>
            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight mb-6">
              We spent years inside
              <br />
              <span className="text-gradient">broken operations.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We&apos;ve worked inside real operational environments — the kind where three departments
                run on three different spreadsheets, where the &quot;system&quot; is a chain of WhatsApp messages,
                and where the most critical business knowledge lives in one person&apos;s head.
              </p>
              <p>
                We kept running into the same problem: businesses knew exactly what wasn&apos;t working,
                but couldn&apos;t get systems built that actually fixed it. Too expensive. Too generic.
                Too slow to implement. Too disconnected from how the business actually operated.
              </p>
              <p className="text-white font-medium">
                We started Tsohle to do that work directly — no resellers, no subcontractors.
                We design it. We build it. We hand it over to you with full ownership.
              </p>
            </div>
          </motion.div>

          {/* Right: Values as a clean list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              {
                icon: '🔬',
                title: 'We diagnose before we prescribe',
                body: 'A discovery call before a proposal. A systems audit before a quote. We don\'t recommend solutions to problems we haven\'t mapped.',
              },
              {
                icon: '🤝',
                title: 'You own everything',
                body: 'Code, data, infrastructure, documentation — all yours. No vendor lock-in. No proprietary black box. If you walk away, you keep the system.',
              },
              {
                icon: '🇿🇦',
                title: 'Built for the South African context',
                body: 'PAYE logic, SARS compliance, SA banking integrations, POPIA-aware data handling, and AI that speaks all 11 official languages.',
              },
              {
                icon: '📊',
                title: 'We measure what we build',
                body: 'Every production system ships with 80%+ test coverage, complete audit trails, and monitoring. We don\'t consider something done until it\'s provably correct.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-dark border border-dark-border rounded-xl p-5"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
