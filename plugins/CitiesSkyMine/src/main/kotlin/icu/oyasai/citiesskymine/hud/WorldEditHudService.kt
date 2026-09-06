package icu.oyasai.citiesskymine.hud

import com.fastasyncworldedit.core.function.mask.SingleBlockStateMask
import com.sk89q.worldedit.LocalSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.bukkit.BukkitPlayer
import com.sk89q.worldedit.command.tool.BrushTool
import com.sk89q.worldedit.command.tool.Tool
import com.sk89q.worldedit.event.platform.CommandEvent
import com.sk89q.worldedit.function.mask.InverseSingleBlockStateMask
import com.sk89q.worldedit.function.mask.Mask
import com.sk89q.worldedit.regions.RegionSelector
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import com.sk89q.worldedit.util.eventbus.EventHandler
import com.sk89q.worldedit.util.eventbus.Subscribe
import icu.oyasai.citiesskymine.Main
import java.util.UUID
import me.neznamy.tab.api.TabAPI
import me.neznamy.tab.api.scoreboard.Scoreboard as TabScoreboard
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler as BukkitEventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scoreboard.DisplaySlot
import org.bukkit.scoreboard.Scoreboard as BukkitScoreboard

/** CommandEvent supplies display text; the next tick decides whether FAWE actually accepted it. */
class WorldEditHudService(private val plugin: Main) {
  private val snapshots = HashMap<UUID, WorldEditHudSnapshot>()
  private val gmaskInputs = HashMap<UUID, RememberedMask>()
  private val brushMaskInputs = HashMap<UUID, RememberedMask>()
  private val brushInputs = HashMap<UUID, RememberedBrush>()
  private val tabScoreboards = HashMap<UUID, TabScoreboard>()
  private val bukkitScoreboards = HashMap<UUID, BukkitScoreboard>()
  private val pendingStateReads = HashMap<UUID, MutableList<PendingNativeCommand>>()
  private val commandListener = WorldEditHudCommandListener(this)
  private var commandListenerRegistered = false
  private var tabFailureLogged = false

  fun start() {
    runCatching {
          WorldEdit.getInstance().eventBus.register(commandListener)
          commandListenerRegistered = true
        }
        .onFailure {
          plugin.logger.warning("WorldEdit HUD CommandEvent を登録できませんでした: ${it.message}")
        }
  }

  fun stop() {
    if (commandListenerRegistered) {
      runCatching { WorldEdit.getInstance().eventBus.unregister(commandListener) }
      commandListenerRegistered = false
    }
    Bukkit.getOnlinePlayers().forEach(::remove)
    snapshots.clear()
    gmaskInputs.clear()
    brushMaskInputs.clear()
    brushInputs.clear()
    pendingStateReads.clear()
  }

