# T-043 Audio and subtitle tracks, own subtitle renderer

**Status:** ready-for-agent  
**Issue:** #43  
**Milestone:** M5 Full player (v0.1.0)

## What to build

Port track selection (remembered per title) and draw subtitles with our own renderer (SRT, VTT, embedded where the engine exposes cues) with the caption style settings.

## Acceptance criteria

- [ ] Track choice is remembered per title.
- [ ] Subtitle style equals Android settings.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`PlayerTracks.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerTracks.kt)
- [`SettingsTabs.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SettingsTabs.kt) (audio & subtitles tab)

## Android tests to port

- None.

## Risks

Medium: native pipeline track APIs (from T-012).

## Blocked by

- #41 (T-041) Player controls and OSD parity

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
