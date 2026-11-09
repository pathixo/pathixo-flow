import * as React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export function FinalCta() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#08090A] border-t border-[#1E2024] text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white">
          Ready to automate your workflows?
        </h2>

        <p className="text-sm sm:text-base text-[#A0A2A8] max-w-xl mx-auto leading-relaxed">
          Our engineering team scopes, configures, and operates custom WhatsApp and email
          workflows for your business with zero tenant crossover and transparent usage reporting.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:contact@pathixo.com?subject=Automation%20Assessment%20Request"
            className="w-full sm:w-auto"
          >
            <button
              type="button"
              className="w-full sm:w-auto h-11 px-6 rounded-lg bg-white text-black text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Request an assessment
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
          <a
            href="mailto:contact@pathixo.com?subject=Technical%20Inquiry"
            className="w-full sm:w-auto"
          >
            <button
              type="button"
              className="w-full sm:w-auto h-11 px-6 rounded-lg border border-[#25272B] bg-[#121418] text-white text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-[#1B1D21] transition-colors"
            >
              <Mail className="h-4 w-4 text-[#A0A2A8]" />
              Talk to our team
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
