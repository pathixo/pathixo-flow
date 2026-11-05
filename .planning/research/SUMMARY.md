# Research Summary — Milestone v2.0 Application Foundation & Landing Page

**Synthesized From:**
- `STACK.md` — Framework, UI library, styling, tooling packages & versions
- `FEATURES.md` — Dark marketing patterns, hero layout, bento grids, product preview strategies
- `ARCHITECTURE.md` — Route groups, layout composition, monorepo structure, package boundaries
- `PITFALLS.md` — CI/CD, Tailwind dark mode, OLED halation, Radix UI portals, font metrics

---

## 1. Key Technical Decisions & Stack
- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript 5.7 (strict mode)
- **Monorepo**: pnpm workspaces (`apps/web`, `packages/design-tokens`, `packages/ui`) with Turborepo orchestration
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss` and CSS-first `@theme inline` mapping to custom properties
- **UI Primitives**: Headless Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tabs`, `@radix-ui/react-slot`) wrapped with design tokens; Lucide Icons (1.5px stroke)
- **Typography**: Geist Sans & Geist Mono via `next/font/google` with `tabular-nums` for tabular metrics
- **Animations**: CSS-first transitions ($\le 150\text{ms}$) per Anti-AI-slop rules; no heavy 3D or physics engines

## 2. Architecture & Route Topology
- **Single Root Layout**: `apps/web/app/layout.tsx` hosts `<html>`, `<body>`, Geist font variables, and root HTML structure (prevents full document reloads on navigation).
- **Route Group Isolation**:
  - `(marketing)`: Dark theme (`data-theme="dark"` / obsidian `#08090A`), sticky editorial navbar, product preview, capability sections, multi-column footer.
  - `(auth)`: Centered distraction-free light container (`#F7F7F4`), security indicators, zero marketing chrome.
  - `(app)`: Authenticated console shell, 240px collapsible sidebar, 48px header with command palette, breadcrumbs, warm neutral light theme.

## 3. Product Preview Innovation
- **"Interface as Art" via Live Synthetic React Components**:
  - Instead of static blurry PNGs or empty wireframes, build a live deterministic pipeline simulator using actual UI primitives.
  - Demonstrates the 3-stage delivery pipeline: Ingest (HMAC verified) $\to$ Worker (BullMQ lock & idempotency guard) $\to$ Financial Ledger (Usage attribution & rate card calculation).
  - 100% SVG/DOM, zero-image LCP ($<1.2\text{s}$), responsive and crisp on Retina displays.

## 4. Critical Invariants & Pitfall Mitigations
- **CI/CD Guard**: Monorepo root `package.json` must provide recursive workspace scripts (`pnpm -r run lint`, `pnpm -r run typecheck`, `pnpm -r run build`) so existing CI `--if-present` flags do not silently pass empty roots.
- **Firewall Guard**: In mock components, use dummy phone ranges (`+15550100`..`+15550199`) and dummy tokens to avoid triggering regex firewalls.
- **Dual-Theme Isolation**: The dark theme is scoped to `(marketing)` via CSS variables; the authenticated application preserves the warm neutral light theme defined in `docs/DESIGN.md`.
- **Anti-AI-Slop**: Zero purple/pink gradients, zero neon cyan glows, zero glassmorphism, zero floating blobs. Enforce 4px spacing scale and 2px–6px restrained corner radii.
