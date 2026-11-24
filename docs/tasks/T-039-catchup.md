# T-039 Catch-up and archive playback

**Status:** ready-for-agent  
**Issue:** #39  
**Milestone:** M4 Guide

## What to build

Port catch-up URL building (Xtream `timeshift` and `timeshift_abs`, M3U `catchup` attributes) and archive playback.

## Acceptance criteria

- [ ] Watch from start and archive work on a provider with catch-up.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Catchup.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Catchup.kt)
- [`CatchupLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/CatchupLogic.kt)
- [`PlayerArchive.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerArchive.kt)

## Android tests to port

- [`CatchupLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/CatchupLogicTest.kt)

## Risks

Low.

## Blocked by

- #38 (T-038) Timeline TV guide with preview and guide search
- #14 (T-014) Player screen skeleton with basic controls

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
