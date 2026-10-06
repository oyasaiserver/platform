---
title: "Platform Workflows"
category: meta
status: active
owner: platform-maintainers
source_of_truth: "docs/dev/WORKFLOWS.md"
related_paths:
  - docs/_MANIFEST.md
  - docs/dev/guides/ops/deploy.md
last_validated: "2026-06-05"
agent_task: null
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
8. Commit with a Conventional Commit title.
9. Push.
   ```bash
   git push -u origin HEAD
   ```
10. Create the PR.
    ```bash
    gh pr create
    ```

Follow the repository-root `README.md` for current contribution, development,
formatting, and build basics. If a future `CONTRIBUTING.md` exists, follow it
over this workflow.

## Docs Update Workflow

Use when adding, moving, or editing Markdown under `docs/`.

1. Read `docs/_MANIFEST.md`.
2. Read the child `_MANIFEST.md` for the target directory.
3. Place the file according to the target directory rules.
4. Classify unresolved knowledge before writing it:
   - public-safe: the closest `PROJECT.md` or `docs/dev/guides/`;
   - private, local-only, raw, or not yet public-safe: Git-ignored `docs/local/`.
5. Link new Markdown with a relative link from `_MANIFEST.md`, `README.md`, `PROJECT.md`, or an `INDEX.md`, and link related pages to each other.
6. Do not place personal information, secrets, private notes, raw logs, or large temporary outputs in tracked `docs/`.
7. Run `python3 docs/dev/check_links.py`, `nix fmt`, and `git diff --check`.

## Agentic Self-Correction Workflow

Use when the user explicitly corrects an AI agent and the correction should change future behavior.

1. Keep personal knowledge vaults, private note systems, and local workspaces separate from tracked `platform/docs`.
2. Read `docs/dev/guides/ops/agentic-learning-loop/README.md`.
3. Read `docs/dev/guides/ops/agentic-learning-loop/memory-routing.md`.
4. If the correction is reusable, concrete, and public-safe, add or update a short rule in `docs/dev/guides/ops/agentic-learning-loop/corrections.md`.
5. Store only repository-scoped information needed to operate or contribute to this monorepo.
6. Do not store private context, raw chat logs, secrets, personal notes, or local-only server details in tracked docs.
7. If the correction is private or too detailed for public docs, keep the raw note in Git-ignored `docs/local/` and store only a public-safe rule in `docs/`.
8. Do not defer durable agent knowledge with "write it later"; record it during the same task or explain why it was not recorded.
9. Report which learning-loop files were read or written.

## New Project Workflow

Use when adding a new project under `docs/dev/projects/`.

1. Read `docs/dev/projects/_MANIFEST.md`.
2. Choose the category:
   - `minecraft-plugins/`
   - `tools/`
   - `automation/`
   - `web/`
3. Create `docs/dev/projects/<category>/<project>/PROJECT.md`.
4. Include:
   - `source_of_truth`
   - `related_paths`
   - `project_kind`
   - `runtime_kind`
   - `minecraft_related`
5. Add an `AI 作業入口` section.
6. Update `docs/dev/projects/INDEX.md` if it exists or is being maintained for this change.

## Plugin Edit Workflow

Use when editing a Minecraft plugin.

1. Read `docs/dev/projects/INDEX.md` to find the plugin `PROJECT.md`.
2. Read the plugin `PROJECT.md`.
3. Read the implementation under `plugins/<Plugin>/`.
4. Treat `plugins/<Plugin>/src/` as the implementation SOT.
5. Build the target plugin. This must compile Kotlin and produce the plugin jar.
   ```bash
   /nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:<Plugin>:build
   ```
6. If local runtime verification is needed, copy the jar into `local/paperclip-tmp/plugins/`.
7. Reload the plugin or restart the local test server.
8. If stale deploy is possible, verify checksums.

## Local Server Jar Workflow

Use when a rebuilt plugin must be tested in the local test server (`local/paperclip-tmp/`).

```bash
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:<Plugin>:build
cp plugins/<Plugin>/build/libs/<Plugin>.jar local/paperclip-tmp/plugins/<Plugin>.jar
shasum -a 256 plugins/<Plugin>/build/libs/<Plugin>.jar local/paperclip-tmp/plugins/<Plugin>.jar
```

After copying, reload the plugin with PlugManX or restart the server.
See `docs/dev/guides/ops/local-server.md` for start, stop, and troubleshooting steps.

## Reading Budget Rule

Do not read every Markdown file.

Read in this order:

1. `docs/_MANIFEST.md`
2. The relevant workflow or child manifest
3. `docs/dev/projects/INDEX.md` to find the relevant plugin `PROJECT.md`
4. The relevant `PROJECT.md` and the pages it links under つながり
5. The implementation SOT

Read `docs/dev/archive/` only when the task is about old public docs or historical behavior.
