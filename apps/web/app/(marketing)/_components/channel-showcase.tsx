import * as React from 'react';
import {
  MessageSquare,
  Mail,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { MarketingContainer } from './marketing-container';

export function ChannelShowcase() {
  return (
    <div id="channels" className="space-y-24 py-16 md:py-24 border-t border-[#1E2024] bg-[#08090A]">
      <MarketingContainer className="space-y-28">
        {/* WhatsApp Automation Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Automation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white leading-tight">
              Drive conversations that work for you.
            </h2>

            <p className="text-sm text-[#A0A2A8] leading-relaxed">
              Automate customer communication, send updates, and handle responses — all through
              the WhatsApp Business Platform.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Template messages', 'Event-driven', 'Delivery tracking'].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-md border border-[#25272B] bg-[#121418] text-[11px] text-[#A0A2A8]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#workflows"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
              >
                Learn about WhatsApp
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Interface Card */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#25272B] bg-[#0E1013] shadow-xl overflow-hidden text-xs">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2024] bg-[#0A0C0E]">
                <div className="flex items-center gap-2 text-[#747780] text-[11px]">
                  <span>Flow</span>
                  <span>&gt;</span>
                  <span>WhatsApp</span>
                  <span>&gt;</span>
                  <span className="text-white">Templates</span>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-white text-black font-semibold text-[10px] hover:bg-neutral-200 transition-colors"
                >
                  <Plus className="h-3 w-3" />
                  New template
                </button>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="text-xs font-semibold text-white">Message templates</div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead>
                      <tr className="border-b border-[#1E2024] text-[10px] font-medium text-[#747780]">
                        <th className="pb-2">Template</th>
                        <th className="pb-2">Category</th>
                        <th className="pb-2 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#16181C] text-[11px]">
                      <tr>
                        <td className="py-2.5 font-mono text-white">order_update</td>
                        <td className="py-2.5 text-[#A0A2A8]">Utility</td>
                        <td className="py-2.5 text-right">
                          <span className="inline-flex items-center gap-1 text-[#10B981] font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-mono text-white">payment_reminder</td>
                        <td className="py-2.5 text-[#A0A2A8]">Utility</td>
                        <td className="py-2.5 text-right">
                          <span className="inline-flex items-center gap-1 text-[#10B981] font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-mono text-white">lead_followup</td>
                        <td className="py-2.5 text-[#A0A2A8]">Marketing</td>
                        <td className="py-2.5 text-right">
                          <span className="inline-flex items-center gap-1 text-[#10B981] font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                            Active
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Automation Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-medium">
              <Mail className="h-3.5 w-3.5" />
              <span>Email Automation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white leading-tight">
              Automated emails for every use case.
            </h2>

            <p className="text-sm text-[#A0A2A8] leading-relaxed">
              Send transactional, operational, and workflow-driven emails with reliable delivery
              and full visibility.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Email templates', 'Delivery events', 'Bounce handling'].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-md border border-[#25272B] bg-[#121418] text-[11px] text-[#A0A2A8]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#workflows"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
              >
                Learn about Email
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Interface Card */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#25272B] bg-[#0E1013] shadow-xl overflow-hidden text-xs">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2024] bg-[#0A0C0E]">
                <div className="flex items-center gap-2 text-[#747780] text-[11px]">
                  <span>Flow</span>
                  <span>&gt;</span>
                  <span>Email</span>
                  <span>&gt;</span>
                  <span className="text-white">Campaigns</span>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-white text-black font-semibold text-[10px] hover:bg-neutral-200 transition-colors"
                >
                  <Plus className="h-3 w-3" />
                  New campaign
                </button>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="text-xs font-semibold text-white">Email campaigns</div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead>
                      <tr className="border-b border-[#1E2024] text-[10px] font-medium text-[#747780]">
                        <th className="pb-2">Campaign</th>
                        <th className="pb-2">Sent</th>
                        <th className="pb-2">Delivered</th>
                        <th className="pb-2 text-right">Bounced</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#16181C] text-[11px]">
                      <tr>
                        <td className="py-2.5 font-mono text-white">welcome_series</td>
                        <td className="py-2.5 text-[#A0A2A8]">1,240</td>
                        <td className="py-2.5 text-[#10B981]">1,132</td>
                        <td className="py-2.5 text-right text-[#A0A2A8]">6</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-mono text-white">invoice_notification</td>
                        <td className="py-2.5 text-[#A0A2A8]">860</td>
                        <td className="py-2.5 text-[#10B981]">858</td>
                        <td className="py-2.5 text-right text-[#A0A2A8]">2</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-mono text-white">renewal_reminder</td>
                        <td className="py-2.5 text-[#747780]">Draft</td>
                        <td className="py-2.5 text-[#747780]">—</td>
                        <td className="py-2.5 text-right text-[#747780]">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MarketingContainer>
    </div>
  );
}
