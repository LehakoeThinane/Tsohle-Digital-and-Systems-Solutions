import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS, CAPABILITY_CATEGORIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Systems we\'ve designed and built — production-grade solutions for real operational problems.',
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            Systems We&apos;ve Built
          </p>
          <h1 className="font-display font-black text-5xl lg:text-6xl leading-tight mb-6 max-w-2xl">
            Not a portfolio.
            <br />
            <span className="text-gradient">Proof of capability.</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl leading-relaxed">
            Every system below was built to solve a specific operational problem in a real
            business context — not as a concept piece or demo.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-bold text-2xl mb-8 text-text-secondary uppercase tracking-wider text-sm">
            Production Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="group bg-dark-card border border-dark-border hover:border-brand-orange/40 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{product.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">{product.name}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{product.description}</p>
                <span className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  View system <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capability categories */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-black text-3xl lg:text-4xl mb-4">
            Capability areas
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl">
            Beyond our packaged products, we apply these capabilities as custom engagements
            for businesses with specific operational challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITY_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-dark border border-dark-border rounded-2xl p-6">
                <span className="text-3xl block mb-3">{cat.icon}</span>
                <h3 className="font-display font-bold text-lg text-white mb-2">{cat.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl mb-4">
            Have a system you need built?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Start with a free discovery call. We&apos;ll tell you honestly whether we can help.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
          >
            Book a discovery call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
