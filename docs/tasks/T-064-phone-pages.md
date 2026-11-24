# T-064 Phone pages and features

**Status:** ready-for-agent  
**Issue:** #64  
**Milestone:** M8 Phone remote and backup

## What to build

Port the phone web pages and features: QR code, quick setup (M3U link, Xtream login, playlist file), search and start on TV, player control, category management, key paste, list import upload, backup download / restore.

## Acceptance criteria

- [ ] Every feature from README "Your phone as the remote" works.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`RemoteLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/RemoteLogic.kt)
- [`RemoteUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/RemoteUi.kt)
- [`RemoteMore.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/RemoteMore.kt)
- [`QrCode.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/QrCode.kt)
- [`ImportFiles.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ImportFiles.kt)
- [`MobilePrefs.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MobilePrefs.kt)

## Android tests to port

- [`RemoteLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/RemoteLogicTest.kt)
- [`QrCodeTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/QrCodeTest.kt)

## Risks

Medium.

## Blocked by

- #63 (T-063) Phone remote server in the JS service
- #24 (T-024) Add-playlist screen and playlist management
- #36 (T-036) Search screen and voice input

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
