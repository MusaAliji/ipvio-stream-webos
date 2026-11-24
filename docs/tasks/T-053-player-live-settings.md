# T-053 Player, Audio & subtitles, Live TV & guide, Genres & categories settings

**Status:** ready-for-agent  
**Issue:** #53  
**Milestone:** M6 Settings

## What to build

Port the four settings tiles.

## Acceptance criteria

- [ ] All options exist and act like Android (except documented gaps).

## Android reference (1.4.8, pinned to `f4a0360`)

- [`LiveSettingsUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LiveSettingsUi.kt)
- [`SettingsTabs.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsTabs.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General
- #43 (T-043) Audio and subtitle tracks, own subtitle renderer
- #38 (T-038) Timeline TV guide with preview and guide search

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
