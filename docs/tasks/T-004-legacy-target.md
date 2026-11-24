# T-004 Legacy build target for webOS 4 (Chromium 53)

**Status:** ready-for-agent  
**Issue:** #4  
**Milestone:** M0 Scaffold

## What to build

Configure `@vitejs/plugin-legacy` (or equivalent) so the bundle runs on Chromium 53: ES5 output, core-js polyfills, no unsupported CSS (check `gap` in flexbox, `aspect-ratio`, `inset`). Add a smoke check in the webOS 4 and webOS 6 emulators.

## Acceptance criteria

- [ ] The hello screen renders in the webOS 4 emulator and the webOS 6 emulator.
- [ ] A CSS lint rule or checklist blocks properties Chromium 53 lacks.
- [ ] Bundle size impact recorded in the PR.

## Android reference (1.4.8, pinned to `f4a0360`)

- None (webOS-only work).

## Android tests to port

- None.

## Risks

Medium: if webOS 4 costs too much we raise the minimum to webOS 6 (decided in planning, Q11).

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
