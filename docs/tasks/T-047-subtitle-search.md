# T-047 Subtitle search (SubDL, OpenSubtitles)

**Status:** ready-for-agent  
**Issue:** #47  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port subtitle search in the player: SubDL (ZIP download, unzip in JS) and OpenSubtitles (needs `Api-Key` and a custom User-Agent, so via the JS service).

## Acceptance criteria

- [ ] Both providers return and load subtitles on the 55UR80.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`SubSearch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SubSearch.kt)
- [`SubSearchLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SubSearchLogic.kt)
- [`SubSearchUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SubSearchUi.kt)

## Android tests to port

- [`SubSearchLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SubSearchLogicTest.kt)

## Risks

Low.

## Blocked by

- #43 (T-043) Audio and subtitle tracks, own subtitle renderer
- #17 (T-017) HTTP layer: browser first, service fallback

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
