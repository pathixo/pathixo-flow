import * as React from 'react';
import {
  ShieldCheck,
  KeyRound,
  FileCheck2,
  Lock,
  Zap,
  CalendarCheck2,
  CreditCard,
  AlertTriangle,
} from 'lucide-react';

const USE_CASES = [
  {
    icon: Zap,
    title: 'Inbound Lead Acceleration',
    description: 'Trigger immediate WhatsApp qualification messages within 30 seconds of landing page form submission.',
  },
  {
    icon: CreditCard,
    title: 'Transactional Billing & Receipts',
    description: 'Dispatch branded PDF invoices and payment notifications with automatic prepaid wallet balance tracking.',
  },
  {
    icon: CalendarCheck2,
    title: 'Two-Way Appointment Sync',
    description: 'Send interactive WhatsApp confirmation buttons with automatic status synchronization to your core CRM.',
  },
  {
    icon: AlertTriangle,
    title: 'Critical Outage Escalation',
    description: 'Multi-channel failover alerts that broadcast critical incident notifications to on-call staff via WhatsApp and email.',
  },
];

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: 'Strict Tenant Data Isolation',
    description: 'Cross-tenant data contamination is prevented by architectural design. Client credentials, contacts, and logs are isolated.',
  },
  {
    icon: KeyRound,
    title: 'Runtime Secret Injection',
    description: 'Provider API keys and webhook secrets are injected strictly via secure runtime environment variables, never hardcoded.',
  },
  {
    icon: ShieldCheck,
    title: 'Cryptographic Signature Verification',
    description: 'Incoming Meta and email webhooks are validated using HMAC-SHA256 signatures before worker queues accept the payload.',
  },
  {
    icon: FileCheck2,
    title: 'Immutable Audit Trail',
    description: 'Every trigger, dispatch attempt, rate card modification, and prepaid deduction is recorded in an append-only ledger.',
  },
];

export function IntegrationsSecurity() {
  return (
    <section id="reliability" className="py-20 md:py-28 border-b border-border/40 bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            <span>Reliability & Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-text-primary">
            Engineered for high-consequence operations.
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            Honest architectural guarantees without inflated marketing claims. Pathixo Flow is
            designed for production reliability, verifiable security, and strict data boundaries.
          </p>
        </div>

        {/* Dual Panels: Use Cases & Security Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: Proven Business Use Cases */}
          <div className="rounded-xl border border-border/70 bg-surface/35 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Proven Delivery Patterns
            </h3>
            <p className="text-xs text-text-muted mb-6">
              Production workflows deployed to power real enterprise automation.
            </p>

            <div className="space-y-4">
              {USE_CASES.map((uc) => {
                const Icon = uc.icon;
                return (
                  <div
                    key={uc.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-lg border border-border/40 bg-surface/40 hover:bg-surface/70 transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded border border-border/60 bg-surface text-brand shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary">
                        {uc.title}
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel 2: Security & Isolation Architecture */}
          <div className="rounded-xl border border-border/70 bg-surface/35 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Security & Tenancy Invariants
            </h3>
            <p className="text-xs text-text-muted mb-6">
              Architectural guardrails enforced across all deployment tiers.
            </p>

            <div className="space-y-4">
              {SECURITY_PILLARS.map((sp) => {
                const Icon = sp.icon;
                return (
                  <div
                    key={sp.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-lg border border-border/40 bg-surface/40 hover:bg-surface/70 transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded border border-border/60 bg-surface text-text-primary shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary">
                        {sp.title}
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                        {sp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