  fun onJoin(player: Player) {
    if (!isHudActive(player)) return
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          if (!isHudActive(player)) return@Runnable
          restoreRememberedState(player)
          refresh(player)
        },
        5L,
    )
  }

  fun onQuit(player: Player) = remove(player)

  /**
   * Captures state before command execution so a parse failure cannot replace an existing label.
   */
  fun onWorldEditCommand(playerId: UUID, command: NativeHudCommand?) {
    val player = Bukkit.getPlayer(playerId) ?: return
    if (!isHudActive(player)) return
    val before = command?.let { commandState(player) }
    scheduleStateRead(player, command?.let { PendingNativeCommand(it, before ?: CommandState()) })
  }

  /** Coalesces command and interaction updates for one player into one next-tick state read. */
  fun onWorldEditItemInteraction(player: Player, event: PlayerInteractEvent) {
    if (!isHudActive(player)) return
    val item = event.item ?: return
    val session = localSession(player) ?: return
    val itemType = BukkitAdapter.asItemType(item.type) ?: return
    val isBoundTool = runCatching { session.getTool(itemType) != null }.getOrDefault(false)
    val isWand = runCatching { session.wandBaseItem.type.id() == itemType.id() }.getOrDefault(false)
    if (!isBoundTool && !isWand) return
    scheduleStateRead(player)
  }

  fun onHeldItemChanged(player: Player) {
    if (!isHudActive(player)) return
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          if (!isHudActive(player)) return@Runnable
          val existing =
              snapshots[player.uniqueId]
                  ?: run {
                    scheduleStateRead(player)
                    return@Runnable
                  }
          val session = localSession(player) ?: return@Runnable
          val updated =
              existing.copy(tool = currentTool(session, player)?.let { summarizeTool(player, it) })
          if (snapshots.put(player.uniqueId, updated) != updated) render(player, updated)
        },
        1L,
    )
  }

  fun refresh(player: Player) {
    if (!isHudActive(player)) {
      remove(player)
      return
    }
    refresh(player, localSession(player))
  }

  private fun refresh(player: Player, session: LocalSession?) {
    if (!isHudActive(player)) {
      remove(player)
      return
    }
    val snapshot = session?.let { readSnapshot(player, it) } ?: WorldEditHudSnapshot()
    if (snapshots.put(player.uniqueId, snapshot) != snapshot) render(player, snapshot)
  }

  /** Settings changes leave the snapshot untouched, so the cached copy has to be dropped. */
  fun refreshDisplaySettings(player: Player) {
    snapshots.remove(player.uniqueId)
    refresh(player)
  }

  fun renderOptions(player: Player): HudRenderOptions =
      HudRenderOptions(maxValueLength(player), showSelection(player))

  fun maxValueLength(player: Player): Int =
      (plugin.playerDataStore.getInt(player, WIDTH_PATH)
              ?: plugin.config.getInt("hud.max-value-length", DEFAULT_VALUE_LENGTH))
          .coerceIn(MIN_VALUE_LENGTH, MAX_VALUE_LENGTH)

  fun setMaxValueLength(player: Player, value: Int?) {
    plugin.playerDataStore.set(player, WIDTH_PATH, value)
    refreshDisplaySettings(player)
  }

  fun showSelection(player: Player): Boolean =
      plugin.playerDataStore.getBoolean(player, SELECTION_PATH)
          ?: plugin.config.getBoolean("hud.show-selection", true)

  fun setShowSelection(player: Player, value: Boolean) {
    plugin.playerDataStore.set(player, SELECTION_PATH, value)
    refreshDisplaySettings(player)
  }

  fun localSession(player: Player): LocalSession? =
      runCatching {
            WorldEdit.getInstance().sessionManager.getIfPresent(BukkitAdapter.adapt(player))
          }
          .getOrNull()

  fun mode(player: Player): HudMode =
      HudMode.from(
          plugin.playerDataStore.getString(player, MODE_PATH)
              ?: plugin.config.getString("hud.default-mode")
              ?: HudMode.OFF.id,
      )

  fun setMode(player: Player, mode: HudMode) {
    plugin.playerDataStore.set(player, MODE_PATH, mode.id)
    refresh(player)
  }

  private fun isHudActive(player: Player): Boolean =
      player.isOnline && mode(player) != HudMode.OFF && player.hasPermission(PERMISSION)

  private fun commandState(player: Player): CommandState {
    val session = localSession(player) ?: return CommandState()
    return CommandState(
        globalMask = runCatching { session.mask }.getOrNull(),
        brush = currentBrush(session, player)?.let(::BrushState),
    )
  }

  /**
   * FAWE applies some commands after the dispatching tick, so one read can miss the new state.
   * Re-reads on a short bounded schedule instead of keeping a repeating task alive.
   */
  private fun scheduleStateRead(player: Player, command: PendingNativeCommand? = null) {
    val pending = pendingStateReads[player.uniqueId]
    if (pending != null) {
      command?.let(pending::add)
      return
    }
    pendingStateReads[player.uniqueId] =
        mutableListOf<PendingNativeCommand>().also { command?.let(it::add) }
    RETRY_DELAYS.forEachIndexed { index, delay ->
      val last = index == RETRY_DELAYS.lastIndex
      plugin.server.scheduler.runTaskLater(
          plugin,
          Runnable { runStateRead(player.uniqueId, last) },
          delay,
      )
    }
  }

  private fun runStateRead(playerId: UUID, lastAttempt: Boolean) {
    val pendingCommands = pendingStateReads[playerId] ?: return
    if (lastAttempt) pendingStateReads.remove(playerId)
    val online = Bukkit.getPlayer(playerId) ?: return
    if (!isHudActive(online)) return
    val session = localSession(online) ?: return
    pendingCommands.removeAll { confirmNativeCommand(online, session, it, lastAttempt) }
    refresh(online, session)
  }

  /**
   * Returns true once the command's effect is visible, so the retry schedule can stop early. On the
   * final attempt the typed text is adopted anyway, otherwise a repeated command would keep the
   * placeholder label forever.
   */
  private fun confirmNativeCommand(
      player: Player,
      session: LocalSession,
      pending: PendingNativeCommand,
      lastAttempt: Boolean,
  ): Boolean {
    val before = pending.before
    when (val command = pending.command) {
      is NativeHudCommand.GlobalMask -> {
        val after = runCatching { session.mask }.getOrNull()
        if (command.raw == null) {
          if (after != null) return false
          forgetGmask(player)
          return true
        }
        if (after == null) return false
        if (after !== before.globalMask || lastAttempt) {
          rememberGmask(player, after, command.raw)
          return true
        }
        return false
      }
      is NativeHudCommand.BrushMask -> {
        val brush = currentBrush(session, player) ?: return false
        val after = command.target.maskOf(brush)
        val previous =
            when (command.target) {
              BrushMaskTarget.MASK -> before.brush?.mask
              BrushMaskTarget.SOURCE -> before.brush?.sourceMask
            }
        if (command.raw == null) {
          if (after != null) return false
          forgetBrushMask(player)
          return true
        }
        if (after == null) return false
        if (after !== previous || lastAttempt) {
          rememberBrushMask(player, after, command.raw)
          return true
        }
        return false
      }
      is NativeHudCommand.Brush -> {
        val brush = currentBrush(session, player) ?: return false
        if (!brushChanged(before.brush, brush) && !lastAttempt) return false
        rememberBrush(player, brush, command.raw)
        command.maskRaw?.let { raw ->
          (brush.mask ?: brush.sourceMask)?.let { rememberBrushMask(player, it, raw) }
        }
        return true
      }
      NativeHudCommand.ClearBrush -> {
        if (currentBrush(session, player) != null) return false
        forgetBrush(player)
        forgetBrushMask(player)
        return true
      }
    }
  }

  private fun readSnapshot(player: Player, session: LocalSession): WorldEditHudSnapshot {
    val maskResult = runCatching { session.mask }
    val mask = maskResult.getOrNull()
    val tool = currentTool(session, player)
    return WorldEditHudSnapshot(
        gmaskRaw = mask?.let { displayMask(player, gmaskInputs[player.uniqueId], it, GMASK_PATH) },
        gmaskUnknown = maskResult.isFailure,
        tool = tool?.let { summarizeTool(player, it) },
        selection = selectionSummary(player, session),
    )
  }

  private fun selectionSummary(player: Player, session: LocalSession): SelectionSummary? =
      runCatching { session.getRegionSelector(BukkitAdapter.adapt(player.world)) }
          .getOrNull()
          ?.let { selector ->
            if (selector is CuboidRegionSelector) cuboidSelectionSummary(selector)
            else nonCuboidSelectionSummary(selector)
          }

  private fun cuboidSelectionSummary(selector: CuboidRegionSelector): SelectionSummary? {
    val pos1 = runCatching { selector.primaryPosition }.getOrNull() ?: return null
    val region =
        runCatching { selector.region }.getOrNull() ?: return SelectionSummary.PrimaryOnly(pos1)
    return SelectionSummary.Cuboid(pos1, region.pos2, region.dimensions, region.volume)
  }

  private fun nonCuboidSelectionSummary(selector: RegionSelector): SelectionSummary? {
    val region = runCatching { selector.region }.getOrNull() ?: return null
    return SelectionSummary.Other(selector.typeName, region.volume)
  }

  private fun currentBrush(session: LocalSession, player: Player): BrushTool? =
      currentTool(session, player) as? BrushTool

  private fun currentTool(session: LocalSession, player: Player): Tool? =
      runCatching { session.getTool(BukkitAdapter.adapt(player)) }.getOrNull()

  private fun restoreRememberedState(player: Player) {
    val session = localSession(player) ?: return
    runCatching { session.mask }
        .getOrNull()
        ?.let { mask ->
          persistedMask(player, GMASK_PATH)
              ?.takeIf { it.maskClass == mask.javaClass.name }
              ?.let { gmaskInputs[player.uniqueId] = RememberedMask(mask, it.raw) }
        }
    currentBrush(session, player)?.let { brush ->
      (brush.mask ?: brush.sourceMask)?.let { mask ->
        persistedMask(player, brushMaskPath(player))
            ?.takeIf { it.maskClass == mask.javaClass.name }
            ?.let { brushMaskInputs[player.uniqueId] = RememberedMask(mask, it.raw) }
      }
      persistedBrush(player)
          ?.takeIf { it.toolClass == brush.javaClass.name }
          ?.let { brushInputs[player.uniqueId] = RememberedBrush(brush, it.raw) }
    }
  }

  private fun rememberGmask(player: Player, mask: Mask, raw: String) {
    gmaskInputs[player.uniqueId] = RememberedMask(mask, raw.trim())
    saveMask(player, GMASK_PATH, mask, raw)
  }

  private fun forgetGmask(player: Player) {
    gmaskInputs.remove(player.uniqueId)
    clearMask(player, GMASK_PATH)
  }

  private fun rememberBrushMask(player: Player, mask: Mask, raw: String) {
    brushMaskInputs[player.uniqueId] = RememberedMask(mask, raw.trim())
    saveMask(player, brushMaskPath(player), mask, raw)
  }

  private fun forgetBrushMask(player: Player) {
    brushMaskInputs.remove(player.uniqueId)
    clearMask(player, brushMaskPath(player))
  }

  private fun rememberBrush(player: Player, brush: BrushTool, raw: String) {
    brushInputs[player.uniqueId] = RememberedBrush(brush, raw.trim())
    plugin.playerDataStore.setMany(
        player,
        mapOf(
            "${brushPath(player)}.raw" to raw.trim(),
            "${brushPath(player)}.tool-class" to brush.javaClass.name,
        ),
    )
  }

  private fun forgetBrush(player: Player) {
    brushInputs.remove(player.uniqueId)
    plugin.playerDataStore.setMany(
        player,
        mapOf("${brushPath(player)}.raw" to null, "${brushPath(player)}.tool-class" to null),
    )
  }

  private fun saveMask(player: Player, path: String, mask: Mask, raw: String) {
    plugin.playerDataStore.setMany(
        player,
        mapOf("$path.raw" to raw.trim(), "$path.mask-class" to mask.javaClass.name),
    )
  }

  private fun clearMask(player: Player, path: String) {
    plugin.playerDataStore.setMany(player, mapOf("$path.raw" to null, "$path.mask-class" to null))
  }

  private fun persistedMask(player: Player, path: String): PersistedMask? {
    val raw = plugin.playerDataStore.getString(player, "$path.raw") ?: return null
    val maskClass = plugin.playerDataStore.getString(player, "$path.mask-class") ?: return null
    return PersistedMask(raw, maskClass)
  }

  private fun persistedBrush(player: Player): PersistedBrush? {
    val raw = plugin.playerDataStore.getString(player, "${brushPath(player)}.raw") ?: return null
    val toolClass =
        plugin.playerDataStore.getString(player, "${brushPath(player)}.tool-class") ?: return null
    return PersistedBrush(raw, toolClass)
  }

  private fun displayMask(
      player: Player,
      remembered: RememberedMask?,
      mask: Mask,
      path: String,
  ): String {
    if (remembered?.maskRef === mask) return resolvedRaw(remembered.raw, mask)
    val persisted = persistedMask(player, path)
    if (persisted != null) {
      return if (persisted.maskClass == mask.javaClass.name) resolvedRaw(persisted.raw, mask)
      else PREVIOUS_SETTING
    }
    val text = mask.toString()
    return if (text.contains('@')) "設定済み" else text
  }

  private fun resolvedRaw(raw: String, mask: Mask): String {
    if (!DYNAMIC_MASK_TOKENS.containsMatchIn(raw)) return raw
    val block =
        when (mask) {
          is SingleBlockStateMask -> mask.blockState.blockType.id()
          is InverseSingleBlockStateMask -> mask.blockState.blockType.id()
          else -> null
        }
    return block?.let { "$raw (${it.removePrefix("minecraft:")})" } ?: raw
  }

  private fun summarizeTool(player: Player, tool: Tool): ToolSummary {
    if (tool !is BrushTool) return ToolSummary(toolKind(tool))

    val remembered = brushInputs[player.uniqueId]
    val persisted = persistedBrush(player)
    val name =
        when {
          remembered?.toolRef === tool -> remembered.raw
          persisted?.toolClass == tool.javaClass.name -> persisted.raw
          else -> "設定済み"
        }
    return ToolSummary(
        kind = "ブラシ",
        command = name,
        mask =
            (tool.mask ?: tool.sourceMask)?.let {
              displayMask(player, brushMaskInputs[player.uniqueId], it, brushMaskPath(player))
            },
    )
  }

  private fun toolKind(tool: Tool): String =
      tool.javaClass.simpleName.ifBlank { tool.javaClass.name.substringAfterLast('.') }

  private fun brushChanged(before: BrushState?, after: BrushTool): Boolean =
      before == null ||
          before.toolRef !== after ||
          before.brushRef !== after.brush ||
          before.size != after.size ||
          before.range != after.range ||
          before.mask !== after.mask ||
          before.sourceMask !== after.sourceMask

  private fun render(player: Player, snapshot: WorldEditHudSnapshot) {
    val lines = snapshot.lines(renderOptions(player))
    if (!renderWithTab(player, lines)) renderWithBukkit(player, lines)
  }

  private fun renderWithTab(player: Player, lines: List<String>): Boolean {
    if (Bukkit.getPluginManager().getPlugin("TAB")?.isEnabled != true) return false
    return runCatching {
          val api = TabAPI.getInstance()
          val tabPlayer = api.getPlayer(player.uniqueId) ?: return false
          val manager = api.scoreboardManager ?: return false
          removeTabScoreboard(player.uniqueId)
          val board = manager.createScoreboard(tabId(player), TITLE, lines)
          tabScoreboards[player.uniqueId] = board
          manager.showScoreboard(tabPlayer, board)
          removeBukkitScoreboard(player)
          true
        }
        .getOrElse {
          if (!tabFailureLogged) {
            plugin.logger.warning("TAB HUD を利用できないため Bukkit scoreboard にフォールバックします: ${it.message}")
            tabFailureLogged = true
          }
          false
        }
  }

  private fun renderWithBukkit(player: Player, lines: List<String>) {
    removeTabScoreboard(player.uniqueId)
    val scoreboard =
        bukkitScoreboards.getOrPut(player.uniqueId) {
          Bukkit.getScoreboardManager()?.newScoreboard ?: error("Bukkit ScoreboardManager を取得できません")
        }
    scoreboard.entries.forEach(scoreboard::resetScores)
    val objective =
        scoreboard.getObjective(OBJECTIVE_ID)
            ?: scoreboard.registerNewObjective(OBJECTIVE_ID, "dummy", TITLE)
    objective.displaySlot = DisplaySlot.SIDEBAR
    lines.forEachIndexed { index, line ->
      objective.getScore("$line§r§${index.toString(16)}").score = lines.size - index
    }
    player.scoreboard = scoreboard
  }

  private fun remove(player: Player) {
    snapshots.remove(player.uniqueId)
    gmaskInputs.remove(player.uniqueId)
    brushMaskInputs.remove(player.uniqueId)
    brushInputs.remove(player.uniqueId)
    removeDisplay(player)
  }

  private fun removeDisplay(player: Player) {
    removeTabScoreboard(player.uniqueId)
    removeBukkitScoreboard(player)
  }

  private fun removeTabScoreboard(playerId: UUID) {
    tabScoreboards.remove(playerId)?.unregister()
  }

  private fun removeBukkitScoreboard(player: Player) {
    val board = bukkitScoreboards.remove(player.uniqueId) ?: return
    if (player.scoreboard === board)
        player.scoreboard = Bukkit.getScoreboardManager()?.mainScoreboard ?: return
  }

  private fun tabId(player: Player): String = "csm-wehud-${player.uniqueId}"

  private fun brushMaskPath(player: Player): String =
      "$BRUSH_MASK_PATH.${player.inventory.itemInMainHand.type.key.key}"

  private fun brushPath(player: Player): String =
      "$BRUSH_PATH.${player.inventory.itemInMainHand.type.key.key}"

  private data class CommandState(val globalMask: Mask? = null, val brush: BrushState? = null)

  private data class PendingNativeCommand(
      val command: NativeHudCommand,
      val before: CommandState,
  )

  private data class BrushState(val toolRef: BrushTool) {
    val brushRef = toolRef.brush
    val size = toolRef.size
    val range = toolRef.range
    val mask = toolRef.mask
    val sourceMask = toolRef.sourceMask
  }

  private data class RememberedMask(val maskRef: Mask, val raw: String)

  private data class RememberedBrush(val toolRef: BrushTool, val raw: String)

  private data class PersistedMask(val raw: String, val maskClass: String)

  private data class PersistedBrush(val raw: String, val toolClass: String)

  companion object {
    const val PERMISSION = "citiesskymine.hud"
    const val MIN_VALUE_LENGTH = 8
    const val MAX_VALUE_LENGTH = 96
    const val DEFAULT_VALUE_LENGTH = 40
    private const val MODE_PATH = "hud.mode"
    private const val WIDTH_PATH = "hud.max-value-length"
    private const val SELECTION_PATH = "hud.show-selection"
    private const val GMASK_PATH = "hud.gmask"
    private const val BRUSH_MASK_PATH = "hud.brush-mask"
    private const val BRUSH_PATH = "hud.brush"
    private const val TITLE = "WorldEdit"
    private const val OBJECTIVE_ID = "csm_wehud"
    private const val PREVIOUS_SETTING = "(前回設定)"
    private val DYNAMIC_MASK_TOKENS = Regex("\\b(hand|pos1|pos2)\\b", RegexOption.IGNORE_CASE)
    private val RETRY_DELAYS = listOf(1L, 3L, 10L)
  }
}

