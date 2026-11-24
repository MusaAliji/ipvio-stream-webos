# T-074 Drive backup and live sync

**Status:** ready-for-agent  
**Issue:** #74  
**Milestone:** M10 Google Drive sync

## What to build

Port Drive backup and live sync with the same file names and AES-GCM / PBKDF2 format so an Android TV and an LG TV sync with each other.

## Acceptance criteria

- [ ] Favourites and history sync between an Android TV and the 55UR80.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`DriveSync.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DriveSync.kt)
- [`DriveLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DriveLogic.kt)
- [`LiveSync.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveSync.kt)
- [`LiveSyncLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveSyncLogic.kt)
- [`SyncLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SyncLogic.kt)

## Android tests to port

- [`DriveLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/DriveLogicTest.kt)
- [`LiveSyncLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/LiveSyncLogicTest.kt)

## Risks

High: data compatibility.

## Blocked by

- #73 (T-073) Google sign-in by code (OAuth device flow)
- #65 (T-065) Backup v1/v2 export and import

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
