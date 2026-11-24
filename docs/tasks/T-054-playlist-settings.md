# T-054 Playlists settings

**Status:** ready-for-agent  
**Issue:** #54  
**Milestone:** M6 Settings

## What to build

Port the playlists tile: list, edit window, refresh plans, User-Agent choice.

## Acceptance criteria

- [ ] All options act like Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlaylistEditDialog.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistEditDialog.kt)
- [`PlaylistRefresh.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistRefresh.kt)
- [`PlaylistUaLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistUaLogic.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General
- #25 (T-025) Playlist refresh plans and startup loading

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
