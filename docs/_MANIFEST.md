# docs/_MANIFEST.md — Docs Constitution

This file is the constitution for `docs/`.

## Protected File

AI agents must not edit this file unless the user explicitly asks to edit `docs/_MANIFEST.md`.

## Public Boundary

`docs/` is part of the public repository.

Do not place personal information, secrets, tokens, private server details, private notes, raw personal logs, or large temporary outputs in `docs/`.

Use Git-ignored `archive/` or `local/` for personal drafts, local-only backups, and temporary private work.

## First Read

After reading this file, read:

`docs/00_Context/CONTEXT.md`

`CONTEXT.md` owns the repository context, docs structure, and purpose-based routing.

## Source of Truth

Implementation truth lives outside `docs/` unless a project explicitly says otherwise.

- Plugin implementation: `plugins/*/`
- Packages and infrastructure: `packages/*/`, `nix/`, `flake.nix`, `build.gradle.kts`
- Project context and navigation: `docs/01_Projects/<category>/<project>/PROJECT.md`

## Markdown Reachability

Do not create orphan Markdown files.

Every Markdown file must be reachable from one of:

- this manifest
- `docs/README.md`
- `docs/00_Context/CONTEXT.md`
- a child `_MANIFEST.md`
- a `PROJECT.md`
- an `INDEX.md`
