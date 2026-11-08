# Pathixo Flow - Project Roadmap

This document provides a high-level overview of our phased delivery roadmap aligned with the canonical **M0–M5 engineering milestones**.

For detailed requirement traceability and granular engineering tasks, refer to:
* **[docs/TASKS.md](docs/TASKS.md)**: Actionable task checklist by milestone.
* **[.planning/ROADMAP.md](.planning/ROADMAP.md)**: Detailed phase structure and verification gates.
* **[.planning/MILESTONES.md](.planning/MILESTONES.md)**: Engineering milestone definitions and tracking.
* **[.planning/REQUIREMENTS.md](.planning/REQUIREMENTS.md)**: Traceable P0/P1/P2 requirements matrix.

---

## Phased Milestones

```mermaid
flowchart LR
    M0["M0: Platform Inception & Foundation"] --> M1["M1: Shared Reliability & Financial Core"]
    M1 --> M2["M2: WhatsApp Automation (MVP)"]
    M1 --> M3["M3: Email Automation (MVP)"]
    M2 --> M4["M4: Client Delivery Hardening"]
    M3 --> M4
    M4 --> M5["M5: Multi-Channel & Financial Close"]
```

### M0: Technical Decisions & Repository Foundation (Current)
* Monorepo workspace tooling & CI baseline (`pnpm`, `apps/web`, `packages/`).
* Formal Architecture Decision Records (`docs/DECISION.md`).
* High-level documentation suite (`docs/`).
* Automated security firewalls, Dependabot, and scheduled scans.
* Design system tokens (`packages/design-tokens`) and accessible UI primitives (`packages/ui`).
* Dark-themed marketing landing page and interactive pipeline preview simulator.
* Authentication and authenticated console route shells.

### M1: Shared Reliability & Financial Metering Engine
* Configuration validation with Zod and secret masking (`packages/configuration`).
* Structured logging and correlation IDs (`packages/observability`).
* Durable BullMQ background queue with bounded retries (`packages/queue`, `packages/retry`).
* **P0 Financial Metering**: Immutable `UsageEvent` ledger and versioned rate cards (`packages/billing-core`).
* Test harness with deterministic provider fakes (`packages/testing`).

### M2: WhatsApp Automation Service (MVP)
* Meta WhatsApp Business Platform / Cloud API integration.
* Cryptographic webhook verification and async event ingestion.
* Outbound template validation and consent checks.
* Starter client workflows: Lead acknowledgement and appointment follow-up.

### M3: Email Automation Service (MVP)
* Decoupled Amazon SES and Resend provider adapters.
* Version-controlled email template engine with safe variable interpolation.
* Inbound bounce, complaint, and unsubscribe event processing.
* Starter client workflows: Payment reminders and onboarding notifications.

### M4: Client Delivery Hardening & Deployment Packs
* Client onboarding templates and discovery checklists.
* Per-client isolated Docker Compose deployment manifests.
* Health/readiness checks and dead-letter replay CLI utility.
* Operational runbooks for backup/restore and credential rotation.

### M5: Cross-Channel Workflows & Operational Close
* Combined WhatsApp + Email sequence templates.
* Monthly financial close tooling: internal usage vs. provider invoice reconciliation.
* Engineering hours and margin measurement.
