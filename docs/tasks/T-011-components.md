# T-011 Shared component library and icons

**Status:** ready-for-agent  
**Issue:** #11  
**Milestone:** M0 Scaffold

## What to build

Port the shared widgets: cards, rows, buttons, chips, dialogs, dropdowns, loading overlay, toast, focus ring, card context menu (long OK / Menu key). Convert `AppIcons`, `FilterIcons`, `PlayerIcons` to SVG components. Virtualised rows and grids for large lists (thousands of items) are part of this task.

## Acceptance criteria

- [ ] A component gallery screen matches the Android `DesignPreview`.
- [ ] A grid of 20,000 items scrolls at 60 fps on the 55UR80 without memory growth.
- [ ] Every icon used on Android exists as SVG.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Components.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Components.kt)
- [`Dropdown.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Dropdown.kt)
- [`Ui.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Ui.kt)
- [`LoadingOverlay.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/LoadingOverlay.kt)
- [`AppIcons.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AppIcons.kt)
- [`FilterIcons.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/FilterIcons.kt)
- [`PlayerIcons.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerIcons.kt)
- [`DesignPreview.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DesignPreview.kt)

## Android tests to port

- None.

## Risks

Medium: list virtualisation performance on TV CPUs.

## Blocked by

- #5 (T-005) Design tokens, scaling and fonts
- #6 (T-006) Spatial navigation and remote keys

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
