# T-045 Subtitle delay and audio delay

**Status:** ready-for-agent  
**Issue:** #45  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Subtitle delay via our renderer. Audio delay via MSE audio `timestampOffset` for streams played with hls.js / mpegts.js; for natively played streams show a hint to the TV's AV sync setting (planning decision Q16).

## Acceptance criteria

- [ ] Subtitle delay works for all engines.
- [ ] Audio delay works for MSE engines as measured in T-012.
- [ ] The hint appears for native playback.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlayerSync.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerSync.kt)

## Android tests to port

- None.

## Risks

Medium.

## Blocked by

- #43 (T-043) Audio and subtitle tracks, own subtitle renderer
- #12 (T-012) Spike: playback capability matrix on the 55UR80

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
