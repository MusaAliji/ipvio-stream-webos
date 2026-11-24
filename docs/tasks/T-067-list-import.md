# T-067 List import: Letterboxd, MyAnimeList, Trakt

**Status:** ready-for-agent  
**Issue:** #67  
**Milestone:** M8 Phone remote and backup

## What to build

Port list import (Letterboxd ZIP / CSV, MAL XML, Trakt JSON) and sublists.

## Acceptance criteria

- [ ] Each format imports via the phone.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`ListImport.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ListImport.kt)
- [`ListImportApply.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ListImportApply.kt)
- [`ListImportUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/ListImportUi.kt)
- [`SublistLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SublistLogic.kt)
- [`SublistStore.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SublistStore.kt)

## Android tests to port

- [`SublistLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SublistLogicTest.kt)
- [`SublistStoreTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SublistStoreTest.kt)

## Risks

Low.

## Blocked by

- #64 (T-064) Phone pages and features

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
