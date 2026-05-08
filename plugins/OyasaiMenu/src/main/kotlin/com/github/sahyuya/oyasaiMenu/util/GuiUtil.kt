package com.github.sahyuya.oyasaiMenu.util

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

object GuiUtil {
    fun makeItem(mat: Material, name: String, lore: List<String> = emptyList()): ItemStack {
        val item = ItemStack(mat)
        val meta = item.itemMeta ?: return item
        meta.displayName(comp(name))
        if (lore.isNotEmpty()) meta.lore(lore.map { comp(it) })
        item.itemMeta = meta
        return item
    }
    fun colorizeComponent(text: String): Component = LegacyComponentSerializer.legacyAmpersand()
        .deserialize(text).decoration(TextDecoration.ITALIC, false); fun comp(text: String) = colorizeComponent(text)
    fun colorize(text: String): String = text.replace('&', '\u00A7'); fun c(text: String) = colorize(text)
}