package com.github.sahyuya.socialvotes.gui

import org.bukkit.Material
import org.bukkit.inventory.ItemStack

internal fun createGuiItem(
    material: Material,
    name: String,
    lore: List<String> = listOf(),
): ItemStack {
  val it = ItemStack(material)
  val meta = it.itemMeta!!
  meta.setDisplayName(name)
  meta.lore = lore
  it.itemMeta = meta
  return it
}
