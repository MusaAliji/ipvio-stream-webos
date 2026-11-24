# T-061 Stalker / Ministra API through the JS service

**Status:** ready-for-agent  
**Issue:** #61  
**Milestone:** M7 Stalker

## What to build

Port the Stalker client running its requests through the service: handshake, token, profile, MAG User-Agent, `X-User-Agent`, `Referer`, `Cookie: mac=…`, `Authorization: Bearer`.

## Acceptance criteria

- [ ] A real portal logs in and lists categories on the 55UR80.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`StalkerApi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StalkerApi.kt)
- [`StalkerLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StalkerLogic.kt)
- [`StalkerModelLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StalkerModelLogic.kt)

## Android tests to port

- [`StalkerModelLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/StalkerModelLogicTest.kt)
- [`StalkerCategoryTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/StalkerCategoryTest.kt)

## Risks

Medium.

## Blocked by

- #17 (T-017) HTTP layer: browser first, service fallback
- #19 (T-019) Playlist store and cache

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
