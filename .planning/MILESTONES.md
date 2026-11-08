# Pathixo Flow - Milestone History & Tracking

This document defines the canonical **M0–M5 Engineering Milestone Grouping** for Pathixo Flow, establishing consistent tracking across GitHub issues, PR labelers, and delivery roadmaps.

---

## M0: Platform Inception, Architecture & Application Foundation

**Status**: In Progress  
**Started**: 2026-11-05  

**Goal**: Establish authoritative architectural decisions through ADRs, initialize root monorepo tooling with strict CI/security firewalls, and deliver the frontend foundation (design system, dark marketing landing page, interactive preview simulator, and route shells).

**Delivered & Completed Tracks:**
- Project charter and scope definition (`.planning/PROJECT.md`).
- PRD-derived traceable requirements matrix (`.planning/REQUIREMENTS.md`).
- Phased execution roadmap with M0–M5 milestone alignment (`.planning/ROADMAP.md`).
- Automated CI/CD pipelines (lint, typecheck, build verification).
- Automated security firewalls (credential leak prevention, RFC test number enforcement).
- Governance documentation suite (README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, SUPPORT).
- High-level technical specifications (`docs/PRD.md`, `ARCHITECTURE.md`, `TECHNICAL_SPECIFICATION.md`, `DESIGN.md`, `RULES.md`).
- Architecture Decision Records ADR-001 through ADR-005 (`docs/DECISION.md`).
- Root monorepo workspace tooling (`package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`).
- Shared design tokens package (`packages/design-tokens`) with CSS variables and Tailwind v4 preset.
- Accessible Radix UI component library (`packages/ui`) adhering to anti-AI-slop design invariants.
- Next.js 15 App Router web application (`apps/web`).
- Interactive 3-stage live product preview simulator (`apps/web/components/preview/`).
- Production-grade dark-themed marketing landing page (`apps/web/app/(marketing)/`).

**Remaining In-Flight Tracks for M0 Close:**
- Phase 9: Auth (`/login`, `/signup`) and console (`/workspace`) route shells.
- Phase 10: Validation, WCAG AA accessibility audit, and synchronized documentation.

---

## M1: Shared Reliability & Financial Ledger Core

**Status**: Planned  
**Dependencies**: M0  

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

## M2: WhatsApp Automation Service (MVP)

**Status**: Planned  
**Dependencies**: M1  

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

## M3: Email Automation Service (MVP)

**Status**: Planned  
**Dependencies**: M1  

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

## M4: Client Delivery Hardening & Deployment Packs

**Status**: Planned  
**Dependencies**: M2, M3  

**Goal**: Package the platform into a repeatable, low-friction deployment toolkit for client engagements.

**Target Deliverables:**
- Client onboarding discovery questionnaire and workflow specification templates.
- Isolated client deployment packages (Docker Compose and container manifests).
- Production readiness endpoints (`/health/live`, `/health/ready`) and startup self-checks.
- Operator dead-letter queue (DLQ) inspection and guarded replay CLI.
- Operational runbooks: Database backup/restore, credential rotation, and incident escalation.

---

## M5: Cross-Channel Sequences & Financial Close

**Status**: Planned  
**Dependencies**: M4  

**Goal**: Support unified multi-channel client sequences and establish monthly financial reconciliation tooling.

**Target Deliverables:**
- Combined WhatsApp + Email sequence templates (e.g. WhatsApp notification with Email fallback/receipt).
- Monthly financial close tooling: compare internal usage ledgers with external provider invoices.
- Shared cost allocation scripts dividing base infrastructure expenses across active clients.
- Delivery metrics measurement (engineering hours per client delivery, template reuse ratio).
- Reconciliation reporting demonstrating $\le 2\%$ variance against provider billing.
