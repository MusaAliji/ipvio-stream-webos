# Work state

- **Current task:** T-003 CI build (#3), branch `feat/T-003-ci-build` from `dev`, PR #89 into `dev`.
- **Done:** `.github/workflows/build.yml` (PRs into and pushes to `dev` / `main`, plus manual runs; Node 24, `npm ci`, webOS CLI 3.2.6, lint, Vitest, `npm run package`, `.ipk` artifact `ipvio-stream-webos-ipk`; actions pinned to SHAs, read-only permissions); `@emnapi/core` and `@emnapi/runtime` 2.0.0-beta.2 as dev dependencies (maintainer chose this over hand-edited lock entries) so `npm ci` on Linux accepts the lockfile written on Windows; `docs/ARCHITECTURE.md` CI line; CHANGELOG; task file with test results.
- **Changed files:** `.github/workflows/build.yml`, `package.json`, `package-lock.json`, `docs/ARCHITECTURE.md`, `CHANGELOG.md`, `docs/tasks/T-003-ci-build.md`, `docs/tasks/WORK_STATE.md`.
- **Test results:** workflow green on PR #89 (run 45488735732); `.ipk` artifact downloaded and checked. On the PC: ESLint, typecheck, Vitest (7 tests in 2 files), package pass. No app change, so no device test.
- **Open problems (need the maintainer):**
  - **`engines` is too low.** `package.json` says Node `>=22.12.0`, but ESLint 10's deps need `^22.13 || >=24`, and npm 10 (Node 22) rejects the npm 11 lockfile. CI uses Node 24. Suggest `>=24` or `^22.13.0 || >=24` (and npm 11).
  - From T-002: `core.autocrlf=true` without `.gitattributes` makes `npm run lint` fail locally (CRLF checkout); CI is not affected. Suggested fix: `.gitattributes` with `* text=auto eol=lf` (repo config change, approval).
  - From T-001: build target for webOS 4 is T-004; TypeScript stays on 6.0 for typescript-eslint; Prettier ignores Markdown.
- **Next step:** review and merge of PR #89; then T-004.
