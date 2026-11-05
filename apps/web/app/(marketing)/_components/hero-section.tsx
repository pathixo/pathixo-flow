import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@pathixo/ui';
import { ProductPreviewSimulator } from '@/components/preview';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-border/40">
      {/* Subtle top ambient glow for depth without neon slop */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] opacity-15 blur-[120px] rounded-full bg-brand"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-surface/80 text-xs text-text-secondary mb-8 shadow-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="font-medium text-text-primary">Pathixo Flow v2.0</span>
          <span className="text-text-muted">|</span>
          <span className="text-text-secondary">High-Reliability Automation Engine</span>
          <ChevronRight className="h-3 w-3 text-text-muted" />
        </div>

        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] text-text-primary max-w-4xl leading-[1.08]">
          Automate the work.
          <br />
          <span className="text-text-secondary">Stay in control.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          A unified automation engine for managing WhatsApp, email, and intelligent business
          workflows. Engineered for repeatable client delivery with persistent idempotency and
          P0 financial usage metering.
        </p>

        {/* Dual Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a href="#cta" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 px-6 h-11 text-sm font-medium">
              Get Started with Flow
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#capabilities" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 text-sm font-medium border-border/80 hover:bg-surface/60">
              Explore Architecture
            </Button>
          </a>
        </div>

        {/* Live Interface Preview Simulator */}
        <div className="mt-16 w-full max-w-5xl text-left">
          <div className="flex items-center justify-between pb-3 px-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              <span>Live Synthetic Pipeline Monitor</span>
            </div>
            <div className="text-xs font-mono text-text-muted hidden sm:block">
              Zero Raster Images &bull; 100% Native React DOM/SVG
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-surface/50 shadow-2xl p-1.5 sm:p-2">
            <ProductPreviewSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
