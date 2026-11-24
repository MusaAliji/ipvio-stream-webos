# Tasks

One file per task; T-00N is GitHub issue #N. The file holds the scope, the issue tracks status. Blockers are native "blocked by" links on GitHub and listed in each file. Android references point to IPVIO Stream 1.4.8 (`f4a0360`).

Status uses the triage labels: `ready-for-agent`, `ready-for-human`, `needs-triage`.

## M0 Scaffold

Tooling, CI, packaging, design tokens, spatial navigation, i18n, storage, app shell.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-001](T-001-project-scaffold.md) | Project scaffold: Vite, TypeScript, Preact, packaging | #1 | ready-for-agent | – |
| [T-002](T-002-repo-conventions.md) | Repo conventions: architecture doc, PR and issue templates | #2 | ready-for-agent | T-001 |
| [T-003](T-003-ci-build.md) | CI: lint, tests and .ipk build on pull requests and dev | #3 | ready-for-agent | T-001 |
| [T-004](T-004-legacy-target.md) | Legacy build target for webOS 4 (Chromium 53) | #4 | ready-for-agent | T-001 |
| [T-005](T-005-design-tokens.md) | Design tokens, scaling and fonts | #5 | ready-for-agent | T-001 |
| [T-006](T-006-spatial-nav-keys.md) | Spatial navigation and remote keys | #6 | ready-for-agent | T-001 |
| [T-007](T-007-i18n.md) | i18n: Dict*.kt → JSON converter and I18nCore port | #7 | ready-for-agent | T-001 |
| [T-008](T-008-storage-layer.md) | Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode | #8 | ready-for-agent | T-001 |
| [T-009](T-009-secrets.md) | Secrets at rest: WebCrypto key with plaintext fallback | #9 | ready-for-agent | T-008 |
| [T-010](T-010-app-shell.md) | App shell, screen routing and webOS lifecycle | #10 | ready-for-agent | T-006 |
| [T-011](T-011-components.md) | Shared component library and icons | #11 | ready-for-agent | T-005, T-006 |

## M1 Playback

Playback spike on the 55UR80 and the player engine interface.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-012](T-012-spike-playback.md) | Spike: playback capability matrix on the 55UR80 | #12 | ready-for-human | T-001 |
| [T-013](T-013-player-engine.md) | Player engine interface and implementations | #13 | ready-for-agent | T-012 |
| [T-014](T-014-player-skeleton.md) | Player screen skeleton with basic controls | #14 | ready-for-agent | T-013, T-010 |
| [T-015](T-015-playback-positions.md) | Playback positions and resume | #15 | ready-for-agent | T-014, T-008 |

## M2 Sources

JS service, HTTP layer, playlist store, M3U, Xtream, backup servers, several playlists, add-playlist flow.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-016](T-016-js-service.md) | JS service scaffold and Luna bridge | #16 | ready-for-agent | T-001 |
| [T-017](T-017-http-layer.md) | HTTP layer: browser first, service fallback | #17 | ready-for-agent | T-016 |
| [T-018](T-018-tls-fallback.md) | TLS fallback with consent dialog | #18 | ready-for-agent | T-017 |
| [T-019](T-019-playlist-store.md) | Playlist store and cache | #19 | ready-for-agent | T-008, T-017 |
| [T-020](T-020-m3u-source.md) | M3U parser and M3U URL source | #20 | ready-for-agent | T-019 |
| [T-021](T-021-xtream-source.md) | Xtream source | #21 | ready-for-agent | T-019 |
| [T-022](T-022-host-failover.md) | Xtream backup servers (host failover) | #22 | ready-for-agent | T-021 |
| [T-023](T-023-multi-playlist.md) | Several playlists at once, playlist modes, lazy series | #23 | ready-for-agent | T-020, T-021 |
| [T-024](T-024-add-playlist.md) | Add-playlist screen and playlist management | #24 | ready-for-agent | T-011, T-021 |
| [T-025](T-025-playlist-refresh.md) | Playlist refresh plans and startup loading | #25 | ready-for-agent | T-019 |
| [T-026](T-026-demo-mode.md) | Demo mode (try without a playlist) | #26 | ready-for-agent | T-019 |

## M3 Main UI

