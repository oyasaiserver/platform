# guides

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
| [`tools/citiesskymine-user-guide.md`](tools/citiesskymine-user-guide.md) | CitiesSkyMine user guide (Discord post source) |
| [`tools/citiesskymine-admin-guide.md`](tools/citiesskymine-admin-guide.md) | CitiesSkyMine admin guide (Discord post source) |
| [`tools/sociallikes-dialog-text-graph.md`](tools/sociallikes-dialog-text-graph.md) | SocialLikes3 dialog text graph and SLData archive notes |
| [`tools/oyasai-menu-editors-doc/`](tools/oyasai-menu-editors-doc/index.html) | OyasaiMenu editor reference (HTML) |

## Rules

- Keep project-specific context in `docs/dev/projects/<category>/<project>/PROJECT.md`.
- Keep implementation truth in the implementation path or upstream repository.
- Do not store personal information, secrets, private notes, or raw personal logs here.
- Large temporary or private outputs belong in Git-ignored `archive/` or `local/`.
