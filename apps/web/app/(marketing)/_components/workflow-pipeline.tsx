import * as React from 'react';
import {
  Webhook,
  ShieldCheck,
  Send,
  Receipt,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const PIPELINE_STEPS = [
  {
    step: '01',
    name: 'Ingestion & Signature',
    icon: Webhook,
    description: 'Sub-2s webhook ingestion with cryptographic HMAC-SHA256 verification and immediate acknowledgement.',
    metric: '18ms Ingest ACK',
    tag: 'FAST INGEST',
  },
  {
    step: '02',
    name: 'Idempotency & Balance',
    icon: ShieldCheck,
    description: 'Redis SETNX distributed lock check to drop duplicates, followed by prepaid wallet balance verification.',
    metric: 'Zero Duplicates',
    tag: 'GUARDED',
  },
  {
    step: '03',
    name: 'Provider Dispatch',
    icon: Send,
    description: 'Outbound dispatch via Meta WhatsApp Cloud API or Amazon SES with channel-specific payload formatting.',
    metric: 'Sub-150ms Roundtrip',
    tag: 'EXECUTED',
  },
  {
    step: '04',
    name: 'Financial Attribution',
    icon: Receipt,
    description: 'Itemized usage logging in the P0 Financial Ledger with date-effective client rate cards and balance deduction.',
    metric: '100% Attributed',
    tag: 'RECORDED',
  },
];

export function WorkflowPipeline() {
  return (
    <section id="workflows" className="py-20 md:py-28 border-b border-border/40 bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            <span>Deterministic Orchestration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-text-primary">
            From inbound trigger to financial ledger attribution.
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            Every automation follows a strict four-stage execution pipeline. If a transient error
            occurs, the execution stops safely and can be re-driven without side effects or double-billing.
          </p>
        </div>

        {/* 4 Steps Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="flex flex-col justify-between p-6 rounded-lg border border-border/60 bg-surface/35 hover:bg-surface/65 transition-all group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brand">
                      STAGE_{step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted px-2 py-0.5 rounded border border-border/30 bg-surface/60">
                      {step.tag}
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded border border-border/70 bg-surface text-text-secondary group-hover:text-text-primary transition-colors mb-4">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-semibold text-text-primary tracking-tight mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">Result:</span>
                  <span className="text-text-primary flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                    {step.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pipeline Telemetry Status Bar */}
        <div className="mt-8 rounded-lg border border-border/50 bg-[#0D0F12] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <span className="text-text-secondary">Execution Pipeline State: DETERMINISTIC</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Correlation ID: req_98f2b7a1</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>DLQ Quarantine: 0 Items</span>
          </div>
        </div>
      </div>
    </section>
  );
}
