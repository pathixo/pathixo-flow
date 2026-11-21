# Pathixo Flow — Release Engineering Standards & Runbook

This document defines the release lifecycle, versioning semantics, automated changelog generation, pre-flight verification protocols, and emergency rollback playbooks for **Pathixo Flow**.

---

## 1. Release Lifecycle & Golden Branch Architecture

Pathixo Flow enforces a strict **Golden Branch** release model:

```text
feature / fix / docs branch
          │
          ▼  (Pull Request with 100% Green CI Gates)
        main (Protected Golden Branch)
          │  ──▶ Continuous Draft Release Updated on GitHub
          ▼  (Annotated SemVer Git Tag: vX.Y.Z)
  Production Release (Automated Release Notes & Artifacts)
```

1. **`main` is Always Deployable**: Direct commits and force pushes to `main` are strictly blocked. Every commit on `main` has passed all lint, typecheck, test, production build, and security firewall gates.
2. **Continuous Draft Releases**: Every merged pull request triggers [`.github/workflows/release-drafter.yml`](../.github/workflows/release-drafter.yml), which automatically curates an updated draft release on GitHub categorized by change type according to [`.github/release.yml`](../.github/release.yml).
3. **Release Trigger via Git Tags**: Creating and pushing an annotated Git tag matching `v*` (e.g. `v0.2.0`, `v2.0.0`) automatically publishes the GitHub Release with full release notes and changelog links.

---

## 2. Semantic Versioning Specification (SemVer 2.0.0)

Pathixo Flow adheres to [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) (`MAJOR.MINOR.PATCH`):

| Component | Trigger Criteria | Example Changes |
| :--- | :--- | :--- |
| **MAJOR** (`X.0.0`) | Breaking architectural changes, incompatible contract/event schema modifications, major database restructuring, or tenant migration requirements. | Overhauling BullMQ event contracts, breaking changes to `@pathixo/automation-contracts`. |
| **MINOR** (`0.X.0` or `X.Y.0`) | Backward-compatible new capabilities, new channel services, substantial UI console features, or new design token families. | WhatsApp Cloud API webhook ingestion, Email dispatch engine, Authenticated `/workspace` dashboard. |
| **PATCH** (`0.X.Y` or `X.Y.Z`) | Backward-compatible bug fixes, security patches, styling adjustments, performance optimizations, and documentation fixes. | Fixing exponential backoff jitter, resolving table layout clipping, updating Next.js dependencies. |

### 2.1 Pre-Release Tags
For milestone previews and release candidate cycles:
* **Alpha** (`v2.0.0-alpha.1`): Early feature integration milestone; internal dogfooding.
* **Beta** (`v2.0.0-beta.1`): Feature-complete milestone under integration testing.
* **Release Candidate** (`v2.0.0-rc.1`): Final pre-flight stabilization prior to general availability.

---

## 3. Pre-Flight Release Checklist

Before creating a release tag, the Release Manager or Principal Architect must verify:

- [ ] **Golden Branch Status**: `main` branch is up to date and all status checks on recent commits are 100% green.
- [ ] **Automated CI Green**:
  - `Lint & Typecheck` passes across all workspaces (`pnpm --if-present run lint` & `typecheck`).
  - `Test Workspace Packages & Apps` passes with zero test failures.
  - `Build Workspace Production Bundle` compiles cleanly (`next build` generates zero static/dynamic bundle errors).
- [ ] **Security & Privacy Firewall Green**:
  - Zero Meta System User Tokens (`EAA...`), Resend keys (`re_...`), AWS keys (`AKIA...`), or webhook secrets in source control.
  - Zero live international phone numbers (`+91[6-9]...`) in fixtures or documentation.
  - Zero hardcoded Meta message rates (`0.8631` or `0.1150`) in application code.
- [ ] **Changelog Alignment**: [`CHANGELOG.md`](../CHANGELOG.md) contains an entry for the release version detailing all Added, Changed, Deprecated, Removed, Fixed, and Security notes adhering to [Keep a Changelog](https://keepachangelog.com/).
- [ ] **Package Version Bump**: If publishing workspace packages, update version numbers in root `package.json` and affected `packages/*/package.json`.

---

## 4. Step-by-Step Release Runbook

Follow these exact commands to tag and publish a new production release:

### Step 1: Ensure Local Workspace is Clean & Synchronized
```bash
git checkout main
git pull origin main
git status
```

### Step 2: Run Full Local Verification Suite
```bash
# Verify linting, typechecking, and tests
pnpm --if-present run lint
pnpm --if-present run typecheck
pnpm --if-present run test

# Verify production build
pnpm run build

# Verify firewall regex invariants
git grep -E "\+91[6-9][0-9]{9}" || true
git grep -E "EAA[A-Za-z0-9]{30,}" || true
git grep -E "0\.8631|0\.1150" apps/ || true
```

### Step 3: Update CHANGELOG.md & Commit
If releasing `v0.2.0`:
1. Move items from `## [Unreleased]` into `## [0.2.0] - YYYY-MM-DD`.
2. Commit the changelog update:
   ```bash
   git add CHANGELOG.md package.json
   git commit -m "chore(release): prepare v0.2.0 release"
   git push origin main
   ```

### Step 4: Create and Push Annotated SemVer Tag
```bash
# Create annotated tag with release summary
git tag -a v0.2.0 -m "Release v0.2.0: Monorepo foundation, design tokens, UI primitives, and dark marketing landing page"

# Push tag to GitHub
git push origin v0.2.0
```

### Step 5: Verify Automated GitHub Release
1. Navigate to `https://github.com/pathixo/pathixo-flow/actions/workflows/release-drafter.yml`.
2. Confirm the release workflow ran and published the GitHub Release.
3. Inspect `https://github.com/pathixo/pathixo-flow/releases/tag/v0.2.0`.

---

## 5. Emergency Hotfix & Rollback Playbook

If a critical P0 regression or vulnerability is detected in a production release:

### Scenario A: Reverting a Single Faulty Pull Request
1. Open a revert PR targeting `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b fix/revert-regression
   git revert -m 1 <MERGE_COMMIT_SHA>
   git push origin fix/revert-regression
   ```
2. Open PR with conventional title `fix: revert <FEATURE_NAME> due to <REASON>`.
3. Ensure CI passes and merge.
4. Cut a patch release (e.g. `v0.2.1`).

### Scenario B: Expedited Hotfix Branch
1. Branch directly from the affected production tag:
   ```bash
   git checkout -b hotfix/v0.2.1 tags/v0.2.0
   ```
2. Implement the minimal fix and add regression tests.
3. Verify all quality gates pass locally.
4. Merge the fix to `main` via PR, and tag `v0.2.1`:
   ```bash
   git tag -a v0.2.1 -m "fix(security): resolve credential parsing edge case in webhook ingestion"
   git push origin v0.2.1
   ```
