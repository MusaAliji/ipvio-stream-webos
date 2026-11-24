# T-062 Stalker links, live, movies and series

**Status:** ready-for-agent  
**Issue:** #62  
**Milestone:** M7 Stalker

## What to build

Port `stalker://` internal addresses, `create_link` resolution at play time, movies, series (`.ser`) and the extra lists.

## Acceptance criteria

- [ ] Live, movie and episode playback works.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`StalkerLink.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StalkerLink.kt)
- [`StalkerMore.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StalkerMore.kt)

## Android tests to port

- [`StalkerLinkTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/StalkerLinkTest.kt)

## Risks

Medium.

## Blocked by

- #61 (T-061) Stalker / Ministra API through the JS service
- #24 (T-024) Add-playlist screen and playlist management

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
