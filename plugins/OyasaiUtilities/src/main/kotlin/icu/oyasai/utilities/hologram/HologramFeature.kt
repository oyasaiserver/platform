package icu.oyasai.utilities.hologram

import icu.oyasai.utilities.OyasaiUtilities
import java.io.File
import java.util.logging.Level
import kotlin.math.floor
import org.bukkit.Bukkit
import org.bukkit.Chunk
import org.bukkit.command.CommandSender
import org.bukkit.entity.TextDisplay
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.world.ChunkLoadEvent
import org.bukkit.event.world.ChunkUnloadEvent
import org.bukkit.event.world.EntitiesLoadEvent
import org.bukkit.event.world.WorldLoadEvent
import org.bukkit.event.world.WorldUnloadEvent
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitTask

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
  private val spawned = mutableMapOf<String, List<TextDisplay>>()

  private val scrolls = mutableMapOf<String, HologramScroll>()
  private var animationTask: BukkitTask? = null
  private val chunkTasks = mutableSetOf<BukkitTask>()

  fun canEdit(sender: CommandSender): Boolean = sender.isOp && sender.hasPermission(PERMISSION)

  fun isPlaying(name: String): Boolean = scrolls[name]?.playing == true

  fun togglePlaying(name: String) {
    scrolls[name]?.let { it.playing = !it.playing }
  }

  fun displays(): Map<String, List<TextDisplay>> = spawned

  fun onEnable() {
    holograms.clear()
    holograms.putAll(readHolograms(file))
    plugin.server.pluginManager.registerEvents(this, plugin)
    HologramGui.enable()
    plugin.server.pluginManager.registerEvents(HologramGui, plugin)
    plugin.server.pluginManager.registerEvents(HologramTool, plugin)
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
    plugin.logger.info(
        "Holograms: ${holograms.size} loaded, ${spawned.values.sumOf { it.size }} spawned",
    )
  }

  private fun startAnimation() {
    if (animationTask != null) return
    animationTask =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  for ((name, scroll) in scrolls) {
                    val entities = spawned[name] ?: continue
                    if (entities.all { it.isValid }) scroll.tick(entities)
                  }
                },
                1L,
                1L,
            )
  }

  fun onDisable() {
    animationTask?.cancel()
    animationTask = null
    chunkTasks.forEach { it.cancel() }
    chunkTasks.clear()
    HologramGui.close()
    HologramTool.clear()
    HandlerList.unregisterAll(this)
    HandlerList.unregisterAll(HologramGui)
    HandlerList.unregisterAll(HologramTool)
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
    scheduleChunk(chunk)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
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

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onWorldUnload(event: WorldUnloadEvent) {
    holograms.values.filter { it.world == event.world.name }.forEach { despawn(it.name) }
  }

  @EventHandler
  fun onWorldLoad(event: WorldLoadEvent) {
    event.world.loadedChunks.forEach { scheduleChunk(it) }
  }

  @EventHandler
  fun onEntitiesLoad(event: EntitiesLoadEvent) {
    for (entity in event.entities) {
      val name =
          entity.persistentDataContainer.get(HologramDisplay.markerKey, PersistentDataType.STRING)
              ?: continue
      entity.remove()
      despawn(name)
    }
    val chunk = event.chunk
    scheduleChunk(chunk)
  }

  private fun scheduleChunk(chunk: Chunk) {
    lateinit var task: BukkitTask
    task =
        Bukkit.getScheduler()
            .runTask(
                plugin,
                Runnable {
                  chunkTasks.remove(task)
                  spawnChunkLater(chunk)
                },
            )
    chunkTasks += task
  }

  private fun spawnChunkLater(chunk: Chunk) {
    if (!plugin.isEnabled || !chunk.isLoaded) return
    for (holo in holograms.values) {
      if (holo.world != chunk.world.name) continue
      if (chunkCoord(holo.x) != chunk.x || chunkCoord(holo.z) != chunk.z) continue
      val existing = spawned[holo.name]
      if (existing != null && existing.size == displayCount(holo) && existing.all { it.isValid }) {
        continue
      }
      sync(holo)
    }
  }

  private fun sync(holo: Hologram) {
    despawn(holo.name)
    val world = Bukkit.getWorld(holo.world)
    if (!holo.enabled || world == null) return
    if (!world.isChunkLoaded(chunkCoord(holo.x), chunkCoord(holo.z))) return
    val lines = if (holo.vertical) verticalHologramLines(holo.lines) else holo.lines
    val displayLines =
        if (holo.mode == DisplayMode.END_ROLL) List(holo.windowLines + 1) { "" } else lines
    spawned[holo.name] =
        displayLines.mapIndexed { index, line ->
          HologramDisplay.spawn(world, HologramDisplay.location(world, holo, index), holo, line)
        }
    if (holo.mode == DisplayMode.END_ROLL) {
      val scroll = HologramScroll(holo)
      scrolls[holo.name] = scroll
      scroll.render(spawned.getValue(holo.name))
      startAnimation()
    }
  }

  private fun displayCount(holo: Hologram): Int =
      if (holo.mode == DisplayMode.END_ROLL) holo.windowLines + 1
      else if (holo.vertical) verticalHologramLines(holo.lines).size else holo.lines.size

  private fun despawn(name: String) {
    scrolls.remove(name)
    if (scrolls.isEmpty()) {
      animationTask?.cancel()
      animationTask = null
    }
    val entities = spawned.remove(name) ?: return
    for (entity in entities) {
      if (entity.isValid) entity.remove()
    }
  }

  private fun chunkCoord(block: Double): Int = floor(block).toInt() shr 4
}
