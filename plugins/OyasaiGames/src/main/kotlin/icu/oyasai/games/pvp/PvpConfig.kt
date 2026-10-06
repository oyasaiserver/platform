package icu.oyasai.games.pvp

import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.logging.Logger
import org.bukkit.Location
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration

internal val legacyArenas =
    setOf(
        "sumo",
        "sumo_suberrymousse",
        "oyasaichampions",
        "basicarena_v2",
        "br_artificialisland",
        "classicpvp",
        "snipe_v2",
        "mintice_ind",
        "mintice",
        "potpvp",
        "siroarena_v2",
        "fallarena",
        "l1l1arena_v2",
        "kusaarena",
        "crystalpvp",
    )

internal data class Point(
    val world: String,
    val x: Double,
    val y: Double,
    val z: Double,
    val yaw: Float = 0f,
    val pitch: Float = 0f,
) {
  fun location(): Location =
      Location(
          org.bukkit.Bukkit.getWorld(world) ?: error("Spawn world is unavailable"),
          x,
          y,
          z,
          yaw,
          pitch,
      )

  fun near(other: Point, radius: Int): Boolean =
      radius > 0 &&
          world == other.world &&
          (x - other.x) * (x - other.x) +
              (y - other.y) * (y - other.y) +
              (z - other.z) * (z - other.z) <= radius.toDouble() * radius

  companion object {
    fun parse(value: String): Point {
      val p = value.split(',')
      require(p.size == 4 || p.size == 6) { "Invalid spawn format" }
      val n = p.drop(1).map { it.toDouble().also { number -> require(number.isFinite()) } }
      require(p[0].isNotBlank())
      return Point(
          p[0],
          n[0],
          n[1],
          n[2],
          n.getOrElse(3) { 0.0 }.toFloat(),
          n.getOrElse(4) { 0.0 }.toFloat(),
      )
    }
  }
}

internal data class Region(
    val name: String,
    val world: String,
    val bounds: List<Int>,
    val type: String,
    val flags: Set<String>,
    val protections: Set<String>,
) {
  fun contains(l: Location): Boolean =
      l.world?.name == world &&
          l.blockX in minOf(bounds[0], bounds[3])..maxOf(bounds[0], bounds[3]) &&
          l.blockY in minOf(bounds[1], bounds[4])..maxOf(bounds[1], bounds[4]) &&
          l.blockZ in minOf(bounds[2], bounds[5])..maxOf(bounds[2], bounds[5])

  companion object {
    fun parse(name: String, value: Any): Region {
      val section = value as? ConfigurationSection
      val parts = (section?.getString("coords") ?: value.toString()).split(',')
      require(parts.size == 7 || parts.size == 11) { "Invalid region format" }
      require(parts[0].isNotBlank())
      if (section == null && parts.size == 11) {
        require(parts[7] == "cuboid") { "Unsupported region shape" }
        parts[8].toInt()
        parts[9].toInt()
      }
      if (section != null) require(section.getString("shape", "cuboid") == "cuboid")
      val oldMask = parts.getOrNull(9)?.toIntOrNull() ?: 0
      // Legacy region protection order is documented by PvPArena's flag schema.
      val oldProtections =
          listOf(
              "BREAK",
              "FIRE",
              "MOBS",
              "NATURE",
              "PAINTING",
              "PISTON",
              "PLACE",
              "TNT",
              "TNTBREAK",
              "DROP",
              "INVENTORY",
              "PICKUP",
              "CRAFT",
              "TELEPORT",
          )
      return Region(
          name,
          parts[0],
          parts.subList(1, 7).map(String::toInt),
          section?.getString("type", "BATTLE") ?: parts.getOrElse(10) { "BATTLE" },
          section?.getStringList("flags")?.toSet()
              ?: listOf("NOCAMP", "DEATH", "WIN", "LOSE", "NODAMAGE")
                  .filterIndexed { i, _ ->
                    (parts.getOrNull(8)?.toIntOrNull() ?: 0) and (1 shl i) != 0
                  }
                  .toSet(),
          section?.getStringList("protections")?.toSet()
              ?: oldProtections.filterIndexed { i, _ -> oldMask and (1 shl i) != 0 }.toSet(),
      )
    }
  }
}

