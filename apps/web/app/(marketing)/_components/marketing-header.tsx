import * as React from 'react';
import Link from 'next/link';
import { MarketingContainer } from './marketing-container';
import { MobileNav } from './mobile-nav';

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E2024] bg-[#08090A]/90 backdrop-blur-md">
      <MarketingContainer className="h-16 flex items-center justify-between">
        {/* Brand Wordmark: "Flow by Pathixo" */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-bold text-xs tracking-tight">
            F
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold tracking-tight text-white">
              Flow
            </span>
            <span className="text-[11px] font-medium text-[#747780]">
              by Pathixo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Desktop Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[#A0A2A8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Nav */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-xs font-medium text-[#A0A2A8] hover:text-white transition-colors px-2 py-1.5"
          >
            Log in
          </Link>
          <a href="#cta" className="hidden sm:inline-flex">
            <button
              type="button"
              className="h-8 px-3.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
            >
              Get started
            </button>
          </a>
          <MobileNav />
        </div>
      </MarketingContainer>
    </header>
  );
}
