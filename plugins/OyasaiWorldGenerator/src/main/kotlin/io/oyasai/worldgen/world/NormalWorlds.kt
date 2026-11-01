package io.oyasai.worldgen.world

import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.gen.VoidGenerator
import java.io.File
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardCopyOption
import java.util.Locale
import java.util.logging.Level
import net.kyori.adventure.util.TriState
import org.bukkit.Bukkit
import org.bukkit.Difficulty
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.World
import org.bukkit.WorldCreator
import org.bukkit.WorldType
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerRespawnEvent
import org.bukkit.plugin.java.JavaPlugin

data class NormalWorld(
    val name: String,
    val key: NamespacedKey,
    var environment: World.Environment = World.Environment.NORMAL,
    var generator: String = "",
    var difficulty: Difficulty = Difficulty.NORMAL,
    var pvp: Boolean = true,
    var allowFlight: Boolean = false,
    var monsterSpawn: Boolean = true,
    var animalSpawn: Boolean = true,
    var spawn: List<Double>? = null,
    var alias: String = "",
    var keepSpawnInMemory: Boolean = true,
    var autoLoad: Boolean = true,
    val kind: String =
        when (environment) {
          World.Environment.NETHER -> "nether"
          World.Environment.THE_END -> "the_end"
          else -> "normal"
        },
)

internal fun loadNormalYaml(file: File): YamlConfiguration =
    YamlConfiguration().apply {
      options().pathSeparator('\u0000')
      // MV's serialized locations name classes unavailable without Multiverse-Core.
      loadFromString(file.readLines().filterNot { it.trim().startsWith("==:") }.joinToString("\n"))
    }

private inline fun <reified T : Enum<T>> normalEnumValue(value: String?, fallback: T): T =
    enumValues<T>().firstOrNull { it.name.equals(value, true) } ?: fallback

internal fun normalWorldFolder(root: Path, key: NamespacedKey): File? {
  val dimensions = root.resolve("dimensions").toAbsolutePath().normalize()
  val target = dimensions.resolve(key.namespace).resolve(key.key).normalize()
  return target.takeIf { it.startsWith(dimensions) }?.toFile()
}

internal fun primaryWorldStorageRoot(): Path? {
  val path =
      Bukkit.getWorlds()
          .firstOrNull { it.key == NamespacedKey.minecraft("overworld") }
          ?.worldPath
          ?.toAbsolutePath()
          ?.normalize() ?: return null
  return if (
      path.fileName.toString() == "overworld" &&
          path.parent?.fileName?.toString() == "minecraft" &&
          path.parent?.parent?.fileName?.toString() == "dimensions"
  ) {
    path.parent.parent.parent
  } else path
}

