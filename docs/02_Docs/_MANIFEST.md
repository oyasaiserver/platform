# 02_Docs

Cross-cutting public documentation that is not owned by a single project.

## Scope

| Directory | Purpose |
|---|---|
| `ops/` | Build, deploy, server operation, and runbooks |
| [`ops/deploy.md`](ops/deploy.md) | Deployment operations and server publish references |
| [`ops/local-server.md`](ops/local-server.md) | Local Paper test server runbook |
| [`ops/agent-footprint-logging/`](ops/agent-footprint-logging/README.md) | Local-only AI agent footprint logging setup |
| [`ops/agentic-learning-loop/`](ops/agentic-learning-loop/README.md) | Public-safe AI self-correction loop and durable behavior corrections |
| [`ops/agentic-learning-loop/memory-routing.md`](ops/agentic-learning-loop/memory-routing.md) | Routing rules for public docs vs local-only Cogito-style memory |
| `tools/` | Tool references, generated HTML docs, and public tool guides |

## Rules

- Keep project-specific context in `docs/01_Projects/<category>/<project>/PROJECT.md`.
- Keep implementation truth in the implementation path or upstream repository.
- Do not store personal information, secrets, private notes, or raw personal logs here.
- Large temporary or private outputs belong in Git-ignored `archive/` or `local/`.
