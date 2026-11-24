# T-020 M3U parser and M3U URL source

**Status:** ready-for-agent  
**Issue:** #20  
**Milestone:** M2 Sources

## What to build

Port the M3U parser (attributes, `catchup` attributes, group patterns, language tags) and the M3U-by-URL source. M3U from a file arrives later via the phone remote (T-066).

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Item ids equal Android (javaHashCode of stream URL).

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Models.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Models.kt)
- [`PlaylistLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistLogic.kt)
- [`GroupPatternLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/GroupPatternLogic.kt)
- [`LangTagLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LangTagLogic.kt)

## Android tests to port

- [`PlaylistLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistLogicTest.kt)
- [`GroupPatternLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/GroupPatternLogicTest.kt)
- [`LangTagLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/LangTagLogicTest.kt)

## Risks

Low.

## Blocked by

- #19 (T-019) Playlist store and cache

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
