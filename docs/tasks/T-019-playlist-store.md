# T-019 Playlist store and cache

**Status:** ready-for-agent  
**Issue:** #19  
**Milestone:** M2 Sources

## What to build

Port `PlaylistStore` and the cache format (`pl_<hash>`, `.cu` catch-up info) into IndexedDB, with counts, added dates and a memory budget for very large playlists (`Mem.kt`). Parsing streams line by line (`LinePump`) so 200 MB lists never sit in memory as one string.

## Acceptance criteria

- [ ] A 100,000-item playlist loads on the 55UR80 within a documented time and memory budget.
- [ ] Cache survives app restart.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlaylistStore.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistStore.kt)
- [`PlaylistCacheIO.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistCacheIO.kt)
- [`PlaylistCountLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistCountLogic.kt)
- [`LinePump.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LinePump.kt)
- [`Mem.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Mem.kt)
- [`LoadLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LoadLogic.kt)

## Android tests to port

- [`PlaylistCacheTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistCacheTest.kt)
- [`PlaylistCacheAddedTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistCacheAddedTest.kt)
- [`PlaylistCompletenessTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistCompletenessTest.kt)
- [`PlaylistCountLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistCountLogicTest.kt)
- [`LoadLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/LoadLogicTest.kt)

## Risks

High: memory on TVs.

## Blocked by

- #8 (T-008) Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode
- #17 (T-017) HTTP layer: browser first, service fallback

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
