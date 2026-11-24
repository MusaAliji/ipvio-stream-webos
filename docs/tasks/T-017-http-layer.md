# T-017 HTTP layer: browser first, service fallback

**Status:** ready-for-agent  
**Issue:** #17  
**Milestone:** M2 Sources

## What to build

One `http` module for the whole app: tries `fetch` from the web app, falls back to the JS service when a request needs forbidden headers (User-Agent, Referer, Cookie) or CORS blocks it. Supports streaming downloads with progress, gzip, timeouts, cancellation, and per-host User-Agent policy (`PlaylistUaLogic`: VLC UA by default, optional `IPVIOStream/<ver>`, remembered `ua_native_<hash>`).

## Acceptance criteria

- [ ] A request with a custom User-Agent reaches a test server with that header (verified via a header echo endpoint).
- [ ] CORS-blocked requests succeed through the service.
- [ ] Progress callback works for downloads of 100+ MB without loading them fully into memory.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Net.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Net.kt)
- [`NetSettings.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/NetSettings.kt)
- [`PlaylistUaLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistUaLogic.kt)
- [`PlaylistStore.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistStore.kt) (download paths)

## Android tests to port

- [`PlaylistUaLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistUaLogicTest.kt)

## Risks

Medium.

## Blocked by

- #16 (T-016) JS service scaffold and Luna bridge

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