Sidebar, header, Home, Live TV, Movies, Series, Detail, Browse, Categories, Search, Favourites, My list, History.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-027](T-027-sidebar.md) | Sidebar and menu rules | #27 | ready-for-agent | T-011, T-010 |
| [T-028](T-028-header.md) | Header bar | #28 | ready-for-agent | T-027 |
| [T-029](T-029-metadata-core.md) | Metadata core: TMDB, OMDb, matching, cache | #29 | ready-for-agent | T-017, T-008 |
| [T-030](T-030-home.md) | Home screen | #30 | ready-for-agent | T-029, T-015, T-027 |
| [T-031](T-031-browse.md) | Movies and Series: browse, categories, filters, automatic genres | #31 | ready-for-agent | T-030, T-023 |
| [T-032](T-032-detail.md) | Detail screen, seasons and episodes | #32 | ready-for-agent | T-031 |
| [T-033](T-033-live-tv.md) | Live TV tab | #33 | ready-for-agent | T-030, T-014 |
| [T-034](T-034-category-management.md) | Category order, hidden, ignored, private and favourite categories | #34 | ready-for-agent | T-031, T-033 |
| [T-035](T-035-library.md) | Favourites, My list and History | #35 | ready-for-agent | T-030 |
| [T-036](T-036-search.md) | Search screen and voice input | #36 | ready-for-agent | T-030 |

## M4 Guide

XMLTV EPG, timeline guide, catch-up, reminders.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-037](T-037-epg-loader.md) | XMLTV EPG loader | #37 | ready-for-agent | T-019, T-017 |
| [T-038](T-038-guide-screen.md) | Timeline TV guide with preview and guide search | #38 | ready-for-agent | T-037, T-033 |
| [T-039](T-039-catchup.md) | Catch-up and archive playback | #39 | ready-for-agent | T-038, T-014 |
| [T-040](T-040-reminders.md) | Reminders: in-app card and webOS toast | #40 | ready-for-agent | T-038, T-016 |

## M5 Full player (v0.1.0)

Player parity: controls, tracks, subtitles, delays, skip intro, next episode, quality fallback, subtitle search. Ends with the first sideload release v0.1.0.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-041](T-041-player-osd.md) | Player controls and OSD parity | #41 | ready-for-agent | T-014 |
| [T-042](T-042-live-player.md) | Live player: zapping, number entry, info banner | #42 | ready-for-agent | T-041, T-033 |
| [T-043](T-043-tracks-subtitles.md) | Audio and subtitle tracks, own subtitle renderer | #43 | ready-for-agent | T-041 |
| [T-044](T-044-skip-next.md) | Skip intro and credits, next episode | #44 | ready-for-agent | T-041, T-032 |
| [T-045](T-045-delays.md) | Subtitle delay and audio delay | #45 | ready-for-agent | T-043, T-012 |
| [T-046](T-046-quality-fallback.md) | Quality choice and fallback to another source | #46 | ready-for-agent | T-042, T-023 |
| [T-047](T-047-subtitle-search.md) | Subtitle search (SubDL, OpenSubtitles) | #47 | ready-for-agent | T-043, T-017 |
| [T-048](T-048-player-tech.md) | Player tech info overlay | #48 | ready-for-agent | T-041 |
| [T-049](T-049-release-v010.md) | Release v0.1.0: release workflow, Homebrew manifest, update card | #49 | ready-for-agent | T-003, T-041, T-042, T-043, T-044, T-045, T-046, T-047, T-048, T-039, T-040, T-034, T-035, T-036, T-024, T-025 |

## M6 Settings

All settings tiles (except Donate), profiles, parental control, themes, Boomer mode, menu and home customisation, calibration.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-050](T-050-settings-hub.md) | Settings hub, tabs and General | #50 | ready-for-agent | T-011 |
| [T-051](T-051-look-settings.md) | Language & region, View, Design and colour | #51 | ready-for-agent | T-050, T-005, T-007 |
| [T-052](T-052-menu-home-settings.md) | Menu and Customise home | #52 | ready-for-agent | T-050, T-030 |
| [T-053](T-053-player-live-settings.md) | Player, Audio & subtitles, Live TV & guide, Genres & categories settings | #53 | ready-for-agent | T-050, T-043, T-038 |
| [T-054](T-054-playlist-settings.md) | Playlists settings | #54 | ready-for-agent | T-050, T-025 |
| [T-055](T-055-profiles.md) | Profiles and "Who's watching?" | #55 | ready-for-agent | T-050, T-008 |
| [T-056](T-056-parental.md) | Parental control | #56 | ready-for-agent | T-050 |
| [T-057](T-057-api-keys.md) | API keys settings and CI fallback keys | #57 | ready-for-agent | T-050, T-029 |
| [T-058](T-058-diagnostics.md) | Diagnostics and crash report | #58 | ready-for-agent | T-050 |
| [T-059](T-059-boomer.md) | Boomer mode | #59 | ready-for-agent | T-050, T-033 |
| [T-060](T-060-about-reset-calibration.md) | About, Reset all, screen-edge calibration, What's new | #60 | ready-for-agent | T-050 |

