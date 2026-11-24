# T-027 Sidebar and menu rules

**Status:** ready-for-agent  
**Issue:** #27  
**Milestone:** M3 Main UI

## What to build

Port the sidebar: ids 0 Home … 10 Sport, default order 0,3,1,2,10,6,7,8,9,4,5, Search and EPG hidden by default, Home and Settings never hidden, positions left / right / top, icons only or with labels. The phone search button appears after M8.

## Acceptance criteria

- [ ] Pixel comparison with Android screenshots for all three positions.
- [ ] Menu rules match `MenuLogic`.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Sidebar.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Sidebar.kt)
- [`MenuLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MenuLogic.kt)
- [`Nav.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Nav.kt)

## Android tests to port

- [`SettingsLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SettingsLogicTest.kt) (menu parts)

## Risks

Low.

## Blocked by

- #11 (T-011) Shared component library and icons
- #10 (T-010) App shell, screen routing and webOS lifecycle

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
