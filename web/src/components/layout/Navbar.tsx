'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'bg-dark/95 backdrop-blur-xl border-b border-dark-border shadow-card'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group shrink-0">
          <span className="font-display font-black text-xl text-brand-orange group-hover:text-brand-gold transition-colors">
            Tsohle
          </span>
          <span className="font-display font-semibold text-sm text-text-muted hidden sm:inline tracking-wide">
            Digital
          </span>
        </Link>

        {/* Desktop nav — all items are real page links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                isActive(link.href)
                  ? 'text-brand-orange'
                  : 'text-text-secondary hover:text-white hover:bg-white/5',
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/start"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-brand group"
          >
            Book a Call
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-card border-b border-dark-border"
          >
            <nav className="flex flex-col divide-y divide-dark-border">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between px-6 py-4 font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-brand-orange bg-brand-orange/5'
                      : 'text-text-secondary hover:text-white hover:bg-white/3',
                  )}
                >
                  {link.label}
                  <ArrowRight size={16} className="opacity-40" />
                </Link>
              ))}
              <div className="px-6 py-4">
                <Link
                  href="/start"
                  className="flex items-center justify-center gap-2 bg-brand-orange text-white text-sm font-bold px-5 py-3 rounded-xl w-full"
                >
                  Book a Discovery Call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