/** Truncation keeps the label readable when a mask expression would otherwise widen the sidebar. */
data class HudRenderOptions(
    val maxValueLength: Int = WorldEditHudService.DEFAULT_VALUE_LENGTH,
    val showSelection: Boolean = true,
) {
  fun clip(value: String): String =
      if (value.length <= maxValueLength) value else value.take(maxValueLength - 1) + "…"
}

data class WorldEditHudSnapshot(
    val gmaskRaw: String? = null,
    val gmaskUnknown: Boolean = false,
    val tool: ToolSummary? = null,
    val selection: SelectionSummary? = null,
) {
  fun lines(options: HudRenderOptions): List<String> = buildList {
    when {
      gmaskUnknown -> add("§eGマスク: 状態不明")
      gmaskRaw != null -> add("§cGマスク: ${options.clip(gmaskRaw)}")
    }
    tool?.let {
      it.mask?.let { mask -> add("§eマスク: ${options.clip(mask)}") }
      if (it.command == null) add("ツール: ${options.clip(it.kind)}")
      else add("${it.kind}: ${options.clip(it.command)}")
    }
    if (options.showSelection) selection?.let { addAll(it.lines()) }
    if (isEmpty()) add("§7設定なし")
  }
}

sealed interface SelectionSummary {
  fun lines(): List<String>

