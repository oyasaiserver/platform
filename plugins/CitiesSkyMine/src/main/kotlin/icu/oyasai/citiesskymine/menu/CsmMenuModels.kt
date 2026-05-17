package icu.oyasai.citiesskymine.menu

import org.bukkit.Material

// =============================================================================
// CsmMenuModels
// =============================================================================
// OyasaiMenu (com.github.sahyuya.oyasaiMenu) の以下ファイルをフォーク・統合したもの:
//   - model/Models.kt          → CsmMenuDef, CsmItemDef, CsmMenuAction
//   - model/PopupMenuModels.kt → CsmActionType (PopupActionType に相当)
//
// 設計方針:
//   OyasaiMenu には通常メニュー用の ActionType と
//   ポップアップ用の PopupActionType の2系統があるが、
//   CsmActionType はこれを1つに統一する。
//   将来的に OyasaiMenu に統合する際は CsmActionType のエントリを
//   OyasaiMenu の ActionType に追加し、ActionEngine 側にハンドラを実装すれば移行できる。
//
// OyasaiMenu の ActionType / PopupActionType との対応:
//   OPEN_MENU       ← ActionType.OPEN_MENU
//   PLAYER_CMD      ← ActionType.RUN_PLAYER_COMMAND / PopupActionType.PLAYER_CMD
//   CONSOLE_CMD     ← ActionType.RUN_COMMAND        / PopupActionType.CONSOLE_CMD
//   OP_PLAYER_CMD   ← PopupActionType.OP_PLAYER_CMD  (OyasaiMenu 未実装)
//   MESSAGE         ← ActionType.MESSAGE
//   BROADCAST       ← ActionType.BROADCAST
//   SOUND           ← ActionType.SOUND
//   URL             ← PopupActionType.URL             (OyasaiMenu 未実装)
//   CHAT_PASTE      ← PopupActionType.CHAT_PASTE      (OyasaiMenu 未実装)
//   SUGGEST_COMMAND ← PopupActionType.SUGGEST_COMMAND (OyasaiMenu 未実装)
//   OPEN_POPUP      ← PopupActionType.OPEN_POPUP
//   CLOSE           ← ActionType.CLOSE_MENU          / PopupActionType.CLOSE
// =============================================================================

/** OyasaiMenu の MenuDefinition に相当。 */
data class CsmMenuDef(
    val id: String,
    val title: String,
    val size: Int = 54,
    val items: Map<String, CsmItemDef> = emptyMap(),
)

/** OyasaiMenu の MenuItemDefinition に相当。 */
data class CsmItemDef(
    val slot: Int,
    val icon: Material = Material.STONE,
    val name: String = "",
    val lore: List<String> = emptyList(),
    val actions: List<CsmMenuAction> = emptyList(),
    val permission: String? = null,
    val enchanted: Boolean = false,
)

/**
 * OyasaiMenu の PopupActionType に相当するアクション種別。
 *
 * [TODO: OyasaiMenu 統合] 将来的に OyasaiMenu の ActionType へ追加・統合する想定。 統合後は CsmActionType を削除し OyasaiMenu
 * の ActionType を参照する形に移行する。
 */
enum class CsmActionType {
  OPEN_MENU,
  PLAYER_CMD,
  CONSOLE_CMD,
  OP_PLAYER_CMD,
  MESSAGE,
  BROADCAST,
  SOUND,
  URL,
  CHAT_PASTE,
  SUGGEST_COMMAND,
  OPEN_POPUP,
  CLOSE,
  UNKNOWN,
}

/** OyasaiMenu の MenuAction に相当。success/fail 分岐は現時点では未使用。 */
data class CsmMenuAction(
    val type: CsmActionType,
    val params: Map<String, String> = emptyMap(),
) {
  fun getString(key: String, default: String = ""): String = params[key] ?: default
}
