# T-021 Xtream source

**Status:** ready-for-agent  
**Issue:** #21  
**Milestone:** M2 Sources

## What to build

Port the Xtream client: `get.php` with fallback to `player_api.php`, live / movie / series lists, progress reporting (as Android T-008), live URL building, account info.

## Acceptance criteria

- [ ] A real Xtream account loads live, movies and series on the 55UR80.
- [ ] Progress keeps growing during long loads.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`XtreamApi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/XtreamApi.kt)
- [`XtreamLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/XtreamLogic.kt)
- [`LiveUrlLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveUrlLogic.kt)
- [`ProviderInfo.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ProviderInfo.kt)
- [`ProviderLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ProviderLogic.kt)

## Android tests to port

- [`XtreamLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/XtreamLogicTest.kt)
- [`LiveUrlLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/LiveUrlLogicTest.kt)
- [`ProviderLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/ProviderLogicTest.kt)

## Risks

Medium: provider User-Agent rules (needs T-017).

## Blocked by

- #19 (T-019) Playlist store and cache

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
