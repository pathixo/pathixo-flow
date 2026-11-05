import * as React from 'react';
import {
  Share2,
  Workflow,
  Receipt,
  CheckCheck,
  ShieldCheck,
  Activity,
  ArrowUpRight,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Share2,
    tag: 'Runtimes',
    title: 'Decoupled Multi-Channel Runtimes',
    description:
      'Independent execution engines for WhatsApp Cloud API and Transactional Email. A provider outage or rate-limit spike on WhatsApp never impacts email delivery pipelines.',
    specs: ['Sub-2s Webhook Ingest', 'E.164 Phone Normalization', 'Independent Deployments'],
  },
  {
    icon: Workflow,
    tag: 'Orchestration',
    title: 'Deterministic Workflow Engine',
    description:
      'Declarative execution graph linking inbound triggers, business logic rules, and outbound actions. Durable state persistence enables automatic resume on transient errors.',
    specs: ['DAG Step Resolver', 'Zero-State Lost', 'Guarded Replay Inspector'],
  },
  {
    icon: Receipt,
    tag: 'Financial Governance',
    title: 'P0 Financial Ledger & Rate Cards',
    description:
      'Immutable transaction records attribute every outbound notification and automation run to the responsible client. Date-effective rate cards ensure precise cost attribution.',
    specs: ['Immutable Ledger Logs', 'Prepaid Balance Deductions', 'Date-Effective Rate Cards'],
  },
  {
    icon: CheckCheck,
    tag: 'Reliability',
    title: 'Persistent Ingestion Idempotency',
    description:
      'Distributed Redis SETNX locks suppress duplicate payloads before worker queuing. Provider webhook retries never produce accidental duplicate messages to end users.',
    specs: ['Zero Duplicate Outbounds', 'Durable Lock Attribution', 'Correlation ID Passing'],
  },
  {
    icon: ShieldCheck,
    tag: 'Security',
    title: 'Strict Tenant Isolation Boundaries',
    description:
      'Absolute segregation across clients. Organization credentials, recipient metadata, and audit logs are isolated with multi-tenant guards or dedicated client containers.',
    specs: ['Runtime Credential Injection', 'Zero Cross-Tenant Leakage', 'Role-Based Access'],
  },
  {
    icon: Activity,
    tag: 'Observability',
    title: 'Execution Telemetry & Quarantine DLQ',
    description:
      'Real-time queue depth monitoring and dead-letter queue inspection. Malformed or rejected messages enter quarantined storage for administrative diagnosis and replay.',
    specs: ['Sub-20ms Queue Latency', 'Dead-Letter Quarantine', 'JSON Payload Diffing'],
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-border/40 bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            <span>Core Platform Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-text-primary">
            Engineered for reliability, visibility, and control.
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            Every architectural decision eliminates operational guesswork, guarantees delivery,
            and ensures 100% financial attribution for high-volume enterprise automation.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative flex flex-col justify-between p-6 rounded-lg border border-border/60 bg-surface/40 hover:bg-surface/75 hover:border-border transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded border border-border/70 bg-surface text-text-secondary group-hover:text-text-primary group-hover:border-brand/40 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-2 py-0.5 rounded border border-border/40 bg-surface/50">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-text-primary tracking-tight mb-2 group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specs / Tags */}
                <div className="pt-4 border-t border-border/30 flex flex-wrap gap-1.5">
                  {cap.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-mono text-text-muted bg-surface-elevated/40 px-2 py-0.5 rounded border border-border/30"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
