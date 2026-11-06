# Phase 6: Monorepo Foundation & Design System Primitives - Research

**Date:** 2026-11-06  
**Status:** Complete  
**Requirements Addressed:** `ARCH-01`, `ARCH-02`, `ARCH-04`, `ARCH-05`, `DESIGN-01`, `DESIGN-02`, `DESIGN-03`, `DESIGN-04`  

---

## 1. Executive Summary & Objective

Phase 6 constructs the foundational monorepo infrastructure and component primitives upon which the entire Pathixo Flow application and marketing site rest. The goal is to move from a repository containing only markdown documentation and CI/CD workflows to a fully functioning, buildable pnpm monorepo containing:
1. Root configuration (`package.json`, `pnpm-workspace.yaml`, `.npmrc`, `tsconfig.base.json`, `.gitignore`).
2. Centralized design tokens package (`packages/design-tokens`).
3. Shared UI primitives package (`packages/ui`).
4. Next.js 15 App Router web application (`apps/web`).

---

## 2. Dependency Manifest & Compatibility

All dependencies are aligned with Node.js v22 LTS and React 19:

### Root Workspace:
- `pnpm`: 9.x
- `turbo`: `^2.4.2`
- `typescript`: `^5.7.3`
- `prettier`: `^3.5.1`

### `packages/design-tokens`:
- Export format: Pure TypeScript definitions (`src/tokens.ts`), CSS custom properties (`tokens.css`), and shared Tailwind CSS preset (`preset.ts`).
- Zero heavy dependencies.

### `packages/ui`:
- `@pathixo/design-tokens`: `workspace:*`
- `react`: `^19.0.0` (peer dependency)
- `react-dom`: `^19.0.0` (peer dependency)
- `@radix-ui/react-slot`: `^1.1.2`
- `@radix-ui/react-dialog`: `^1.1.6`
- `@radix-ui/react-dropdown-menu`: `^2.1.6`
- `@radix-ui/react-tabs`: `^1.1.3`
- `lucide-react`: `^0.475.0`
- `class-variance-authority`: `^0.7.1`
- `clsx`: `^2.1.1`
- `tailwind-merge`: `^3.0.1`

### `apps/web`:
- `next`: `^15.2.0`
- `react`: `^19.0.0`
- `react-dom`: `^19.0.0`
- `@pathixo/design-tokens`: `workspace:*`
- `@pathixo/ui`: `workspace:*`
- `tailwindcss`: `^4.0.9`
- `@tailwindcss/postcss`: `^4.0.9`
- `postcss`: `^8.4.49`

---

## 3. Architecture & File Layout

```
Flow/
├── package.json                         # Root monorepo manifest with recursive scripts
├── pnpm-workspace.yaml                  # apps/*, packages/*
├── .npmrc                               # Strict dependency isolation & peer auto-install
├── tsconfig.base.json                   # Strict TypeScript compiler options
├── .gitignore                           # Updated with .next/, next-env.d.ts, .turbo/
├── packages/
│   ├── design-tokens/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tokens.css                   # CSS custom properties for light & dark
│   │   └── src/
│   │       ├── index.ts
│   │       ├── tokens.ts                # TypeScript token objects
│   │       └── preset.ts                # Tailwind preset
│   └── ui/
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           ├── lib/
│           │   └── utils.ts             # cn() helper using clsx + twMerge
│           └── components/
│               ├── button.tsx           # Button & IconButton with CVA
│               ├── badge.tsx            # Badge & StatusBadge (icon + text mandatory)
│               ├── card.tsx             # Surface card with 4px grid padding
│               ├── dialog.tsx           # Radix Dialog wrapper
│               ├── drawer.tsx           # Radix Dialog drawer wrapper
│               ├── separator.tsx        # Divider with 1px border tokens
│               ├── table.tsx            # High-density data table
│               └── skeleton.tsx         # Content-shaped loading state
└── apps/
    └── web/
        ├── package.json
        ├── tsconfig.json
        ├── next.config.ts               # transpilePackages: ['@pathixo/ui', '@pathixo/design-tokens']
        ├── postcss.config.mjs           # @tailwindcss/postcss plugin
        └── app/
            ├── layout.tsx               # Global root layout with Geist fonts
            ├── globals.css              # @import "tailwindcss" + theme mappings
            └── page.tsx                 # Baseline smoke-test page
```

---

## 4. Pitfalls & Anti-Patterns to Prevent

1. **Root Script Bypass Trap**: Root `package.json` must declare `"build": "pnpm -r run build"`, `"lint": "pnpm -r run lint"`, `"typecheck": "pnpm -r run typecheck"` so CI doesn't silently exit 0 on empty root.
2. **Opacity Modifier Breakdown**: Define CSS custom properties with space-separated RGB channels (`184 92 56`) or use modern CSS `color-mix`, enabling Tailwind `/10` and `/20` opacity utilities to compute properly.
3. **Ghost Dependencies in Workspaces**: Ensure `@pathixo/ui` declares `react` and `react-dom` as peer dependencies, not direct dependencies, preventing duplicate React runtime bugs.
4. **Git Staging of Next Cache**: Add `.next/` and `next-env.d.ts` to `.gitignore` before running `next build`.
5. **Anti-AI-Slop Prohibition**: Zero purple/pink gradients, zero neon glows, zero glassmorphism, 4px spacing scale, and 2px–6px restrained corner radii.

---

## 5. Validation Architecture

- **Syntax & Types**: `pnpm -r run typecheck` passes across `packages/design-tokens`, `packages/ui`, and `apps/web`.
- **Packaging Integrity**: Shared packages import cleanly across workspace boundaries without bundle or compilation errors.
- **Production Compilation**: `pnpm --filter web build` produces a valid Next.js standalone/optimized build artifact.

