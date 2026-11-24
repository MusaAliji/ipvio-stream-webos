# T-077 Spike: dual view and multi view

**Status:** ready-for-human  
**Issue:** #77  
**Milestone:** M11 Spikes

## What to build

Using the T-012 result, test two players at once (picture-in-picture and split) on the 55UR80 and record model limits.

## Acceptance criteria

- [ ] `docs/spikes/dual-view.md` with a go / no-go.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`DualView.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DualView.kt)
- [`MultiView.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MultiView.kt)
- [`MultiLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MultiLogic.kt)

## Android tests to port

- None.

## Risks

Medium.

## Why ready-for-human

Needs a person at the TV to see whether two videos actually play and how they look.

## Blocked by

- #12 (T-012) Spike: playback capability matrix on the 55UR80

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
