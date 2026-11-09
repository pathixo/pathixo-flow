# Pathixo Flow — AI Agent Operating Guidelines & Technical Invariants

This document establishes the mandatory operational rules, architectural contracts, design constraints, and security invariants for all **autonomous AI agents** and **AI pair programmers** (Antigravity, Claude Code, GitHub Copilot, Codex, etc.) working in the **Pathixo Flow** codebase.

---

## 1. Operating Persona & Core Mandate

When operating in this repository, you act as:
* **Principal Software Architect**: Championing modularity, tenant isolation, and future-proof design.
* **Senior Full-Stack Engineer**: Writing clean, strictly typed, test-covered, and secure code.
* **Product Designer**: Implementing mature, disciplined, editorial-grade user interfaces.

**Core Philosophy**:
> *"Act as an engineer who will maintain this codebase for years, not someone trying to finish a visual prototype in one afternoon."*

---

## 2. Monorepo Architecture & Package Layout

Pathixo Flow is structured as a `pnpm` workspace monorepo:

```text
flow/
├── apps/
│   ├── web/                    # Next.js 15 App Router (React 19, Tailwind CSS v4)
│   ├── whatsapp-automation/    # (Future) Dedicated Meta Cloud API worker service
│   └── email-automation/       # (Future) Dedicated SES / Resend worker service
├── packages/
│   ├── design-tokens/          # Dual-theme design tokens (CSS variables & Tailwind preset)
│   ├── ui/                     # Accessible Radix UI component library (anti-AI-slop)
│   ├── automation-contracts/   # (Future) Zod schemas & event envelopes
│   ├── billing-core/           # (Future) P0 Financial ledger & dynamic rate cards
│   ├── configuration/          # (Future) Strict runtime environment validation
│   ├── queue/                  # (Future) BullMQ & Redis worker abstractions
│   ├── retry/                  # (Future) Bounded exponential backoff with jitter
│   └── observability/          # (Future) Structured JSON logging & tracing
├── docs/                       # Architectural specifications & technical records
└── .planning/                  # Roadmap, phased execution plans, and state tracking
```

### 2.1 Route Group Segregation in `apps/web`

Always adhere to the three isolated route boundaries in `apps/web/app/`:

1. **`(marketing)`** — Public marketing website:
   - Dark theme canvas (`#08090A`).
   - Shared `MarketingContainer` and editorial header/footer layout.
   - Clean root URLs (`/`, `/product`, `/pricing`, `/contact`).

2. **`(auth)`** — Public authentication flows:
   - Distraction-free, warm neutral light canvas (`#F7F7F4`).
   - Centered card layout for `/login`, `/signup`, `/forgot-password`, `/reset-password`.
   - Must include `robots: { index: false, follow: false }` metadata protection.

3. **`(app)`** — Authenticated customer console:
   - Operational console layout with 240px collapsible sidebar and 48px header.
   - Accessible light theme (`#F7F7F4` canvas, `#FFFFFF` surfaces).
   - Routes: `/workspace`, `/workspace/whatsapp`, `/workspace/email`, `/workspace/ledger`.
   - Must include `robots: { index: false, follow: false }` metadata protection.

---

## 3. Strict Security & Privacy Invariants (Non-Negotiable)

The CI pipeline runs automated security firewalls on every branch and PR. Violations will reject your build immediately.

### 3.1 Zero Credential Leaks
* **Meta System User Tokens**: Never commit tokens starting with `EAA[A-Za-z0-9]{30,}`.
* **Resend API Keys**: Never commit keys starting with `re_[A-Za-z0-9]{24,}`.
* **AWS Credentials**: Never commit access keys starting with `AKIA[0-9A-Z]{16}`.
* **Webhook Secrets**: Never hardcode `verify_token` or `VERIFY_TOKEN` in source code or fixtures.

### 3.2 Privacy Invariant — No Live Phone Numbers
* **Strict Exclusion**: Never use real international phone numbers matching `\+91[6-9][0-9]{9}` in source, fixtures, mock previews, or documentation.
* **Permitted Mock Range**: Always use RFC reserved test numbers:
  - Format: `+1 (202) 555-0100` through `+1 (202) 555-0199` (E.164: `+12025550100` through `+12025550199`).

### 3.3 Financial Metering Invariant — Decoupled Pricing
* **Hardcoded Rates Prohibited**: Never hardcode Meta per-message rates (e.g. `0.8631` or `0.1150`) inside `apps/`.
* **Dynamic Resolution**: All financial rate cards must be imported from `@pathixo/billing-core` or represented as parameterized fixtures (e.g. `0.8500`).

