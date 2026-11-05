# Architecture Research — Next.js App Router Frontend

**Document Version:** 1.0  
**Context:** Pathixo Flow v2.0 Application Foundation & Landing Page  
**Target Path:** `E:\Flow\.planning\research\ARCHITECTURE.md`

---

## Route Group Strategy

### 1. Purpose and Architecture of Route Groups
Next.js App Router route groups (directories wrapped in parentheses, e.g., `(marketing)`, `(auth)`, `(app)`) enable logical partitioning of routes, layouts, and rendering semantics without modifying the public URL path. 

In Pathixo Flow, the frontend must deliver three radically distinct user experiences:
1. **Public Marketing Surface `(marketing)`**: A dark-themed, editorial, Linear-inspired marketing presence engineered to establish immediate authority for developer-operated business automation.
2. **Dedicated Authentication Experience `(auth)`**: A distraction-free, high-security authentication environment set against a warm neutral canvas with zero marketing chrome.
3. **Operational Engineering Console `(app)`**: A light-themed, information-dense, warm neutral workspace with a 240px collapsible sidebar, 48px top bar, breadcrumbs, command palette, and high-density tabular data views for WhatsApp, Email, Workflows, Financial Ledger, and Operations.

Route groups provide three major architectural benefits for this topology:
- **Layout Segregation**: Each experience receives an isolated layout hierarchy, navigation system, and theme boundary.
- **Independent Loading and Error Boundaries**: Failures or slow data streams in operational dashboards do not affect public marketing pages.
- **Route Namespace Hygiene**: Prevents URL clutter while keeping source files strictly organized by lifecycle domain.

---

### 2. URL Mapping and Route Conflict Resolution
Because route groups omit their folder name from the URL path, routes inside different groups can inadvertently collide. For example, if both `(marketing)` and `(app)` contain a `whatsapp/page.tsx`, Next.js throws a compile-time collision error:
`Conflicting route groups detected: (marketing)/whatsapp and (app)/whatsapp both resolve to /whatsapp`.

To guarantee unambiguous routing and preserve clear information architecture:
- **Public Marketing Routes** occupy the root URL namespace and channel deep-dive URLs:
  - `/` -> `apps/web/app/(marketing)/page.tsx`
  - `/pricing` -> `apps/web/app/(marketing)/pricing/page.tsx`
  - `/channels/whatsapp` -> `apps/web/app/(marketing)/channels/whatsapp/page.tsx`
  - `/channels/email` -> `apps/web/app/(marketing)/channels/email/page.tsx`
  - `/docs` -> `apps/web/app/(marketing)/docs/page.tsx`
- **Authentication Routes** occupy clean top-level verb/action paths:
  - `/login` -> `apps/web/app/(auth)/login/page.tsx`
  - `/forgot-password` -> `apps/web/app/(auth)/forgot-password/page.tsx`
  - `/reset-password` -> `apps/web/app/(auth)/reset-password/page.tsx`
  - `/verify-email` -> `apps/web/app/(auth)/verify-email/page.tsx`
  - `/accept-invite` -> `apps/web/app/(auth)/accept-invite/page.tsx`
  - `/session-expired` -> `apps/web/app/(auth)/session-expired/page.tsx`
- **Authenticated Application Routes** are namespaced under `/workspace` or explicit console resource slugs to reflect client-isolated workspace context (adhering to ADR-004 and DESIGN.md Section 5.3):
  - `/workspace` (or `/home`) -> `apps/web/app/(app)/workspace/page.tsx` (Dashboard Overview)
  - `/workspace/whatsapp` -> `apps/web/app/(app)/workspace/whatsapp/page.tsx` (WhatsApp Workspace)
  - `/workspace/email` -> `apps/web/app/(app)/workspace/email/page.tsx` (Email Workspace)
  - `/workspace/workflows` -> `apps/web/app/(app)/workspace/workflows/page.tsx` (Workflow Manager)
  - `/workspace/ledger` -> `apps/web/app/(app)/workspace/ledger/page.tsx` (Financial Ledger & Metering)
  - `/workspace/operations` -> `apps/web/app/(app)/workspace/operations/page.tsx` (DLQ, Queues, Audit Logs)
  - `/workspace/settings` -> `apps/web/app/(app)/workspace/settings/page.tsx` (Workspace & Client Settings)

