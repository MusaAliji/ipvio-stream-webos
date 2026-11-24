# T-036 Search screen and voice input

**Status:** ready-for-agent  
**Issue:** #36  
**Milestone:** M3 Main UI

## What to build

Port Search over movies, series, live and sports with the system keyboard; voice input through the keyboard microphone (planning decision Q16).

## Acceptance criteria

- [ ] Results and ranking equal Android.
- [ ] Voice input via the keyboard mic works on the 55UR80.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`SearchScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SearchScreen.kt)
- [`SearchLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SearchLogic.kt)
- [`VoiceSearch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/VoiceSearch.kt)

## Android tests to port

- [`SearchLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SearchLogicTest.kt)

## Risks

Low.

## Blocked by

- #30 (T-030) Home screen

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
