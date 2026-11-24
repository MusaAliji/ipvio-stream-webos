# T-051 Language & region, View, Design and colour

**Status:** ready-for-agent  
**Issue:** #51  
**Milestone:** M6 Settings

## What to build

Port language and region, view (sidebar position, labels, text and display size, fonts) and design (accent presets, swatches, backgrounds, custom colours, ready-made designs).

## Acceptance criteria

- [ ] Every option changes the UI live as on Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`ViewSettings.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ViewSettings.kt)
- [`Look.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Look.kt)
- [`Visuals.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Visuals.kt)
- [`Lang.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Lang.kt)
- [`BrowseLang.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/BrowseLang.kt)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General
- #5 (T-005) Design tokens, scaling and fonts
- #7 (T-007) i18n: Dict*.kt → JSON converter and I18nCore port

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