  data class Cuboid(
      val pos1: com.sk89q.worldedit.math.BlockVector3,
      val pos2: com.sk89q.worldedit.math.BlockVector3,
      val dimensions: com.sk89q.worldedit.math.BlockVector3,
      val volume: Long,
  ) : SelectionSummary {
    override fun lines(): List<String> =
        listOf(
            "pos1: ${pos1.format()}",
            "pos2: ${pos2.format()}",
            "範囲: ${dimensions.x()}×${dimensions.y()}×${dimensions.z()} (${volume.grouped()})",
        )
  }

  data class PrimaryOnly(val pos1: com.sk89q.worldedit.math.BlockVector3) : SelectionSummary {
    override fun lines(): List<String> = listOf("pos1: ${pos1.format()}", "pos2: —")
  }

  data class Other(val type: String, val volume: Long) : SelectionSummary {
    override fun lines(): List<String> = listOf("選択: $type (${volume.grouped()})")
  }
}

private fun com.sk89q.worldedit.math.BlockVector3.format(): String = "${x()}, ${y()}, ${z()}"

private fun Long.grouped(): String = String.format("%,d", this)

data class ToolSummary(
    val kind: String,
    val command: String? = null,
    val mask: String? = null,
)

enum class HudMode(val id: String) {
  ON("on"),
  OFF("off");

