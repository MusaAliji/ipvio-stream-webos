# T-035 Favourites, My list and History

**Status:** ready-for-agent  
**Issue:** #35  
**Milestone:** M3 Main UI

## What to build

Port the three library screens and favourite reordering (`ipvio_lib/favs` newline-joined ids).

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Order survives restart.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Store.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Store.kt)
- [`FavReorder.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/FavReorder.kt)
- [`FavOrderLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/FavOrderLogic.kt)

## Android tests to port

- [`FavOrderLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/FavOrderLogicTest.kt)

## Risks

Low.

## Blocked by

- #30 (T-030) Home screen

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
