import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { MarketingContainer } from './marketing-container';
import { DashboardPreview } from './dashboard-preview';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#08090A]">
      <MarketingContainer>
        {/* Left-Aligned Editorial Headline */}
        <div className="max-w-3xl space-y-5 text-left mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
            Automate the work.
            <br />
            <span className="text-[#A0A2A8]">Stay in control.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#A0A2A8] max-w-2xl leading-relaxed">
            A unified automation platform for managing WhatsApp, email, and intelligent workflows.
            Built to simplify how businesses connect, communicate, and operate.
          </p>

          {/* Dual Action Buttons (Left Aligned) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a href="#cta">
              <button
                type="button"
                className="w-full sm:w-auto h-11 px-6 rounded-lg bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <a href="#capabilities">
              <button
                type="button"
                className="w-full sm:w-auto h-11 px-6 rounded-lg border border-[#25272B] bg-[#121418] text-white text-sm font-medium hover:bg-[#1B1D21] transition-colors"
              >
                Explore the platform
              </button>
            </a>
          </div>
        </div>
      </MarketingContainer>

      {/* Full-bleed 3D Perspective Dashboard Preview with generous top breathing room */}
      <MarketingContainer bleed className="mt-4 md:mt-8">
        <DashboardPreview />
      </MarketingContainer>
    </section>
  );
}
