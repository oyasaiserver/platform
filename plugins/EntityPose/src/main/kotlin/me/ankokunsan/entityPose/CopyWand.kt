package me.ankokunsan.entityPose


import me.ankokunsan.entityPose.EntityPose.Companion.COPY_STICK_KEY
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.persistence.PersistentDataType

object CopyWand {
    fun create1(): ItemStack {
        val item = ItemStack(Material.ECHO_SHARD)
        val meta: ItemMeta = item.itemMeta!!

        // 名前
        meta.setDisplayName("${ChatColor.GREEN}Entity Copy Wand")

        // Lore
        meta.lore = listOf(
            "${ChatColor.GRAY}エンティティを左クリック→pos1",
            "${ChatColor.GRAY}エンティティを右クリック→pos2"
        )

        meta.addEnchant(Enchantment.DENSITY, 1, true)
        meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)

        meta.persistentDataContainer.set(
            COPY_STICK_KEY,
            PersistentDataType.BYTE,
            1.toByte()
        )
        item.itemMeta = meta
        return item
    }
}