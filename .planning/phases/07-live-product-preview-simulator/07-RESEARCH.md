# Phase 7: Live Product Preview Simulator - Research

**Date:** 2026-11-06  
**Status:** Complete  
**Requirements Addressed:** `PREVIEW-01`, `PREVIEW-02`, `PREVIEW-03`, `PREVIEW-04`  

---

## 1. Technical Strategy: "Interface as Art"

Standard SaaS landing pages typically resort to static PNG or WebP screenshots of their dashboards. For an unbuilt or evolving system like Pathixo Flow, this creates fatal flaws:
- Raster images blur on high-DPI Retina screens and scale poorly on mobile viewports.
- Static screenshots look unconvincing and generic.
- Large image assets significantly degrade Core Web Vitals (Largest Contentful Paint $>2.5\text{s}$).

**The Solution:** Build a live, responsive, deterministic simulator using actual React components and design tokens:
- **Zero-Image LCP**: 100% SVG and semantic DOM elements yielding $<1.0\text{s}$ LCP.
- **Retina Crispness**: Typography and borders render at device-native resolution.
- **Dynamic Interactivity**: Visitors can toggle simulation modes to see real engineering primitives (HMAC verification, Redis idempotency locks, and usage ledger attribution).

---

## 2. Component Composition & State Machine

```
ProductPreviewSimulator (Client Component)
├── WindowShell (Obsidian Frame with titlebar, traffic light dots, workspace badge)
├── SimulationControls (Action toolbar: "Run Normal Event", "Trigger Duplicate", "Inspect Payload")
└── MainConsoleGrid
    ├── PipelineFlowRail (Horizontal step tracker: Webhook Ingest → Queue Worker → Financial Ledger)
    ├── ActiveStageDetail (Dynamic inspection panel based on selected/active stage)
    │   ├── IngestView: Raw HTTP request headers, Meta HMAC signature pill, normalized E.164 body
    │   ├── WorkerView: BullMQ job state, idempotency key lock status, bounded retry policy
    │   └── LedgerView: Itemized financial ledger row, client attribution, rate card pricing, prepaid balance
    └── TelemetryBar (Real-time indicators: p95 latency: 18ms, deduplication: 100%, unbilled: ₹0)
```

---

## 3. Firewall Safety & Mock Data Verification

`.github/workflows/security-firewall.yml` enforces four strict regex guards across all code in `apps/`:
1. `EAA[A-Za-z0-9]{30,}` (Meta tokens)
2. `re_[A-Za-z0-9]{24,}` (Resend API keys)
3. `\+91[6-9][0-9]{9}` (Live Indian phone numbers)
4. Hardcoded raw rates (`0.8631` or `0.1150`)

### Prevention Standards for the Preview Component:
- **Phone Numbers**: Must use international mock numbers in the US 555 range: `+1-555-0192` or format as `+1 (555) 019-2048`.
- **Tokens**: Use labeled mock identifiers: `meta_sig_demo_sha256_valid`, `idemp_demo_7f8a9b`.
- **Rates**: Import rate values from rate card constants or format with dynamic currency formatters.

---

## 4. Responsive Adaptation

- **Desktop ($\ge 1024\text{px}$)**: Full 2-column or 3-column operational layout with interactive tabs and telemetry footer.
- **Tablet ($768\text{px} - 1023\text{px}$)**: Stacked pipeline steps with collapsible inspection panels.
- **Mobile ($<768\text{px}$)**: Compact card view with swipeable/tabbed stages, preserving 100% readability without horizontal overflow.

