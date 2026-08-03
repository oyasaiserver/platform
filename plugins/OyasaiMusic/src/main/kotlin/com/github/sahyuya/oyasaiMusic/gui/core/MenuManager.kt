package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerQuitEvent

/**
 * GUI全体のライフサイクル（開閉・履歴・クリックの委譲）を一元管理する。
 *
 * [history] はドリルダウン画面の戻り先をスタックで保持し、空のときはトップメニューへ戻す。 [lastKnown]
 * は携帯プレイヤーから直前の画面を復元するため、通常の画面クローズでは消去しない。 金床・本入力は一時的に別のインベントリを開くため、状態の破棄はプレイヤー退出時だけに限定する。
 */
class MenuManager(private val plugin: OyasaiMusic) : Listener {

  companion object {
    /** GUIクリックの連打対策（サヒュヤ氏の指示: 200msのクールタイム）。 */
    private const val CLICK_COOLDOWN_MS = 200L
  }

  private val current = ConcurrentHashMap<UUID, OyasaiMusicMenu>()
  private val history = ConcurrentHashMap<UUID, MutableList<OyasaiMusicMenu>>()
  private val lastKnown = ConcurrentHashMap<UUID, OyasaiMusicMenu>()
  private val lastClickMillis = ConcurrentHashMap<UUID, Long>()

  /**
   * @param rememberAsPrevious trueの場合、直前に開いていた画面を履歴スタックへ積む。
   *   「戻る」自体で呼ぶ場合や、メインメニューへ戻る等で履歴をリセットしたい遷移ではfalseにする。
   */
  fun open(player: Player, menu: OyasaiMusicMenu, rememberAsPrevious: Boolean = true) {
    val existing = current[player.uniqueId]
    if (rememberAsPrevious && existing != null && existing !== menu) {
      history.getOrPut(player.uniqueId) { mutableListOf() }.add(existing)
    }
    current[player.uniqueId] = menu
    lastKnown[player.uniqueId] = menu
    player.openInventory(menu.inventory)
  }

  /** 一時設定画面用。クリック委譲は通常どおり行うが、携帯プレイヤーが復元する画面や履歴には残さない。 */
  fun openTransient(player: Player, menu: OyasaiMusicMenu) {
    player.openInventory(menu.inventory)
  }

  /** UI/UX設計書1章の「戻る」ボタン用。履歴スタックから1つ前の画面を取り出して開く。 履歴が空（＝見失った）場合はトップメニューへフォールバックする。 */
  fun openPrevious(player: Player) {
    val stack = history[player.uniqueId]
    val prev = stack?.removeLastOrNull()
    if (prev == null) {
      open(player, MainMenuScreen(plugin, this, player), rememberAsPrevious = false)
      return
    }
    current[player.uniqueId] = prev
    lastKnown[player.uniqueId] = prev
    player.openInventory(prev.inventory)
  }

  /** UI/UX設計書9章「携帯用プレイヤー」右クリック用：GUIを閉じていても直前の画面を返す。 */
  fun lastKnownMenu(playerUuid: UUID): OyasaiMusicMenu? = lastKnown[playerUuid]

  /**
   * 現在開いている画面を再描画する（例: 再生中/一時停止状態が変わった、いいねやフォローの 結果が確定した等、非同期処理の完了を受けて表示を更新したい場合に呼ぶ）。
   * プレイヤーがGUIを閉じている場合は何もしない。
   */
  fun refreshCurrent(playerUuid: UUID) {
    current[playerUuid]?.refresh()
  }

  /** 楽曲設定が保存された直後に、開いている全GUIへ最新情報を配信する。 一覧系は再読込、詳細・設定画面は同一IDの曲だけをその場で差し替える。 */
  fun refreshForSongUpdate(updatedSong: Song) {
    current.values.toSet().forEach { menu ->
      if (menu is SongUpdateAware) menu.onSongUpdated(updatedSong) else menu.refresh()
    }
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onClick(event: InventoryClickEvent) {
    val holder = event.inventory.holder as? OyasaiMusicMenuHolder ?: return
    // GUI欄・プレイヤーインベントリ側どちらのクリックでも既定では持ち出し不可にする。
    // 画面側が明示的にfalseへ戻さない限りアイテムの移動は起きない。
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return
    val now = System.currentTimeMillis()
    val last = lastClickMillis[player.uniqueId] ?: 0L
    if (now - last < CLICK_COOLDOWN_MS) return // 連打対策: クールタイム中は無視する
    lastClickMillis[player.uniqueId] = now

    holder.menu.onClick(event)
  }

  @EventHandler
  fun onDrag(event: InventoryDragEvent) {
    if (event.inventory.holder is OyasaiMusicMenuHolder) event.isCancelled = true
  }

  @EventHandler
  fun onClose(event: InventoryCloseEvent) {
    val holder = event.inventory.holder as? OyasaiMusicMenuHolder ?: return
    holder.menu.onClose(event)
    // NOTE: ここでは current/history を破棄しない（クラスコメント参照）。
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val uuid = event.player.uniqueId
    BedrockActionModeService.reset(uuid)
    current.remove(uuid)
    history.remove(uuid)
    lastKnown.remove(uuid)
    lastClickMillis.remove(uuid)
  }
}

/** 楽曲の設定値を保持している画面が、DB再読込を待たず即時更新するための契約。 */
interface SongUpdateAware {
  fun onSongUpdated(updatedSong: Song)
}
