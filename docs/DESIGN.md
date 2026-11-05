# Pathixo Flow - Technical Design Specifications

## 1. Domain Entities & Database Schema

The core persistence layer (PostgreSQL) is managed through relational schemas enforcing strict client scoping and auditability:

```mermaid
erDiagram
    Client ||--o{ ClientDeployment : operates
    Client ||--o{ Contract : signs
    Client ||--o{ UsageEvent : incurs
    Client ||--o{ CostEntry : incurs
    
    WorkflowDefinition ||--o{ WorkflowExecution : runs
    WorkflowExecution ||--o{ Job : spawns
    WorkflowExecution ||--o{ MessageRecord : sends
    
    RateCard ||--o{ UsageEvent : prices
    
    Client {
        uuid id PK
        string legal_name
        string status
        string currency
        timestamp created_at
    }

    Contract {
        uuid id PK
        uuid client_id FK
        numeric fixed_monthly_fee
        numeric prepaid_balance
        jsonb quota_limits
        timestamp start_date
    }

    UsageEvent {
        uuid id PK
        uuid client_id FK
        string channel
        string provider
        string event_type
        string recipient_ref
        string market
        string message_category
        numeric unit_price
        string idempotency_key UK
        timestamp occurred_at
    }

    MessageRecord {
        uuid id PK
        uuid execution_id FK
        string channel
        string provider_message_id
        string status
        timestamp sent_at
    }
```

---

## 2. Shared Packages Specifications

### 2.1 `packages/configuration`
* **Purpose**: Safe runtime configuration loading and schema validation.
* **Key Invariant**: Uses **Zod** schemas. If any required environment variable (`DATABASE_URL`, `REDIS_URL`, `META_APP_SECRET`, etc.) is missing or malformed, the process immediately halts on boot with a structured error.
* **Secret Redaction**: Config inspection utilities automatically mask sensitive keys (`TOKEN`, `SECRET`, `PASSWORD`, `KEY`).

### 2.2 `packages/queue` & `packages/retry`
* **Purpose**: Durable asynchronous worker processing backed by Redis and BullMQ.
* **Worker Isolation**: Separate named queues for `whatsapp-inbound`, `whatsapp-outbound`, `email-outbound`, and `billing-events`.
* **Idempotency Check**: Workers atomically verify an idempotency lock key in Redis (`SETNX`) before executing side-effects.

### 2.3 `packages/billing-core` (P0 Foundation)
* **Purpose**: Immutable usage metering, rate card management, and cost attribution.
* **Rate Cards**: Versioned, effective-dated data structures:
  - Meta India Marketing rate: ₹0.8631
  - Meta India Utility/Auth rate: ₹0.1150
  - Amazon SES base rate: \$0.10 / 1,000 emails
* **Billing Event Ingestion**: Generates an immutable `UsageEvent` for every accepted dispatch, ensuring zero unbilled consumption.

---

## 3. Provider Adapter Interfaces

All outbound communication is abstracted through interfaces to ensure high maintainability:

```typescript
export interface WhatsAppProvider {
  verifyWebhook(signature: string, payload: Buffer): boolean;
  parseWebhookEvent(body: unknown): NormalizedWebhookEvent;
  sendTemplate(params: WhatsAppTemplateParams): Promise<DispatchResult>;
  sendTextMessage(params: WhatsAppTextParams): Promise<DispatchResult>;
}

export interface EmailProvider {
  sendEmail(params: EmailDispatchParams): Promise<EmailDispatchResult>;
  parseEventWebhook(body: unknown): NormalizedEmailEvent;
}
```
