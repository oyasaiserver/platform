package icu.oyasai.citiesskymine.selection

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

class SelectionCommand(private val plugin: Main) : CommandExecutor, TabCompleter, Listener {

  private val lastSeenSelections = mutableMapOf<UUID, StoredSelection>()

  fun startTracking() {
    plugin.server.scheduler.runTaskTimer(
        plugin,
        Runnable {
          for (player in Bukkit.getOnlinePlayers()) {
            trackCurrentSelection(player)
          }
        },
        20L,
        20L,
    )
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.SELECTION)) return true

    val first = args.getOrNull(0)?.lowercase()
    when (first) {
      null,
      "help" -> showHelp(sender, label)
      "save" -> saveNamed(sender, args.getOrNull(1))
      "list" -> listNamed(sender)
      "delete",
      "del",
      "remove" -> deleteNamed(sender, args.getOrNull(1))
      "p",
      "prev",
      "previous" -> restore(sender, PREVIOUS_KEY, displayName = "previous")
      else -> restore(sender, first, displayName = args[0])
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (sender !is Player || args.isEmpty()) return emptyList()
    return when (args.size) {
      1 ->
          (listOf("save", "list", "delete", "p", "help") + namedKeys(sender)).filter {
            it.startsWith(args[0], ignoreCase = true)
          }
      2 ->
          if (
              args[0].equals("delete", ignoreCase = true) ||
                  args[0].equals("del", ignoreCase = true) ||
                  args[0].equals("remove", ignoreCase = true)
          ) {
            namedKeys(sender).filter { it.startsWith(args[1], ignoreCase = true) }
          } else {
            emptyList()
          }
      else -> emptyList()
    }
  }

  private fun saveNamed(player: Player, rawName: String?) {
    val name =
        rawName?.takeIf { it.isNotBlank() }
            ?: run {
              MessageUtil.error(player, "保存名を指定してください。例: /.sel save road1")
              return
            }
    val key = key(name)
    if (key.isBlank()) {
      MessageUtil.error(player, "保存名が無効です: $name")
      return
    }
    val selection = currentSelection(player) ?: return
    writeSelection(player, "selection.named.$key", selection, name)
    rememberCurrent(player, selection)
    MessageUtil.success(player, "現在の WorldEdit 選択範囲を保存しました: $name")
  }

  private fun restore(player: Player, rawKey: String, displayName: String) {
    val target =
        readSelection(
            player,
            if (rawKey == PREVIOUS_KEY) "selection.previous" else "selection.named.${key(rawKey)}",
        )
    if (target == null) {
      MessageUtil.error(player, "保存された選択範囲がありません: $displayName")
      return
    }

    val current = currentSelectionOrNull(player)
    if (current != null && current != target) {
      writeSelection(player, "selection.previous", current, "previous")
    }

    if (!applySelection(player, target)) return
    rememberCurrent(player, target)
    MessageUtil.success(
        player,
        "WorldEdit 選択範囲を復元しました: $displayName (${target.pos1.x()},${target.pos1.y()},${target.pos1.z()} -> ${target.pos2.x()},${target.pos2.y()},${target.pos2.z()})",
    )
  }

  private fun listNamed(player: Player) {
    val keys = namedKeys(player)
    if (keys.isEmpty()) {
      MessageUtil.info(player, "保存済みの選択範囲はありません。")
      return
    }
    MessageUtil.header(player, "Saved Selections")
    for (key in keys.sorted()) {
      val name = plugin.playerDataStore.getString(player, "selection.named.$key.name") ?: key
      MessageUtil.helpEntry(player, "/.sel $key", name)
    }
  }

  private fun deleteNamed(player: Player, rawName: String?) {
    val name =
        rawName?.takeIf { it.isNotBlank() }
            ?: run {
              MessageUtil.error(player, "削除する保存名を指定してください。")
              return
            }
    val key = key(name)
    plugin.playerDataStore.set(player, "selection.named.$key", null)
    MessageUtil.success(player, "保存済み選択範囲を削除しました: $name")
  }

  private fun currentSelection(player: Player): StoredSelection? =
      currentSelectionOrNull(player)
          ?: run {
            MessageUtil.error(player, "WorldEdit で範囲を2点選択してから実行してください。")
            null
          }

  private fun currentSelectionOrNull(player: Player): StoredSelection? {
    val actor = BukkitAdapter.adapt(player)
    val weWorld = BukkitAdapter.adapt(player.world)
    val region =
        try {
          WorldEdit.getInstance().sessionManager.get(actor).getRegionSelector(weWorld).getRegion()
        } catch (_: IncompleteRegionException) {
          return null
        }
    val cuboid = region as? CuboidRegion ?: return null
    return StoredSelection(player.world.uid, player.world.name, cuboid.pos1, cuboid.pos2)
  }

  private fun applySelection(player: Player, selection: StoredSelection): Boolean {
    val world =
        Bukkit.getWorld(selection.worldId)
            ?: Bukkit.getWorld(selection.worldName)
            ?: run {
              MessageUtil.error(player, "保存先ワールドが見つかりません: ${selection.worldName}")
              return false
            }
    val actor = BukkitAdapter.adapt(player)
    val weWorld = BukkitAdapter.adapt(world)
    val selector = CuboidRegionSelector(weWorld, selection.pos1, selection.pos2)
    val session = WorldEdit.getInstance().sessionManager.get(actor)
    session.setRegionSelector(weWorld, selector)
    session.dispatchCUISelection(actor)
    return true
  }

  private fun writeSelection(
      player: Player,
      path: String,
      selection: StoredSelection,
      name: String,
  ) {
    plugin.playerDataStore.setMany(
        player,
        mapOf(
            "$path.name" to name,
            "$path.world-id" to selection.worldId.toString(),
            "$path.world" to selection.worldName,
            "$path.x1" to selection.pos1.x(),
            "$path.y1" to selection.pos1.y(),
            "$path.z1" to selection.pos1.z(),
            "$path.x2" to selection.pos2.x(),
            "$path.y2" to selection.pos2.y(),
            "$path.z2" to selection.pos2.z(),
        ),
    )
  }

  private fun readSelection(player: Player, path: String): StoredSelection? {
    val worldId =
        plugin.playerDataStore.getString(player, "$path.world-id")?.let {
          runCatching { UUID.fromString(it) }.getOrNull()
        } ?: return null
    val worldName = plugin.playerDataStore.getString(player, "$path.world") ?: return null
    val x1 = plugin.playerDataStore.getInt(player, "$path.x1") ?: return null
    val y1 = plugin.playerDataStore.getInt(player, "$path.y1") ?: return null
    val z1 = plugin.playerDataStore.getInt(player, "$path.z1") ?: return null
    val x2 = plugin.playerDataStore.getInt(player, "$path.x2") ?: return null
    val y2 = plugin.playerDataStore.getInt(player, "$path.y2") ?: return null
    val z2 = plugin.playerDataStore.getInt(player, "$path.z2") ?: return null
    return StoredSelection(
        worldId,
        worldName,
        BlockVector3.at(x1, y1, z1),
        BlockVector3.at(x2, y2, z2),
    )
  }

  private fun namedKeys(player: Player): Set<String> =
      plugin.playerDataStore.getKeys(player, "selection.named")

  private fun key(raw: String): String = raw.lowercase().replace(Regex("[^a-z0-9_-]"), "_")

  private fun trackCurrentSelection(player: Player) {
    val current = currentSelectionOrNull(player) ?: return
    val lastSeen = lastSeenSelections[player.uniqueId]
    if (lastSeen == current) return

    val previous = lastSeen ?: readSelection(player, "selection.current")
    if (previous != null && previous != current) {
      writeSelection(player, "selection.previous", previous, "previous")
    }
    rememberCurrent(player, current)
  }

  private fun rememberCurrent(player: Player, selection: StoredSelection) {
    lastSeenSelections[player.uniqueId] = selection
    writeSelection(player, "selection.current", selection, "current")
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    lastSeenSelections.remove(event.player.uniqueId)
  }

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Selection")
    MessageUtil.helpEntry(sender, "/$label save <name>", "現在のWorldEdit選択を保存")
    MessageUtil.helpEntry(sender, "/$label <name>", "保存済み選択を復元")
    MessageUtil.helpEntry(sender, "/$label p", "直前の選択を復元")
    MessageUtil.helpEntry(sender, "/$label list", "保存済み選択の一覧")
  }

  private data class StoredSelection(
      val worldId: UUID,
      val worldName: String,
      val pos1: BlockVector3,
      val pos2: BlockVector3,
  )

  companion object {
    private const val PREVIOUS_KEY = "p"
  }
}
