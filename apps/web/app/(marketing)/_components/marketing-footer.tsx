import * as React from 'react';
import Link from 'next/link';
import { Layers } from 'lucide-react';

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-border/60 bg-[#08090A] text-text-secondary pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded border border-brand/40 bg-brand/10 text-brand">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-text-primary">
                Pathixo Flow
              </span>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              Unified automation infrastructure for WhatsApp, email, and business workflows with persistent idempotency and financial controls.
            </p>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-text-primary transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#channels" className="hover:text-text-primary transition-colors">
                  WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#channels" className="hover:text-text-primary transition-colors">
                  Email Delivery Engine
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-text-primary transition-colors">
                  Workflow Orchestration
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-text-primary transition-colors">
                  Financial Metering Ledger
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-text-muted">Decoupled Channel Runtimes</span>
              </li>
              <li>
                <span className="text-text-muted">Redis SETNX Idempotency</span>
              </li>
              <li>
                <span className="text-text-muted">Sub-2s Webhook Ingestion</span>
              </li>
              <li>
                <span className="text-text-muted">Date-Effective Rate Cards</span>
              </li>
              <li>
                <span className="text-text-muted">Containerized Client Isolation</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/login" className="hover:text-text-primary transition-colors">
                  Workspace Console
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow/blob/main/docs/TECHNICAL_SPECIFICATION.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Technical Specification
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Security Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Organization */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-text-secondary">Pathixo Pvt. Ltd.</span>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow/blob/main/SUPPORT.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Support Escalation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pathixo/pathixo-flow/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Operational Status */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} Pathixo Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-text-secondary font-mono">
              Systems Operational &bull; 99.95% Delivery SLA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
