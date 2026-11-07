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

- [ ] `apps/web`
- [ ] `packages/design-tokens`
- [ ] `packages/ui`
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
- [ ] `docs/` / Documentation & ADRs

## Traceability & Requirements Mapping

- PRD / Requirements ID (e.g. `CORE-001`, `WA-005`, `FIN-001`): 
- Closes / Fixes Issue: #

## Mandatory Security & Policy Checklist (All Must Be Checked)

- [ ] **Application Isolation**: Changes in one app do not break independent compilation/deployment of the other.
- [ ] **Zero Credential Leaks**: No Meta System User Tokens (`EAA...`), phone IDs, Resend keys, or secrets are present in code or fixtures.
- [ ] **WhatsApp Business Policy Compliance**: Workflows verify explicit opt-in/consent before dispatch; out-of-session dispatches use approved templates only; opt-out keywords (`STOP`) are honored.
- [ ] **Idempotency Guard**: All outbound dispatches and webhook ingestions enforce duplicate prevention via unique idempotency keys.
- [ ] **Financial Metering Attribution**: Outbound billable events emit traceable usage records with dynamic rate cards from `@pathixo/billing-core`.
- [ ] **Quality Checks**: Local tests, linting, and typechecks pass (`pnpm run typecheck && pnpm run test`).

## Testing Performed

Describe the testing performed to verify this change (unit tests, provider fakes, sandbox tests).
