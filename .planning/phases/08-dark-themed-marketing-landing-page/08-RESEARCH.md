# Phase 8: Dark-Themed Marketing Landing Page - Research

**Date:** 2026-11-06  
**Status:** Complete  
**Requirements Addressed:** `LANDING-01` through `LANDING-08`  

---

## 1. Editorial Composition & Typography Strategy

In contrast to generic startup landing pages filled with floating 3D spheres, cartoon vectors, and neon glowing borders, technical enterprise platforms (Linear, Raycast, Stripe) use **typography-driven hierarchy**:
- **Display Hero**: `text-4xl sm:text-6xl font-semibold tracking-[-0.02em]` in high-contrast ink (`#F5F5F5`).
- **Section Headers**: `text-2xl sm:text-3xl font-semibold tracking-[-0.015em]`.
- **Subheadings**: `text-sm sm:text-base text-text-secondary leading-relaxed`.
- **Technical Badges**: Uppercase `text-[11px] font-mono tracking-wider`.
- **Negative Space**: Generous vertical section padding (`py-20 sm:py-28`) providing natural breathing room.

---

## 2. Route Group Layout Topology

Next.js App Router route groups isolate layouts without adding path segments to the public URL:
- `apps/web/app/(marketing)/layout.tsx`:
  - Enforces `data-theme="dark"` / `.dark` scope.
  - Mounts `MarketingHeader` at top and `MarketingFooter` at bottom.
  - Renders child pages within `<main className="flex-1">`.
- `apps/web/app/(marketing)/page.tsx`:
  - Renders the home landing page at `/`.
  - Composes the modular section components into an unbroken, editorial scroll experience.

---

## 3. Section Component Decomposition

```
apps/web/app/(marketing)/
├── layout.tsx                     # Dark theme boundary + Sticky Nav + Footer
├── page.tsx                       # Landing Page Assembly
└── _components/
    ├── marketing-header.tsx       # Sticky navbar with mobile Radix drawer
    ├── hero-section.tsx           # Editorial headline, dual CTAs, preview wrapper
    ├── trust-bar.tsx              # Monochromatic infrastructure partner marks
    ├── capabilities-section.tsx   # 6 core capability cards
    ├── channel-showcase.tsx       # WhatsApp & Email side-by-side deep dives
    ├── workflow-pipeline.tsx      # Conceptual trigger-to-ledger visual graph
    ├── integrations-security.tsx  # Enterprise client isolation & security commitments
    ├── final-cta.tsx              # Clean conversion banner
    └── marketing-footer.tsx       # 4-column footer with legal and status pill
```

---

## 4. Accessibility & Responsive Viewport Rules

- **Contrast**: All text on dark backgrounds (`#08090A`, `#101113`) meets or exceeds WCAG 2.2 AA ($\ge 4.5:1$ for body, $\ge 3:1$ for large text).
- **Mobile Navigation**: Radix Dialog primitive provides keyboard accessibility, focus trapping, and body scroll lock when open.
- **Motion Reduction**: All transitions adhere to `motion-reduce:transition-none` and $\le 150\text{ms}$ duration.
- **Zero AI-Slop**: Zero purple/pink gradients, zero neon borders, zero glassmorphism blurs.
