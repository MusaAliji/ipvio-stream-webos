# T-002 Repo conventions: architecture doc, PR and issue templates

**Status:** ready-for-agent  
**Issue:** #2  
**Milestone:** M0 Scaffold

## What to build

Add `docs/ARCHITECTURE.md` describing the layers (UI, logic, platform adapters, JS service) as built by T-001, linking the planning ADRs 0001–0008 that already exist; a pull request template with the device test section; and issue templates for bug and enhancement that apply `needs-triage`.

## Acceptance criteria

- [ ] `docs/ARCHITECTURE.md` matches the scaffold and links ADRs 0001–0008.
- [ ] PR template asks for: issue (`Closes #N`), checks run, device test steps on the 55UR80.
- [ ] New issues from the templates get `needs-triage` and `bug` or `enhancement`.

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

_Filled in by the PR: checks run, device test on the 55UR80._
