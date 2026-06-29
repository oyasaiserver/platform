---
title: "CitiesSkyMine Implementation Conventions"
category: specification
status: active
owner: marzipan99
source_of_truth: "docs/01_Projects/minecraft-plugins/citiesskymine/specs/implementation-conventions.md"
related_paths:
  - docs/01_Projects/minecraft-plugins/citiesskymine/specs/command-conventions.md
  - docs/01_Projects/minecraft-plugins/citiesskymine/specs/best-practices.md
  - docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md
  - plugins/CitiesSkyMine/src/main/kotlin/icu/oyasai/citiesskymine/Main.kt
  - plugins/CitiesSkyMine/src/main/kotlin/icu/oyasai/citiesskymine/worldedit/CsmEditSession.kt
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-17"
agent_task: "Read before implementing or modifying CitiesSkyMine features."
---

# CitiesSkyMine Implementation Conventions

Read this before implementing or modifying CitiesSkyMine features.
This document covers **internal implementation patterns** — things that break the server or cause resource leaks if violated.
For command naming, arguments, and access rules, see `command-conventions.md`.

## Scope

This document defines **mandatory patterns**.
Items here are rules, not suggestions.
"How to implement" lives here; "what the command API looks like" lives in `command-conventions.md`; "what we learned the hard way" lives in `best-practices.md`.

## 1. Command Registration Checklist

Command registration falls into three categories:

- Legacy top-level commands such as `rc`, `ri`, and `hb` are registered directly in `Main.kt` with `getCommand(...)`. They do not route through `CitiesSkyMineCommand`.
- Dot-prefixed shortcuts such as `.cloud`, `.bez`, and `.pl` are also registered directly in `Main.kt`.
- Unified `/csm xxx` subcommands route through `CitiesSkyMineCommand`.

When adding or changing a command, check all applicable entry points. A command may need both a direct shortcut registration and a `/csm` route.

`CitiesSkyMineCommand` has route-specific argument handling:

- `load` and `load64` pass `args` through unchanged instead of using `args.drop(1)`.
- `bezier` and `preset` rewrite the label to `"$label bezier"` or `"$label preset"` before delegating.

When adding a new command domain, update the following files in this order.
Confirm each step before moving to the next.

1. **`plugin.yml`** — Add `/csm` usage entry, shortcut command definition (e.g. `".cloud"`), and permission node.
2. **`Main.kt`** — Instantiate the command handler and register it with `getCommand()`. Register shortcut commands. If the domain uses sessions, add a `UUID→Session` HashMap and session accessor methods.
3. **`CitiesSkyMineCommand.kt`** — Add routing in the `when` block, root tab completion entry, and help entry delegation.
4. **`CsmAccessController.kt`** — Add a `CommandKey` enum entry with `id` and `legacyPermission`. Add default role mapping in `DEFAULT_COMMAND_ROLES`.
5. **`config.yml`** — Add `limits.max-blocks-<domain>` and `access.commands.<domain>` defaults.
6. **Command class** — Implement `CommandExecutor` and `TabCompleter`. Follow patterns in existing commands (e.g. `BezierCommand`, `CloudCommand`).
7. **Help and tab completion** — Implement `sendHelp()` and `onTabComplete()` per `command-conventions.md`.
8. **Build confirmation** — Run `nix develop --command gradle :plugins:CitiesSkyMine:compileKotlin` and verify success.

Documented config keys must be read by implementation code. If a key is no longer read, remove it from the docs and default `config.yml` instead of leaving a dead setting.

## 2. FAWE / WorldEdit

### CsmEditSession.run()

All block writes that should support `//undo` must go through `CsmEditSession.run()`.
Do not create `EditSession` manually.

```kotlin
val result = CsmEditSession.run(world, player, plugin.logger) { editSession ->
    // block placement logic
    editSession.setBlock(pos, blockState)
    true // return whether changes were made
}
```

`CsmEditSession.run()` returns `Result(changed: Boolean, undoRecorded: Boolean)`.

Choose the overload based on world stability:

- `CsmEditSession.run(world, player, logger, edit)` should be used when the target world has already been resolved, especially after async computation. The player may have changed worlds before execution returns to the main thread.
- `CsmEditSession.run(player, logger, edit)` may be used for synchronous execution when it is safe to read `player.world` at execution time.

### Undo reporting

After `CsmEditSession.run()`, always report the undo result to the player:

```kotlin
if (result.undoRecorded) {
    MessageUtil.info(player, "FAWE の //undo で取り消せます。")
} else {
    MessageUtil.warn(player, "完了しましたが、FAWE undo 履歴への登録に失敗しました。")
}
```

