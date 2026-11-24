# T-009 Secrets at rest: WebCrypto key with plaintext fallback

**Status:** ready-for-agent  
**Issue:** #9  
**Milestone:** M0 Scaffold

## What to build

Port `Secrets.kt`: playlists stored as `v1:iv:ct` (AES-GCM) under `ipvio/lists_enc`, with a non-extractable WebCrypto key kept in IndexedDB. If `crypto.subtle` is missing (insecure context or old Chromium), fall back to `lists` in plaintext like Android without a keystore, and record that in Diagnostics.

## Acceptance criteria

- [ ] Encrypt/decrypt round trip on the 55UR80.
- [ ] Fallback path tested in the webOS 4 emulator.
- [ ] Nothing secret is logged.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`Secrets.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/Secrets.kt)

## Android tests to port

- None.

## Risks

Medium: `crypto.subtle` availability on `file://` must be verified on device.

## Blocked by

- #8 (T-008) Storage layer: SharedPreferences mirror, IndexedDB, Java hashCode

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
