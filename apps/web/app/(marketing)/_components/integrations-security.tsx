import * as React from 'react';
import {
  MessageSquare,
  Mail,
  Webhook,
  Briefcase,
  Users,
  Calendar,
  Bell,
  Cpu,
  Lock,
  KeyRound,
  Activity,
} from 'lucide-react';

export function IntegrationsSecurity() {
  return (
    <div className="space-y-24 py-16 md:py-24 border-t border-[#1E2024] bg-[#08090A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24">
        {/* Section 1: Integrations */}
        <section id="integrations" className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A0A2A8]">
              Integrations
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white">
              Works with your tools.
            </h2>
            <p className="text-sm text-[#A0A2A8] leading-relaxed">
              Connect with messaging providers, email platforms, business applications, and custom APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-[#25272B] bg-[#0E1013] space-y-2 hover:bg-[#121418] transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#25272B] bg-[#14161A] text-[#25D366]">
                <MessageSquare className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">WhatsApp</h3>
              <p className="text-[11px] text-[#A0A2A8]">Business Platform</p>
            </div>

            <div className="p-5 rounded-xl border border-[#25272B] bg-[#0E1013] space-y-2 hover:bg-[#121418] transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#25272B] bg-[#14161A] text-sky-400">
                <Mail className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Email</h3>
              <p className="text-[11px] text-[#A0A2A8]">(SES, Resend, etc.)</p>
            </div>

            <div className="p-5 rounded-xl border border-[#25272B] bg-[#0E1013] space-y-2 hover:bg-[#121418] transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#25272B] bg-[#14161A] text-purple-400">
                <Webhook className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">APIs & Webhooks</h3>
              <p className="text-[11px] text-[#A0A2A8]">Custom integrations</p>
            </div>

            <div className="p-5 rounded-xl border border-[#25272B] bg-[#0E1013] space-y-2 hover:bg-[#121418] transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#25272B] bg-[#14161A] text-amber-400">
                <Briefcase className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Business Tools</h3>
              <p className="text-[11px] text-[#A0A2A8]">(CRM, ERP, etc.)</p>
            </div>
          </div>
        </section>

        {/* Section 2: Built for Real Business Needs */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white">
              Built for real business needs.
            </h2>
            <p className="text-sm text-[#A0A2A8] leading-relaxed">
              Flexible automation for a wide range of operations and industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#121418] text-[#A0A2A8]">
                <Users className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Customer Communication</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                Automated customer onboarding, support triage, and conversational updates.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#121418] text-[#A0A2A8]">
                <Calendar className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Lead Follow-ups</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                Immediate qualification outreach and automated meeting reminder flows.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#121418] text-[#A0A2A8]">
                <Bell className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Transactional Notifications</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                Instant order confirmations, invoice deliveries, and payment receipts.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#121418] text-[#A0A2A8]">
                <Cpu className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Operational Workflows</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                System monitoring, alert routing, and internal cross-tool data sync.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Secure and Reliable by Design */}
        <section id="reliability" className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white">
              Secure and reliable by design.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2.5 p-6 rounded-xl border border-[#25272B] bg-[#0E1013]">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#14161A] text-white mb-3">
                <Lock className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Isolated Environments</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                Secure, client-specific workspaces with controlled access and zero data contamination.
              </p>
            </div>

            <div className="space-y-2.5 p-6 rounded-xl border border-[#25272B] bg-[#0E1013]">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#14161A] text-white mb-3">
                <KeyRound className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Safe Integrations</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                Encrypted credential handling, runtime token injection, and cryptographic HMAC checks.
              </p>
            </div>

            <div className="space-y-2.5 p-6 rounded-xl border border-[#25272B] bg-[#0E1013]">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#25272B] bg-[#14161A] text-white mb-3">
                <Activity className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-white">Operational Visibility</h3>
              <p className="text-[11px] text-[#A0A2A8] leading-relaxed">
                Monitor executions, errors, dead-letter quarantine, and overall system health.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