Do not silently swallow undo registration failures.

### Async computation

Use the async pattern only when the command may generate many blocks or perform expensive computation. `CloudCommand` computes asynchronously and returns to the main thread for Bukkit/WorldEdit interaction. Smaller bounded commands such as `WindowCommand` and `StackCommand` run synchronously; this is acceptable for small selections or dozens of blocks where async overhead adds complexity without practical benefit.

Heavy computation (noise generation, geometry calculation, block plan building) must run asynchronously.

FAWE handles block placement asynchronously by design — `CsmEditSession.run()` itself does not require the main thread.
However, Bukkit API calls such as `player.isOnline`, `player.sendMessage()`, and `MessageUtil.*` must run on the main thread.
The current pattern returns to the main thread before calling `CsmEditSession.run()` so that the surrounding Bukkit API calls are safe.

Pattern (see `CloudCommand` for reference):

```kotlin
plugin.server.scheduler.runTaskAsynchronously(plugin, Runnable {
    val plan = buildPlan(...)  // heavy computation — async
    plugin.server.scheduler.runTask(plugin, Runnable {
        if (!player.isOnline) return@Runnable  // Bukkit API — main thread required
        val result = CsmEditSession.run(player) { ... }  // FAWE handles block writes async internally
        MessageUtil.success(player, "...")  // Bukkit API — main thread required
    })
})
```

### Block count check

Limit keys may be domain-specific. `StackCommand` and `CloudCommand` first read their domain limit, such as `limits.max-blocks-stack` or `limits.max-blocks-cloud`, and fall back to `limits.max-blocks-csm` when the domain key is absent. `WindowCommand` uses its fixed limit key and does not fall back.

Before writing blocks, estimate or count the total and compare against `limits.max-blocks-<domain>` with fallback to `limits.max-blocks-csm`:

```kotlin
val maxBlocks = plugin.config.getLong(
    "limits.max-blocks-<domain>",
    plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
)
if (maxBlocks > 0 && blockCount > maxBlocks) {
    MessageUtil.error(player, "生成ブロック数が上限 ($maxBlocks) を超えています: $blockCount")
    return
}
```

### WorldEdit selection

Read WorldEdit selections via `BukkitAdapter`:

```kotlin
val wePlayer = BukkitAdapter.adapt(player)
val session = WorldEdit.getInstance().sessionManager.get(wePlayer)
val region = session.selection
```

For convex/polyhedral selections, use `getVertices()`.
Vertex order is not guaranteed — sort or validate as needed.

## 3. Preview and Scheduled Tasks

Preview is **not mandatory** for every command domain.
Implement preview only when the user explicitly requests it.
This section describes the required patterns for when preview is implemented.

### Pattern: showOnce + schedule

Separate the single-frame drawing logic from the scheduling logic.

- **Drawing object** (`*Preview`): A stateless `object` with a `showOnce(player, ...)` method that draws one frame of particles.
- **Schedule manager** (in `Main.kt`): A method like `updateBezierPreview(player)` that creates and manages a `runTaskTimer` repeating task.

Reference: `BezierPreview.showOnce()` + `Main.updateBezierPreview()`.

### Creating a preview task

```kotlin
fun updateXxxPreview(player: Player) {
    val session = getXxxSession(player)
    if (session.previewTask != null) return  // already running
    if (!hasEnoughData(session)) return

    session.previewTask = server.scheduler.runTaskTimer(
        this,
        Runnable {
            if (!player.isOnline) {
                stopXxxPreview(player)
                return@Runnable
            }
            XxxPreview.showOnce(player, session.data)
        },
        0L,
        10L,  // 10 ticks = 0.5 seconds
    )
}
```

### Stopping a preview task

```kotlin
fun stopXxxPreview(player: Player) {
    val session = xxxSessions[player.uniqueId] ?: return
    session.previewTask?.cancel()
    session.previewTask = null
}
```

### onDisable obligation

`Main.onDisable()` must cancel all active preview tasks and clear session maps:

```kotlin
override fun onDisable() {
    xxxSessions.values.forEach { it.previewTask?.cancel() }
    xxxSessions.clear()
}
```

Failure to cancel tasks causes memory leaks and errors after plugin reload.

### Player offline check

Every scheduled task must check `player.isOnline` at the start of each tick.
If the player is offline, stop the preview immediately.

## 4. Session Management

Treat plugin state as three separate lifecycle categories:

- Transient sessions: in-memory command/session maps such as `sessions`, `intersectionSessions`, and `bezierSessions`. These are runtime-only and disappear when the player reconnects or the server restarts.
- Player defaults: persisted per-player settings handled by `PlayerDataStore`. These are YAML-backed and must be saved during plugin shutdown, including `onDisable`.
- Feature memory: feature-specific persisted state such as `DebugStickMemoryStore`. These stores own their own lifecycle and should load during `onEnable` and save during `onDisable`.

