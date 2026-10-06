package icu.oyasai.games.pvp

import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.configuration.serialization.ConfigurationSerialization
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.inventory.meta.LeatherArmorMeta
import org.bukkit.potion.PotionEffect

internal val enchantAliases =
    mapOf(
        "DAMAGE_ALL" to "sharpness",
        "ARROW_DAMAGE" to "power",
        "ARROW_KNOCKBACK" to "punch",
        "ARROW_FIRE" to "flame",
        "ARROW_INFINITE" to "infinity",
        "DURABILITY" to "unbreaking",
        "PROTECTION_ENVIRONMENTAL" to "protection",
        "PROTECTION_PROJECTILE" to "projectile_protection",
        "PROTECTION_EXPLOSIONS" to "blast_protection",
        "PROTECTION_FIRE" to "fire_protection",
        "PROTECTION_FALL" to "feather_falling",
        "DIG_SPEED" to "efficiency",
        "LOOT_BONUS_BLOCKS" to "fortune",
        "LOOT_BONUS_MOBS" to "looting",
        "OXYGEN" to "respiration",
        "WATER_WORKER" to "aqua_affinity",
        "DEPTH_STRIDER" to "depth_strider",
        "LUCK" to "luck_of_the_sea",
        "SWEEPING_EDGE" to "sweeping_edge",
    )

internal fun enchantKey(name: String): String =
    if (':' in name) name.lowercase()
    else "minecraft:" + (enchantAliases[name.uppercase()] ?: name.lowercase())

internal fun attributeKey(name: String): String =
    if (':' in name) name.lowercase()
    else
        "minecraft:" +
            name.lowercase().removePrefix("generic_").removePrefix("player_").removePrefix("horse_")

@Suppress("UNCHECKED_CAST")
internal fun normalizeMetadata(input: Map<String, Any?>): MutableMap<String, Any?> {
  val meta = LinkedHashMap(input)
  for (key in listOf("enchants", "stored-enchants")) {
    (meta[key] as? Map<String, Any>)?.let {
      meta[key] = it.mapKeys { entry -> enchantKey(entry.key) }
    }
  }
  (meta["attribute-modifiers"] as? Map<String, Any>)?.let {
    meta["attribute-modifiers"] = it.mapKeys { entry -> attributeKey(entry.key) }
  }
  return meta
}

internal object PvpItems {
  @Suppress("UNCHECKED_CAST")
  fun read(raw: Any): ItemStack {
    if (raw is ItemStack) return raw.clone()
    val map = raw as? Map<String, Any?> ?: error("Invalid item entry")
    val material =
        Material.matchMaterial(map["type"] as? String ?: error("Missing item type"))
            ?: error("Unknown item type")
    val amount = (map["amount"] as? Number)?.toInt() ?: 1
    require(amount in 0..99) { "Invalid item amount" }
    val item = ItemStack(material, amount)
    if (material.isAir || amount == 0) return item
    val rawMeta = map["meta"] ?: return item
    if (rawMeta is ItemMeta) {
      item.itemMeta = rawMeta
      return item
    }
    val meta = normalizeMetadata(rawMeta as Map<String, Any?>)
    meta["=="] = "ItemMeta"
    meta.putIfAbsent(
        "meta-type",
        Bukkit.getItemFactory().getItemMeta(material)!!.serialize()["meta-type"],
    )
    for (key in listOf("color", "custom-color")) {
      (meta[key] as? Map<String, Any>)?.let { meta[key] = Color.deserialize(it) }
    }
    (meta["custom-effects"] as? List<*>)?.let { effects ->
      meta["custom-effects"] =
          effects.map { if (it is PotionEffect) it else PotionEffect(it as Map<String, Any>) }
    }
    val decoded =
        ConfigurationSerialization.deserializeObject(meta) as? ItemMeta
            ?: error("Invalid item metadata")
    check(item.setItemMeta(decoded)) { "Incompatible item metadata" }
    return item
  }

  fun list(list: List<*>): List<ItemStack> = list.map { read(it ?: error("Null item")) }

  fun armorSlot(material: Material): Int? =
      when {
        material.name.endsWith("_BOOTS") -> 0
        material.name.endsWith("_LEGGINGS") -> 1
        material.name.endsWith("_CHESTPLATE") || material == Material.ELYTRA -> 2
        material.name.endsWith("_HELMET") ||
            material == Material.CARVED_PUMPKIN ||
            material.name.endsWith("_HEAD") ||
            material.name.endsWith("_SKULL") ||
            material.name.endsWith("_WOOL") -> 3
        else -> null
      }

  fun color(item: ItemStack, color: Color): ItemStack {
    val meta = item.itemMeta
    if (meta is LeatherArmorMeta) {
      meta.setColor(color)
      item.itemMeta = meta
    }
    return item
  }
}
