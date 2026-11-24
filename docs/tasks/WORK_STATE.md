# Work state

- **Current task:** T-002 Repo conventions (#2), branch `docs/T-002-repo-conventions` from `dev`.
- **Done:** `docs/ARCHITECTURE.md` (layers and import rules, layout with built / planned status, build and packaging as in T-001, runtime, testing, data compatibility, ADR 0001–0008 index); `.github/pull_request_template.md`; issue forms `.github/ISSUE_TEMPLATE/bug.yml` and `enhancement.yml` (labels `bug` / `enhancement` + `needs-triage`); README link; CHANGELOG; task file with test results.
- **Changed files:** `docs/ARCHITECTURE.md`, `.github/pull_request_template.md`, `.github/ISSUE_TEMPLATE/bug.yml`, `.github/ISSUE_TEMPLATE/enhancement.yml`, `README.md`, `CHANGELOG.md`, `docs/tasks/T-002-repo-conventions.md`, `docs/tasks/WORK_STATE.md`.
- **Test results:** `eslint .`, `prettier --check --end-of-line auto .`, typecheck, Vitest (7 tests in 2 files), build and package pass on the PC. No app change, so no device test. The templates can be checked on GitHub only after they reach `main` (GitHub reads them from the default branch).
- **Open problems:**
  - This clone has `core.autocrlf=true` and no `.gitattributes`, so files are checked out with CRLF and `npm run lint` (Prettier, `endOfLine: lf`) fails locally although the files in git are LF. Suggested fix, needs approval as a repo config change: a `.gitattributes` with `* text=auto eol=lf` (could go with T-003, CI).
  - From T-001: build target for webOS 4 is T-004; TypeScript stays on 6.0 for typescript-eslint; Prettier ignores Markdown.
  - The layer import rules in `docs/ARCHITECTURE.md` are review-only; a lint rule would need approval.
- **Next step:** PR into `dev` for T-002; then T-003 / T-004.
