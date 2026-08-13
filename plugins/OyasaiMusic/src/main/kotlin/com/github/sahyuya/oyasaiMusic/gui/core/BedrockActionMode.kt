package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.entity.Player
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * UI/UX設計書 1章・5章: 統合版(Bedrock)プレイヤーはShift/右クリック等の複雑な操作ができないため、 左列⑤(水色ブロック)でこの「アクションモード」を切り替えてから
 * 通常の左クリック(タップ)だけで操作する。
 *
 * 各値は UI/UX設計書 5章の表の列（①左クリック ②Shift+左クリック ③右クリック ④Shift+右クリック） に対応する。
 */
enum class ActionMode(val displayName: String) {
  PRIMARY("左クリック"),
  SECONDARY("Shift左クリック"),
  TERTIARY("右クリック"),
  QUATERNARY("Shift右クリック"),
}

/**
 * 画面カテゴリの一覧（サヒュヤ氏の指示: 「アクションモードの1,2,3,4選択状況は全画面共通ではなく、 各画面によって個々に一時保存」に対応するためのキー）。
 * 新しい種類の一覧画面を追加する場合はここに定数を追加すること。
 */
object ActionModeCategory {
  const val SONG_LIST = "song_list" // 全楽曲一覧・自作楽曲一覧・検索結果・作者作品
  const val PLAYLIST_LIST = "playlist_list" // お気に入り♪プレイリスト一覧
  const val PLAYLIST_DETAIL = "playlist_detail" // プレイリスト/お気に入りの登録曲一覧
  const val SONG_SETTINGS = "song_settings" // 楽曲設定
}

/**
 * プレイヤーごと・画面カテゴリごとの現在のアクションモードを保持する （インメモリ、再起動で初期化。要望通り全画面共通ではなくカテゴリ単位で独立させている）。
 * Java版プレイヤーはこの状態を使わず、通常のクリック種別をそのまま使う （[com.github.sahyuya.oyasaiMusic.util.BedrockUtil.isBedrock]
 * で判定）。
 */
object BedrockActionModeService {
  private val modes = ConcurrentHashMap<Pair<UUID, String>, ActionMode>()

  /** 楽曲設定を含む全画面で、4種のクリック操作を選択できる。 */
  fun availableModes(category: String): List<ActionMode> = ActionMode.entries

  fun get(playerUuid: UUID, category: String): ActionMode {
    val selected = modes[playerUuid to category]
    return selected?.takeIf { it in availableModes(category) } ?: ActionMode.PRIMARY
  }

  fun cycle(playerUuid: UUID, category: String): ActionMode {
    val available = availableModes(category)
    val currentIndex = available.indexOf(get(playerUuid, category))
    val next = available[(currentIndex + 1) % available.size]
    modes[playerUuid to category] = next
    return next
  }

  fun reset(playerUuid: UUID) {
    modes.keys.removeIf { it.first == playerUuid }
  }
}

/** Java版のクリック種別と、統合版の選択中アクションモードを同じ値へ正規化する。 各画面は戻り値だけを処理することで、操作体系の変更をこの1か所に集約できる。 */
fun resolveActionMode(
    viewer: Player,
    event: InventoryClickEvent,
    category: String,
    bedrockPrefix: String,
): ActionMode {
  if (BedrockUtil.isBedrock(viewer, bedrockPrefix)) {
    return BedrockActionModeService.get(viewer.uniqueId, category)
  }
  return when (event.click) {
    ClickType.SHIFT_LEFT -> ActionMode.SECONDARY
    ClickType.RIGHT -> ActionMode.TERTIARY
    ClickType.SHIFT_RIGHT -> ActionMode.QUATERNARY
    else -> ActionMode.PRIMARY
  }
}
