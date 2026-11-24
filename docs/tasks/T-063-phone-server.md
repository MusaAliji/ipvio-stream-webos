# T-063 Phone remote server in the JS service

**Status:** ready-for-agent  
**Issue:** #63  
**Milestone:** M8 Phone remote and backup

## What to build

Run the HTTP server in the service on ports 8765–8775 with the 4-digit code, routes `/r` and `/b/CODE`, an atomic failure counter, input validation. First verify the service may listen on a LAN port and how long it stays alive.

## Acceptance criteria

- [ ] A phone on the same Wi-Fi reaches the server.
- [ ] Wrong codes lock out as designed.
- [ ] Lifetime limits documented.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PhoneImport.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PhoneImport.kt)
- [`RemoteHub.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/RemoteHub.kt)

## Android tests to port

- [`PhoneImportTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PhoneImportTest.kt)

## Risks

High: service lifetime and LAN listening are unverified.

## Blocked by

- #16 (T-016) JS service scaffold and Luna bridge

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
