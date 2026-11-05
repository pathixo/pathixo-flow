import * as React from 'react';
import { StatusBadge } from '@pathixo/ui';
import { CheckCircle2, Globe, Clock, ShieldCheck } from 'lucide-react';

export interface IngestStageProps {
  timestamp?: string;
  correlationId?: string;
  senderPhone?: string;
  templateName?: string;
  latencyMs?: number;
}

export function IngestStage({
  timestamp = '2026-11-06T00:42:18.102Z',
  correlationId = 'corr_live_98f1a04d',
  senderPhone = '+1 (555) 019-2048',
  templateName = 'lead_inbound_ack',
  latencyMs = 18,
}: IngestStageProps) {
  return (
    <div className="space-y-4 rounded-md border border-border bg-surface-subtle/30 p-4 font-sans">
      {/* Stage Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-brand" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
            Stage 1: Webhook Ingest & Verification
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <StatusBadge
            status="success"
            label="HMAC SHA-256 ✓"
            icon={<CheckCircle2 className="h-3 w-3" />}
          />
          <span className="flex items-center space-x-1 text-xs font-mono text-text-secondary">
            <Clock className="h-3 w-3 text-text-muted" />
            <span>{latencyMs}ms</span>
          </span>
        </div>
      </div>

      {/* HTTP Ingest Protocol Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="space-y-1">
          <span className="text-text-muted font-medium">Endpoint:</span>
          <p className="font-mono text-text-primary bg-surface border border-border/80 px-2.5 py-1.5 rounded-sm">
            POST /api/v1/webhooks/whatsapp
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-text-muted font-medium">Correlation ID:</span>
          <p className="font-mono text-text-primary bg-surface border border-border/80 px-2.5 py-1.5 rounded-sm truncate">
            {correlationId}
          </p>
        </div>
      </div>

      {/* Normalized Payload Inspector */}
      <div className="space-y-1.5">
        <span className="text-xs text-text-muted font-medium flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Normalized Payload Snapshot (Zero Token Leaks):
        </span>
        <pre className="overflow-x-auto rounded-sm border border-border bg-surface/90 p-3 font-mono text-xs text-text-secondary leading-relaxed">
{`{
  "event": "messages.upsert",
  "channel": "whatsapp_cloud_api",
  "from": "${senderPhone}",
  "template": "${templateName}",
  "signature_verified": true,
  "timestamp": "${timestamp}",
  "ack_status": "200_OK_ENQUEUED"
}`}
        </pre>
      </div>
    </div>
  );
}