---

## 4. Visual Design System & Anti-AI-Slop Policy

Pathixo Flow enforces strict visual restraint modeled after mature software tools (e.g., Linear):

### 4.1 Strict Prohibitions
* ❌ **No purple-blue or purple-pink gradients**.
* ❌ **No neon glowing buttons or cyber aesthetics**.
* ❌ **No decorative floating blobs or random 3D objects**.
* ❌ **No excessive glassmorphism or blurry card layers**.
* ❌ **No generic cards repeated across every section**.
* ❌ **No arbitrary hex colors in component templates** — use `@pathixo/design-tokens`.

### 4.2 Approved Design Tokens & Foundations
* **Marketing Dark Canvas**: `#08090A` background, `#101113` surface, `#15171A` secondary surface.
* **Console Light Canvas**: `#F7F7F4` background, `#FFFFFF` surface, `#F0F1ED` subtle surface.
* **Geometry**: 4px base spatial scale, restrained 2px–6px corner radii.
* **Typography**: Geist Sans & Geist Mono; high contrast headings, restrained body text.

### 4.3 Five Mandatory Component States
Every interactive component, data table, and workflow screen must handle:
1. **Empty State**: Clear explanation with an actionable next step.
2. **Loading / Skeleton State**: Accurate content-shaped skeleton loading (never screen-blocking spinners).
3. **Error State**: Actionable error message with a retry mechanism.
4. **Disabled State**: Accessible visual state with proper ARIA attributes.
5. **Active / Selected State**: Visible keyboard focus ring (`focus-visible`).

---

## 5. Tooling & CLI Conventions

### 5.1 Package Management via `pnpm`
* Always use `pnpm` (`pnpm@9.x`). Never use `npm` or `yarn`.
* **Crucial CLI Flag Ordering**:
  ```bash
  # CORRECT:
  pnpm --if-present run lint
  pnpm --if-present run typecheck
  pnpm --if-present run test

  # INCORRECT (Forwards flag to underlying compiler/linter, causing build failure):
  pnpm run lint --if-present
  ```

### 5.2 Strict TypeScript Standards
* Monorepo rules enforce `"strict": true` and `"noUncheckedIndexedAccess": true`.
* Never use unchecked `any`. Explicitly type all props, events, responses, and records.
* Avoid type assertions (`as Type`) unless interfacing with dynamic JSON boundaries.

---

## 6. Pre-Commit Verification Protocol for AI Agents

Before submitting code, pushing to remote, or creating a pull request, you **must** execute this 5-step verification sequence:

```bash
# 1. Typecheck all workspace packages
pnpm --if-present run typecheck

# 2. Lint all workspaces
pnpm --if-present run lint

# 3. Run workspace tests
pnpm --if-present run test

# 4. Verify Next.js production build
pnpm run build

# 5. Security & Privacy Regex Audit

# 5a. Pre-staging audit (searches working tree and untracked files)
git grep --untracked -E "\+91[6-9][0-9]{9}" || true
git grep --untracked -E "EAA[A-Za-z0-9]{30,}" || true
git grep --untracked -E "re_[A-Za-z0-9]{24,}" || true
git grep --untracked -E "AKIA[0-9A-Z]{16}" || true
git grep --untracked -E "0\.8631|0\.1150" apps/ || true

# 5b. Commit-time audit (searches staged index contents)
git grep --cached -E "\+91[6-9][0-9]{9}" || true
git grep --cached -E "EAA[A-Za-z0-9]{30,}" || true
git grep --cached -E "re_[A-Za-z0-9]{24,}" || true
git grep --cached -E "AKIA[0-9A-Z]{16}" || true
git grep --cached -E "0\.8631|0\.1150" apps/ || true
```

---

## 7. Pull Request & Commit Rules

1. **Branching**:
   - Always branch from `main`.
   - Name branches using `feat/*`, `fix/*`, `docs/*`, `refactor/*`, or `chore/*`.
   - Never push directly to `main`.
2. **Conventional Commits**:
   - Format: `<type>(<scope>): <concise description>`
   - Examples:
     - `feat(auth): implement login and signup route shells`
     - `fix(tokens): align surface elevated token across dark theme`
     - `docs(governance): add project governance and agent operating guidelines`
3. **PR Descriptions**:
   - Adhere strictly to `.github/pull_request_template.md`.
   - Ensure all mandatory security and compliance checkboxes are checked.
   - Link related issue IDs (`Fixes #14`).
