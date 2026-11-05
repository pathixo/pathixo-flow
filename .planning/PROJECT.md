# Pathixo Flow (Automation Suite) - Project Charter & Context

## 1. Executive Summary & Vision

**Pathixo Flow** is an internal engineering platform and reusable automation delivery toolkit developed by **Pathixo Pvt. Ltd.** to deliver repeatable, high-reliability business automations for small and mid-sized businesses (SMBs), startups, and agencies.

The initial release focuses on two core channels:
1. **WhatsApp Automation**
2. **Email Automation**

### Strategic Delivery Thesis
> "Build the reusable 70–80% once, configure the common cases, and reserve custom development for the remaining client-specific requirements."

The platform is **not** a public self-serve SaaS product and **not** a visual drag-and-drop workflow builder. It is a developer-operated engine engineered to reduce engineering delivery hours, standardize quality and testing, eliminate cross-client operational interference, and guarantee precise unit economics and cost recovery.

---

## 2. Core Principles & Non-Negotiables

1. **Reuse the stable parts, customize the business logic**: Standardize provider webhook ingestion, normalization, queuing, idempotency, retry policies, and financial metering.
2. **One repository does not mean one runtime**: Monorepo source management with independently deployable application runtimes (`apps/whatsapp-automation`, `apps/email-automation`).
3. **Independent applications, independently releasable**: Failure or release of one application must never block or require the release of the other.
4. **Client isolation is foundational**: Deployment-per-client or strict tenant isolation; zero cross-client credential, event, log, or data leakage. Production secrets are never committed.
5. **Prefer boring, proven infrastructure**: Conservative, stable components (Node.js/TypeScript, PostgreSQL, Redis queues, Docker) over premature distributed complexity.
6. **No abstraction without a real repeated usecase**: Build only abstractions proven across at least two concrete client workflows.
7. **Configuration-first delivery**: New client engagements expressible via versioned, validated configuration schemas before requiring custom code extensions.
8. **Financial metering is a P0 requirement**: Client-level usage events, versioned rate cards, idempotency, and cost attribution must be built into the foundation—never deferred post-MVP.

---

## 3. Product Goals and Non-Goals

### 3.1 Goals
* **Reusable Delivery Foundation**: Production starter services for WhatsApp and Email automation.
* **Shared Reliability Primitives**: Shared packages for contracts, queue abstractions, retry strategies, configuration validation, and structured observability.
* **Idempotency & Deduplication**: End-to-end duplicate suppression across webhook ingestion and outbound external side effects.
* **Client Isolation**: Absolute segregation of credentials, recipient data, logs, and workflow state.
* **Provider Abstraction**: Decoupled provider adapter layer allowing Meta Cloud API/BSP or SES/Resend switches without rewriting core business workflows.
* **Financial Ledger & Metering**: Immutable usage tracking by client, provider, market, category, and date-effective rate cards.
* **Repeatable Client Handover**: Standardized discovery checklists, configuration templates, and operational runbooks.

### 3.2 Non-Goals (Initial Release)
* **No Public Self-Serve SaaS Control Panel or Billing Portal**.
* **No General-Purpose Drag-and-Drop Workflow Builder**.
* **No Third-Party Automation Marketplace**.
* **No AI Autonomous Agent Platform or Autonomous Workflow Designer**.
* **No Universal Omnichannel Inbox or Support CRM**.
* **No Shared Multi-Tenant Control Plane** prior to validated commercial demand.
* **No Unsolicited Bulk Messaging or Evasion of Provider Policies**.

---

## 4. Users and Stakeholders

* **Pathixo Engineer / Implementer**: Configures client workflows, connects credentials, implements extensions, runs tests, and deploys applications.
* **Pathixo Technical Lead**: Oversees architecture, shared package boundaries, security, code reviews, and release quality.
* **Pathixo Delivery Manager**: Scopes client engagements, coordinates onboarding, and manages acceptance and handover.
* **Client Administrator**: Provides accounts, approved templates, and business rules; receives usage reports.
* **Client Operator**: Business end-user interacting with the deployed automations in day-to-day operations.

---

## 5. Commercial & Financial Economics

* **Three-Layer Financial Architecture**:
  1. *Platform Economics*: Reusable engineering investment and fixed shared infrastructure (compute, DB, queue, logs).
  2. *Client Economics*: Setup fees, recurring platform/support fees, and direct implementation labour.
  3. *Provider Economics*: WhatsApp and email consumption measured and recharged separately.
* **Golden Commercial Rule**: Never sell unlimited WhatsApp or email usage under a fixed fee. Provider usage must be client-owned or managed via a prepaid usage wallet with automatic low-balance pause triggers.
* **Initial Targets**:
  - Implementation Gross Margin: $\ge 40\%$
  - Recurring Contribution Margin: $\ge 50\%$
  - Provider Cost Recovery: $100\%$ of agreed billable usage
  - Unbilled Usage: ₹0 at monthly close.

