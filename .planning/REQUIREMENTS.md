# Pathixo Flow - Traceable Requirements Matrix

Derived directly from **Product Requirements Document (PRD v1.0)** and **Financial Planning & Cost Analysis v1.0**.

Priority Definitions:
- **P0**: Mandatory for initial production-capable delivery.
- **P1**: Required for repeatable, standardized client operations.
- **P2**: Later enhancement / future roadmap.

---

## 1. Common Platform Requirements (PRD Section 7.1)

| ID | Priority | Requirement | Acceptance Criteria | Target Phase |
| :--- | :---: | :--- | :--- | :---: |
| **CORE-001** | **P0** | Application Isolation | WhatsApp and Email applications can be started, built, tested, and deployed independently. | Phase 0 |
| **CORE-002** | **P0** | Configuration Validation | Missing or invalid required configuration keys cause immediate, clear startup or deployment validation errors. | Phase 1 |
| **CORE-003** | **P0** | Secret Separation | Zero production credentials in source control; secrets injected at runtime and redacted from logs/errors. | Phase 1 |
| **CORE-004** | **P0** | Structured Logging | Execution logs output machine-readable JSON containing timestamp, app, env, correlation ID, outcome, and safe context. | Phase 1 |
| **CORE-005** | **P0** | Correlation IDs | Every trigger assigns a correlation ID propagated across queueing, worker execution, provider dispatch, and final logs. | Phase 1 |
| **CORE-006** | **P0** | Background Execution | Slow, IO-heavy, or retryable operations run asynchronously via background workers; webhooks acknowledge immediately. | Phase 1 |
| **CORE-007** | **P0** | Persistent Idempotency | Repeated delivery of identical event/request causes no duplicate business side effects within defined retention window. | Phase 1 |
| **CORE-008** | **P0** | Bounded Retry Policy | Transient failures retry with bounded exponential backoff and jitter; permanent failures terminate without indefinite retry. | Phase 1 |
| **CORE-009** | **P1** | Dead-Letter Handling | Exhausted jobs are persisted in a dead-letter store with sanitized failure reason and can be inspected/replayed safely. | Phase 1 / 4 |
| **CORE-010** | **P0** | Health Checks | `/health/live` and `/health/ready` endpoints report application and downstream dependency health. | Phase 1 |
| **CORE-011** | **P1** | Operational Metrics | Execution counts, failure counts, latency percentiles, queue depth, and provider throttling metrics are recorded. | Phase 4 |
| **CORE-012** | **P1** | Audit Events | Critical administrative actions, configuration changes, and manual replays record an immutable audit log. | Phase 4 |
| **CORE-013** | **P0** | Local Development | Developers can start any application and its dependencies locally via documented, reproducible commands. | Phase 0 |
| **CORE-014** | **P1** | Test Harness & Fakes | Reusable fakes and fixtures allow deterministic testing of workflows without contacting live provider APIs. | Phase 1 |
| **CORE-015** | **P1** | Versioned Contracts | Shared event and job contracts are schema-validated with backward compatibility tests. | Phase 0 / 1 |

---

## 2. Financial Ledger & Cost Attribution Requirements (Financial Plan Section 12 & 17)

| ID | Priority | Requirement | Acceptance Criteria | Target Phase |
| :--- | :---: | :--- | :--- | :---: |
| **FIN-001** | **P0** | Client Spend Attribution | 100% of billable usage events and direct infrastructure spend are attributed to a specific client ID or explicit shared pool. | Phase 1 |
| **FIN-002** | **P0** | Idempotent Financial Metering | Retried jobs or duplicated webhooks never generate duplicate billable usage records in the financial ledger. | Phase 1 |
| **FIN-003** | **P0** | Date-Effective Rate Cards | Pricing rate cards (Meta marketing/utility/auth, email units) are versioned and date-effective; historical costs never change. | Phase 1 |
| **FIN-004** | **P0** | WhatsApp Parameter Capture | Usage records record recipient country market, message category (Marketing/Utility/Auth/Service), and template version. | Phase 1 / 2 |
| **FIN-005** | **P0** | Email Unit Capture | Usage records capture provider account, sending domain, and provider-specific billable unit count. | Phase 1 / 3 |
| **FIN-006** | **P0** | Usage Data Export | Itemized usage events can be exported per client, channel, and billing period for invoice backup and reconciliation. | Phase 1 |
| **FIN-007** | **P0** | Client Quotas & Balance Limits | Pre-configured spend thresholds, low-balance warnings (50%, 25%, 10%), and automatic pause policies can be enforced. | Phase 1 |
| **FIN-008** | **P0** | Non-Billable Status Isolation | Failed, rejected, and undelivered messages are distinguished from billable delivery events based on provider rules. | Phase 1 |
| **FIN-009** | **P1** | Monthly Provider Reconciliation | Tooling/procedure compares internal metered usage against external provider invoices to identify variances $\le 2\%$. | Phase 5 |
| **FIN-010** | **P1** | Shared Cost Allocation | Documented, reproducible allocation model divides fixed infrastructure expenses among active client deployments. | Phase 5 |

