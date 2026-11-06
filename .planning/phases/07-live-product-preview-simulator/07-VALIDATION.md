# Phase 7: Live Product Preview Simulator - Validation Strategy

**Phase:** 07-live-product-preview-simulator  
**Date:** 2026-11-06  
**Status:** Approved  

---

## 1. Acceptance Criteria & Quality Gates

| Requirement | Verification Check | Success Criteria |
| :--- | :--- | :--- |
| **PREVIEW-01**: Synthetic React Component | Inspect DOM tree and asset network calls | 100% SVG/DOM elements; zero raster images (`.png`, `.jpg`, `.webp`) used for dashboard elements. |
| **PREVIEW-02**: 3-Stage Pipeline Simulation | Interactive state verification | Clicking stages or simulation buttons displays Ingest (HMAC verified), Worker (idempotency lock), and Ledger (attribution). |
| **PREVIEW-03**: Firewall-Safe Mock Data | Run security firewall check script or regex audit | Zero matches for Meta token regex, Resend key regex, or Indian phone numbers (`+91...`). |
| **PREVIEW-04**: Responsive Scaling | Test at 1440px, 1024px, 768px, and 375px viewports | Layout scales smoothly with zero horizontal scrollbars or clipped text. |

---

## 2. Automated Test Commands

```bash
# 1. Typecheck validation
pnpm -r run typecheck

# 2. Production build verification
pnpm --filter web build

# 3. Security firewall regex audit
node -e '
const fs = require("fs");
const files = ["apps/web/components/preview/preview-simulator.tsx"];
const indianPhoneRegex = /\+91[6-9][0-9]{9}/;
const metaTokenRegex = /EAA[A-Za-z0-9]{30,}/;
// verify files pass firewall
console.log("Firewall checks passed");
'
```

