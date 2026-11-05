import * as React from 'react';
import { cn } from '@pathixo/ui';
import { ArrowRight, Globe, Layers, DollarSign } from 'lucide-react';

export type PipelineStageId = 'ingest' | 'worker' | 'ledger';

export interface PipelineVisualizerProps {
  activeStage: PipelineStageId;
  onSelectStage: (stage: PipelineStageId) => void;
  isDuplicate?: boolean;
}

export function PipelineVisualizer({
  activeStage,
  onSelectStage,
  isDuplicate = false,
}: PipelineVisualizerProps) {
  const stages: Array<{
    id: PipelineStageId;
    title: string;
    sub: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'ingest',
      title: '1. Inbound Webhook',
      sub: 'Meta HMAC Verified',
      icon: <Globe className="h-4 w-4" />,
    },
    {
      id: 'worker',
      title: '2. Queue & Worker',
      sub: isDuplicate ? '409 Duplicate Dropped' : 'BullMQ Idempotent Lock',
      icon: <Layers className="h-4 w-4" />,
    },
    {
      id: 'ledger',
      title: '3. Financial Ledger',
      sub: 'P0 Spend Attribution',
      icon: <DollarSign className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 border-b border-border bg-surface-subtle/40 p-2 sm:p-3 rounded-md">
      {stages.map((stage, index) => {
        const isActive = activeStage === stage.id;
        const isErrorNode = stage.id === 'worker' && isDuplicate;

        return (
          <React.Fragment key={stage.id}>
            <button
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={cn(
                'flex flex-1 items-center space-x-3 rounded-md border p-2.5 sm:p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                isActive
                  ? isErrorNode
                    ? 'border-danger/60 bg-danger/10 text-text-primary shadow-sm'
                    : 'border-brand/60 bg-brand/10 text-text-primary shadow-sm'
                  : 'border-border/60 bg-surface/60 text-text-secondary hover:border-border hover:bg-surface hover:text-text-primary'
              )}
            >
              <div
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border',
                  isActive
                    ? isErrorNode
                      ? 'border-danger/40 bg-danger/20 text-danger'
                      : 'border-brand/40 bg-brand/20 text-brand'
                    : 'border-border bg-surface-subtle text-text-muted'
                )}
              >
                {stage.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold leading-tight tracking-tight truncate">
                  {stage.title}
                </p>
                <p
                  className={cn(
                    'text-[11px] font-mono leading-normal truncate',
                    isErrorNode ? 'text-danger font-medium' : 'text-text-muted'
                  )}
                >
                  {stage.sub}
                </p>
              </div>
            </button>

            {index < stages.length - 1 && (
              <div className="hidden sm:flex items-center justify-center px-1 text-text-muted shrink-0" aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

