import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Systems',
  description: 'Your systems work in isolation. That\'s costing you more than you\'ve calculated. Tsohle engineers the integration and automation layer your enterprise is missing.',
};

const PAIN_POINTS = [
  'Systems that don\'t talk to each other — data re-entered across 3 platforms',
  'Legacy infrastructure your team maintains instead of improving',
  'Reporting that takes days to produce because data lives everywhere',
  'Manual approval chains that slow down critical operations',
  'Shadow IT: departments building their own workarounds because the main system fails them',
];

const CAPABILITIES = [
  { icon: '🔗', title: 'System Integration', body: 'We build the orchestration layer that makes disparate systems share data — without replacing everything you already have.' },
  { icon: '⚙️', title: 'Process Automation', body: 'Identify and automate the manual workflows that create bottlenecks between your systems and your people.' },
  { icon: '📊', title: 'Unified Reporting', body: 'Operational dashboards that pull real-time data from every source — not a quarterly Excel reconciliation.' },
  { icon: '🔒', title: 'Enterprise Security', body: 'RBAC, audit trails, encrypted data handling, and 80%+ test coverage gates on every production system.' },
  { icon: '🤖', title: 'AI Operations Layer', body: 'Multilingual AI routing, classification, and decision support — with deterministic guardrails, not black-box automation.' },
  { icon: '🇿🇦', title: 'SA Compliance Built-in', body: 'PAYE, UIF, POPIA, NCR — South African regulatory requirements are logic, not afterthoughts.' },
];

export default function ForEnterprisesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 px-6 bg-grid relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[120px]" aria-hidden />
        <div className="max-w-[1400px] mx-auto relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-4 py-2 rounded-full mb-6">
            For Enterprise Teams
          </span>
          <h1 className="font-display font-black text-5xl lg:text-7xl leading-tight mb-6 max-w-3xl">
            Your systems work
            <br />
            <span className="text-gradient">in isolation.</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mb-10">
            You have systems. They don&apos;t integrate. Your team spends more time moving data
            between tools than doing the work those tools were supposed to enable.
            That&apos;s a systems problem, not a headcount problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/start?segment=enterprise"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
            >
              Schedule a technical discovery call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-dark-border hover:border-brand-orange/40 text-text-secondary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-px"
            >
              Review our systems
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-bold text-3xl mb-10">
            We recognise these patterns:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAIN_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-dark border border-dark-border rounded-xl p-5">
                <CheckCircle2 size={16} className="text-brand-orange mt-0.5 shrink-0" />
                <p className="text-text-secondary text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-black text-3xl lg:text-4xl mb-3">
            What we build for enterprise teams
          </h2>
          <p className="text-text-secondary mb-12 text-lg">
            We don&apos;t replace your stack. We make it coherent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <span className="text-3xl block mb-3">{cap.icon}</span>
                <h3 className="font-display font-bold text-lg text-white mb-2">{cap.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl mb-4">
            Ready for a <span className="text-gradient">technical conversation?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            The discovery call is 30 minutes with someone who speaks both systems architecture
            and business operations. No sales pitch.
          </p>
          <Link
            href="/start?segment=enterprise"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
          >
            Book the call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
