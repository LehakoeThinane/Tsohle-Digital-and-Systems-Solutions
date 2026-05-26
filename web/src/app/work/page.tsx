import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, Clock, TrendingDown } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Case studies and production systems from Tsohle Digital — built for real operational problems in South African businesses.',
};

/* ── Case study data ─────────────────────────────────────────────── */

const BEFORE = [
  {
    icon: <Clock size={16} className="text-red-400" />,
    label: 'Monthly reconciliation time',
    value: '15–20 hours',
    sub: 'Accountant at R850/hour',
  },
  {
    icon: <AlertTriangle size={16} className="text-red-400" />,
    label: 'Error discovery lag',
    value: '2–4 weeks',
    sub: 'After month-end close',
  },
  {
    icon: <TrendingDown size={16} className="text-red-400" />,
    label: 'Annual labour cost',
    value: 'R198,000',
    sub: 'Labour + error correction',
  },
  {
    icon: <AlertTriangle size={16} className="text-red-400" />,
    label: 'SARB audit exposure',
    value: 'High risk',
    sub: 'No automated audit trail',
  },
];

const AFTER = [
  {
    icon: <CheckCircle2 size={16} className="text-green-400" />,
    label: 'Monthly reconciliation time',
    value: '12 minutes',
    sub: '97% auto-match rate',
  },
  {
    icon: <CheckCircle2 size={16} className="text-green-400" />,
    label: 'Error detection',
    value: 'Real-time',
    sub: 'Anomaly alert within 90 seconds',
  },
  {
    icon: <CheckCircle2 size={16} className="text-green-400" />,
    label: 'Annual system cost',
    value: 'R102,000',
    sub: 'Full retainer + monitoring',
  },
  {
    icon: <CheckCircle2 size={16} className="text-green-400" />,
    label: 'SARB compliance',
    value: 'Passed',
    sub: 'First-attempt audit clearance',
  },
];

const STACK = [
  { label: 'NestJS', note: 'Reconciliation engine' },
  { label: 'PostgreSQL', note: 'Immutable transaction ledger' },
  { label: 'Redis', note: 'Job queue & deduplication cache' },
  { label: 'React + TypeScript', note: 'Exception review dashboard' },
  { label: 'Cloudflare Workers', note: 'Edge deployment — zero cold starts' },
  { label: 'Bank webhooks', note: 'FNB · Standard Bank · Absa' },
];

