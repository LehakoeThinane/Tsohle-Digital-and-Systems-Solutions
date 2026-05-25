import Link from 'next/link';
import { SITE, PRODUCTS } from '@/lib/constants';

const FOOTER_SYSTEMS = [
  { label: 'Operational Automation', href: '/solutions#automation' },
  { label: 'Enterprise Platforms',   href: '/solutions#enterprise' },
  { label: 'Fintech Infrastructure', href: '/solutions#fintech' },
  { label: 'AI Operations',          href: '/solutions#ai' },
];

const FOOTER_COMPANY = [
  { label: 'About',           href: '/#about' },
  { label: 'Work',            href: '/work' },
  { label: 'For Enterprises', href: '/for-enterprises' },
  { label: 'For SMMEs',       href: '/for-smmEs' },
  { label: 'Book a Call',     href: '/start' },
];

export function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-display font-black text-2xl text-brand-orange">Tsohle</span>
              <span className="font-display font-semibold text-text-secondary">Digital</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              We engineer operational systems that eliminate the hidden cost of manual work — built for South African businesses.
            </p>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-brand-orange hover:text-brand-gold transition-colors"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={p.href}
                    className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Systems
            </h3>
            <ul className="space-y-3">
              {FOOTER_SYSTEMS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Tsohle Digital and Systems Solutions. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Engineering systems that eliminate operational inefficiencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
