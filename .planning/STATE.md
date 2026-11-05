# Pathixo Flow - Project State & Memory

## Current Position

Phase: Phase 6 — Monorepo Foundation & Design System Primitives
Plan: Complete (4/4 plans executed and verified)
Status: Phase 6 Complete ✓ — Ready for Phase 7
Last activity: 2026-11-06 — Executed and verified all 4 plans in Phase 6

---

## Current Status
- **Current Milestone**: v2.0 — Application Foundation & Landing Page
- **Current Phase**: Phase 6 Complete -> Ready for Phase 7 (Live Product Preview Simulator)
- **Phase Status**: Phase 6 Verified (Build & Typecheck Green)
- **Last Updated**: 2026-11-06

---

## Active Workstreams & Decisions

| Workstream | Status | Notes |
| :--- | :---: | :--- |
| **Project Identity & Scope** | **Complete** | Standalone automation delivery platform (WhatsApp & Email). Clean slate, 100% derived from PRD v1.0 & Financial Plan v1.0. |
| **Traceable Requirements** | **Complete** | Documented in `.planning/REQUIREMENTS.md` with P0/P1/P2 priorities. |
| **Phased Roadmap (v1.0)** | **Complete** | Documented in `.planning/ROADMAP.md` covering Phase 0 to Phase 5. |
| **CI/CD & Security** | **Complete** | GitHub Actions pipelines, security firewall, vulnerability scanning, dependabot. |
| **Governance & Documentation** | **Complete** | README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, SUPPORT, ROADMAP. |
| **Design Specification** | **Complete** | Comprehensive UI/UX design spec in `docs/DESIGN.md`. |
| **Technical Specification** | **Complete** | Backend domain entities, provider interfaces in `docs/TECHNICAL_SPECIFICATION.md`. |
| **v2.0 Requirements** | **In Progress** | Defining scoped requirements for application foundation & landing page. |

---

## Key Constraints & Invariants

1. **Clean Slate**: Zero technical or organizational dependency on unrelated prototypes.
2. **P0 Financial Controls**: Client spend attribution, versioned rate cards, idempotency, and quota checks are foundation requirements (Phase 1), not post-MVP add-ons.
3. **Application Autonomy**: WhatsApp and Email services must be independently buildable and deployable.
4. **Client Isolation**: Absolute segregation of credentials, recipient data, logs, and workflow state.
5. **Anti-AI-Slop**: No purple gradients, neon glows, glassmorphism, floating blobs, rainbow charts. Enforced per DESIGN.md Section 1.2.
6. **Dark Theme for Marketing Only**: Public website uses dark theme (Linear aesthetic); authenticated app uses warm neutral light theme.

---

## Accumulated Context

### Decisions
- v1.0 Milestone established project charter, requirements matrix, and phased roadmap
- Tech stack: TypeScript/Node.js (v22 LTS), pnpm workspaces, Next.js App Router, Tailwind CSS, Radix UI, Lucide Icons
- Database: PostgreSQL + Drizzle ORM; Queue: Redis + BullMQ (proposed, backend milestone)
- Design system: Geist Sans typography, 4px grid, terracotta accent for authenticated app, dark theme for marketing

### Blockers
- None

### Todos
- Define v2.0 milestone requirements
- Create v2.0 roadmap with phased execution plan
