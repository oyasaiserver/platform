package icu.oyasai.utilities.backpack

import icu.oyasai.utilities.Main
import java.io.File
import java.util.UUID
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.logging.Level
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

class BackpackFeature(private val plugin: Main) : Listener, CommandExecutor {
  private val store = BackpackStore(File(plugin.dataFolder, "backpacks.db"))
  private val ioExecutor: ExecutorService =
      Executors.newSingleThreadExecutor { task ->
        Thread(task, "OyasaiUtilities-Backpack-IO").apply { isDaemon = true }
      }
  private val loading = mutableSetOf<UUID>()
  private val openInventories = mutableMapOf<UUID, Inventory>()
  private val unsaved = mutableMapOf<UUID, Snapshot>()
  private var nextRevision = 0L
  private var ready = false
  @Volatile private var stopping = false

  fun enable() {
    plugin.server.pluginManager.registerEvents(this, plugin)
    requireNotNull(plugin.getCommand("oyasaibackpack")) {
          "oyasaibackpack is missing from plugin.yml"
        }
        .setExecutor(this)

    ioExecutor.execute {
      val result = runCatching { store.open() }
      runOnMain {
        result.fold(
            onSuccess = {
              ready = true
              plugin.logger.info("Backpack SQLite storage is ready.")
            },
            onFailure = { failure ->
              plugin.logger.log(
                  Level.SEVERE,
                  "Backpack storage failed to start; the feature remains unavailable.",
                  failure,
              )
            },
        )
      }
    }
  }

  fun disable() {
    stopping = true
    ready = false

    openInventories.forEach { (uuid, inventory) ->
      serialize(inventory)?.let { bytes -> unsaved[uuid] = Snapshot(++nextRevision, uuid, bytes) }
      Bukkit.getPlayer(uuid)?.takeIf(Player::isOnline)?.closeInventory()
    }
    openInventories.clear()
    loading.clear()

    unsaved.values.toList().forEach { snapshot ->
      ioExecutor.execute {
        runCatching { store.save(snapshot.playerUuid, snapshot.contents) }
            .onFailure { failure ->
              plugin.logger.log(
                  Level.SEVERE,
                  "Failed to flush backpack for ${snapshot.playerUuid} during shutdown.",
                  failure,
              )
            }
      }
    }
    ioExecutor.execute {
      runCatching { store.close() }
          .onFailure { failure ->
            plugin.logger.log(Level.SEVERE, "Failed to close backpack storage.", failure)
          }
    }
    ioExecutor.shutdown()
    try {
      if (!ioExecutor.awaitTermination(SHUTDOWN_TIMEOUT_SECONDS, TimeUnit.SECONDS)) {
        plugin.logger.severe("Timed out while flushing backpack data during shutdown.")
      }
    } catch (_: InterruptedException) {
      Thread.currentThread().interrupt()
      plugin.logger.severe("Interrupted while flushing backpack data during shutdown.")
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("このコマンドはプレイヤー専用です。")
      return true
    }
    val rows = backpackRows(sender::hasPermission)
    if (rows == 0) {
      sender.sendMessage("§cバックパックの権限がありません。")
      return true
    }
    if (!ready || stopping) {
      sender.sendMessage("§cバックパックは現在利用できません。")
      return true
    }
    if (sender.uniqueId in loading || sender.uniqueId in openInventories) {
      sender.sendMessage("§eバックパックはすでに開いているか、読み込み中です。")
      return true
    }

    unsaved[sender.uniqueId]?.let { snapshot ->
      open(sender, rows, snapshot.contents)
      return true
    }

    loading += sender.uniqueId
    val playerUuid = sender.uniqueId
    ioExecutor.execute {
      val result = runCatching { store.load(playerUuid) }
      runOnMain {
        loading -= playerUuid
        val player = Bukkit.getPlayer(playerUuid)?.takeIf(Player::isOnline) ?: return@runOnMain
        result.fold(
            onSuccess = { bytes -> open(player, backpackRows(player::hasPermission), bytes) },
            onFailure = { failure ->
              plugin.logger.log(Level.SEVERE, "Failed to load backpack for $playerUuid.", failure)
              player.sendMessage("§cバックパックの読み込みに失敗しました。")
            },
        )
      }
    }
    return true
  }