class NormalWorlds(private val plugin: JavaPlugin, private val heightConfig: () -> OwgConfig) :
    Listener {
  private val file = File(plugin.dataFolder, "normal-worlds.yml")
  private val worlds = linkedMapOf<String, NormalWorld>()
  private var yaml = YamlConfiguration().apply { options().pathSeparator('\u0000') }

  fun entries(): Collection<NormalWorld> = worlds.values

  fun find(name: String): NormalWorld? =
      worlds[name]
          ?: worlds.values.firstOrNull { it.alias.equals(name, true) && it.alias.isNotEmpty() }

  fun hasName(name: String): Boolean =
      find(name) != null || yaml.getKeys(false).any { it.equals(name, true) }

  fun folder(key: NamespacedKey): File? {
    return primaryWorldStorageRoot()?.let { normalWorldFolder(it, key) }
  }

  fun initialize() {
    if (!file.exists()) {
      plugin.logger.warning("[OWG][normal] Starting with empty registry")
      save()
    }
    readFile()
  }

  private fun readFile() {
    worlds.clear()
    val config = loadNormalYaml(file)
    yaml = config
    for (name in config.getKeys(false)) {
      val section = config.getConfigurationSection(name) ?: continue
      val key =
          runCatching { NamespacedKey.fromString(section.getString("key").orEmpty()) }.getOrNull()
      if (key == null || !OwgConfig.isSafeWorldName(name) || name == "." || name == "..") {
        plugin.logger.warning("[OWG][normal] Invalid entry skipped")
        continue
      }
      val spawn = section.getDoubleList("spawn").takeIf { it.size == 5 }
      val kind =
          section.getString("kind")
              ?: when (section.getString("environment")?.lowercase(Locale.ROOT)) {
                "nether" -> "nether"
                "the_end" -> "the_end"
                else -> "normal"
              }
      if (
          kind !in setOf("normal", "flat", "void", "nether", "the_end") ||
              (kind == "nether" && section.getString("environment") != "nether") ||
              (kind == "the_end" && section.getString("environment") != "the_end") ||
              (kind in setOf("normal", "flat", "void") &&
                  section.getString("environment") != "normal") ||
              worlds.values.any { it.key == key } ||
              name in heightConfig().configuredWorldNames
      ) {
        plugin.logger.warning("[OWG][normal] Conflicting or invalid entry skipped: $name")
        continue
      }
      worlds[name] =
          NormalWorld(
              name,
              key,
              normalEnumValue(section.getString("environment"), World.Environment.NORMAL),
              section.getString("generator").orEmpty(),
              normalEnumValue(section.getString("difficulty"), Difficulty.NORMAL),
              section.getBoolean("pvp", true),
              section.getBoolean("allow-flight", false),
              section.getBoolean("monster-spawn", true),
              section.getBoolean("animal-spawn", true),
              spawn,
              section.getString("alias").orEmpty(),
              section.getBoolean("keep-spawn-in-memory", true),
              section.getBoolean("auto-load", true),
              kind,
          )
    }
    plugin.logger.info("[OWG][normal] Registry loaded: ${worlds.size}")
  }

  fun save() {
    val config = yaml
    for (entry in worlds.values) {
      val section = config.getConfigurationSection(entry.name) ?: config.createSection(entry.name)
      section.set("key", entry.key.toString())
      section.set("environment", entry.environment.name.lowercase(Locale.ROOT))
      section.set("generator", entry.generator)
      section.set("kind", entry.kind)
      section.set("difficulty", entry.difficulty.name.lowercase(Locale.ROOT))
      section.set("pvp", entry.pvp)
      section.set("allow-flight", entry.allowFlight)
      section.set("monster-spawn", entry.monsterSpawn)
      section.set("animal-spawn", entry.animalSpawn)
      section.set("spawn", entry.spawn)
      if (entry.alias.isNotEmpty()) section.set("alias", entry.alias)
      section.set("keep-spawn-in-memory", entry.keepSpawnInMemory)
      section.set("auto-load", entry.autoLoad)
    }
    file.parentFile.mkdirs()
    val temporary = File(file.parentFile, "${file.name}.tmp")
    config.save(temporary)
    try {
      Files.move(
          temporary.toPath(),
          file.toPath(),
          StandardCopyOption.ATOMIC_MOVE,
          StandardCopyOption.REPLACE_EXISTING,
      )
    } finally {
      temporary.delete()
    }
  }

  fun add(entry: NormalWorld) {
    worlds[entry.name] = entry
    save()
  }

  fun remove(name: String) {
    worlds.remove(name)
    yaml.set(name, null)
    save()
  }

  fun loadStartup() {
    if (folder(NamespacedKey.minecraft("overworld")) == null) {
      plugin.logger.severe("[OWG][normal] Primary world unavailable")
      return
    }
    for (entry in worlds.values) {
      if (entry.name in heightConfig().configuredWorldNames) {
        plugin.logger.warning("[OWG][normal] Height world skipped: ${entry.name}")
        continue
      }
      val loaded = Bukkit.getWorld(entry.name)
      if (loaded != null) {
        load(entry)
        continue
      }
      if (!entry.autoLoad) {
        plugin.logger.info("[OWG][normal] auto-load=false, skipped: ${entry.name}")
        continue
      }
      if (folder(entry.key)?.isDirectory != true) {
        plugin.logger.warning(
            "[OWG][normal] Missing folder, skipped: ${entry.name} key=${entry.key}"
        )
        continue
      }
      load(entry)
    }
  }

  fun load(entry: NormalWorld, create: Boolean = false): Boolean {
    if (entry.name in heightConfig().configuredWorldNames) return false
    Bukkit.getWorld(entry.key)?.let {
      if (it.name != entry.name) {
        plugin.logger.severe("[OWG][normal] World key already belongs to ${it.name}: ${entry.key}")
        return false
      }
    }
    Bukkit.getWorld(entry.name)?.let {
      if (it.key != entry.key || it.environment != entry.environment) {
        plugin.logger.severe("[OWG][normal] Loaded world conflicts with registry: ${entry.name}")
        return false
      }
      apply(entry, it)
      return true
    }
    if (!create && folder(entry.key)?.isDirectory != true) return false
    return try {
      val creator = WorldCreator.ofNameAndKey(entry.name, entry.key).environment(entry.environment)
      creator.keepSpawnLoaded(if (entry.keepSpawnInMemory) TriState.TRUE else TriState.FALSE)
      when (entry.kind) {
        "flat" -> creator.type(WorldType.FLAT)
        "void" -> creator.generator(VoidGenerator(64))
        else -> if (entry.generator.isNotBlank()) creator.generator(entry.generator)
      }
      val world = Bukkit.createWorld(creator) ?: return false
      apply(entry, world)
      plugin.logger.info("[OWG][normal] Loaded ${entry.name} key=${entry.key}")
      true
    } catch (e: Exception) {
      plugin.logger.log(Level.WARNING, "[OWG][normal] Failed to load ${entry.name}", e)
      false
    }
  }

  fun apply(entry: NormalWorld, world: World) {
    world.difficulty = entry.difficulty
    world.pvp = entry.pvp
    world.setSpawnFlags(entry.monsterSpawn, entry.animalSpawn)
    entry.spawn?.let {
      world.setSpawnLocation(Location(world, it[0], it[1], it[2], it[3].toFloat(), it[4].toFloat()))
    }
    world.players.forEach(::enforceFlight)
  }

  private fun enforceFlight(player: Player) {
    if (player.world.name in heightConfig().configuredWorldNames) return
    val entry = worlds[player.world.name] ?: return
    if (player.gameMode == GameMode.SPECTATOR) {
      player.allowFlight = true
      player.isFlying = true
      return
    }
    if (entry.allowFlight) {
      if (player.gameMode == GameMode.CREATIVE) player.allowFlight = true
    } else if (player.gameMode != GameMode.CREATIVE && player.allowFlight) {
      if (player.isFlying) player.isFlying = false
      player.allowFlight = false
    }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onJoin(event: PlayerJoinEvent) {
    Bukkit.getScheduler().runTask(plugin, Runnable { enforceFlight(event.player) })
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onChangedWorld(event: PlayerChangedWorldEvent) {
    Bukkit.getScheduler().runTask(plugin, Runnable { enforceFlight(event.player) })
  }

  @EventHandler(priority = EventPriority.LOW)
  fun onRespawn(event: PlayerRespawnEvent) {
    if (event.player.world.name in heightConfig().configuredWorldNames) return
    val entry = worlds[event.player.world.name] ?: return
    if (event.isBedSpawn || event.isAnchorSpawn) return
    val world = Bukkit.getWorld(entry.name) ?: return
    event.respawnLocation =
        entry.spawn?.let { Location(world, it[0], it[1], it[2], it[3].toFloat(), it[4].toFloat()) }
            ?: world.spawnLocation
  }
}
