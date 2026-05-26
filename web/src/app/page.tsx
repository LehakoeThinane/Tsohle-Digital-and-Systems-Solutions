import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TrustLayer } from '@/components/sections/TrustLayer';
import { AIAssistant } from '@/components/chatbot/AIAssistant';
import { SITE } from '@/lib/constants';

/* ─── Wayfinding tiles ──────────────────────────────────────── */
const PATHS = [
  {
    icon: '⚙️',
    label: 'Solutions',
    sub: 'What we build and how',
    href: '/solutions',
    accent: 'border-brand-orange/20 hover:border-brand-orange/60',
    tag: null,
  },
  {
    icon: '📂',
    label: 'Our Work',
    sub: 'Production systems we\'ve shipped',
    href: '/work',
    accent: 'border-brand-gold/20 hover:border-brand-gold/60',
    tag: null,
  },
  {
    icon: '🏢',
    label: 'For Enterprises',
    sub: 'Systems integration & automation',
    href: '/for-enterprises',
    accent: 'border-brand-blue/20 hover:border-brand-blue/60',
    tag: '150+ people',
  },
  {
    icon: '🏪',
    label: 'For SMMEs',
    sub: 'Outgrown your spreadsheets?',
    href: '/for-smmEs',
    accent: 'border-brand-orange/20 hover:border-brand-orange/60',
    tag: '10–150 people',
  },
  {
    icon: '👥',
    label: 'About Us',
    sub: 'Who we are and why we started',
    href: '/about',
    accent: 'border-white/10 hover:border-white/30',
    tag: null,
  },
  {
    icon: '📅',
    label: 'Start a Project',
    sub: 'Book a free discovery call',
    href: '/start',
    accent: 'border-brand-orange/40 hover:border-brand-orange bg-brand-orange/5',
    tag: 'Free · 30 min',
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center pt-16 overflow-hidden bg-grid">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-brand-orange/8 blur-[130px]" />
          <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] rounded-full bg-brand-blue/12 blur-[120px]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            South African Systems Engineering
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-4xl">
            Your business is running
            <br />
            <span className="text-gradient">on memory.</span>
          </h1>

          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mb-10">
            We build the operational systems that replace spreadsheets, WhatsApp chains, and tribal
            knowledge — so your business runs without you holding it together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand group"
            >
              Book a free discovery call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-dark-border hover:border-brand-orange/40 text-text-secondary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-px"
            >
              See what we&apos;ve built
            </Link>
          </div>
        </div>
      </section>

      {/* ── Wayfinding grid ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
              Choose your path
            </p>
            <h2 className="font-display font-black text-3xl lg:text-4xl">
              What are you here to solve?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className={`group relative flex flex-col justify-between bg-dark border rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${path.accent}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{path.icon}</span>
                    {path.tag && (
                      <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full">
                        {path.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">{path.label}</h3>
                  <p className="text-text-secondary text-sm">{path.sub}</p>
                </div>
                <div className="flex items-center gap-1 mt-6 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto strip ──────────────────────────────────── */}
      <section className="py-16 px-6 bg-dark border-y border-dark-border">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-display font-black text-2xl lg:text-3xl text-white leading-snug">
              We don&apos;t build projects.
              <span className="text-gradient"> We architect infrastructure.</span>
            </p>
            <p className="text-text-secondary mt-3 text-base leading-relaxed">
              That distinction changes the pricing, the timeline, the engagement model, and the
              type of work we refuse. Six engineering principles explain exactly why.
            </p>
          </div>
          <Link
            href="/philosophy"
            className="inline-flex items-center gap-2 border border-brand-orange/40 hover:border-brand-orange text-brand-orange font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-px text-sm shrink-0 group"
          >
            Read our philosophy
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <TrustLayer />

      {/* ── Minimal closing CTA ─────────────────────────────── */}
      <section className="py-16 px-6 bg-dark text-center">
        <p className="text-text-muted text-sm mb-2">Still not sure where to start?</p>
        <p className="text-text-secondary mb-6">
          Email us at{' '}
          <a href={`mailto:${SITE.email}`} className="text-brand-orange hover:text-brand-gold transition-colors font-medium">
            {SITE.email}
          </a>{' '}
          and describe your problem. We&apos;ll point you in the right direction.
        </p>
      </section>

      <AIAssistant />
    </>
  );
}
