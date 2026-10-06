package icu.oyasai.games.bedwars

import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.logging.Logger
import org.bukkit.Bukkit
import org.bukkit.DyeColor
import org.bukkit.Location
import org.bukkit.configuration.file.YamlConfiguration

internal data class BwPoint(
    val world: String,
    val x: Double,
    val y: Double,
    val z: Double,
    val yaw: Float = 0f,
    val pitch: Float = 0f,
) {
  fun location() =
      Location(Bukkit.getWorld(world) ?: error("Arena world is unavailable"), x, y, z, yaw, pitch)

  companion object {
    fun parse(value: String, world: String): BwPoint {
      require(world.isNotBlank()) { "Missing world" }
      val values = value.split(';')
      require(values.size == 3 || values.size == 5) { "Invalid location format" }
      val n =
          values.map {
            it.toDouble().also { v -> require(v.isFinite()) { "Invalid location number" } }
          }
      val yaw = n.getOrElse(3) { 0.0 }.toFloat()
      val pitch = n.getOrElse(4) { 0.0 }.toFloat()
      require(yaw.isFinite() && pitch.isFinite())
      return BwPoint(world, n[0], n[1], n[2], yaw, pitch)
    }
  }
}

internal data class BwTeam(
    val name: String,
    val color: String,
    val maxPlayers: Int,
    val bed: BwPoint,
    val spawn: BwPoint,
)

internal data class BwGenerator(
    val point: BwPoint,
    val type: String,
    val startLevel: Double,
    val maxSpawnedResources: Int,
    val hologramEnabled: Boolean,
    val team: String?,
)

internal data class BwStore(
    val point: BwPoint,
    val shop: String,
    val type: String,
    val name: String,
    val team: String?,
)

internal data class BwArena(
    val name: String,
    val yaml: YamlConfiguration,
    val world: String,
    val pos1: BwPoint,
    val pos2: BwPoint,
    val lobby: BwPoint,
    val spec: BwPoint,
    val teams: List<BwTeam>,
    val generators: List<BwGenerator>,
    val stores: List<BwStore>,
) {
  val minPlayers = yaml.getInt("minPlayers", 2)
  val countdown = yaml.getInt("pauseCountdown", 60)
  val gameTime = yaml.getInt("gameTime", 3600)
  val postGameWaiting = yaml.getInt("postGameWaiting", 3)
  val maxPlayers = teams.sumOf { it.maxPlayers }
  val mode: String
    get() =
        when (teams.maxOf { it.maxPlayers }) {
          1 -> "solo"
          2 -> "double"
          3 -> "triples"
          else -> "squads"
        }

  fun contains(p: BwPoint): Boolean =
      p.world == world &&
          bwBlockInside(p.x, pos1.x, pos2.x) &&
          bwBlockInside(p.y, pos1.y, pos2.y) &&
          bwBlockInside(p.z, pos1.z, pos2.z)

  fun contains(l: Location): Boolean =
      l.world?.name == world &&
          bwBlockInside(l.x, pos1.x, pos2.x) &&
          bwBlockInside(l.y, pos1.y, pos2.y) &&
          bwBlockInside(l.z, pos1.z, pos2.z)

  companion object {
    fun load(file: File): BwArena {
      val y = YamlConfiguration().also { it.load(file) }
      val world = y.getString("world") ?: error("Missing world")
      fun point(key: String, w: String = world) =
          BwPoint.parse(y.getString(key) ?: error("Missing $key"), w)
      val ts = y.getConfigurationSection("teams") ?: error("Missing teams")
      val teams =
          ts.getKeys(false).map { key ->
            val t = ts.getConfigurationSection(key) ?: error("Invalid team")
            BwTeam(
                key,
                t.getString("color", "WHITE")!!.also { DyeColor.valueOf(it) },
                t.getInt("maxPlayers", 1).also { require(it in 1..64) },
                BwPoint.parse(t.getString("bed") ?: error("Missing bed"), world),
                BwPoint.parse(t.getString("spawn") ?: error("Missing spawn"), world),
            )
          }
      require(
          teams.size >= 2 &&
              teams.map { it.name.lowercase(java.util.Locale.ROOT) }.distinct().size == teams.size
      )
      require(teams.map { it.color }.distinct().size == teams.size) { "Duplicate team color" }
      val generators =
          y.getMapList("spawners").map { s ->
            val type =
                s["type"]?.toString()?.lowercase(java.util.Locale.ROOT)
                    ?: error("Missing resource type")
            require(type in setOf("iron", "gold", "diamond", "emerald")) {
              "Unsupported resource type"
            }
            val level = (s["startLevel"] as? Number)?.toDouble() ?: 1.0
            require(level.isFinite() && level > 0)
            BwGenerator(
                BwPoint.parse(
                    s["location"]?.toString() ?: error("Missing generator location"),
                    world,
                ),
                type,
                level,
                (s["maxSpawnedResources"] as? Number)?.toInt() ?: -1,
                s["hologramEnabled"]?.toString()?.toBoolean() ?: true,
                s["team"]?.toString(),
            )
          }
      val stores =
          y.getMapList("stores").map { s ->
            val shop = s["shop"]?.toString() ?: "shop.yml"
            require(shop.matches(Regex("[A-Za-z0-9_-]+\\.yml"))) { "Invalid shop filename" }
            BwStore(
                BwPoint.parse(s["loc"]?.toString() ?: error("Missing store location"), world),
                shop,
                s["type"]?.toString() ?: "VILLAGER",
                s["name"]?.toString() ?: "Shop",
                s["team"]?.toString(),
            )
          }
      val name =
          y.getString("name")?.takeIf { it.matches(Regex("[A-Za-z0-9 _-]+")) }
              ?: error("Invalid arena name")
      val arena =
          BwArena(
              name,
              y,
              world,
              point("pos1"),
              point("pos2"),
              point("lobbySpawn", y.getString("lobbySpawnWorld", world)!!),
              point("specSpawn"),
              teams,
              generators,
              stores,
          )
      require(
          arena.minPlayers in 2..arena.maxPlayers &&
              arena.countdown > 0 &&
              arena.gameTime > 0 &&
              arena.postGameWaiting >= 0
      )
      require(teams.all { arena.contains(it.spawn) && arena.contains(it.bed) }) {
        "Team point outside arena"
      }
      require(generators.all { arena.contains(it.point) }) { "Generator outside arena" }
      require(stores.all { arena.contains(it.point) }) { "Store outside arena" }
      return arena
    }
  }
}

