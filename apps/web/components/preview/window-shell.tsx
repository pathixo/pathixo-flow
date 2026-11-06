import * as React from 'react';
import { cn } from '@pathixo/ui';
import { Terminal, Activity } from 'lucide-react';

export interface WindowShellProps extends React.HTMLAttributes<HTMLDivElement> {
  routeText?: string;
  telemetryText?: string;
  children: React.ReactNode;
}

export function WindowShell({
  routeText = 'flow.pathixo.com / live-pipeline-monitor',
  telemetryText = 'Engine: BullMQ + Redis',
  children,
  className,
  ...props
}: WindowShellProps) {
  return (
    <div
      className={cn(
        'w-full rounded-lg border border-border bg-surface text-text-primary shadow-2xl overflow-hidden transition-all',
        className
      )}
      {...props}
    >
      {/* Titlebar Header */}
      <div className="flex h-10 items-center justify-between border-b border-border bg-surface-subtle/70 px-4 select-none">
        {/* Traffic Light Controls */}
        <div className="flex items-center space-x-1.5" aria-hidden="true">
          <div className="h-2.5 w-2.5 rounded-full bg-danger/80 border border-danger/40" />
          <div className="h-2.5 w-2.5 rounded-full bg-warning/80 border border-warning/40" />
          <div className="h-2.5 w-2.5 rounded-full bg-success/80 border border-success/40" />
        </div>

        {/* Center Route Chip */}
        <div className="flex items-center space-x-2 rounded-sm border border-border/60 bg-surface/80 px-2.5 py-0.5 text-[11px] font-mono text-text-secondary tracking-tight">
          <Terminal className="h-3 w-3 text-text-muted" />
          <span>{routeText}</span>
        </div>

        {/* Telemetry Badge */}
        <div className="flex items-center space-x-1.5 text-[11px] font-medium text-text-muted">
          <Activity className="h-3 w-3 text-success animate-pulse" />
          <span className="hidden sm:inline font-mono">{telemetryText}</span>
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-6 bg-surface">{children}</div>
    </div>
  );
}