const TIMELINE = [
  {
    phase: 'Discovery',
    duration: '1 week',
    work: 'Mapped every manual step in the existing reconciliation process. Interviewed two accountants and the CFO. Identified 6 distinct failure modes.',
  },
  {
    phase: 'Architecture',
    duration: '1 week',
    work: 'Designed the matching engine rules, exception triage workflow, and SARB-compliant audit trail schema. Agreed on a 97% auto-match target.',
  },
  {
    phase: 'Build',
    duration: '6 weeks',
    work: 'Built the reconciliation engine, bank webhook integrations, exception dashboard, and alert system. 431 automated tests written.',
  },
  {
    phase: 'Parallel run',
    duration: '3 weeks',
    work: 'System ran alongside the manual process. Discrepancies investigated. Engine accuracy tuned to 99.1% on live data.',
  },
  {
    phase: 'Handover',
    duration: '1 week',
    work: 'Full documentation delivered. Finance team trained. Manual process decommissioned. System entered monthly retainer.',
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24 pb-16">

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-grid relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-orange/8 blur-[120px]" aria-hidden />
        <div className="max-w-[1400px] mx-auto relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            Systems We&apos;ve Built
          </p>
          <h1 className="font-display font-black text-5xl lg:text-6xl leading-tight mb-6 max-w-2xl">
            Not a portfolio.
            <br />
            <span className="text-gradient">Proof of work.</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl leading-relaxed">
            Every system below was built to solve a specific operational problem in a real
            South African business context — not as a concept piece or demo.
          </p>
        </div>
      </section>

      {/* ── Featured case study ──────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">

          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">
              Case Study
            </span>
            <span className="text-xs text-text-muted">Fintech · Johannesburg · 2024</span>
          </div>

          {/* Hero card */}
          <div className="bg-dark border border-dark-border rounded-2xl overflow-hidden mb-10">
            <div className="bg-gradient-to-br from-brand-orange/15 via-brand-gold/8 to-transparent p-10 md:p-14">
              <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-3">
                Payment Reconciliation Infrastructure
              </p>
              <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 max-w-3xl">
                15 hours of manual work every month.
                <br />
                <span className="text-gradient">We made it 12 minutes.</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
                A Johannesburg fintech was reconciling three bank accounts manually — FNB, Standard Bank,
                and Absa — every month. Two accountants. Spreadsheets. Emails. A process that existed
                because no one had time to fix it. We fixed it in 11 weeks.
              </p>
            </div>
          </div>

          {/* Context */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-dark border border-dark-border rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Client</p>
              <p className="text-white font-semibold">Payment aggregator</p>
              <p className="text-text-secondary text-sm">45 employees · R120M annual turnover</p>
            </div>
            <div className="bg-dark border border-dark-border rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Problem</p>
              <p className="text-white font-semibold">Manual reconciliation</p>
              <p className="text-text-secondary text-sm">Single point of failure — one person held the process</p>
            </div>
            <div className="bg-dark border border-dark-border rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Investment</p>
              <p className="text-white font-semibold">R280,000 build</p>
              <p className="text-text-secondary text-sm">R8,500/month retainer after handover</p>
            </div>
          </div>

          {/* Before / After */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {/* Before */}
            <div className="bg-dark border border-red-500/20 rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-6">Before</p>
              <div className="space-y-5">
                {BEFORE.map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{m.icon}</div>
                    <div>
                      <p className="text-text-muted text-xs mb-0.5">{m.label}</p>
                      <p className="font-display font-bold text-lg text-white">{m.value}</p>
                      <p className="text-text-secondary text-xs">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-dark border border-green-500/20 rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-6">After</p>
              <div className="space-y-5">
                {AFTER.map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{m.icon}</div>
                    <div>
                      <p className="text-text-muted text-xs mb-0.5">{m.label}</p>
                      <p className="font-display font-bold text-lg text-white">{m.value}</p>
                      <p className="text-text-secondary text-xs">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROI callout */}
          <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-8 mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-display font-black text-4xl text-brand-orange mb-1">R96,000</p>
                <p className="text-text-secondary text-sm">Net annual saving from year 2</p>
              </div>
              <div>
                <p className="font-display font-black text-4xl text-brand-orange mb-1">179 hrs</p>
                <p className="text-text-secondary text-sm">Returned to the finance team per year</p>
              </div>
              <div>
                <p className="font-display font-black text-4xl text-brand-orange mb-1">99.1%</p>
                <p className="text-text-secondary text-sm">Auto-match accuracy on live data</p>
              </div>
            </div>
          </div>

          {/* The problem in detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">What was actually breaking</h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  The client processed thousands of transactions monthly across three banks. Every month,
                  a senior accountant manually exported CSV files from each banking portal, merged them in Excel,
                  and matched them against an internal transaction log — by hand.
                </p>
                <p>
                  Errors weren't caught until the following month's reconciliation. By then, the trail was cold.
                  The client had been fined twice by the SARB for incomplete audit documentation.
                </p>
                <p className="text-white font-medium">
                  The deeper risk: only one person understood the process. If she left, the company had no
                  reconciliation capability at all.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">What we built</h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  A NestJS reconciliation engine with direct webhook integrations into all three banks.
                  Transactions are ingested in real-time, deduplicated via Redis, and matched against the
                  internal ledger using a deterministic rules engine.
                </p>
                <p>
                  Unmatched items surface in an exception dashboard for human review — nothing is silently
                  discarded. Every decision is written to an immutable PostgreSQL audit log, SARB-formatted.
                </p>
                <p className="text-white font-medium">
                  The accountant now spends 12 minutes a month reviewing exceptions. The system does
                  everything else.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <h3 className="font-display font-bold text-2xl text-white mb-6">How it was delivered</h3>
            <div className="space-y-3">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.phase}
                  className="grid grid-cols-[2rem_7rem_1fr] md:grid-cols-[2rem_9rem_1fr] items-start gap-4 bg-dark border border-dark-border rounded-xl p-5"
                >
                  <span className="font-display font-black text-sm text-brand-orange/40 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.phase}</p>
                    <p className="text-brand-orange text-xs">{t.duration}</p>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{t.work}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="pt-10 border-t border-dark-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
              Technology used
            </p>
            <div className="flex flex-wrap gap-3">
              {STACK.map((s) => (
                <div
                  key={s.label}
                  className="bg-dark border border-dark-border rounded-lg px-4 py-2.5 flex flex-col"
                >
                  <span className="text-white text-sm font-semibold">{s.label}</span>
                  <span className="text-text-muted text-xs">{s.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products / packaged systems ──────────────────────── */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
            Packaged Systems
          </p>
          <h2 className="font-display font-black text-3xl lg:text-4xl mb-3">
            Production-ready platforms
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl">
            Beyond custom engagements, we maintain production systems available as
            licensed or white-label deployments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.slug}
                className="bg-dark-card border border-dark-border rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{product.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{product.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl mb-4">
            Have a system you need built?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Start with a free 30-minute discovery call. We&apos;ll tell you honestly
            whether we&apos;re the right fit — and if not, who is.
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
