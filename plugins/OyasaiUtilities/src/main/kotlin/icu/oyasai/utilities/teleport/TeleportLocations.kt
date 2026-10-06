package icu.oyasai.utilities.teleport

import java.io.File
import java.util.Locale
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration

data class SavedLocation(
    val worldUuid: String?,
    val worldName: String?,
    val x: Double,
    val y: Double,
    val z: Double,
    val yaw: Float = 0f,
    val pitch: Float = 0f,
) {
  fun resolve(): Location? {
    val world =
        worldUuid
            ?.let { runCatching { UUID.fromString(it) }.getOrNull() }
            ?.let { Bukkit.getWorld(it) } ?: worldName?.let { Bukkit.getWorld(it) } ?: return null
    return Location(world, x, y, z, yaw, pitch)
  }

  fun write(section: ConfigurationSection) {
    section.set("world", worldUuid)
    section.set("world-name", worldName)
    section.set("x", x)
    section.set("y", y)
    section.set("z", z)
    section.set("yaw", yaw.toDouble())
    section.set("pitch", pitch.toDouble())
  }

  companion object {
    fun from(location: Location): SavedLocation =
        SavedLocation(
            location.world?.uid?.toString(),
            location.world?.name,
            location.x,
            location.y,
            location.z,
            location.yaw,
            location.pitch,
        )

    fun read(section: ConfigurationSection): SavedLocation {
      val world = section.getString("world")?.takeIf { it.isNotBlank() }
      val uuid = world?.takeIf { runCatching { UUID.fromString(it) }.isSuccess }
      val name =
          section.getString("world-name")?.takeIf { it.isNotBlank() }
              ?: world?.takeIf { uuid == null }
      require(uuid != null || name != null) { "Location ${section.currentPath} has no world" }
      require(listOf("x", "y", "z").all { section.isSet(it) && section.get(it) is Number }) {
        "Location ${section.currentPath} has invalid coordinates"
      }
      return SavedLocation(
              uuid,
              name,
              section.getDouble("x"),
              section.getDouble("y"),
              section.getDouble("z"),
              section.getDouble("yaw").toFloat(),
              section.getDouble("pitch").toFloat(),
          )
          .also {
            require(
                listOf(it.x, it.y, it.z, it.yaw.toDouble(), it.pitch.toDouble()).all { n ->
                  n.isFinite()
                }
            )
          }
    }
  }
}

/**
 * Operator-owned configuration is copied once; existing files are never replaced from Essentials.
 */
class TeleportLocations(dataDirectory: File, essentialsDirectory: File) {
  val warps: Map<String, SavedLocation>
  val jails: Map<String, SavedLocation>
  val toolsKit: List<String>

  init {
    val warpFile = File(dataDirectory, "Warps/warps.yml")
    if (!warpFile.exists()) {
      val yaml = YamlConfiguration()
      File(essentialsDirectory, "warps")
          .listFiles()
          ?.filter { it.extension.equals("yml", true) }
          ?.sortedBy { it.name }
          ?.forEach { legacy ->
            val source = YamlConfiguration().apply { load(legacy) }
            val name =
                (source.getString("name") ?: legacy.nameWithoutExtension).lowercase(Locale.ROOT)
            SavedLocation.read(source).write(yaml.createSection("warps.$name"))
          }
      saveNew(yaml, warpFile)
    }
    warps = readLocations(warpFile, "warps")
    val jailFile = File(dataDirectory, "Jail/jails.yml")
    if (!jailFile.exists()) {
      val yaml = YamlConfiguration()
      val legacy = File(essentialsDirectory, "jail.yml")
      if (legacy.exists()) {
        val source = YamlConfiguration().apply { load(legacy) }
        source.getConfigurationSection("jails")?.let { section ->
          section.getKeys(false).forEach { name ->
            SavedLocation.read(requireNotNull(section.getConfigurationSection(name)))
                .write(yaml.createSection("jails.${name.lowercase(Locale.ROOT)}"))
          }
        }
      }
      saveNew(yaml, jailFile)
    }
    jails = readLocations(jailFile, "jails")
    val kitFile = File(dataDirectory, "Kits/kits.yml")
    if (!kitFile.exists()) {
      val yaml = YamlConfiguration()
      val legacy = File(essentialsDirectory, "kits.yml")
      val source = YamlConfiguration().apply { if (legacy.exists()) load(legacy) }
      yaml.set("kits.tools.items", source.getStringList("kits.tools.items"))
      saveNew(yaml, kitFile)
    }
    toolsKit = YamlConfiguration().apply { load(kitFile) }.getStringList("kits.tools.items")
  }

  private fun saveNew(yaml: YamlConfiguration, file: File) {
    file.parentFile.mkdirs()
    yaml.save(file)
  }

  private fun readLocations(file: File, key: String): Map<String, SavedLocation> {
    val section =
        YamlConfiguration().apply { load(file) }.getConfigurationSection(key) ?: return emptyMap()
    return section.getKeys(false).associate { name ->
      name.lowercase(Locale.ROOT) to
          SavedLocation.read(requireNotNull(section.getConfigurationSection(name)))
    }
  }
}
