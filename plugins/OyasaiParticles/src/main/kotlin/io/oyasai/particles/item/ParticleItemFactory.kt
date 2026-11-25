package io.oyasai.particles.item

import io.oyasai.particles.model.AmbientSoundPreset
import io.oyasai.particles.model.ParticleEffectConfig
import io.oyasai.particles.model.ParticlePreset
import io.oyasai.particles.model.PseudoWeather
import io.oyasai.particles.model.TimePreset
import io.oyasai.particles.model.resolveNonPlaceableMaterial
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

class ParticleItemFactory(plugin: Plugin) {
  private val wandKey = NamespacedKey(plugin, "wand")
  private val effectItemKey = NamespacedKey(plugin, "effect_item")
  private val particleKey = NamespacedKey(plugin, "particle")
  private val weatherKey = NamespacedKey(plugin, "weather")
  private val timeKey = NamespacedKey(plugin, "time")
  private val soundKey = NamespacedKey(plugin, "sound")
  private val densityKey = NamespacedKey(plugin, "density")
  private val materialKey = NamespacedKey(plugin, "item_material")
  private val displayNameKey = NamespacedKey(plugin, "display_name")

  fun createWand(): ItemStack {
    val item = ItemStack(Material.BLAZE_ROD, 1)
    val meta = item.itemMeta ?: return item
    meta.displayName(
        Component.text("パーティクル範囲指定ワンド", NamedTextColor.AQUA)
            .decoration(TextDecoration.ITALIC, false)
    )
    meta.lore(
        listOf(
            Component.text("左クリック: Pos1 (円柱モード時は中心)", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("右クリック: Pos2 (円柱モード時は半径)", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("Shift + 右クリック: 四角 / 円柱 切替", NamedTextColor.YELLOW)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("手に持っている間、周囲のエリアを可視化します", NamedTextColor.GREEN)
                .decoration(TextDecoration.ITALIC, false),
        )
    )
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    meta.persistentDataContainer.set(wandKey, PersistentDataType.BYTE, 1.toByte())
    item.itemMeta = meta
    return item
  }

  fun isWand(item: ItemStack?): Boolean {
    if (item == null || item.type.isAir) return false
    val pdc = item.itemMeta?.persistentDataContainer ?: return false
    return pdc.get(wandKey, PersistentDataType.BYTE) == 1.toByte()
  }

  fun createEffectItem(config: ParticleEffectConfig, amount: Int = 1): ItemStack {
    val normalized = config.normalized()
    val material = resolveNonPlaceableMaterial(normalized.itemMaterialKey)
    val item = ItemStack(material, amount.coerceIn(1, 64))
    val meta = item.itemMeta ?: return item
    val title = normalized.itemDisplayName ?: "パーティクル結晶"
    meta.displayName(
        Component.text(title, NamedTextColor.LIGHT_PURPLE).decoration(TextDecoration.ITALIC, false)
    )
    meta.lore(
        listOf(
            Component.text("パーティクル: ${normalized.particle.displayName}", NamedTextColor.WHITE)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("疑似天候: ${normalized.weather.displayName}", NamedTextColor.AQUA)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("個人時間: ${normalized.time.displayName}", NamedTextColor.YELLOW)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("環境音: ${normalized.sound.displayName}", NamedTextColor.GREEN)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("密度: ${normalized.density}/5", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false),
            Component.empty(),
            Component.text("ワンドで範囲を指定して右クリックで空間に適用", NamedTextColor.GOLD)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("※ /opart list の回収ボタンで元に戻せます", NamedTextColor.DARK_GRAY)
                .decoration(TextDecoration.ITALIC, false),
        )
    )
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    val pdc = meta.persistentDataContainer
    pdc.set(effectItemKey, PersistentDataType.BYTE, 1.toByte())
    pdc.set(particleKey, PersistentDataType.STRING, normalized.particle.name)
    pdc.set(weatherKey, PersistentDataType.STRING, normalized.weather.name)
    pdc.set(timeKey, PersistentDataType.STRING, normalized.time.name)
    pdc.set(soundKey, PersistentDataType.STRING, normalized.sound.name)
    pdc.set(densityKey, PersistentDataType.INTEGER, normalized.density)
    pdc.set(materialKey, PersistentDataType.STRING, material.name)
    if (normalized.itemDisplayName != null) {
      pdc.set(displayNameKey, PersistentDataType.STRING, normalized.itemDisplayName)
    }
    item.itemMeta = meta
    return item
  }

  fun parseEffectItem(item: ItemStack?): ParticleEffectConfig? {
    if (item == null || item.type.isAir) return null
    val pdc = item.itemMeta?.persistentDataContainer ?: return null
    if (pdc.get(effectItemKey, PersistentDataType.BYTE) != 1.toByte()) return null
    return ParticleEffectConfig(
            particle = ParticlePreset.fromKey(pdc.get(particleKey, PersistentDataType.STRING)),
            weather = PseudoWeather.fromKey(pdc.get(weatherKey, PersistentDataType.STRING)),
            time = TimePreset.fromKey(pdc.get(timeKey, PersistentDataType.STRING)),
            sound = AmbientSoundPreset.fromKey(pdc.get(soundKey, PersistentDataType.STRING)),
            density = pdc.get(densityKey, PersistentDataType.INTEGER) ?: 2,
            itemMaterialKey = pdc.get(materialKey, PersistentDataType.STRING) ?: item.type.name,
            itemDisplayName = pdc.get(displayNameKey, PersistentDataType.STRING),
        )
        .normalized()
  }

  fun isManagedItem(item: ItemStack?): Boolean = isWand(item) || parseEffectItem(item) != null
}