  companion object {
    fun from(raw: String): HudMode =
        entries.firstOrNull { it.id.equals(raw, ignoreCase = true) } ?: OFF
  }
}

sealed interface NativeHudCommand {
  data class GlobalMask(val raw: String?) : NativeHudCommand

  data class BrushMask(val raw: String?, val target: BrushMaskTarget) : NativeHudCommand

  data class Brush(val raw: String, val maskRaw: String?) : NativeHudCommand

  data object ClearBrush : NativeHudCommand
}

enum class BrushMaskTarget {
  MASK,
  SOURCE;

  fun maskOf(brush: BrushTool?): Mask? = if (this == MASK) brush?.mask else brush?.sourceMask
}

private object NativeHudCommandParser {
  private val maskOption = Regex("(?:^|\\s)-m\\s+(.+?)(?=\\s+-[A-Za-z][A-Za-z-]*(?:\\s|$)|$)")

  fun parse(arguments: String): NativeHudCommand? {
    val input = arguments.trim().removePrefix("/").removePrefix("/").trim()
    if (input.isEmpty()) return null
    val separator = input.indexOfFirst(Char::isWhitespace)
    val command =
        (if (separator == -1) input else input.substring(0, separator))
            .substringAfter(':')
            .lowercase()
    val raw = if (separator == -1) "" else displayArgument(input.substring(separator))
    return when (command) {
      "gmask" -> NativeHudCommand.GlobalMask(raw.ifEmpty { null })
      "mask" -> NativeHudCommand.BrushMask(raw.ifEmpty { null }, BrushMaskTarget.MASK)
      "smask" -> NativeHudCommand.BrushMask(raw.ifEmpty { null }, BrushMaskTarget.SOURCE)
      "br",
      "brush",
      "ezbr",
      "ezbrush",
      "ab",
      "arcbrush" ->
          NativeHudCommand.Brush(
              raw,
              maskOption.find(raw)?.groupValues?.getOrNull(1)?.let(::displayArgument),
          )
      "none" -> NativeHudCommand.ClearBrush
      "tool" -> if (raw.equals("none", ignoreCase = true)) NativeHudCommand.ClearBrush else null
      else -> null
    }
  }

