# Support & Help for Pathixo Flow

Welcome to the Pathixo Flow support guide. This document outlines how to get assistance, ask technical questions, and report bugs or operational issues.

---

## 1. Getting Help

### Technical & Architectural Questions
If you have questions regarding the monorepo architecture, provider adapters, rate card schemas, or workflow definitions:
* **GitHub Discussions**: Open a topic under the Discussions tab on GitHub.
* **Internal Team**: Reach out to the Pathixo engineering team on our internal Slack/Discord channel.

### Reporting Bugs
If you encounter a software defect, unexpected failure, or broken test:
1. Ensure the bug does not reveal confidential client data or provider API credentials.
2. Check existing [GitHub Issues](https://github.com/pathixo/pathixo-flow/issues) to avoid duplicates.
3. Open a new issue using the **[Bug Report Form](.github/ISSUE_TEMPLATE/bug_report.yml)**.

### Requesting Features or Workflow Templates
To propose a new reusable workflow pattern, channel integration, or infrastructure enhancement:
* Open a new proposal using the **[Feature Request Form](.github/ISSUE_TEMPLATE/feature_request.yml)**.
* Ensure your request details business justification and confirms alignment with application isolation and financial metering.

---

## 2. Security & Credential Emergencies

If you suspect an active API key leak, token compromise, or high-risk security flaw:
* **DO NOT** post a public issue or discussion.
* Immediately email **`security@pathixo.com`** or contact the Technical Lead directly.
* Refer to **[SECURITY.md](SECURITY.md)** for our full responsible disclosure policy.

---

## 3. Operational Handover & Client SLA

For client deployments in production:
* Support response times, business hours, and operational maintenance windows are governed by the signed client Statement of Work (SOW).
* Refer to `docs/TASKS.md` and `docs/PRD.md` for standard operational runbooks and disaster recovery procedures.
