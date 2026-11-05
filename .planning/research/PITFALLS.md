# Pitfalls Research — Frontend Foundation Setup

**Document Path**: `E:\Flow\.planning\research\PITFALLS.md`  
**Milestone**: v2.0 Application Foundation & Landing Page  
**Target Repository Context**: Pathixo Flow — Monorepo transitioning from Documentation/CI-only baseline to Next.js App Router frontend application with dark-themed marketing landing page.

---

# Pitfalls Research — Frontend Foundation Setup

## Executive Summary & Context

Pathixo Flow is transitioning from Milestone v1.0 (pure documentation, PRD specifications, ADRs, and GitHub CI/CD workflows) to Milestone v2.0 (Next.js frontend application foundation, design system token architecture, and production-grade dark-themed marketing landing page).

Adding a modern Next.js 14/15 App Router application to a repository that previously housed only markdown documents, security workflows, and CI guards introduces acute architectural, tooling, and visual integration challenges. This research analyzes the primary pitfalls across 8 core domains and outlines concrete prevention strategies to guarantee smooth execution without breaking existing CI gates, design invariants, or security firewalls.

---

## CI/CD Integration Pitfalls

### 1. The Root vs. Recursive Workspace Script Trap (`--if-present` Silent Passes)
* **The Gotcha**: The existing `.github/workflows/ci.yml` runs:
  ```bash
  if [ -f "package.json" ]; then
    pnpm install --frozen-lockfile || pnpm install
    pnpm run lint --if-present
    pnpm run typecheck --if-present
  fi
  ```
  In a pnpm monorepo structure where the Next.js application lives in `apps/web` or `apps/marketing`, `pnpm run lint --if-present` executed at the repository root will **only** look at the root `package.json`. If root lacks these scripts or does not recursively invoke workspace packages, the command exits with code `0` immediately without testing any application code.
* **The Danger**: Broken imports, TypeScript compile errors, and ESLint rule breaks pass through CI silently, creating a catastrophic false sense of security.
* **The Root Cause**: `pnpm run <script>` does not traverse workspace packages unless `--recursive` (`-r`) or a task orchestrator (Turborepo) is configured.

### 2. Omission of `next build` from the CI Pipeline
* **The Gotcha**: Standard `pnpm run typecheck` runs `tsc --noEmit`. While `tsc` catches standard TypeScript typing bugs, it does **not** perform Next.js App Router validations:
  - It does not validate Server-to-Client component serialization boundaries (e.g., passing functions or non-serializable objects from RSC to Client components).
  - It does not validate Page / Layout metadata export signatures.
  - It does not detect static site generation (SSG) prerendering errors, missing `Suspense` boundaries around dynamic hooks (`useSearchParams`), or missing dynamic params.
* **The Danger**: CI turns green on typecheck and lint, but production builds or deployments fail fatally.

### 3. Node.js 22 LTS Compatibility & Native Binary Matrix
* **The Gotcha**: `ci.yml` explicitly provisions `node-version: 22` with `pnpm/action-setup@v3` (version 9). Node.js 22 introduces stricter V8 behaviors, changes to global fetch, and deprecations that can clash with older Next.js releases or native binaries (`sharp`, SWC binary wrappers `@next/swc-linux-x64-gnu`).
* **The Danger**: Native SWC fallbacks can drop build performance by 5x–10x, or fail during `pnpm install --frozen-lockfile` if optional platform-specific dependencies are pruned improperly.

### 4. CI Security Firewall Traps in Marketing Copy & Mock Previews
* **The Gotcha**: Pathixo Flow has strict security and privacy firewalls in `.github/workflows/security-firewall.yml`:
  1. Scans for Meta System User Tokens (`EAA[A-Za-z0-9]{30,}`).
  2. Scans for Resend Keys (`re_[A-Za-z0-9]{24,}`).
  3. Scans for live Indian phone numbers (`\+91[6-9][0-9]{9}`).
  4. Scans for hardcoded rates (`0.8631` or `0.1150`) in `apps/`.
* **The Danger**:
  - If the marketing landing page or product preview component displays a realistic interactive preview of a WhatsApp message or rate card (e.g., `<p>Meta Marketing: ₹0.8631/msg</p>` or `<input value="+919876543210" />`), the CI firewall will immediately fail the PR!
  - If a mockup displays dummy API keys or verify tokens that match token regexes, the firewall blocks the build.