  @EventHandler
  fun onClose(event: InventoryCloseEvent) {
    if (stopping) return
    val playerUuid = event.player.uniqueId
    if (openInventories[playerUuid] !== event.inventory) return
    openInventories.remove(playerUuid)

    val bytes = serialize(event.inventory)
    if (bytes == null) {
      val player = event.player as? Player ?: return
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            if (player.isOnline && playerUuid !in openInventories) {
              openInventories[playerUuid] = event.inventory
              player.openInventory(event.inventory)
              player.sendMessage("§cバックパックを保存できないため、再度開きました。")
            }
          },
      )
      return
    }
    enqueueSave(playerUuid, bytes)
  }

  private fun open(player: Player, rows: Int, bytes: ByteArray?) {
    if (rows == 0) {
      player.sendMessage("§cバックパックの権限がありません。")
      return
    }
    val items =
        try {
          bytes?.let(ItemStack::deserializeItemsFromBytes) ?: emptyArray()
        } catch (failure: Exception) {
          plugin.logger.log(
              Level.SEVERE,
              "Failed to deserialize backpack for ${player.uniqueId}.",
              failure,
          )
          player.sendMessage("§cバックパックデータを読めないため開けません。")
          return
        }
    if (items.size > MAX_SLOTS) {
      plugin.logger.severe(
          "Backpack for ${player.uniqueId} has ${items.size} slots; maximum is $MAX_SLOTS."
      )
      player.sendMessage("§cバックパックデータのサイズが不正です。")
      return
    }

    val size = rows * SLOTS_PER_ROW
    val highestOccupiedSlot = items.indexOfLast { !it.type.isAir }
    if (highestOccupiedSlot >= size) {
      player.sendMessage("§c保存済みアイテムが現在の権限サイズを超えるため開けません。")
      return
    }

    val holder = BackpackHolder(player.uniqueId)
    val inventory = Bukkit.createInventory(holder, size, Component.text("バックパック (${rows}段)"))
    holder.backing = inventory
    items.forEachIndexed { slot, item -> if (slot < size) inventory.setItem(slot, item) }
    openInventories[player.uniqueId] = inventory
    player.openInventory(inventory)
  }

  private fun serialize(inventory: Inventory): ByteArray? =
      try {
        ItemStack.serializeItemsAsBytes(inventory.contents)
      } catch (failure: Exception) {
        plugin.logger.log(Level.SEVERE, "Failed to serialize backpack contents.", failure)
        null
      }

  private fun enqueueSave(playerUuid: UUID, contents: ByteArray) {
    val snapshot = Snapshot(++nextRevision, playerUuid, contents)
    unsaved[playerUuid] = snapshot
    ioExecutor.execute {
      val result = runCatching { store.save(playerUuid, contents) }
      runOnMain {
        result.fold(
            onSuccess = {
              if (unsaved[playerUuid]?.revision == snapshot.revision) unsaved.remove(playerUuid)
            },
            onFailure = { failure ->
              plugin.logger.log(Level.SEVERE, "Failed to save backpack for $playerUuid.", failure)
              Bukkit.getPlayer(playerUuid)
                  ?.takeIf(Player::isOnline)
                  ?.sendMessage("§cバックパックの保存に失敗しました。最新内容はメモリ上に保持しています。")
            },
        )
      }
    }
  }

  private fun runOnMain(action: () -> Unit) {
    if (stopping) return
    plugin.server.scheduler.runTask(plugin, Runnable { if (!stopping) action() })
  }

  private data class Snapshot(val revision: Long, val playerUuid: UUID, val contents: ByteArray)

  private class BackpackHolder(val playerUuid: UUID) : InventoryHolder {
    lateinit var backing: Inventory

    override fun getInventory(): Inventory = backing
  }

  companion object {
    private const val MAX_ROWS = 6
    private const val SLOTS_PER_ROW = 9
    private const val MAX_SLOTS = MAX_ROWS * SLOTS_PER_ROW
    private const val SHUTDOWN_TIMEOUT_SECONDS = 10L

    internal fun backpackRows(hasPermission: (String) -> Boolean): Int =
        if (!hasPermission("backpack.use")) 0
        else (MAX_ROWS downTo 1).firstOrNull { hasPermission("backpack.size.$it") } ?: 1
  }
}
