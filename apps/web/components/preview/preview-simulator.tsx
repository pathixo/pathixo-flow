'use client';

import * as React from 'react';
import { Button, StatusBadge } from '@pathixo/ui';
import { Play, CopySlash, Code2, Check, RefreshCw } from 'lucide-react';
import { WindowShell } from './window-shell';
import { PipelineVisualizer, type PipelineStageId } from './pipeline-visualizer';
import { IngestStage } from './stages/ingest-stage';
import { WorkerStage } from './stages/worker-stage';
import { LedgerStage } from './stages/ledger-stage';

export function ProductPreviewSimulator() {
  const [activeStage, setActiveStage] = React.useState<PipelineStageId>('ingest');
  const [isDuplicate, setIsDuplicate] = React.useState(false);
  const [showRawPayload, setShowRawPayload] = React.useState(false);
  const [isSimulating, setIsSimulating] = React.useState(false);

  // Trigger a full 3-stage animated simulation run
  const handleRunSimulation = () => {
    setIsDuplicate(false);
    setIsSimulating(true);
    setActiveStage('ingest');

    setTimeout(() => {
      setActiveStage('worker');
    }, 600);

    setTimeout(() => {
      setActiveStage('ledger');
      setIsSimulating(false);
    }, 1200);
  };

  // Trigger duplicate webhook to demonstrate idempotency guard
  const handleTriggerDuplicate = () => {
    setIsSimulating(true);
    setActiveStage('ingest');

    setTimeout(() => {
      setIsDuplicate(true);
      setActiveStage('worker');
      setIsSimulating(false);
    }, 600);
  };

  return (
    <WindowShell
      routeText="flow.pathixo.com / live-pipeline-monitor"
      telemetryText="Engine: BullMQ + Redis"
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-5">
        {/* Interactive Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={!isDuplicate && !isSimulating ? 'primary' : 'outline'}
              size="sm"
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="font-medium text-xs"
            >
              <Play className="mr-1.5 h-3.5 w-3.5" />
              Simulate Webhook Trigger
            </Button>
            <Button
              variant={isDuplicate ? 'destructive' : 'outline'}
              size="sm"
              onClick={handleTriggerDuplicate}
              disabled={isSimulating}
              className="font-medium text-xs"
            >
              <CopySlash className="mr-1.5 h-3.5 w-3.5" />
              Test Duplicate (Idempotency Guard)
            </Button>
            <Button
              variant={showRawPayload ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setShowRawPayload(!showRawPayload)}
              className="font-medium text-xs"
            >
              <Code2 className="mr-1.5 h-3.5 w-3.5" />
              Raw JSON
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            {isSimulating ? (
              <StatusBadge
                status="brand"
                label="Simulating Event..."
                icon={<RefreshCw className="h-3 w-3 animate-spin" />}
              />
            ) : isDuplicate ? (
              <StatusBadge status="danger" label="Idempotency Guard Triggered" />
            ) : (
              <StatusBadge
                status="success"
                label="Pipeline Nominal"
                icon={<Check className="h-3 w-3" />}
              />
            )}
          </div>
        </div>

        {/* 3-Stage Pipeline Stepper */}
        <PipelineVisualizer
          activeStage={activeStage}
          onSelectStage={setActiveStage}
          isDuplicate={isDuplicate}
        />

        {/* Active Stage Inspection Body */}
        <div className="transition-all duration-150">
          {activeStage === 'ingest' && <IngestStage />}
          {activeStage === 'worker' && <WorkerStage isDuplicate={isDuplicate} />}
          {activeStage === 'ledger' && <LedgerStage />}
        </div>

        {/* Optional Collapsible Raw JSON Inspector */}
        {showRawPayload && (
          <div className="rounded-md border border-border bg-surface-subtle/50 p-3 space-y-1 text-xs font-mono">
            <span className="text-text-muted font-sans font-medium">Raw Normalized Domain Event:</span>
            <pre className="overflow-x-auto text-text-secondary leading-tight pt-1">
{`{
  "trace_id": "tr_9901ad82",
  "client_id": "cli_acme_corp",
  "channel": "whatsapp_cloud_api",
  "event_type": "inbound_message",
  "idempotency_key": "idemp_msg_88f921a",
  "meta_signature": "sha256=98f12a...valid",
  "billable": true,
  "rate_unit": "0.8631",
  "currency": "INR",
  "side_effects_suppressed": ${isDuplicate ? 'true' : 'false'}
}`}
            </pre>
          </div>
        )}

        {/* Live Operational Telemetry Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs font-mono text-text-muted">
          <div className="flex items-center space-x-4">
            <span>p95 Ingestion: <strong className="text-text-primary tabular-nums">18ms</strong></span>
            <span>Deduplication: <strong className="text-text-primary tabular-nums">100%</strong></span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Unbilled Usage: <strong className="text-text-primary tabular-nums">₹0.00</strong></span>
            <span className="hidden sm:inline">Isolation: <strong className="text-text-primary">Per-Client</strong></span>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

