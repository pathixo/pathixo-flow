# Phase 7: Live Product Preview Simulator - Context

**Gathered:** 2026-11-06  
**Status:** Ready for planning  
**Source:** System Prompt, Linear Reference Analysis & v2.0 Specifications  

<domain>
## Phase Boundary

Phase 7 delivers the core visual instrument of Pathixo Flow's public presence: the **Live Product Preview Simulator**.
Rather than using static PNG/WebP screenshots that blur on high-DPI screens and become obsolete, this component is built entirely using real React/SVG DOM elements styled with Pathixo Flow's design tokens.

It visually demonstrates:
1. The operational application console shell (window titlebar, workspace switcher, high-density telemetry).
2. The 3-stage delivery pipeline:
   - Stage 1: Inbound Webhook Ingestion (Meta Cloud API HMAC-SHA256 verification, sub-20ms latency acknowledgement).
   - Stage 2: Queue & Worker Execution (BullMQ job processing, Redis `SETNX` idempotency lock, duplicate suppression).
   - Stage 3: Financial Ledger & Rate Attribution (P0 usage ledger row, client spend attribution, date-effective rate card calculation).
3. Firewall-safe mock data standards (dummy phone ranges `+15550100`..`+15550199`, sanitized demo tokens).
4. Responsive scaling: crisp typography, scroll-free desktop presentation, and clean mobile adaptation.
</domain>

<decisions>
## Implementation Decisions

### 1. Architecture of the Preview Simulator
- **Component Location**: `apps/web/components/preview/` with clean modular decomposition:
  - `window-shell.tsx`: Obsidian window frame, window controls, route badge, active workspace context.
  - `pipeline-visualizer.tsx`: Interactive 3-stage visual nodes (Ingest $\to$ Worker $\to$ Ledger) with connection rails.
  - `stage-inspectors/`:
    - `ingest-stage.tsx`: Webhook payload preview, HMAC verification pill, correlation ID chip.
    - `worker-stage.tsx`: Queue state, idempotency lock status (`SETNX OK`), retry counter (`0/3`).
    - `ledger-stage.tsx`: High-density ledger table row, rate card calculation, prepaid wallet balance deduction.
  - `preview-simulator.tsx`: Root interactive composite managing state machine (`normal`, `duplicate`, `retry`).
- **Interactive State Machine**:
  - `Simulate Message`: Demonstrates normal end-to-end delivery lifecycle.
  - `Test Duplicate (Idempotency Guard)`: Demonstrates instant duplicate suppression via Redis idempotency key.
  - `Inspect Payload`: Toggles formatted JSON view with correlation ID tracking.

### 2. Design & Visual Invariants
- **Aesthetic**: Linear-inspired layered dark obsidian (`#08090A` canvas, `#101113` surface, `#15171A` elevated, `border-[#25272B]`).
- **Geometry**: 4px grid spacing, 2px–6px restrained corner radii.
- **Typography**: Geist Sans headings and Geist Mono monospace IDs, timestamps, and payload keys with `tabular-nums`.
- **Anti-AI-Slop**: Zero purple/pink gradients, zero neon glowing borders, zero generic 3D illustrations. Pure technical craft.

### 3. Security Firewall Compliance
- **Phone Numbers**: Must strictly use RFC/E.164 reserved demo numbers: `+15550100` to `+15550199`. Never use live Indian phone numbers (`+91[6-9]...`).
- **Tokens & Secrets**: Use sanitized dummy identifiers (`tok_demo_live_7x9q`, `idemp_k_98f12a`). Never commit live tokens or keys.
</decisions>

<canonical_refs>
## Canonical References

### Authoritative Specs
- `docs/DESIGN.md` — Section 5.1 (Product Architecture Preview) and Section 1.2 (Anti-AI-Slop Prohibition)
- `docs/RULES.md` — Section 1.1 (Tokens), Section 2.1 (Accessibility), Section 5.1 (Mock Data Standards)
- `.planning/research/FEATURES.md` — Section 4 (Product Preview Strategy for Unbuilt Systems)
- `.planning/research/PITFALLS.md` — Section: CI Security Firewall Traps in Marketing Copy & Mock Previews
</canonical_refs>

<specifics>
## Specific Requirements
- `PREVIEW-01`: Live Synthetic React Mockup with real DOM/SVG components
- `PREVIEW-02`: Interactive 3-Stage Pipeline Simulation (Ingest $\to$ Worker $\to$ Ledger)
- `PREVIEW-03`: Firewall-safe mock data standards
- `PREVIEW-04`: Responsive preview scaling and peek fold adaptation
</specifics>

<deferred>
## Deferred
- Hero section typography and landing page placement -> Phase 8
- Auth and console route shells -> Phase 9
- Backend database and live BullMQ worker connections -> Subsequent backend milestones
</deferred>

---

*Phase: 07-live-product-preview-simulator*  
*Context gathered: 2026-11-06 via System Prompt & v2.0 Specifications*  

