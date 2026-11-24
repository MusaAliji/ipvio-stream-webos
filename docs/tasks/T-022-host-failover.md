# T-022 Xtream backup servers (host failover)

**Status:** ready-for-agent  
**Issue:** #22  
**Milestone:** M2 Sources

## What to build

Port backup server handling: ordered hosts per playlist, failover on errors, login sent to backup servers (privacy note as in README).

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Failover visible in Diagnostics.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`HostFailover.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/HostFailover.kt)

## Android tests to port

- [`HostFailoverLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/HostFailoverLogicTest.kt)

## Risks

Low.

## Blocked by

- #21 (T-021) Xtream source

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
