# T-015 Playback positions and resume

**Status:** ready-for-agent  
**Issue:** #15  
**Milestone:** M1 Playback

## What to build

Port position saving and resume (`ipvio_playback`), watched thresholds and the data behind "Continue watching".

## Acceptance criteria

- [ ] Resume prompt and thresholds equal Android.
- [ ] Keys and value format equal Android so backups carry positions.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Playback.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Playback.kt)
- [`PlaybackLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaybackLogic.kt)
- [`RecentSortLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/RecentSortLogic.kt)

## Android tests to port

- [`RecentSortLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/RecentSortLogicTest.kt)

## Risks

Low.

## Blocked by

- #14 (T-014) Player screen skeleton with basic controls
- #8 (T-008) Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
