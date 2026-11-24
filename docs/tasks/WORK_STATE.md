# Work state

- **Current task:** T-001 Project scaffold (#1), branch `feat/T-001-project-scaffold`, PR open into `dev`.
- **Done:** Vite 8 + TypeScript 6 + Preact 10 scaffold with a hello screen; `public/appinfo.json`; icons and splash generated from the Android launcher icon (`scripts/make-icons.ps1`); ESLint 10 flat config + Prettier; Vitest; `npm run package` / `npm run deploy` (`scripts/package.mjs`, `scripts/deploy.mjs`, shared `scripts/ipk.mjs`); build plugin `scripts/classic-script.ts` so the bundle loads from `file://`.
- **Changed files:** `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `eslint.config.js`, `.prettierrc.json`, `.prettierignore`, `.gitignore`, `src/`, `public/`, `scripts/`, `README.md`, `CHANGELOG.md`, `docs/tasks/T-001-project-scaffold.md`.
- **Test results:** lint, typecheck, Vitest (7 tests in 2 files), build and package pass on the PC; hello screen renders from `file://` in headless Chrome. Device test on the 55UR80 passed (run by the maintainer).
- **Open problems:**
  - Build target is Vite's default (modern Chromium); ES5 output and polyfills for webOS 4 are T-004. The IIFE output and `classic-script` plugin may be replaced by `@vitejs/plugin-legacy` there.
  - TypeScript stays on 6.0 because typescript-eslint 8 supports `<6.1`; Preact stays on 10 (11 is new and targets newer browsers).
  - Prettier ignores Markdown so the planning docs keep their formatting.
- **Next step:** merge of the T-001 PR; then T-002 / T-003 / T-004.