---

### 3. Complete Route & File Tree
```
apps/web/app/
├── (marketing)/
│   ├── _components/
│   │   ├── hero.tsx
│   │   ├── product-preview.tsx
│   │   ├── core-pillars.tsx
│   │   ├── channel-capabilities.tsx
│   │   ├── marketing-header.tsx
│   │   └── marketing-footer.tsx
│   ├── channels/
│   │   ├── whatsapp/page.tsx
│   │   └── email/page.tsx
│   ├── pricing/page.tsx
│   ├── docs/page.tsx
│   ├── layout.tsx                # Dark theme boundary + marketing nav/footer
│   ├── loading.tsx               # Minimal dark skeleton
│   └── page.tsx                  # Marketing Landing Page (Hero, Preview, CTA)
├── (auth)/
│   ├── _components/
│   │   ├── auth-card.tsx
│   │   └── auth-header.tsx
│   ├── login/page.tsx
│   ├── forgot-password/page.tsx
│   ├── reset-password/page.tsx
│   ├── verify-email/page.tsx
│   ├── accept-invite/page.tsx
│   ├── session-expired/page.tsx
│   ├── layout.tsx                # Centered distraction-free shell (light canvas)
│   └── loading.tsx
├── (app)/
│   ├── _components/
│   │   ├── app-sidebar.tsx       # 240px collapsible navigation rail
│   │   ├── app-header.tsx        # 48px header (breadcrumbs, org switch, Ctrl+K)
│   │   └── command-palette.tsx
│   ├── workspace/
│   │   ├── page.tsx              # Operational Dashboard / Health Matrix
│   │   ├── whatsapp/page.tsx     # WABAs, Templates, Delivery Logs
│   │   ├── email/page.tsx        # Domains, DNS, Suppression Roster
│   │   ├── workflows/page.tsx    # Workflow Canvas & Directory
│   │   ├── ledger/page.tsx       # Financial Metering & Rate Card Explorer
│   │   ├── operations/page.tsx   # DLQ Inspector & Guarded Replay
│   │   └── settings/page.tsx
│   ├── layout.tsx                # Authenticated App Shell + Light Theme
│   ├── loading.tsx               # High-density tabular skeleton
│   └── error.tsx                 # Recoverable workspace error boundary
├── layout.tsx                    # Global Root Layout (HTML, fonts, global CSS)
├── not-found.tsx                 # Global 404 handler
├── error.tsx                     # Global uncaught error boundary
├── robots.ts                     # Dynamic robots.txt
└── sitemap.ts                    # Dynamic sitemap.xml
```

---

## Layout Composition

### 1. Root Layout vs. Multiple Root Layouts
Next.js App Router supports two patterns for multi-experience layouts:
1. **Multiple Root Layouts** (omitting `app/layout.tsx` and creating separate root layouts inside each route group with independent `<html>` and `<body>` tags).
2. **Single Global Root Layout with Experience Group Layouts** (`app/layout.tsx` as the single root, with nested group layouts inside `(marketing)`, `(auth)`, and `(app)`).

#### Trade-off Analysis:
| Architectural Factor | Multiple Root Layouts | Single Global Root Layout + Group Layouts (Recommended) |
| :--- | :--- | :--- |
| **Cross-Group Navigation** | Causes a full browser hard reload when navigating across groups (e.g., clicking "Sign In" from marketing). Destroys client-side SPA state. | Smooth client-side transition via Next.js router. No page flash. |
| **Font Loading & FOUT** | Fonts must be re-initialized and loaded per root layout, increasing payload and risking layout shifts (FOUT). | Geist Sans & Geist Mono load once in root `<head>` with zero layout shifts. |
| **HTML / Head Attributes** | Allows independent root tag styling (e.g. `<html className="dark">`). | Easily achieved by applying theme scope (`data-theme="dark"` or `data-theme="light"`) to the group wrapper `<div>`. |
| **Router Cache & Prefetch** | Cannot prefetch or cache across root boundaries. | Full Next.js client-side prefetching and caching across all experiences. |
| **Global Error / 404** | Requires duplication of root error handling. | Centralized `not-found.tsx` and `error.tsx` handling with consistent styling. |

