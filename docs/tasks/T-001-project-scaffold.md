# T-001 Project scaffold: Vite, TypeScript, Preact, packaging

**Status:** in review  
**Issue:** #1  
**Milestone:** M0 Scaffold

## What to build

Create the app skeleton: Vite + TypeScript + Preact, `appinfo.json` (id `com.ipvio.stream.webos`, 1920x1080, `disableBackHistoryAPI`), app icons from the Android launcher icon, ESLint + Prettier, Vitest, and npm scripts that build and package an `.ipk` with `ares-package` and install it with `ares-install -d lgtv`.

## Acceptance criteria

- [x] `npm run build` produces `dist/` and `npm run package` an `.ipk`.
- [x] `npm run deploy` installs and launches a "hello" screen on the 55UR80.
- [x] `npm test` runs Vitest; `npm run lint` passes.
- [x] appinfo uses the app id `com.ipvio.stream.webos` and version 0.0.1.

## Android reference (1.4.8, pinned to `f4a0360`)

- `app/src/main/res/mipmap-*` (launcher icon)
- `app/src/main/res/drawable*` (banner)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- None (can start immediately).

## Test results

Checks run on the development PC (Windows 11, Node 24.11):

- `npm run lint` (ESLint + Prettier): pass.
- `npm run typecheck`: pass.
- `npm test`: 2 files, 7 tests pass (`scripts/classic-script.test.ts`, `scripts/appinfo.test.ts`).
- `npm run build`: `dist/` with `index.html`, one IIFE bundle (11.7 kB, 5 kB gzip), `appinfo.json`, icons.
- `npm run package`: `out/com.ipvio.stream.webos_0.0.1_all.ipk`; `ares-package -i` shows id `com.ipvio.stream.webos`, version 0.0.1.
- `dist/index.html` opened from `file://` in headless desktop Chrome: hello screen renders centred (logo, "IPVIO Stream", 0.0.1).

Notes for review:

- Icons and splash come from `drawable/ic_logo_fg.png` on `#01040E`, the layers of the Android adaptive launcher icon (`mipmap-anydpi-v26/ic_launcher.xml`). The Android TV banner (`drawable/banner.png`, 640x360) has no webOS counterpart and is not used.
- The hello screen shows only the logo, the title and the version, so it needs no UI string before the dictionaries (T-007).
- For approval (CLAUDE.md §6): dependencies `preact` 10.29.8; dev `vite` 8.3.8, `vitest` 5.1.1, `typescript` 6.0.3 (typescript-eslint supports `<6.1`), `eslint` 10.15.0, `@eslint/js`, `typescript-eslint`, `eslint-config-prettier`, `globals`, `prettier` 3.10.1. No `@preact/preset-vite` (Vite 8 compiles Preact JSX itself). `ares-*` come from the global `@webos-tools/cli`.
- For approval (build): the bundle is one IIFE and `scripts/classic-script.ts` rewrites `index.html` to a classic deferred script, because webOS loads apps from `file://`, where module scripts are refused. The build fails if a module script survives. The build target is still Vite's default (the bundle uses `??=`), so webOS 4 needs T-004, which may replace this with `@vitejs/plugin-legacy`.

**Device test on the 55UR80:** run by the maintainer with the steps below: passed; dependencies and the build rewrite approved.

1. Turn on the 55UR80 with Developer Mode on; check `ares-device -i -d lgtv` answers.
2. `npm run deploy`.
3. Expected: the app installs and starts; the webOS splash (logo on navy) is followed by the hello screen with the logo, "IPVIO Stream" and 0.0.1, centred on a navy background, at full 1920x1080 without scrollbars.
4. Home key, then the app tile in the launcher: the icon is the IPVIO logo on navy, and the app opens again.
