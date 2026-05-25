'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SITE } from '@/lib/constants';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbRef.current) return;
    gsap.to(orbRef.current.querySelectorAll('.orb'), {
      y: 'random(-30, 30)',
      x: 'random(-20, 20)',
      duration: 'random(5, 9)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 1.5,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-grid">
      {/* Ambient orbs */}
      <div ref={orbRef} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="orb absolute top-[15%] left-[10%] w-[480px] h-[480px] rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="orb absolute bottom-[10%] right-[8%] w-[560px] h-[560px] rounded-full bg-brand-blue/15 blur-[140px]" />
        <div className="orb absolute top-[50%] left-[50%] -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-brand-gold/8 blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-24">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
            </span>
            Digital &amp; Systems Solutions for South African Businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6"
          >
            Your business is running
            <br />
            <span className="text-gradient">on memory.</span>
            <br />
            <span className="text-text-secondary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
              That&apos;s why things keep breaking.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          >
            When operations live in someone&apos;s head, a WhatsApp group, or a spreadsheet
            only one person understands — growth doesn&apos;t fix it. It multiplies it.
            <br className="hidden sm:block" />
            <span className="text-white font-medium mt-2 block">
              We engineer the systems that make your business run without you having to hold it together.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-brand group"
            >
              I recognise this — let&apos;s talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border border-dark-border hover:border-brand-orange/40 text-text-secondary hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
            >
              See what we&apos;ve built
            </Link>
          </motion.div>

          {/* Segment fork */}
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 max-w-2xl">
            <Link
              href="/for-smmEs"
              className="group bg-dark-card border border-dark-border hover:border-brand-orange/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2">SMME</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                10–150 people. You&apos;ve outgrown your tools. Manual processes are slowing everything down.
              </p>
              <p className="mt-3 text-brand-orange text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                This is my situation <ArrowRight size={14} />
              </p>
            </Link>
            <Link
              href="/for-enterprises"
              className="group bg-dark-card border border-dark-border hover:border-brand-orange/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">ENTERPRISE</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                You have systems already. They don&apos;t talk to each other. Your team maintains, not builds.
              </p>
              <p className="mt-3 text-brand-orange text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                This is my situation <ArrowRight size={14} />
              </p>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
