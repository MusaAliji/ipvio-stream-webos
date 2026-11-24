# T-033 Live TV tab

**Status:** ready-for-agent  
**Issue:** #33  
**Milestone:** M3 Main UI

## What to build

Port the Live TV tab: categories, channel list, now and next, bundles, quality grouping, ViewLive panel, channel search, own channel lists.

## Acceptance criteria

- [ ] Matches Android screenshots.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`LiveTab.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveTab.kt)
- [`Live.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Live.kt)
- [`LiveLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveLogic.kt)
- [`LiveNow.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveNow.kt)
- [`LiveBundle.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveBundle.kt)
- [`LiveQuality.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveQuality.kt)
- [`ViewLive.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ViewLive.kt)
- [`ChannelSearch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ChannelSearch.kt)

## Android tests to port

- [`LiveLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/LiveLogicTest.kt)

## Risks

Medium.

## Blocked by

- #30 (T-030) Home screen
- #14 (T-014) Player screen skeleton with basic controls

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
