import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { DashboardPreview } from './dashboard-preview';

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] text-white max-w-4xl leading-[1.08]">
          Automate the work.
          <br />
          <span className="text-[#A0A2A8]">Stay in control.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-[#A0A2A8] max-w-2xl leading-relaxed">
          A unified automation platform for managing WhatsApp, email, and intelligent workflows.
          Built to simplify how businesses connect, communicate, and operate.
        </p>

        {/* Dual Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <a href="#cta" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-11 px-6 rounded-lg bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
          <a href="#capabilities" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-11 px-6 rounded-lg border border-[#25272B] bg-[#121418] text-white text-sm font-medium hover:bg-[#1B1D21] transition-colors"
            >
              Explore the platform
            </button>
          </a>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="mt-14 w-full">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
