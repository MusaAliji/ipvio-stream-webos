# T-066 Wi-Fi transfer between devices

**Status:** ready-for-agent  
**Issue:** #66  
**Milestone:** M8 Phone remote and backup

## What to build

Port the Wi-Fi transfer flow, tested Android → webOS and webOS → Android.

## Acceptance criteria

- [ ] Transfer works both ways with an Android TV device.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`TransferUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TransferUi.kt)

## Android tests to port

- None.

## Risks

Medium.

## Blocked by

- #65 (T-065) Backup v1/v2 export and import
- #63 (T-063) Phone remote server in the JS service

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
