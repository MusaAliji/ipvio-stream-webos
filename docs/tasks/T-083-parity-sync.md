# T-083 Parity sync process for later Android releases

**Status:** ready-for-agent  
**Issue:** #83  
**Milestone:** M12 Parity audit and v1.0.0

## What to build

Document and script the sync: diff the Android CHANGELOG and `Dict*.kt` since the last synced commit, re-run the dictionary converter, and open one task per Android change.

## Acceptance criteria

- [ ] `docs/PARITY-SYNC.md` and a script exist; a dry run against the current Android `dev` lists the changes since 1.4.8.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`CHANGELOG.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/CHANGELOG.md)
- `app/src/main/java/com/ipvio/stream/Dict*.kt`

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #7 (T-007) i18n: Dict*.kt → JSON converter and I18nCore port

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
