package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.BigWolfKeys
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/**
 * アイテム管理システム
 *
 * スキルアンロック、パーティクルアンロック、ペットフード、ブラシ、おやつなど
 * ペット関連のアイテムの作成と識別を管理します。
 */
class ItemManagementSystem {

  // --- Pet Food, Brush, Treat Recognition ---

  fun isPetFood(item: ItemStack): Boolean =
      item.type == Material.COOKED_BEEF &&
          PlainTextComponentSerializer.plainText()
              .serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("魔法のペットフード")

fun isPetBrush(item: ItemStack): Boolean =
    item.type == Material.BRUSH &&
        PlainTextComponentSerializer.plainText()
            .serialize(item.itemMeta?.displayName() ?: Component.empty())
            .contains("ペットブラシ")

fun isPetTreat(item: ItemStack): Boolean =
    item.type == Material.COOKIE &&
        PlainTextComponentSerializer.plainText()
            .serialize(item.itemMeta?.displayName() ?: Component.empty())
            .contains("おやつ")

  fun isPetHeal(item: ItemStack): Boolean =
      item.type == Material.GOLDEN_APPLE &&
          PlainTextComponentSerializer.plainText()
              .serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("ヒールポーション")

  fun createPetHealItem(): ItemStack =
      ItemStack(Material.GOLDEN_APPLE).apply {
        val healAmount = BigWolfConfig.healItemAmount
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("ヒールポーション", AQUA))
              lore(
                  listOf(
                      Component.text("ペットに右クリックで使用", GRAY),
                      Component.text("体力を$healAmount 回復させます", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  // --- Skill Unlock Items ---

  fun createSkillUnlockItem(level: Int): ItemStack =
      ItemStack(Material.BOOK).apply {
        val (name, color) =
            when (level) {
              1 -> "咆哮の書" to GOLD
              2 -> "突進の書" to AQUA
              3 -> "極意の書" to LIGHT_PURPLE
              else -> "未知の書" to WHITE
            }
        val cost = BigWolfConfig.getSkillBookCost(level)
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("【スキル強化】$name", color))
              lore(
                  listOf(
                      Component.text("ペットに右クリックで与えて", GRAY),
                      Component.text("新しいスキルをアンロック！", YELLOW),
                      Component.text("コスト: ${cost}pt", GOLD)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  fun getUnlockItemLevel(item: ItemStack): Int {
    if (item.type != Material.BOOK || !item.hasItemMeta()) return 0
    val name =
        PlainTextComponentSerializer.plainText()
            .serialize(item.itemMeta.displayName() ?: Component.empty())
    return when {
      name.contains("咆哮の書") -> 1
      name.contains("突進の書") -> 2
      name.contains("極意の書") -> 3
      else -> 0
    }
  }

  // --- Particle Unlock Items ---

  // デフォルト: 0=なし, 1=電気, 2=炎, 3=青炎, 4=ハート
  // アンロック可能: 5=星, 6=音符, 7=雪, 8=桜, 9=エンド, 10=スライム
  private val particleTypes = listOf(
    0 to ("なし" to Material.BARRIER),
    1 to ("電気" to Material.LIGHTNING_ROD),
    2 to ("炎" to Material.BLAZE_POWDER),
    3 to ("青炎" to Material.SOUL_CAMPFIRE),
    4 to ("ハート" to Material.RED_DYE),
    5 to ("星" to Material.NETHER_STAR),
    6 to ("音符" to Material.NOTE_BLOCK),
    7 to ("雪" to Material.SNOWBALL),
    8 to ("桜" to Material.CHERRY_LEAVES),
    9 to ("エンド" to Material.ENDER_PEARL),
    10 to ("スライム" to Material.SLIME_BALL)
  )

  fun createParticleUnlockItem(particleId: Int): ItemStack {
    val (name, material) = particleTypes.find { it.first == particleId }?.second ?: ("不明" to Material.PAPER)
    return ItemStack(material).apply {
      itemMeta = itemMeta.apply {
        displayName(Component.text("★ パーティクルの結晶【$name】", LIGHT_PURPLE))
        lore(listOf(
          Component.text("ペットに右クリックで使用", GRAY),
          Component.text("パーティクル「$name」をアンロック！", YELLOW)
        ))
        persistentDataContainer.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, particleId)
        addEnchant(Enchantment.UNBREAKING, 1, true)
        addItemFlags(ItemFlag.HIDE_ENCHANTS)
      }
    }
  }

  fun isParticleUnlockItem(item: ItemStack): Boolean {
    if (!item.hasItemMeta()) return false
    val meta = item.itemMeta
    val name = PlainTextComponentSerializer.plainText().serialize(meta.displayName() ?: Component.empty())
    return name.contains("パーティクルの結晶") &&
           meta.persistentDataContainer.has(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER)
  }

  fun getParticleUnlockId(item: ItemStack): Int {
    if (!item.hasItemMeta()) return -1
    return item.itemMeta.persistentDataContainer.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: -1
  }
}
