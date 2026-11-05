import * as React from 'react';
import { StatusBadge } from '@pathixo/ui';
import { Layers, Lock, ShieldAlert, Cpu } from 'lucide-react';

export interface WorkerStageProps {
  isDuplicate?: boolean;
  jobId?: string;
  queueName?: string;
  idempotencyKey?: string;
  attempts?: string;
}

export function WorkerStage({
  isDuplicate = false,
  jobId = 'job_wa_4092_prod',
  queueName = 'bullmq:wa:dispatch',
  idempotencyKey = 'idemp_msg_88f921a',
  attempts = '1/3',
}: WorkerStageProps) {
  return (
    <div className="space-y-4 rounded-md border border-border bg-surface-subtle/30 p-4 font-sans">
      {/* Stage Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <Layers className="h-4 w-4 text-brand" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
            Stage 2: Queue & Worker Idempotency Guard
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {isDuplicate ? (
            <StatusBadge
              status="danger"
              label="409 Duplicate Dropped"
              icon={<ShieldAlert className="h-3 w-3" />}
            />
          ) : (
            <StatusBadge
              status="brand"
              label="SETNX Lock Acquired"
              icon={<Lock className="h-3 w-3" />}
            />
          )}
        </div>
      </div>

      {/* Queue State Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="space-y-1">
          <span className="text-text-muted font-sans font-medium">Queue Name:</span>
          <p className="text-text-primary bg-surface border border-border/80 px-2.5 py-1.5 rounded-sm truncate">
            {queueName}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-text-muted font-sans font-medium">Job Identifier:</span>
          <p className="text-text-primary bg-surface border border-border/80 px-2.5 py-1.5 rounded-sm truncate">
            {jobId}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-text-muted font-sans font-medium">Retry Policy:</span>
          <p className="text-text-primary bg-surface border border-border/80 px-2.5 py-1.5 rounded-sm">
            Attempt {attempts} (Exp Backoff)
          </p>
        </div>
      </div>

      {/* Dynamic Idempotency Lock Console */}
      <div className="rounded-sm border border-border bg-surface/90 p-3 text-xs font-mono">
        <div className="flex items-center justify-between text-text-secondary pb-2 border-b border-border/60">
          <span className="flex items-center gap-1.5 font-sans font-medium">
            <Cpu className="h-3.5 w-3.5 text-brand" />
            Redis Key State:
          </span>
          <span className="text-text-muted">{idempotencyKey}</span>
        </div>

        {isDuplicate ? (
          <div className="pt-2 text-danger space-y-1">
            <p className="font-semibold flex items-center gap-1">
              <span>⚠</span> DUPLICATE WEBHOOK DETECTED: Redis SETNX key exists.
            </p>
            <p className="text-text-secondary text-[11px]">
              Business side effect dropped. Zero duplicate outbound WhatsApp templates sent.
            </p>
          </div>
        ) : (
          <div className="pt-2 text-success space-y-1">
            <p className="font-semibold flex items-center gap-1">
              <span>✓</span> IDEMPOTENCY LOCK ACQUIRED: SETNX key written with 24h TTL.
            </p>
            <p className="text-text-secondary text-[11px]">
              Single execution guaranteed. Worker is dispatching template payload.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
