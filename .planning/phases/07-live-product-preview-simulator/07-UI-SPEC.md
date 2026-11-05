# Phase 7: Live Product Preview Simulator - UI Specification

**Phase:** 07-live-product-preview-simulator  
**Date:** 2026-11-06  
**Status:** Authoritative UI Contract  

---

## 1. Visual Hierarchy & Window Shell

- **Window Container**:
  - Background: `bg-surface` (`#101113`) on dark canvas (`#08090A`).
  - Border: `1px solid var(--border)` (`#25272B`).
  - Corner Radius: `rounded-lg` (6px).
  - Shadow: `shadow-2xl` with subtle dark border highlight.
- **Titlebar Header**:
  - Height: 40px (`h-10`).
  - Traffic Light Controls: 3 dots (10px diameter: red `#C45B5B`, yellow `#C28B45`, green `#4C9A72`) with 6px gap.
  - Active Route Badge: Centered route chip `flow.pathixo.com / live-pipeline-monitor` in Geist Mono 11px font.
  - System Telemetry: "Engine: BullMQ + Redis" / "p95: 18ms" badge.

---

## 2. 3-Stage Pipeline Nodes

### Stage 1: Inbound Webhook Ingest
- Status Tag: `HMAC SHA-256 ✓` in green badge (`bg-success/10 text-success border-success/20`).
- Telemetry: Ingestion latency `18ms` (p95 target $\le 2\text{s}$).
- Content: Simulated Meta Cloud API inbound lead payload, timestamp, and sanitized phone number (`+1-555-0192`).

### Stage 2: Queue & Worker Execution
- Status Tag: `SETNX Idempotency Lock` in brand terracotta (`bg-brand/10 text-brand border-brand/20`).
- Queue Metric: `Job #4092` &bull; `Attempt 1/3` &bull; `Deduplication: 100%`.
- Interactive Duplicate Simulation: Toggling "Trigger Duplicate" shows instant rejection (`409 Conflict / Dropped duplicate event`).

### Stage 3: Financial Ledger & Billing Attribution
- Status Tag: `P0 Ledger Attributed` in green badge.
- Itemized Row: `Client: Acme Corp` &bull; `Category: WhatsApp Utility` &bull; `Rate: ₹0.8631` &bull; `Prepaid Deducted`.
- Margin Metric: `100% Cost Recovery ✓`.

---

## 3. Interactive Toolbar
- Mode Switcher:
  - `Normal Ingest & Delivery`: Shows smooth 3-stage green flow.
  - `Duplicate Replay Guard`: Demonstrates instant duplicate suppression at Stage 2.
  - `Payload Inspection`: Expands formatted code inspector in Geist Mono.
- Transitions: Snappy $\le 150\text{ms}$ CSS-first transitions.

