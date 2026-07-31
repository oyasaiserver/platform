package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import org.bukkit.entity.Player

/**
 * 左列ナビゲーションタブのクリックを一元的に処理するヘルパー。
 *
 * サヒュヤ氏の指示: 「左のタブは押して開いた状態からもう一度押すと、閉じてトップメニューへ戻る」。
 * そのため各画面は自分がどのタブに属するか([ownTab])を申告し、そのタブが再クリックされたら メインメニューへ、それ以外のタブがクリックされたら該当画面へ遷移する。
 * [ownTab]がnullの画面（検索結果・作者作品・楽曲設定など、タブに直接紐づかないドリルダウン画面）は 常に通常の遷移として扱う。
 *
 * ⑤水色ブロック(ACTION_MODE)タブは、画面遷移ではなく「その画面のアクションモードを切り替える」
 * 動作のため、呼び出し元画面が自身の[ActionModeCategory]を渡す（無ければnull=この画面では アクションモードを使わない、として案内メッセージのみ表示する）。
 *
 * @return true = ここでナビゲーションタブのクリックとして処理した（呼び出し元は追加処理不要）
 */
object NavTabRouter {

  fun handle(
      slot: Int,
      ownTab: NavTab?,
      actionModeCategory: String?,
      plugin: OyasaiMusic,
      menuManager: MenuManager,
      viewer: Player,
  ): Boolean {
    val tab = NavTab.entries.firstOrNull { it.slot == slot } ?: return false

    if (tab == NavTab.ACTION_MODE) {
      if (actionModeCategory == null) {
        GuiFeedback.invalid(viewer, "この画面ではアクションモードは使用しません")
      } else {
        val next = BedrockActionModeService.cycle(viewer.uniqueId, actionModeCategory)
        GuiFeedback.info(viewer, "アクションモード: ${next.displayName}")
        menuManager.refreshCurrent(viewer.uniqueId)
      }
      return true
    }

    if (tab == ownTab) {
      menuManager.open(
          viewer,
          MainMenuScreen(plugin, menuManager, viewer),
          rememberAsPrevious = false,
      )
      return true
    }

    when (tab) {
      NavTab.MY_SONGS ->
          menuManager.open(viewer, MainMenuScreens.mySongs(plugin, menuManager, viewer))
      NavTab.SEARCH -> menuManager.open(viewer, SearchMenuScreen(plugin, menuManager, viewer))
      NavTab.ALL_SONGS ->
          menuManager.open(viewer, MainMenuScreens.allSongs(plugin, menuManager, viewer))
      NavTab.FAVORITES_PLAYLISTS ->
          menuManager.open(viewer, FavoritesPlaylistsScreen(plugin, menuManager, viewer))
      NavTab.ACTION_MODE -> Unit // 上で処理済み
    }
    return true
  }
}
