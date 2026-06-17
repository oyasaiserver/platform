---
title: "CitiesSkyMine Best Practices"
category: specification
status: active
owner: marzipan99
source_of_truth: "docs/01_Projects/minecraft-plugins/citiesskymine/specs/best-practices.md"
related_paths:
  - docs/01_Projects/minecraft-plugins/citiesskymine/specs/command-conventions.md
  - docs/01_Projects/minecraft-plugins/citiesskymine/specs/implementation-conventions.md
  - docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md
  - plugins/CitiesSkyMine/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-17"
agent_task: "Consult when making design decisions for CitiesSkyMine features."
---

# CitiesSkyMine Best Practices

This document collects lessons learned from real bugs and design decisions.
Items here are **recommendations**, not mandatory rules.
Following them avoids known pitfalls; ignoring them won't break the build but may cause subtle issues.

For mandatory patterns, see `implementation-conventions.md`.
For command API rules, see `command-conventions.md`.

## Scope and Maintenance

- Items are **append-only**. Add new entries at the bottom of the relevant section.
- Each entry has three columns: **What happened**, **Why it matters**, **Recommended approach**.
- Periodically review this file. If an item is confirmed by two or more separate bugs with Issue/PR links, escalate it to `implementation-conventions.md` and replace the entry here with a cross-reference.
- Critical incidents (server crash, data loss) may be escalated after a single occurrence.
- Remove entries that are no longer relevant due to code changes. Do not use strikethrough; delete the row and note the removal in the commit message.

## Numeric Parameter Bounds

| What happened | Why it matters | Recommended approach |
|---|---|---|
| Seed values above ~2 billion caused integer overflow in noise hash functions, producing uniform output or NaN propagation. | The hash function `x * 73856093 xor ...` uses `Int` arithmetic. Seeds multiplied by large constants overflow unpredictably. | Cap seed to `0..10_000_000`. See `CloudCommand.MAX_SEED`. New domains should define a similar constant. |
| Omitting upper bounds on `radius` or `size` let users request generation volumes that exhaust server memory. | Block count grows cubically with radius. A radius of 1000 means up to 1 billion blocks. | Always enforce `limits.max-blocks-<domain>` in `config.yml`. Validate radius/size/width before computation, not just block count after. |
| Density values outside `0.0..1.0` caused division-by-zero in threshold calculations. | `(d - threshold) / max(density, 0.01)` — if density is negative or extremely large, results are nonsensical. | Use `parseDouble()` with explicit min/max bounds. `CloudCommand` uses `0.30..0.95`. |
| `CloudCommand` has both block-count and volume limits, but documentation only mentioned block count. | A command may exceed safe volume without exceeding max-blocks if block density is low. | Document both block-count and volume limits when they differ. `CloudCommand` checks `limits.max-blocks-cloud` and also checks `limits.max-volume-cloud` using `size * height * size`. |

## Async and Concurrency

| What happened | Why it matters | Recommended approach |
|---|---|---|
| A player logged out during async cloud generation. The completion callback called `player.sendMessage()` on an offline player, throwing an exception. | Bukkit does not guarantee that `Player` references remain valid after disconnect. | Always check `player.isOnline` before interacting with the player in async callbacks. See `CloudCommand.build()` for the pattern. |
| Two rapid `/csm cloud` invocations ran overlapping async builds. The second build's undo history overwrote the first. | `CsmEditSession.run()` records undo for the latest edit session. Concurrent sessions for the same player conflict. | Track active builds per player (e.g. `ConcurrentHashMap<UUID, BukkitTask>`). Reject new builds while one is in progress. |

## Config and Defaults

| What happened | Why it matters | Recommended approach |
|---|---|---|
| A new config key was added without a default in `config.yml`. Existing server installations returned `null`, causing `NullPointerException` at runtime. | `plugin.config.getString("new.key")` returns `null` if the key is not in the user's saved config and no default is provided. | Always provide a fallback value: `plugin.config.getLong("limits.max-blocks-xxx", 2_000_000L)`. Also add the key with a default to `config.yml` in `src/main/resources/`. |
| Config key naming was inconsistent — some used hyphens (`max-blocks-csm`), others used dots (`access.commands.cloud`). | Inconsistent naming makes it hard for AI agents to predict config paths. | Use hyphens for leaf keys, dots for hierarchy. Pattern: `<section>.<subsection>.<hyphenated-key>`. |

## Preview Tasks

| What happened | Why it matters | Recommended approach |
|---|---|---|
| A preview task was not cancelled in `onDisable()`. After `/reload`, the old task continued running with a stale plugin reference, causing `IllegalPluginAccessException`. | Bukkit does not automatically cancel tasks registered by a disabled plugin in all server implementations. | Always cancel preview tasks in `onDisable()` and clear the session map. See `Main.onDisable()`. |
| A preview task used `session.controlPoints` directly without copying. A concurrent modification (player adding a point) during particle rendering threw `ConcurrentModificationException`. | `runTaskTimer` callbacks run on the main thread, but if the point list is modified between tick start and render completion, iteration can fail. | Either snapshot the list at render time, or ensure all mutations happen outside the render window. Current code avoids this by using main-thread-only access for both mutation and rendering. |

## WorldEdit Integration

| What happened | Why it matters | Recommended approach |
|---|---|---|
| Code used `player.getLocation()` to determine selection instead of reading the WorldEdit session. Player position and WorldEdit selection are independent concepts. | A player may be standing far from their selection. Using player location instead of selection boundaries produces incorrect results. | Read from `WorldEdit.getInstance().sessionManager.get(BukkitAdapter.adapt(player)).selection`. |
| Convex selection vertices were assumed to be in a specific winding order. They were not, causing geometry calculations to produce inverted shapes. | WorldEdit's `ConvexPolyhedralRegion.getVertices()` returns vertices in insertion order, not geometric winding order. | Sort vertices by angle from centroid, or use algorithms that do not depend on vertex order. |
| Commands may write WorldEdit selection state, not only read it. | If a command updates the player's WorldEdit selection after generation, follow-up commands (e.g. stack) can operate on the generated region without manual re-selection. | `WindowCommand` can automatically update the player's WorldEdit selection after generation when `select-after-fill` is enabled; this supports follow-up stack operations. |

## General

| What happened | Why it matters | Recommended approach |
|---|---|---|
| A command with a single obvious action still required typing an action token. Users found `csm cloud build ...` verbose for a domain that only builds. | Unnecessary action tokens add friction for domains with only one meaningful action. | If a domain has exactly one obvious action, omit the action token. `CloudCommand` takes parameters directly without a `build` subcommand. |
| Tab completion returned material names for all 800+ materials. The completion list was too long to be useful. | Bukkit tab completion sends all candidates to the client. Very long lists lag the client and are unhelpful. | Limit suggestions to common values and placeholders. Use `[placeholder]` tokens to show what the argument expects. Return `emptyList()` rather than noisy suggestions. |
