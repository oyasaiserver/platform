package io.oyasai.signshop

import java.math.BigDecimal
import java.math.RoundingMode
import java.util.Base64
import java.util.UUID
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack

internal val SECTIONS = listOf("sellers", "deferred_sellers", "invalid_sellers")
internal val KINDS = listOf("Buy", "Sell", "iBuy", "iSell", "Device")

internal fun priceYen(raw: String): Long? {
  val value = raw.trim().removePrefix("¥").removePrefix("￥").removePrefix("$").trim()
  if (!Regex("(?:0|[1-9]\\d*|[1-9]\\d{0,2}(?:,\\d{3})+)(?:\\.\\d+)?").matches(value)) return null
  return try {
    val decimal = BigDecimal(value.replace(",", ""))
    val rounded = decimal.setScale(0, RoundingMode.HALF_UP).longValueExact()
    if (rounded > 10_000_000_000_000L || (decimal.signum() > 0 && rounded == 0L)) null else rounded
  } catch (_: Exception) {
    null
  }
}

internal fun kind(raw: String): String? =
    KINDS.firstOrNull { "[$it]".equals(raw.trim().replace(Regex("(?i)^§[0-9a-fk-or]"), ""), true) }

internal data class Point(val world: String, val x: Int, val y: Int, val z: Int) {
  override fun toString(): String = "$x/$y/$z/$world"
}

internal fun point(raw: String, defaultWorld: String): Point? {
  val parts = raw.split('/')
  if (parts.size !in 3..4) return null
  val x = parts[0].toIntOrNull() ?: return null
  val y = parts[1].toIntOrNull() ?: return null
  val z = parts[2].toIntOrNull() ?: return null
  val world = if (parts.size == 4) parts[3] else defaultWorld
  if (world.isBlank()) return null
  return Point(world, x, y, z)
}

internal class Shop(
    val section: String,
    val key: String,
    val record: MutableMap<String, Any?>,
    var haltReason: String?,
) {
  val world: String
    get() = record["shopworld"] as? String ?: ""

  val owner: UUID?
    get() = runCatching { UUID.fromString(record["owner"] as String) }.getOrNull()

  val sign: Point?
    get() = (record["sign"] as? String)?.let { point(it, world) }

  val containers: List<Point>
    get() =
        (record["containables"] as? List<*>)?.mapNotNull {
          (it as? String)?.let { s -> point(s, world) }
        } ?: emptyList()

  val devices: List<Point>
    get() =
        (record["activatables"] as? List<*>)?.mapNotNull {
          (it as? String)?.let { s -> point(s, world) }
        } ?: emptyList()

  val items: List<ItemStack>?
    get() =
        (record["items"] as? List<*>)?.map { item ->
          val encoded = item as? String ?: return null
          decodeItem(encoded) ?: return null
        }
}

internal fun decodeItem(value: String): ItemStack? =
    runCatching {
          require(value.startsWith("YAML:"))
          val yaml = String(Base64.getDecoder().decode(value.removePrefix("YAML:")), Charsets.UTF_8)
          val map =
              YamlConfiguration()
                  .apply { loadFromString(yaml) }
                  .getConfigurationSection("item")
                  ?.let(::sectionMap) ?: return null
          ItemStack.deserialize(map)
        }
        .getOrNull()

private fun sectionMap(section: ConfigurationSection): Map<String, Any> =
    section.getKeys(false).associateWith { key ->
      val value = section.get(key)
      if (value is ConfigurationSection) sectionMap(value) else requireNotNull(value)
    }

internal fun encodeItem(item: ItemStack): String {
  val yaml = YamlConfiguration().apply { set("item", item.serialize()) }.saveToString()
  return "YAML:" + Base64.getEncoder().encodeToString(yaml.toByteArray(Charsets.UTF_8))
}
