# T-001 Project scaffold: Vite, TypeScript, Preact, packaging

**Status:** ready-for-agent  
**Issue:** #1  
**Milestone:** M0 Scaffold

## What to build

Create the app skeleton: Vite + TypeScript + Preact, `appinfo.json` (id `com.ipvio.stream.webos`, 1920x1080, `disableBackHistoryAPI`), app icons from the Android launcher icon, ESLint + Prettier, Vitest, and npm scripts that build and package an `.ipk` with `ares-package` and install it with `ares-install -d lgtv`.

## Acceptance criteria

- [ ] `npm run build` produces `dist/` and `npm run package` an `.ipk`.
- [ ] `npm run deploy` installs and launches a "hello" screen on the 55UR80.
- [ ] `npm test` runs Vitest; `npm run lint` passes.
- [ ] appinfo uses the app id `com.ipvio.stream.webos` and version 0.0.1.

## Android reference (1.4.8, pinned to `f4a0360`)

- `app/src/main/res/mipmap-*` (launcher icon)
- `app/src/main/res/drawable*` (banner)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- None (can start immediately).

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
