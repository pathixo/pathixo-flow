import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalCta() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#08090A] border-t border-[#1E2024] text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white">
          Ready to automate with Flow?
        </h2>

        <p className="text-sm sm:text-base text-[#A0A2A8] max-w-xl mx-auto leading-relaxed">
          Bring your communication, workflows, and operations into one platform.
        </p>

        <div className="pt-2">
          <Link href="/login">
            <button
              type="button"
              className="h-11 px-6 rounded-lg bg-white text-black text-sm font-semibold inline-flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