  /**
   * WorldEdit's parser can consume the closing quote before the event fires, so an unbalanced
   * leading quote is common. Strips each side independently rather than requiring a pair.
   */
  private fun displayArgument(raw: String): String = raw.trim().trim('"', '\'').trim()
}

private class WorldEditHudCommandListener(private val hud: WorldEditHudService) {
  @Subscribe(priority = EventHandler.Priority.LATE)
  fun onCommand(event: CommandEvent) {
    val player = (event.actor as? BukkitPlayer)?.player ?: return
    hud.onWorldEditCommand(player.uniqueId, NativeHudCommandParser.parse(event.arguments))
  }
}

class WorldEditHudListener(private val plugin: Main) : Listener {
  @BukkitEventHandler fun onJoin(event: PlayerJoinEvent) = plugin.worldEditHud.onJoin(event.player)

  @BukkitEventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onInteract(event: PlayerInteractEvent) =
      plugin.worldEditHud.onWorldEditItemInteraction(event.player, event)

  @BukkitEventHandler
  fun onHeldItemChanged(event: PlayerItemHeldEvent) =
      plugin.worldEditHud.onHeldItemChanged(event.player)

  @BukkitEventHandler fun onQuit(event: PlayerQuitEvent) = plugin.worldEditHud.onQuit(event.player)
}
