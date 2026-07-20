package icu.oyasai.utilities.debugonbe.listener

import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.item.TogoAutoItem
import java.util.UUID
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.plugin.Plugin

/** Togo自動起動アイテムの手持ち状態を監視する。 */
class TogoAutoItemListener(
    private val plugin: Plugin,
    private val displayManager: BlockDisplayManager,
) : Listener {
  private val autoActivePlayers = mutableSetOf<UUID>()

  fun syncOnlinePlayers() {
    plugin.server.onlinePlayers.forEach(::scheduleUpdate)
  }

  @EventHandler
  fun onPlayerJoin(event: PlayerJoinEvent) {
    scheduleUpdate(event.player)
  }

  @EventHandler
  fun onPlayerItemHeld(event: PlayerItemHeldEvent) {
    scheduleUpdate(event.player)
  }

  @EventHandler
  fun onPlayerSwapHandItems(event: PlayerSwapHandItemsEvent) {
    scheduleUpdate(event.player)
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    scheduleUpdate(player)
  }

  @EventHandler
  fun onPlayerDropItem(event: PlayerDropItemEvent) {
    scheduleUpdate(event.player)
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    autoActivePlayers.remove(event.player.uniqueId)
  }

  private fun scheduleUpdate(player: Player) {
    plugin.server.scheduler.runTask(
        plugin,
        Runnable {
          if (player.isOnline) {
            update(player)
          }
        },
    )
  }

  private fun update(player: Player) {
    val uuid = player.uniqueId
    val held =
        TogoAutoItem.isItem(plugin, player.inventory.itemInMainHand) ||
            TogoAutoItem.isItem(plugin, player.inventory.itemInOffHand)

    if (held) {
      if (autoActivePlayers.add(uuid)) {
        // 起動時の位置だけを中心にし、その後の移動では再実行しない。
        displayManager.refreshAround(player)
      }
    } else if (autoActivePlayers.remove(uuid)) {
      displayManager.clearRefresh(player)
    }
  }
}
