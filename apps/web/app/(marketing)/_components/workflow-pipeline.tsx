import * as React from 'react';
import {
  Zap,
  Filter,
  MessageSquare,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { MarketingContainer } from './marketing-container';

export function WorkflowPipeline() {
  return (
    <section id="workflows" className="py-20 md:py-28 border-t border-[#1E2024] bg-[#08090A]">
      <MarketingContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A0A2A8]">
              Workflow Automation
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white leading-tight">
              Turn your processes into automations.
            </h2>

            <p className="text-sm text-[#A0A2A8] leading-relaxed">
              Design workflows with triggers, conditions, and actions to automate real business
              operations end to end.
            </p>

            <div className="pt-2">
              <a
                href="#integrations"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
              >
                Explore workflows
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Visual Workflow Diagram */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#25272B] bg-[#0E1013] p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Node 1: Trigger */}
                <div className="w-full md:w-auto flex-1 p-3.5 rounded-lg border border-[#25272B] bg-[#121418] space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#10B981]">
                    <Zap className="h-3 w-3" />
                    <span>Trigger</span>
                  </div>
                  <div className="text-xs font-semibold text-white">New order</div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-[#747780]">
                  <ArrowRight className="h-4 w-4" />
                </div>

                {/* Node 2: Condition */}
                <div className="w-full md:w-auto flex-1 p-3.5 rounded-lg border border-[#25272B] bg-[#121418] space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-purple-400">
                    <Filter className="h-3 w-3" />
                    <span>Condition</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Order &gt; ₹10,000</div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-[#747780]">
                  <ArrowRight className="h-4 w-4" />
                </div>

                {/* Node 3: Actions (Split) */}
                <div className="w-full md:w-auto flex-1 space-y-2">
                  <div className="p-2.5 rounded-lg border border-[#25272B] bg-[#121418] flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#25D366]/20 text-[#25D366]">
                      <MessageSquare className="h-3 w-3" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-[#747780]">Action</div>
                      <div className="text-[11px] font-semibold text-white">Send WhatsApp</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-[#25272B] bg-[#121418] flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-sky-500/20 text-sky-400">
                      <Mail className="h-3 w-3" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-[#747780]">Action</div>
                      <div className="text-[11px] font-semibold text-white">Send Email</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
