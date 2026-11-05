# Pathixo Flow - Engineering Tasks & Action Items

## Milestone 1: Platform Inception & Technical Foundations

### Phase 0: Technical Decisions & Repository Baseline (Current)
- [x] Complete Inception Assessment & Project Charter (`.planning/PROJECT.md`).
- [x] Map PRD and Financial requirements matrix (`.planning/REQUIREMENTS.md`).
- [x] Establish Phased Execution Roadmap (`.planning/ROADMAP.md`).
- [x] Configure CI workflows, security firewalls, and 4x/day scheduled scans (`.github/workflows/`).
- [x] Author High-Level Documentation Suite (`docs/PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `DECISION.md`, `SCOPE.md`, `TASKS.md`).
- [ ] Initialize root monorepo tooling (`package.json`, `pnpm-workspace.yaml`, `tsconfig.json`).
- [ ] Scaffold `apps/` and `packages/` directory hierarchy.

---

### Phase 1: Shared Reliability & Financial Metering Engine
- [ ] Implement `packages/configuration` (Zod schemas, env loader, secret masker).
- [ ] Implement `packages/observability` (structured JSON logging, correlation IDs).
- [ ] Implement `packages/queue` and `packages/retry` (BullMQ wrapper, bounded backoff, DLQ).
- [ ] Implement `packages/billing-core` (P0 UsageEvent schema, versioned rate cards, idempotency guard).
- [ ] Implement `packages/testing` (shared provider fakes and deterministic test fixtures).
- [ ] Deliver end-to-end local test demonstrating asynchronous workflow execution with cost attribution.

---

### Phase 2: WhatsApp Automation Service (MVP)
- [ ] Scaffold `apps/whatsapp-automation`.
- [ ] Build Meta webhook verification endpoint (`GET /webhook`).
- [ ] Build webhook event ingestion and queue publisher (`POST /webhook`).
- [ ] Implement `WhatsAppProvider` adapter (Meta Cloud API).
- [ ] Implement template parameter validator and consent check.
- [ ] Build starter client workflow: Inbound lead acknowledgement and appointment follow-up.
- [ ] Verify outbound usage is recorded in `billing-core`.

---

### Phase 3: Email Automation Service (MVP)
- [ ] Scaffold `apps/email-automation`.
- [ ] Implement `EmailProvider` adapter (Amazon SES and Resend).
- [ ] Implement template engine with variable validation and preview mode.
- [ ] Implement bounce, complaint, and unsubscribe event webhook handler.
- [ ] Enforce outbound suppression list checks.
- [ ] Build starter client workflow: Invoice/payment reminder and onboarding notification.

---

### Phase 4: Client Delivery Hardening & Deployment Automation
- [ ] Author client discovery questionnaire and workflow specification templates.
- [ ] Build standard Dockerfile and Docker Compose manifests for client deployments.
- [ ] Implement `/health/live` and `/health/ready` endpoints across all apps.
- [ ] Build dead-letter queue inspection and guarded replay CLI tool.
- [ ] Write operational runbooks: Database backup/restore, credential rotation, and incident escalation.
