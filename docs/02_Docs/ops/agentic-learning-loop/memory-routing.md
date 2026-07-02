---
title: "Agent Memory Routing"
category: ops
status: active
owner: platform-maintainers
source_of_truth: "docs/02_Docs/ops/agentic-learning-loop/memory-routing.md"
related_paths:
  - docs/02_Docs/ops/agentic-learning-loop/README.md
  - docs/02_Docs/ops/agentic-learning-loop/corrections.md
  - docs/99_Inbox/_MANIFEST.md
last_validated: "2026-07-02"
agent_task: "Use when deciding where agent knowledge, decisions, project state, or preferences should be stored."
---

# Agent Memory Routing

This file maps a Cogito-style memory structure onto `platform` without copying
private local context into the public repository.

## Rule

Classify a note before writing it.

| Type | Public-safe platform location | Local-only location |
|---|---|---|
| Technical knowledge | `docs/02_Docs/ops/` or the relevant `docs/01_Projects/<category>/<project>/PROJECT.md` | `docs/local/cogito/Knowledge/` |
| Behavior corrections | `docs/02_Docs/ops/agentic-learning-loop/corrections.md` | `docs/local/cogito/Knowledge/` for raw/private incident notes |
| Design decisions | The relevant `PROJECT.md`, spec, or workflow doc | `docs/local/cogito/Decisions/` |
| Project state | `docs/01_Projects/<category>/<project>/PROJECT.md` | `docs/local/cogito/Projects/` |
| User preferences | Do not store personal preferences in tracked `docs/` unless they are public contributor guidance | `docs/local/cogito/Preferences/` |
| Public but unsorted knowledge | `docs/99_Inbox/` | `docs/local/inbox/` when public safety is unclear |
| Raw logs or transcripts | Do not store in tracked `docs/` | `docs/local/raw-logs/`, `docs/local/incidents/`, or `local/agent-footprints/` |

## Public vs Local

Use tracked `docs/` only when the content is all of the following:

- public-safe;
- useful to future `platform` contributors or agents;
- scoped to this repository;
- short enough to act as durable guidance instead of raw history.

Use Git-ignored `docs/local/` when the content is any of the following:

- personal;
- private;
- too detailed for public docs;
- tied to a single local machine or private runtime;
- a raw note that still needs summarizing before becoming a public rule.

Use `docs/99_Inbox/` only when the content is public-safe but does not yet fit
the project, ops, output, resource, or archive directories.

## Local Workspace

`docs/local/` is the local-only memory area for `docs/`. It is ignored by Git
through the repository `local` ignore rule.

If `docs/local/` does not exist, agents may create it when they need a
Git-ignored place for local-only notes, private scratch, raw logs, unresolved
context, or Cogito-style working memory.

Suggested structure:

```text
docs/local/
  inbox/
  cogito/
    Knowledge/
    Decisions/
    Projects/
    Preferences/
  incidents/
  raw-logs/
  server-notes/
```

Do not require `docs/local/` to exist for normal public docs work. Do not place
tracked documentation inside `docs/local/`; describe its usage from tracked docs
such as this file.

## Start Here

When an agent needs project memory:

1. Read `docs/_MANIFEST.md`.
2. Read `docs/00_Context/CONTEXT.md`.
3. Read this file.
4. If the topic is project-specific, read the matching `PROJECT.md`.
5. If the topic may involve local-only context, inspect `docs/local/README.md`
   when it exists on the current machine.

Do not require `docs/local/` to exist for public repository work. It is a
developer-local memory area and is intentionally not tracked by Git.

## Write Timing

Do not say "write it later" for durable agent knowledge. When a correction,
decision, or reusable discovery meets the criteria above, record it during the
same task or explain why it was not recorded.

When reading from or writing to this memory system, report the relevant files to
the user. Keep the report short and avoid exposing private local note contents.
