# T-078 Live rewind (only if T-075 is go)

**Status:** needs-triage  
**Issue:** #78  
**Milestone:** M11 Spikes

## What to build

Implement live rewind as specified by the spike.

## Acceptance criteria

- [ ] Pause and rewind live TV within the configured buffer.
- [ ] PARITY updated.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`LiveTap.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveTap.kt)
- [`TapLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TapLogic.kt)
- [`LiveTimeshift.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveTimeshift.kt)

## Android tests to port

- None.

## Risks

High.

## Why needs-triage

Scope depends on the go / no-go of T-075.

## Blocked by

- #75 (T-075) Spike: live rewind buffer

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
