# Pathixo Flow - Product Requirements Document (PRD)

**Document Status**: Official Product Specification  
**Version**: 1.0  
**Date**: November 2026  
**Owner**: Pathixo Pvt. Ltd.  
**Product Type**: Internal, reusable automation delivery platform & service toolkit  
**Repository Strategy**: Monorepo with independently deployable applications  

---

## 1. Executive Summary

Pathixo Flow is an internal engineering platform used to deliver repeatable business automation projects for small and mid-sized businesses, startups, and agencies. Its first two supported communication channels are **WhatsApp** and **Email**.

The platform is **not** initially intended to be a public, self-serve SaaS product or a visual drag-and-drop workflow designer. It is a reusable implementation foundation that enables Pathixo engineers to scope, configure, deploy, operate, and maintain client automation projects faster and at lower cost than building each engagement from scratch.

The suite contains separate WhatsApp and Email automation applications. Both leverage shared platform infrastructure where appropriate, including:
- Asynchronous workflow execution primitives
- Durable background job processing & worker abstraction
- Bounded retry policies with exponential backoff & dead-letter storage
- End-to-end structured logging with correlation IDs
- Configuration schema validation & secret redaction
- **P0 Financial Usage Metering & Cost Attribution**: An immutable ledger capturing provider usage, versioned rate cards, and client quotas.

---

## 2. Product Thesis & Objectives

### Product Thesis
> **Build the reusable 70–80% once, configure the common cases, and reserve custom development for client-specific business requirements.** Reuse must reduce delivery effort without sacrificing reliability, security, provider compliance, or client customization.

### Initial Business & Delivery Outcomes
1. **Reduce Delivery Hours**: Target a 30–40% reduction in median engineering hours required to deliver repeatable WhatsApp and email automation projects.
2. **Implementation Consistency**: Standardize testing, error handling, provider authentication, deployment runbooks, and client handovers across developers.
3. **True Cost Visibility**: Attribute 100% of external variable provider consumption (Meta message fees, email units) directly to client contracts with zero unbilled usage.
4. **Preserve Application Independence**: Keep WhatsApp and email services independently buildable, testable, and deployable.

---

## 3. Scope and Non-Goals

### 3.1 Supported Scope
* **WhatsApp Automation**:
  - Webhook verification & cryptographic signature checking.
  - Normalized event ingestion with sub-2s acknowledgement.
  - Deduplication via idempotency keys to prevent repeat side effects.
  - Outbound message & approved template dispatch.
  - Template parameter validation against Meta constraints.
  - Opt-in consent verification & instant `STOP` opt-out suppression.
  - Meta Cloud API rate limits & queue backpressure management.
* **Email Automation**:
  - Outbound transactional & workflow email dispatch (Amazon SES / Resend).
  - Version-controlled email templates with variable interpolation safety.
  - Idempotent send processing preventing duplicate emails.
  - Automated bounce, complaint, delivery, and unsubscribe webhook processing.
  - Suppression-list enforcement prior to dispatch.
* **Financial Ledger & Metering (P0 Foundation)**:
  - Immutable `UsageEvent` recording per client, channel, and market.
  - Version-controlled, effective-dated rate cards (Meta marketing/utility/auth rates, email units).
  - Client prepaid wallets, credit limits, and automatic pause triggers.
* **Client Delivery Assets**: Standard discovery checklists, configuration templates, Docker Compose manifests, and operational runbooks.

### 3.2 Non-Goals for Initial Release
* No public self-serve SaaS signup, subscription billing, or client dashboard.
* No general-purpose visual, drag-and-drop workflow canvas.
* No marketplace of third-party community plugins.
* No AI autonomous agent engine or speculative cognitive looping.
* No universal omnichannel inbox or CRM helpdesk.
* No unsolicited bulk messaging or evasion of provider compliance restrictions.

---

## 4. Users and Stakeholders

* **Pathixo Engineer / Implementer**: Primary user. Configures workflows, integrates credentials, tests behavior, and deploys client containers.
* **Pathixo Technical Lead**: Oversees architecture, security reviews, contract versioning, and shared package boundaries.
* **Pathixo Delivery Manager**: Scopes client requirements, tracks delivery milestones, and coordinates client acceptance.
* **Client Administrator**: Client-side authority providing Meta Business verification, approved templates, and billing authorization.
* **Client Operator**: Business user whose systems trigger or receive automation outputs.

---

## 5. Functional Requirements Summary

* **CORE-001**: Independent application deployability (WhatsApp & Email).
* **CORE-002**: Strict configuration validation on startup.
* **CORE-003**: Complete separation of production credentials from source control.
* **CORE-004 to CORE-006**: Structured JSON logging, correlation ID tracing, and asynchronous background worker processing.
* **CORE-007**: Persistent idempotency preventing duplicate side effects.
* **CORE-008 to CORE-010**: Bounded exponential backoff retries, dead-letter storage, and `/health/live` & `/health/ready` endpoints.
* **FIN-001 to FIN-008**: P0 client spend attribution, date-effective rate cards, and itemized billing ledger export.
* **WA-001 to WA-012**: WhatsApp webhook authentication, deduplication, template validation, consent enforcement, and provider abstraction.
* **EM-001 to EM-010**: Email dispatch, safe template rendering, suppression verification, and bounce processing.

---

## 6. Success Metrics & Release Criteria

* **Availability**: 99.5% monthly availability for managed production deployments.
* **Ingress Latency**: Webhook acknowledgement within 2 seconds at p95.
* **Cost Attribution**: $\ge 98\%$ of all provider spend attributed to specific clients.
* **Duplicate Side Effects**: Exactly zero duplicate external dispatches for identical idempotency keys.
* **Release Gate**: All automated tests, secret scans, configuration schemas, and security firewalls must pass cleanly before release.