internal data class ArenaConfig(
    val name: String,
    val yaml: YamlConfiguration,
    val goal: Goal,
    val spawns: Map<String, Point>,
    val regions: List<Region>,
) {
  val mods = yaml.getStringList("mods").toSet()

  fun has(mod: String) = mods.any { it.equals(mod, true) }

  fun bool(key: String, default: Boolean = false) = yaml.getBoolean(key, default)

  fun int(key: String, default: Int = 0) = yaml.getInt(key, default)

  fun number(key: String, default: Double = 0.0) =
      yaml.getDouble(key, default).also {
        require(it.isFinite()) { "Invalid numeric setting: $key" }
      }

  fun text(key: String, default: String = "") = yaml.getString(key, default)!!

  val limit: Int
    get() =
        int(
            when (goal) {
              Goal.TeamDeathMatch -> "goal.teamdm.tdlives"
              Goal.PlayerDeathMatch -> "goal.playerdm.pdlives"
              Goal.TeamLives -> "goal.teamlives.tlives"
              Goal.TeamPlayerLives -> "goal.teamplayerlives.plives"
              Goal.PlayerLives -> "goal.playerlives.plives"
            },
            3,
        )

  val classes: Set<String>
    get() = yaml.getConfigurationSection("classitems")?.getKeys(false) ?: emptySet()

  val teams: Set<String>
    get() = yaml.getConfigurationSection("teams")?.getKeys(false) ?: setOf("red", "blue")

  fun spawn(team: String, kind: String, index: Int? = null): Point {
    val prefix = if (goal.teams) "${team}_$kind" else kind
    val choices =
        spawns
            .filterKeys { it == prefix || it.matches(Regex("${Regex.escape(prefix)}[0-9]+")) }
            .toSortedMap()
            .values
            .toList()
    check(choices.isNotEmpty()) { "Missing $kind spawn" }
    return if (index == null) choices.random() else choices[index % choices.size]
  }

  companion object {
    fun load(file: File): ArenaConfig {
      val y = YamlConfiguration().also { it.load(file) }
      val spawns = y.getConfigurationSection("spawns") ?: error("Missing spawns")
      val regions = y.getConfigurationSection("arenaregion")
      val config =
          ArenaConfig(
              file.nameWithoutExtension,
              y,
              Goal.valueOf(y.getString("general.goal") ?: error("Missing goal")),
              spawns.getKeys(false).associateWith { Point.parse(spawns.getString(it)!!) },
              regions?.getKeys(false)?.map { Region.parse(it, regions.get(it)!!) } ?: emptyList(),
          )
      require(config.classes.isNotEmpty()) { "Missing classes" }
      (if (config.goal.teams) config.teams else setOf("free")).forEach {
        config.spawn(it, "fight")
        config.spawn(it, "lounge")
      }
      return config
    }
  }
}

internal fun importLegacy(destination: File, legacy: File, logger: Logger): Int {
  if (destination.exists() || !File(legacy, "arenas").isDirectory) return 0
  val staging = File(destination.parentFile, "pvp-import")
  require(!staging.exists()) { "Incomplete import exists; inspect pvp-import before retrying" }
  staging.mkdirs()
  var count = 0
  try {
    File(staging, "arenas").mkdirs()
    File(legacy, "arenas")
        .listFiles()
        ?.sortedBy { it.name }
        ?.forEach { file ->
          if (file.extension == "yml" && file.nameWithoutExtension.lowercase() in legacyArenas) {
            try {
              ArenaConfig.load(file)
            } catch (failure: Exception) {
              logger.warning(
                  "PvP: arena ${file.nameWithoutExtension} was skipped (${failure.javaClass.simpleName})"
              )
              return@forEach
            }
            Files.copy(file.toPath(), File(staging, "arenas/${file.name}").toPath())
            count++
          }
        }
    for (name in listOf("config.yml", "classes.yml")) {
      val file = File(legacy, name)
      if (file.isFile) Files.copy(file.toPath(), File(staging, name).toPath())
    }
    // Only data, never legacy goal/module jars.
    File(legacy, "schematics")
        .listFiles()
        ?.filter { it.extension in setOf("schem", "schematic") }
        ?.forEach {
          File(staging, "schematics").mkdirs()
          Files.copy(it.toPath(), File(staging, "schematics/${it.name}").toPath())
        }
    check(count > 0) { "No readable arenas; import was not published" }
    Files.move(staging.toPath(), destination.toPath(), StandardCopyOption.ATOMIC_MOVE)
    logger.info("PvP imported $count arenas; original files were not modified")
    return count
  } catch (e: Exception) {
    staging.deleteRecursively()
    throw e
  }
}
