package icu.oyasai.utilities.hats

import icu.oyasai.utilities.YamlConfig
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.util.Vector

internal enum class HatType {
  HALO,
  CAPE,
  CRYSTAL,
  CREEPER_HAT,
  ANGEL_WINGS,
  ARCH,
  TRAIL,
  TORNADO,
  SPHERE,
  HOOP,
  WINGS,
  UNSUPPORTED,
}

internal enum class HatAnchor {
  FEET,
  CHEST,
  HEAD,
}

internal enum class HatTracking {
  NONE,
  BODY,
  HEAD,
}

internal enum class HatMode {
  ALWAYS,
  SPRINTING,
  GLIDING,
  FLYING,
}

internal data class HatParticleSpec(
    val name: String,
    val randomColor: Boolean,
    val color: Color?,
    val size: Float,
    val items: List<Material>,
)

internal data class HatDefinition(
    val id: String,
    val slot: Int,
    val name: String,
    val icon: Material,
    val description: List<String>,
    val type: HatType,
    val location: HatAnchor,
    val offset: Vector,
    val tracking: HatTracking,
    val mode: HatMode,
    val count: Int,
    val speed: Double,
    val randomOffset: Vector,
    val updateFrequency: Int,
    val scale: Double,
    val animated: Boolean,
    val permission: String,
    val particles: List<HatParticleSpec>,
) {
  val renders: Boolean
    get() = type != HatType.UNSUPPORTED && particles.isNotEmpty()
}

internal object HatsMenu {
  lateinit var title: String
    private set

  var size: Int = 54
    private set

  var hats: List<HatDefinition> = emptyList()
    private set

  private val byId = mutableMapOf<String, HatDefinition>()

  fun load() {
    val yaml = YamlConfig("Hats/particles.yml", true)
    yaml.saveDefault()
    yaml.reload()
    title = yaml.getString("settings.title") ?: "&8パーティクルを選ぶ"
    val rows = yaml.getInt("settings.size", 6).coerceIn(1, 6)
    size = rows * 9
    val items = yaml.getConfigurationSection("items")
    val loaded = mutableListOf<HatDefinition>()
    items?.getKeys(false)?.forEach { key ->
      val slot = key.toIntOrNull() ?: return@forEach
      val section = items.getConfigurationSection(key) ?: return@forEach
      val hat = parseHat(slot, section) ?: return@forEach
      loaded += hat
    }
    hats = loaded
    byId.clear()
    loaded.forEach { byId[it.id] = it }
  }

  fun byId(id: String): HatDefinition? = byId[id]

  private fun parseHat(slot: Int, section: ConfigurationSection): HatDefinition? {
    val type = parseType(section.getString("type"))
    if (type == HatType.UNSUPPORTED && section.getString("type").isNullOrBlank()) return null
    val particles = parseParticles(section.getConfigurationSection("particles"))
    if (particles.isEmpty()) return null
    val icon = Material.matchMaterial(section.getString("id") ?: "STONE") ?: Material.STONE
    val id =
        section.getString("key")?.takeIf { it.isNotBlank() }
            ?: slug(section.getString("name") ?: "hat-$slot")
    val permission = section.getString("permission")?.takeIf { it.isNotBlank() } ?: id
    return HatDefinition(
        id = id,
        slot = slot,
        name = section.getString("name") ?: id,
        icon = icon,
        description = section.getStringList("description"),
        type = type,
        location = parseAnchor(section.getString("location")),
        offset = readVector(section.getConfigurationSection("offset")),
        tracking = parseTracking(section.getString("tracking"), type),
        mode = parseMode(section.getString("mode")),
        count = section.getInt("count", 1).coerceAtLeast(1),
        speed = section.getDouble("speed", 0.0),
        randomOffset = readVector(section.getConfigurationSection("random-offset")),
        updateFrequency = section.getInt("update-frequency", 2).coerceAtLeast(1),
        scale = section.getDouble("scale", 1.0).let { if (it <= 0.0) 1.0 else it },
        animated =
            section.getString("animated").equals("animated", ignoreCase = true) ||
                section.getBoolean("animated", false),
        permission = permission,
        particles = particles,
    )
  }

  private fun parseParticles(section: ConfigurationSection?): List<HatParticleSpec> {
    if (section == null) return emptyList()
    return section
        .getKeys(false)
        .sortedBy { it.toIntOrNull() ?: Int.MAX_VALUE }
        .mapNotNull { key ->
          val particleSection = section.getConfigurationSection(key) ?: return@mapNotNull null
          val name = particleSection.getString("particle") ?: return@mapNotNull null
          val colorValue = particleSection.get("color")
          val randomColor = colorValue?.toString().equals("random", ignoreCase = true)
          val rgb =
              when {
                randomColor -> null
                colorValue is Number -> colorValue.toInt()
                colorValue is String -> colorValue.toIntOrNull()
                else -> null
              }
          val items =
              particleSection.getStringList("items").mapNotNull { Material.matchMaterial(it) }
          HatParticleSpec(
              name = name,
              randomColor = randomColor,
              color = rgb?.let { Color.fromRGB(it and 0xFFFFFF) },
              size = particleSection.getDouble("size", 1.0).toFloat().coerceIn(0.1f, 10.0f),
              items = items,
          )
        }
  }

  private fun parseType(raw: String?): HatType =
      when (raw?.lowercase()) {
        "halo" -> HatType.HALO
        "cape" -> HatType.CAPE
        "crystal" -> HatType.CRYSTAL
        "creeper_hat" -> HatType.CREEPER_HAT
        "angel_wings" -> HatType.ANGEL_WINGS
        "arch" -> HatType.ARCH
        "trail" -> HatType.TRAIL
        "tornado" -> HatType.TORNADO
        "sphere" -> HatType.SPHERE
        "hoop" -> HatType.HOOP
        "wings" -> HatType.WINGS
        else -> HatType.UNSUPPORTED
      }

  private fun parseAnchor(raw: String?): HatAnchor =
      when (raw?.lowercase()) {
        "head" -> HatAnchor.HEAD
        "chest" -> HatAnchor.CHEST
        "feet" -> HatAnchor.FEET
        else -> HatAnchor.HEAD
      }

  private fun parseTracking(raw: String?, type: HatType): HatTracking =
      when (raw?.lowercase()) {
        "track_head_movement" -> HatTracking.HEAD
        "track_body_rotation" -> HatTracking.BODY
        "track_nothing" -> HatTracking.NONE
        else ->
            when (type) {
              HatType.CAPE,
              HatType.ARCH -> HatTracking.BODY
              HatType.CRYSTAL -> HatTracking.HEAD
              else -> HatTracking.NONE
            }
      }

  private fun parseMode(raw: String?): HatMode =
      when (raw?.lowercase()) {
        "when_sprinting" -> HatMode.SPRINTING
        "when_gliding" -> HatMode.GLIDING
        "when_flying" -> HatMode.FLYING
        else -> HatMode.ALWAYS
      }

  private fun readVector(section: ConfigurationSection?): Vector {
    if (section == null) return Vector()
    return Vector(section.getDouble("x"), section.getDouble("y"), section.getDouble("z"))
  }

  private fun slug(name: String): String {
    val stripped = name.replace(Regex("[&§][0-9a-fk-or]"), "")
    val slug = stripped.lowercase().replace(Regex("[^a-z0-9]+"), "_").trim('_')
    return slug.ifBlank { "hat" }
  }
}
