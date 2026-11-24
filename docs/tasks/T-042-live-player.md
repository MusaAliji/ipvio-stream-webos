# T-042 Live player: zapping, number entry, info banner

**Status:** ready-for-agent  
**Issue:** #42  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port live playback: channel up/down, number entry, info banner, mini guide, last channel.

## Acceptance criteria

- [ ] Zapping time recorded and close to the native limit from T-012.
- [ ] Keys equal README live TV section.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlayerLive.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerLive.kt)

## Android tests to port

- None.

## Risks

Medium.

## Blocked by

- #41 (T-041) Player controls and OSD parity
- #33 (T-033) Live TV tab

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
