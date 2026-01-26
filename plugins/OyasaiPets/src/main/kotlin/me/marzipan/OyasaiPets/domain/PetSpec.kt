package me.marzipan.OyasaiPets.domain

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.EntityType
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

/**
 * ペットの仕様定義
 * MOBごとの能力値やおもちゃ設定を保持
 */
data class PetSpec(
    val category: PetCategory,
    val entityType: EntityType,
    val baseSpeed: Double = 0.6,
    val maxSpeed: Double = 1.1,
    val jumpPower: Double = 0.5,
    val scaleRange: ClosedRange<Double> = 1.5..2.5,
    val toyMaterial: Material? = null,
    val toyName: String? = null,
    val toyType: ToyType = ToyType.NONE,
    val toyGravity: Boolean = true
) {
    /**
     * このペット用のおもちゃアイテムを生成
     * @return おもちゃアイテム、定義がない場合はAIR
     */
    fun createToyItem(): ItemStack {
        if (toyMaterial == null || toyName == null) return ItemStack(Material.AIR)
        return ItemStack(toyMaterial).apply {
            itemMeta = itemMeta.apply {
                val color = if (toyType == ToyType.FISHING_ROD)
                    NamedTextColor.LIGHT_PURPLE else NamedTextColor.YELLOW
                displayName(Component.text("★ $toyName", color))
                val desc = when (toyType) {
                    ToyType.THROW_FETCH -> "右クリックで投げて遊ぶ (${entityType.name.lowercase()}用)"
                    ToyType.FISHING_ROD -> "投げてジャンプさせる (${entityType.name.lowercase()}用)"
                    else -> ""
                }
                lore(listOf(Component.text(desc, NamedTextColor.GRAY)))
                addEnchant(Enchantment.UNBREAKING, 1, true)
                addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
        }
    }
}

