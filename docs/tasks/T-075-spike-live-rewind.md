# T-075 Spike: live rewind buffer

**Status:** ready-for-human  
**Issue:** #75  
**Milestone:** M11 Spikes

## What to build

Find out whether the service can tap a live TS stream into chunks on app storage (256 MB – 2 GB) and serve them back to the player for pause and rewind.

## Acceptance criteria

- [ ] `docs/spikes/live-rewind.md` with a go / no-go and limits.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`LiveTap.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveTap.kt)
- [`TapLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TapLogic.kt)
- [`LiveTimeshift.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveTimeshift.kt)

## Android tests to port

- None.

## Risks

High.

## Why ready-for-human

Needs a person at the TV to judge pause / rewind playback, and a decision on storage limits.

## Blocked by

- #13 (T-013) Player engine interface and implementations
- #16 (T-016) JS service scaffold and Luna bridge

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
