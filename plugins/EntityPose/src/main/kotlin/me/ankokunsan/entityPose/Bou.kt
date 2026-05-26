package me.ankokunsan.entityPose

import me.ankokunsan.entityPose.EntityPose.Companion.ENTITY_STICK_KEY
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.persistence.PersistentDataType

object Bou {

  fun create(): ItemStack {
    val item = ItemStack(Material.BREEZE_ROD)
    val meta: ItemMeta = item.itemMeta!!

    // 名前
    meta.setDisplayName("${ChatColor.GREEN}エンティティ棒")

    // Lore
    meta.lore =
        listOf(
            "${ChatColor.GRAY}ブロックを左クリック→置くエンティティを選択するGUI",
            "${ChatColor.GRAY}エンティティを左クリック→部位選択(しゃがみで戻る)",
            "${ChatColor.GRAY}エンティティを右クリック→回転(しゃがみで逆回転)",
        )

    meta.addEnchant(Enchantment.DENSITY, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)

    // 壊れない設定（必要なら true）
    meta.isUnbreakable = false

    meta.persistentDataContainer.set(ENTITY_STICK_KEY, PersistentDataType.BYTE, 1.toByte())
    item.itemMeta = meta
    return item
  }
}
