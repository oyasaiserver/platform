package icu.oyasai.utilities.hologram

import icu.oyasai.utilities.OyasaiUtilities
import java.io.File
import java.util.logging.Level
import kotlin.math.floor
import org.bukkit.Bukkit
import org.bukkit.Chunk
import org.bukkit.entity.TextDisplay
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.world.ChunkLoadEvent
import org.bukkit.event.world.ChunkUnloadEvent
import org.bukkit.event.world.EntitiesLoadEvent
import org.bukkit.persistence.PersistentDataType

data class ImportResult(val imported: Int, val skipped: Int, val missingDir: Boolean = false)

object HologramFeature : Listener {
  const val PERMISSION = "oyasaiutilities.hologram"

  private val plugin
    get() = OyasaiUtilities.plugin

  private val file
    get() = File(plugin.dataFolder, "Holograms/holograms.yml")

  private val decentDir
    get() = File(plugin.dataFolder.parentFile, "DecentHolograms/holograms")

  private val holograms = linkedMapOf<String, Hologram>()
  private val spawned = mutableMapOf<String, TextDisplay>()

  fun onEnable() {
    holograms.clear()
    holograms.putAll(readHolograms(file))
    plugin.server.pluginManager.registerEvents(this, plugin)
    val command = plugin.getCommand("oholo")
    if (command == null) {
      plugin.logger.severe("oholo が plugin.yml に無い")
    } else {
      command.setExecutor(HologramCommand)
      command.tabCompleter = HologramCommand
    }
    // 登録前に済んだ EntitiesLoadEvent の残骸を、ロード済みチャンクから消す。
    for (world in Bukkit.getWorlds()) {
      for (entity in world.entities.toList()) {
        if (
            entity.persistentDataContainer.has(HologramDisplay.markerKey, PersistentDataType.STRING)
        ) {
          entity.remove()
        }
      }
    }
    for (holo in holograms.values) sync(holo)
    plugin.logger.info("Holograms: ${holograms.size} loaded, ${spawned.size} spawned")
  }

  fun onDisable() {
    for (name in spawned.keys.toList()) despawn(name)
  }

  fun all(): List<Hologram> = holograms.values.toList()

  fun get(name: String): Hologram? = holograms[name]

  fun put(holo: Hologram) {
    holograms[holo.name] = holo
    writeHolograms(file, holograms.values)
    sync(holo)
  }

  fun delete(name: String): Boolean {
    if (holograms.remove(name) == null) return false
    despawn(name)
    writeHolograms(file, holograms.values)
    return true
  }

  fun importDecent(): ImportResult {
    val dir = decentDir
    if (!dir.isDirectory) return ImportResult(0, 0, missingDir = true)
    val files =
        dir.listFiles { f -> f.isFile && f.extension.equals("yml", ignoreCase = true) }
            ?: emptyArray()
    var imported = 0
    var skipped = 0
    val added = mutableListOf<Hologram>()
    for (yml in files.sortedBy { it.name }) {
      val name = yml.nameWithoutExtension
      if (holograms.containsKey(name)) {
        skipped++
        continue
      }
      val parsed =
          try {
            parseDecentHologram(name, yml.readText())
          } catch (ex: Exception) {
            plugin.logger.log(Level.WARNING, "oholo import skip $name", ex)
            skipped++
            continue
          }
      if (parsed == null) {
        plugin.logger.warning("oholo import skip $name")
        skipped++
        continue
      }
      holograms[name] = parsed
      added += parsed
      imported++
    }
    if (added.isNotEmpty()) {
      writeHolograms(file, holograms.values)
      added.forEach { sync(it) }
    }
    return ImportResult(imported, skipped)
  }

  @EventHandler
  fun onChunkLoad(event: ChunkLoadEvent) {
    val chunk = event.chunk
    Bukkit.getScheduler().runTask(plugin, Runnable { spawnChunkLater(chunk) })
  }

  @EventHandler
  fun onChunkUnload(event: ChunkUnloadEvent) {
    val world = event.world.name
    val cx = event.chunk.x
    val cz = event.chunk.z
    for (holo in holograms.values) {
      if (holo.world == world && chunkCoord(holo.x) == cx && chunkCoord(holo.z) == cz) {
        despawn(holo.name)
      }
    }
  }

  @EventHandler
  fun onEntitiesLoad(event: EntitiesLoadEvent) {
    for (entity in event.entities) {
      val name =
          entity.persistentDataContainer.get(HologramDisplay.markerKey, PersistentDataType.STRING)
              ?: continue
      entity.remove()
      spawned.remove(name)
    }
    val chunk = event.chunk
    Bukkit.getScheduler().runTask(plugin, Runnable { spawnChunkLater(chunk) })
  }

  private fun spawnChunkLater(chunk: Chunk) {
    if (!plugin.isEnabled || !chunk.isLoaded) return
    for (holo in holograms.values) {
      if (holo.world != chunk.world.name) continue
      if (chunkCoord(holo.x) != chunk.x || chunkCoord(holo.z) != chunk.z) continue
      val existing = spawned[holo.name]
      if (existing != null && existing.isValid) continue
      sync(holo)
    }
  }

  private fun sync(holo: Hologram) {
    val world = Bukkit.getWorld(holo.world)
    if (!holo.enabled || world == null) {
      despawn(holo.name)
      return
    }
    if (!world.isChunkLoaded(chunkCoord(holo.x), chunkCoord(holo.z))) {
      despawn(holo.name)
      return
    }
    val at = HologramDisplay.location(world, holo)
    val existing = spawned[holo.name]
    if (existing != null && existing.isValid && existing.world == world) {
      existing.text(hologramComponent(holo.lines))
      existing.teleport(at)
      return
    }
    despawn(holo.name)
    spawned[holo.name] = HologramDisplay.spawn(world, at, holo)
  }

  private fun despawn(name: String) {
    val entity = spawned.remove(name) ?: return
    if (entity.isValid) entity.remove()
  }

  private fun chunkCoord(block: Double): Int = floor(block).toInt() shr 4
}
