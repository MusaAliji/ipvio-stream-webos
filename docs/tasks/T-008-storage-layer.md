# T-008 Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode

**Status:** ready-for-agent  
**Issue:** #8  
**Milestone:** M0 Scaffold

## What to build

Implement `Prefs` that mirrors each Android SharedPreferences file as a localStorage namespace with the same file names and keys and typed values (string, bool, int, long, float, string set). Profile N uses the suffix `_p<N>`, profile 0 the plain name. Add an IndexedDB store for large data (playlist cache, EPG, metadata). Port Java `String.hashCode()` exactly (item IDs, series `s_` prefix).

## Acceptance criteria

- [ ] `javaHashCode` equals Kotlin results for ASCII, Unicode, emoji and long URLs (golden table generated from Kotlin).
- [ ] Prefs round-trip all value types; the string-set type matches the backup tag `t`.
- [ ] Quota errors are caught and reported, never crash.
- [ ] Profile suffix rules equal `Profiles.kt`.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Store.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Store.kt)
- [`Profiles.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Profiles.kt) (name scoping)
- [`Backup.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Backup.kt) (NAMES and type tags)
- [`Models.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Models.kt) (item ids)

## Android tests to port

- [`CoreLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/CoreLogicTest.kt) (where it covers ids)

## Risks

Medium: any mismatch here breaks backup and Drive compatibility later.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
