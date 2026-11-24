# T-002 Repo conventions: architecture doc, PR and issue templates

**Status:** in review  
**Issue:** #2  
**Milestone:** M0 Scaffold

## What to build

Add `docs/ARCHITECTURE.md` describing the layers (UI, logic, platform adapters, JS service) as built by T-001, linking the planning ADRs 0001–0008 that already exist; a pull request template with the device test section; and issue templates for bug and enhancement that apply `needs-triage`.

## Acceptance criteria

- [x] `docs/ARCHITECTURE.md` matches the scaffold and links ADRs 0001–0008.
- [x] PR template asks for: issue (`Closes #N`), checks run, device test steps on the 55UR80.
- [x] New issues from the templates get `needs-triage` and `bug` or `enhancement`. (Set in the forms; the GitHub check runs after the templates reach `main`, see below.)

## Android reference (1.4.8, pinned to `f4a0360`)

- [`docs/ARCHITECTURE.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/docs/ARCHITECTURE.md)
- [`.github/pull_request_template.md`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/.github/pull_request_template.md)

## Android tests to port

- None.

## Risks

Low.

## Blocked by

- #1 (T-001) Project scaffold: Vite, TypeScript, Preact, packaging

## Test results

Checks run on the development PC (Windows 11):

- `npx eslint .`: pass.
- `npx prettier --check --end-of-line auto .`: pass. Plain `npm run lint` fails on this clone because `core.autocrlf=true` checked the T-001 files out with CRLF while Prettier expects LF; the files are LF in git, so CI and LF clones are not affected. Not caused by this task (see `WORK_STATE.md`).
- `npm run typecheck`: pass.
- `npm test`: 2 files, 7 tests pass (no code changed).
- `npm run build` and `npm run package`: pass, `out/com.ipvio.stream.webos_0.0.1_all.ipk`.

What was added:

- `docs/ARCHITECTURE.md`: context, the four web app layers (UI, data and player, logic, platform adapters) plus the JS service with their import rules, repository layout with built / planned status per folder, build and packaging as done by T-001 (IIFE + classic script, `file://`, `appinfo.json`), runtime, testing, data compatibility, ADRs 0001–0008 (status only where the ADR file states one), open points. Checked against the scaffold: file list, `vite.config.ts`, `tsconfig.json`, `appinfo.json`, icon sizes, scripts.
- `.github/pull_request_template.md`: `Closes #`, checks run, docs checklist, approval items (CLAUDE.md sections 4–6), target `dev`, and at the end (CLAUDE.md section 3) the device test steps on the 55UR80 with result and who ran it.
- `.github/ISSUE_TEMPLATE/bug.yml` and `enhancement.yml`: issue forms with `labels: [bug, needs-triage]` and `[enhancement, needs-triage]`; both ask whether the Android app 1.4.8 behaves the same / has the feature. Blank issues stay allowed, so task issues created with `gh issue create --body` are unaffected.

Notes for review:

- For the maintainer: the issue names four layers (UI, logic, platform adapters, JS service), but the `docs/PLAN.md` outline also has `src/data/` and `src/player/`. The doc groups them as one "data and player" layer between UI and logic / platform adapters, with its own import rules. If that grouping should be different, it is a one-section change. The import rules are checked in review only; a lint rule would be a build change and needs approval.
- GitHub reads issue and PR templates from the default branch, so they take effect only after the next merge of `dev` into `main`.

**Device test on the 55UR80:** not applicable (no app change). GitHub check, after the templates reach `main`:

1. New issue on GitHub: the chooser offers "Bug report" and "Enhancement".
2. Submit a test bug: it gets `bug` and `needs-triage`. Submit a test enhancement: it gets `enhancement` and `needs-triage`. Close both.
3. Open a PR: the body is prefilled with the template.
