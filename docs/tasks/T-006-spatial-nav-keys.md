# T-006 Spatial navigation and remote keys

**Status:** ready-for-agent  
**Issue:** #6  
**Milestone:** M0 Scaffold

## What to build

Integrate Norigin spatial navigation and port the key handling: arrows, OK, long OK (about 0.35 s) opens the card menu, Back (461), Menu key, digits 0–9, color keys (red 403 etc.), media keys (play/pause/stop/ff/rw), channel up/down. Focus visuals follow `FocusCompat.kt` and the focus border token.

## Acceptance criteria

- [ ] A key test screen shows every key from the LG Magic Remote and the standard remote.
- [ ] Long OK fires after ~0.35 s; a short OK still activates.
- [ ] Back never exits the app without the exit flow of T-010.
- [ ] Pointer (Magic Remote cursor) hover moves focus.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Keys.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Keys.kt)
- [`FocusCompat.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/FocusCompat.kt)
- [`Components.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Components.kt) (focus handling)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
