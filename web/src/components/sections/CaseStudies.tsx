'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

const GRADIENT_MAP: Record<string, string> = {
  biznizflow: 'from-brand-orange/20 to-brand-gold/10',
  lendflow:   'from-brand-blue/20 to-brand-orange/10',
  'seo-geo':  'from-purple-500/20 to-brand-blue/10',
  'tax-calc': 'from-green-500/20 to-brand-gold/10',
};

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-dark-card">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            Our Systems
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight mb-4">
            Proven solutions built
            <br />
            <span className="text-gradient">for real problems.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            These are production-grade systems solving actual operational challenges —
            not concept pieces or client pitches.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <Link
                href={product.href}
                className="group block bg-dark border border-dark-border hover:border-brand-orange/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full"
              >
                {/* Visual band */}
                <div className={`bg-gradient-to-br ${GRADIENT_MAP[product.slug]} h-32 flex items-center justify-center`}>
                  <span className="text-6xl">{product.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
                    {product.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{product.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{product.description}</p>
                  <span className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore system <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
