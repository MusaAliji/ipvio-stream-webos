# Parity with Android IPVIO Stream 1.4.8

Reference: Android IPVIO Stream 1.4.8, commit `f4a0360`. Everything not listed here is ported as on Android. An entry here needs the maintainer's approval (CLAUDE.md section 6).

Status values: **removed** (not on webOS), **replaced** (same need, different mechanism), **partial** (works in some cases), **pending** (decided by a spike).

| Feature | Android files | Status | Reason | Task |
|---|---|---|---|---|
| VPN (WireGuard) | `AppVpn.kt`, `VpnSettings.kt`, `VpnLogic.kt` | removed | A web app has no tunnel or VpnService API. | – |
| Custom DNS server (plain / DoH) | `AppDns.kt`, `DnsLogic.kt` | removed | The browser uses the system resolver; it cannot be replaced. | – |
| Autostart at boot | `BootReceiver` (manifest) | removed | Not available to webOS apps. | – |
| Clipboard paste | `AddPlaylistScreen.kt`, `SettingsHub.kt` | replaced | No clipboard on the TV; use the phone remote quick setup and key paste. | T-064 |
| Donate screen | `Donate.kt` | removed | Maintainer decision (not a platform limit). | – |
| In-app updater (APK download and install) | `AppUpdate.kt`, `UpdateVerify.kt`, `UpdatePrompt.kt` | replaced | webOS apps update through Homebrew Channel or the store. A "new version available" card points there. | T-049 |
| Reminders | `Live.kt`, `ReminderReceiver` | replaced | In-app reminder card plus a webOS toast. Nothing fires while the app is closed (no AlarmManager). | T-040 |
| Background playlist refresh | `Updater.kt` (WorkManager) | replaced | Refresh on app start and while the app is open. | T-025 |
| Voice search | `VoiceSearch.kt` | replaced | The system keyboard's microphone instead of SpeechRecognizer. | T-036 |
| TLS fallback detection | `TlsFallback.kt` | replaced | A browser cannot tell a hostname mismatch from other failures; the consent dialog is offered when an https request fails. | T-018 |
| Frame-rate matching | `PlayerScreen.kt` | replaced | Left to the TV's own picture settings. | – |
| FFmpeg software audio decoder | `SoftAudio.kt` | replaced | The TV decodes AC3 / E-AC3 / DTS in hardware (verified in T-012). | T-012 |
| Audio delay | `PlayerSync.kt` | partial | Works for streams played through MSE (hls.js, mpegts.js) via the audio buffer `timestampOffset`; natively played streams show a hint to the TV's AV sync setting. | T-045 |
| Stream info on the detail page | `MediaProbe.kt`, `MediaProbeLogic.kt` | partial | No Media3 `MetadataRetriever`; rebuilt from HLS playlists and MP4 / MKV / TS headers. Other formats show provider data only. | T-072 |
| Playlist secrets at rest | `Secrets.kt` | partial | WebCrypto key in IndexedDB; plaintext fallback where `crypto.subtle` is missing (same as Android without a keystore). Keystore-encrypted values never move between devices; v2 backups do. | T-009 |
| M3U from a local file | `ImportFiles.kt` | replaced | The file is sent from the phone remote. | T-064 |
| Live rewind buffer | `LiveTap.kt`, `TapLogic.kt`, `LiveTimeshift.kt` | pending | Needs the JS service to write chunks to storage. | T-075, T-078 |
| Recording to internal storage / USB | `Recorder.kt` | pending | Needs the JS service to write files; USB access unverified. | T-076, T-079 |
| Dual view / multi view | `DualView.kt`, `MultiView.kt` | pending | TVs usually have one hardware video decoder. | T-077, T-080 |
| Process restart | `RestartActivity` | replaced | `location.reload()`. | T-010 |

Settings entries for removed features (VPN, DNS, Donate) are hidden. Their preference keys are still accepted in backups and ignored, so Android backups restore without errors.
