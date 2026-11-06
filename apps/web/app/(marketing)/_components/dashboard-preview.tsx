import * as React from 'react';
import {
  Search,
  Bell,
  Home,
  GitBranch,
  MessageSquare,
  Mail,
  Layers,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export function DashboardPreview() {
  return (
    <div className="relative w-full [perspective:1400px]">
      {/* Subtle top specular glow */}
      <div
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-white/5 blur-3xl opacity-50 rounded-full"
        aria-hidden="true"
      />

      {/* 3D Perspective Window Frame */}
      <div className="relative rounded-2xl border border-[#25272B] bg-[#0E1013] shadow-[0_-20px_80px_-20px_rgba(255,255,255,0.08),0_40px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden font-sans text-xs [transform:rotateX(14deg)] [transform-origin:top_center] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
        {/* Window Top Bar / Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#1E2024] bg-[#0A0C0E]">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-white text-black font-bold text-[10px]">
              F
            </div>
            <span className="text-xs font-semibold text-white">Flow</span>
          </div>

          {/* Search / Command Bar */}
          <div className="hidden sm:flex items-center justify-between w-80 px-3.5 py-1.5 rounded-md border border-[#25272B] bg-[#14161A] text-[#747780]">
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5" />
              <span className="text-[11px]">Search or jump to...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-[#1F2228] border border-[#2C3038] text-[9px] font-mono text-[#A0A2A8]">
              ⌘K
            </kbd>
          </div>

          {/* Right Header: Notification & Profile */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative p-1 text-[#A0A2A8] hover:text-white transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-3.5 w-3.5" />
              <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-brand" />
            </button>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25272B] text-white text-[11px] font-semibold border border-[#35383F]">
              P
            </div>
          </div>
        </div>

        {/* Dashboard Shell: Sidebar + Main Content */}
        <div className="flex flex-col md:flex-row min-h-[360px]">
          {/* Sidebar */}
          <aside className="w-full md:w-48 border-b md:border-b-0 md:border-r border-[#1E2024] bg-[#0A0C0E]/70 p-3 space-y-1">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#1B1D21] text-white font-medium">
              <Home className="h-3.5 w-3.5 text-white" />
              <span>Overview</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-[#14161A] transition-colors">
              <GitBranch className="h-3.5 w-3.5" />
              <span>Workflows</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-[#14161A] transition-colors">
              <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-[#14161A] transition-colors">
              <Mail className="h-3.5 w-3.5 text-sky-400" />
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-[#14161A] transition-colors">
              <Layers className="h-3.5 w-3.5" />
              <span>Integrations</span>
            </div>
          </aside>

          {/* Main Dashboard Pane */}
          <main className="flex-1 p-5 sm:p-6 bg-[#0E1013] space-y-5">
            {/* Overview Header */}
            <div>
              <h3 className="text-base font-semibold text-white tracking-tight">Overview</h3>
              <p className="text-[11px] text-[#747780] mt-0.5">
                Real-time automation activity at a glance.
              </p>
            </div>

            {/* 4 Top Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Card 1: Workflows */}
              <div className="p-3.5 rounded-lg border border-[#1E2024] bg-[#121418]">
                <div className="flex items-center justify-between text-[#747780] text-[10px] mb-1">
                  <span>Workflows</span>
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                </div>
                <div className="text-lg font-semibold text-white tracking-tight">12 active</div>
              </div>

              {/* Card 2: Messages (24h) */}
              <div className="p-3.5 rounded-lg border border-[#1E2024] bg-[#121418]">
                <div className="flex items-center justify-between text-[#747780] text-[10px] mb-1">
                  <span>Messages (24h)</span>
                  <MessageSquare className="h-3 w-3 text-[#A0A2A8]" />
                </div>
                <div className="text-lg font-semibold text-white tracking-tight">4,280</div>
              </div>

              {/* Card 3: Success Rate */}
              <div className="p-3.5 rounded-lg border border-[#1E2024] bg-[#121418]">
                <div className="flex items-center justify-between text-[#747780] text-[10px] mb-1">
                  <span>Success rate</span>
                  <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                </div>
                <div className="text-lg font-semibold text-white tracking-tight">99.2%</div>
              </div>

              {/* Card 4: Failed */}
              <div className="p-3.5 rounded-lg border border-[#1E2024] bg-[#121418]">
                <div className="flex items-center justify-between text-[#747780] text-[10px] mb-1">
                  <span>Failed</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-rose-500/20 text-rose-400 font-medium">
                    Alert
                  </span>
                </div>
                <div className="text-lg font-semibold text-white tracking-tight">34</div>
              </div>
            </div>

            {/* Bottom Row: Execution Trend + Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3.5">
              {/* Left: Execution Trend Bar Chart (3 cols) */}
              <div className="lg:col-span-3 p-3.5 rounded-lg border border-[#1E2024] bg-[#121418] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3 text-[11px]">
                  <span className="font-medium text-white flex items-center gap-1.5">
                    <TrendingUp className="h-3 w-3 text-[#10B981]" />
                    Execution trend
                  </span>
                  <span className="text-[10px] text-[#747780]">Last 7 days</span>
                </div>
                <div className="h-24 flex items-end justify-between gap-2.5 pt-2 px-2">
                  {[
                    { day: 'Mon', h: '62%' },
                    { day: 'Tue', h: '78%' },
                    { day: 'Wed', h: '92%' },
                    { day: 'Thu', h: '84%' },
                    { day: 'Fri', h: '98%' },
                    { day: 'Sat', h: '45%' },
                    { day: 'Sun', h: '55%' },
                  ].map((bar) => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        className="w-full max-w-[28px] rounded-t bg-[#2C3038] hover:bg-white transition-colors"
                        style={{ height: bar.h }}
                      />
                      <span className="text-[9px] text-[#747780]">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Recent Activity (2 cols) */}
              <div className="lg:col-span-2 p-3.5 rounded-lg border border-[#1E2024] bg-[#121418]">
                <div className="flex items-center justify-between mb-3 text-[11px]">
                  <span className="font-medium text-white">Recent activity</span>
                  <span className="text-[10px] text-[#747780]">Live</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded border border-[#1E2024] bg-[#0E1013]">
                    <div className="flex items-center gap-2 truncate">
                      <MessageSquare className="h-3 w-3 text-[#25D366] shrink-0" />
                      <div className="truncate">
                        <div className="text-[11px] font-medium text-white truncate">Customer follow-up</div>
                        <div className="text-[9px] text-[#747780]">2m ago</div>
                      </div>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] font-mono shrink-0">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded border border-[#1E2024] bg-[#0E1013]">
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="h-3 w-3 text-sky-400 shrink-0" />
                      <div className="truncate">
                        <div className="text-[11px] font-medium text-white truncate">Order notification</div>
                        <div className="text-[9px] text-[#747780]">5m ago</div>
                      </div>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] font-mono shrink-0">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Bottom Gradient Overlay that seamlessly dissolves into #08090A */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08090A] via-[#08090A]/80 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
