# Pathixo Flow - Milestone History & Tracking

This document defines the canonical **M0–M5 Engineering Milestone Grouping** for Pathixo Flow, establishing consistent tracking across GitHub issues, PR labelers, and delivery roadmaps.

---

## GitHub Milestone Mapping (M0–M5)

The following cross-reference table establishes the bidirectional mapping between the live GitHub Milestones, their active issue numbers, and their corresponding ROADMAP execution phases:

| GitHub Milestone | Milestone Title | Corresponding ROADMAP Phases | Active & Key Issue #s | Milestone Focus & Core Deliverables |
| :---: | :--- | :--- | :--- | :--- |
| **M0** | Repository and engineering foundation | Phase 0 | [#1](https://github.com/pathixo/pathixo-flow/pull/1), [#2](https://github.com/pathixo/pathixo-flow/pull/2), [#3](https://github.com/pathixo/pathixo-flow/pull/3), [#13](https://github.com/pathixo/pathixo-flow/issues/13) | Monorepo baseline (`pnpm`), ADRs 001–005, CI/CD pipelines, security firewalls, governance docs. |
| **M1** | Frontend foundation and internal console | Phases 6, 7, 8, 9, 10 (Milestone v2.0) | [#14](https://github.com/pathixo/pathixo-flow/issues/14), [#15](https://github.com/pathixo/pathixo-flow/issues/15), [#16](https://github.com/pathixo/pathixo-flow/issues/16), [#17](https://github.com/pathixo/pathixo-flow/issues/17), [#18](https://github.com/pathixo/pathixo-flow/issues/18), [#35](https://github.com/pathixo/pathixo-flow/pull/35), [#45](https://github.com/pathixo/pathixo-flow/issues/45), [#56](https://github.com/pathixo/pathixo-flow/pull/56) | Design tokens, accessible Radix UI, marketing landing page, preview simulator, route shells (`(auth)`, `(app)`). |
| **M2** | Backend foundation and financial core | Phase 1 | [#19](https://github.com/pathixo/pathixo-flow/issues/19), [#20](https://github.com/pathixo/pathixo-flow/issues/20), [#21](https://github.com/pathixo/pathixo-flow/issues/21), [#22](https://github.com/pathixo/pathixo-flow/issues/22), [#23](https://github.com/pathixo/pathixo-flow/issues/23), [#24](https://github.com/pathixo/pathixo-flow/issues/24) | `packages/configuration`, `packages/queue`, `packages/retry`, `packages/billing-core` (P0 ledger), `packages/observability`. |
| **M3** | WhatsApp automation MVP | Phase 2 | [#25](https://github.com/pathixo/pathixo-flow/issues/25), [#26](https://github.com/pathixo/pathixo-flow/issues/26), [#27](https://github.com/pathixo/pathixo-flow/issues/27), [#28](https://github.com/pathixo/pathixo-flow/issues/28), [#36](https://github.com/pathixo/pathixo-flow/issues/36) | Meta Cloud API v21.0, HMAC webhook verification, template validation, STOP opt-out, rate-card attribution. |
| **M4** | Email automation MVP | Phase 3 | [#29](https://github.com/pathixo/pathixo-flow/issues/29), [#30](https://github.com/pathixo/pathixo-flow/issues/30), [#31](https://github.com/pathixo/pathixo-flow/issues/31), [#32](https://github.com/pathixo/pathixo-flow/issues/32), [#37](https://github.com/pathixo/pathixo-flow/issues/37) | Amazon SES & Resend adapters, template engine, bounce/complaint webhooks, unit spend ledgering. |
| **M5** | Operational hardening and internal pilot | Phases 4 & 5 | [#33](https://github.com/pathixo/pathixo-flow/issues/33), [#34](https://github.com/pathixo/pathixo-flow/issues/34), [#38](https://github.com/pathixo/pathixo-flow/issues/38), [#39](https://github.com/pathixo/pathixo-flow/issues/39), [#40](https://github.com/pathixo/pathixo-flow/issues/40), [#41](https://github.com/pathixo/pathixo-flow/issues/41), [#42](https://github.com/pathixo/pathixo-flow/issues/42), [#43](https://github.com/pathixo/pathixo-flow/issues/43), [#44](https://github.com/pathixo/pathixo-flow/issues/44) | Docker client deployment packs, health/readiness probes, DLQ replay CLI, monthly financial close reconciliation. |

---

## M0: Repository and Engineering Foundation

**Status**: Complete  
**Duration**: 2026-11-05  
**Corresponding Phase**: Phase 0  

**Goal**: Establish authoritative architectural decisions through ADRs, initialize root monorepo tooling with strict CI/security firewalls, and document governance guidelines.

**Delivered:**
- Project charter and scope definition (`.planning/PROJECT.md`).
- PRD-derived traceable requirements matrix (`.planning/REQUIREMENTS.md`).
- Phased roadmap: Phase 0–5 (`.planning/ROADMAP.md`).
- CI/CD pipelines (lint, typecheck, build verification).
- Automated security firewalls (credential leak prevention, RFC test number enforcement, vulnerability scanning, dependabot).
- Governance documentation suite (README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, SUPPORT, ROADMAP).
- GitHub automation (exclusive PR labeler, issue templates, PR template, release drafter).
- Comprehensive UI/UX design specification (`docs/DESIGN.md`).
- Engineering rules and quality gates (`docs/RULES.md`).
- Technical specification with domain entities (`docs/TECHNICAL_SPECIFICATION.md`).
- Architecture decision records ADR-001 through ADR-005 (`docs/DECISION.md`).

---

## M1: Frontend Foundation and Internal Console ← CURRENT

**Status**: In Progress  
**Started**: 2026-11-06  
**Corresponding Phases**: Phases 6, 7, 8, 9, 10 (Milestone v2.0)  

**Goal**: Establish the frontend application architecture, design system primitives, production-quality dark-themed marketing landing page, interactive preview simulator, and operational route shells.

**Delivered & Completed Tracks:**
- Root monorepo workspace tooling (`package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`).
- Shared design tokens package (`packages/design-tokens`) with CSS variables and Tailwind v4 preset.
- Accessible Radix UI component library (`packages/ui`) adhering to anti-AI-slop design invariants.
- Next.js 15 App Router web application (`apps/web`).
- Interactive 3-stage live product preview simulator (`apps/web/components/preview/`).
- Production-grade dark-themed marketing landing page (`apps/web/app/(marketing)/`).

**Remaining In-Flight Tracks for M1 Close:**
- Phase 9: Auth (`/login`, `/signup`) and console (`/workspace`) route shells.
- Phase 10: Validation, WCAG AA accessibility audit, and synchronized documentation.

---

## M2: Backend Foundation and Financial Core

**Status**: Planned  
**Dependencies**: M0  
**Corresponding Phase**: Phase 1  

**Goal**: Build the reusable execution primitives, background job processing, and P0 financial usage metering before building channel-specific automation logic.

**Target Deliverables:**
- `packages/configuration`: Strict Zod schema validation for runtime configs with automated secret redaction.
- `packages/observability`: Structured JSON logging with correlation ID tracing and automated PII sanitization.
- `packages/queue`: Durable BullMQ background queue registration and worker lifecycle management.
- `packages/retry`: Bounded retry classification (transient vs. permanent) with exponential backoff and jitter.
- `packages/billing-core`:
  - Immutable `UsageEvent` financial ledger schema.
  - Versioned, effective-dated `RateCard` registry.
  - Idempotency guard guaranteeing zero duplicate billable usage records.
  - Client quota verification and low-balance warning triggers.
- `packages/testing`: Test harness with shared provider fakes and deterministic replay tests.

---

## M3: WhatsApp Automation MVP

**Status**: Planned  
**Dependencies**: M2  
**Corresponding Phase**: Phase 2  

**Goal**: Deliver a production-ready, independently deployable WhatsApp automation service with verified Meta Cloud API integration.

**Target Deliverables:**
- Provider webhook endpoint with cryptographic HMAC-SHA256 signature verification.
- Fast asynchronous webhook ingestion with sub-2s acknowledgement.
- Outbound message and template dispatch via decoupled `WhatsAppProvider` adapter.
- Outbound template parameter validation before dispatch.
- User consent and opt-out suppression check.
- Bounded retry handling with provider rate-limit backoff.
- Production usage attribution into `packages/billing-core` for all outbound messages.
- Starter workflows: Lead acknowledgement and appointment follow-up.

---

## M4: Email Automation MVP

**Status**: Planned  
**Dependencies**: M2  
**Corresponding Phase**: Phase 3  

**Goal**: Deliver a production-ready, independently deployable Email automation service supporting Amazon SES and Resend.

**Target Deliverables:**
- Decoupled `EmailProvider` adapter supporting Amazon SES and Resend.
- Version-controlled email template engine with safe variable interpolation.
- Idempotent send processing preventing duplicate emails.
- Inbound webhook processing for bounces, complaints, deliveries, and unsubscribes.
- Automated suppression-list checks before dispatch.
- Itemized financial usage records recorded in `packages/billing-core`.
- Starter workflows: Invoice/payment reminder and new lead acknowledgement.

---

## M5: Operational Hardening and Internal Pilot

**Status**: Planned  
**Dependencies**: M3, M4  
**Corresponding Phases**: Phases 4 & 5  

**Goal**: Package the platform into a repeatable, low-friction deployment toolkit for client engagements and execute multi-channel sequences with financial reconciliation.

**Target Deliverables:**
- Client onboarding discovery questionnaire and workflow specification templates.
- Isolated client deployment packages (Docker Compose and container manifests).
- Production readiness endpoints (`/health/live`, `/health/ready`) and startup self-checks.
- Operator dead-letter queue (DLQ) inspection and guarded replay CLI.
- Operational runbooks: Database backup/restore, credential rotation, and incident escalation.
- Combined WhatsApp + Email sequence templates (WhatsApp notification with Email fallback/receipt).
- Monthly financial close tooling: compare internal usage ledgers with external provider invoices.
- Shared cost allocation scripts dividing base infrastructure expenses across active clients.
- Delivery metrics measurement and reconciliation reporting demonstrating $\le 2\%$ variance against provider billing.
