# Phase 8: Dark-Themed Marketing Landing Page - UI Specification

**Phase:** 08-dark-themed-marketing-landing-page  
**Date:** 2026-11-06  
**Status:** Authoritative UI Contract  

---

## 1. Visual Theme Tokens (`.dark`)

- **Canvas Background**: `bg-[#08090A]` (`var(--canvas)`)
- **Primary Elevated Surface**: `bg-[#101113]` (`var(--surface)`)
- **Secondary Panel Surface**: `bg-[#15171A]` (`var(--surface-subtle)`)
- **Hairline Dividers & Outlines**: `border-[#25272B]` (`var(--border)`)
- **Primary Typography (Headings)**: `text-[#F5F5F5]` (`var(--text-primary)`)
- **Secondary Typography (Body)**: `text-[#A0A2A8]` (`var(--text-secondary)`)
- **Muted Typography (Captions/Meta)**: `text-[#747780]` (`var(--text-muted)`)
- **Brand Restrained Accent**: `text-[#D9774F]` / `bg-[#D9774F]` (`var(--brand)`)

---

## 2. Page Section Spacing & Layout Architecture

- **Max Container Width**: `max-w-6xl` (1152px) with horizontal gutters (`px-4 sm:px-6 lg:px-8`).
- **Section Vertical Rhythm**:
  - Hero Section: `pt-16 pb-20 sm:pt-24 sm:pb-32`
  - Content Sections: `py-20 sm:py-28`
  - Footer: `py-16 sm:py-20`
- **Component Geometry**: 4px grid spacing, 2px–6px restrained corner radii.
- **Section Headers**:
  - Eyebrow badge: Uppercase `text-xs font-mono font-medium tracking-wider text-brand`.
  - Main Heading: `text-2xl sm:text-3xl font-semibold tracking-[-0.015em] text-text-primary`.
  - Description: `text-sm sm:text-base text-text-secondary max-w-2xl`.
