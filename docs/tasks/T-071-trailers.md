# T-071 Trailers

**Status:** ready-for-agent  
**Issue:** #71  
**Milestone:** M9 Extras

## What to build

Port trailers: YouTube nocookie embed in an iframe, or launch the YouTube app via Luna if the embed is blocked.

## Acceptance criteria

- [ ] A trailer plays and Back returns to the detail screen.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`TrailerDialog.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TrailerDialog.kt)
- [`TrailerLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TrailerLogic.kt)

## Android tests to port

- [`TrailerLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/TrailerLogicTest.kt)

## Risks

Low.

## Blocked by

- #32 (T-032) Detail screen, seasons and episodes

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
