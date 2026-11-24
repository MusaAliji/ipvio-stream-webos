# T-072 Stream info on the detail page

**Status:** ready-for-agent  
**Issue:** #72  
**Milestone:** M9 Extras

## What to build

Rebuild stream info without Media3: parse HLS master playlists (CODECS, RESOLUTION, audio / subtitle groups), MP4 headers (mp4box.js), MKV track headers (small EBML parser) and TS PMT, via range requests through the service. Unknown formats show provider data only (planning decision Q16).

## Acceptance criteria

- [ ] Info shows for HLS, MP4, MKV and TS test files.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`MediaProbe.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MediaProbe.kt)
- [`MediaProbeLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MediaProbeLogic.kt)

## Android tests to port

- [`MediaProbeLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/MediaProbeLogicTest.kt)

## Risks

Medium.

## Blocked by

- #32 (T-032) Detail screen, seasons and episodes
- #17 (T-017) HTTP layer: browser first, service fallback

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
