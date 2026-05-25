import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { About } from '@/components/sections/About';
import { TrustLayer } from '@/components/sections/TrustLayer';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We spent years inside broken operations. We started Tsohle to build what we kept wishing existed — systems that actually match how businesses operate.',
};

const PRINCIPLES = [
  {
    number: '01',
    title: 'We diagnose before we prescribe',
    body: 'A discovery call before a proposal. A systems audit before a quote. We don\'t recommend solutions to problems we haven\'t mapped ourselves.',
  },
  {
    number: '02',
    title: 'You own everything',
    body: 'Code, data, infrastructure, documentation — all yours. No vendor lock-in. No proprietary black box. If you walk away, you keep the system.',
  },
  {
    number: '03',
    title: 'We say no when we should',
    body: 'If a discovery call reveals we\'re not the right fit, we say so. Recommending the wrong solution to a paying client helps no one.',
  },
  {
    number: '04',
    title: 'We measure what we build',
    body: 'Every production system ships with 80%+ test coverage, complete audit trails, and monitoring. Done means provably correct.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 bg-grid relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-orange/8 blur-[120px]" aria-hidden />
        <div className="max-w-[1400px] mx-auto relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
            Who We Are
          </p>
          <h1 className="font-display font-black text-5xl lg:text-6xl leading-tight mb-6 max-w-3xl">
            We spent years inside
            <br />
            <span className="text-gradient">broken operations.</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
            We&apos;ve worked inside real operational environments — the kind where three departments
            run on three different spreadsheets, where the &quot;system&quot; is a chain of WhatsApp messages,
            and where the most critical business knowledge lives in one person&apos;s head.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-5 text-text-secondary text-lg leading-relaxed">
            <p>
              We kept running into the same problem: businesses knew exactly what wasn&apos;t working,
              but couldn&apos;t get systems built that actually fixed it. Too expensive. Too generic.
              Too slow. Too disconnected from how the business actually operated.
            </p>
            <p>
              The solution was always &quot;buy this software&quot; or &quot;hire more people.&quot;
              Neither addressed the real problem — which was that the operational logic of the business
              had never been properly engineered.
            </p>
            <p className="text-white font-medium">
              We started Tsohle to do that work directly. No resellers. No subcontractors.
              We design it. We build it. We hand it over with full documentation and zero lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-black text-3xl lg:text-4xl mb-12">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="bg-dark-card border border-dark-border rounded-2xl p-8"
              >
                <span className="font-display font-black text-4xl text-brand-orange/20 block mb-4">
                  {p.number}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustLayer />
      <About />

      {/* CTA */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl mb-4">
            Want to work with us?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Start with a free discovery call. 30 minutes. No pitch. Just an honest conversation
            about whether we can solve your problem.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
          >
            Book the call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
