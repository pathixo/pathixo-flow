# Phase 6: Monorepo Foundation & Design System Primitives - Validation Strategy

**Phase:** 06-monorepo-foundation-and-design-system-primitives  
**Date:** 2026-11-06  
**Status:** Approved  

---

## 1. Quality Gates & Acceptance Verification

| Target Requirement | Verification Mechanism | Success Criteria |
| :--- | :--- | :--- |
| **ARCH-01**: Root Monorepo Setup | Run `pnpm install` at root | Dependencies install and workspace symlinks link cleanly without peer dependency conflicts. |
| **ARCH-02**: Next.js 15 Baseline | Run `pnpm --filter web build` | Production Next.js App Router compilation succeeds with zero errors. |
| **ARCH-04**: Shared Packages | `apps/web` imports from `@pathixo/ui` and `@pathixo/design-tokens` | Transpiled on-the-fly via SWC with zero import or module resolution failures. |
| **ARCH-05**: Strict TypeScript | Run `pnpm -r run typecheck` | Zero TypeScript errors across all workspaces with strict flags active. |
| **DESIGN-01**: Dual-Theme Tokens | Inspect `tokens.css` and `tokens.ts` | Complete definition of warm neutral light tokens and obsidian dark tokens. |
| **DESIGN-02**: 4px Grid & Radii | Verify Tailwind theme scale | Radii strictly limited to 2px, 4px, 6px (`radius-sm`, `radius-md`, `radius-lg`). |
| **DESIGN-03**: Radix UI Primitives | Typecheck and render test of Button, Badge, StatusBadge, Card, Dialog, Drawer, Table | Primitives expose accessible attributes and render with design tokens. |
| **DESIGN-04**: Anti-AI-Slop Check | Codebase grep for forbidden tokens | Zero arbitrary purple/pink gradients, zero neon glows, zero glassmorphism blurs. |

---

## 2. Automated Test Commands

```bash
# 1. Monorepo dependency validation
pnpm install

# 2. Strict typechecking across all workspaces
pnpm -r run typecheck

# 3. Production build verification
pnpm -r run build
```

