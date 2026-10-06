package icu.oyasai.games.tntrun

import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.logging.Logger
import kotlin.math.floor
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.util.Vector

internal fun readYaml(file: File) = YamlConfiguration().also { if (file.exists()) it.load(file) }

internal fun vector(y: YamlConfiguration, path: String): Vector {
  val v =
      y.getVector(path)
          ?: if (y.contains("$path.x") && y.contains("$path.y") && y.contains("$path.z"))
              Vector(y.getDouble("$path.x"), y.getDouble("$path.y"), y.getDouble("$path.z"))
          else error("Missing vector: $path")
  require(listOf(v.x, v.y, v.z).all { it.isFinite() && it in -30_000_000.0..30_000_000.0 })
  return v
}

internal fun Vector.cell() = Cell(floor(x).toInt(), floor(y).toInt(), floor(z).toInt())

internal data class RunArena(val name: String, val yaml: YamlConfiguration) {
  val world = yaml.getString("world")?.takeIf { it.isNotBlank() } ?: error("Missing arena world")
  val bounds = Bounds.between(vector(yaml, "p1").cell(), vector(yaml, "p2").cell())
  val loseY = vector(yaml, "loselevel.p1").y
  val spawn = vector(yaml, "spawnpoint.p1")
  val spectator = vector(yaml, "spectatorspawn.p1")
  val minimum = yaml.getInt("minPlayers", 2)
  val maximum = yaml.getInt("maxPlayers", 12)
  val countdown = yaml.getInt("countdown", 10)
  val limit = yaml.getInt("timelimit", 300)
  val delay = yaml.getInt("gameleveldestroydelay", 8)
  val regeneration = yaml.getInt("regenerationdelay", 60)
  val votePercent = yaml.getDouble("votePercent", 0.75)
  val enabled = yaml.getBoolean("finished") && yaml.getBoolean("enableOnRestart", true)

  init {
    require(bounds.volume in 1..500_000)
    require(minimum >= 2 && maximum in minimum..100)
    require(
        countdown in 0..3600 && limit in 0..86400 && delay in 0..1200 && regeneration in 0..12000
    )
    require(votePercent.isFinite() && votePercent in 0.0..1.0)
    require(bounds.contains(spawn.cell()) && spawn.y >= floor(loseY) + 1)
    require(yaml.getString("teleportto", "PREVIOUS") in listOf("PREVIOUS", "LOBBY"))
    require(yaml.getString("damageenabled", "NO") in listOf("NO", "YES"))
    require(!yaml.getBoolean("kits.enabled")) { "Kits are outside the imported deployment scope" }
    require(
        yaml.getStringList("commandsOnStart").isEmpty() &&
            yaml.getStringList("commandsOnStop").isEmpty()
    )
    require(yaml.getList("spawnpoints").orEmpty().isEmpty())
    require(!yaml.getBoolean("testmode"))
    require(yaml.getDouble("joinfee") == 0.0) {
      "Paid arena entry is outside this deployment scope"
    }
    for (path in
        listOf("reward") +
            (yaml.getConfigurationSection("places")?.getKeys(false)?.map { "places.$it" }
                ?: emptyList())) {
      require(yaml.getDouble("$path.money").isFinite() && yaml.getDouble("$path.money") >= 0)
      require(yaml.getInt("$path.xp") in 0..1_000_000)
      if (path != "reward")
          require(yaml.getDouble("$path.money") == 0.0 && yaml.getInt("$path.xp") == 0) {
            "Runner-up rewards are outside the imported deployment scope"
          }
      require(yaml.getStringList("$path.command").isEmpty() && !yaml.contains("$path.material"))
    }
  }

  fun location(spec: Boolean = false): Location {
    val w = Bukkit.getWorld(world) ?: error("Arena world is unavailable")
    val v = if (spec) spectator else spawn
    val prefix = if (spec) "spectatorspawn" else "spawnpoint"
    return Location(
        w,
        v.x,
        v.y,
        v.z,
        yaml.getDouble("$prefix.yaw").toFloat(),
        yaml.getDouble("$prefix.pitch").toFloat(),
    )
  }
}

// Publish a complete staged copy once. Never merge into existing destination data.
internal fun importTntrun(destination: File, source: File, logger: Logger): Boolean {
  if (destination.exists() || !source.isDirectory) return false
  val staging = File(destination.parentFile, "tntrun-import.tmp")
  check(!staging.exists()) { "Previous TNTRun import staging requires inspection" }
  staging.mkdirs().also { check(it) }
  var count = 0
  try {
    for (name in
        listOf(
            "config.yml",
            "kits.yml",
            "shop.yml",
            "signs.yml",
            "lobby.yml",
            "messages.yml",
            "configbars.yml",
            "configtitles.yml",
            "players.yml",
            "stats.yml",
        )) {
      val file = File(source, name)
      if (file.exists()) {
        readYaml(file)
        Files.copy(file.toPath(), File(staging, name).toPath())
        count++
      }
    }
    File(staging, "arenas").mkdirs()
    File(source, "arenas")
        .listFiles()
        ?.filter { it.isFile && it.extension == "yml" }
        ?.forEach {
          readYaml(it)
          Files.copy(it.toPath(), File(staging, "arenas/${it.name}").toPath())
          count++
        }
    saveYaml(
        File(staging, "import.yml"),
        YamlConfiguration().also {
          it.set("files", count)
          it.set("version", "9.34")
        },
    )
    Files.move(staging.toPath(), destination.toPath(), StandardCopyOption.ATOMIC_MOVE)
    logger.info("TNTRun imported $count files; original data retained")
    return true
  } catch (e: Exception) {
    staging.deleteRecursively()
    throw e
  }
}

internal val arenaKeys =
    setOf(
        "world",
        "p1",
        "p2",
        "gameleveldestroydelay",
        "loselevel.p1",
        "spawnpoint.p1",
        "spawnpoint.yaw",
        "spawnpoint.pitch",
        "spectatorspawn.p1",
        "spectatorspawn.yaw",
        "spectatorspawn.pitch",
        "maxPlayers",
        "minPlayers",
        "votePercent",
        "timelimit",
        "countdown",
        "startVisibleCountdown",
        "teleportto",
        "damageenabled",
        "kits.enabled",
        "punchDamage",
        "stats.enabled",
        "stats.minPlayers",
        "allowDoublejumps",
        "regenerationdelay",
        "finished",
        "displayfinalpositions",
        "enableOnRestart",
        "shop.enabled",
    )

internal fun supportedArenaKey(key: String) =
    key in arenaKeys ||
        key.matches(Regex("(?:reward|places\\.[23])\\.(?:minPlayers|money|xp)")) ||
        key.matches(
            Regex("(?:p[12]|loselevel\\.p1|spawnpoint\\.p1|spectatorspawn\\.p1)\\.(?:x|y|z|==)")
        )

internal fun unreadKeys(y: YamlConfiguration, supported: (String) -> Boolean) =
    y.getKeys(true).filter { !y.isConfigurationSection(it) && !supported(it) }
