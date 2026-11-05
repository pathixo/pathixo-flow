# Phase 6: Monorepo Foundation & Design System Primitives - UI Specification

**Phase:** 06-monorepo-foundation-and-design-system-primitives  
**Date:** 2026-11-06  
**Status:** Authoritative UI Contract  

---

## 1. Visual Design Language & Invariants

### 1.1 Philosophy
- **Editorial & Restrained**: Purpose-built for high-reliability business automation. Calm, distraction-free instrument.
- **Dual-Theme Isolation**:
  - Marketing Surface: Layered obsidian dark theme (`#08090A`).
  - Application Console: Warm neutral light theme (`#F7F7F4`).
- **Anti-AI-Slop Prohibition**:
  - Zero purple-to-blue or pink gradients.
  - Zero neon cyan/violet glowing buttons or outer box shadows.
  - Zero decorative glassmorphism (`backdrop-blur-md` on data views).
  - Zero floating 3D clay figures or abstract blobs.
  - Zero rainbow data charts.

---

## 2. Token Architecture (`@pathixo/design-tokens`)

### 2.1 Color Tokens
```css
/* Warm Neutral Light Theme (Default & Authenticated Shells) */
:root, [data-theme="light"] {
  --canvas: 247 247 244;         /* #F7F7F4 */
  --surface: 255 255 255;        /* #FFFFFF */
  --surface-subtle: 240 241 237; /* #F0F1ED */
  --border: 228 231 225;         /* #E4E7E1 */
  --border-subtle: 236 238 233;  /* #ECEEE9 */
  --text-primary: 29 36 33;      /* #1D2421 */
  --text-secondary: 104 113 107; /* #68716B */
  --text-muted: 147 155 149;     /* #939B95 */
  --brand: 184 92 56;            /* #B85C38 Terracotta */
  --brand-hover: 158 77 44;      /* #9E4D2C */
  --brand-subtle: 248 239 234;   /* #F8EFEA */
  --success: 47 125 91;          /* #2F7D5B */
  --success-bg: 237 246 241;     /* #EDF6F1 */
  --warning: 166 106 31;         /* #A66A1F */
  --warning-bg: 251 244 235;     /* #FBF4EB */
  --danger: 181 71 71;           /* #B54747 */
  --danger-bg: 251 239 239;      /* #FBEFEF */
}

/* Layered Obsidian Dark Theme (Marketing Landing Page) */
[data-theme="dark"], .dark {
  --canvas: 8 9 10;              /* #08090A */
  --surface: 16 17 19;           /* #101113 */
  --surface-subtle: 21 23 26;    /* #15171A */
  --surface-elevated: 27 29 33;  /* #1B1D21 */
  --border: 37 39 43;            /* #25272B */
  --border-subtle: 28 30 33;     /* #1C1E21 */
  --text-primary: 245 245 245;   /* #F5F5F5 */
  --text-secondary: 160 162 168; /* #A0A2A8 */
  --text-muted: 116 119 128;     /* #747780 */
  --brand: 217 119 79;           /* #D9774F Adjusted for 5.2:1 contrast */
  --brand-hover: 229 139 101;    /* #E58B65 */
  --brand-subtle: 42 26 20;      /* #2A1A14 */
  --success: 76 154 114;         /* #4C9A72 */
  --success-bg: 18 36 28;
  --warning: 194 139 69;         /* #C28B45 */
  --warning-bg: 38 29 16;
  --danger: 196 91 91;           /* #C45B5B */
  --danger-bg: 38 18 18;
}
```

### 2.2 Geometry & Radius Tokens
- `radius-sm` (2px): Code chips, micro status tags.
- `radius-md` (4px): Standard buttons, text inputs, dropdown menus.
- `radius-lg` (6px): Modal dialogs, flyout drawers, dashboard cards.
- **Strict Prohibition**: No `rounded-full` pills for standard cards or containers.

---

## 3. Component Primitive Standards (`@pathixo/ui`)

### 3.1 Button Variants
1. **Primary**:
   - Light: Background `#B85C38`, text `#FFFFFF`, hover `#9E4D2C`.
   - Dark: Background `#D9774F` (or `#FFFFFF` with `#08090A` text for marketing hero), hover `#E58B65`.
   - Radius: 4px (`rounded-md`). Height: 36px (default), 32px (sm), 44px (lg).
2. **Secondary / Outline**:
   - Background transparent, border `1px solid var(--border)`, text `var(--text-primary)`, hover `var(--surface-subtle)`.
3. **Ghost / Subtle**:
   - Background transparent, text `var(--text-secondary)`, hover text `var(--text-primary)`, hover `var(--surface-subtle)`.
4. **Destructive**:
   - Background `var(--danger)`, text `#FFFFFF`, hover opacity 90%.

### 3.2 StatusBadge
- **Height**: 20px, font size 11px, weight 500, radius 2px (`rounded-sm`).
- **Requirement**: Mandatory status dot (6px) or Lucide icon + descriptive text. Never communicate status by color alone.
- Variants: `success`, `warning`, `danger`, `neutral`, `brand`.

### 3.3 Card & Container
- Standard 1px solid border (`var(--border)`).
- Padding following 4px grid (`p-4` = 16px, `p-6` = 24px).
- Radius 6px (`rounded-lg`).

### 3.4 Table
- Compact data rows (36px or 44px).
- Header: 11px uppercase tracking-wider semi-bold, background `var(--surface-subtle)`.
- Numeric values must use `tabular-nums` font feature.
