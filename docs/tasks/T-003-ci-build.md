# T-003 CI: lint, tests and .ipk build on pull requests and dev

**Status:** in review  
**Issue:** #3  
**Milestone:** M0 Scaffold

## What to build

Add `.github/workflows/build.yml`: on pull requests and pushes to `main` and `dev`, run lint, Vitest and the `.ipk` build, and upload the `.ipk` as an artifact. Pin actions to commit SHAs (as in the Android `release.yml`).

## Acceptance criteria

- [x] Workflow is green on a PR into `dev`.
- [x] The `.ipk` is downloadable as a workflow artifact.
- [x] All actions are pinned to SHAs.

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

Checks run:

- GitHub Actions, workflow "Build" on PR #89 into `dev` (run 45488735732, commit `dd9ae5c`): every step green: `npm ci`, webOS CLI install, `npm run lint` (ESLint + Prettier), `npm test` (2 files, 7 tests), `npm run package`, artifact upload.
- Artifact `ipvio-stream-webos-ipk` downloaded with `gh run download`: contains `com.ipvio.stream.webos_0.0.1_all.ipk` (91 KB, `ar` archive).
- Actions pinned to the commit SHAs of their latest releases: `actions/checkout` v7.0.1, `actions/setup-node` v7.1.0, `actions/upload-artifact` v7.0.2.
- On the development PC (Windows 11): `npx eslint .`, `npx prettier --check .github/workflows/build.yml`, `npm run typecheck`, `npm test`, `npm run package`: pass. Plain `npm run lint` still fails on this clone only because of CRLF checkout (`core.autocrlf=true`, see `WORK_STATE.md`); CI checks out LF and passes.

What the first CI runs found, and the fixes:

1. **Node 22.12 is too old for the lockfile.** ESLint 10's dependencies (`espree`, `eslint-scope`, `eslint-visitor-keys`) need `^20.19 || ^22.13 || >=24`, and npm 10 (bundled with Node 22) rejects the npm 11 lockfile in `npm ci`. CI runs on Node 24 (npm 11), as on the PC. `package.json` `engines` still says `>=22.12.0`; correcting it is left to the maintainer.
2. **The lockfile was missing `@emnapi/core` and `@emnapi/runtime` 2.0.0-beta.2.** They are optional dependencies of `@rolldown/binding-wasm32-wasi` (Vite 8's bundler). npm on Windows leaves them out, and `npm ci` on Linux refuses the lockfile without them. The two entries were added by hand, with `resolved` and `integrity` from the npm registry. No other package changes. **Fragile:** the next `npm install` on Windows removes them again, and CI fails at `npm ci` until they are restored. A durable fix needs a maintainer decision (see the PR).

**Device test on the 55UR80:** not applicable (no app change). Optional check: download the `.ipk` artifact from the PR's "Build" run, then `ares-install -d lgtv com.ipvio.stream.webos_0.0.1_all.ipk` and `ares-launch -d lgtv com.ipvio.stream.webos`. The hello screen appears as with `npm run deploy`.