---

## 3. WhatsApp Application Requirements (PRD Section 7.2)

| ID | Priority | Requirement | Acceptance Criteria | Target Phase |
| :--- | :---: | :--- | :--- | :---: |
| **WA-001** | **P0** | Webhook Verification | Provider webhook challenge/verification requests are authenticated per provider specifications. | Phase 2 |
| **WA-002** | **P0** | Inbound Webhook Ingestion | Inbound events are authenticated, parsed, normalized into internal event schemas, and acknowledged within 2 seconds (p95). | Phase 2 |
| **WA-003** | **P0** | Invalid Event Rejection | Malformed payloads, invalid signatures, and unsupported events are safely rejected or logged without crashing the runner. | Phase 2 |
| **WA-004** | **P0** | Inbound Deduplication | Replayed provider webhooks are detected via provider message/event IDs and dropped prior to business side effects. | Phase 2 |
| **WA-005** | **P0** | Outbound Dispatch | Workflows can dispatch supported text and approved template messages via the provider adapter. | Phase 2 |
| **WA-006** | **P0** | Template Validation | Required variable substitutions and template constraints are strictly validated before making provider API requests. | Phase 2 |
| **WA-007** | **P1** | Delivery Status Tracking | Sent, delivered, read, and failed statuses update internal workflow state and message records. | Phase 2 |
| **WA-008** | **P0** | Consent Enforcement | Workflows verify opt-out and messaging eligibility rules before dispatching outbound communications. | Phase 2 |
| **WA-009** | **P0** | Provider Throttling & Rate Limits | Meta Cloud API rate limits and Tier limits are handled via queue pacing and bounded exponential backoff. | Phase 2 |
| **WA-010** | **P1** | Provider Abstraction | Workflow logic calls a decoupled adapter interface (`WhatsAppProvider`), never directly coupled to provider SDK types. | Phase 2 |
| **WA-011** | **P1** | Test Mode / Provider Sandbox | Workflows can be exercised locally using fake adapters or provider test environments. | Phase 2 |
| **WA-012** | **P1** | Operational Diagnostics | Operators can look up any message attempt by internal correlation ID or provider message ID. | Phase 2 |

---

## 4. Email Application Requirements (PRD Section 7.3)

| ID | Priority | Requirement | Acceptance Criteria | Target Phase |
| :--- | :---: | :--- | :--- | :---: |
| **EM-001** | **P0** | Outbound Email Dispatch | Workflows can send transactional and workflow-triggered emails via provider adapter (SES/Resend). | Phase 3 |
| **EM-002** | **P0** | Template Rendering & Safety | Version-controlled templates enforce strict variable validation; missing parameters fail before dispatch. | Phase 3 |
| **EM-003** | **P1** | Preview & Test Send Utility | Implementers can preview rendered templates and dispatch test emails to authorized test recipients. | Phase 3 |
| **EM-004** | **P0** | Idempotent Dispatch | Duplicate job executions do not trigger duplicate email dispatches for the same idempotency key. | Phase 3 |
| **EM-005** | **P1** | Provider Event Ingestion | Bounces, complaints, delivery confirmations, and unsubscribe webhooks are ingested and normalized. | Phase 3 |
| **EM-006** | **P0** | Suppression List Checks | Recipient addresses are checked against unsubscribe, hard bounce, and client suppression lists before sending. | Phase 3 |
| **EM-007** | **P1** | Provider Abstraction | Workflows call an `EmailProvider` interface, allowing swap between Amazon SES, Resend, or SMTP. | Phase 3 |
| **EM-008** | **P0** | Rate & Quota Control | Dispatch respects client throughput limits and provider burst quotas. | Phase 3 |
| **EM-009** | **P1** | Content & Header Validation | Sender address, SPF/DKIM compliance headers, recipient, subject, and body are validated before submission. | Phase 3 |
| **EM-010** | **P1** | Diagnostics & Tracing | Email delivery attempts can be traced by internal correlation ID and provider message ID. | Phase 3 |

---

## 5. Non-Functional & Operational Requirements (PRD Section 15)

| Area | Requirement | Baseline Target |
| :--- | :--- | :--- |
| **Availability** | Managed production deployment uptime (excluding maintenance). | 99.5% monthly availability. |
| **Webhook Ingestion** | Acknowledge valid provider webhooks after durable queueing. | $\le 2$ seconds at p95. |
| **Internal Triggers** | Accept and enqueue valid internal workflow trigger requests. | $\le 1$ second at p95. |
| **Duplicate Prevention** | Zero duplicate external messages sent for duplicate triggers. | 100% adherence within retention window. |
| **Client Segregation** | Logs, credentials, queues, and persistent state isolated per client. | Zero cross-tenant data exposure. |
| **Cost Attribution** | Every billable event and external spend assigned to client. | $\ge 98\%$ cost attribution coverage. |
| **Portability** | Containerized applications with documented environment configs. | Dockerized, deployable on standard cloud VPS. |

