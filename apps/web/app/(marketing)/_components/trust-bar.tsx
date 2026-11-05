import * as React from 'react';
import {
  MessageSquare,
  Mail,
  Database,
  Layers,
  Code2,
  Container,
} from 'lucide-react';

const INFRASTRUCTURE_STACK = [
  {
    name: 'Meta Cloud API',
    subtitle: 'Official WhatsApp Platform',
    icon: MessageSquare,
  },
  {
    name: 'Amazon SES / Resend',
    subtitle: 'High-Deliverability Email',
    icon: Mail,
  },
  {
    name: 'Redis & BullMQ',
    subtitle: 'Durable Distributed Queues',
    icon: Layers,
  },
  {
    name: 'PostgreSQL',
    subtitle: 'ACID Persistence & Ledgers',
    icon: Database,
  },
  {
    name: 'TypeScript & Node 22',
    subtitle: 'Strict Typed Runtime',
    icon: Code2,
  },
  {
    name: 'Docker Containers',
    subtitle: 'Isolated Tenant Packs',
    icon: Container,
  },
];

export function TrustBar() {
  return (
    <div className="w-full border-b border-border/40 bg-[#08090A] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted mb-8">
          Engineered for Production Infrastructure
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INFRASTRUCTURE_STACK.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-border/40 bg-surface/30 hover:bg-surface/60 transition-colors text-center group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-surface text-text-secondary group-hover:text-text-primary transition-colors mb-2">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-text-primary tracking-tight">
                  {item.name}
                </span>
                <span className="text-[10px] text-text-muted mt-0.5 line-clamp-1">
                  {item.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
