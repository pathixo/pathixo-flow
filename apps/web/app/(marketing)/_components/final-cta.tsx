import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { Button } from '@pathixo/ui';

export function FinalCta() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-[#08090A] relative overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-[100px] rounded-full bg-brand"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="rounded-2xl border border-border/80 bg-surface/50 p-8 sm:p-14 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-surface text-xs text-text-secondary mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            <span>Production Architecture Ready</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-text-primary leading-[1.15]">
            Make your workflows work for you.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Deploy high-reliability WhatsApp and email automations with guaranteed financial
            attribution, persistent idempotency, and zero duplicate side effects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/login" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 px-6 h-11 text-sm font-medium">
                Launch Flow Workspace
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://github.com/pathixo/pathixo-flow/blob/main/docs/TECHNICAL_SPECIFICATION.md"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 h-11 text-sm font-medium border-border/80 hover:bg-surface"
              >
                <FileText className="h-4 w-4 text-text-muted" />
                Technical Spec
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-text-muted">
            <span>&bull; Node.js 22 LTS Runtime</span>
            <span>&bull; Meta Cloud API Verified</span>
            <span>&bull; P0 Financial Controls</span>
          </div>
        </div>
      </div>
    </section>
  );
}
