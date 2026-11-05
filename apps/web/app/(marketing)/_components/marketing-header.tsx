import * as React from 'react';
import Link from 'next/link';
import { Layers } from 'lucide-react';
import { Button } from '@pathixo/ui';
import { MobileNav } from './mobile-nav';

const NAV_LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Channels', href: '#channels' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Reliability', href: '#reliability' },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-[#08090A]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-7 w-7 items-center justify-center rounded border border-brand/40 bg-brand/10 text-brand transition-colors group-hover:border-brand">
            <Layers className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            Pathixo Flow
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Nav */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-xs font-medium text-text-secondary hover:text-text-primary transition-colors px-3 py-1.5"
          >
            Sign In
          </Link>
          <a href="#cta" className="hidden sm:inline-flex">
            <Button variant="primary" size="sm" className="h-8 px-3 text-xs font-medium">
              Get Started
            </Button>
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
