package io.oyasai.oyasaiAdminTools.utils

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import java.util.*
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import org.bukkit.persistence.PersistentDataType

object BookInputHandler : Listener {
  private val miniMessage = MiniMessage.miniMessage()
  private val plainSerializer = PlainTextComponentSerializer.plainText()
  private val editorKey = NamespacedKey(plugin, "oyasai_editor")
  private val sessionIdKey = NamespacedKey(plugin, "oyasai_session_id")

  private val sessions = ConcurrentHashMap<String, (String) -> Unit>()

  fun requestInput(
      player: Player,
      id: String,
      title: String,
      description: String,
      currentValue: String,
      callback: (String) -> Unit,
  ) {
    val sessionId = "${player.uniqueId}:$id"
    val item = ItemStack(Material.WRITABLE_BOOK)
    val meta = item.itemMeta as BookMeta

    meta.displayName(miniMessage.deserialize("<gold>Editor: $title</gold>"))
    meta.lore(
        listOf(
            miniMessage.deserialize("<gray>2ページ目以降を編集して「署名」してください。</gray>"),
            miniMessage.deserialize("<gray>キャンセルは本を捨てるか閉じてください。</gray>"),
        )
    )

    // Page 1: Instructions
    val instructionPage = "=== 説明 ===\n$description\n\n右のページ（2枚目）から編集してください。\n==========>"
    meta.addPages(Component.text(instructionPage))

    // Page 2: Current Value
    meta.addPages(Component.text(currentValue))

    meta.persistentDataContainer.set(editorKey, PersistentDataType.BYTE, 1.toByte())
    meta.persistentDataContainer.set(sessionIdKey, PersistentDataType.STRING, sessionId)
    item.itemMeta = meta

    sessions[sessionId] = callback
    player.inventory.addItem(item)
    player.closeInventory()
    player.sendMessage(
        miniMessage.deserialize(
            "<gold>[Editor]</gold> <yellow>回答用の本を付与しました。2ページ目から編集し、署名すると保存されます。</yellow>"
        )
    )
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBookSign(event: PlayerEditBookEvent) {
    val meta = event.newBookMeta
    if (!meta.persistentDataContainer.has(editorKey, PersistentDataType.BYTE)) return
    val sessionId =
        meta.persistentDataContainer.get(sessionIdKey, PersistentDataType.STRING) ?: return
    if (!event.isSigning) return

    val player = event.player
    if (!sessionId.startsWith("${player.uniqueId}:")) {
      event.isCancelled = true
      return
    }
    val callback = sessions.remove(sessionId) ?: return

    // Join pages starting from the second page (index 1)
    val pages = meta.pages()
    val content =
        if (pages.size > 1) {
          pages.drop(1).joinToString("\n") { page -> plainSerializer.serialize(page) }.trim()
        } else {
          ""
        }

    // Remove the book from hand in the next tick
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              val mainItem = player.inventory.itemInMainHand
              if (
                  mainItem.itemMeta
                      ?.persistentDataContainer
                      ?.get(sessionIdKey, PersistentDataType.STRING) == sessionId
              ) {
                player.inventory.setItemInMainHand(null)
              }
              val offItem = player.inventory.itemInOffHand
              if (
                  offItem.itemMeta
                      ?.persistentDataContainer
                      ?.get(sessionIdKey, PersistentDataType.STRING) == sessionId
              ) {
                player.inventory.setItemInOffHand(null)
              }
              val slot = event.slot
              if (slot in 0 until player.inventory.size) {
                val slotItem = player.inventory.getItem(slot)
                if (
                    slotItem
                        ?.itemMeta
                        ?.persistentDataContainer
                        ?.get(sessionIdKey, PersistentDataType.STRING) == sessionId
                ) {
                  player.inventory.setItem(slot, null)
                }
              }
              callback(content)
            },
        )
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val prefix = "${event.player.uniqueId}:"
    sessions.keys.removeIf { it.startsWith(prefix) }
  }

  @EventHandler(ignoreCancelled = true)
  fun onBookDrop(event: PlayerDropItemEvent) {
    val meta = event.itemDrop.itemStack.itemMeta ?: return
    if (!meta.persistentDataContainer.has(editorKey, PersistentDataType.BYTE)) return
    val sessionId = meta.persistentDataContainer.get(sessionIdKey, PersistentDataType.STRING)
    if (sessionId != null && sessionId.startsWith("${event.player.uniqueId}:")) {
      sessions.remove(sessionId)
    }
    event.itemDrop.remove()
  }
}
