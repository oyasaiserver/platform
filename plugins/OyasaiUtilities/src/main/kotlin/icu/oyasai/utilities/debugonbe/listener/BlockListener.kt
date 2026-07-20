package icu.oyasai.utilities.debugonbe.listener

import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockDamageEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

/** プレイヤーの参加・退出イベントを監視し、BlockDisplayManager に同期およびクリーンアップを通知する。 */
class BlockListener(private val displayManager: BlockDisplayManager) : Listener {

  private val pendingDebugStickSyncs: MutableSet<String> = mutableSetOf()

  /** プレイヤーが参加したとき — 管理中の全ブロックを非表示パケットで同期し、防具立ての非表示処理を行う。 */
  @EventHandler
  fun onPlayerJoin(event: PlayerJoinEvent) {
    // 少し遅延させてチャンクロード後に送信する
    event.player.server.scheduler.runTaskLater(
        displayManager.plugin,
        Runnable { displayManager.syncForPlayer(event.player) },
        20L, // 1秒後
    )
  }

  /** プレイヤーが切断したとき — プレイヤーに送信したフェイクブロック情報等をクリーンアップする。 */
  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    pendingDebugStickSyncs.removeAll { it.startsWith("${event.player.uniqueId}:") }
    displayManager.clearPlayer(event.player)
  }

  /** 表示中のブロックに対する破壊開始をキャンセルし、クライアントの破壊演出を止める。 */
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun onDisplayedBlockDamage(event: BlockDamageEvent) {
    if (displayManager.isDisplayed(event.player, event.block)) {
      event.isCancelled = true
    }
  }

  /** 表示中のブロックに対する破壊完了をキャンセルし、真のブロック更新を防ぐ。 */
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun onDisplayedBlockBreak(event: BlockBreakEvent) {
    if (displayManager.isDisplayed(event.player, event.block)) {
      event.isCancelled = true
    }
  }

  /** デバッグ棒の操作後に、サーバー側で更新された状態と表示を再同期する。 */
  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onDebugStickInteract(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_BLOCK) return
    if (event.item?.type != Material.DEBUG_STICK) return

    val block = event.clickedBlock ?: return
    val player = event.player
    if (!displayManager.isDisplayed(player, block)) return

    val syncKey = "${player.uniqueId}:${block.world.name}:${block.x},${block.y},${block.z}"
    if (!pendingDebugStickSyncs.add(syncKey)) return

    displayManager.plugin.server.scheduler.runTaskLater(
        displayManager.plugin,
        Runnable {
          pendingDebugStickSyncs.remove(syncKey)
          if (player.isOnline) {
            displayManager.refreshBlock(player, block)
          }
        },
        1L,
    )
  }
}
