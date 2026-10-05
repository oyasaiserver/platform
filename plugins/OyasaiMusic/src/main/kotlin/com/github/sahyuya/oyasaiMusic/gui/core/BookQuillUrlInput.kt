package com.github.sahyuya.oyasaiMusic.gui

import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.server.PluginDisableEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin
import org.bukkit.scheduler.BukkitTask

/**
 * Temporary URL books are identified by a per-request token, never by their slot or material alone.
 */
object BookQuillUrlInput {
  private val key = NamespacedKey("oyasaimusic", "url_input_session")
  private val pending = mutableMapOf<UUID, Pending>()
  private var listener: Listener? = null
  private var sweepTask: BukkitTask? = null

  private class Pending(
      val token: String,
      val previousHeldSlot: Int,
      val onSubmit: (String) -> Unit,
  ) {
    var completing = false
  }

  private fun matches(item: ItemStack?, token: String): Boolean =
      item?.type == Material.WRITABLE_BOOK &&
          item.itemMeta?.persistentDataContainer?.get(key, PersistentDataType.STRING) == token

  private fun removeBook(player: Player, token: String) {
    for (slot in 0 until player.inventory.size) {
      if (matches(player.inventory.getItem(slot), token)) player.inventory.setItem(slot, null)
    }
    if (matches(player.itemOnCursor, token)) player.setItemOnCursor(null)
  }

  fun open(
      plugin: Plugin,
      player: Player,
      guideText: String = "参考URLを1ページ目に入力して「完了」を押してください。",
      onSubmit: (String) -> Unit,
  ) {
    installListenerOnce(plugin)
    val previous = pending.remove(player.uniqueId)
    if (previous != null) removeBook(player, previous.token)
    val bookSlot =
        (0..8).firstOrNull {
          val item = player.inventory.getItem(it)
          item == null || item.type.isAir
        }
    if (bookSlot == null) {
      player.sendMessage("§cURL入力にはホットバーに空きスロットが1つ必要です。")
      return
    }
    val session =
        Pending(
            UUID.randomUUID().toString(),
            previous?.previousHeldSlot ?: player.inventory.heldItemSlot,
            onSubmit,
        )
    val book = ItemStack(Material.WRITABLE_BOOK)
    book.editMeta { meta ->
      (meta as BookMeta).addPage(guideText)
      meta.persistentDataContainer.set(key, PersistentDataType.STRING, session.token)
    }
    pending[player.uniqueId] = session
    player.inventory.setItem(bookSlot, book)
    player.inventory.heldItemSlot = bookSlot
    player.updateInventory()
    ensureSweep(plugin)
    player.sendMessage("§a本を右クリックして開き、URLを入力後「完了」を押してください。")
  }

  /** Only inspect players actually awaiting input; stop polling when no requests remain. */
  private fun ensureSweep(plugin: Plugin) {
    if (sweepTask != null) return
    sweepTask =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  val iterator = pending.iterator()
                  while (iterator.hasNext()) {
                    val (id, session) = iterator.next()
                    if (session.completing) continue
                    val player = Bukkit.getPlayer(id)
                    if (
                        player == null ||
                            !player.isOnline ||
                            (player.inventory.contents.none { matches(it, session.token) } &&
                                !matches(player.itemOnCursor, session.token))
                    )
                        iterator.remove()
                  }
                  if (pending.isEmpty()) {
                    sweepTask?.cancel()
                    sweepTask = null
                  }
                },
                1L,
                10L,
            )
  }

  private fun installListenerOnce(plugin: Plugin) {
    if (listener != null) return
    val installed =
        object : Listener {
          @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
          fun onEdit(event: PlayerEditBookEvent) {
            val player = event.player
            val session = pending[player.uniqueId] ?: return
            if (
                event.previousBookMeta.persistentDataContainer.get(
                    key,
                    PersistentDataType.STRING,
                ) != session.token
            )
                return
            event.isCancelled = true
            if (session.completing) return
            session.completing = true
            val text =
                if (event.newBookMeta.pageCount > 0) event.newBookMeta.getPage(1).trim() else ""
            removeBook(player, session.token)
            player.inventory.heldItemSlot = session.previousHeldSlot
            Bukkit.getScheduler()
                .runTask(
                    plugin,
                    Runnable {
                      // A newly issued request supersedes even an edit callback queued in this
                      // tick.
                      if (pending[player.uniqueId] === session) {
                        pending.remove(player.uniqueId)
                        if (!player.isOnline) return@Runnable
                        removeBook(player, session.token)
                        player.updateInventory()
                        if (text.isNotEmpty()) session.onSubmit(text)
                      }
                    },
                )
          }

          @EventHandler
          fun onQuit(event: PlayerQuitEvent) {
            pending.remove(event.player.uniqueId)?.let { removeBook(event.player, it.token) }
          }

          @EventHandler
          fun onDisable(event: PluginDisableEvent) {
            if (event.plugin !== plugin) return
            pending.forEach { (id, session) ->
              Bukkit.getPlayer(id)?.let { removeBook(it, session.token) }
            }
            pending.clear()
            sweepTask?.cancel()
            sweepTask = null
            listener = null
          }
        }
    listener = installed
    Bukkit.getPluginManager().registerEvents(installed, plugin)
  }
}
