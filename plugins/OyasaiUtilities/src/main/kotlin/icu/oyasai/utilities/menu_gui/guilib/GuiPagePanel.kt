package icu.oyasai.utilities.menu_gui.guilib

import icu.oyasai.utilities.menu_gui.guilib.GuiInventory.clickSound
import icu.oyasai.utilities.menu_gui.guilib.GuiItem.guiClickEvent
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.event.inventory.InventoryType
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

/**
 * ページを持つGUIのパネル
 *
 * @param posX パネルのX座標(左上から0~8)
 * @param posY パネルのY座標(左上から0~5)
 * @param x パネルの横幅(1~9)
 * @param y パネルの縦幅(1~6)
 * @param itemList (Option)アイテムリスト
 */
class GuiPagePanel(
    val posX: Int,
    val posY: Int,
    x: Int,
    y: Int,
    itemList: MutableMap<Int, MutableList<ItemStack?>> = mutableMapOf(),
) : GuiPage(x, y, itemList) {
  /** 渡されたインベントリに現在のページ内アイテムをセットする */
  fun reflash(inv: Inventory): Boolean {
    if (inv.type != InventoryType.CHEST) return false
    val line = inv.size / 9
    if (x !in 1..9) return false
    if (y !in 1..6) return false
    if (posY + y > line) return false
    if (posX + x > 9) return false
    val list = getItemList(getNowPage()) ?: return false
    list.forEachIndexed { i, item ->
      val index = posX + i % x + (posY + i / x) * 9
      inv.setItem(index, item)
    }
    return true
  }

  fun nextPageItem(material: Material = Material.WHITE_WOOL): ItemStack {
    return ItemStack(material)
        .guiClickEvent {
          if (nextPage()) {
            it.clickSound()
            reflash(it.clickedInventory ?: return@guiClickEvent)
          }
        }
        .text("&aNext Page", listOf("&7次のページへ"))
  }

  fun backPageItem(material: Material = Material.WHITE_WOOL): ItemStack {
    return ItemStack(material)
        .guiClickEvent {
          if (backPage()) {
            it.clickSound()
            reflash(it.clickedInventory ?: return@guiClickEvent)
          }
        }
        .text("&aBack Page", listOf("&7前のページへ"))
  }
}

private fun ItemStack.text(title: String, lore: List<String>): ItemStack {
  this.editMeta {
    it.setDisplayName(title.color())
    it.lore = lore.map { l -> l.color() }
  }
  return this
}

private fun String.color(char: Char = '&'): String {
  return ChatColor.translateAlternateColorCodes(char, this)
}