### 5. Mandatory PR Checklist Enforcement Gate
* **The Gotcha**: `.github/workflows/pr-validation.yml` programmatically enforces that every PR body contains checked boxes for:
  - `[x] Zero Credential Leaks`
  - `[x] WhatsApp Business Policy Compliance`
  - `[x] Idempotency Guard`
  - `[x] Financial Metering Attribution`
* **The Danger**: Frontend engineers opening UI-only PRs (e.g. "Add landing page hero") who omit these exact checkboxes will have their PRs blocked by the checklist auditor action, even if no backend code is touched.

### 6. GitHub Actions Cache Starvation
* **The Gotcha**: The current CI has no caching layer for Next.js build cache (`.next/cache`) or pnpm store (`~/.local/share/pnpm/store`).
* **The Danger**: Every CI run downloads and recompiles the entire dependency tree from scratch, pushing CI execution time from 25 seconds to 4–6 minutes.

---

## Tailwind Dark Theme Pitfalls

### 1. Dual-Theme Boundary Bleeding (Dark Marketing vs. Light Warm Neutral App)
* **The Gotcha**: Pathixo Flow has an architectural constraint:
  > *"Dark theme applies to the public marketing website only; the authenticated application retains the warm neutral light theme."*
  Standard Tailwind dark mode implementations rely on `darkMode: 'class'` with a `.dark` class placed on `<html>` or `<body>`.
* **The Danger**: If `.dark` is applied globally to `<html>` or `<body>`, navigating from the marketing page to `/login` or `/app` leaves the dark class active (or causes theme bleeding during client-side transitions). If relying on `darkMode: 'media'`, users with dark OS preferences will have dark mode incorrectly forced onto the authenticated app, violating the light-first warm neutral rule in `docs/RULES.md`.

### 2. CSS Variable Opacity Modifier Breakdown (`<alpha-value>`)
* **The Gotcha**: In Tailwind CSS v3, defining colors via CSS variables that hold full hex values:
  ```css
  :root {
    --color-brand: #B85C38;
  }
  ```
  and referencing them in `tailwind.config.js` as:
  ```javascript
  colors: {
    brand: 'var(--color-brand)'
  }
  ```
  causes Tailwind's opacity modifier syntax (`bg-brand/10`, `text-brand/80`, `border-brand/20`) to silently fail or render corrupt RGB values.
* **The Danger**: Subtle borders, semi-transparent overlays, and status indicator backgrounds break completely across the UI.
* **The Fix**: CSS variables must either be defined as space-separated RGB/HSL channels (e.g., `--color-brand: 184 92 56;` used with `rgb(var(--color-brand) / <alpha-value>)`) or use modern CSS `color-mix(in srgb, ...)` / Tailwind v4 `@theme` format.

### 3. Flash of Unstyled Content (FOUC) & Server/Client Theme Mismatch
* **The Gotcha**: If theme styling is injected via client-side JavaScript (e.g. `useEffect` or standard `next-themes` without server-side hydration scripts), the SSR server outputs default light HTML. When the page renders on a user's browser, there is a visible white flash before turning dark.
* **The Danger**: High visual jarring and CLS (Cumulative Layout Shift) that undermines the Linear/Raycast premium design target.

### 4. Violation of Repository Anti-AI-Slop Invariants
* **The Gotcha**: Common Tailwind marketing UI templates rely heavily on:
  - Multi-stop purple/pink gradients (`bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`)
  - Glowing outer box-shadows (`shadow-[0_0_50px_rgba(120,119,198,0.5)]`)
  - Frosted glass cards (`backdrop-blur-md bg-white/5 border-white/10`)
* **The Danger**: These patterns are strictly and explicitly prohibited by `docs/RULES.md` Section 1.1 and `docs/DESIGN.md` Section 1.2. Introducing these will fail design review.

### 5. Tailwind v3 vs v4 Configuration Mismatches
* **The Gotcha**: Tailwind v4 deprecates `tailwind.config.js` in favor of CSS-first `@theme` directives, changes PostCSS plugin requirements (`@tailwindcss/postcss`), and handles `@apply` differently.
* **The Danger**: Copying tutorials or packages assuming v3 configs into a v4 setup (or vice-versa) leads to failed CSS builds, unrecognized utility classes, and missing design token bindings.

---

## pnpm Monorepo + Next.js Pitfalls

