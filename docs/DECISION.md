# Pathixo Flow - Architecture Decision Records (ADRs)

This document summarizes the core foundational Architecture Decision Records governing the project:

---

## ADR-001: Language & Workspace Tooling Selection
* **Status**: Accepted
* **Context**: Need a unified runtime with strong typing, rich provider SDKs (Meta, AWS SES, Resend), high performance for asynchronous I/O, and fast monorepo dependency management.
* **Decision**: Use **TypeScript / Node.js (v22 LTS)** managed with **`pnpm` workspaces**.
* **Consequences**:
  - Positive: Shared types and contracts across applications; fast local installs via hardlinks; native JSON/Zod schema validation.
  - Negative: Requires disciplined package build boundaries to prevent cyclic imports.

---

## ADR-002: Persistence Layer & Database ORM
* **Status**: Accepted
* **Context**: Financial ledger, idempotency keys, and workflow states require ACID compliance, relational integrity, and performant indexing.
* **Decision**: Use **PostgreSQL** as the primary relational database with **Drizzle ORM** (or Prisma).
* **Consequences**:
  - Positive: Strong relational guarantees for financial ledgers; schema-as-code with TypeScript type safety; predictable migration scripts.
  - Negative: Requires hosting and managing PostgreSQL instances per client/cluster with automated backups.

---

## ADR-003: Queue Engine & Background Worker Architecture
* **Status**: Accepted
* **Context**: Inbound webhooks must be acknowledged within 2 seconds; outbound messages require bounded retries, delayed scheduling, and dead-letter queues.
* **Decision**: Use **Redis** with **BullMQ** for durable distributed job queueing.
* **Consequences**:
  - Positive: High-throughput FIFO and delayed queueing; built-in exponential backoff; separate job state isolation.
  - Negative: Redis requires persistence (AOF/RDB) configuration to prevent job loss on restart.

---

## ADR-004: Client Isolation & Environment Separation
* **Status**: Accepted
* **Context**: Preventing cross-client data leakage, secret exposure, or noisy-neighbor interference is a foundational requirement.
* **Decision**: Enforce **deployment-per-client** container models or isolated namespaces with strict environment injection. Zero shared credentials.
* **Consequences**:
  - Positive: Maximum security; zero blast radius between clients; simplified compliance audits.
  - Negative: Marginally higher operational container overhead compared to a single shared runtime.

---

## ADR-005: Initial Provider Strategy
* **Status**: Accepted
* **Context**: Initial supported channels are WhatsApp and Email.
* **Decision**:
  - WhatsApp: Direct integration with **Meta Cloud API** (WhatsApp Business Platform) with decoupled adapter interface for BSP fallback.
  - Email: **Amazon SES** (for cost efficiency) and **Resend** (for developer velocity) via unified adapter.
* **Consequences**:
  - Positive: Lowest per-message cost with Meta direct; easy switching if a client demands a specific provider.
