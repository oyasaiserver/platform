---
title: "CitiesSkyMine Specs"
category: specification
status: active
owner: marzipan99
source_of_truth: "docs/01_Projects/minecraft-plugins/citiesskymine/specs/_MANIFEST.md"
related_paths:
  - docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md
  - plugins/CitiesSkyMine/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-17"
agent_task: null
---

# CitiesSkyMine Specs

This directory contains public specifications and implementation conventions for CitiesSkyMine.

## Read Order

For CitiesSkyMine work, read:

1. `docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md`
2. This file
3. The task-relevant spec below
4. `plugins/CitiesSkyMine/` implementation files

## Specs

| File | Purpose | When to read |
|---|---|---|
| `command-conventions.md` | Command namespace, shortcuts, arguments, tab completion, access, and generation safety rules | Before adding or changing commands |
| `implementation-conventions.md` | Internal implementation patterns: FAWE, preview tasks, session management, build flow, command class structure | Before implementing or modifying features |
| `best-practices.md` | Lessons learned from real bugs and design decisions (recommendations, not rules) | When making design decisions or reviewing edge cases |
| `column-layout-assistant.md` | Column layout assistant design note | When changing `/csm columns` behavior |
| `canvas-branch-management.md` | Canvas branch / merge design note | When discussing branch-style world editing |

## Task-Based Reading Guide

Read only the documents relevant to your task:

| Task type | Read these |
|---|---|
| Add a new command domain | `command-conventions.md` → `implementation-conventions.md` |
| Fix a bug in an existing command | `implementation-conventions.md` → `best-practices.md` |
| Change command arguments or permissions | `command-conventions.md` |
| Modify FAWE/WorldEdit integration | `implementation-conventions.md` (sections 2, 3) |
| Add or change config keys | `implementation-conventions.md` (section 5) → `best-practices.md` (Config section) |
| Review or audit | All three conventions documents |

## Frontmatter Policy

Use frontmatter as routing metadata, not as prose.

Required for project entrypoints and specs:

- `title`
- `category`
- `status`
- `owner`
- `source_of_truth`
- `related_paths`
- `project_kind`
- `runtime_kind`
- `minecraft_related`

Optional fields such as `last_validated` and `agent_task` are useful when they affect agent behavior or freshness. Do not add private information, secrets, or local-only details to frontmatter.
