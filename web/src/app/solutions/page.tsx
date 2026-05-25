import type { Metadata } from 'next';
import { CapabilityCategories } from '@/components/sections/CapabilityCategories';
import { EngagementModel } from '@/components/sections/EngagementModel';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Operational automation, enterprise platforms, fintech infrastructure, AI-augmented operations, and SA compliance systems — built for South African businesses.',
};

export default function SolutionsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-28 pb-12 px-6 bg-grid">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
            What We Build
          </p>
          <h1 className="font-display font-black text-5xl lg:text-6xl leading-tight mb-4 max-w-2xl">
            Systems, not features.
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl leading-relaxed">
            We don&apos;t build tools that add to your stack. We build the operational layer that
            makes your stack coherent — and your team faster.
          </p>
        </div>
      </section>

      <CapabilityCategories />
      <EngagementModel />
      <FinalCTA />
    </>
  );
}
