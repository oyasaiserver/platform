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
  private val appliedVersions = ConcurrentHashMap<String, String>()
  private val failedWorlds = ConcurrentHashMap.newKeySet<String>()
  private val managedLoadRequests = ConcurrentHashMap.newKeySet<String>()
  private val observedTargets = ConcurrentHashMap.newKeySet<String>()
  private val externallyLoaded = ConcurrentHashMap.newKeySet<String>()
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
    val worldName = event.world.name
    if (!managedSpecs.containsKey(worldName) && worldName !in currentConfig.configuredWorldNames)
        return
    if (worldName != SELF_TEST_WORLD) observedTargets += worldName
    val ownedLoad = worldName in managedLoadRequests
    if (!ownedLoad) {
      externallyLoaded += worldName
      plugin.logger.severe(
          "[OWG][lifecycle] EXTERNAL PRELOAD world=$worldName detected before self-test; " +
              "OWG did not initiate this load. The live world must be patched now to prevent " +
              "height truncation; WorldInitEvent will not unload it."
      )
    }
    val spec = managedSpecs[worldName]
    if (spec == null) {
      applyResults[worldName] = false
      plugin.logger.severe(
          "[OWG][lifecycle] WorldInitEvent cannot patch $worldName because its configuration is invalid; " +
              "ServerLoad inspection must unload it with save=false"
      )
      return
    }
    val applied = heightProvider.apply(event.world)
    applyResults[worldName] = applied
    if (applied) {
      appliedVersions[worldName] = appliedVersion()
    } else {
      appliedVersions.remove(worldName)
    }
    if (!applied) {
      plugin.logger.severe(
          "[OWG][lifecycle] WorldInitEvent patch failed for $worldName; the event handler will not unload the world"
      )
      return
    }
    if (!heightProvider.verify(event.world, spec)) {
      applyResults[worldName] = false
      appliedVersions.remove(worldName)
      plugin.logger.severe(
          "[OWG][lifecycle] WorldInitEvent verification failed for $worldName; the event handler will not unload the world"
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
        sender.sendMessage("[OWG] NG: 対応対象は Purpur 26.2 build 2622/2593 のみです")
        return false
      }
      if (currentConfig.worlds.isEmpty() || currentConfig.validationErrors.isNotEmpty()) {
        startupInspectionPassed = false
        sender.sendMessage("[OWG] NG: 設定不正 (${currentConfig.validationErrors.joinToString()})")
        return false
      }
      var loadedValid = true
      for (entry in currentConfig.worlds.values) {
        val loaded = Bukkit.getWorld(entry.name)
        if (loaded != null && !heightProvider.verify(loaded, entry.heightSpec)) loadedValid = false
      }
      startupInspectionPassed =
          loadedValid && selfTestResult == SelfTestResult.PASSED && failedWorlds.isEmpty()
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
    val entry = currentConfig.worlds[name]
    if (entry == null) {
      sender.sendMessage("[OWG] 対象ワールドではありません: $name")
      return false
    }
    val world = Bukkit.getWorld(name)
    if (world == null) {
      sender.sendMessage("[OWG] $name はロードされていません")
      return true
    }
    val applied = applyResults[name] == true
    val verified = applied && heightProvider.verify(world, entry.heightSpec)
    val save = applied && verified
    if (!save) {
      plugin.logger.severe(
          "[OWG][command] Refusing to save $name during unload: applied=$applied verified=$verified; " +
              "unload will use save=false"
      )
    }
    val result = Bukkit.unloadWorld(world, save)
    sender.sendMessage("[OWG] unload $name: $result save=$save")
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
    val lines =
        mutableListOf(
            "[OWG] plugin=${plugin.description.version} provider=${heightProvider.name} " +
                "server=${appliedVersion()} supported=${isSupportedServer()} self-test=$selfTestResult",
            "[OWG] startupInspectionPassed=$startupInspectionPassed " +
                "failedWorlds=${failedWorlds.sorted()} externallyLoaded=${externallyLoaded.sorted()}",
        )
    if (currentConfig.worlds.isEmpty()) return lines + "[OWG] 対象ワールドなし"
    for (entry in currentConfig.worlds.values) {
      val world = Bukkit.getWorld(entry.name)
      val actual =
          if (world == null) "min=- max=-" else "min=${world.minHeight} max=${world.maxHeight}"
      val applied = applyResults[entry.name]?.toString() ?: "not-observed"
      val forceLoaded = world?.forceLoadedChunks?.size ?: 0
      lines +=
          "[OWG] ${entry.name}: expected min=${entry.heightSpec.minY} max=${entry.heightSpec.maxHeight} " +
              "actual $actual loaded=${world != null} applied=$applied " +
              "appliedVersion=${appliedVersions[entry.name] ?: "-"} forceLoaded=$forceLoaded " +
              "multiverse=${multiverseRegistrationState(entry.name)}"
    }
    return lines
  }

  private fun runStartup() {
    try {
      reloadConfiguration()
      startupInspectionPassed = false
      failedWorlds.clear()
      val targetNames =
          (currentConfig.configuredWorldNames + observedTargets)
              .filter { it != SELF_TEST_WORLD }
              .sorted()
      val supported = isSupportedServer()
      val configValid =
          currentConfig.worlds.isNotEmpty() && currentConfig.validationErrors.isEmpty()

      plugin.logger.info("[OWG][startup] Runtime ${runtimeVersion()}")
      if (!supported) {
        plugin.logger.severe(
            "[OWG][startup] Unsupported server build; fail-closed inspection will still scan every target"
        )
      }
      if (!configValid) {
        plugin.logger.severe(
            "[OWG][startup] Invalid configuration: ${currentConfig.validationErrors.joinToString()}; " +
                "fail-closed inspection will still scan every target"
        )
      }

      selfTestResult =
          when {
            !currentConfig.selfTest -> SelfTestResult.DISABLED
            !supported || !configValid -> SelfTestResult.NOT_RUN
            else -> runSelfTest(selectSelfTestSpec())
          }
      if (selfTestResult == SelfTestResult.DISABLED) {
        plugin.logger.severe(
            "[OWG][self-test] DISABLED by configuration; target worlds will not be loaded and " +
                "already-loaded targets will be unloaded with save=false"
        )
      } else if (selfTestResult == SelfTestResult.FAILED) {
        plugin.logger.severe(
            "[OWG][startup] Self-test failed; fail-closed inspection will still scan every target"
        )
      }

      val loadingAllowed = supported && configValid && selfTestResult == SelfTestResult.PASSED
      for (worldName in targetNames) {
        try {
          detachFromMultiverse(worldName)
          val entry = currentConfig.worlds[worldName]
          val existing = Bukkit.getWorld(worldName)
          if (!loadingAllowed || entry == null) {
            failedWorlds += worldName
            if (existing != null) {
              recoverFailedWorld(
                  existing,
                  "startup gate rejected target: supported=$supported configValid=$configValid self-test=$selfTestResult",
              )
            } else {
              plugin.logger.severe(
                  "[OWG][startup] $worldName remains unloaded because the startup safety gate failed"
              )
            }
            continue
          }

          if (existing != null) {
            val verified =
                applyResults[worldName] == true && heightProvider.verify(existing, entry.heightSpec)
            if (!verified) {
              failedWorlds += worldName
              recoverFailedWorld(existing, "preloaded target did not verify")
            } else {
              plugin.logger.info(
                  "[OWG][startup] $worldName was already loaded and verified: " +
                      "min=${existing.minHeight} max=${existing.maxHeight} external=${worldName in externallyLoaded}"
              )
              handleConfiguredForceLoads(existing)
            }
          } else {
            createAndVerify(entry, Bukkit.getConsoleSender())
          }
        } catch (throwable: Throwable) {
          failedWorlds += worldName
          Bukkit.getWorld(worldName)?.let {
            recoverFailedWorld(it, "exception during startup inspection")
          }
          plugin.logger.log(
              Level.SEVERE,
              "[OWG][startup] Inspection failed for $worldName; continuing with remaining targets",
              throwable,
          )
        } finally {
          detachFromMultiverse(worldName)
        }
      }
      startupInspectionPassed =
          loadingAllowed &&
              failedWorlds.isEmpty() &&
              currentConfig.worlds.keys.all {
                Bukkit.getWorld(it) != null && applyResults[it] == true
              }
      plugin.logger.info(
          "[OWG][startup] Inspection complete: passed=$startupInspectionPassed " +
              "failedWorlds=${failedWorlds.sorted()} targets=$targetNames"
      )
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
    try {
      declare(entry)
      applyResults.remove(entry.name)
      appliedVersions.remove(entry.name)
      plugin.logger.info(
          "[OWG][lifecycle] Creating/loading ${entry.name}: expected min=${entry.heightSpec.minY} max=${entry.heightSpec.maxHeight}"
      )
      val world =
          createManagedWorld(
              entry.name,
              WorldCreator(entry.name)
                  .environment(World.Environment.THE_END)
                  .generator(VoidGenerator(entry.spawnY))
                  .generateStructures(false),
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
        recoverFailedWorld(world, "post-create verification failed")
        sender.sendMessage("[OWG] ${entry.name} の高さ検証に失敗しました")
        return false
      }
      plugin.logger.info(
          "[OWG][lifecycle] WORLD PASS ${entry.name}: min=${world.minHeight} max=${world.maxHeight}"
      )
      failedWorlds -= entry.name
      handleConfiguredForceLoads(world)
      sender.sendMessage("[OWG] ${entry.name} ready: min=${world.minHeight} max=${world.maxHeight}")
      return true
    } finally {
      detachFromMultiverse(entry.name)
    }
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
          createManagedWorld(
              name,
              WorldCreator(name)
                  .environment(World.Environment.THE_END)
                  .generator(VoidGenerator(spec.minY.coerceAtLeast(0)))
                  .generateStructures(false),
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
      appliedVersions.remove(name)
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

  private fun createManagedWorld(worldName: String, creator: WorldCreator): World? {
    managedLoadRequests += worldName
    return try {
      Bukkit.createWorld(creator)
    } finally {
      managedLoadRequests -= worldName
    }
  }

  private fun recoverFailedWorld(world: World, reason: String) {
    failedWorlds += world.name
    val unloaded = Bukkit.unloadWorld(world, false)
    plugin.logger.severe(
        "[OWG][lifecycle] ${world.name} rejected: $reason; unload(save=false)=$unloaded; " +
            "it will not be loaded again this run"
    )
  }

  private fun handleConfiguredForceLoads(world: World) {
    val chunks = world.forceLoadedChunks.toList()
    if (!currentConfig.clearForceLoadedChunks || chunks.isEmpty()) return
    plugin.logger.warning(
        "[OWG][forceload] Explicitly clearing ${chunks.size} force-loaded chunk(s) in ${world.name}. " +
            "The destructive save/load window for this startup had already passed before this cleanup."
    )
    chunks.forEach { world.setChunkForceLoaded(it.x, it.z, false) }
    check(world.forceLoadedChunks.isEmpty()) {
      "force-loaded chunks remained after explicit cleanup: ${world.forceLoadedChunks.size}"
    }
  }

  private fun isSupportedServer(): Boolean =
      (heightProvider as? NmsHeightProvider)?.isSupportedServer() ?: true

  private fun appliedVersion(): String =
      (heightProvider as? NmsHeightProvider)?.appliedVersion() ?: heightProvider.name

  private fun runtimeVersion(): String =
      (heightProvider as? NmsHeightProvider)?.runtimeVersion() ?: heightProvider.name

  private fun multiverseRegistrationState(worldName: String): String {
    val multiverse = Bukkit.getPluginManager().getPlugin("Multiverse-Core") ?: return "unavailable"
    if (!multiverse.isEnabled) return "disabled"
    return try {
      val apiClass = Class.forName("org.mvplugins.multiverse.core.MultiverseCoreApi")
      if (!(apiClass.getMethod("isLoaded").invoke(null) as Boolean)) return "not-ready"
      val api = apiClass.getMethod("get").invoke(null)
      val manager = apiClass.getMethod("getWorldManager").invoke(api)
      val registered =
          manager.javaClass.getMethod("isWorld", String::class.java).invoke(manager, worldName)
              as Boolean
      registered.toString()
    } catch (throwable: Throwable) {
      "error:${throwable.javaClass.simpleName}"
    }
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
      val wasLoaded = Bukkit.getWorld(worldName) != null
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
      check(!wasLoaded || Bukkit.getWorld(worldName) != null) {
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
