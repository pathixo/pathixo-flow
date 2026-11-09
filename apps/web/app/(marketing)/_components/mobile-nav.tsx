'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ArrowRight } from 'lucide-react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@pathixo/ui';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Channels', href: '#channels' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'How we work', href: '#reliability' },
  { label: 'Contact', href: '#cta' },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#25272B] bg-[#101113] text-[#A0A2A8] hover:text-white transition-colors"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </DrawerTrigger>
        <DrawerContent side="right" className="bg-[#08090A] border-[#25272B] p-6 flex flex-col justify-between">
          <div>
            <DrawerHeader className="p-0 pb-6 border-b border-[#25272B]">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-bold text-xs tracking-tight">
                  F
                </div>
                <DrawerTitle className="text-sm font-semibold tracking-tight text-white">
                  Flow <span className="text-[#747780] font-normal text-xs">by Pathixo</span>
                </DrawerTitle>
              </div>
            </DrawerHeader>

            <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[#A0A2A8] hover:text-white transition-colors py-2 border-b border-[#1E2024]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#25272B] flex flex-col gap-3">
            <Link href="/login" onClick={() => setOpen(false)} className="w-full">
              <button
                type="button"
                className="w-full h-10 rounded-md border border-[#25272B] bg-[#101113] text-white text-sm font-medium hover:bg-[#1B1D21] transition-colors"
              >
                Log in
              </button>
            </Link>
            <a href="#cta" onClick={() => setOpen(false)} className="w-full">
              <button
                type="button"
                className="w-full h-10 rounded-md bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                Request an assessment
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