### 1. Strict Hoisting & Phantom Dependencies
* **The Gotcha**: Unlike npm or yarn classic, pnpm uses a content-addressable store with symlinked, isolated `node_modules`. If Next.js or a PostCSS plugin (e.g. `autoprefixer`, `postcss-preset-env`) is installed in a child package but invoked from the monorepo root (or vice-versa), pnpm will block resolution of unlisted dependencies (`Cannot find module 'postcss'`).
* **The Danger**: Builds pass locally if globally installed, but fail cleanly in CI.

### 2. Missing Workspace Package Transpilation (`transpilePackages`)
* **The Gotcha**: When shared packages (e.g., `@pathixo/tokens` or `@pathixo/ui`) are imported by the Next.js app in `apps/web`:
  ```typescript
  import { brandTokens } from '@pathixo/tokens';
  ```
  Next.js App Router SWC compiler will not transpile code from external workspace packages by default unless explicitly configured in `next.config.js`.
* **The Danger**: `SyntaxError: Cannot use import statement outside a module` or un-compiled JSX errors crash the build.

### 3. Docker Standalone Build Monorepo Path Tracing Failure
* **The Gotcha**: When Next.js is configured for containerized deployment with `output: 'standalone'`, the Node.js file tracing engine traces dependencies from the package folder (`apps/web`), missing root hoisted packages in `../../node_modules`.
* **The Danger**: Docker containers build successfully but throw runtime module errors (`Error: Cannot find module ...`) immediately upon container startup.
* **The Fix**: `next.config.js` must set `outputFileTracingRoot: path.join(__dirname, '../../')`.

### 4. Gitignore Missing Next.js Build Outputs
* **The Gotcha**: The current repository `.gitignore` ignores `dist/`, `build/`, `out/`, `.turbo/`, but **does not** ignore `.next/` or `next-env.d.ts`.
* **The Danger**: Running `next dev` or `next build` generates `.next/` (often 100MB+ of binary cache, webpack chunks, and node artifacts) and stages them into git, bloating repository size and introducing merge conflicts.

### 5. Absence of Root Monorepo Orchestration
* **The Gotcha**: The repo currently has no root `package.json`, `pnpm-workspace.yaml`, or monorepo pipeline tooling (Turborepo).
* **The Danger**: Attempting to run `cd apps/web && pnpm run dev` works in isolation but breaks workspace linking, unified linting, CI script execution, and version alignment across shared packages.

---

## Dark Theme Visual Pitfalls

### 1. The Pure Pitch-Black (`#000000`) Eye-Strain Trap
* **The Gotcha**: Setting backgrounds to pure `#000000` and pairing them with high-contrast pure white `#FFFFFF` text.
* **The Danger**:
  - Halation effect: Light vibrates and bleeds around sharp letterforms, causing intense optical fatigue.
  - Sub-pixel smearing: On OLED/AMOLED mobile displays, pure black pixels turn completely off; when scrolling rapidly, text causes visible purple/grey pixel smearing ("OLED black smear").
* **The Linear/Raycast Baseline**: Linear and Raycast use deep layered warm charcoals or tinted deep slate (e.g. `#080908`, `#0D0F0E`, or `#121513`), which harmonize with Pathixo's deep ink (`#1D2421`) and prevent smearing.

