# T-065 Backup v1/v2 export and import

**Status:** ready-for-agent  
**Issue:** #65  
**Milestone:** M8 Phone remote and backup

## What to build

Port the backup format: `{v, at, files, playlists}`, v2 `device`, `app` and `secure` (PBKDF2-HMAC-SHA256 100k + AES-256-GCM), restore only known names, 4 MB limit, local-only keys excluded.

## Acceptance criteria

- [ ] A backup made on Android restores on webOS and the reverse (favourites, history, playlists match).
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Backup.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Backup.kt)
- [`SyncLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SyncLogic.kt)

## Android tests to port

- [`SyncLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SyncLogicTest.kt)

## Risks

High: data compatibility.

## Blocked by

- #8 (T-008) Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode
- #55 (T-055) Profiles and "Who's watching?"
- #64 (T-064) Phone pages and features

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
