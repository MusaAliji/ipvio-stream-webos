# T-069 Sports hub

**Status:** ready-for-agent  
**Issue:** #69  
**Milestone:** M9 Extras

## What to build

Port the sports hub: ESPN data (through the service if CORS blocks), on now and coming up, tables, league and match pages, channels for a match, in-app alerts, settings and prefs (`ipvio_sportfavs`, `ipvio_sportleagues`, `ipvio_sporthub`).

## Acceptance criteria

- [ ] Matches Android screenshots.
- [ ] Ported tests pass.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`SportHub.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportHub.kt)
- [`SportTab.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportTab.kt)
- [`SportData.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportData.kt)
- [`SportLeague.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportLeague.kt)
- [`SportMatch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportMatch.kt)
- [`SportTable.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportTable.kt)
- [`SportWatch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportWatch.kt)
- [`SportAlerts.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportAlerts.kt)
- [`SportSettings.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportSettings.kt)
- [`SportHubPrefs.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportHubPrefs.kt)
- [`SportLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportLogic.kt)
- [`SportHubLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportHubLogic.kt)
- [`SportUi.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/SportUi.kt)

## Android tests to port

- [`SportHubLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/SportHubLogicTest.kt)

## Risks

Medium.

## Blocked by

- #17 (T-017) HTTP layer: browser first, service fallback
- #33 (T-033) Live TV tab

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
