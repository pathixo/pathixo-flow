import * as React from 'react';
import {
  StatusBadge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@pathixo/ui';
import { Wallet, CheckCircle2, DollarSign } from 'lucide-react';

export interface LedgerStageProps {
  clientId?: string;
  channel?: string;
  category?: string;
  ratePerMsg?: string;
  prepaidBalance?: string;
}

export function LedgerStage({
  clientId = 'cli_acme_corp',
  channel = 'WhatsApp Cloud API',
  category = 'UTILITY',
  ratePerMsg = '₹0.8631',
  prepaidBalance = '₹4,892.40',
}: LedgerStageProps) {
  return (
    <div className="space-y-4 rounded-md border border-border bg-surface-subtle/30 p-4 font-sans">
      {/* Stage Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-brand" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
            Stage 3: P0 Financial Ledger & Cost Attribution
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <StatusBadge
            status="success"
            label="Ledger Attributed ✓"
            icon={<CheckCircle2 className="h-3 w-3" />}
          />
          <StatusBadge status="brand" label="100% Cost Recovery" />
        </div>
      </div>

      {/* Itemized Table Row */}
      <div className="rounded-sm border border-border bg-surface overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client ID</TableHead>
              <TableHead>Channel</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Rate Card</TableHead>
              <TableHead className="text-right">Ledger Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">{clientId}</TableCell>
              <TableCell className="text-xs">{channel}</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-surface-subtle text-[10px] font-mono font-semibold text-text-secondary border border-border">
                  {category}
                </span>
              </TableCell>
              <TableCell className="text-right font-mono text-xs tabular-nums text-text-primary">
                {ratePerMsg}
              </TableCell>
              <TableCell className="text-right">
                <span className="text-xs text-success font-medium inline-flex items-center gap-1 justify-end">
                  <CheckCircle2 className="h-3 w-3" />
                  Debited
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Prepaid Wallet Attribution Callout */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-sm border border-border bg-surface/90 px-3 py-2 text-xs">
        <span className="flex items-center gap-1.5 text-text-secondary font-medium">
          <Wallet className="h-3.5 w-3.5 text-brand" />
          Client Prepaid Wallet Balance:
        </span>
        <span className="font-mono font-semibold text-text-primary tabular-nums">
          {prepaidBalance} <span className="text-text-muted font-normal">(Above 25% threshold)</span>
        </span>
      </div>
    </div>
  );
}
