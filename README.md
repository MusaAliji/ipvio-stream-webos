# IPVIO Stream for webOS

A port of [IPVIO Stream](https://github.com/Emrodev/IPVIO-Stream), the free and open-source IPTV player for Android TV, to LG webOS TVs. The goal is the same app: the same screens, remote keys, languages and features, wherever webOS allows it.

**Status: planning.** Nothing is installable yet. The first sideload release (v0.1.0) is planned after milestone M5.

- Plan and decisions: [`docs/PLAN.md`](docs/PLAN.md)
- What differs from Android and why: [`docs/PARITY.md`](docs/PARITY.md)
- Tasks: [`docs/tasks/README.md`](docs/tasks/README.md) and the [issues](https://github.com/MusaAliji/ipvio-stream-webos/issues) / [milestones](https://github.com/MusaAliji/ipvio-stream-webos/milestones)

## Planned requirements

- LG TV with webOS 4.0 or newer (2018+)
- Developer Mode or Homebrew Channel for sideloading (LG Content Store later)

## Development

Requires Node 22.12+ and the webOS CLI (`npm install -g @webos-tools/cli`) for packaging and installing.

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server for the browser |
| `npm test` | Vitest |
| `npm run lint` | ESLint and the Prettier check |
| `npm run typecheck` | TypeScript without emitting |
| `npm run build` | Type check, then build `dist/` |
| `npm run package` | Build, then `out/com.ipvio.stream.webos_<version>_all.ipk` |
| `npm run deploy` | Package, install and launch on the TV registered as `lgtv` in `ares-setup-device` (another device: `WEBOS_DEVICE=<name>`) |

The icons and splash in `public/` are generated from the Android launcher icon with `pwsh scripts/make-icons.ps1`.

## License

GPL-3.0, like the Android app. See [`LICENSE`](LICENSE).
