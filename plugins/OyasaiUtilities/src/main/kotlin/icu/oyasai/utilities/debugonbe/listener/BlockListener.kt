package icu.oyasai.utilities.debugonbe.listener

import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

/** プレイヤーの参加・退出イベントを監視し、BlockDisplayManager に同期およびクリーンアップを通知する。 */
class BlockListener(private val displayManager: BlockDisplayManager) : Listener {

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
    displayManager.clearPlayer(event.player)
  }
}
