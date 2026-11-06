'use client';

import * as React from 'react';
import {
  Search,
  Bell,
  Home,
  GitBranch,
  MessageSquare,
  Mail,
  Layers,
  Users,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  SlidersHorizontal,
  ChevronDown,
} from 'lucide-react';

export function DashboardPreview() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 22, y: 0, z: 0 });
  const [glare, setGlare] = React.useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX; // -1 (left) to 1 (right)
    const deltaY = (y - centerY) / centerY; // -1 (top) to 1 (bottom)

    // Interactive 3D physical response:
    // Base pitch is 22deg. Moving mouse down increases tilt slightly; moving up flattens slightly.
    // Moving mouse to right (deltaX > 0) rotates on Y axis by up to +12deg, tucking the side.
    // Subtle Z roll gives realistic physical inertia.
    setTilt({
      x: 22 - deltaY * 7,
      y: deltaX * 12,
      z: deltaX * -1.8,
    });

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.14,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 22, y: 0, z: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[1200px] mx-auto [perspective:1400px] cursor-pointer select-none transition-all duration-300"
    >
      {/* Specular ambient background glow for depth */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-gradient-to-b from-white/10 to-transparent blur-3xl opacity-60 rounded-full"
        aria-hidden="true"
      />

      {/* 3D Angular Tilt Window Frame */}
      <div
        className="relative rounded-2xl border-t border-t-white/25 border-x border-x-white/10 border-b border-b-white/5 bg-gradient-to-b from-[#131519] via-[#0E1013] to-[#0A0C0E] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.95),0_0_80px_rgba(255,255,255,0.04)] overflow-hidden font-sans text-xs will-change-transform"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(${tilt.z}deg) scale(0.98)`,
          transformOrigin: '50% 0%',
          transition: isHovered
            ? 'transform 0.08s ease-out'
            : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic mouse-following specular glare */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* Subtle static glass sheen */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06]"
          aria-hidden="true"
        />

        {/* Window Titlebar */}
        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#22252B] bg-[#0B0D10]/80 backdrop-blur-md">
          {/* Left Brand Mark */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-white text-black font-bold text-[10px] shadow-sm">
              F
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-semibold text-white tracking-tight">Pathixo Flow</span>
              <span className="text-[10px] text-[#747780] font-mono hidden sm:inline">v2.0</span>
            </div>
          </div>

          {/* Center Search / Command Bar */}
          <div className="hidden sm:flex items-center justify-between w-96 px-3 py-1.5 rounded-lg border border-[#262930] bg-[#14161B] text-[#747780] shadow-inner">
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-[#747780]" />
              <span className="text-[11px] text-[#8A8D96]">Search workflows, templates, executions...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-[#1D2026] border border-[#2C3038] text-[9px] font-mono text-[#A0A2A8]">
              ⌘K
            </kbd>
          </div>

          {/* Right Header Status, Notifications & Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Operational</span>
            </div>

            <button
              type="button"
              className="relative p-1.5 rounded-md border border-[#22252B] bg-[#14161B] text-[#A0A2A8] hover:text-white transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-3.5 w-3.5" />
              <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
            </button>

            <div className="flex items-center gap-2 pl-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#25272B] to-[#3B3E45] text-white text-[11px] font-semibold border border-white/20 shadow-sm">
                P
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Body: Sidebar + Main Workspace */}
        <div className="relative z-10 flex flex-col md:flex-row min-h-[460px]">
          {/* Left Sidebar */}
          <aside className="w-full md:w-52 border-b md:border-b-0 md:border-r border-[#22252B] bg-[#0C0E11]/80 p-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-[#63666F]">
                Main Menu
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-white/[0.08] text-white font-medium border border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Home className="h-3.5 w-3.5 text-white" />
                  <span>Overview</span>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-2.5">
                  <GitBranch className="h-3.5 w-3.5 text-[#8A8D96]" />
                  <span>Workflows</span>
                </div>
                <span className="text-[10px] font-mono text-[#747780] px-1.5 py-0.2 rounded bg-[#181A20]">12</span>
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </div>
                <span className="text-[10px] font-mono text-[#747780] px-1.5 py-0.2 rounded bg-[#181A20]">4.2k</span>
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-3.5 w-3.5 text-sky-400" />
                  <span>Email</span>
                </div>
                <span className="text-[10px] font-mono text-[#747780] px-1.5 py-0.2 rounded bg-[#181A20]">1.8k</span>
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-3.5 w-3.5 text-[#8A8D96]" />
                  <span>Integrations</span>
                </div>
                <span className="text-[9px] text-emerald-400 font-mono">Active</span>
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#A0A2A8] hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-2.5">
                  <Users className="h-3.5 w-3.5 text-[#8A8D96]" />
                  <span>Clients</span>
                </div>
                <span className="text-[10px] font-mono text-[#747780] px-1.5 py-0.2 rounded bg-[#181A20]">8</span>
              </div>
            </div>

            {/* Bottom Workspace Switcher */}
            <div className="pt-3 border-t border-[#22252B] mt-4">
              <div className="p-2 rounded-lg border border-[#262930] bg-[#121418] flex items-center justify-between">
                <div className="truncate">
                  <div className="text-[11px] font-medium text-white truncate">Acme Enterprise</div>
                  <div className="text-[9px] text-[#747780]">Tier 2 Production</div>
                </div>
                <ChevronDown className="h-3 w-3 text-[#747780] shrink-0" />
              </div>
            </div>
          </aside>

          {/* Main Dashboard Pane */}
          <main className="flex-1 p-5 sm:p-7 space-y-6 bg-[#0E1013]/90">
            {/* Overview Header with Date Range */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight">Good morning</h3>
                <p className="text-xs text-[#8A8D96] mt-0.5">
                  Here&apos;s what&apos;s happening across your automations today.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#262930] bg-[#14161B] text-[11px] text-[#A0A2A8]">
                  <span>Last 7 days</span>
                  <ChevronDown className="h-3 w-3 text-[#747780]" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#262930] bg-[#14161B] text-[11px] text-[#A0A2A8]">
                  <SlidersHorizontal className="h-3 w-3 text-[#747780]" />
                  <span>Filter</span>
                </div>
              </div>
            </div>

            {/* 4 Rich Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Card 1: Automations */}
              <div className="p-4 rounded-xl border border-[#22252B] bg-gradient-to-b from-[#14161B] to-[#101216] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#8A8D96] text-[11px]">
                  <span>Automations</span>
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    +12%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">24</div>
                <div className="text-[10px] text-[#747780]">12 active workflows</div>
              </div>

              {/* Card 2: Executions */}
              <div className="p-4 rounded-xl border border-[#22252B] bg-gradient-to-b from-[#14161B] to-[#101216] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#8A8D96] text-[11px]">
                  <span>Executions</span>
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    +8%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">1,248</div>
                <div className="text-[10px] text-[#747780]">avg 18ms latency</div>
              </div>

              {/* Card 3: Messages Sent */}
              <div className="p-4 rounded-xl border border-[#22252B] bg-gradient-to-b from-[#14161B] to-[#101216] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#8A8D96] text-[11px]">
                  <span>Messages sent</span>
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    +11%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">48,320</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-2.5 w-2.5" />
                  99.2% delivered
                </div>
              </div>

              {/* Card 4: Failures */}
              <div className="p-4 rounded-xl border border-[#22252B] bg-gradient-to-b from-[#14161B] to-[#101216] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#8A8D96] text-[11px]">
                  <span>Failures</span>
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    -40%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">12</div>
                <div className="text-[10px] text-[#747780]">0 DLQ quarantined</div>
              </div>
            </div>

            {/* Bottom Row: Execution Trend + Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left: Execution Trend Bar Chart (7 cols) */}
              <div className="lg:col-span-7 p-4 rounded-xl border border-[#22252B] bg-[#121418] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-xs font-semibold text-white">Execution Trend</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#747780] bg-[#181A20] px-2 py-0.5 rounded border border-[#262930]">
                    Peak: 9,420 / day
                  </div>
                </div>

                {/* 7-Day Bar Graph */}
                <div className="h-32 flex items-end justify-between gap-3 pt-3 px-2 border-b border-[#1E2127] pb-2">
                  {[
                    { day: 'Mon', h: '55%', count: '6.2k' },
                    { day: 'Tue', h: '72%', count: '7.8k' },
                    { day: 'Wed', h: '88%', count: '8.9k' },
                    { day: 'Thu', h: '82%', count: '8.4k' },
                    { day: 'Fri', h: '98%', count: '9.4k', active: true },
                    { day: 'Sat', h: '42%', count: '4.1k' },
                    { day: 'Sun', h: '50%', count: '5.0k' },
                  ].map((bar) => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-white mb-1">
                        {bar.count}
                      </div>
                      <div
                        className={`w-full max-w-[32px] rounded-t transition-all ${
                          bar.active
                            ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                            : 'bg-[#2A2E37] group-hover:bg-[#404654]'
                        }`}
                        style={{ height: bar.h }}
                      />
                      <span className={`text-[10px] ${bar.active ? 'text-white font-semibold' : 'text-[#747780]'}`}>
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Recent Executions (5 cols) */}
              <div className="lg:col-span-5 p-4 rounded-xl border border-[#22252B] bg-[#121418] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-white">Recent Executions</span>
                  <a href="#workflows" className="text-[10px] text-[#A0A2A8] hover:text-white flex items-center gap-1 transition-colors">
                    View all
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#22252B] bg-[#0E1013] hover:border-[#2C3038] transition-colors">
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#25D366]/15 text-[#25D366] shrink-0 border border-[#25D366]/20">
                        <MessageSquare className="h-3 w-3" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-medium text-white truncate">Customer follow-up</div>
                        <div className="text-[9px] text-[#747780] font-mono">wamid.HBgL... &bull; 2m ago</div>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium shrink-0">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#22252B] bg-[#0E1013] hover:border-[#2C3038] transition-colors">
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/15 text-sky-400 shrink-0 border border-sky-500/20">
                        <Mail className="h-3 w-3" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-medium text-white truncate">Order confirmation #482</div>
                        <div className="text-[9px] text-[#747780] font-mono">ses.msg_98a... &bull; 5m ago</div>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium shrink-0">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#22252B] bg-[#0E1013] hover:border-[#2C3038] transition-colors">
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-500/15 text-purple-400 shrink-0 border border-purple-500/20">
                        <Layers className="h-3 w-3" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-medium text-white truncate">CRM Contact Sync</div>
                        <div className="text-[9px] text-[#747780] font-mono">hook.lead_01... &bull; 12m ago</div>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium shrink-0">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
