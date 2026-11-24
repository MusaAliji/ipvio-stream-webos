# T-010 App shell, screen routing and webOS lifecycle

**Status:** ready-for-agent  
**Issue:** #10  
**Milestone:** M0 Scaffold

## What to build

Port the screen priority from `MainActivity.kt` (Player > Person > Detail > Browse > Categories > AddPlaylist > BoomerHome > Search > Home(tab)) as a state machine, plus the overlays slot (remote overlay, what's new, ViewLive panel, MetaBadge, reminder card, profile picker). Handle Back like Android, the exit confirmation, `visibilitychange` (pause playback when hidden), relaunch, and `location.reload()` for the restart action.

## Acceptance criteria

- [ ] Back walks the same screen stack as Android.
- [ ] Hiding the app pauses playback; relaunch resumes the last screen.
- [ ] Startup order equals `StartupLogic`.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`MainActivity.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/MainActivity.kt)
- [`Nav.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Nav.kt)
- [`StartupLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/StartupLogic.kt)

## Android tests to port

- [`StartupLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/StartupLogicTest.kt)

## Risks

Low.

## Blocked by

- #6 (T-006) Spatial navigation and remote keys

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
