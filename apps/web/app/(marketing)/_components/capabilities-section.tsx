import * as React from 'react';
import {
  MessageSquare,
  GitBranch,
  Layers,
  BarChart2,
  Users,
  Coins,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: MessageSquare,
    title: 'Communication Automation',
    description: 'Automate and manage WhatsApp and email at scale.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Orchestration',
    description: 'Build logic-driven workflows for real business processes.',
  },
  {
    icon: Layers,
    title: 'Integrations',
    description: 'Connect your tools, data, and services in one place.',
  },
  {
    icon: BarChart2,
    title: 'Execution Monitoring',
    description: 'Track runs, outcomes, and system health in real time.',
  },
  {
    icon: Users,
    title: 'Client & Organization Management',
    description: 'Operate multiple clients with isolation and control.',
  },
  {
    icon: Coins,
    title: 'Usage & Cost Visibility',
    description: 'Keep track of usage, costs, and service limits.',
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-t border-[#1E2024] bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white leading-tight">
              Everything you need for modern automation.
            </h2>
            <p className="text-sm text-[#A0A2A8] leading-relaxed max-w-md">
              A focused, extensible platform to automate communication, orchestrate workflows,
              and run operations at scale.
            </p>
          </div>

          {/* Right Column: 6 Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="space-y-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#121418] text-[#A0A2A8]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xs font-semibold text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
