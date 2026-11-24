# T-050 Settings hub, tabs and General

**Status:** ready-for-agent  
**Issue:** #50  
**Milestone:** M6 Settings

## What to build

Port the settings hub with the tiles in Android order minus Donate (planning decision Q22) and the settings framework; General tile without VPN and DNS.

## Acceptance criteria

- [ ] Tile order equals Android minus Donate, VPN, DNS.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`SettingsHub.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsHub.kt)
- [`SettingsTabs.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsTabs.kt)
- [`SettingsLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsLogic.kt)
- [`SettingsExtra.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsExtra.kt)
- [`General.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/General.kt)

## Android tests to port

- [`SettingsLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SettingsLogicTest.kt)

## Risks

Low.

## Blocked by

- #11 (T-011) Shared component library and icons

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
