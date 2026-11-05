# Pathixo Flow - Engineering Rules & Invariants

This document establishes non-negotiable engineering rules and design system constraints. All frontend and backend code contributions must comply.

---

## 1. Design System & Frontend Invariants

### 1.1 Design Token Enforcement
- **No Arbitrary Hex Colors**: Never use arbitrary hex colors or inline RGB/HSL values in component templates. Use only approved design tokens defined in [`docs/DESIGN.md`](docs/DESIGN.md).
- **Light-First Palette**:
  - Canvas: `#F7F7F4`
  - Surface: `#FFFFFF`
  - Subtle Surface: `#F0F1ED`
  - Primary Text: `#1D2421`
  - Secondary Text: `#68716B`
  - Border: `#E4E7E1`
  - Brand Terracotta Accent: `#B85C38`
- **Strict Anti-AI-Slop Prohibition**:
  - No purple-to-blue or purple-to-pink gradients.
  - No neon cyan/violet glowing buttons or decorative glassmorphism across operational dashboards.
  - No arbitrary floating blobs, decorative 3D illustrations, or fake testimonials.
- **Component Geometry**: Base unit is 4px. Avoid excessive rounding (no universal pill shapes or deeply rounded cards). Corner radii must follow functional hierarchy (2px–6px restrained).

### 1.2 Required Component States
Every interactive component, data table, and workflow view must explicitly handle and test:
1. `Empty State` (with actionable instructions, not dead ends)
2. `Loading / Skeleton State` (content-shaped skeleton, not spinning screen blockers)
3. `Error / Failure State` (human-actionable message with retry trigger)
4. `Disabled State` (accessible contrast and ARIA attributes)
5. `Active / Selected State`

### 1.3 Accessibility (WCAG 2.2 AA)
- Minimum contrast ratio of 4.5:1 for standard text and 3:1 for large text and UI boundaries.
- Never communicate status through color alone (always pair color with a text label or icon).
- All interactive controls must support visible keyboard focus rings (`focus-visible`).

---

## 2. Backend & System Invariants

### 2.1 Security & Zero Token Leaks
- Never commit Meta System User Tokens (`EAAG...`), App Secrets, Webhook Verify Tokens, AWS Keys, or Resend keys to Git.
- Real international phone numbers (+91...) and customer emails are prohibited in test fixtures. Use reserved dummy test ranges (`+15550100` to `+15550199`).

### 2.2 Financial Metering P0
- No outbound message may be dispatched without emitting an immutable `UsageEvent` attributed to a specific `clientId`.
- Never hardcode pricing rates in application workflows; all rates must be derived dynamically from `@pathixo/billing-core` versioned rate cards.

### 2.3 Idempotency & Webhook Integrity
- Every incoming webhook and outgoing dispatch must enforce deduplication via an `idempotencyKey`.
- Webhooks must be verified cryptographically and acknowledged within 2 seconds at p95.
