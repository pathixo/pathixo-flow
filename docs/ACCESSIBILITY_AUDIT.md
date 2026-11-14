# Accessibility Audit Report — Marketing Pages (1440px & 375px)

**Issue Reference**: Resolves [#34](https://github.com/pathixo/pathixo-flow/issues/34)  
**Standard**: WCAG 2.2 Level AA Compliance & Axe Core 4.10  
**Target Viewports**: Desktop (`1440px`) & Mobile (`375px`)  
**Scope**: Public Marketing Landing Page (`/` / `apps/web/app/(marketing)`)  
**Audit Policy**: Report only. Identified findings will be triaged by senior engineers into discrete implementation issues.

---

## 1. Executive Summary & Findings Matrix

| Finding ID | Issue Title | WCAG Criterion | Severity | Viewport | Component Location |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **A11Y-01** | Nested interactive elements (`<button>` inside `<a>` / `<Link>`) | 4.1.2 Name, Role, Value | **Blocker** | Both (1440px & 375px) | `hero-section.tsx`, `final-cta.tsx`, `marketing-header.tsx`, `mobile-nav.tsx` |
| **A11Y-02** | Color contrast failure on muted supporting text (`#747780` on `#08090A`) | 1.4.3 Contrast (Minimum) | **Major** | Both (1440px & 375px) | `marketing-header.tsx`, `marketing-footer.tsx`, `channel-showcase.tsx`, `trust-bar.tsx` |
| **A11Y-03** | Missing visible focus indicators on interactive CTA buttons | 2.4.7 Focus Visible | **Major** | Desktop (1440px) | `hero-section.tsx`, `marketing-header.tsx`, `final-cta.tsx` |
| **A11Y-04** | Heading hierarchy skipping in footer (`<h2>` &rarr; `<h4>`) | 1.3.1 Info and Relationships | **Major** | Both (1440px & 375px) | `marketing-footer.tsx` |
| **A11Y-05** | Mobile drawer missing ARIA description and trigger `aria-expanded` | 4.1.2 Name, Role, Value | **Major** | Mobile (375px) | `mobile-nav.tsx`, `packages/ui/drawer.tsx` |
| **A11Y-06** | Interactive channel showcase tabs missing ARIA tablist semantics | 4.1.2 Name, Role, Value | **Minor** | Both (1440px & 375px) | `channel-showcase.tsx` |
| **A11Y-07** | Touch targets below minimum interactive sizing on mobile (< 24px/44px) | 2.5.8 Target Size (Minimum) | **Minor** | Mobile (375px) | `channel-showcase.tsx`, `marketing-footer.tsx` |

---

## 2. Detailed Findings & Actionable Remediations

### Finding A11Y-01: Nested Interactive Elements (`<button>` inside `<a>` / `<Link>`)
* **WCAG Criterion**: [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) & HTML5 Spec
* **Axe Rule**: `nested-interactive`
* **Severity**: **Blocker**
* **Affected Viewports**: Desktop (`1440px`) & Mobile (`375px`)
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/hero-section.tsx` (Lines 26–34 & 35–42)
  - `apps/web/app/(marketing)/_components/marketing-header.tsx` (Lines 55–62)
  - `apps/web/app/(marketing)/_components/final-cta.tsx` (Lines 18–26)
  - `apps/web/app/(marketing)/_components/mobile-nav.tsx` (Lines 71–78 & 79–87)

#### Description:
In multiple marketing sections, `<button type="button">` elements are wrapped directly inside `<a>` or `<Link>` anchor tags:
```tsx
// Anti-pattern present in hero-section.tsx:
<a href="#cta">
  <button type="button" className="...">
    Get started
  </button>
</a>
```
This violates the HTML5 content model and WCAG 4.1.2. Assistive technologies (screen readers) announce "Link Button", which creates unpredictable focus navigation, duplicate speech synthesizer alerts, and inconsistent event bubbling across browsers.

#### Suggested Fix:
Remove the inner `<button>` and apply button styling directly to the anchor tag, or use Radix UI's `Button asChild` pattern:
```tsx
<a
  href="#cta"
  className="w-full sm:w-auto h-11 px-6 rounded-lg bg-white text-black text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg"
>
  Get started
  <ArrowRight className="h-4 w-4" />
</a>
```

---

### Finding A11Y-02: Color Contrast Failure on Muted Supporting Text (`#747780` on `#08090A`)
* **WCAG Criterion**: [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
* **Axe Rule**: `color-contrast`
* **Severity**: **Major**
* **Affected Viewports**: Desktop (`1440px`) & Mobile (`375px`)
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/marketing-header.tsx` (Line 28: `<span className="text-[11px] font-medium text-[#747780]">by Pathixo</span>`)
  - `apps/web/app/(marketing)/_components/marketing-footer.tsx` (Lines 21, 27, 31, 35, 93–99: `text-xs text-[#747780]`)
  - `apps/web/app/(marketing)/_components/channel-showcase.tsx` (Lines 133, 157, 163, 182: `text-[10px] text-[#747780]`)
  - `apps/web/app/(marketing)/_components/trust-bar.tsx` (Line 49: `text-text-muted` which maps to `#747780`)

#### Contrast Measurement:
* Foreground `#747780` Relative Luminance: $L_1 = 0.182$
* Background `#08090A` Relative Luminance: $L_2 = 0.0016$
* Calculated Contrast Ratio: **$\mathbf{4.49:1}$**
* WCAG AA Threshold for regular text ($< 18\text{pt} / 24\text{px}$): **$\ge 4.5:1$**
* While the primary body text `#A0A2A8` passes comfortably at $7.83:1$, secondary muted text `#747780` fails at small sizes ($10\text{px} - 12\text{px}$).

#### Suggested Fix:
Adjust the muted text token from `#747780` to **`#8A8D96`** (contrast ratio **$6.0:1$** on `#08090A`), maintaining visual hierarchy while passing WCAG AA.

---

### Finding A11Y-03: Missing Visible Focus Indicators on Interactive CTAs
* **WCAG Criterion**: [2.4.7 Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
* **Axe Rule**: `focus-visible`
* **Severity**: **Major**
* **Affected Viewports**: Desktop (`1440px`) & Keyboard Navigators
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/hero-section.tsx` (Lines 29, 38)
  - `apps/web/app/(marketing)/_components/marketing-header.tsx` (Lines 37, 50, 58)
  - `apps/web/app/(marketing)/_components/final-cta.tsx` (Line 21)

#### Description:
Primary and secondary action buttons define hover styles (`hover:bg-neutral-200`) but omit `focus-visible` styles. When keyboard-only users navigate using the `Tab` key, no visible outline indicates active focus.

#### Suggested Fix:
Add accessible focus rings:
```tsx
className="... focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A]"
```

---

### Finding A11Y-04: Heading Level Hierarchy Skipping in Footer (`<h2>` &rarr; `<h4>`)
* **WCAG Criterion**: [1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) & [2.4.6 Headings and Labels (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
* **Axe Rule**: `heading-order`
* **Severity**: **Major**
* **Affected Viewports**: Desktop (`1440px`) & Mobile (`375px`)
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/marketing-footer.tsx` (Lines 59, 88, 117: `<h4>Product</h4>`, `<h4>Resources</h4>`, `<h4>Company</h4>`)

#### Description:
In `marketing-footer.tsx`, column headers use `<h4>` tags without any intervening `<h3>` parent following the `<h2>` in `FinalCta`. Heading levels must not skip levels in descending order.

#### Suggested Fix:
Change `<h4>` column headers to `<h3>` while retaining identical typographic styling classes.

---

### Finding A11Y-05: Mobile Drawer Missing ARIA Description and Trigger `aria-expanded`
* **WCAG Criterion**: [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
* **Axe Rule**: `dialog-description`, `aria-dialog-name`
* **Severity**: **Major**
* **Affected Viewports**: Mobile (`375px`)
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/mobile-nav.tsx` (Lines 34–54)
  - `packages/ui/src/components/drawer.tsx` (Lines 19–38)

#### Description:
1. `DrawerContent` (based on Radix UI Dialog) supplies a `DrawerTitle` but lacks a `DrawerDescription` or `aria-describedby={undefined}`. Radix UI logs a console warning and screen readers miss description context.
2. The trigger button `<button aria-label="Open mobile navigation menu">` does not communicate dynamic open/closed state via `aria-expanded`.

#### Suggested Fix:
1. Add `aria-expanded={open}` to `DrawerTrigger`.
2. Add a visually hidden `DrawerDescription` within `DrawerHeader`:
```tsx
<span className="sr-only">Navigation links and account access menu</span>
```

---

### Finding A11Y-06: Interactive Channel Showcase Tabs Missing ARIA Tab Roles
* **WCAG Criterion**: [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
* **Axe Rule**: `aria-roles`
* **Severity**: **Minor**
* **Affected Viewports**: Desktop (`1440px`) & Mobile (`375px`)
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/channel-showcase.tsx` (Lines 125–139 & 355–370)

#### Description:
The interactive showcase tabs (`templates`, `dispatch`, `inbox`, `logs`) are rendered as plain `<button>` elements within an unadorned `<div>`. Assistive technologies do not announce them as tabs, and screen readers cannot determine which tab is selected.

#### Suggested Fix:
Add `role="tablist"` to the tab container and `role="tab"`, `aria-selected={waTab === tab}`, and `aria-controls` to each button.

---

### Finding A11Y-07: Sub-minimum Touch Target Sizes on Mobile Viewport (375px)
* **WCAG Criterion**: [2.5.8 Target Size (Minimum) (Level AA - WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
* **Axe Rule**: `target-size`
* **Severity**: **Minor**
* **Affected Viewports**: Mobile (`375px`)
* **Exact Component Locations**:
  - `apps/web/app/(marketing)/_components/channel-showcase.tsx` (Lines 198, 231: `MoreHorizontal` action buttons with $24\text{px} \times 24\text{px}$ bounding box)
  - `apps/web/app/(marketing)/_components/marketing-footer.tsx` (Lines 36–54: Social links without padding)

#### Suggested Fix:
Increase interactive touch padding to ensure a minimum $36\text{px} \times 36\text{px}$ or $44\text{px} \times 44\text{px}$ bounding box.
