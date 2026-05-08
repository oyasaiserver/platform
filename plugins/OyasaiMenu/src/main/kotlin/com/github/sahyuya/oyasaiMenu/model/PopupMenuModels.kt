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
 * @param opOnly       true の場合、OPのみに表示・実行可
 * @param fallbackIcon op_only=true かつ非OPプレイヤーに表示するアイコン
 *                     null の場合はガラス (fillGlass の色) で埋まる
 * @param fallbackName fallbackIcon の表示名。デフォルト " " (空白)
 */
data class PopupItem(
    val key: String,
    val slot: Int,
    val icon: Material,
    val customTexture: String?,
    val name: String,
    val lore: List<String>,
    val enchanted: Boolean,
    val actions: List<PopupAction>,
    val opOnly: Boolean = false,
    val fallbackIcon: Material? = null,
    val fallbackName: String = " "
)

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