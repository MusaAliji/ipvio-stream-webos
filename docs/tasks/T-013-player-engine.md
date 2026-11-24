# T-013 Player engine interface and implementations

**Status:** ready-for-agent  
**Issue:** #13  
**Milestone:** M1 Playback

## What to build

Define one `PlayerEngine` interface (load, play, pause, seek, tracks, events, stats, release) and implement the engines chosen in T-012 (native, hls.js, mpegts.js, dash.js). Port the error and retry policy (custom LoadErrorPolicy, cross-protocol redirects), reconnect on network change, and the pure logic in `PlaybackLogic` and `PlayerLogic`.

## Acceptance criteria

- [ ] Engine selection follows the T-012 matrix.
- [ ] Ported tests pass.
- [ ] A stream that fails mid-play retries with the same policy as Android.
- [ ] Only one engine instance holds the decoder at a time.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Playback.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Playback.kt)
- [`PlaybackLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaybackLogic.kt)
- [`PlayerLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerLogic.kt)
- [`PlayerNet.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerNet.kt)
- [`PlayerTech.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerTech.kt)

## Android tests to port

- [`PlaybackLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaybackLogicTest.kt)
- [`PlayerLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlayerLogicTest.kt)
- [`PlayerBufferTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlayerBufferTest.kt)

## Risks

High.

## Blocked by

- #12 (T-012) Spike: playback capability matrix on the 55UR80

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
