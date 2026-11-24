# T-014 Player screen skeleton with basic controls

**Status:** ready-for-agent  
**Issue:** #14  
**Milestone:** M1 Playback

## What to build

Fullscreen player screen on top of T-013: play/pause, seek, back, loading and error states, aspect ratio and zoom (`AspectLogic`). The full OSD comes in M5.

## Acceptance criteria

- [ ] A test URL list plays live and VOD from a debug screen.
- [ ] Aspect modes equal Android.
- [ ] Back returns to the previous screen and releases the decoder.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlayerScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerScreen.kt)
- [`PlayerControls.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerControls.kt)
- [`AspectLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AspectLogic.kt)

## Android tests to port

- [`AspectLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/AspectLogicTest.kt)

## Risks

Medium.

## Blocked by

- #13 (T-013) Player engine interface and implementations
- #10 (T-010) App shell, screen routing and webOS lifecycle

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
