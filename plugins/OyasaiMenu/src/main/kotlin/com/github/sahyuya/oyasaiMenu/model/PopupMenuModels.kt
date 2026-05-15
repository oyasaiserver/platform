package com.github.sahyuya.oyasaiMenu.model

import org.bukkit.Material

data class PopupMenuDef(
    val id: String,
    val title: String,
    val glass: Material,
    val navActive: Int,
    val items: List<PopupItem>
)

/**
 * ポップアップメニュー内の1アイテム。
 *
 * @param opOnly             true の場合、OPのみに表示・実行可 (後方互換用)
 * @param requiredPermission 指定した場合、このパーミッションを持つプレイヤーのみ表示・実行可
 *                           opOnly より優先される。
 * @param fallbackIcon       表示条件を満たさないプレイヤーに表示するアイコン。
 *                           null    → ガラス (fillGlass) で埋める
 *                           AIR     → 強制的に空欄にする (ガラスも置かない)
 *                           その他  → 指定マテリアルを表示
 * @param fallbackTexture    fallbackIcon が PLAYER_HEAD (CUSTOM_HEAD) のときのテクスチャハッシュ
 * @param fallbackName       fallbackIcon の表示名。デフォルト " " (空白)
 * @param fallbackLore       fallbackIcon の説明文。権限なしプレイヤー向け説明などに使う。
 *                           空リストの場合は lore なし
 * @param fallbackActions    表示条件を満たさないプレイヤーがクリックした際に実行するアクション。
 *                           空リストの場合はクリック無効 (従来通り)
 */
data class PopupItem(
    val key: String,
    val slot: Int,
    val icon: Material,
    val itemSpec: PopupItemSpec?,
    val customTexture: String?,
    val name: String,
    val lore: List<String>,
    val enchanted: Boolean,
    val actions: List<PopupAction>,
    val opOnly: Boolean = false,
    val requiredPermission: String? = null,
    val fallbackIcon: Material? = null,
    val fallbackItemSpec: PopupItemSpec? = null,
    val fallbackTexture: String? = null,
    val fallbackName: String = " ",
    val fallbackLore: List<String> = emptyList(),
    val fallbackActions: List<PopupAction> = emptyList()
) {
    /**
     * このアイテムをプレイヤーが表示・操作できるかどうかを返す。
     * - requiredPermission が設定されている場合はそれを優先チェック
     * - opOnly のみの場合は isOp チェック
     */
    fun isVisibleTo(player: org.bukkit.entity.Player): Boolean {
        if (requiredPermission != null) return player.hasPermission(requiredPermission)
        if (opOnly) return player.isOp
        return true
    }
}

data class PopupAction(val type: PopupActionType, val value: String)

enum class PopupActionType {
    PLAYER_CMD,
    CONSOLE_CMD,
    OP_PLAYER_CMD,
    URL,
    CHAT_PASTE,
    SUGGEST_COMMAND,
    OPEN_POPUP,
    OPEN_SHOP,
    OPEN_SELL,
    OPEN_MACRO,
    OPEN_POINT_SHOP,
    OPEN_MENU,
    CLOSE
}

data class PopupItemSpec(
    val material: Material,
    val amount: Int = 1,
    val blockState: Map<String, String> = emptyMap()
)
