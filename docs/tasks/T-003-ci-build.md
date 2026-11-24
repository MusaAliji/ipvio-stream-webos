# T-003 CI: lint, tests and .ipk build on pull requests and dev

**Status:** ready-for-agent  
**Issue:** #3  
**Milestone:** M0 Scaffold

## What to build

Add `.github/workflows/build.yml`: on pull requests and pushes to `main` and `dev`, run lint, Vitest and the `.ipk` build, and upload the `.ipk` as an artifact. Pin actions to commit SHAs (as in the Android `release.yml`).

## Acceptance criteria

- [ ] Workflow is green on a PR into `dev`.
- [ ] The `.ipk` is downloadable as a workflow artifact.
- [ ] All actions are pinned to SHAs.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`.github/workflows/build.yml`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/.github/workflows/build.yml)
- [`.github/workflows/pr-checks.yml`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/.github/workflows/pr-checks.yml)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
