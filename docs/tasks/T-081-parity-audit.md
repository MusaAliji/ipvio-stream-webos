# T-081 Parity audit against Android 1.4.8

**Status:** ready-for-human  
**Issue:** #81  
**Milestone:** M12 Parity audit and v1.0.0

## What to build

Compare every screen and feature with Android 1.4.8 (screenshots side by side, README feature list, settings list), fix gaps or record them in PARITY, measure performance on large playlists.

## Acceptance criteria

- [ ] Every README feature is "done" or listed in PARITY with a reason.
- [ ] Performance numbers recorded.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`docs/FEATURES.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/docs/FEATURES.md)
- [`docs/SETTINGS.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/docs/SETTINGS.md)
- `docs/screenshots/*`
- [`README.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/README.md)

## Android tests to port

- None.

## Risks

Medium.

## Why ready-for-human

Side-by-side visual comparison with an Android TV device and judgment on what counts as a gap.

## Blocked by

- #49 (T-049) Release v0.1.0: release workflow, Homebrew manifest, update card
- #60 (T-060) About, Reset all, screen-edge calibration, What's new
- #62 (T-062) Stalker links, live, movies and series
- #68 (T-068) Storage settings tile
- #72 (T-072) Stream info on the detail page
- #74 (T-074) Drive backup and live sync

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
