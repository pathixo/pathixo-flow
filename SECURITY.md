# Security Policy

Pathixo takes the security, confidentiality, and reliability of **Pathixo Flow** and its client deployments with the utmost seriousness. Because this platform interfaces directly with telecommunication and messaging providers (Meta WhatsApp Cloud API, Amazon SES, Resend) and manages financial attribution ledgers, we enforce strict security invariants.

---

## 1. Supported Versions

We provide security updates and patches for the following versions:

| Version | Supported | Notes |
| :--- | :---: | :--- |
| `0.1.x` (Inception & Alpha) | :white_check_mark: | Active development baseline |
| `< 0.1.0` | :x: | Legacy / Prototype (unsupported) |

---

## 2. Reporting a Vulnerability

> [!CAUTION]
> **DO NOT file public GitHub issues for security vulnerabilities, API token exposures, or client data leaks.**

If you discover a security vulnerability, credential exposure, or policy bypass in Pathixo Flow:

1. **Email our Security Team**: Send a confidential report to **`security@pathixo.com`** (or directly contact the Technical Lead).
2. **Include Key Details**:
   - Type of vulnerability (e.g. Meta credential exposure, webhook spoofing, idempotency race condition, injection flaw).
   - Clear reproduction steps or proof of concept.
   - Affected service, package, or configuration file.
   - Any proposed remediation or patch.
3. **Response Timeline**:
   - **Acknowledgment**: Within 24 hours.
   - **Triage & Classification**: Within 48 hours.
   - **Remediation & Patch**: High-severity issues are addressed within 7 business days.

We kindly request that you follow responsible disclosure guidelines and refrain from disclosing or exploiting the issue until a fix has been verified and released.

---

## 3. Strict Security Invariants & Cost Protection

Pathixo Flow enforces non-negotiable security guardrails:

* **Zero Committed Secrets**: Meta System User Tokens (`EAAG...`), App Secrets, Webhook Verify Tokens, Resend keys (`re_...`), and AWS keys (`AKIA...`) must never be committed to Git.
* **Cost Explosion Defense**: Because leaked tokens can be weaponized to incur tens of thousands of dollars in Meta message charges, our CI pipeline runs pre-commit and PR firewalls that reject commits containing high-entropy tokens or secret signatures.
* **Continuous Scanning (4x Daily)**: Automated vulnerability workflows execute at 00:00, 06:00, 12:00, and 18:00 UTC, scanning dependencies with `pnpm audit`, code with GitHub CodeQL, and git history with Gitleaks and Trivy.
* **Client Isolation**: Client credentials and execution contexts are strictly isolated; logs and metrics are scoped to prevent cross-tenant data visibility.
