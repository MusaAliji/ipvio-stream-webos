# T-080 Dual view and multi view (only if T-077 is go)

**Status:** needs-triage  
**Issue:** #80  
**Milestone:** M11 Spikes

## What to build

Implement dual view / multi view as specified by the spike.

## Acceptance criteria

- [ ] Behaviour equals Android on models that support it; hidden elsewhere.
- [ ] PARITY updated.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`DualView.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DualView.kt)
- [`MultiView.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MultiView.kt)

## Android tests to port

- None.

## Risks

Medium.

## Why needs-triage

Scope depends on the go / no-go of T-077.

## Blocked by

- #77 (T-077) Spike: dual view and multi view

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
