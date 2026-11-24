# T-023 Several playlists at once, playlist modes, lazy series

**Status:** ready-for-agent  
**Issue:** #23  
**Milestone:** M2 Sources

## What to build

Port "Also show" (combine playlists, same title only once), area sources, variants, playlist modes and lazy series loading.

## Acceptance criteria

- [ ] Two playlists combined show each title once with variants.
- [ ] Lazy series load seasons on demand.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`MultiLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MultiLogic.kt)
- [`AreaSource.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AreaSource.kt)
- [`Variants.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Variants.kt)
- [`PlaylistMode.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistMode.kt)
- [`LazySeries.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LazySeries.kt)

## Android tests to port

- None.

## Risks

Medium.

## Blocked by

- #20 (T-020) M3U parser and M3U URL source
- #21 (T-021) Xtream source

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
