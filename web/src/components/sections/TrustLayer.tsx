'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TRUST_STATS } from '@/lib/constants';

export function TrustLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-dark-card border-y border-dark-border py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display font-black text-4xl lg:text-5xl text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-text-primary text-sm font-semibold mb-0.5">{stat.label}</p>
              <p className="text-text-muted text-xs">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
