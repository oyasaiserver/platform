package com.github.sahyuya.oyasaiMenu.util

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
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

  fun buildSuggestCommandComponent(command: String, hoverText: String): Component =
      Component.text()
          .decoration(TextDecoration.ITALIC, false)
          .append(Component.text("▶ ").color(NamedTextColor.GREEN))
          .append(
              Component.text(command)
                  .color(NamedTextColor.YELLOW)
                  .clickEvent(ClickEvent.suggestCommand(command))
                  .hoverEvent(
                      HoverEvent.showText(
                          Component.text(hoverText)
                              .color(NamedTextColor.GRAY)
                              .decoration(TextDecoration.ITALIC, false)
                      )
                  )
          )
          .build()

  fun colorizeComponent(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)

  fun comp(text: String): Component = colorizeComponent(text)

  fun colorize(text: String): String = text.replace('&', '\u00A7')

  fun c(text: String): String = colorize(text)
}