## M7 Stalker

Stalker / Ministra portals through the JS service.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-061](T-061-stalker-api.md) | Stalker / Ministra API through the JS service | #61 | ready-for-agent | T-017, T-019 |
| [T-062](T-062-stalker-content.md) | Stalker links, live, movies and series | #62 | ready-for-agent | T-061, T-024 |

## M8 Phone remote and backup

Phone remote server and pages, backup v1/v2, Wi-Fi transfer, list import.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-063](T-063-phone-server.md) | Phone remote server in the JS service | #63 | ready-for-agent | T-016 |
| [T-064](T-064-phone-pages.md) | Phone pages and features | #64 | ready-for-agent | T-063, T-024, T-036 |
| [T-065](T-065-backup.md) | Backup v1/v2 export and import | #65 | ready-for-agent | T-008, T-055, T-064 |
| [T-066](T-066-transfer.md) | Wi-Fi transfer between devices | #66 | ready-for-agent | T-065, T-063 |
| [T-067](T-067-list-import.md) | List import: Letterboxd, MyAnimeList, Trakt | #67 | ready-for-agent | T-064 |
| [T-068](T-068-storage-settings.md) | Storage settings tile | #68 | ready-for-agent | T-065, T-066 |

## M9 Extras

Sports hub, trending, cast and crew, trailers, stream info.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-069](T-069-sports-hub.md) | Sports hub | #69 | ready-for-agent | T-017, T-033 |
| [T-070](T-070-trending-cast.md) | Trending, cast and crew pages | #70 | ready-for-agent | T-029, T-032 |
| [T-071](T-071-trailers.md) | Trailers | #71 | ready-for-agent | T-032 |
| [T-072](T-072-stream-info.md) | Stream info on the detail page | #72 | ready-for-agent | T-032, T-017 |

## M10 Google Drive sync

OAuth device flow, Drive backup and live sync, compatible with Android.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-073](T-073-drive-auth.md) | Google sign-in by code (OAuth device flow) | #73 | ready-for-agent | T-017, T-068 |
| [T-074](T-074-drive-sync.md) | Drive backup and live sync | #74 | ready-for-agent | T-073, T-065 |

## M11 Spikes

Live rewind, recording, dual view / multi view: spike first, implement only if proven.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-075](T-075-spike-live-rewind.md) | Spike: live rewind buffer | #75 | ready-for-human | T-013, T-016 |
| [T-076](T-076-spike-recording.md) | Spike: recording to internal storage or USB | #76 | ready-for-human | T-016 |
| [T-077](T-077-spike-dual-view.md) | Spike: dual view and multi view | #77 | ready-for-human | T-012 |
| [T-078](T-078-live-rewind.md) | Live rewind (only if T-075 is go) | #78 | needs-triage | T-075 |
| [T-079](T-079-recording.md) | Recording (only if T-076 is go) | #79 | needs-triage | T-076 |
| [T-080](T-080-dual-view.md) | Dual view and multi view (only if T-077 is go) | #80 | needs-triage | T-077 |

## M12 Parity audit and v1.0.0

Parity audit, emulator compatibility pass, v1.0.0, parity sync process, LG Content Store readiness.

| Task | Title | Issue | Status | Blocked by |
|---|---|---|---|---|
| [T-081](T-081-parity-audit.md) | Parity audit against Android 1.4.8 | #81 | ready-for-human | T-049, T-060, T-062, T-068, T-072, T-074 |
| [T-082](T-082-emulator-pass.md) | webOS 4 and 6 compatibility pass | #82 | ready-for-agent | T-081 |
| [T-083](T-083-parity-sync.md) | Parity sync process for later Android releases | #83 | ready-for-agent | T-007 |
| [T-084](T-084-release-v100.md) | Release v1.0.0 | #84 | ready-for-human | T-081, T-082 |
| [T-085](T-085-content-store.md) | LG Content Store readiness | #85 | ready-for-human | T-084 |
