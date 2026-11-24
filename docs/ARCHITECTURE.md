# Architecture

How the webOS app is built: its parts, the layers inside the web app, the rules between them, and how it is built and packaged. Written against the scaffold of T-001 (version 0.0.1). Parts that do not exist yet are marked **planned**, with the task that creates them. Decisions are in [`docs/adr/`](adr/) (list in [section 9](#9-architecture-decisions)), terms in [`GLOSSARY.md`](../GLOSSARY.md), the project rules in [`CLAUDE.md`](../CLAUDE.md).

## 1. Goal

A port of the Android IPVIO Stream app, reference version 1.4.8 (`f4a0360`), to LG webOS TVs: the same screens, remote keys, strings and features, with every gap recorded in [`PARITY.md`](PARITY.md) ([ADR 0006](adr/0006-parity-reference-and-gaps.md)). The structure below serves that goal: logic is ported from Android with its tests ([ADR 0002](adr/0002-hand-port-logic-with-tests-as-oracle.md)), data stays compatible with Android ([ADR 0004](adr/0004-storage-mirrors-android.md)), and webOS specifics stay behind adapters.

## 2. Context

```
                     LG TV (webOS 4.0+)
 ┌────────────────────────────────────────────────────────┐
 │  Web app  com.ipvio.stream.webos                       │
 │  (system Chromium, loaded from file://)                │
 │        │  Luna bus (planned, T-016)                    │
 │        ▼                                               │
 │  JS service  com.ipvio.stream.webos.service            │
 │  (Node on the TV, same .ipk; planned, T-016)           │
 └────────────────────────────────────────────────────────┘
        │                                  │
        ▼                                  ▼
 Playlist providers (source types   Phone browser on the LAN
 M3U, Xtream, Stalker), TMDB / OMDb, (phone remote, ports 8765–8775,
 ESPN, subtitle sites, Google Drive, planned, T-063)
 GitHub Releases
```

- **User**: controls the app with the LG remote (standard or Magic Remote pointer), and a phone browser for the phone remote.
- **Web app**: everything the user sees. It runs in the TV's Chromium (Chromium 53 on webOS 4, [ADR 0007](adr/0007-minimum-webos-4.md)).
- **JS service**: a Node program in the same `.ipk` that does what a browser may not: requests with forbidden headers or without CORS, listening on a LAN port, writing files ([ADR 0003](adr/0003-js-service-as-network-fallback.md)). The web app tries the browser first and uses the service only as a fallback.
- **External systems**: the same as on Android; the user supplies the playlists and the TMDB / OMDb keys.

## 3. Layers

The web app has four layers, all in `src/`. The JS service is a separate program next to them.

```
 ┌───────────────────────────────────────────────┐
 │ UI           src/app/, src/ui/                │  Preact components, screens, focus
 ├───────────────────────────────────────────────┤
 │ Data and     src/data/, src/player/           │  storage, playlists, source types,
 │ player                                        │  TV guide, metadata, player engines
 ├──────────────────────────┬────────────────────┤
 │ Logic        src/logic/  │ Platform adapters  │
 │ pure TypeScript ports    │ src/platform/      │
 │ of the Android *Logic.kt │ webOS and browser  │
 └──────────────────────────┴─────────┬──────────┘
                                      │ Luna bus
                           ┌──────────┴──────────┐
                           │ JS service service/ │
                           └─────────────────────┘
```

| Layer | What it holds | May import | Must not |
|---|---|---|---|
| **UI** (`src/app/`, `src/ui/`) | App shell, screen routing, overlays, components, design tokens, icons, screens | Data and player, logic, platform adapters, i18n | Call webOS APIs (`webOS.*`, `PalmServiceBridge`, Luna URIs) or the JS service directly |
| **Data and player** (`src/data/`, `src/player/`) | Preferences mirror, IndexedDB, playlist store, the source types (M3U, Xtream, Stalker), TV guide, metadata; the player engine interface and its engines | Logic, platform adapters | Import UI code |
| **Logic** (`src/logic/`) | Pure functions and state rules ported from Android, with the ported Android tests | Other logic modules only | Touch the DOM, storage, network, timers of the platform or any webOS API |
| **Platform adapters** (`src/platform/`) | The only code that talks to webOS: Luna bus, keys, toast, lifecycle, JS service client | Logic (for pure helpers) | Import UI, data or player code |
| **JS service** (`service/`) | HTTP proxy, phone remote server, file tasks | Node built-ins of the TV's Node version | Share code with the web app at runtime; listen on the network except for the phone remote server ([CLAUDE.md](../CLAUDE.md) section 9) |

Why these rules:

- **Logic stays pure** so Vitest can run the ported Android tests unchanged, without a TV or a DOM ([ADR 0002](adr/0002-hand-port-logic-with-tests-as-oracle.md)). When a screen needs a decision (sorting, filtering, what Back does), the decision is a logic function and the screen calls it.
- **webOS access goes through adapters** so screens, data and player code run in a desktop browser (`npm run dev`) and in tests, and so a webOS version difference is fixed in one place.
- **The JS service is a separate program.** It runs on the TV's Node, which on webOS 4 is old (version recorded by T-016), so its code keeps to that language level and does not import web app modules. The web app reaches it only through the service client in `src/platform/`.

The rules are checked in review for now; there is no lint rule that enforces the import directions.

## 4. Repository layout

| Path | Layer | Contents | Status |
|---|---|---|---|
| `index.html` | – | Page with the `#app` root, viewport 1920x1080 | built (T-001) |
| `src/main.tsx` | UI | Entry: renders `App` into `#app`, loads the global CSS | built (T-001) |
| `src/app/` | UI | `App.tsx` (placeholder hello screen: logo, title, version from `appinfo.json`), `global.css` | built (T-001); the shell and screen routing replace the hello screen in T-010 |
| `src/ui/` | UI | Design tokens and fonts, focus and keys, components and icons, screens | planned (T-005, T-006, T-011, then per screen) |
| `src/logic/` | Logic | Ports of the Android `*Logic.kt` files with their tests | planned (first ports in T-007, T-008) |
| `src/data/` | Data and player | Preferences mirror, IndexedDB, Java `String.hashCode()`, secrets, playlist store, source types, TV guide, metadata | planned (T-008, T-009, T-019 onwards) |
| `src/player/` | Data and player | `PlayerEngine` interface, native and JavaScript engines | planned (T-013, after the spike T-012) |
| `src/platform/` | Platform adapters | Luna bus, keys, toast, lifecycle, JS service client | planned (T-006, T-010, T-016) |
| `src/i18n/` | – | Dictionaries generated from the Android `Dict*.kt` files; never edited by hand ([ADR 0005](adr/0005-dictionaries-generated-from-android.md)) | planned (T-007) |
| `service/` | JS service | `services.json`, `package.json`, service methods | planned (T-016) |
| `public/` | – | Copied unchanged into `dist/`: `appinfo.json`, `icon.png` (80x80), `largeIcon.png` (130x130), `splash.png` (1920x1080) | built (T-001) |
| `scripts/` | Build | Node and PowerShell scripts for the build, packaging and assets, run on the PC only; never bundled into the app | built (T-001); `dict-to-json` in T-007 |
| `docs/` | – | Plan, parity list, ADRs, task files, agent docs, this file | |

`scripts/` today:

- `classic-script.ts`: Vite build step that makes `index.html` load from `file://` (see [section 5](#5-build-and-packaging)), with `classic-script.test.ts`.
- `appinfo.test.ts`: checks `public/appinfo.json` (app id, version equal to `package.json`, full HD web app with `disableBackHistoryAPI`, images present).
- `ipk.mjs`: shared facts for the next two scripts (repository root, built `appinfo.json`, `.ipk` path).
- `package.mjs`: `ares-package dist --outdir out`.
- `deploy.mjs`: `ares-install` and `ares-launch` on the TV in `WEBOS_DEVICE` (default `lgtv`, the 55UR80).
- `make-icons.ps1`: generates the icons and splash in `public/` from the Android launcher icon.

## 5. Build and packaging

| Step | Command | Result |
|---|---|---|
| Type check | `npm run typecheck` | `tsc --noEmit` over `src/`, `scripts/**/*.ts`, `vite.config.ts` (strict, `noUncheckedIndexedAccess`) |
| Build | `npm run build` | Type check, then `vite build` into `dist/` |
| Package | `npm run package` | Build, then `out/com.ipvio.stream.webos_<version>_all.ipk` |
| Deploy | `npm run deploy` | Package, install and launch on the TV |

Facts about the build ([`vite.config.ts`](../vite.config.ts)):

- **Relative URLs** (`base: './'`), because webOS serves the app from `file://`.
- **One IIFE bundle and a classic script.** On `file://` the page origin is `null`, so Chromium refuses module scripts and `crossorigin` requests. The bundle is built as one IIFE, and `scripts/classic-script.ts` rewrites the entry to `<script defer src=…>` and drops `crossorigin` from the stylesheet. The build fails if a module script is left, so the problem shows on the PC and not only on the TV.
- **Preact JSX** is compiled by Vite itself (`oxc.jsx` with `importSource: 'preact'`); there is no Preact Vite plugin.
- **Build target**: still Vite's default (modern Chromium). T-004 adds `@vitejs/plugin-legacy` for ES5 output and polyfills on webOS 4 ([ADR 0001](adr/0001-preact-typescript-stack.md), [ADR 0007](adr/0007-minimum-webos-4.md)); whether the IIFE output and the classic-script step stay is decided there.
- **Packaging** uses the webOS CLI (`@webos-tools/cli`, installed globally, not a project dependency). From T-016 the `.ipk` also contains the JS service.
- **CI**: [`.github/workflows/build.yml`](../.github/workflows/build.yml) runs on pull requests into `dev` and `main`, on pushes to them, and by hand. It runs `npm ci`, installs the webOS CLI globally, then `npm run lint`, `npm test` and `npm run package`, and uploads the `.ipk` as a workflow artifact. Node, CLI and action versions are in the workflow. It uses Node 24 / npm 11, because npm 10 rejects the lockfile. `@emnapi/core` and `@emnapi/runtime` are explicit dev dependencies only to keep the lockfile valid on Linux: they are optional dependencies of `@rolldown/binding-wasm32-wasi` (Vite 8), which npm on Windows leaves out of `package-lock.json`, and `npm ci` on Linux refuses the lockfile without them ([T-003](tasks/T-003-ci-build.md)). Keep their version equal to what `@rolldown/binding-wasm32-wasi` asks for when Vite is upgraded.

`public/appinfo.json` sets: app id `com.ipvio.stream.webos` (never changed after the first release, user data is bound to it), `type: web`, `resolution: 1920x1080`, `bgColor` and splash for the start, and `disableBackHistoryAPI: true` so the Back key reaches the app as a key event (code 461) instead of browser history; the app handles Back itself like Android (T-006, T-010).

## 6. Runtime

Start of the web app as built today:

1. The TV shows the webOS splash (`splash.png` on `bgColor`) and loads `index.html` from the installed app folder.
2. The deferred classic script runs after the document is parsed; `src/main.tsx` renders `App` into `#app`.
3. `App` shows the hello screen. From T-010 the app shell takes over: startup order as in Android `StartupLogic`, screen priority as in `MainActivity.kt`, Back and exit handling, pause when the app is hidden (`visibilitychange`).

Screen size: the page is laid out for 1920x1080. Design tokens and the Android scale `k` (design width 1658 px) arrive with T-005.

**JS service**: planned (T-016). Node versions on webOS 4 and webOS 23, and how long the service survives an app suspend, are recorded here by T-016.

## 7. Testing

- **Vitest** runs `src/**/*.test.{ts,tsx}` and `scripts/**/*.test.ts` (`npm test`). Ported Android tests keep their expected values unchanged; a port is done when they pass ([ADR 0002](adr/0002-hand-port-logic-with-tests-as-oracle.md)).
- **Lint**: ESLint (flat config, `typescript-eslint` recommended, Prettier compatible) and the Prettier check (`npm run lint`). Prettier skips Markdown so the docs keep their formatting.
- **Device**: the LG 55UR80003LJ (webOS 23), registered as `lgtv`. A device test counts only when it ran on the device; every pull request lists its device test steps (see the pull request template). Emulator smoke tests for webOS 4 and 6 come with T-004 and T-082.

## 8. Data compatibility

Backups and Google Drive live sync must work between Android and webOS without a mapping layer ([ADR 0004](adr/0004-storage-mirrors-android.md)). So:

- Each Android SharedPreferences file becomes a localStorage namespace with the same file name, keys and value types; profile N uses the suffix `_p<N>`, profile 0 the plain name.
- Item ids are an exact port of Java's `String.hashCode()`.
- Large data (playlist cache, TV guide, metadata) lives in IndexedDB and is never part of a backup.
- The backup JSON format equals Android `Backup.kt`.

These are protected areas: they change only with an approved plan ([CLAUDE.md](../CLAUDE.md) section 5).

## 9. Architecture decisions

Status is the one written in the ADR file; "–" means the file has none.

| ADR | Decision | Status |
|---|---|---|
| [0001](adr/0001-preact-typescript-stack.md) | Preact, TypeScript and Norigin spatial navigation, built with Vite and the legacy plugin (the plugin arrives with T-004) | – |
| [0002](adr/0002-hand-port-logic-with-tests-as-oracle.md) | Kotlin logic hand-ported to TypeScript, the Android tests are the reference | – |
| [0003](adr/0003-js-service-as-network-fallback.md) | A webOS JS service as fallback for what a browser cannot do | – |
| [0004](adr/0004-storage-mirrors-android.md) | Storage mirrors Android's SharedPreferences; item ids use Java's `String.hashCode()` | – |
| [0005](adr/0005-dictionaries-generated-from-android.md) | UI strings generated from the Android dictionaries, German text as key | – |
| [0006](adr/0006-parity-reference-and-gaps.md) | Android 1.4.8 is the reference; every difference is a recorded gap | – |
| [0007](adr/0007-minimum-webos-4.md) | Minimum webOS 4.0 | accepted, to be confirmed in T-082 |
| [0008](adr/0008-native-playback-first.md) | Native playback first, JavaScript engines only where native fails | proposed, decided by the spike T-012 |

## 10. Open points

- Build target and polyfills for Chromium 53 (T-004).
- Node version of the JS service on webOS 4 and webOS 23 (T-016).
- Player engine per format (T-012, T-013).
- Whether the import rules of [section 3](#3-layers) get a lint rule once the layers exist (needs approval as a build change, [CLAUDE.md](../CLAUDE.md) section 6).
