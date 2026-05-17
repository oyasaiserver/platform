package com.github.sahyuya.oyasaiMenu.util

import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.meta.ItemMeta

object ItemVisuals {
  fun applyEnchantVisual(meta: ItemMeta, enabled: Boolean) {
    if (enabled) {
      meta.addEnchant(Enchantment.UNBREAKING, 1, true)
      meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    } else {
      meta.removeEnchant(Enchantment.UNBREAKING)
    }
  }
}
