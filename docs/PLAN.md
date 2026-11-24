# Port plan: IPVIO Stream for LG webOS

Planned on 2026-11-24. Reference: Android IPVIO Stream 1.4.8 (`f4a0360`): 253 Kotlin files, about 51,000 lines, 55 pure `*Logic.kt` files, 575 unit tests, 12 languages.

## Decisions

The decisions with lasting impact are recorded as ADRs in [`docs/adr/`](adr/) (0001–0008); the terms are in [`GLOSSARY.md`](../GLOSSARY.md).

| # | Decision |
|---|---|
| Q1 | Public repo `MusaAliji/ipvio-stream-webos`, GPL-3.0, branches `main` (releases) and `dev`. |
| Q2 | Keep the IPVIO Stream name, icon and look. |
| Q3, Q11 | Minimum webOS 4.0 (Chromium 53). Test on the 55UR80 (webOS 23), smoke tests in the webOS 4 and 6 emulators. The minimum may move to webOS 6 if webOS 4 proves too costly (T-004, T-082). |
| Q4 | Same screens, layout, navigation, remote keys, strings and features wherever the platform allows. Every gap is in `docs/PARITY.md`. |
| Q5 | TypeScript + Preact + Norigin spatial navigation + Vite (legacy plugin) + `ares-cli`. |
| Q6 | Logic hand-ported to TypeScript; the Android unit tests are ported to Vitest and act as the parity reference. |
| Q7 | Snapshot of Android 1.4.8; later Android releases arrive as parity sync tasks (T-083). |
| Q8 | Sideload first (Developer Mode, Homebrew Channel, `.ipk` on GitHub Releases); LG Content Store after 1.0.0 (T-085). |
| Q9, Q17 | Same backup JSON as Android, both ways. Preferences mirrored as localStorage namespaces with Android names and keys; caches in IndexedDB; Java `String.hashCode()` ported exactly; secrets via WebCrypto with plaintext fallback. |
| Q10, Q25 | Task files in `docs/tasks/` plus one GitHub issue per task (T-00N = #N), milestones M0–M12; tasks that depend on a spike carry `needs-spike`. |
| Q12 | A webOS JS service ships in the `.ipk`. The HTTP layer tries the browser first and falls back to the service (forbidden headers, CORS, LAN server, file writes). |
| Q13 | Playback spike first; native pipeline first, hls.js / mpegts.js / dash.js only where native fails, behind one engine interface. |
| Q14 | Phone remote ported in full, server in the JS service. |
| Q15 | Live rewind and recording: spike late (M11), "pending" until proven. |
| Q16 | Gap list as in `docs/PARITY.md`; audio delay and stream info are partial, not removed. |
| Q18 | Google Drive sync kept, same format; Google Cloud project shared with Android, client id from CI secrets. |
| Q19 | `Dict*.kt` → JSON by script; Android stays the single source of strings. |
| Q20 | CI: lint, Vitest, `.ipk` on PRs and `dev`; push to `main` releases `v<version>` with the `.ipk` and a Homebrew manifest. Versions 0.x until parity, then 1.0.0. |
| Q21 | App id `com.ipvio.stream.webos`, service id `com.ipvio.stream.webos.service`. |
| Q22 | No Donate screen for now. |
| Q23 | Optional fallback API keys from CI secrets, as on Android; users enter their own keys. |
| Q24 | Milestone order below; first sideload release v0.1.0 after M5. |
| Q26 | Implementation starts on the maintainer's go, one task per branch and PR into `dev`. |

## Architecture outline

```
src/
  app/          shell, screen routing (MainActivity priority), overlays
  ui/           components, design tokens, icons, screens
  logic/        pure ports of *Logic.kt and friends (Vitest)
  data/         prefs mirror, IndexedDB, playlist store, sources (M3U, Xtream, Stalker), EPG, metadata
  player/       engine interface + native / hls.js / mpegts.js / dash.js engines
  platform/     webOS adapters: Luna bus, keys, toast, lifecycle, service client
  i18n/         generated JSON (do not edit)
service/        webOS JS service: HTTP proxy, phone remote server, file tasks
scripts/        dict-to-json, packaging helpers
```

## Milestones

| Milestone | Scope | Tasks |
|---|---|---|
| M0 Scaffold | Tooling, CI, packaging, design tokens, spatial navigation, i18n, storage, app shell, components | T-001 – T-011 |
| M1 Playback | Playback spike, engine interface, player skeleton, resume | T-012 – T-015 |
| M2 Sources | JS service, HTTP layer, TLS fallback, playlist store, M3U, Xtream, backup servers, several playlists, add playlist, refresh, demo | T-016 – T-026 |
| M3 Main UI | Sidebar, header, metadata, Home, browse, detail, Live TV, categories, library, search | T-027 – T-036 |
| M4 Guide | EPG loader, guide screen, catch-up, reminders | T-037 – T-040 |
| M5 Full player → **v0.1.0** | OSD, live player, tracks, skip intro, delays, quality fallback, subtitle search, tech overlay, release | T-041 – T-049 |
| M6 Settings | Settings hub and tiles, profiles, parental, API keys, diagnostics, Boomer, about / reset / calibration | T-050 – T-060 |
| M7 Stalker | Stalker API and content | T-061 – T-062 |
| M8 Phone remote and backup | Phone server and pages, backup, transfer, list import, storage tile | T-063 – T-068 |
| M9 Extras | Sports hub, trending and cast, trailers, stream info | T-069 – T-072 |
| M10 Google Drive sync | Device-flow sign-in, Drive backup and live sync | T-073 – T-074 |
| M11 Spikes | Live rewind, recording, dual view: spikes, then implementation if go | T-075 – T-080 |
| M12 Parity audit → **v1.0.0** | Audit, emulator pass, parity sync process, release, Content Store readiness | T-081 – T-085 |

Full list with dependencies: [`docs/tasks/README.md`](tasks/README.md).

## Critical path

T-001 → T-012 (playback spike) → T-013 → T-014 → T-016 → T-017 → T-019 → T-021 → T-030 → T-033 → T-041 → T-049 (v0.1.0).

T-012 is the largest risk: the engine per format, audio delay and dual view all follow from it. T-019 and T-037 carry the memory risk of large playlists and guides on TV hardware.

## Open items found during planning

- Node version of the JS service on webOS 4 and webOS 23 (T-016).
- Whether a sideloaded JS service may listen on a LAN port and for how long (T-063).
- CORS behaviour of ESPN and Google OAuth endpoints from a packaged app (T-069, T-073).
- `crypto.subtle` availability on `file://` origins (T-009).
- LG Content Store policy for IPTV players, JS services and LAN servers (T-085).
