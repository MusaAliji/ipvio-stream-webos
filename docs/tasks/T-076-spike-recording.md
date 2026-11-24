# T-076 Spike: recording to internal storage or USB

**Status:** ready-for-human  
**Issue:** #76  
**Milestone:** M11 Spikes

## What to build

Find out whether a sideloaded service can write recordings to app storage or a USB stick, and how much space it gets.

## Acceptance criteria

- [ ] `docs/spikes/recording.md` with a go / no-go and limits.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Recorder.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Recorder.kt)

## Android tests to port

- None.

## Risks

High.

## Why ready-for-human

Needs a USB stick plugged into the TV and a person to check the recorded files play back.

## Blocked by

- #16 (T-016) JS service scaffold and Luna bridge

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
