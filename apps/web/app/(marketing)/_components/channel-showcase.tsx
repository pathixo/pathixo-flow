import * as React from 'react';
import {
  MessageSquare,
  Mail,
  CheckCircle2,
  Clock,
  ShieldAlert,
  FileCode2,
  CheckCheck,
  Send,
} from 'lucide-react';
import { Badge, StatusBadge } from '@pathixo/ui';

export function ChannelShowcase() {
  return (
    <section id="channels" className="py-20 md:py-28 border-b border-border/40 bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            <span>Specialized Channel Runtimes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-text-primary">
            Dedicated delivery pipelines. Zero cross-contamination.
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            WhatsApp and Email have fundamentally different delivery mechanics, rate limits,
            and compliance protocols. Pathixo Flow separates them into isolated channel runtimes.
          </p>
        </div>

        {/* Two Columns: WhatsApp and Email */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WhatsApp Channel Card */}
          <div className="flex flex-col justify-between rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-8 hover:border-border transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-surface text-text-primary">
                    <MessageSquare className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">WhatsApp Cloud API</h3>
                    <p className="text-xs text-text-muted">Direct Meta Graph API Integration</p>
                  </div>
                </div>
                <Badge variant="outline" className="font-mono text-[11px] border-[#25D366]/30 text-[#25D366]">
                  Tier 2 Verified
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                Engineered for enterprise scale with Meta's official Cloud API. Built-in compliance
                for WhatsApp template categories, session management, and instant opt-out suppression.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>Template Schemas:</strong> Strict validation of Utility, Authentication, and Marketing parameter placeholders.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <Clock className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>24-Hour Service Window:</strong> Automatic detection of customer-initiated sessions for free-form responses.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <ShieldAlert className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>Opt-Out Guard:</strong> Sub-second suppression upon receiving `STOP` or `UNSUBSCRIBE` keywords.</span>
                </div>
              </div>
            </div>

            {/* Synthetic WhatsApp Telemetry Visualizer */}
            <div className="rounded-lg border border-border/60 bg-[#0D0F12] p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/40 text-[11px] text-text-muted">
                <span>OUTBOUND_WHATSAPP_DISPATCH</span>
                <span className="text-[#25D366] flex items-center gap-1">
                  <CheckCheck className="h-3 w-3" />
                  DELIVERED
                </span>
              </div>
              <div className="space-y-1.5 text-text-secondary text-[11px]">
                <div className="flex justify-between">
                  <span className="text-text-muted">Recipient:</span>
                  <span className="text-text-primary">+1 (555) 019-4482</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Template ID:</span>
                  <span className="text-text-primary">shipping_alert_v2 (UTILITY)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Meta Message ID:</span>
                  <span className="text-text-muted">wamid.HBgLMTU1NTAxOTQ...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Delivery Latency:</span>
                  <span className="text-[#10B981]">118ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Channel Card */}
          <div className="flex flex-col justify-between rounded-xl border border-border/70 bg-surface/40 p-6 sm:p-8 hover:border-border transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-surface text-text-primary">
                    <Mail className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Transactional Email Engine</h3>
                    <p className="text-xs text-text-muted">Amazon SES & Resend Decoupled Core</p>
                  </div>
                </div>
                <Badge variant="outline" className="font-mono text-[11px] border-brand/30 text-brand">
                  High Deliverability
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                High-throughput transactional email delivery with custom domain authentication,
                reputation protection, and automated bounce and complaint webhook ingestion.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Domain Authentication:</strong> Automated DKIM, SPF, and DMARC record verification before dispatch.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <FileCode2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Template Engine:</strong> Versioned templates with strict parameter sanitization to prevent injection.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <ShieldAlert className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Reputation Shield:</strong> Instant hard bounce isolation to maintain 99.5%+ inbox placement rates.</span>
                </div>
              </div>
            </div>

            {/* Synthetic Email Telemetry Visualizer */}
            <div className="rounded-lg border border-border/60 bg-[#0D0F12] p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/40 text-[11px] text-text-muted">
                <span>OUTBOUND_EMAIL_DISPATCH</span>
                <span className="text-[#10B981] flex items-center gap-1">
                  <Send className="h-3 w-3" />
                  SENT · 0 BOUNCES
                </span>
              </div>
              <div className="space-y-1.5 text-text-secondary text-[11px]">
                <div className="flex justify-between">
                  <span className="text-text-muted">Recipient:</span>
                  <span className="text-text-primary">ops@acme-corp.internal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Template ID:</span>
                  <span className="text-text-primary">monthly_billing_v3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Delivery Provider:</span>
                  <span className="text-text-muted">Amazon SES (us-east-1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Provider Roundtrip:</span>
                  <span className="text-[#10B981]">192ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
