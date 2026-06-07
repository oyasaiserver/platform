# 02_Docs

Cross-cutting public documentation that is not owned by a single project.

## Scope

| Directory | Purpose |
|---|---|
| `ops/` | Build, deploy, server operation, and runbooks |
| `tools/` | Tool references, generated HTML docs, and public tool guides |

## Rules

- Keep project-specific context in `docs/01_Projects/<category>/<project>/PROJECT.md`.
- Keep implementation truth in the implementation path or upstream repository.
- Do not store personal information, secrets, private notes, or raw personal logs here.
- Large temporary or private outputs belong in Git-ignored `archive/` or `local/`.