Do not document or implement session behavior as if all state has the same persistence guarantees.

### Storage pattern

Sessions are stored in `Main.kt` as `HashMap<UUID, XxxSession>`:

```kotlin
private val xxxSessions = HashMap<UUID, XxxSession>()

fun getXxxSession(player: Player): XxxSession =
    xxxSessions.getOrPut(player.uniqueId) { XxxSession() }
```

### Session data class

Session data classes hold mutable state and an optional `previewTask`:

```kotlin
data class XxxSession(
    var someParameter: Int = 64,
    val controlPoints: MutableList<Location> = mutableListOf(),
    var previewTask: BukkitTask? = null,
)
```

### Persistence

If session settings should persist across logins, save to and load from `PlayerDataStore`:

```kotlin
fun saveXxxSettings(player: Player, session: XxxSession) {
    playerDataStore.setMany(player, mapOf(
        "xxx.param" to session.someParameter,
    ))
}
```

Load in the `getOrPut` initializer:

```kotlin
xxxSessions.getOrPut(player.uniqueId) {
    XxxSession().also { loadXxxSettings(player, it) }
}
```

## 5. Unrelated Changes

Do not modify files that are unrelated to the current task.
If you observe existing uncommitted changes in unrelated files (e.g. `ColumnLayoutCommand.kt` when working on `cloud`), leave them untouched.
Do not reformat, refactor, or "clean up" code outside the scope of the request.

## 6. Build and Deploy

### Build

```bash
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:CitiesSkyMine:compileKotlin
```

A successful `compileKotlin` confirms that all code compiles.
Run this after every implementation change.

### Local deployment

Copy the built jar to the dev server:

```
plugins/CitiesSkyMine/build/libs/CitiesSkyMine.jar → dev-server/plugins/CitiesSkyMine.jar
```

The actual deployment path may vary by environment.
If `dev-server/` does not exist, check for `local/plugins/` or ask the user.

## 7. MessageUtil Usage

| Method | Color | When to use |
|--------|-------|-------------|
| `MessageUtil.error()` | Red | Invalid input, permission denied, operation failed |
| `MessageUtil.warn()` | Yellow | Non-fatal issues (undo registration failed, approaching limits) |
| `MessageUtil.info()` | Aqua | Neutral information (undo available, operation started) |
| `MessageUtil.success()` | Green | Operation completed successfully |
| `MessageUtil.send()` | Prefix only | General messages with custom MiniMessage formatting |
| `MessageUtil.header()` | Gold bold | Section headers in help output |
| `MessageUtil.helpEntry()` | Gold + Gray | Individual help entries |

Non-player senders (console, command blocks) receive the same messages.
All messages use MiniMessage format via `net.kyori.adventure.text.minimessage`.

## 8. Command Class Structure

Permission checks are owned by the individual command class. Each command must call `plugin.access.require(...)` for itself, even when it can also be reached through `/csm`.

`CitiesSkyMineCommand.requireAccess()` is an additional guard for the unified `/csm` route. This means `/csm cloud` may perform the access check twice, while the `.cloud` shortcut performs the command-local check once. The duplicate check is acceptable, but the command-local `access.require(...)` call is the authoritative check because shortcuts bypass `CitiesSkyMineCommand`.

When routing `bezier` and `preset`, `CitiesSkyMineCommand` rewrites the delegated label to `"$label bezier"` or `"$label preset"`. Preserve this pattern so delegated `sendHelp()` output displays the correct command name for the route the player used.

Every command class implements `CommandExecutor` and `TabCompleter`:

```kotlin
class XxxCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
            return true
        }
        if (!plugin.access.require(sender, CommandKey.XXX)) return true

        when (args.getOrNull(0)?.lowercase()) {
            null, "help" -> sendHelp(sender, "/$label")
            "build" -> build(sender, args)
            "preview" -> preview(sender, args)
            "status" -> status(sender)
            else -> {
                MessageUtil.error(sender, "不明なサブコマンド: ${args[0]}")
                sendHelp(sender, "/$label")
            }
        }
        return true
    }

    fun sendHelp(sender: CommandSender, base: String) { ... }

    override fun onTabComplete(...): List<String> { ... }
}
```

Key points:
- Always check `sender !is Player` first.
- Always check `plugin.access.require()` before any action.
- Always `return true` from `onCommand`.
- Route via `when` on `args[0]?.lowercase()`.
- Unknown subcommands report the invalid token and show help.
