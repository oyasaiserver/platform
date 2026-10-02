package icu.oyasai.utilities.hologram

import java.io.File
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration

enum class BackgroundType(val label: String) {
  TRANSPARENT("透明"),
  DEFAULT("標準 (半透明黒)"),
  BLACK("完全な黒"),
}

enum class DisplayMode(val label: String) {
  NORMAL("通常表示"),
  END_ROLL("エンドロール"),
}

enum class PlayMode(val label: String) {
  ALWAYS("常時再生"),
  PROXIMITY("プレイヤー接近時のみ"),
  MANUAL("手動再生"),
}

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
    val background: BackgroundType = BackgroundType.DEFAULT,
    val scale: Float = 1.0f,
    val vertical: Boolean = false,
    val shadow: Boolean = false,
    val follow: Boolean = true,
    val yaw: Float = 0f,
    val mode: DisplayMode = DisplayMode.NORMAL,
    val windowLines: Int = 5,
    val scrollSpeed: Int = 40,
    val playMode: PlayMode = PlayMode.PROXIMITY,
    val proximityRange: Double = 10.0,
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
  if (world.isEmpty() || !listOf(x, y, z).all { it.isFinite() }) return null
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
          put("background", holo.background.name)
          put("scale", holo.scale.toDouble())
          put("vertical", holo.vertical)
          put("shadow", holo.shadow)
          put("follow", holo.follow)
          put("yaw", holo.yaw.toDouble())
          put("mode", holo.mode.name)
          put("windowLines", holo.windowLines)
          put("scrollSpeed", holo.scrollSpeed)
          put("playMode", holo.playMode.name)
          put("proximityRange", holo.proximityRange)
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
  if (!listOf(x, y, z).all { it.isFinite() }) return null
  val background =
      when (raw["background"]) {
        false -> BackgroundType.TRANSPARENT
        true -> BackgroundType.DEFAULT
        else -> enumValue(raw["background"], BackgroundType.DEFAULT)
      }
  return Hologram(
      name,
      world,
      x,
      y,
      z,
      lines,
      enabled,
      viewRange?.takeIf { it.isFinite() && it >= 0 },
      seeThrough,
      background,
      scale = number(raw, "scale", 1.0).toFloat().coerceIn(0.5f, 3f),
      vertical = raw["vertical"] as? Boolean ?: false,
      shadow = raw["shadow"] as? Boolean ?: false,
      follow = raw["follow"] as? Boolean ?: true,
      yaw = number(raw, "yaw", 0.0).toFloat().takeIf { it.isFinite() } ?: 0f,
      mode = enumValue(raw["mode"], DisplayMode.NORMAL),
      windowLines = number(raw, "windowLines", 5.0).toInt().coerceIn(1, 20),
      scrollSpeed = number(raw, "scrollSpeed", 40.0).toInt().coerceIn(5, 1200),
      playMode = enumValue(raw["playMode"], PlayMode.PROXIMITY),
      proximityRange = number(raw, "proximityRange", 10.0).coerceIn(1.0, 128.0),
  )
}

private fun number(raw: Map<*, *>, key: String, default: Double): Double =
    (raw[key] as? Number)?.toDouble()?.takeIf { it.isFinite() } ?: default

private inline fun <reified T : Enum<T>> enumValue(raw: Any?, default: T): T =
    enumValues<T>().firstOrNull { it.name == raw?.toString() } ?: default
