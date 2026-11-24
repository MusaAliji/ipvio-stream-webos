# T-068 Storage settings tile

**Status:** ready-for-agent  
**Issue:** #68  
**Milestone:** M8 Phone remote and backup

## What to build

Port the storage tile: backup, restore, transfer, Drive entry (Drive hidden until M10 or without client id).

## Acceptance criteria

- [ ] Tile matches Android minus documented gaps.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`SettingsHub.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsHub.kt) (storage)
- [`TransferUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/TransferUi.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #65 (T-065) Backup v1/v2 export and import
- #66 (T-066) Wi-Fi transfer between devices

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
