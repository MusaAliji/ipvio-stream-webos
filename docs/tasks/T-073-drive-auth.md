# T-073 Google sign-in by code (OAuth device flow)

**Status:** ready-for-agent  
**Issue:** #73  
**Milestone:** M10 Google Drive sync

## What to build

Port the device flow (`device/code`, `token`, refresh) with scope `drive.file`, through the service if CORS blocks; client id and secret from CI secrets, Drive hidden without them.

## Acceptance criteria

- [ ] Sign-in works on the 55UR80 with the Android Google Cloud project.
- [ ] No credentials in the repository.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`DriveUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DriveUi.kt)
- [`DriveSync.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DriveSync.kt) (auth parts)
- [`docs/GOOGLE_DRIVE.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/docs/GOOGLE_DRIVE.md)

## Android tests to port

- None.

## Risks

Medium.

## Blocked by

- #17 (T-017) HTTP layer: browser first, service fallback
- #68 (T-068) Storage settings tile

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
