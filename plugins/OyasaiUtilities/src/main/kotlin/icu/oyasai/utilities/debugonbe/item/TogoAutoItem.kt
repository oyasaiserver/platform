package icu.oyasai.utilities.debugonbe.item

import icu.oyasai.utilities.OyasaiUtilities.addText
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

/** 手持ちでTogoを自動起動するアイテム。 */
object TogoAutoItem {
  private const val ITEM_KEY = "togo_auto_item"

  fun create(plugin: Plugin): ItemStack {
    val item = ItemStack(Material.ENDER_EYE)
    val meta = item.itemMeta ?: return item
    meta.persistentDataContainer.set(key(plugin), PersistentDataType.BYTE, 1)
    item.itemMeta = meta
    return item.addText(
        "§dTogo自動起動アイテム",
        mutableListOf("§7手に持つと現在位置でTogoを自動起動", "§7移動しても表示位置は追従しません"),
    )
  }

  fun isItem(plugin: Plugin, item: ItemStack?): Boolean {
    val value =
        item?.itemMeta?.persistentDataContainer?.get(key(plugin), PersistentDataType.BYTE)
            ?: return false
    return value.toInt() == 1
  }

  private fun key(plugin: Plugin): NamespacedKey = NamespacedKey(plugin, ITEM_KEY)
}
