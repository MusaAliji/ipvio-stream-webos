# T-029 Metadata core: TMDB, OMDb, matching, cache

**Status:** ready-for-agent  
**Issue:** #29  
**Milestone:** M3 Main UI

## What to build

Port the metadata client and cache (`meta3/` into IndexedDB): TMDB details, posters, genres, OMDb ratings, title matching, freshness rules, age ratings, the MetaBadge. Keys from user settings or CI fallback (`TMDB_KEY`, `OMDB_KEY`).

## Acceptance criteria

- [ ] Posters and ratings appear for a demo title.
- [ ] Cache respects freshness rules.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Meta.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Meta.kt)
- [`Config.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Config.kt)
- [`MatchLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MatchLogic.kt)
- [`MetaFreshLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MetaFreshLogic.kt)
- [`AgeRatingLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AgeRatingLogic.kt)
- [`MetaBadge.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MetaBadge.kt)

## Android tests to port

- [`MatchLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/MatchLogicTest.kt)
- [`MetaFreshLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/MetaFreshLogicTest.kt)
- [`AgeRatingLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/AgeRatingLogicTest.kt)

## Risks

Low.

## Blocked by

- #17 (T-017) HTTP layer: browser first, service fallback
- #8 (T-008) Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
