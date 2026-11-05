# Phase 6: Monorepo Foundation & Design System Primitives - Context

**Gathered:** 2026-11-06  
**Status:** Ready for planning  
**Source:** System Prompt & Milestone v2.0 Specifications  

<domain>
## Phase Boundary

This phase establishes the foundational frontend engineering workspace and reusable design system primitives. It delivers:
1. Root pnpm monorepo workspace configuration (`pnpm-workspace.yaml`, root `package.json` with recursive scripts).
2. Shared `@pathixo/design-tokens` package with dual-theme tokens (dark marketing canvas `#08090A` and light app canvas `#F7F7F4`), CSS custom properties, and Tailwind v4 preset.
3. Shared `@pathixo/ui` package with accessible Radix UI primitives and Lucide icons adhering to 4px grid and 2px–6px radii.
4. `apps/web` Next.js 15 App Router baseline with Geist fonts and `transpilePackages`.

Backend services, database ORMs, Redis queues, and landing page content sections are strictly out of scope for this phase.
</domain>

<decisions>
## Implementation Decisions

### 1. Workspace & Tooling Architecture
- **Package Manager**: pnpm 9.x with strict workspace resolution (`pnpm-workspace.yaml`).
- **Root Scripts**: Recursive execution (`pnpm -r run build`, `pnpm -r run lint`, `pnpm -r run typecheck`) ensuring CI `--if-present` guards do not silently pass empty roots.
- **Node Runtime**: Node.js v22 LTS compatibility.
- **TypeScript**: Strict mode enabled (`strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`).

### 2. Design Tokens & Styling Architecture
- **Dual-Theme Isolation**:
  - Light theme (default/app): Canvas `#F7F7F4`, Surface `#FFFFFF`, Border `#E4E7E1`, Brand Terracotta `#B85C38`.
  - Dark theme (marketing): Canvas `#08090A`, Surface `#101113`, Border `#25272B`, Adjusted Brand Accent `#D5D7DC` / `#D9774F`.
- **CSS Custom Properties**: Tokens defined as space-separated RGB channels for seamless `<alpha-value>` opacity support in Tailwind.
- **Tailwind CSS v4**: CSS-first configuration using `@theme inline` mapping to custom properties.
- **Geometry & Spacing**: 4px spatial grid; restrained corner radii: `radius-sm` (2px), `radius-md` (4px), `radius-lg` (6px).
- **Anti-AI-Slop Prohibition**: Zero purple/pink gradients, zero neon glows, zero decorative glassmorphism.

### 3. Shared UI Primitives (`packages/ui`)
- **Primitive Engine**: Headless Radix UI (`@radix-ui/react-slot`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tabs`).
- **Iconography**: Lucide Icons (`lucide-react`) with standard 1.5px stroke weight.
- **Zero-Build Internal Packaging**: Export raw TypeScript; transpiled on-the-fly by Next.js via `transpilePackages` for instant HMR.
- **Accessible Indicators**: Status badges must combine a status icon/dot with descriptive text (never color alone).

### 4. Next.js App Foundation (`apps/web`)
- **Version**: Next.js 15 (App Router, Turbopack, Server Components).
- **Global Root Layout**: Single `app/layout.tsx` hosting `<html>`, `<body>`, and Geist variable fonts (`--font-geist-sans`, `--font-geist-mono`).
- **Asset Pipeline**: Self-hosted variable fonts via `next/font/google`.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design & Architecture Specifications
- `docs/DESIGN.md` — Authoritative UI/UX design spec, color tokens, and anti-AI-slop rules
- `docs/RULES.md` — Enforceable engineering rules, component state requirements, accessibility
- `.planning/research/STACK.md` — Package versions and configuration details
- `.planning/research/ARCHITECTURE.md` — Monorepo layout, route groups, and token strategy
- `.planning/research/PITFALLS.md` — CI/CD traps, Tailwind opacity modifiers, and Radix portal scoping
</canonical_refs>

<specifics>
## Specific Requirements
- `ARCH-01`: Root pnpm workspace with recursive scripts
- `ARCH-02`: Next.js 15 App Router initialized in `apps/web`
- `ARCH-04`: `@pathixo/design-tokens` and `@pathixo/ui` packages linked via `workspace:*`
- `ARCH-05`: Root `tsconfig.base.json` with strict compiler flags
- `DESIGN-01`: Dual-theme token definition in `@pathixo/design-tokens`
- `DESIGN-02`: 4px grid and 2px–6px radii in Tailwind v4 preset
- `DESIGN-03`: Accessible Radix UI component library in `@pathixo/ui`
- `DESIGN-04`: Anti-AI-slop rules enforced
</specifics>

<deferred>
## Deferred
- Public marketing landing page layout and sections -> Phase 8
- Interactive product preview simulator -> Phase 7
- Auth and console placeholder routes -> Phase 9
- Backend services and database integrations -> Subsequent backend milestones
</deferred>

---

*Phase: 06-monorepo-foundation-and-design-system-primitives*  
*Context gathered: 2026-11-06 via System Prompt & v2.0 Specifications*  

