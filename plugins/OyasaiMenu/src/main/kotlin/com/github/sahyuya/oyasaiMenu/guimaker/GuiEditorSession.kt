package com.github.sahyuya.oyasaiMenu.guimaker

import org.bukkit.inventory.Inventory

data class GuiActionDef(val type: String, val params: Map<String, String> = emptyMap())

data class GuiSlotDef(
    var name: String = "",
    var lore: MutableList<String> = mutableListOf(),
    var permission: String? = null,
    var enchanted: Boolean = false,
    val actions: MutableList<GuiActionDef> = mutableListOf(),
    val extras: MutableMap<String, String> = mutableMapOf(),
)

enum class GuiEditableSurface {
  NORMAL,
  POPUP,
}

data class PopupEditorMeta(var glass: String = "GRAY_STAINED_GLASS_PANE", var navActive: Int = -1)

class GuiEditorSession(
    val menuId: String,
    var menuTitle: String = "&8メニュー",
    var menuSize: Int = 54,
) {
  var surface: GuiEditableSurface = GuiEditableSurface.NORMAL
  var popupMeta: PopupEditorMeta? = null
  val slots: MutableMap<Int, GuiSlotDef> = mutableMapOf()
  @Volatile var pendingInput: PendingInput? = null
  var canvasInventory: Inventory? = null
  var contextSlot: Int = -1
  var soundVolume: Float = 1.0f
  var favRegistering: Boolean = false // お気に入り登録モード中
  var templateEditTarget: GuiTemplateEntry? = null

  val displayId: String
    get() = if (surface == GuiEditableSurface.POPUP) "popup/$menuId" else menuId
}

sealed class PendingInput(val slot: Int) {
  class ItemName(slot: Int, val color: String = "") : PendingInput(slot)

  class LoreLine(slot: Int, val color: String = "") : PendingInput(slot)

  class LoreEdit(slot: Int, val lineIndex: Int, val color: String = "") : PendingInput(slot)

  class Permission(slot: Int) : PendingInput(slot)

  class ActionParam(slot: Int, val actionType: String, val actionIndex: Int? = null) :
      PendingInput(slot)

  class ActionRawParams(slot: Int, val actionIndex: Int) : PendingInput(slot)

  class MenuTitle(val color: String = "") : PendingInput(-1)
}
