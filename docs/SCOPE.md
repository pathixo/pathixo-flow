# Pathixo Flow - Project Scope & Boundaries

## 1. Functional Scope Matrix

| Capability Area | In Scope (MVP) | Post-MVP / Roadmap | Explicitly Excluded |
| :--- | :---: | :---: | :---: |
| **WhatsApp Ingestion** | Meta Webhooks, Signature Check, Deduplication | Multi-WABA Routing | Unofficial Web scraping |
| **WhatsApp Dispatch** | Approved Templates, Text messages (within 24h) | Media attachments, Interactive Buttons | Bulk spam, unconsented marketing |
| **Email Dispatch** | Transactional templates, safe interpolation | Advanced visual drag-drop templates | Unsolicited cold email campaigns |
| **Email Processing** | Bounce, delivery & unsubscribe events | Dedicated IP reputation management | ISP inbox guarantee promises |
| **Financial Ledger** | Client spend attribution, Rate cards, Idempotency | Prepaid auto-recharge, Invoice exports | External payment gateway billing engine |
| **Client Deployment** | Docker Compose per client, env injection | Kubernetes Helm charts | Multi-tenant shared control plane |
| **Observability** | Structured JSON logs, Correlation IDs, Health checks | Distributed tracing (OpenTelemetry) | Complex multi-cluster APM |

---

## 2. Inclusions & Exclusions Detail

### Inclusions
- Direct Meta WhatsApp Cloud API adapter with signature validation.
- Amazon SES & Resend provider adapters.
- Durable background job queue with bounded retries and dead-letter handling.
- Mandatory consent and opt-out (`STOP`) enforcement.
- Versioned pricing rate cards and client spend tracking.
- Local development environment using Docker Compose.

### Exclusions
- No client-facing graphical dashboard or self-serve signup portal.
- No general-purpose visual workflow designer.
- No AI autonomous agent decision loops.
- No client-side CRM or ticketing inbox.
- No third-party automation marketplace.
