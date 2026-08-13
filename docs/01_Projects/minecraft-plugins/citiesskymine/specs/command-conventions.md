---
title: "CitiesSkyMine Command Conventions"
category: specification
status: active
owner: marzipan99
source_of_truth: "docs/01_Projects/minecraft-plugins/citiesskymine/specs/command-conventions.md"
related_paths:
  - docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md
  - docs/01_Projects/minecraft-plugins/citiesskymine/specs/_MANIFEST.md
  - plugins/CitiesSkyMine/src/main/resources/plugin.yml
  - plugins/CitiesSkyMine/src/main/kotlin/icu/oyasai/citiesskymine/command/CitiesSkyMineCommand.kt
  - plugins/CitiesSkyMine/src/main/kotlin/icu/oyasai/citiesskymine/access/CsmAccessController.kt
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-17"
agent_task: "Read before adding or changing CitiesSkyMine commands."
---

# CitiesSkyMine Command Conventions

Read this before adding or changing CitiesSkyMine commands.

## Namespace

- The canonical command is `/csm <domain> ...`.
- `<domain>` is a lowercase English word such as `cloud`, `bezier`, `window`, `columns`, or `stack`.
- Do not add new plain top-level commands such as `/cloud` or `/cld`.
- Existing plain top-level commands such as `/rc`, `/ri`, and `/hb` are compatibility commands. Do not use them as the pattern for new commands.
- Shortcuts use slash-dot names: `/.<shortcut>`.
- Add at most one shortcut for a new domain unless compatibility requires more.

Recommended examples:

```text
/csm cloud 128 48 0.72 42
/.cloud 128 48 0.72 42
/csm cloud 128 48 0.72 42 100
```

## Command Shape

New feature commands should be action-first:

```text
/csm <domain> preview ...
/csm <domain> build ...
/csm <domain> status
/csm <domain> cancel
/csm <domain> undo
```

Use only the actions that make sense for the feature. `undo` should explain that FAWE `//undo` is the supported undo path.

If a command has exactly one obvious action, omit the action token and execute it directly.

Help is centralized:

```text
/csm help <domain>
/.help <domain>
```

## Arguments

- Prefer short positional arguments for player-facing generation commands when the order is stable.
- Use tab completion placeholders such as `[size]`, `[height]`, `[density]`, `[seed]`, and `[yOffset]` to show what should be typed next.
- Use named key/value tokens only when positional arguments would be ambiguous or frequently skipped.
- Keep aliases minimal. A short alias is acceptable for common actions only when it is already established by nearby code.
- Validate unknown tokens explicitly and report the first invalid token.
- Report usage with the actual invoked label when possible.
- Keep the visible command surface consistent across `/csm <domain>`, slash-dot shortcuts, help text, tab completion, `plugin.yml`, and public docs.
- Preserve the invoked usage label when routing or delegating so `/csm ...` help does not show only the shortcut form.

## Tab Completion

Tab completion should follow the command grammar:

1. First argument: actions.
2. Later arguments: placeholders or common example values for the current position.
3. Do not require users to type option keys when a stable positional grammar is enough.
4. Never suggest options that are already present unless they are repeatable.
5. Return an empty list rather than noisy generic suggestions.
6. Do not suggest commands, flags, or argument orders that the executor will reject.

## Access

- Add a `CsmAccessController.CommandKey` for each new command domain.
- Add matching config defaults under `access.commands.<domain>`.
- Add a matching legacy permission such as `citiesskymine.cloud`.
- Use dedicated permissions for new domains when future allow/deny control is likely.
- Non-player execution is disabled by default. Allow command blocks or console only for domains designed for automation.

## Generation Safety

Commands that place many blocks must:

- estimate block count before writing;
- enforce `limits.max-blocks-<domain>` with fallback to `limits.max-blocks-csm` when appropriate;
- use `CsmEditSession` for FAWE-backed writes and undo support;
- report whether FAWE undo history was recorded;
- avoid synchronous heavy computation when it can stall the server;
- provide `preview` or `status` before destructive or large operations only when the user explicitly requests preview functionality.

## Files To Update

When adding a command domain, update the relevant files:

| File | Update |
|---|---|
| `plugin.yml` | `/csm` usage, shortcut command, permission |
| `Main.kt` | handler creation and shortcut registration |
| `CitiesSkyMineCommand.kt` | routing, root tab completion, help entry |
| `CsmAccessController.kt` | command key and default roles |
| `config.yml` | limits and access defaults |
| `docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md` or specs | public routing when the command adds a durable concept |
