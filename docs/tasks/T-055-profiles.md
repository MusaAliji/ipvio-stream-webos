# T-055 Profiles and "Who's watching?"

**Status:** ready-for-agent  
**Issue:** #55  
**Milestone:** M6 Settings

## What to build

Port profiles (max 5), the picker and per-profile data scoping.

## Acceptance criteria

- [ ] Each profile has separate history and favourites.
- [ ] Storage names equal Android (`_p<ID>`).

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Profiles.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Profiles.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General
- #8 (T-008) Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
