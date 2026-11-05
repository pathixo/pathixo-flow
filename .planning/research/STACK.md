# Stack Research — Frontend Application Foundation

**Milestone**: v2.0 Application Foundation & Landing Page  
**Target Applications**: `apps/web` (Next.js 15 App Router in pnpm monorepo)  
**Design Reference**: Linear-aesthetic editorial dark theme for marketing; warm neutral light theme for app shells (`docs/DESIGN.md`, `docs/RULES.md`)

---

## Recommended Packages & Versions

All versions represent current stable releases verified for mutual compatibility with **React 19**, **Next.js 15**, **Tailwind CSS v4**, and **Node.js 22 LTS**.

### 1. Core Framework & React Runtime
| Package | Version | Purpose | Rationale / Why Needed |
| :--- | :---: | :--- | :--- |
| `next` | `^15.2.x` | Fullstack React framework & App Router | Provides Server Components (RSC), Turbopack bundler, async `params`/`searchParams`, built-in font optimization, and native route grouping (`(marketing)`, `(auth)`, `(app)`). |
| `react` | `^19.0.0` | Core UI library | Required peer dependency for Next.js 15; provides native actions, server component execution, and compiler optimizations. |
| `react-dom` | `^19.0.0` | React DOM renderer | Required runtime companion to `react`. |

### 2. Styling, Tokens & Tailwind CSS v4 Engine
| Package | Version | Purpose | Rationale / Why Needed |
| :--- | :---: | :--- | :--- |
| `tailwindcss` | `^4.0.9` | Utility-first styling engine | V4 features a CSS-first configuration via `@theme`, eliminating `tailwind.config.js`. Uses Lightning CSS for 10x faster builds and seamless Turbopack integration. |
| `@tailwindcss/postcss` | `^4.0.9` | Dedicated PostCSS plugin | Bridges Tailwind v4 into Next.js 15 and PostCSS pipeline. |
| `postcss` | `^8.4.49` | CSS transformation runner | Required peer dependency for `@tailwindcss/postcss`. |
| `clsx` | `^2.1.1` | Conditional class builder | Lightweight utility for assembling dynamic class strings without string concatenation glitches. |
| `tailwind-merge` | `^3.0.1` | Tailwind class deduplication | Merges conflicting Tailwind utilities in composite components. |
| `class-variance-authority` | `^0.7.1` | Variant-based component API | Declarative, type-safe API for defining button, badge, and card style variants matching design tokens. |
| `tw-animate-css` | `^1.1.4` | CSS animation utilities | Tailwind v4-compatible replacement for `tailwindcss-animate`, natively supported by shadcn/ui v4. |

### 3. UI Primitives & Icons (Accessible Headless Foundation)
| Package | Version | Purpose | Rationale / Why Needed |
| :--- | :---: | :--- | :--- |
| `lucide-react` | `^0.475.0` | Editorial icon system | Mandated by `docs/DESIGN.md` Section 7; crisp, geometric line icons with consistent 1.5px stroke weight. Fully compatible with React 19. |
| `@radix-ui/react-slot` | `^1.1.2` | Polymorphic component primitive | Core primitive for shadcn/ui composition (`asChild` pattern), allowing custom link buttons (`<Button asChild><Link .../></Button>`). |
| `@radix-ui/react-dialog` | `^1.1.6` | Accessible dialogs & mobile drawers | Provides WCAG-compliant modal focus trapping, Escape key handling, and ARIA attributes for mobile nav drawers. |
| `@radix-ui/react-dropdown-menu` | `^2.1.6` | Accessible menus & selectors | Headless dropdown primitive for workspace switchers and navigation menus. |
| `@radix-ui/react-accordion` | `^1.2.3` | Interactive collapsible panels | Keyboard-accessible disclosure component for landing page FAQ and feature breakdowns. |
| `@radix-ui/react-tabs` | `^1.1.3` | Accessible tabbed navigation | Headless tabs for interactive live product previews (WhatsApp vs. Email architecture views). |

### 4. Typography & Fonts
| Package | Version | Purpose | Rationale / Why Needed |
| :--- | :---: | :--- | :--- |
| `next/font/google` | Built-in | Self-hosted variable font loading | Next.js 15 natively bundles `Geist` and `Geist_Mono` with zero layout shift, automated local font hosting, and CSS variable injection (`--font-geist-sans`, `--font-geist-mono`). Zero external package footprint. |

### 5. Motion & Animation (Analysis & Recommendation)
- **Recommendation: CSS-First.** Per `docs/DESIGN.md` Section 1.2 ("Anti-AI-slop: No Gratuitous Animations, transitions <= 150ms") and Section 8.1, standard transitions (hover, focus, modals, tabs, accordion folds) MUST be implemented using zero-runtime Tailwind CSS transitions and keyframes.

### 6. Development Tooling, Linting & Type Safety
| Package | Version | Purpose | Rationale / Why Needed |
| :--- | :---: | :--- | :--- |
| `typescript` | `^5.7.3` | Static type checker | Strict mode type checking across the frontend application. |
| `@types/node` | `^22.13.4` | Node.js type definitions | Aligned with Node.js v22 LTS project baseline (ADR-001). |
| `@types/react` | `^19.0.8` | React 19 type definitions | Complete typing for React 19 elements, hooks, and Server Components. |
| `@types/react-dom` | `^19.0.3` | React DOM type definitions | Complete typing for React 19 DOM APIs. |
| `eslint` | `^9.20.1` | Code linter engine | ESLint 9 Flat Config architecture (`eslint.config.mjs`). |
| `eslint-config-next` | `^15.2.x` | Next.js linting rules | Official Next.js Flat Config support (`eslint-config-next/core-web-vitals`). |
| `prettier` | `^3.5.1` | Opinionated code formatter | Enforces consistent formatting across TypeScript, TSX, and CSS. |
| `prettier-plugin-tailwindcss` | `^0.6.11` | Tailwind class sorting | Automatically sorts Tailwind utility classes in standard order. Compatible with Tailwind v4 via `tailwindStylesheet`. |

---

## What NOT to Add
1. **Backend Persistence & Queues**: `pg`, `drizzle-orm`, `prisma`, `ioredis`, `bullmq` — deferred to backend milestones.
2. **Third-Party SaaS Auth SDKs**: `@clerk/nextjs`, `@auth0/nextjs-auth0`, `next-auth` — placeholder UI shells only.
3. **Heavy State Management**: `redux`, `zustand` — Next.js Server Components and URL search params are sufficient.
4. **Heavy Animation / 3D Libraries**: `three`, `lottie-react` — prohibited by Anti-AI-slop rules.
5. **Premature Charting Libraries**: `recharts`, `tremor` — product preview uses semantic DOM/SVG elements.
