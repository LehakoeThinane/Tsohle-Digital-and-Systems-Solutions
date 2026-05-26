import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SystemLifecycle } from '@/components/sections/SystemLifecycle';

export const metadata: Metadata = {
  title: 'Engineering Philosophy',
  description:
    'We don\'t build projects. We architect infrastructure. Six principles that shape every system we design, build, and maintain.',
};

const PRINCIPLES = [
  {
    number: '01',
    title: 'Build Less. Integrate Better.',
    body: 'Every component you add is a component that can fail, require updates, introduce vulnerabilities, and demand maintenance. We ask what can be removed, integrated, or standardised before we ask what should be built. Restraint is not a limitation — it is a design philosophy.',
    practice: 'We regularly recommend against building something custom when an existing integration handles it reliably. Smaller systems fail less.',
  },
  {
    number: '02',
    title: 'Operational Clarity > Technical Novelty',
    body: 'We don\'t choose technologies because they\'re interesting. We choose them because they\'re observable, maintainable, and recoverable under operational pressure. Every experienced technical leader eventually learns the same lesson: clever systems become expensive systems. We skip the curriculum.',
    practice: 'PostgreSQL over trendy graph databases. NestJS over microservice sprawl. Proven patterns over cutting-edge experiments that require a specialist to debug at 2am.',
  },
  {
    number: '03',
    title: 'Systems Degrade. Plan For It.',
    body: 'Deployment is not the finish line. Dependencies become vulnerabilities. APIs change without warning. Databases need tuning as data grows. Teams turn over and institutional knowledge evaporates. We design maintenance posture, monitoring architecture, and upgrade pathways from day one — not as bolt-ons after something breaks.',
    practice: 'Every system we ship includes monitoring, alerting, a dependency review schedule, and a documented upgrade path. These are not optional extras.',
  },
  {
    number: '04',
    title: 'Boring Technology Is Commercially Powerful',
    body: 'PostgreSQL. Redis. NestJS. TypeScript. These are not concessions. They are institutional leverage. Your team can hire for them. Your incidents have Stack Overflow answers. Your next engineering lead will have five years of hands-on experience with them. Boring technology outlives clever technology by a decade, and it doesn\'t require a specialist to keep it running.',
    practice: 'We use the most boring technology that solves the problem correctly. Boring is not a compliment we withhold — it\'s an engineering goal.',
  },
  {
    number: '05',
    title: 'Transparency Is an Engineering Discipline',
    body: 'Decision logs. Architecture trade-offs. Postmortems. Operational evolution timelines. We document what most companies hide because complexity is only manageable when it\'s visible. Clients who understand their own systems make better decisions about their systems. That benefits everyone in the relationship.',
    practice: 'Every engagement includes a full Architecture Decision Record. Every production incident produces a postmortem. Clients receive these as standard, not by request.',
  },
  {
    number: '06',
    title: 'Deployment Is Not the Finish Line',
    body: 'Most development firms disappear at launch. Three months later a dependency is vulnerable. Six months later a critical feature is unmaintained. We design for operational continuity — monitoring, alerting, retainer access, and the institutional knowledge to evolve the system as the business evolves. The handover is the beginning, not the end.',
    practice: 'Our engagement model deliberately converts to a monthly retainer because systems require ongoing engineering, not periodic emergency fixes from a team who\'ve forgotten the codebase.',
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 px-6 bg-grid relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-orange/6 blur-[140px]" aria-hidden />
        <div className="max-w-[1400px] mx-auto relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
            Engineering Philosophy
          </p>
          <h1 className="font-display font-black text-5xl lg:text-7xl leading-[1.02] mb-8 max-w-4xl">
            We don&apos;t build projects.
            <br />
            <span className="text-gradient">We architect infrastructure.</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
            That distinction changes everything — the pricing, the timeline, the engagement model,
            the type of client we work with, and the type of work we refuse.
            These six principles are why.
          </p>
        </div>
      </section>

      {/* ── Axis statement ────────────────────────────────────── */}
      <section className="py-16 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">
          <blockquote className="border-l-4 border-brand-orange pl-8 max-w-3xl">
            <p className="font-display font-black text-2xl lg:text-3xl text-white leading-snug mb-4">
              &ldquo;Most company websites scream: please hire us.
              Ours says: we understand system complexity.
              That&apos;s rare. And it&apos;s the point.&rdquo;
            </p>
            <footer className="text-text-muted text-sm">
              — On positioning Tsohle in the SA market
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Principles ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <h2 className="font-display font-black text-3xl lg:text-4xl mb-3">
              Six principles. Non-negotiable.
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              These are not values statements written for a website. They are operating constraints
              that shape every architecture decision, technology choice, and engagement we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="bg-dark-card border border-dark-border hover:border-brand-orange/30 rounded-2xl p-8 transition-colors"
              >
                {/* Number */}
                <span className="font-display font-black text-5xl text-brand-orange/15 block mb-5 leading-none">
                  {p.number}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  {p.title}
                </h3>

                {/* Body */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {p.body}
                </p>

                {/* In practice */}
                <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-xl px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-1.5">
                    In practice
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {p.practice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Lifecycle ──────────────────────────────────── */}
      <SystemLifecycle />

      {/* ── What this means for clients ───────────────────────── */}
      <section className="py-24 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display font-black text-3xl lg:text-4xl mb-6">
                What this means
                <br />
                <span className="text-gradient">for you, practically</span>
              </h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  You get a system you own completely — code, data, infrastructure, documentation.
                  No vendor lock-in. No proprietary black box. If you walk away, you keep everything.
                </p>
                <p>
                  You get a team that says no when they should. If a discovery call reveals
                  we&apos;re not the right fit, we say so and point you elsewhere. Recommending
                  the wrong solution to a paying client helps no one.
                </p>
                <p className="text-white font-medium">
                  And you get a system built to outlast the engagement — not one that requires us
                  to stay in order to keep working.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Architecture Decision Record', note: 'Delivered before build begins' },
                { label: '80%+ test coverage', note: 'Hard gate on every production system' },
                { label: 'Full documentation', note: 'Handed over at close, not on request' },
                { label: 'Monitoring & alerting', note: 'Live from deployment day' },
                { label: 'No vendor lock-in', note: 'Code, infra, and data — all yours' },
                { label: 'Postmortem on every incident', note: 'Transparency is non-negotiable' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-dark border border-dark-border rounded-xl px-5 py-4"
                >
                  <span className="text-white font-medium text-sm">{item.label}</span>
                  <span className="text-text-muted text-xs">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-dark border-t border-dark-border">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest font-semibold mb-1">
              Philosophy applied
            </p>
            <p className="text-white font-semibold text-lg">
              Read how these principles shaped a real SA fintech system.
            </p>
            <p className="text-text-secondary text-sm">
              15 hours of manual reconciliation → 12 minutes. R96,000 net annual saving.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-dark-border hover:border-brand-orange/40 text-text-secondary hover:text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-px text-sm"
            >
              View case study
            </Link>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group text-sm"
            >
              Book a call
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
