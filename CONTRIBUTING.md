# Contributing to Pathixo Flow

Welcome to **Pathixo Flow**! This document provides engineering standards, workflow rules, and guidelines for contributing to our internal automation platform.

---

## 1. Development Principles

Before writing code, internalize our core project invariants:

1. **Reuse the stable parts, customize the business logic**: Build the reusable 70–80% once in shared packages; keep client customizations scoped to configuration and isolated modules.
2. **One repository does not mean one runtime**: WhatsApp and Email services must be independently buildable, testable, and deployable.
3. **No secrets in source control**: Never commit credentials, phone numbers, API keys, or actual client recipient data.
4. **Idempotency first**: Every webhook ingestion and outbound action must have persistent duplicate suppression.
5. **P0 Financial Metering**: Changes to providers or message dispatch must record billable usage events in the billing ledger.
6. **No premature abstractions**: Write code for real, repeated use cases—never build generic visual designers or complex plugin fabrics without explicit justification.

---

## 2. Git & Branching Strategy

We follow a structured Git flow centered around short-lived feature branches:

```text
main (production-ready / golden branch)
  ↑
  ├── feat/core-configuration-schema
  ├── feat/whatsapp-webhook-verification
  ├── fix/ses-suppression-check
  └── docs/adr-001-runtime
```

### Branch Naming Conventions
- `feat/<scope>-<description>`: New features or shared packages (e.g. `feat/queue-bullmq-wrapper`)
- `fix/<scope>-<description>`: Bug fixes (e.g. `fix/rate-card-effective-date`)
- `docs/<description>`: Documentation and ADR additions
- `refactor/<scope>-<description>`: Code restructuring without functional changes
- `chore/<description>`: Dependency updates, CI tooling adjustments

---

## 3. Pull Request (PR) Workflow

1. **Branch from `main`**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/whatsapp-template-validation
   ```

2. **Verify Quality Locally**:
   Run all checks across affected workspaces before submitting:
   ```bash
   pnpm run lint
   pnpm run typecheck
   pnpm run test
   ```

3. **Atomic & Conventional Commits**:
   Format commit messages according to the [Conventional Commits](https://www.conventionalcommits.org/) standard:
   ```text
   feat(whatsapp): validate template parameters before dispatch
   fix(queue): add jitter to exponential backoff calculation
   docs(adr): record ADR-002 on PostgreSQL persistence
   ```

4. **Submit PR**:
   - Fill out the PR template completely.
   - Link related issue IDs (`Fixes #12`).
   - Confirm all CI checks pass.
   - Request review from the Technical Lead.

---

## 4. Code Standards & Architecture Guidelines

* **TypeScript**: Enforce strict mode (`"strict": true`). No unchecked `any` types.
* **Schema Validation**: Use **Zod** (or equivalent validated schema parser) at all trust boundaries (HTTP requests, webhooks, environment configs, and IPC).
* **Logging Standards**:
  - Always use structured JSON logging.
  - Never log raw authorization tokens, secrets, or sensitive recipient payload content.
  - Always inject a `correlationId` into execution context.
* **Testing Discipline**:
  - All new business logic must include unit tests.
  - Provider adapters must include contract tests using provider fakes.
  - Do not write integration tests that connect to live paid third-party APIs during CI runs.

---

## 5. Security & Sensitive Information

If you identify a potential security issue or credentials leak:
1. **Do not create a public issue**.
2. Immediately contact the Technical Lead or email **security@pathixo.com**.
3. Rotate any compromised credentials immediately.
