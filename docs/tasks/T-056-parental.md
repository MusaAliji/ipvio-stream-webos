# T-056 Parental control

**Status:** ready-for-agent  
**Issue:** #56  
**Milestone:** M6 Settings

## What to build

Port the PIN (SHA-256 of `salt:pin`, with a JS SHA-256 fallback when `crypto.subtle` is missing), lockout after 5 failures for 60 s, hidden content rules. Parental keys stay on the device (not in backups).

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Hash equals Android for the same salt and PIN.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Parental.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Parental.kt)
- [`ParentalLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ParentalLogic.kt)

## Android tests to port

- [`ParentalLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/ParentalLogicTest.kt)

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
