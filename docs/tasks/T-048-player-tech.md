# T-048 Player tech info overlay

**Status:** ready-for-agent  
**Issue:** #48  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port the tech info overlay (resolution, bitrate, codecs, buffer, engine) with what each engine exposes.

## Acceptance criteria

- [ ] Overlay shows the engine name and available stats.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlayerTech.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerTech.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #41 (T-041) Player controls and OSD parity

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
