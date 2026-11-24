# T-018 TLS fallback with consent dialog

**Status:** ready-for-agent  
**Issue:** #18  
**Milestone:** M2 Sources

## What to build

Port the TLS fallback flow: when an https request fails, offer the same consent dialog once per host and retry over http; remember the choice in `ipvio_tls`. A browser cannot detect a hostname mismatch specifically, so the trigger is "https failed, http may work" (planning decision Q16).

## Acceptance criteria

- [ ] Dialog text equals Android (dictionary keys).
- [ ] Choice persists per host.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`TlsFallback.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TlsFallback.kt)
- [`TlsFallbackLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TlsFallbackLogic.kt)
- [`TlsConsentDialog.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TlsConsentDialog.kt)

## Android tests to port

- [`TlsFallbackLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/TlsFallbackLogicTest.kt)

## Risks

Low.

## Blocked by

- #17 (T-017) HTTP layer: browser first, service fallback

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
