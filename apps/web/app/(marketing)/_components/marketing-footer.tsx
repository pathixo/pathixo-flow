import * as React from 'react';
import Link from 'next/link';
import { MarketingContainer } from './marketing-container';
import { Linkedin, Youtube } from 'lucide-react';

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-[#1E2024] bg-[#08090A] text-[#A0A2A8] pt-16 pb-12">
      <MarketingContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          {/* Brand Left Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
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

            <p className="text-xs text-[#747780] leading-relaxed max-w-sm">
              A unified automation platform for business communication and workflows.
            </p>

            <div className="pt-4 text-xs text-[#747780]">
              &copy; {new Date().getFullYear()} Pathixo Pvt. Ltd. All rights reserved.
            </div>

            <div className="flex items-center gap-3 pt-2 text-[#747780]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Product (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#channels" className="hover:text-white transition-colors">
                  WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#channels" className="hover:text-white transition-colors">
                  Email Automation
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-white transition-colors">
                  Workflows
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-[#747780]">Documentation</span>
              </li>
              <li>
                <span className="text-[#747780]">Guides</span>
              </li>
              <li>
                <span className="text-[#747780]">API Reference</span>
              </li>
              <li>
                <span className="text-[#747780]">Changelog</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-[#747780]">About Pathixo</span>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow/blob/main/SUPPORT.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact & Support
                </a>
              </li>
              <li>
                <span className="text-[#747780]">Privacy Policy</span>
              </li>
              <li>
                <span className="text-[#747780]">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>
      </MarketingContainer>
    </footer>
  );
}
