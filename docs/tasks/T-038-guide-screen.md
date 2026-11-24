# T-038 Timeline TV guide with preview and guide search

**Status:** ready-for-agent  
**Issue:** #38  
**Milestone:** M4 Guide

## What to build

Port the timeline guide screen with preview, wrap logic, guide search and the in-player guide.

## Acceptance criteria

- [ ] Matches Android screenshots.
- [ ] Scrolling a 500-channel guide stays smooth.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`EpgFull.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/EpgFull.kt)
- [`GuideWrapLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/GuideWrapLogic.kt)
- [`GuideSearch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/GuideSearch.kt)
- [`PlayerGuide.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerGuide.kt)

## Android tests to port

- [`GuideWrapLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/GuideWrapLogicTest.kt)

## Risks

Medium.

## Blocked by

- #37 (T-037) XMLTV EPG loader
- #33 (T-033) Live TV tab

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
