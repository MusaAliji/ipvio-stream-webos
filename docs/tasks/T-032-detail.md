# T-032 Detail screen, seasons and episodes

**Status:** ready-for-agent  
**Issue:** #32  
**Milestone:** M3 Main UI

## What to build

Port the detail screen: info, actions (play, resume, favourite, my list, trailer later), seasons, episodes, "go to episode" for long series, new episodes. Stream info is added in M9 (T-074).

## Acceptance criteria

- [ ] Matches Android screenshots.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`DetailScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DetailScreen.kt)
- [`EpisodeLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/EpisodeLogic.kt)
- [`NewEpisodes.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/NewEpisodes.kt)
- [`NewEpisodeLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/NewEpisodeLogic.kt)

## Android tests to port

- [`EpisodeLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/EpisodeLogicTest.kt)
- [`NewEpisodeLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/NewEpisodeLogicTest.kt)

## Risks

Low.

## Blocked by

- #31 (T-031) Movies and Series: browse, categories, filters, automatic genres

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
