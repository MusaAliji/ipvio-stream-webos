# T-030 Home screen

**Status:** ready-for-agent  
**Issue:** #30  
**Milestone:** M3 Main UI

## What to build

Port Home: rotating billboard, home block builder, rows (Continue watching, Top 10 today, Because you watched, new episodes), sort rules.

## Acceptance criteria

- [ ] Matches Android screenshots with the same playlist.
- [ ] Billboard rotation timing equals Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`HomeScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/HomeScreen.kt)
- [`HomeParts.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/HomeParts.kt)
- [`HomeLayout.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/HomeLayout.kt)
- [`Billboard.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Billboard.kt)
- [`RecentSortLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/RecentSortLogic.kt)

## Android tests to port

- None.

## Risks

Medium: performance of many rows with posters.

## Blocked by

- #29 (T-029) Metadata core: TMDB, OMDb, matching, cache
- #15 (T-015) Playback positions and resume
- #27 (T-027) Sidebar and menu rules

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
