# T-016 JS service scaffold and Luna bridge

**Status:** ready-for-agent  
**Issue:** #16  
**Milestone:** M2 Sources

## What to build

Add the webOS JS service `com.ipvio.stream.webos.service` (Node, packaged in the same `.ipk`): `services.json`, `package.json`, a `ping` and a `version` method, and an app-side client over the Luna bus. Record the Node version on webOS 23 and webOS 4, and keep service code within that language level.

## Acceptance criteria

- [ ] App calls `ping` and shows the service Node version in a debug screen on the 55UR80.
- [ ] Service starts on demand and survives app suspend for the time we need (measured, documented).
- [ ] Node versions recorded in `docs/ARCHITECTURE.md`.

## Android reference (1.4.8, pinned to `f4a0360`)

- None (webOS-only work).

## Android tests to port

- None.

## Risks

Medium: service lifetime and Node version on old TVs.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
