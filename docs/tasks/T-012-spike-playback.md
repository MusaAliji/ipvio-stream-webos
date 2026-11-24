# T-012 Spike: playback capability matrix on the 55UR80

**Status:** ready-for-human  
**Issue:** #12  
**Milestone:** M1 Playback

## What to build

Measure on the real TV, for native `<video>` and for hls.js / mpegts.js / dash.js: raw MPEG-TS live (Xtream `.ts`), HLS live and VOD, DASH, MP4 and MKV VOD, AC3 / E-AC3 / DTS audio, HEVC and HDR, audio and subtitle track listing and switching (`audioTracks`, `textTracks`), catch-up URLs, start time, zapping time, memory. Also test: MSE audio `timestampOffset` for audio delay, two `<video>` elements at once, behaviour behind HTTP redirects. Repeat the key cases in the webOS 4 emulator.

## Acceptance criteria

- [ ] `docs/spikes/playback.md` with a format × engine matrix and the chosen engine per format.
- [ ] Decision recorded for audio delay (T-045) and dual view (T-080).
- [ ] Test streams documented (public test streams, no private provider links).

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Playback.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Playback.kt)
- [`PlayerScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerScreen.kt)
- [`PlayerNet.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerNet.kt)
- [`SoftAudio.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SoftAudio.kt)
- [`PlayerSync.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerSync.kt)
- [`DualView.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DualView.kt)

## Android tests to port

- [`Media3ContractTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/Media3ContractTest.kt) (read for expectations only)

## Risks

High: every player task depends on this result.

## Why ready-for-human

Needs a person at the TV to judge picture, sound, subtitle timing and zapping on real streams, and access to real provider streams.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
