# Phase 8: Dark-Themed Marketing Landing Page - Context

**Gathered:** 2026-11-06  
**Status:** Ready for planning  
**Source:** System Prompt, Linear Visual Reference & v2.0 Specifications  

<domain>
## Phase Boundary

Phase 8 implements the complete public-facing marketing presence for Pathixo Flow, housed inside the `(marketing)` route group in `apps/web`. The design direction follows the Linear visual reference: near-black obsidian canvas (`#08090A`), restrained typography-led hierarchy, generous negative space, crisp hairline borders (`#25272B`), and zero generic AI-slop decoration.

It delivers:
1. `(marketing)` layout with sticky dark navigation header and accessible mobile drawer.
2. High-impact editorial hero section with display headline ("Automate the work. Stay in control.") and integrated product preview simulator.
3. 6 Core Capability pillars (Communication, Workflow, Integration, Monitoring, Client Isolation, Financial Metering).
4. Channel showcases: WhatsApp Cloud API & Email automation (SES/Resend).
5. Visual workflow orchestration illustration (Trigger $\to$ Condition $\to$ Action $\to$ Delivery $\to$ Ledger).
6. Integrations, use cases, and security & reliability section.
7. Final conversion CTA and multi-column footer with copyright (Pathixo Pvt. Ltd.) and real-time status pill.
</domain>

<decisions>
## Implementation Decisions

### 1. Navigation Architecture (`marketing-header.tsx`)
- **Sticky Navbar**: 56px–60px height, backdrop blur on scroll, 1px bottom border (`border-border/80`).
- **Brand Identity**: Pathixo Flow wordmark with subtle geometric symbol.
- **Navigation Links**:
  - `Product` -> `#capabilities`
  - `Channels` -> `#channels`
  - `Workflows` -> `#workflows`
  - `Reliability` -> `#reliability`
- **Action CTAs**:
  - `Sign In` -> `/login` (transitions to auth shell)
  - `Get Started` / `Request Access` -> Contact/access modal or anchor link.
- **Mobile Navigation Drawer**: Accessible dialog/drawer using Radix UI Dialog primitive with focus trap and body scroll lock.

### 2. Editorial Hero & Preview Composition (`hero.tsx`)
- **Headline**: "Automate the work. Stay in control." (44px–60px semi-bold, `-0.02em` tracking).
- **Subheadline**: "A unified automation platform for managing WhatsApp, email, and intelligent workflows, engineered for repeatable business automations with guaranteed financial attribution."
- **Dual CTAs**:
  - Primary: High-contrast button ("Get Started with Flow").
  - Secondary: Ghost outline button ("Explore Architecture" / anchor to pipeline).
- **Product Preview Integration**: Positioned below the hero copy with controlled top margin and peek framing to encourage scroll engagement.

### 3. Core Capability Bento Grid (`core-capabilities.tsx`)
6 distinct capability cards with structured hierarchy (not repeated identical cards):
1. **Multi-Channel Communication**: WhatsApp Cloud API & Amazon SES under unified contracts.
2. **Workflow Orchestration**: Durable execution graph connecting triggers to side-effects.
3. **P0 Financial Usage Metering**: Immutable ledger with date-effective rate cards.
4. **Guaranteed Persistent Idempotency**: Redis `SETNX` key locks and zero duplicate message sends.
5. **Isolated Client Boundaries**: Deployment-per-client or strict tenant segregation.
6. **Operational Telemetry & DLQ**: Sub-2s webhook ingestion, dead-letter inspection, and guarded replay.

### 4. Channel Deep Dives (`channel-showcase.tsx`)
- **WhatsApp Automation**: Meta Cloud API direct integration, approved templates (`UTILITY`, `MARKETING`), E.164 phone normalization, opt-out suppression.
- **Email Automation**: Amazon SES / Resend adapters, DKIM/SPF verification, bounce/complaint webhooks, and recipient suppression lists.

### 5. Visual Workflow Pipeline Illustration (`workflow-pipeline.tsx`)
- Visual flowchart built with frontend components and icons:
  `Inbound Webhook / API Trigger` $\to$ `Condition (Opt-In / Balance Check)` $\to$ `Action (WhatsApp / Email Dispatch)` $\to$ `Financial Ledger Entry`.

### 6. Integrations, Use Cases & Security (`integrations-security.tsx`)
- Supported categories: Messaging (Meta Cloud API), Email (Amazon SES, Resend), Compute/Queue (Node.js, Redis BullMQ), Database (PostgreSQL).
- Real business use cases: Transactional notifications, lead follow-ups, invoice reminders, and operational alerts.
- Security commitments: Zero credential leakage, hardware/container tenant isolation, audit logging.

### 7. Multi-Column Footer (`marketing-footer.tsx`)
- 4 Columns: Product, Solutions, Engineering & Architecture, Company/Legal.
- Copyright: `© 2026 Pathixo Pvt. Ltd. All rights reserved.`
- Operational Status Pill: "All systems operational (99.95% SLA)".
</decisions>

<canonical_refs>
## Canonical References

### Authoritative Specs
- `docs/DESIGN.md` — Section 5.1 (Marketing Website Architecture), Section 1.2 (Anti-AI-Slop Prohibition)
- `docs/RULES.md` — Section 1.1 (Tokens), Section 2.1 (Accessibility), Section 5.1 (Mock Data Standards)
- `.planning/research/FEATURES.md` — Section 2 (Table Stakes vs Differentiators), Section 3 (Dark Theme Palette)
- `.planning/research/ARCHITECTURE.md` — Section 1 & 2 (Route Group Strategy, `(marketing)` Layout)
</canonical_refs>

<specifics>
## Specific Requirements
- `LANDING-01`: Minimalist sticky navigation bar & mobile drawer
- `LANDING-02`: High-impact editorial hero section with preview peek
- `LANDING-03`: 6 Core Capabilities bento showcase
- `LANDING-04`: WhatsApp automation deep dive
- `LANDING-05`: Email automation deep dive
- `LANDING-06`: Visual workflow orchestration pipeline
- `LANDING-07`: Integrations, use cases, and security architecture
- `LANDING-08`: Multi-column footer with status indicator
</specifics>

<deferred>
## Deferred
- Authentication pages implementation -> Phase 9
- Authenticated console workspaces -> Phase 9
- Backend databases and worker infrastructure -> Subsequent backend milestones
</deferred>

---

*Phase: 08-dark-themed-marketing-landing-page*  
*Context gathered: 2026-11-06 via System Prompt & v2.0 Specifications*  
