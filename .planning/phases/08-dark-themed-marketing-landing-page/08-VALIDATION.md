# Phase 8: Dark-Themed Marketing Landing Page - Validation Strategy

**Phase:** 08-dark-themed-marketing-landing-page  
**Date:** 2026-11-06  
**Status:** Approved  

---

## 1. Acceptance Criteria & Quality Gates

| Requirement | Verification Check | Success Criteria |
| :--- | :--- | :--- |
| **LANDING-01**: Sticky Navigation | Desktop and mobile drawer testing | Navbar remains pinned with backdrop blur; mobile menu opens/closes with focus trap and keyboard ESC. |
| **LANDING-02**: Hero Section | Layout & preview integration | Headline, subheadline, dual CTAs, and `ProductPreviewSimulator` render cleanly without clipping. |
| **LANDING-03**: Core Capabilities | Grid layout audit | 6 capability pillars render with distinct information density and icons. |
| **LANDING-04**: WhatsApp Showcase | Content & badge inspection | Meta Cloud API, approved templates, and opt-out suppression clearly communicated. |
| **LANDING-05**: Email Showcase | Content & badge inspection | Amazon SES / Resend, DKIM/SPF, bounce webhook visibility displayed. |
| **LANDING-06**: Workflow Pipeline | Visual graph inspection | Connected visual flow (Trigger $\to$ Condition $\to$ Action $\to$ Ledger) renders cleanly. |
| **LANDING-07**: Integrations & Security | Copy & security audit | Client isolation, zero credential leak guarantee, and use cases displayed without fake claims. |
| **LANDING-08**: Multi-Column Footer | Sitemap & status pill check | 4-column layout, copyright (Pathixo Pvt. Ltd.), and operational status pill render. |

---

## 2. Automated Test Commands

```bash
# 1. Typecheck across monorepo
pnpm -r run typecheck

# 2. Production build verification
pnpm --filter web build

# 3. Security firewall audit
Get-ChildItem -Path "apps/web" -Recurse -Include *.ts,*.tsx | Select-String -Pattern '\+91[6-9][0-9]{9}|EAA[A-Za-z0-9]{30,}|re_[A-Za-z0-9]{24,}'
```
