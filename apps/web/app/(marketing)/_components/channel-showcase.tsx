'use client';

import * as React from 'react';
import {
  Mail,
  ArrowRight,
  Plus,
  MoreHorizontal,
  FileText,
  CheckCircle2,
  Clock,
  Send,
  AlertTriangle,
  Code2,
  Sparkles,
} from 'lucide-react';
import { MarketingContainer } from './marketing-container';

// Official WhatsApp Logo SVG
function WhatsAppLogo({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

// 3D Interactive Showcase Card Component
function InteractiveTiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 8, y: x * 8 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      className="rounded-2xl border-t border-t-white/20 border-x border-x-white/10 border-b border-b-white/5 bg-gradient-to-b from-[#14161B] via-[#0F1115] to-[#0A0C0E] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden transition-transform duration-200 will-change-transform"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.01)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      }}
    >
      {children}
    </div>
  );
}

export function ChannelShowcase() {
  const [waTab, setWaTab] = React.useState<'templates' | 'dispatch' | 'inbox' | 'logs'>('templates');
  const [emailTab, setEmailTab] = React.useState<'campaigns' | 'templates' | 'delivery' | 'bounces'>('campaigns');

  return (
    <div id="channels" className="space-y-32 py-20 md:py-28 border-t border-[#1E2024] bg-[#08090A]">
      <MarketingContainer className="space-y-36">
        {/* ========================================================= */}
        {/* SECTION 1: WhatsApp Automation (Text Left, Window Right) */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium shadow-sm">
              <WhatsAppLogo className="h-3.5 w-3.5" />
              <span>WhatsApp Automation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.1]">
              Business communication that works on autopilot.
            </h2>

            <p className="text-base text-[#A0A2A8] leading-relaxed">
              Automate customer updates, reminders, and conversations on WhatsApp with templates,
              triggers, and real-time delivery tracking.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Template messages', 'Event-driven', 'Delivery tracking'].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-lg border border-[#26282E] bg-[#121418] text-xs font-medium text-[#A0A2A8]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="pt-2">
              <a
                href="#workflows"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-400 transition-colors group"
              >
                <span>Learn about WhatsApp</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Interface Window */}
          <div className="lg:col-span-7">
            <InteractiveTiltCard>
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#22252B] bg-[#0B0D10]/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#25D366]/20 text-[#25D366] p-0.5">
                      <WhatsAppLogo className="h-3.5 w-3.5" />
                    </div>
                    <span>WhatsApp</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 border-l border-[#22252B] pl-3">
                    {(['templates', 'dispatch', 'inbox', 'logs'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setWaTab(tab)}
                        className={`px-2.5 py-1 rounded text-[11px] capitalize font-medium transition-colors ${
                          waTab === tab
                            ? 'bg-white/10 text-white'
                            : 'text-[#747780] hover:text-[#A0A2A8]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>New template</span>
                </button>
              </div>

              {/* Window Body: Interactive Views */}
              <div className="p-5 sm:p-6 space-y-4">
                {waTab === 'templates' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Message templates</span>
                      <span className="text-[11px] text-[#747780] font-mono">3 approved &bull; Meta v21.0</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-sans">
                        <thead>
                          <tr className="border-b border-[#22252B] text-[10px] font-semibold uppercase tracking-wider text-[#747780]">
                            <th className="pb-2.5 pl-2">Template name</th>
                            <th className="pb-2.5">Category</th>
                            <th className="pb-2.5">Status</th>
                            <th className="pb-2.5 pr-2 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#181A20] text-xs">
                          {/* Row 1 */}
                          <tr className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#181A20] text-[#8A8D96] border border-[#22252B]">
                                  <FileText className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                                    Order Update
                                  </div>
                                  <div className="text-[10px] text-[#747780] font-mono">order_update_v2</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded border border-[#26282E] bg-[#14161A] text-[10px] font-mono text-[#A0A2A8]">
                                Utility
                              </span>
                            </td>
                            <td className="py-3">
                              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Active
                              </span>
                            </td>
                            <td className="py-3 pr-2 text-right">
                              <button type="button" className="text-[#747780] hover:text-white transition-colors p-1" aria-label="Template actions">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>

                          {/* Row 2 */}
                          <tr className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#181A20] text-[#8A8D96] border border-[#22252B]">
                                  <FileText className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                                    Payment Reminder
                                  </div>
                                  <div className="text-[10px] text-[#747780] font-mono">payment_reminder_v1</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded border border-[#26282E] bg-[#14161A] text-[10px] font-mono text-[#A0A2A8]">
                                Utility
                              </span>
                            </td>
                            <td className="py-3">
                              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Active
                              </span>
                            </td>
                            <td className="py-3 pr-2 text-right">
                              <button type="button" className="text-[#747780] hover:text-white transition-colors p-1" aria-label="Template actions">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>

                          {/* Row 3 */}
                          <tr className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#181A20] text-[#8A8D96] border border-[#22252B]">
                                  <FileText className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                                    Lead Follow-up
                                  </div>
                                  <div className="text-[10px] text-[#747780] font-mono">lead_followup_v3</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded border border-[#26282E] bg-[#14161A] text-[10px] font-mono text-[#A0A2A8]">
                                Marketing
                              </span>
                            </td>
                            <td className="py-3">
                              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Active
                              </span>
                            </td>
                            <td className="py-3 pr-2 text-right">
                              <button type="button" className="text-[#747780] hover:text-white transition-colors p-1" aria-label="Template actions">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {waTab === 'dispatch' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg border border-[#22252B] bg-[#0A0C0E] space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-emerald-400">
                        <span>HMAC_SHA256_VERIFIED</span>
                        <span>18ms Ingest ACK</span>
                      </div>
                      <div className="text-[#8A8D96] text-[11px] space-y-1">
                        <div>&bull; Recipient: +1 (555) 019-2048</div>
                        <div>&bull; Template: order_update_v2 (UTILITY)</div>
                        <div>&bull; Meta ID: wamid.HBgLMTU1NTAxOTIwNDg...</div>
                        <div>&bull; Redis SETNX Lock: Acquired (0 duplicates)</div>
                      </div>
                    </div>
                  </div>
                )}

                {waTab === 'inbox' && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-3.5 rounded-lg border border-[#22252B] bg-[#0A0C0E] space-y-2.5">
                      <div className="flex items-start gap-2 max-w-[80%]">
                        <div className="p-2.5 rounded-2xl rounded-tl-none bg-[#1E222A] text-white">
                          Where is my order #482?
                        </div>
                      </div>
                      <div className="flex items-end justify-end">
                        <div className="p-2.5 rounded-2xl rounded-tr-none bg-[#25D366]/20 border border-[#25D366]/30 text-white max-w-[85%]">
                          Your order #482 has shipped via DHL! Tracking number: 9812440. Estimated delivery: Tomorrow by 2 PM.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {waTab === 'logs' && (
                  <div className="p-3.5 rounded-lg border border-[#22252B] bg-[#0A0C0E] font-mono text-[11px] space-y-1.5 text-[#8A8D96]">
                    <div>[2026-11-06 14:02:11] WEBHOOK_RECEIVED: type=&quot;messages&quot; status=&quot;delivered&quot;</div>
                    <div>[2026-11-06 14:02:11] IDEMPOTENCY_GUARD: key=&quot;msg_98f2b&quot; duplicate=false</div>
                    <div>[2026-11-06 14:02:12] LEDGER_RECORDED: entry=&quot;#L-88219&quot; cost=&quot;$0.0075&quot;</div>
                  </div>
                )}
              </div>
            </InteractiveTiltCard>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: Email Automation (Window Left, Text Right) */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Interface Window (Alternating Layout) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <InteractiveTiltCard>
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#22252B] bg-[#0B0D10]/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-sky-500/20 text-sky-400 p-0.5">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <span>Email</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 border-l border-[#22252B] pl-3">
                    {(['campaigns', 'templates', 'delivery', 'bounces'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setEmailTab(tab)}
                        className={`px-2.5 py-1 rounded text-[11px] capitalize font-medium transition-colors ${
                          emailTab === tab
                            ? 'bg-white/10 text-white'
                            : 'text-[#747780] hover:text-[#A0A2A8]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>New campaign</span>
                </button>
              </div>

              {/* Window Body: Interactive Views */}
              <div className="p-5 sm:p-6 space-y-4">
                {emailTab === 'campaigns' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Email campaigns</span>
                      <span className="text-[11px] text-[#747780] font-mono">Amazon SES &bull; 99.8% Inbox</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-sans">
                        <thead>
                          <tr className="border-b border-[#22252B] text-[10px] font-semibold uppercase tracking-wider text-[#747780]">
                            <th className="pb-2.5 pl-2">Campaign</th>
                            <th className="pb-2.5">Sent</th>
                            <th className="pb-2.5">Delivered</th>
                            <th className="pb-2.5">Bounced</th>
                            <th className="pb-2.5 pr-2 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#181A20] text-xs">
                          {/* Row 1 */}
                          <tr className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#181A20] text-sky-400 border border-[#22252B]">
                                  <Mail className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-sky-400 transition-colors">
                                    Product Update
                                  </div>
                                  <div className="text-[10px] text-[#747780]">Sent &bull; 2,420 recipients</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 text-[#A0A2A8] font-mono">1,240</td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] font-medium">
                                Delivered
                              </span>
                            </td>
                            <td className="py-3 text-[#747780] font-mono">6 (0.4%)</td>
                            <td className="py-3 pr-2 text-right">
                              <button type="button" className="text-[#747780] hover:text-white transition-colors p-1" aria-label="Campaign actions">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>

                          {/* Row 2 */}
                          <tr className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#181A20] text-sky-400 border border-[#22252B]">
                                  <Mail className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-sky-400 transition-colors">
                                    Onboarding Series
                                  </div>
                                  <div className="text-[10px] text-[#747780]">In progress &bull; 1,180 recipients</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 text-[#A0A2A8] font-mono">1,180</td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-[10px] font-medium">
                                Sending
                              </span>
                            </td>
                            <td className="py-3 text-[#747780] font-mono">2 (0.1%)</td>
                            <td className="py-3 pr-2 text-right">
                              <button type="button" className="text-[#747780] hover:text-white transition-colors p-1" aria-label="Campaign actions">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>

                          {/* Row 3 */}
                          <tr className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#181A20] text-[#747780] border border-[#22252B]">
                                  <Mail className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="font-medium text-white">
                                    Renewal Reminder
                                  </div>
                                  <div className="text-[10px] text-[#747780]">Draft &bull; 450 recipients</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 text-[#747780] font-mono">—</td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[#A0A2A8] text-[10px] font-medium">
                                Draft
                              </span>
                            </td>
                            <td className="py-3 text-[#747780] font-mono">—</td>
                            <td className="py-3 pr-2 text-right">
                              <button type="button" className="text-[#747780] hover:text-white transition-colors p-1" aria-label="Campaign actions">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {emailTab === 'templates' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg border border-[#22252B] bg-[#0A0C0E] space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-sky-400">
                        <span>HANDLEBARS_TEMPLATE_ENGINE</span>
                        <span>Zero Injection Risk</span>
                      </div>
                      <div className="text-[#8A8D96] text-[11px] space-y-1">
                        <div>&bull; Template: invoice_notification_v3.hbs</div>
                        <div>&bull; Placeholders: &#123;&#123;customer_name&#125;&#125;, &#123;&#123;amount&#125;&#125;, &#123;&#123;due_date&#125;&#125;</div>
                        <div>&bull; Output: Sanitized MJML / HTML + Plaintext Fallback</div>
                      </div>
                    </div>
                  </div>
                )}

                {emailTab === 'delivery' && (
                  <div className="p-3.5 rounded-lg border border-[#22252B] bg-[#0A0C0E] font-mono text-xs space-y-2 text-[#8A8D96]">
                    <div className="text-emerald-400 text-[11px]">AMAZON_SES_DEDICATED_POOL</div>
                    <div>&bull; IP Reputation: 99.8% (Warm pool)</div>
                    <div>&bull; DKIM Status: Verified (rsa2048)</div>
                    <div>&bull; SPF &amp; DMARC: PASS (Strict enforcement)</div>
                  </div>
                )}

                {emailTab === 'bounces' && (
                  <div className="p-3.5 rounded-lg border border-[#22252B] bg-[#0A0C0E] font-mono text-xs space-y-2 text-[#8A8D96]">
                    <div className="text-amber-400 text-[11px]">SUPPRESSION_ROSTER_ACTIVE</div>
                    <div>&bull; Auto-Quarantine: 0 hard bounces today</div>
                    <div>&bull; Complaint Webhook: Sub-200ms unsubscribe drop</div>
                  </div>
                )}
              </div>
            </InteractiveTiltCard>
          </div>

          {/* Right Text (Alternating Layout) */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-medium shadow-sm">
              <Mail className="h-3.5 w-3.5" />
              <span>Email Automation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.1]">
              Send the right message, at the right time.
            </h2>

            <p className="text-base text-[#A0A2A8] leading-relaxed">
              Automated, reliable email communication for updates, transactions, and operations.
              With templates, delivery events, and bounce handling.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Email templates', 'Delivery events', 'Bounce handling'].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-lg border border-[#26282E] bg-[#121418] text-xs font-medium text-[#A0A2A8]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="pt-2">
              <a
                href="#workflows"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-400 transition-colors group"
              >
                <span>Learn about Email</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </MarketingContainer>
    </div>
  );
}
