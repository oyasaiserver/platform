package icu.oyasai.utilities.hologram

import java.io.File
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration

data class Hologram(
    val name: String,
    val world: String,
    val x: Double,
    val y: Double,
    val z: Double,
    val lines: List<String>,
    val enabled: Boolean,
    val viewRange: Float? = null,
    val seeThrough: Boolean = true,
)

/** DecentHolograms の holograms/<name>.yml 1件。location が読めなければ null。 */
fun parseDecentHologram(name: String, yamlText: String): Hologram? {
  val yaml = YamlConfiguration()
  yaml.loadFromString(yamlText)
  val location = yaml.getString("location") ?: return null
  val parts = location.split(":")
  if (parts.size < 4) return null
  val x = parts[parts.size - 3].toDoubleOrNull() ?: return null
  val y = parts[parts.size - 2].toDoubleOrNull() ?: return null
  val z = parts.last().toDoubleOrNull() ?: return null
  val world = parts.dropLast(3).joinToString(":")
  if (world.isEmpty()) return null
  val enabled = if (yaml.contains("enabled")) yaml.getBoolean("enabled") else true
  return Hologram(name, world, x, y, z, pageLines(yaml), enabled)
}

fun readHolograms(file: File): LinkedHashMap<String, Hologram> {
  val result = linkedMapOf<String, Hologram>()
  if (!file.exists()) return result
  val yaml = YamlConfiguration.loadConfiguration(file)
  for (raw in yaml.getMapList("holograms")) {
    val holo = fromMap(raw) ?: continue
    result[holo.name] = holo
  }
  return result
}

fun writeHolograms(file: File, holograms: Collection<Hologram>) {
  val yaml = YamlConfiguration()
  yaml.set(
      "holograms",
      holograms.map { holo ->
        buildMap {
          put("name", holo.name)
          put("world", holo.world)
          put("x", holo.x)
          put("y", holo.y)
          put("z", holo.z)
          put("enabled", holo.enabled)
          put("seeThrough", holo.seeThrough)
          holo.viewRange?.let { put("viewRange", it) }
          put("lines", holo.lines)
        }
      },
  )
  file.parentFile.mkdirs()
  yaml.save(file)
}

private fun pageLines(yaml: YamlConfiguration): List<String> {
  val pages = yaml.getMapList("pages")
  if (pages.isEmpty()) return emptyList()
  return lineContents(pages[0]["lines"])
}

private fun lineContents(raw: Any?): List<String> {
  val list = raw as? List<*> ?: return emptyList()
  return list.mapNotNull { item ->
    when (item) {
      is Map<*, *> -> item["content"]?.toString()
      is ConfigurationSection -> item.get("content")?.toString()
      else -> null
    }
  }
}

private fun fromMap(raw: Map<*, *>): Hologram? {
  val name = raw["name"]?.toString()?.takeIf { it.isNotEmpty() } ?: return null
  val world = raw["world"]?.toString()?.takeIf { it.isNotEmpty() } ?: return null
  val x = (raw["x"] as? Number)?.toDouble() ?: return null
  val y = (raw["y"] as? Number)?.toDouble() ?: return null
  val z = (raw["z"] as? Number)?.toDouble() ?: return null
  val enabled = raw["enabled"] as? Boolean ?: true
  val lines = (raw["lines"] as? List<*>)?.map { it?.toString() ?: "" } ?: emptyList()
  val viewRange = (raw["viewRange"] as? Number)?.toFloat()
  val seeThrough = raw["seeThrough"] as? Boolean ?: true
  return Hologram(name, world, x, y, z, lines, enabled, viewRange, seeThrough)
}