internal class BedWarsFiles(val folder: File, private val logger: Logger) {
  val config = load("config.yml")
  val sba = load("SBA/sbaconfig.yml")

  private fun load(name: String): YamlConfiguration =
      YamlConfiguration().also { if (File(folder, name).isFile) it.load(File(folder, name)) }

  fun loadArenas(): List<BwArena> =
      File(folder, "arenas")
          .listFiles()
          ?.filter { it.extension == "yml" }
          ?.sortedBy { it.name }
          ?.mapNotNull { f ->
            try {
              BwArena.load(f)
            } catch (failure: Exception) {
              logger.warning(
                  "BedWars arena skipped (${failure.javaClass.simpleName}); inspect local arena data"
              )
              null
            }
          }
          ?.let { arenas ->
            val seen = hashSetOf<String>()
            arenas.filter { arena ->
              if (seen.add(arena.name.lowercase(java.util.Locale.ROOT))) true
              else {
                logger.warning("BedWars duplicate arena name skipped; inspect local arena data")
                false
              }
            }
          } ?: emptyList()

  fun reportUnsupportedKeys(supportedConfig: Set<String>, supportedSba: Set<String>) {
    for ((label, yaml, supported) in
        listOf(Triple("config", config, supportedConfig), Triple("SBA", sba, supportedSba))) {
      val unsupported =
          yaml
              .getKeys(true)
              .filter { !yaml.isConfigurationSection(it) && it !in supported }
              .sorted()
      logger.info(
          "BedWars $label: ${yaml.getKeys(true).count { !yaml.isConfigurationSection(it) }} keys; ${unsupported.size} unsupported keys"
      )
      unsupported.chunked(25).forEach {
        logger.warning("BedWars $label unsupported keys: ${it.joinToString(", ")}")
      }
    }
  }
}

