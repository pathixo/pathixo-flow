# Pathixo Flow — Project Governance & Engineering Stewardship

This document defines the formal governance model, architectural stewardship principles, decision-making processes, and release authorities for **Pathixo Flow**, an enterprise multi-channel automation platform developed by **Pathixo Pvt. Ltd.**

---

## 1. Governance Principles & Philosophy

Pathixo Flow is engineered as a foundational, mission-critical automation platform supporting high-volume, compliant business communications across WhatsApp, email, and orchestrated workflows. The project adheres to five fundamental governance principles:

1. **Architectural Integrity Over Expediency**: Engineering decisions must prioritize long-term modularity, tenant isolation, strict typing, and maintainability over temporary visual shortcuts or fragile prototypes.
2. **Zero-Trust Security & Privacy Invariants**: Zero production credentials, customer personally identifiable information (PII), or live phone numbers may ever enter version control. Automated firewall gates enforce this continuously.
3. **Absolute Financial & Operational Traceability**: 100% of billable dispatches and external vendor costs must be deterministically metered, idempotently processed, and attributed to client accounts via versioned rate cards.
4. **Decoupled Runtimes & Independent Lifecycles**: A monorepo codebase does not imply a single deployable runtime. Individual applications (`apps/*`) and shared packages (`packages/*`) must maintain explicit boundary isolation.
5. **Transparent, Trackable Decisions**: All architectural pivots, protocol modifications, and cross-package breaking changes require structured documentation via Architectural Decision Records (ADRs) and traceable planning matrices.

---

## 2. Roles & Responsibilities

| Role | Responsibilities | Authority Scope |
| :--- | :--- | :--- |
| **Principal Software Architect** | Platform design, architectural standards, RFC approvals, release branch sign-off, security firewall policies. | Ultimate technical authority on architecture, breaking changes, and PR merges to `main`. |
| **Subsystem Maintainers** | Code review, package stewardship, test coverage, and milestone execution within their specific domain. | Domain approval on PRs touching their respective apps and packages. |
| **Platform & DevOps Lead** | CI/CD pipelines, containerization, environment security, release drafting, package registry configuration. | Authority over `.github/workflows/`, deployment scripts, and runner environments. |
| **Core Contributors & Engineers** | Feature implementation, test suites, documentation, refactoring, and bug fixes following conventional commits. | Authoring branches, proposing PRs, and participating in code reviews. |
| **AI Coding Agents** | Autonomous implementation, pairing, refactoring, and verification under explicit human direction. | Authoring code in designated branches compliant with [AGENTS.md](AGENTS.md) rules. |

### 2.1 Subsystem Domain Ownership

Domain maintainers oversee distinct areas of the repository:

* **Frontend & Design System**: `apps/web`, `packages/design-tokens`, `packages/ui`
* **Messaging & Communication**: `apps/whatsapp-automation`, `apps/email-automation`, `packages/automation-contracts`
* **Execution & Resiliency**: `packages/queue`, `packages/retry`, BullMQ & Redis worker infrastructure
* **Billing & Ledger**: `packages/billing-core`, cost attribution, provider usage metering
* **Platform & Observability**: `packages/configuration`, `packages/observability`, `packages/testing`, `.github/`

---

## 3. Decision-Making & RFC Process

### 3.1 Change Classification

1. **Standard Changes (No RFC Required)**:
   - Bug fixes adhering to existing architecture.
   - Non-breaking UI improvements and new marketing components.
   - Documentation updates, unit tests, and performance optimizations.
   - Dependency maintenance and patch updates.

2. **Architectural Changes (RFC / ADR Required)**:
   - Adding or removing apps or shared workspace packages.
   - Altering database schemas, queue protocols, or idempotency mechanisms.
   - Modifying rate card structures, billing ledger algorithms, or financial invariants.
   - Introducing external cloud dependencies, third-party SDKs, or state stores.
   - Breaking changes to shared TypeScript interfaces or design token semantics.

### 3.2 RFC & ADR Lifecycle

```text
[ Proposal / Draft ] ──▶ [ Maintainer Review ] ──▶ [ Accepted / Implemented ]
                                │
                                └──▶ [ Superseded / Rejected ]
```

1. **Drafting**: Create an Architectural Decision Record in `docs/` using the standard ADR format (Context, Decision, Invariants, Consequences).
2. **Review Window**: Maintainers and domain leads review the ADR within 3 business days.
3. **Consensus & Resolution**: The Principal Architect provides final sign-off. If consensus is reached, the ADR is marked `Accepted` and linked in `.planning/REQUIREMENTS.md`.

---

## 4. Branching, PR Review & Merge Policy

### 4.1 Golden Branch Protection

The `main` branch is protected and represents golden, production-ready code. Direct commits or forced pushes to `main` are strictly prohibited.

* All code changes must arrive via pull requests targeting `main`.
* PR branches must follow the branching convention:
  - `feat/<scope>-<description>`
  - `fix/<scope>-<description>`
  - `docs/<description>`
  - `refactor/<scope>-<description>`
  - `chore/<description>`

### 4.2 Mandatory CI Quality Gates

A pull request cannot be merged unless all required status checks pass:

1. **Lint & Typecheck**: Strict TypeScript compilation (`tsc --noEmit`) and ESLint checks pass with zero errors across all workspaces.
2. **Test Workspace Packages & Apps**: All automated unit and contract test suites execute cleanly.
3. **WhatsApp Policy & Privacy Firewall**: Confirms zero live international phone numbers (e.g. `+91...`) in fixtures and zero hardcoded Meta message rates in `apps/`.
4. **Meta & Credential Leak Interceptor**: Scans for leaked system tokens (`EAA...`), Resend keys (`re_...`), AWS keys (`AKIA...`), and webhook secrets.
5. **Repository Integrity & Disallowed Patterns**: Ensures presence of core inception files and blocks committed private keys, certificates, or `.env` files.
6. **PR Quality & Security Checklist**: Validates conventional commit title and verifies all mandatory compliance checkboxes in the PR description.
7. **Peer Review Approval**: At least one approving review from a maintainer or designated code owner.

---

## 5. Security & Financial Compliance Governance

### 5.1 Credential & Token Handling
* All API tokens, webhooks secrets, database credentials, and service keys must be injected strictly via runtime environment variables.
* Secrets must never be stored in source control, test fixtures, docker images, or build logs.
* Any suspected secret leak triggers immediate credential revocation and an emergency security patch.

### 5.2 Regulatory & Partner Compliance
* **Meta WhatsApp Business Platform**: Outbound messaging must strictly enforce user opt-in records and honor opt-out (`STOP`) commands. Out-of-session dispatches must use Meta-approved template messages.
* **Financial Ledger Immutability**: Usage events recorded by `@pathixo/billing-core` are append-only. Rates are locked at event timestamp and cannot be modified retroactively.

---

## 6. Code of Conduct & Dispute Resolution

All participants and contributors must abide by the [Pathixo Flow Code of Conduct](CODE_OF_CONDUCT.md).

In the event of technical deadlocks or architectural disagreements:
1. Technical merits, benchmark data, and alignment with PRD invariants are evaluated.
2. The Principal Software Architect acts as final arbiter.
3. Decisions are documented transparently in repository planning records.
