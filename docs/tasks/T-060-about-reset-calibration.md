# T-060 About, Reset all, screen-edge calibration, What's new

**Status:** ready-for-agent  
**Issue:** #60  
**Milestone:** M6 Settings

## What to build

Port About (shows "based on Android 1.4.8"), Reset all, fit calibration and the What's new dialog.

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Reset clears the same keys as Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`SettingsReset.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsReset.kt)
- [`SettingsResetLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsResetLogic.kt)
- [`FitCalibration.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/FitCalibration.kt)
- [`WhatsNew.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/WhatsNew.kt)

## Android tests to port

- [`SettingsResetLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SettingsResetLogicTest.kt)
- [`WhatsNewNameTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/WhatsNewNameTest.kt)

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
