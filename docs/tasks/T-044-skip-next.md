# T-044 Skip intro and credits, next episode

**Status:** ready-for-agent  
**Issue:** #44  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port TheIntroDB lookup, skip intro / credits buttons and automatic next episode.

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Next episode countdown equals Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Credits.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Credits.kt)
- [`CreditsLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/CreditsLogic.kt)
- [`Epg.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Epg.kt) (TheIntroDB call)

## Android tests to port

- [`CreditsLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/CreditsLogicTest.kt)

## Risks

Low.

## Blocked by

- #41 (T-041) Player controls and OSD parity
- #32 (T-032) Detail screen, seasons and episodes

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
