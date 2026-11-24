## What and why

Closes #

<!-- One task, one problem (CLAUDE.md section 2). Task file: docs/tasks/T-xxx-<slug>.md. Say what changed and why, and anything a reviewer should look at first. -->

## Checks run

<!-- Tick only what you ran. For anything not run, say why. -->

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm test` (files / tests: )
- [ ] `npm run build`
- [ ] `npm run package` (`.ipk` built)
- [ ] Android tests ported for this task pass with their expected values unchanged, or the task has none

## Device test on the 55UR80

<!-- Concrete steps on the LG 55UR80003LJ (webOS 23, `lgtv`), each with the expected result. A device test counts as passed only when it ran on the TV (CLAUDE.md section 3). -->

1. `npm run deploy`
2.
3. Expected:

Result: <!-- passed / failed / not run yet (why) -->, run by <!-- name -->

## Docs

- [ ] Task file: status and test results
- [ ] `CHANGELOG.md`
- [ ] `docs/PARITY.md`, if behaviour differs from Android 1.4.8 (needs approval)
- [ ] `docs/ARCHITECTURE.md` or an ADR, if the structure or a decision changed
- [ ] `docs/tasks/WORK_STATE.md`

## Needs approval

<!-- CLAUDE.md sections 5 and 6: storage format, dependencies, build or CI, a removed or degraded feature, secrets, phone remote, JS service network exposure, new UI strings. List each item, or write "none". -->

none

## Target

- [ ] Target branch is `dev`. Only the release merge `dev` → `main` targets `main`.
