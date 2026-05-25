'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/constants';

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4"
        >
          Ready to stop patching and start building?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="font-display font-black text-4xl lg:text-6xl leading-tight mb-6"
        >
          Your operation deserves
          <br />
          <span className="text-gradient">a real system.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-text-secondary text-lg mb-10 leading-relaxed"
        >
          Schedule a discovery call and we&apos;ll tell you honestly what we can build,
          how long it takes, and what it costs — before any commitment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-brand group"
          >
            Book a free discovery call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-2 border border-dark-border hover:border-brand-orange/40 text-text-secondary hover:text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
          >
            Email us directly
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 text-text-muted text-sm"
        >
          30-minute call. No obligation. We&apos;ll tell you if we&apos;re the right fit.
        </motion.p>
      </div>
    </section>
  );
}
