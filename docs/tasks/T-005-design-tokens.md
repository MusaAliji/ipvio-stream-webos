# T-005 Design tokens, scaling and fonts

**Status:** ready-for-agent  
**Issue:** #5  
**Milestone:** M0 Scaffold

## What to build

Port the design system: colors and presets (`Look.kt`), tokens `Tok`/`DS` (`Ui.kt`: spacing, PageX 48, PageY 28, sidebar 92/250, radii, focus border 3), the 1658 px design width and scale `k` with `dpx`/`spx` and minimum text size (`DesignK.kt`), contrast/HSV math (`ThemeMath.kt`), player theme (`PlayerTheme.kt`), and bundle the Outfit and Inter fonts with their licences. Expose everything as CSS variables so themes switch at runtime.

## Acceptance criteria

- [ ] A token page renders brand green #4ADE80 on navy #0B0F19 with the same spacing and radii as Android at 1920x1080.
- [ ] `k` scaling matches Android for text size and display size settings.
- [ ] ThemeMath ported with unit tests (contrast values equal Kotlin results).
- [ ] Font licences are in `licenses/` and `THIRD_PARTY_NOTICES.md`.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Look.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Look.kt)
- [`Ui.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Ui.kt)
- [`DesignK.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/DesignK.kt)
- [`ThemeMath.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ThemeMath.kt)
- [`PlayerTheme.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlayerTheme.kt)
- [`Visuals.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Visuals.kt)
- [`Brand.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Brand.kt)
- [`General.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/General.kt) (font choice, fit insets)
- `app/src/main/res/font/*`
- `licenses/*`

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
