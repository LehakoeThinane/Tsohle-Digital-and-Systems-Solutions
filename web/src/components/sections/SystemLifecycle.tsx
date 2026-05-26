'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STAGES = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Map the operational reality before any code is written.',
    detail: 'Workflow interviews · failure point identification · stakeholder mapping',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Design decisions documented before a single line of build begins.',
    detail: 'Architecture Decision Records · system design · risk analysis',
  },
  {
    number: '03',
    title: 'Build',
    description: '80%+ test coverage, audit trails, and CI/CD from day one.',
    detail: '431+ automated tests per system · no exceptions',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Edge-first infrastructure with zero-downtime release gates.',
    detail: 'Cloudflare Workers · automated rollbacks · health checks',
  },
  {
    number: '05',
    title: 'Monitor',
    description: 'Observability built in, not bolted on after the first incident.',
    detail: 'Alerts · dashboards · anomaly detection from launch day',
  },
  {
    number: '06',
    title: 'Evolve',
    description: 'Requirements change. Systems must adapt without rewrites.',
    detail: 'Monthly retainer · dependency reviews · operational evolution',
  },
];

export function SystemLifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            System Lifecycle
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight mb-4 max-w-2xl">
            Deployment is not
            <br />
            <span className="text-gradient">the finish line.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Every system we build follows the same full arc — from operational discovery through
            to continuous evolution. The six stages below are not a checklist. They are a discipline.
          </p>
        </div>

        {/* Stage grid */}
        <div ref={ref} className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/25 to-transparent" aria-hidden />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                <div className="bg-dark-card border border-dark-border hover:border-brand-orange/30 rounded-2xl p-5 h-full transition-colors group">
                  {/* Number bubble */}
                  <div className="w-9 h-9 rounded-full bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                    <span className="font-display font-black text-xs text-brand-orange">
                      {stage.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-3">
                    {stage.description}
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed border-t border-dark-border pt-3">
                    {stage.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lifecycle note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-8 bg-brand-orange/5 border border-brand-orange/20 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
            <span className="text-white font-semibold">Most firms stop at stage four.</span>{' '}
            Monitoring, evolution, and long-term operational partnership are what separate a
            delivered project from infrastructure your business can actually depend on.
          </p>
          <span className="shrink-0 text-brand-orange text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
            Stages 5 &amp; 6 are our moat
          </span>
        </motion.div>
      </div>
    </section>
  );
}