**Decision:** Adopt a **Single Global Root Layout** with **Nested Experience Layouts**.

---

## Monorepo Structure

### 1. `apps/web/` vs. Root-Level Next.js
Placing Next.js at the root level of a monorepo is an anti-pattern that violates core project principles:
- **Violation of PRD Principle 2 ("One repository does not mean one runtime")**: Pathixo Flow is architected for multiple deployable runtimes (`apps/web`, `apps/whatsapp-automation`, `apps/email-automation`).
- **Dependency Contamination**: A root-level Next.js app floods the root `package.json` with web-specific dependencies (`react`, `next`, `radix-ui`, `lucide-react`), creating version lock-in and dependency conflicts with backend worker runtimes.
- **CI/CD Cache Degradation**: Monorepo orchestration tools (Turborepo, pnpm filters) cannot isolate web builds, causing unnecessary full-suite rebuilds on backend-only changes.
- **Docker Container Bloat**: Deploying backend services would require stripping out Next.js artifacts. With `apps/web/`, standard `pnpm --filter web deploy` creates an isolated deployment bundle containing only what `apps/web` needs.

### 2. Workspace Directory Layout
```
Flow/
├── apps/
│   ├── web/                         # Next.js 15 App Router (Marketing, Auth, Console)
│   │   ├── app/
│   │   ├── public/
│   │   ├── styles/
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── whatsapp-automation/         # Phase 2 backend service
│   └── email-automation/            # Phase 3 backend service
├── packages/
│   ├── design-tokens/               # Centralized token definitions (CSS, TS, Tailwind)
│   ├── ui/                          # Radix UI + Lucide primitive component library
│   ├── configuration/               # Zod runtime config validation & secret masking
│   ├── observability/               # Structured JSON logging & correlation IDs
│   ├── automation-contracts/        # Domain event schemas & provider interfaces
│   └── billing-core/                # P0 financial ledger & versioned rate cards
├── .github/                         # Workflows & CI automation
├── docs/                            # Authoritative specs (DESIGN.md, ARCHITECTURE.md)
├── .planning/                       # GSD planning, requirements, and state
├── package.json                     # Root workspace manifest
├── pnpm-workspace.yaml              # Workspace membership configuration
├── turbo.json                       # Turborepo task pipeline configuration
└── tsconfig.base.json               # Shared strict TypeScript compiler options
```

---

## Shared Packages & Design Tokens

### 1. Token Strategy: CSS Custom Properties + Tailwind (Hybrid)
Relying strictly on Tailwind classes (e.g. `dark:bg-[#0C0E0D] light:bg-[#F7F7F4]`) creates code bloat, fragile refactoring, and AI-slop risk. Conversely, pure CSS custom properties lose the developer ergonomics and purge benefits of Tailwind CSS.

**The Solution: The Hybrid Architectural Model**
1. **CSS Custom Properties as Single Source of Truth**: Define semantic variables for surface, text, border, and status roles. Switching themes (`data-theme="dark"` vs `data-theme="light"`) swaps the CSS variable values at the subtree root without changing component class names.
2. **Tailwind Config referencing CSS Variables**: Tailwind utilities map directly to semantic CSS custom properties:
   `bg-canvas` -> `rgb(var(--color-canvas) / <alpha-value>)`.
3. **Guaranteed Anti-AI-Slop**: Enforces zero arbitrary hex values.

---

## Suggested Build Order

1. **Phase 0: Monorepo Foundation & Tooling Setup** (root `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`)
2. **Phase 1: Shared Design Tokens** (`packages/design-tokens`)
3. **Phase 2: Core UI Primitives** (`packages/ui`)
4. **Phase 3: Next.js Web App Foundation** (`apps/web`)
5. **Phase 4: Route Group Shells & Layouts** (`(marketing)`, `(auth)`, `(app)`)
6. **Phase 5: Marketing Landing Page & Product Preview**
7. **Phase 6: Auth & App Placeholders + Quality Gates**
