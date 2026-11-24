# T-057 API keys settings and CI fallback keys

**Status:** ready-for-agent  
**Issue:** #57  
**Milestone:** M6 Settings

## What to build

Port the API keys tile (TMDB, OMDb, subtitles) and inject optional fallback keys from CI secrets at build time.

## Acceptance criteria

- [ ] Keys entered on the TV override fallbacks.
- [ ] No key is in the repository.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Config.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Config.kt)
- [`Secrets.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Secrets.kt)
- [`secrets.properties.example`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/secrets.properties.example)
- [`app/build.gradle.kts`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/build.gradle.kts) (buildConfigField)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #50 (T-050) Settings hub, tabs and General
- #29 (T-029) Metadata core: TMDB, OMDb, matching, cache

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
