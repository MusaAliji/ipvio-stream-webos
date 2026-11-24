# T-025 Playlist refresh plans and startup loading

**Status:** ready-for-agent  
**Issue:** #25  
**Milestone:** M2 Sources

## What to build

Port refresh plans without WorkManager: refresh on app start and while the app is open, following `PlaylistRefreshLogic` (planning decision: background refresh with the app closed is not possible).

## Acceptance criteria

- [ ] Refresh due at start runs once; a running app refreshes on schedule.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlaylistRefresh.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistRefresh.kt)
- [`PlaylistRefreshLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistRefreshLogic.kt)
- [`Updater.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Updater.kt)
- [`StartupLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StartupLogic.kt)

## Android tests to port

- [`PlaylistRefreshLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistRefreshLogicTest.kt)

## Risks

Low.

## Blocked by

- #19 (T-019) Playlist store and cache

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
