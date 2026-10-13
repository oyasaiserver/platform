---
date: 2026-10-12
record_type: reference
---

# Platform Workflows

Shared procedures for any AI agent working in this repository.

Treat this file like a shared skill: follow the relevant workflow, skip unrelated sections, and report any skipped validation.

## PR Workflow

Use when the task asks for a branch, commit, push, or pull request.

1. Inspect state.
   ```bash
   git status --short --branch
   git remote -v
   git branch --show-current
   ```
2. Refresh remotes.
   ```bash
   git fetch origin --prune
   ```
3. If on `master`, `main`, or another protected branch, create a feature branch.
   ```bash
   git switch -c codex/<topic>
   ```
4. Make the requested changes. Do not include unrelated dirty files.
   Record what you learned in `docs/` as you go (see `docs/Home.md`
   "記憶の残し方"); those docs edits belong in this same PR.
5. Format.
   ```bash
   /nix/var/nix/profiles/default/bin/nix fmt
   ```
6. Run task-appropriate validation.
7. Check the diff.
   ```bash
   git diff --check
   git status --short
   ```
8. Before committing, check that reusable findings, decisions, and corrections
   from this task are in `docs/`. If nothing was worth keeping, say so in the
   report.
9. Commit with a Conventional Commit title.
10. Push.
    ```bash
    git push -u origin HEAD
    ```
11. Create the PR.
    ```bash
    gh pr create
    ```

Follow the repository-root `README.md` for current contribution, development,
formatting, and build basics. If a future `CONTRIBUTING.md` exists, follow it
over this workflow.

Notes on master protection (checked 2026-10-13):

- `master` takes changes only through a PR, and the ruleset allows squash merge only.
- Required checks include `pr-title` (a Conventional Commit prefix such as `docs:`),
  `nocommit`, the `nix-*` checks, and `merging-into-master` (the PR base must be `master`).
- `docs/` is excluded from the mdformat step of `nix fmt`, so docs edits are not rewritten.
- CODEOWNERS has no owner for `/docs`. A docs-only PR needs no code-owner review;
  changes outside `docs/` fall under the default owner.

## New Project Workflow

Use when adding a new project under `docs/Projects/`.

1. Create `docs/Projects/<project>/PROJECT.md`.
2. Include:
   - `source_of_truth`
   - `related_paths`
   - `project_kind`
   - `runtime_kind`
   - `minecraft_related`
3. Add an `AI 作業入口` section: implementation SOT, key files, build/test/run entrypoints, related projects.
4. For a plugin, also add `player.md` and `operator.md` (see `docs/Home.md` "置き場所"; model: `docs/Projects/oyasai-lwc/`).

## Plugin Edit Workflow

Use when editing a Minecraft plugin.

1. Read `docs/Projects/<project>/PROJECT.md` for the plugin.
2. Read the implementation under `plugins/<Plugin>/`.
   If the change alters behavior, update `player.md` / `operator.md` / the PROJECT.md spec in the same PR.
3. Treat `plugins/<Plugin>/src/` as the implementation SOT.
4. Build the target plugin. This must compile Kotlin and produce the plugin jar.
   ```bash
   /nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:<Plugin>:build
   ```
5. If local runtime verification is needed, copy the jar into `local/paperclip-tmp/plugins/`.
6. Reload the plugin or restart the local test server.
7. If stale deploy is possible, verify checksums.

## Local Server Jar Workflow

Use when a rebuilt plugin must be tested in the local test server (`local/paperclip-tmp/`).

```bash
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:<Plugin>:build
cp plugins/<Plugin>/build/libs/<Plugin>.jar local/paperclip-tmp/plugins/<Plugin>.jar
shasum -a 256 plugins/<Plugin>/build/libs/<Plugin>.jar local/paperclip-tmp/plugins/<Plugin>.jar
```

After copying, reload the plugin with PlugManX or restart the server.
See `docs/Knowledge/local-server.md` for start, stop, and troubleshooting steps.
