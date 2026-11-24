# T-049 Release v0.1.0: release workflow, Homebrew manifest, update card

**Status:** ready-for-agent  
**Issue:** #49  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Add `release.yml` (push to `main`: tests, build, GitHub release `v<version>` with `ipvio-stream.ipk` and a Homebrew Channel repository manifest) and the "new version available" card that reads the latest release (replaces the Android in-app updater). README install guide for Developer Mode and Homebrew Channel.

## Acceptance criteria

- [ ] Merge to `main` publishes v0.1.0 with the `.ipk`.
- [ ] The app shows the card when a newer release exists.
- [ ] Fresh install from the release works on the 55UR80.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`.github/workflows/release.yml`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/.github/workflows/release.yml)
- [`UpdateCard.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/UpdateCard.kt)
- [`UpdateCardLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/UpdateCardLogic.kt)
- [`Round17Logic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Round17Logic.kt)
- [`AppUpdate.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AppUpdate.kt)

## Android tests to port

- [`UpdateCardLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/UpdateCardLogicTest.kt)
- [`UpdateLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/UpdateLogicTest.kt) (version compare parts)

## Risks

Low.

## Blocked by

- #3 (T-003) CI: lint, tests and .ipk build on pull requests and dev
- #41 (T-041) Player controls and OSD parity
- #42 (T-042) Live player: zapping, number entry, info banner
- #43 (T-043) Audio and subtitle tracks, own subtitle renderer
- #44 (T-044) Skip intro and credits, next episode
- #45 (T-045) Subtitle delay and audio delay
- #46 (T-046) Quality choice and fallback to another source
- #47 (T-047) Subtitle search (SubDL, OpenSubtitles)
- #48 (T-048) Player tech info overlay
- #39 (T-039) Catch-up and archive playback
- #40 (T-040) Reminders: in-app card and webOS toast
- #34 (T-034) Category order, hidden, ignored, private and favourite categories
- #35 (T-035) Favourites, My list and History
- #36 (T-036) Search screen and voice input
- #24 (T-024) Add-playlist screen and playlist management
- #25 (T-025) Playlist refresh plans and startup loading

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
