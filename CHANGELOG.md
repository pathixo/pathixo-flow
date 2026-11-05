# Changelog

All notable changes to **Pathixo Flow** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Root monorepo workspace scaffolding (`pnpm-workspace.yaml`, `turbo.json`).
- `packages/configuration` schema validation module with Zod and runtime secret masking.
- `packages/observability` structured logging with correlation ID propagation.
- `packages/billing-core` immutable `UsageEvent` schema and versioned rate cards.
- `packages/queue` durable BullMQ wrapper with exponential retry backoff.

---

## [0.1.0-alpha] - 2026-11-05

### Added
- **Project Governance & Documentation**:
  - `README.md`: High-level executive overview, repository topology, quickstart, and engineering invariants.
  - `CONTRIBUTING.md`: Monorepo development guidelines, branch naming conventions, and PR workflows.
  - `CODE_OF_CONDUCT.md`: Contributor Covenant v2.1 professional collaboration standards.
  - `SECURITY.md`: Vulnerability disclosure guidelines, token protection rules, and support boundaries.
  - `SUPPORT.md`: Technical and operational support channels.
  - `ROADMAP.md`: High-level milestone overview and link to traceable tasks.
- **Dedicated High-Level Technical Specifications (`docs/`)**:
  - `docs/PRD.md`: Official Product Requirements Document (PRD v1.0).
  - `docs/ARCHITECTURE.md`: Monorepo system topology, async sequence diagrams, and failure classification.
  - `docs/DESIGN.md`: Relational ERD schemas, provider interfaces, and package specifications.
  - `docs/DECISION.md`: Architecture Decision Records (ADR 001–005) covering runtime, persistence, queues, and provider strategies.
  - `docs/SCOPE.md`: Formal matrix of MVP inclusions, post-MVP roadmap, and explicit exclusions.
  - `docs/TASKS.md`: Comprehensive engineering task checklist for Milestone 1.
- **Security & CI/CD Firewalls (`.github/`)**:
  - `security-firewall.yml`: Static interceptor blocking Meta tokens (`EAA...`), provider API keys, real phone numbers, and hardcoded billing rates.
  - `vulnerability-scan.yml`: 4x/day scheduled automated threat scanner (00:00, 06:00, 12:00, 18:00 UTC) running CodeQL, `pnpm audit`, and Gitleaks.
  - `pr-validation.yml`: Conventional commit title enforcer and mandatory security checklist auditor.
  - `dependabot.yml`: Automated daily dependency vulnerability tracking and PR generation.
  - `release.yml`: Structured release notes categorization configuration.
  - Issue and PR templates (`bug_report.yml`, `feature_request.yml`, `pull_request_template.md`).
