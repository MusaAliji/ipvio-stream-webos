# Preact, TypeScript and Norigin instead of Enact or Lightning

The Android UI is fully custom (Compose without Material), so no TV UI kit gives us its look for free. We use TypeScript, Preact, Norigin spatial navigation and Vite with the legacy plugin: small enough for weak TV CPUs and Chromium 53, with full pixel control.

## Considered options

- **Enact** (LG's React framework with Spotlight): official, but heavier, and its themes would be thrown away anyway.
- **Lightning.js** (canvas/WebGL): fast, but text layout, 12 languages and Arabic right-to-left are painful.
- **Compose Multiplatform for web (Wasm)**: would reuse UI code, but Wasm GC is not available on old webOS Chromium.
- **Vanilla TypeScript**: no framework cost, but we would rebuild component state handling ourselves.
