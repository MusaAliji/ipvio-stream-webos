# T-040 Reminders: in-app card and webOS toast

**Status:** ready-for-agent  
**Issue:** #40  
**Milestone:** M4 Guide

## What to build

Port reminders (`ipvio_reminders`): the in-app reminder card and a webOS system toast via Luna. No reminders while the app is closed (gap, see PARITY).

## Acceptance criteria

- [ ] A reminder fires while the app is open, also during playback.
- [ ] Gap documented in PARITY.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Live.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Live.kt) (reminders)
- [`app/src/main/AndroidManifest.xml`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/AndroidManifest.xml) (ReminderReceiver)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #38 (T-038) Timeline TV guide with preview and guide search
- #16 (T-016) JS service scaffold and Luna bridge

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