internal fun importLegacy(destination: File, legacy: File, sba: File, logger: Logger): Int {
  if (destination.exists() || !File(legacy, "arenas").isDirectory) return 0
  val staging = File(destination.parentFile, "bedwars-import")
  require(!staging.exists()) { "Incomplete BedWars import requires inspection" }
  check(File(staging, "arenas").mkdirs())
  var count = 0
  try {
    File(legacy, "arenas")
        .listFiles()
        ?.filter { it.extension == "yml" }
        ?.sortedBy { it.name }
        ?.forEach { file ->
          try {
            val arena = BwArena.load(file)
            val recognized =
                setOf(
                    "name",
                    "pauseCountdown",
                    "gameTime",
                    "world",
                    "pos1",
                    "pos2",
                    "specSpawn",
                    "lobbySpawn",
                    "lobbySpawnWorld",
                    "minPlayers",
                    "postGameWaiting",
                    "teams",
                    "spawners",
                    "stores",
                    "constant",
                )
            val unknown = arena.yaml.getKeys(false).filter { it !in recognized }
            if (unknown.isNotEmpty())
                logger.warning(
                    "BedWars arena retained unsupported keys: ${unknown.joinToString(", ")}"
                )
            val teamSection = arena.yaml.getConfigurationSection("teams")!!
            teamSection.getKeys(false).forEach { t ->
              teamSection
                  .getConfigurationSection(t)!!
                  .getKeys(false)
                  .filter { it !in setOf("color", "maxPlayers", "bed", "spawn") }
                  .forEach { key -> logger.warning("BedWars arena unsupported team key: $key") }
            }
            for ((section, supported) in
                listOf(
                    "spawners" to
                        setOf(
                            "location",
                            "type",
                            "startLevel",
                            "maxSpawnedResources",
                            "hologramEnabled",
                            "team",
                        ),
                    "stores" to setOf("loc", "shop", "type", "name", "team"),
                )) {
              arena.yaml
                  .getMapList(section)
                  .flatMap { it.keys.map { key -> key.toString() } }
                  .distinct()
                  .filter { it !in supported }
                  .forEach { key -> logger.warning("BedWars arena unsupported $section key: $key") }
            }
            val constants = arena.yaml.getConfigurationSection("constant")
            constants
                ?.getKeys(false)
                ?.filter { constants.getString(it) != "inherit" }
                ?.forEach { logger.warning("BedWars arena constant override requires review: $it") }
            Files.copy(file.toPath(), File(staging, "arenas/${file.name}").toPath())
            count++
          } catch (failure: Exception) {
            logger.warning(
                "BedWars import skipped arena (${failure.javaClass.simpleName}); source unchanged"
            )
          }
        }
    val shopNames =
        File(legacy, "arenas")
            .listFiles()
            ?.filter { it.extension == "yml" }
            ?.flatMap { f ->
              try {
                BwArena.load(f).stores.map { it.shop }
              } catch (_: Exception) {
                emptyList()
              }
            }
            ?.toSet()
            .orEmpty() +
            setOf("shop.yml", "upgradeShop.yml", "config.yml", "sign.yml") +
            legacy
                .listFiles()
                ?.filter { it.name.matches(Regex("shop-[A-Za-z0-9_-]+\\.yml")) }
                ?.map { it.name }
                .orEmpty()
    shopNames.forEach { name ->
      if (File(legacy, name).isFile)
          Files.copy(File(legacy, name).toPath(), File(staging, name).toPath())
    }
    val legacyStats = File(legacy, "database/bw_stats_players.yml")
    if (legacyStats.isFile) {
      File(staging, "database").mkdirs()
      Files.copy(legacyStats.toPath(), File(staging, "database/bw_stats_players.yml").toPath())
    }
    if (sba.isDirectory) {
      File(staging, "SBA").mkdirs()
      if (File(sba, "sbaconfig.yml").isFile)
          Files.copy(
              File(sba, "sbaconfig.yml").toPath(),
              File(staging, "SBA/sbaconfig.yml").toPath(),
          )
      for (name in listOf("games-inventory", "quickbuy", "shops")) {
        File(sba, name)
            .listFiles()
            ?.filter { it.extension == "yml" }
            ?.forEach { file ->
              File(staging, "SBA/$name").mkdirs()
              Files.copy(file.toPath(), File(staging, "SBA/$name/${file.name}").toPath())
            }
      }
    }
    check(count > 0) { "No readable BedWars arenas; import not published" }
    Files.move(staging.toPath(), destination.toPath(), StandardCopyOption.ATOMIC_MOVE)
    logger.info(
        "BedWars imported $count arenas and ${shopNames.size} selected configuration files; source unchanged"
    )
    logger.warning(
        "BedWars retained legacy configuration data; unconsumed settings are logged separately; cosmetics and GUI layout require review"
    )
    return count
  } catch (failure: Exception) {
    staging.deleteRecursively()
    throw failure
  }
}

internal fun bwBlockInside(value: Double, first: Double, second: Double): Boolean {
  if (!value.isFinite() || !first.isFinite() || !second.isFinite()) return false
  val block = kotlin.math.floor(value)
  return block >= minOf(kotlin.math.floor(first), kotlin.math.floor(second)) &&
      block <= maxOf(kotlin.math.floor(first), kotlin.math.floor(second))
}

internal fun mainLobbyPoint(config: YamlConfiguration, gameEnded: Boolean): BwPoint? {
  if (!gameEnded || !config.getBoolean("mainlobby.enabled", false)) return null
  return BwPoint.parse(
      config.getString("mainlobby.location") ?: error("Main lobby location is missing"),
      config.getString("mainlobby.world") ?: error("Main lobby world is missing"),
  )
}
