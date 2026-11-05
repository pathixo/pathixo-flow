'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ArrowRight, Layers } from 'lucide-react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  Button,
} from '@pathixo/ui';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Channels', href: '#channels' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Reliability & Security', href: '#reliability' },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border/80 bg-surface/50 text-text-secondary hover:text-text-primary hover:bg-surface-elevated/70 transition-colors focus:outline-none focus:ring-1 focus:ring-brand"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </DrawerTrigger>
        <DrawerContent side="right" className="bg-[#0D0F12] border-border/60 p-6 flex flex-col justify-between">
          <div>
            <DrawerHeader className="p-0 pb-6 border-b border-border/60">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand">
                  <Layers className="h-4 w-4" />
                </div>
                <DrawerTitle className="text-base font-semibold tracking-tight text-text-primary">
                  Pathixo Flow
                </DrawerTitle>
              </div>
            </DrawerHeader>

            <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border/30"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
            <Link href="/login" onClick={() => setOpen(false)} className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
            </Link>
            <a href="#cta" onClick={() => setOpen(false)} className="w-full">
              <Button variant="primary" className="w-full justify-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <div className="pt-2 text-center text-xs text-text-muted">
              Pathixo Flow &bull; High-Reliability Automation
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
