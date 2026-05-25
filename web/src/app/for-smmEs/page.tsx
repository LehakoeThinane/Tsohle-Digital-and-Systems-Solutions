import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Systems for SMMEs',
  description: 'You\'ve outgrown how you operate. Your tools haven\'t caught up. Tsohle builds the operational systems that replace spreadsheets, WhatsApp chains, and manual processes.',
};

const BEFORE_AFTER = [
  {
    before: 'Sales leads tracked across WhatsApp, email, and a spreadsheet no-one trusts',
    after: 'CRM with pipeline stages, automated follow-ups, and commission tracking in one view',
  },
  {
    before: 'Payroll calculated manually every month with PAYE errors caught by SARS',
    after: 'Automated PAYE, UIF, and net salary calculation — SARS-aligned, PDF payslips generated',
  },
  {
    before: 'Onboarding a new staff member means 2 days of WhatsApp messages and manual access provisioning',
    after: 'Digital onboarding workflow: contract, access, training checklist — automated from day one',
  },
  {
    before: '"Reports" means someone spending a day in Excel pulling from 4 places',
    after: 'Live operations dashboard — sales, ops, finance — updating in real time',
  },
];

export default function ForSMMEsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 px-6 bg-grid relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[120px]" aria-hidden />
        <div className="max-w-[1400px] mx-auto relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 rounded-full mb-6">
            For SMMEs
          </span>
          <h1 className="font-display font-black text-5xl lg:text-7xl leading-tight mb-6 max-w-3xl">
            You&apos;ve outgrown
            <br />
            <span className="text-gradient">how you operate.</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mb-10">
            Your tools haven&apos;t caught up. You&apos;re running a 50-person operation on the same
            WhatsApp groups and Excel sheets you used when there were 5 of you.
            The cracks are getting expensive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/start?segment=smme"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
            >
              Get a free workflow audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-black text-3xl lg:text-4xl mb-4">
            Before → After
          </h2>
          <p className="text-text-secondary text-lg mb-12">
            These are real operational problems we&apos;ve solved for businesses like yours.
          </p>
          <div className="space-y-4">
            {BEFORE_AFTER.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-border rounded-2xl overflow-hidden">
                <div className="bg-dark p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Before</p>
                  <p className="text-text-secondary text-sm leading-relaxed italic">&quot;{item.before}&quot;</p>
                </div>
                <div className="bg-dark-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2">After</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-brand-orange mt-0.5 shrink-0" />
                    <p className="text-white text-sm leading-relaxed font-medium">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing clarity */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-black text-4xl mb-4">
                What does it cost?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                SMME projects typically range from <strong className="text-white">R18,000 to R65,000</strong> depending
                on scope and complexity. We give you a fixed price — no hourly billing, no scope creep surprises.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                The discovery call is free. If we can&apos;t help, we&apos;ll tell you that too — and point you
                toward someone who can.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-4">
              {[
                { range: 'R18k – R30k', scope: 'Single workflow or tool (e.g. PAYE calculator, lead tracker)' },
                { range: 'R30k – R50k', scope: 'Multi-feature operational system (e.g. CRM + invoicing)' },
                { range: 'R50k – R65k', scope: 'Full platform build (e.g. integrated CRM/ERP or HR system)' },
                { range: 'Monthly SaaS', scope: 'BiznizFlowPilot, LendFlow — contact for subscription rates' },
              ].map((tier) => (
                <div key={tier.range} className="flex gap-4 items-start">
                  <span className="font-display font-bold text-brand-orange text-sm w-28 shrink-0">{tier.range}</span>
                  <p className="text-text-secondary text-sm">{tier.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-dark-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl mb-4">
            Start with a <span className="text-gradient">free workflow audit.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            We map your current workflows, identify the exact points of failure,
            and tell you what a system fix would look like — at no cost.
          </p>
          <Link
            href="/start?segment=smme"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
          >
            Request a free audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
