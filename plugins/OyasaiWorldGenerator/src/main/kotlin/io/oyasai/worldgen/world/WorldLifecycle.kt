package io.oyasai.worldgen.world

import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.config.OwgWorldConfig
import io.oyasai.worldgen.gen.VoidGenerator
import io.oyasai.worldgen.height.HeightProvider
import io.oyasai.worldgen.height.HeightSpec
import io.oyasai.worldgen.height.NmsHeightProvider
import java.nio.file.Files
import java.nio.file.Path
import java.util.Comparator
import java.util.concurrent.ConcurrentHashMap
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.World
import org.bukkit.WorldCreator
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.server.ServerLoadEvent
import org.bukkit.event.world.WorldInitEvent
import org.bukkit.plugin.java.JavaPlugin

class WorldLifecycle(
    private val plugin: JavaPlugin,
    private val heightProvider: HeightProvider,
    initialConfig: OwgConfig,
) : Listener {
  enum class SelfTestResult {
    NOT_RUN,
    DISABLED,
    PASSED,
    FAILED,
  }

  private val managedSpecs = ConcurrentHashMap<String, HeightSpec>()
  private val applyResults = ConcurrentHashMap<String, Boolean>()
  private val failedWorlds = ConcurrentHashMap.newKeySet<String>()
  @Volatile private var currentConfig: OwgConfig = initialConfig
  @Volatile
  var selfTestResult: SelfTestResult = SelfTestResult.NOT_RUN
    private set

  @Volatile private var startupInspectionPassed = false

  fun primeDeclarations() {
    currentConfig.worlds.values.forEach { declare(it) }
  }

  fun configSnapshot(): OwgConfig = currentConfig

  @EventHandler(priority = EventPriority.NORMAL)
  fun onWorldInit(event: WorldInitEvent) {
    val spec = managedSpecs[event.world.name] ?: return
    val applied = heightProvider.apply(event.world)
    applyResults[event.world.name] = applied
    if (!applied) {
      plugin.logger.severe(
          "[OWG][lifecycle] WorldInitEvent patch failed for ${event.world.name}; the event handler will not unload the world"
      )
      return
    }
    if (!heightProvider.verify(event.world, spec)) {
      applyResults[event.world.name] = false
      plugin.logger.severe(
          "[OWG][lifecycle] WorldInitEvent verification failed for ${event.world.name}; the event handler will not unload the world"
      )
    }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onServerLoad(event: ServerLoadEvent) {
    Bukkit.getScheduler().runTask(plugin, Runnable { runStartup() })
  }

  fun runCheck(sender: CommandSender): Boolean {
    return try {
      reloadConfiguration()
      val supported = (heightProvider as? NmsHeightProvider)?.isSupportedServer() ?: true
      if (!supported) {
        startupInspectionPassed = false
        sender.sendMessage("[OWG] NG: 対応対象は Purpur 26.2 のみです")
        return false
      }
      if (currentConfig.worlds.isEmpty()) {
        startupInspectionPassed = false
        sender.sendMessage("[OWG] NG: 有効な対象ワールドがありません")
        return false
      }
      var loadedValid = true
      for (entry in currentConfig.worlds.values) {
        val loaded = Bukkit.getWorld(entry.name)
        if (loaded != null && !heightProvider.verify(loaded, entry.heightSpec)) loadedValid = false
      }
      startupInspectionPassed =
          loadedValid &&
              (selfTestResult == SelfTestResult.PASSED || selfTestResult == SelfTestResult.DISABLED)
      sender.sendMessage(
          "[OWG] check: config=${currentConfig.worlds.size} version=OK loaded=${if (loadedValid) "OK" else "NG"} self-test=$selfTestResult"
      )
      startupInspectionPassed
    } catch (throwable: Throwable) {
      startupInspectionPassed = false
      plugin.logger.log(Level.SEVERE, "[OWG][check] Inspection failed", throwable)
      sender.sendMessage("[OWG] 検査中に例外が発生しました。ログを確認してください")
      false
    }
  }

  fun loadWorld(name: String, sender: CommandSender): Boolean {
    val entry = currentConfig.worlds[name]
    if (entry == null) {
      sender.sendMessage("[OWG] 対象ワールドではありません: $name")
      return false
    }
    if (!startupInspectionPassed) {
      sender.sendMessage("[OWG] 安全検査を通過していないためロードしません")
      return false
    }
    if (name in failedWorlds) {
      sender.sendMessage("[OWG] この起動中に失敗済みのため、$name は再ロードしません")
      return false
    }
    Bukkit.getWorld(name)?.let {
      val valid = heightProvider.verify(it, entry.heightSpec)
      sender.sendMessage("[OWG] $name は既にロード済みです (${if (valid) "高さOK" else "高さNG"})")
      return valid
    }
    return createAndVerify(entry, sender)
  }

  fun unloadWorld(name: String, sender: CommandSender): Boolean {
    if (!currentConfig.worlds.containsKey(name)) {
      sender.sendMessage("[OWG] 対象ワールドではありません: $name")
      return false
    }
    val world = Bukkit.getWorld(name)
    if (world == null) {
      sender.sendMessage("[OWG] $name はロードされていません")
      return true
    }
    val result = Bukkit.unloadWorld(world, true)
    sender.sendMessage("[OWG] unload $name: $result")
    return result
  }

  fun teleport(player: Player, requestedWorld: String?): Boolean {
    val entry =
        if (requestedWorld == null) currentConfig.worlds.values.firstOrNull()
        else currentConfig.worlds[requestedWorld]
    if (entry == null) {
      player.sendMessage("[OWG] 対象ワールドが見つかりません")
      return false
    }
    val world = Bukkit.getWorld(entry.name)
    if (world == null) {
      player.sendMessage("[OWG] まだ準備できていません")
      return false
    }
    player.gameMode = entry.gameMode
    player.allowFlight = entry.allowFlight
    if (!entry.allowFlight) player.isFlying = false
    return player.teleport(Location(world, 0.5, entry.spawnY.toDouble(), 0.5)).also {
      player.sendMessage(if (it) "[OWG] ${entry.name} に移動しました" else "[OWG] 移動に失敗しました")
    }
  }

  fun statusLines(): List<String> {
    val lines = mutableListOf("[OWG] provider=${heightProvider.name} self-test=$selfTestResult")
    if (currentConfig.worlds.isEmpty()) return lines + "[OWG] 対象ワールドなし"
    for (entry in currentConfig.worlds.values) {
      val world = Bukkit.getWorld(entry.name)
      val actual =
          if (world == null) "min=- max=-" else "min=${world.minHeight} max=${world.maxHeight}"
      val applied = applyResults[entry.name]?.toString() ?: "not-observed"
      lines +=
          "[OWG] ${entry.name}: expected min=${entry.heightSpec.minY} max=${entry.heightSpec.maxHeight} " +
              "actual $actual loaded=${world != null} applied=$applied provider=${heightProvider.name}"
    }
    return lines
  }

  private fun runStartup() {
    try {
      reloadConfiguration()
      startupInspectionPassed = false
      failedWorlds.clear()
      if (currentConfig.worlds.isEmpty()) {
        plugin.logger.warning("[OWG][startup] No valid target worlds; startup loading stopped")
        return
      }
      val supported = (heightProvider as? NmsHeightProvider)?.isSupportedServer() ?: true
      if (!supported) {
        plugin.logger.severe("[OWG][startup] Unsupported server; no target world will be loaded")
        return
      }

      selfTestResult =
          if (currentConfig.selfTest) runSelfTest(selectSelfTestSpec()) else SelfTestResult.DISABLED
      if (selfTestResult == SelfTestResult.FAILED) {
        plugin.logger.severe("[OWG][startup] Self-test failed; no target world will be loaded")
        return
      }
      if (selfTestResult == SelfTestResult.DISABLED) {
        plugin.logger.warning("[OWG][self-test] DISABLED by configuration")
      }
      startupInspectionPassed = true

      for (entry in currentConfig.worlds.values) {
        val existing = Bukkit.getWorld(entry.name)
        if (existing != null) {
          val verified =
              applyResults[entry.name] == true && heightProvider.verify(existing, entry.heightSpec)
          if (!verified) {
            startupInspectionPassed = false
            failedWorlds += entry.name
            val unloaded = Bukkit.unloadWorld(existing, false)
            plugin.logger.severe(
                "[OWG][startup] ${entry.name} was loaded before managed creation and did not verify; " +
                    "unload(save=false)=$unloaded; it will not be loaded again this run"
            )
          } else {
            plugin.logger.info(
                "[OWG][startup] ${entry.name} was already loaded and verified: min=${existing.minHeight} max=${existing.maxHeight}"
            )
          }
          continue
        }
        createAndVerify(entry, Bukkit.getConsoleSender())
      }
    } catch (throwable: Throwable) {
      startupInspectionPassed = false
      plugin.logger.log(Level.SEVERE, "[OWG][startup] Startup sequence failed", throwable)
    }
  }

  private fun reloadConfiguration() {
    plugin.reloadConfig()
    currentConfig = OwgConfig.load(plugin.config, plugin.logger)
    managedSpecs.clear()
    currentConfig.worlds.values.forEach { declare(it) }
  }

  private fun declare(entry: OwgWorldConfig) {
    managedSpecs[entry.name] = entry.heightSpec
    heightProvider.declare(entry.name, entry.heightSpec)
  }

  private fun createAndVerify(entry: OwgWorldConfig, sender: CommandSender): Boolean {
    declare(entry)
    applyResults.remove(entry.name)
    plugin.logger.info(
        "[OWG][lifecycle] Creating/loading ${entry.name}: expected min=${entry.heightSpec.minY} max=${entry.heightSpec.maxHeight}"
    )
    val world =
        Bukkit.createWorld(
            WorldCreator(entry.name)
                .environment(World.Environment.THE_END)
                .generator(VoidGenerator(entry.spawnY))
                .generateStructures(false)
        )
    if (world == null) {
      failedWorlds += entry.name
      plugin.logger.severe("[OWG][lifecycle] createWorld returned null for ${entry.name}")
      sender.sendMessage("[OWG] ${entry.name} のロードに失敗しました")
      return false
    }
    val valid = applyResults[entry.name] == true && heightProvider.verify(world, entry.heightSpec)
    if (!valid) {
      failedWorlds += entry.name
      val unloaded = Bukkit.unloadWorld(world, false)
      plugin.logger.severe(
          "[OWG][lifecycle] ${entry.name} verification failed; unload(save=false)=$unloaded; it will not be loaded again this run"
      )
      sender.sendMessage("[OWG] ${entry.name} の高さ検証に失敗しました")
      return false
    }
    plugin.logger.info(
        "[OWG][lifecycle] WORLD PASS ${entry.name}: min=${world.minHeight} max=${world.maxHeight}"
    )
    failedWorlds -= entry.name
    sender.sendMessage("[OWG] ${entry.name} ready: min=${world.minHeight} max=${world.maxHeight}")
    detachFromMultiverse(entry.name)
    return true
  }

  private fun selectSelfTestSpec(): HeightSpec =
      currentConfig.worlds.values.maxBy { it.heightSpec.maxHeight }.heightSpec

  private fun runSelfTest(spec: HeightSpec): SelfTestResult {
    val name = SELF_TEST_WORLD
    val allowedFolders = selfTestFolders()
    plugin.logger.info(
        "[OWG][self-test] BEGIN world=$name expected min=${spec.minY} max=${spec.maxHeight} " +
            "logical=${spec.logicalHeight} allowed=${allowedFolders.joinToString()}"
    )
    if (Bukkit.getWorld(name) != null || allowedFolders.any(Files::exists)) {
      plugin.logger.severe(
          "[OWG][self-test] FAILED: $name already exists; refusing to reuse or delete a world not created during this startup"
      )
      return SelfTestResult.FAILED
    }

    var world: World? = null
    var createdFolder: Path? = null
    var createdThisRun = false
    var passed = false
    try {
      managedSpecs[name] = spec
      heightProvider.declare(name, spec)
      applyResults.remove(name)
      plugin.logger.info("[OWG][self-test] createWorld start")
      val createdWorld =
          Bukkit.createWorld(
              WorldCreator(name)
                  .environment(World.Environment.THE_END)
                  .generator(VoidGenerator(spec.minY.coerceAtLeast(0)))
                  .generateStructures(false)
          )
      check(createdWorld != null) { "createWorld returned null" }
      world = createdWorld
      createdFolder = createdWorld.worldPath.toAbsolutePath().normalize()
      check(createdFolder in allowedFolders) {
        "Self-test world path is outside the exact allowlist: $createdFolder"
      }
      createdThisRun = Files.exists(createdFolder)
      check(createdThisRun) { "Self-test world folder was not created at $createdFolder" }
      plugin.logger.info(
          "[OWG][self-test] observed min=${createdWorld.minHeight} max=${createdWorld.maxHeight} apply=${applyResults[name]}"
      )
      passed = applyResults[name] == true && heightProvider.verify(createdWorld, spec)
      check(passed) { "height verification failed" }
    } catch (throwable: Throwable) {
      plugin.logger.log(Level.SEVERE, "[OWG][self-test] execution failed", throwable)
    } finally {
      if (world != null) {
        val unloaded = Bukkit.unloadWorld(world, false)
        plugin.logger.info("[OWG][self-test] unload(save=false)=$unloaded")
        if (!unloaded) passed = false
      }
      if (createdThisRun && createdFolder != null && Bukkit.getWorld(name) == null) {
        val deleted = deleteSelfTestFolder(createdFolder, allowedFolders)
        plugin.logger.info("[OWG][self-test] delete-created-folder=$deleted path=$createdFolder")
        if (!deleted) passed = false
      } else if (createdThisRun) {
        plugin.logger.severe(
            "[OWG][self-test] Refusing to delete $createdFolder because the world is still loaded"
        )
        passed = false
      }
      managedSpecs.remove(name)
      applyResults.remove(name)
    }
    val result = if (passed) SelfTestResult.PASSED else SelfTestResult.FAILED
    plugin.logger.info("[OWG][self-test] $result")
    return result
  }

  private fun selfTestFolders(): Set<Path> {
    val root = Bukkit.getWorldContainer().toPath().toAbsolutePath().normalize()
    val primaryWorldPath =
        Bukkit.getWorlds()
            .firstOrNull { it.key == NamespacedKey.minecraft("overworld") }
            ?.worldPath
            ?.toAbsolutePath()
            ?.normalize() ?: error("Primary world is unavailable during self-test")
    val levelStorageRoot =
        if (
            primaryWorldPath.fileName.toString() == "overworld" &&
                primaryWorldPath.parent?.fileName?.toString() == "minecraft" &&
                primaryWorldPath.parent?.parent?.fileName?.toString() == "dimensions"
        ) {
          primaryWorldPath.parent.parent.parent
        } else {
          primaryWorldPath
        }
    return setOf(
        root.resolve(SELF_TEST_WORLD).normalize(),
        levelStorageRoot.resolve("dimensions/minecraft/$SELF_TEST_WORLD").normalize(),
    )
  }

  private fun deleteSelfTestFolder(folder: Path, allowedFolders: Set<Path>): Boolean {
    val normalized = folder.toAbsolutePath().normalize()
    check(normalized in allowedFolders && normalized.fileName.toString() == SELF_TEST_WORLD) {
      "Self-test delete guard rejected $normalized"
    }
    if (!Files.exists(normalized)) return true
    Files.walk(normalized).use { paths ->
      paths.sorted(Comparator.reverseOrder()).forEach { Files.delete(it) }
    }
    return !Files.exists(normalized)
  }

  private fun detachFromMultiverse(worldName: String) {
    val multiverse = Bukkit.getPluginManager().getPlugin("Multiverse-Core") ?: return
    if (!multiverse.isEnabled) return
    try {
      val apiClass = Class.forName("org.mvplugins.multiverse.core.MultiverseCoreApi")
      if (!(apiClass.getMethod("isLoaded").invoke(null) as Boolean)) return
      val api = apiClass.getMethod("get").invoke(null)
      val manager = apiClass.getMethod("getWorldManager").invoke(api)
      val isWorld =
          manager.javaClass.getMethod("isWorld", String::class.java).invoke(manager, worldName)
              as Boolean
      if (!isWorld) {
        plugin.logger.info(
            "[OWG][multiverse] $worldName was not registered; no import action taken"
        )
        return
      }
      val option =
          manager.javaClass.getMethod("getWorld", String::class.java).invoke(manager, worldName)
      val mvWorld = option.javaClass.getMethod("get").invoke(option)
      val optionsClass =
          Class.forName("org.mvplugins.multiverse.core.world.options.RemoveWorldOptions")
      val mvWorldClass = Class.forName("org.mvplugins.multiverse.core.world.MultiverseWorld")
      val options = optionsClass.getMethod("world", mvWorldClass).invoke(null, mvWorld)
      optionsClass
          .getMethod("saveBukkitWorld", Boolean::class.javaPrimitiveType)
          .invoke(options, false)
      optionsClass
          .getMethod("unloadBukkitWorld", Boolean::class.javaPrimitiveType)
          .invoke(options, false)
      val removeMethod = manager.javaClass.getMethod("removeWorld", optionsClass)
      val attempt = removeMethod.invoke(manager, options)
      val success = attempt.javaClass.getMethod("isSuccess").invoke(attempt) as Boolean
      check(success) { "Multiverse removeWorld returned failure: $attempt" }
      check(Bukkit.getWorld(worldName) != null) {
        "Multiverse unexpectedly unloaded Bukkit world $worldName"
      }
      plugin.logger.info(
          "[OWG][multiverse] Removed $worldName from Multiverse registry without unloading or deleting it"
      )
    } catch (throwable: Throwable) {
      plugin.logger.log(
          Level.WARNING,
          "[OWG][multiverse] Could not remove $worldName from automatic Multiverse registration; OWG will still not import it",
          throwable,
      )
    }
  }

  companion object {
    private const val SELF_TEST_WORLD = "owg_selftest"
  }
}
