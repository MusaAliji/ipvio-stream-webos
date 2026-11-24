# T-046 Quality choice and fallback to another source

**Status:** ready-for-agent  
**Issue:** #46  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port quality choice, variant fallback on errors and dead stream tracking (`ipvio_dead`).

## Acceptance criteria

- [ ] A failing source switches to the next variant as on Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`LiveQuality.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveQuality.kt)
- [`Variants.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Variants.kt)
- [`PlayerNet.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerNet.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #42 (T-042) Live player: zapping, number entry, info banner
- #23 (T-023) Several playlists at once, playlist modes, lazy series

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
