# Pathixo Flow - Engineering Tasks & Action Items

## Milestone 1: Platform Inception & Technical Foundations

### Phase 0: Technical Decisions & Inception (Current)
- [x] Complete Inception Assessment & Project Charter (`.planning/PROJECT.md`).
- [x] Map PRD and Financial requirements matrix (`.planning/REQUIREMENTS.md`).
- [x] Establish Phased Execution Roadmap (`.planning/ROADMAP.md`).
- [x] Configure CI workflows, security firewalls, and 4x/day scheduled scans (`.github/workflows/`).
- [x] Establish High-Level Technical Specifications (`docs/PRD.md`, `ARCHITECTURE.md`, `SPEC.md`, `DECISION.md`, `SCOPE.md`).
- [x] Author Enforceable Engineering Rules (`docs/RULES.md`).
- [x] Rebuild Production Design Specifications (`docs/DESIGN.md`).
- [ ] Initialize root monorepo tooling (`package.json`, `pnpm-workspace.yaml`, `tsconfig.json`).

---

## Milestone 2: Design System & UI Component Foundation

### DS-001: Design Tokens & Base Theme
- **Description**: Configure CSS variables / Tailwind tokens for neutral foundation (`#F7F7F4`, `#FFFFFF`, `#1D2421`, `#E4E7E1`), brand terracotta (`#B85C38`), and functional chromatic families.
- **Priority**: P0
- **Dependencies**: None
- **Owner Role**: Senior Frontend Engineer / Design System Engineer
- **Acceptance Criteria**: All tokens documented in `docs/DESIGN.md` are accessible via CSS/utility classes; WCAG 2.2 AA contrast verified.

### DS-002: Core Navigation & Application Shell
- **Description**: Implement authenticated desktop application shell with collapsible sidebar, top breadcrumbs, organization switcher, and global command palette.
- **Priority**: P0
- **Dependencies**: DS-001
- **Owner Role**: Senior Frontend Engineer
- **Acceptance Criteria**: Responsive across desktop (1440px), laptop (1024px), tablet (768px), and mobile (375px); zero content-shift.

### DS-003: Core UI Component Inventory
- **Description**: Implement accessible base components (Buttons, Inputs, Select, Data Table, Modal, Drawer, Toast, Status Badge).
- **Priority**: P0
- **Dependencies**: DS-001
- **Owner Role**: Senior Frontend Engineer
- **Acceptance Criteria**: Complies with Radix UI / WCAG 2.2 AA; handles empty, loading skeleton, error, and disabled states.

---

## Milestone 3: Operational Workspaces & Workflow Canvas

### UI-001: Authentication Experience
- **Description**: Implement login, reset password, email verification, invite acceptance, and session timeout views with restrained typography.
- **Priority**: P0
- **Dependencies**: DS-003
- **Owner Role**: Frontend Engineer
- **Acceptance Criteria**: Responsive form geometry, accessible error messages, zero AI-slop visual artifacts.

### UI-002: Authenticated Dashboard & Home
- **Description**: Implement executive automation health overview, workflow activity feed, provider status, and usage summaries.
- **Priority**: P0
- **Dependencies**: DS-002, DS-003
- **Owner Role**: Frontend Engineer
- **Acceptance Criteria**: Clear visual hierarchy, no decorative rainbow charts, dense tabular data presentations.

### UI-003: WhatsApp Workspace UI
- **Description**: Implement WhatsApp management pages (Connected WABAs, phone numbers, Meta approved templates, and delivery logs).
- **Priority**: P0
- **Dependencies**: DS-003
- **Owner Role**: Frontend Engineer
- **Acceptance Criteria**: Template previewer, category indicators, 24-hour customer care window flags.

### UI-004: Email Workspace UI
- **Description**: Implement Email management pages (Sending domains, DKIM/SPF status, provider settings, and bounce/complaint logs).
- **Priority**: P0
- **Dependencies**: DS-003
- **Owner Role**: Frontend Engineer
- **Acceptance Criteria**: Clear domain health indicators, template variable validation previews.

### UI-005: Visual Workflow Canvas
- **Description**: Build node-based workflow editor for triggers, filters, WhatsApp dispatch, Email dispatch, and conditional branching.
- **Priority**: P1
- **Dependencies**: DS-003
- **Owner Role**: Senior Frontend Engineer
- **Acceptance Criteria**: Pan, zoom, node selection, edge connections, validation state indicators, undo/redo.

### UI-006: Billing & Cost Ledger UI
- **Description**: Implement client spend tables, versioned rate card views, prepaid wallet balances, and reconciliation views.
- **Priority**: P0
- **Dependencies**: DS-003
- **Owner Role**: Frontend Engineer
- **Acceptance Criteria**: Itemized tabular ledger, unit economics margin display, zero misleading chart embellishments.

---

## Milestone 4: Backend Shared Reliability & Metering Engine (Backend Stream)

### Phase 1: Shared Reliability Foundation
- [ ] Implement `packages/configuration` (Zod validation, secret masking).
- [ ] Implement `packages/observability` (structured JSON logging, correlation IDs).
- [ ] Implement `packages/queue` and `packages/retry` (BullMQ, bounded backoff, DLQ).
- [ ] Implement `packages/billing-core` (UsageEvent schema, versioned rate cards, idempotency).
- [ ] Implement `packages/testing` (shared fakes, mock providers).

### Phase 2: WhatsApp Automation MVP
- [ ] Scaffold `apps/whatsapp-automation`.
- [ ] Build Meta webhook verification and ingestion endpoints.
- [ ] Implement `WhatsAppProvider` adapter (Meta Cloud API).
- [ ] Implement template parameter validator and consent check.

### Phase 3: Email Automation MVP
- [ ] Scaffold `apps/email-automation`.
- [ ] Implement `EmailProvider` adapter (Amazon SES & Resend).
- [ ] Implement template rendering and suppression-list checks.
