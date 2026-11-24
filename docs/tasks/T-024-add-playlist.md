# T-024 Add-playlist screen and playlist management

**Status:** ready-for-agent  
**Issue:** #24  
**Milestone:** M2 Sources

## What to build

Port the add-playlist screen and flow (M3U URL, Xtream login, Stalker later), the edit window, playlist management logic and the webOS virtual keyboard handling. The phone remote shortcut is added in M8.

## Acceptance criteria

- [ ] Add, edit, delete and switch playlists on the TV.
- [ ] The system keyboard opens on text fields and closes on Back.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`AddPlaylistScreen.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AddPlaylistScreen.kt)
- [`AddFlowLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/AddFlowLogic.kt)
- [`PlaylistEditDialog.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistEditDialog.kt)
- [`PlaylistManageLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PlaylistManageLogic.kt)

## Android tests to port

- [`AddFlowLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/AddFlowLogicTest.kt)
- [`PlaylistManageLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PlaylistManageLogicTest.kt)

## Risks

Low.

## Blocked by

- #11 (T-011) Shared component library and icons
- #21 (T-021) Xtream source

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
