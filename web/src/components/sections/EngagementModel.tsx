'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ENGAGEMENT_STEPS } from '@/lib/constants';

export function EngagementModel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            How We Start
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight mb-4">
            We don&apos;t send quotes
            <br />
            <span className="text-gradient">to strangers.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Every engagement starts with understanding the problem — not writing a proposal for a problem we haven&apos;t mapped yet.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ENGAGEMENT_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {i < ENGAGEMENT_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-orange/40 to-transparent z-10 -translate-y-px" />
              )}

              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center mb-4">
                  <span className="font-display font-black text-sm text-brand-orange">{step.number}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1">{step.title}</h3>
                <p className="text-text-muted text-xs font-medium mb-2">{step.duration}</p>
                {step.price && (
                  <p className="font-display font-black text-xl text-brand-orange mb-3">{step.price}</p>
                )}
                {!step.price && (
                  <p className="font-display font-black text-xl text-green-400 mb-3">Free</p>
                )}
                <p className="text-text-secondary text-sm leading-relaxed mt-auto">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
              Investment summary
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <p className="font-display font-bold text-2xl text-green-400">Free</p>
                <p className="text-text-secondary text-sm">Discovery call · 30 min</p>
              </div>
              <div className="hidden sm:block w-px bg-dark-border" />
              <div>
                <p className="font-display font-bold text-2xl text-white">R15,000</p>
                <p className="text-text-secondary text-sm">Architecture assessment</p>
              </div>
              <div className="hidden sm:block w-px bg-dark-border" />
              <div>
                <p className="font-display font-bold text-2xl text-white">R95k – R140k</p>
                <p className="text-text-secondary text-sm">Pilot → retainer per month</p>
              </div>
            </div>
          </div>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-brand whitespace-nowrap group"
          >
            Start with a discovery call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
