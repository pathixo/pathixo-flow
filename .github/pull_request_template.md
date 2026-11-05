## Summary of Changes

A clear, concise summary of the changes proposed in this pull request.

## Type of Change

- [ ] `feat`: New feature or capability
- [ ] `fix`: Bug fix
- [ ] `refactor`: Refactoring without functional changes
- [ ] `test`: Added or updated test suites
- [ ] `docs`: Documentation, ADRs, or planning files
- [ ] `chore`: Tooling, dependencies, or configuration changes

## Affected Components

- [ ] `apps/whatsapp-automation`
- [ ] `apps/email-automation`
- [ ] `packages/automation-contracts`
- [ ] `packages/configuration`
- [ ] `packages/queue`
- [ ] `packages/retry`
- [ ] `packages/billing-core`
- [ ] `packages/observability`
- [ ] `packages/testing`
- [ ] `.github/workflows` / CI

## Traceability & Requirements Mapping

- PRD / Requirements ID (e.g. `CORE-001`, `WA-005`, `FIN-001`): 
- Closes / Fixes Issue: #

## Core Invariant Verification

- [ ] **Application Isolation**: Changes in one app do not break independent compilation/deployment of the other.
- [ ] **No Secrets**: No production API keys, tokens, or live credentials committed.
- [ ] **Idempotency**: External side-effects or webhook handlers include duplicate prevention.
- [ ] **Financial Attribution**: Outbound billable events emit traceable usage records.
- [ ] **Quality Checks**: Local tests, linting, and typechecks pass (`pnpm run typecheck && pnpm run test`).

## Testing Performed

Describe the testing performed to verify this change (unit tests, provider fakes, sandbox tests).
