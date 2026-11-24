# T-058 Diagnostics and crash report

**Status:** ready-for-agent  
**Issue:** #58  
**Milestone:** M6 Settings

## What to build

Port diagnostics and playlist diagnostics; capture crashes with `window.onerror` / `unhandledrejection` into `ipvio_crash`.

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] A forced error shows in the crash report.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Diag.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Diag.kt)
- [`DiagLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DiagLogic.kt)
- [`PlaylistDiag.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistDiag.kt)

## Android tests to port

- [`DiagLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/DiagLogicTest.kt)

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