### 2. Inverted Elevation & Invisible Shadows
* **The Gotcha**: In light mode, elevation is indicated by cast shadows (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`). In dark mode, cast shadows on dark backgrounds are virtually invisible.
* **The Danger**: Dropdowns, modals, floating action bars, and cards blend seamlessly into the page background, losing spatial hierarchy.
* **The Solution**: In dark mode, elevation is communicated through **lightness layering** (the higher the element in the z-stack, the slightly lighter its surface fill) paired with subtle 1px border dividers (`border-white/[0.08]` or `border-neutral-800`).

```
Light Theme Elevation:  Surface (#FFFFFF)  +  Dark Shadow
Dark Theme Elevation:   Surface (#141715)  +  Lighter Border (#222724) + Inner Highlight
```

### 3. Terracotta Brand Accent Contrast Degradation
* **The Gotcha**: Pathixo Flow's signature brand terracotta is `#B85C38` (designed for warm light surfaces `#F7F7F4` and `#FFFFFF`).
* **The Danger**:
  - `#B85C38` on a dark canvas (`#0A0D0C`) yields a contrast ratio of only **~3.2:1**.
  - This **fails** the WCAG 2.2 AA requirement of 4.5:1 for standard body and interactive text!
* **The Rule**: In dark mode, `#B85C38` must either be:
  1. Used strictly as a **solid button background** with pure white `#FFFFFF` text (which achieves 5.1:1 contrast); OR
  2. Adjusted to a lighter dark-theme variant (e.g., `#E07A52` or `#D9734A`) when used as colored text or standalone iconography on dark surfaces.

### 4. Text De-saturation & White Hierarchy
* **The Gotcha**: Setting all typography to `text-white` (`#FFFFFF`).
* **The Danger**: Monolithic white text flattens visual hierarchy and glares harshly on dark backgrounds.
* **The Standard**:
  - **Heading / Key Metrics (Primary)**: `#F7F7F4` or `#FFFFFF` (High emphasis)
  - **Body Copy (Secondary)**: `#C2C7C4` or `#A3ABA6` (Medium emphasis, 70-80% luminance)
  - **Meta / Captions (Muted)**: `#68716B` or `#7A857E` (Low emphasis, WCAG AA compliant >= 4.5:1)
  - **Disabled**: `#454D48` (>= 3:1 graphical element ratio)

### 5. Mobile Viewport Immersion Failure (Safari Notch Glare)
* **The Gotcha**: Next.js App Router pages omitting the `<meta name="theme-color">` viewport export.
* **The Danger**: On mobile devices (iOS Safari, Android Chrome), the top system notch, address bar, and bottom gesture bar render in default bright translucent grey or white, cutting off the dark marketing immersion.

---

## Component Library Pitfalls

### 1. shadcn / Radix Slate/Zinc Default Token Overwrites
* **The Gotcha**: Initializing `shadcn/ui` with standard defaults copies CSS variables in HSL format (`--background: 0 0% 100%`, `--foreground: 222.2 84% 4.9%`, `--primary: 221.2 83.2% 53.3%`).
* **The Danger**:
  - Completely wipes out Pathixo Flow's brand tokens (warm canvas `#F7F7F4`, terracotta `#B85C38`, ink `#1D2421`).
  - HSL-without-units syntax breaks if Pathixo's theme expects Hex or standard RGB color variables.

### 2. Radix UI Portal Theme Escaping (Body-Appended Modals)
* **The Gotcha**: Radix primitives (`Dialog`, `Popover`, `DropdownMenu`, `Tooltip`, `Select`) render overlay contents inside a `<Portal>` attached directly to `document.body`.
* **The Danger**: If the marketing page applies the dark theme via a route group wrapper (`<div className="dark theme-marketing">`), the Radix Portal escapes this wrapper and renders directly in `<body>`. The modal dialog or dropdown pops up in **light mode** with unstyled or conflicting variables!

### 3. Corner Radius Scale Collisions
* **The Gotcha**: shadcn defaults to `--radius: 0.5rem` (8px), producing `rounded-lg` (8px), `rounded-xl` (12px), and `rounded-2xl` (16px) cards and pills.
* **The Danger**: Violates `docs/RULES.md` Section 1.1 and `docs/DESIGN.md` Section 4.2:
  > *"Base unit is 4px. Avoid excessive rounding (no universal pill shapes or deeply rounded cards). Corner radii must follow functional hierarchy (2px–6px restrained). `radius-sm` (2px), `radius-md` (4px), `radius-lg` (6px)."*

### 4. Client Component Infection (`'use client'` Bloat)
* **The Gotcha**: Radix UI components require React hooks and browser APIs, meaning they must be marked `'use client'`.
* **The Danger**: Developers often slap `'use client'` at the top of whole page files or section layouts just to embed a dropdown or interactive button. This strips Next.js App Router server streaming, bundles unnecessary JavaScript to the client, and degrades SEO and Core Web Vitals (LCP/FID).

### 5. Invisible Keyboard Focus Rings in Dark Mode
* **The Gotcha**: shadcn defaults to `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
* **The Danger**: On dark surfaces, `ring-offset-background` defaults to white if not overridden, creating an unsightly white halo, or `ring-ring` blends into the dark surface, failing WCAG 2.4.7 (Focus Visible) and WCAG 2.4.11 (Focus Appearance).

### 6. The Fuzzy PNG / Static Wireframe Trap for Product Previews
* **The Gotcha**: Displaying product previews as static PNG screenshots or generic wireframe SVG boxes with "Lorem Ipsum" and generic grey placeholders.
* **The Danger**:
  - Looks cheap and unfinished.
  - Screenshots blur on high-DPI Retina screens and break on mobile layouts.
  - Violates the milestone objective: *"Product preview component using real frontend components"*.

---

## Font Loading Pitfalls

### 1. Package Confusion: `next/font/google` vs. Standalone `geist`
* **The Gotcha**: In early Next.js versions, Geist was installed via the `geist` npm package (`import { GeistSans, GeistMono } from 'geist/font/sans'`). In modern Next.js (14.2+ and 15), Geist is natively built into `next/font/google` (`import { Geist, Geist_Mono } from 'next/font/google'`).
* **The Danger**: Installing both causes conflicting CSS variables, duplicate woff2 font downloads (~150KB redundant payload), and build resolution warnings.

### 2. Direct Class Assignment vs. Root CSS Variable Binding (CLS Risk)
* **The Gotcha**: Assigning the font via `className={geistSans.className}` directly to `<body>` or nested containers.
* **The Danger**:
  - The font is not available as a CSS variable for Tailwind's `font-sans` or `font-mono`.
  - When switching route groups or applying custom font styles, fallback font metrics do not align, triggering Cumulative Layout Shift (CLS).
* **The Correct Pattern**: Bind variable fonts at the root:
  ```typescript
  const geistSans = Geist({
    subsets: ['latin'],
    variable: '--font-geist-sans',
    display: 'swap',
  });
  ```

### 3. Font Metric Jitter in High-Density Financial / Metric Tables
* **The Gotcha**: Using standard proportional numbers in tabular displays, rate card cards, and live delivery logs.
* **The Danger**: As numbers tick up or change (e.g. latency `18ms` -> `124ms`, cost `₹0.8631` -> `₹1.7262`), proportional characters cause adjacent columns and borders to twitch and shake horizontally.
* **The Standard**: Next.js Geist font must be coupled with Tailwind's `tabular-nums` (`font-variant-numeric: tabular-nums`) across all financial tables, status counters, and timestamp columns.

---

## Route Group Pitfalls

### 1. The Multiple Root Layout Reload Trap
* **The Gotcha**: Attempting to implement route groups with separate `<html>` and `<body>` tags in both `app/(marketing)/layout.tsx` and `app/(app)/layout.tsx`.
* **The Danger**: In Next.js App Router, navigating between route groups that have separate root layouts triggers a **full browser document reload**, destroying client-side React state, re-executing JavaScript bundles, and flashing the screen.
* **The Architecture**:
  - Keep a **single top-level** `app/layout.tsx` containing `<html>`, `<body>`, font definitions, and root providers.
  - Keep route-group-specific wrappers inside nested `app/(marketing)/layout.tsx` (dark theme container, marketing nav/footer) and `app/(app)/layout.tsx` (authenticated light container, app sidebar).

```
app/
├── layout.tsx                    <-- ONLY <html> and <body> (Single Root)
├── (marketing)/
│   ├── layout.tsx                <-- Marketing Shell (Dark theme, Nav, Footer)
│   ├── page.tsx                  <-- Landing Page (/)
│   └── pricing/page.tsx          <-- (/pricing)
├── (auth)/
│   ├── layout.tsx                <-- Centered Auth Shell
│   └── login/page.tsx            <-- (/login)
└── (app)/
    ├── layout.tsx                <-- App Shell (Warm neutral Light, Sidebar)
    └── dashboard/page.tsx        <-- (/dashboard)
```

### 2. URL Path Collisions Between Route Groups
* **The Gotcha**: Route groups (folders in parentheses like `(marketing)` and `(auth)`) are purely organizational and do **not** contribute to the public URL pathname.
* **The Danger**:
  - Creating `app/(marketing)/login/page.tsx` and `app/(auth)/login/page.tsx` will cause Next.js build failure: `Error: You cannot have two parallel pages that resolve to the same path.`
  - Naming must be carefully governed across route group directories.

### 3. SEO / OpenGraph Metadata Leakage
* **The Gotcha**: Relying on root layout metadata for marketing pages, or forgetting to seal authenticated shells against search engine spiders.
* **The Danger**:
  - Marketing pages end up with generic fallback titles and miss rich OpenGraph/Twitter card images.
  - Authenticated and auth route shells (`/login`, `/dashboard`) get indexed by Google/Bing because `robots: { index: false, follow: false }` was omitted from their route group layout.

---

## Prevention Strategies

### Strategy 1: Monorepo Root Tooling & CI/CD Pipeline Hardening
1. **Initialize Root Monorepo Configuration**:
   - Provide a root `package.json` with clear recursive workspace scripts:
     ```json
     {
       "private": true,
       "scripts": {
         "dev": "pnpm --filter web dev",
         "build": "pnpm -r run build",
         "lint": "pnpm -r run lint",
         "typecheck": "pnpm -r run typecheck",
         "test": "pnpm -r run test --if-present"
       }
     }
     ```
   - Provide `pnpm-workspace.yaml`:
     ```yaml
     packages:
       - 'apps/*'
       - 'packages/*'
     ```
   - Provide `.npmrc` with strict hoisting settings:
     ```ini
     shamefully-hoist=false
     strict-peer-dependencies=false
     auto-install-peers=true
     ```
2. **Update `.gitignore`**:
   Add `.next/`, `next-env.d.ts`, and `.turbo/` immediately before creating application code.
3. **Add `build` Step to CI Workflow**:
   Update `.github/workflows/ci.yml` so that `pnpm run build` is run alongside lint and typecheck.
4. **Firewall-Safe Mock Data Standards**:
   For product previews, never hardcode live Indian numbers or provider tokens. Use reserved dummy ranges (`+15550100` to `+15550199`) and dummy tokens (`token_demo_sample_xxxx`). For pricing displays, avoid bare raw rates (`0.8631`) in workflow logic; format dynamically or import from rate card constants.

### Strategy 2: Dual-Theme Scoping Architecture
Implement scoped CSS custom properties that keep the dark marketing website isolated from the light authenticated application without theme bleeding:

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base Warm Light Neutral Theme (Authenticated App & Global Default) */
:root {
  --canvas: 247 247 244;         /* #F7F7F4 */
  --surface: 255 255 255;        /* #FFFFFF */
  --surface-subtle: 240 241 237; /* #F0F1ED */
  --border: 228 231 225;         /* #E4E7E1 */
  --border-subtle: 236 238 233;  /* #ECEEE9 */
  --text-primary: 29 36 33;      /* #1D2421 */
  --text-secondary: 104 113 107; /* #68716B */
  --text-muted: 147 155 149;     /* #939B95 */
  --brand: 184 92 56;            /* #B85C38 */
  --brand-hover: 158 77 44;      /* #9E4D2C */
  --ring: 184 92 56;
}

/* Scoped Dark Editorial Theme (Marketing Landing Page Only) */
.theme-marketing-dark {
  --canvas: 10 13 12;            /* #0A0D0C - Layered deep ink, non-pitch black */
  --surface: 18 23 20;           /* #121714 - Subtle elevation */
  --surface-subtle: 24 30 27;    /* #181E1B - Dense card fill */
  --border: 36 44 40;            /* #242C28 - Crisp 1px rule */
  --border-subtle: 28 35 31;     /* #1C231F */
  --text-primary: 247 247 244;   /* #F7F7F4 - High contrast ink */
  --text-secondary: 163 171 166; /* #A3ABA6 - Balanced body copy */
  --text-muted: 104 113 107;     /* #68716B - Crisp muted meta */
  --brand: 224 122 82;           /* #E07A52 - Adjusted lighter terracotta for 5.2:1 contrast */
  --brand-hover: 235 140 102;    /* #EB8C66 */
  --ring: 224 122 82;
}
```

In `tailwind.config.ts`, bind colors with `<alpha-value>` support:
```typescript
colors: {
  canvas: 'rgb(var(--canvas) / <alpha-value>)',
  surface: {
    DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
    subtle: 'rgb(var(--surface-subtle) / <alpha-value>)',
  },
  border: {
    DEFAULT: 'rgb(var(--border) / <alpha-value>)',
    subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
  },
  'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
  'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
  'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
  brand: {
    DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
    hover: 'rgb(var(--brand-hover) / <alpha-value>)',
  },
}
```

### Strategy 3: Radix Primitive Adapter Pattern & Radius Constraint
1. **Never copy-paste raw shadcn defaults**: Build a dedicated `@pathixo/ui` or `components/ui/` adapter layer wrapping Radix primitives.
2. **Enforce 2px–6px Corner Radii**:
   ```css
   --radius-sm: 2px;
   --radius-md: 4px;
   --radius-lg: 6px;
   ```
   Do not use `rounded-xl`, `rounded-2xl`, or `rounded-full` for cards or containers.
3. **Portal Theme Scoping**:
   Ensure Radix `Dialog.Portal` or `DropdownMenu.Portal` containers inherit the `.theme-marketing-dark` class when mounted from marketing pages, or attach directly to the marketing wrapper container.

### Strategy 4: Native Font Optimization Standard
1. Configure Geist Sans and Geist Mono in `app/layout.tsx` using `next/font/google`:
   ```typescript
   import { Geist, Geist_Mono } from 'next/font/google';

   export const geistSans = Geist({
     subsets: ['latin'],
     variable: '--font-sans',
     display: 'swap',
   });

   export const geistMono = Geist_Mono({
     subsets: ['latin'],
     variable: '--font-mono',
     display: 'swap',
   });
   ```
2. Apply `className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}` to `<body>`.
3. Enforce `tabular-nums` in all tables, metric callouts, and latency indicators.

### Strategy 5: Production-Grade Interactive Product Preview
To satisfy the milestone requirement of a *"product preview component using real frontend components without placeholder slop"*:
1. **Build a Deterministic Live Engine Simulator**:
   Create a pure frontend interactive component modeling Pathixo Flow's 3-stage delivery pipeline:
   - **Stage 1 (Webhook Ingest)**: Interactive HTTP request viewer showing Meta signature verification (`SHA-256 HMAC ✓`), incoming E.164 payload, and sub-20ms acknowledgement badge.
   - **Stage 2 (Worker Processing)**: Queue job inspector showing idempotency lock status (`SETNX OK`), bounded retry count (`0/3`), and payload normalization.
   - **Stage 3 (Financial Ledger)**: Instant itemized ledger entry row showing client attribution, category (`MARKETING`), rate calculation (`₹0.8631`), and prepaid wallet deduction.
2. **Interaction**: Provide interactive toggle buttons (`Simulate Delivery`, `Trigger Duplicate Webhook`, `Exhaust Retries`) demonstrating real engineering primitives (idempotency rejection, dead-letter capture) in action.
3. **Zero AI Slop**: No fake 3D clay graphics, no purple gradients, no floating spheres. Sharp 1px architectural borders, crisp typography, and monochromatic surfaces.

---

### Pitfall & Prevention Summary Matrix

| Pitfall Domain | High-Risk Failure Mode | Prevention Standard |
| :--- | :--- | :--- |
| **CI/CD** | `pnpm run lint --if-present` skips workspace packages silently | Configure root recursive scripts (`pnpm -r run ...`) and verify CI execution |
| **CI/CD** | `tsc --noEmit` misses App Router Server/Client boundary errors | Add `next build` to CI pipeline steps |
| **CI/CD** | Marketing copy triggers Meta token or live phone number firewall | Enforce mock standards (`+15550100` dummy range, sanitized demo tokens) |
| **Tailwind** | Dark theme bleeds into light authenticated application | Scope dark theme to `.theme-marketing-dark` in marketing layout; keep root light |
| **Tailwind** | Hex CSS variables break opacity modifiers (`bg-brand/10`) | Store variables as space-separated RGB channels (`184 92 56`) |
| **Monorepo** | External workspace packages throw syntax errors on import | Configure `transpilePackages` in `next.config.js` |
| **Monorepo** | Docker container fails to find hoisted `node_modules` | Add `outputFileTracingRoot: path.join(__dirname, '../../')` |
| **Visual Design** | `#000000` causes OLED smearing and optical halation | Use layered deep ink charcoals (`#0A0D0C`, `#121714`) |
| **Visual Design** | Terracotta accent drops to 3.2:1 contrast on dark canvas | Use lighter adjusted token (`#E07A52`) for 5.2:1 WCAG AA compliance |
| **Components** | shadcn defaults overwrite brand tokens with slate/zinc | Build custom token-driven wrappers over headless Radix primitives |
| **Components** | Radix Portal escapes marketing theme container | Scope portal container or pass theme class to overlay root |
| **Typography** | Font metrics shift and twitch during real-time metric updates | Enforce `tabular-nums` on all financial and latency data |
| **Route Groups** | Multiple `<html>`/`<body>` cause full page reload on navigation | Maintain single root `app/layout.tsx`; nest layout wrappers in route groups |

