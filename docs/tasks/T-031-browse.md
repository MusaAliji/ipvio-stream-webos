# T-031 Movies and Series: browse, categories, filters, automatic genres

**Status:** ready-for-agent  
**Issue:** #31  
**Milestone:** M3 Main UI

## What to build

Port Browse and Categories screens with filters by genre, year, rating and country, language filter, automatic genres.

## Acceptance criteria

- [ ] Filters give the same results as Android on the same playlist.
- [ ] Large categories scroll smoothly (virtualised grid).

## Android reference (1.4.8, pinned to `f4a0360`)

- [`BrowseScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/BrowseScreen.kt)
- [`BrowseLang.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/BrowseLang.kt)
- [`CategoriesScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/CategoriesScreen.kt)
- [`LiveGenre.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveGenre.kt)
- [`LangFilter.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LangFilter.kt)

## Android tests to port

- None.

## Risks

Medium.

## Blocked by

- #30 (T-030) Home screen
- #23 (T-023) Several playlists at once, playlist modes, lazy series

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
