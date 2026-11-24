# T-041 Player controls and OSD parity

**Status:** ready-for-agent  
**Issue:** #41  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port the full OSD and panels: seek with configurable steps, digits jump to 0–90 %, panels, player icons and theme.

## Acceptance criteria

- [ ] Matches Android screenshots.
- [ ] Key behaviour equals README "Good to know: remote control".

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlayerControls.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerControls.kt)
- [`PlayerPanels.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerPanels.kt)
- [`PlayerTheme.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerTheme.kt)
- [`PlayerIcons.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerIcons.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #14 (T-014) Player screen skeleton with basic controls

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
