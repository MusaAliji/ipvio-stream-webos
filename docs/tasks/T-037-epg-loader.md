# T-037 XMLTV EPG loader

**Status:** ready-for-agent  
**Issue:** #37  
**Milestone:** M4 Guide

## What to build

Port the EPG loader: XMLTV (also `xmltv.php`), gzip via `DecompressionStream` or pako, streaming SAX parsing in the app or the JS service, storage in IndexedDB with a memory bound, now/next lookup.

## Acceptance criteria

- [ ] A 100 MB guide loads on the 55UR80 without crashing; memory documented.
- [ ] Now/next equals Android for the same guide.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Epg.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Epg.kt)
- [`EpgFull.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/EpgFull.kt)

## Android tests to port

- None.

## Risks

High: memory and parse time on TVs.

## Blocked by

- #19 (T-019) Playlist store and cache
- #17 (T-017) HTTP layer: browser first, service fallback

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
