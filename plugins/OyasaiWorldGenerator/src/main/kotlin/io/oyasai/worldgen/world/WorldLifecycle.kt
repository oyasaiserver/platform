package io.oyasai.worldgen.world

import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.config.OwgWorldConfig
import io.oyasai.worldgen.config.OwgWorldKind
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
import org.bukkit.WorldType
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.server.ServerLoadEvent
import org.bukkit.event.world.WorldInitEvent
import org.bukkit.event.world.WorldLoadEvent
import org.bukkit.plugin.java.JavaPlugin

class WorldLifecycle(
    private val plugin: JavaPlugin,
    private val heightProvider: HeightProvider,
    initialConfig: OwgConfig,
    private val normalWorlds: NormalWorlds? = null,
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
  private val initialWorldsPending = mutableSetOf<NamespacedKey>()
  private var initialWorldsLoaded = false
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
    if (!initialWorldsLoaded) initialWorldsPending += event.world.key
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
              "ServerLoad inspection will reject unloading it without a verified save"
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
  fun onWorldLoad(event: WorldLoadEvent) {
    if (
        initialWorldsLoaded ||
            !initialWorldsPending.remove(event.world.key) ||
            initialWorldsPending.isNotEmpty()
    )
        return
    initialWorldsLoaded = true
    normalWorlds?.loadStartup()
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
        sender.sendMessage("[OWG] NG: 対応対象は Purpur 26.2 build 2633/2622/2593 のみです")
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

  fun createWorld(name: String, kindId: String, sender: CommandSender): Boolean {
    val kind = OwgWorldKind.parse(kindId)
    if (kind == null || kind.id != kindId.lowercase()) {
      sender.sendMessage("Usage: /owg create <name> <void-end|flat>")
      return false
    }
    if (!OwgConfig.isSafeWorldName(name)) {
      sender.sendMessage("[OWG] 使用できないワールド名です: $name")
      return false
    }
    reloadConfiguration()
    if (name in currentConfig.configuredWorldNames || plugin.config.contains("worlds.$name")) {
      sender.sendMessage("[OWG] 既に設定されています: $name")
      return false
    }
    if (Bukkit.getWorld(name) != null || worldFolders(name).any(Files::exists)) {
      sender.sendMessage("[OWG] 既存ワールドまたはフォルダがあるため作成しません: $name")
      return false
    }
    val entry = OwgConfig.defaultWorld(name, kind)
    val supported = isSupportedServer()
    if (!supported) {
      sender.sendMessage("[OWG] NG: 対応対象は Purpur 26.2 build 2633/2622/2593 のみです")
      return false
    }
    if (!currentConfig.selfTest) {
      sender.sendMessage("[OWG] self-test が無効のため作成しません")
      return false
    }
    if (runSelfTest(entry) != SelfTestResult.PASSED) {
      sender.sendMessage("[OWG] 自己テストに失敗したため作成しません")
      return false
    }

    writeWorldConfig(entry)
    reloadConfiguration()
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
    if (!verified) {
      val reason = "applied=$applied verified=$verified"
      plugin.logger.severe("[OWG][command] Refusing to unload $name: $reason; world remains loaded")
      sender.sendMessage("[OWG] $name は高さを照合できないためアンロードしません ($reason)")
      return false
    }
    val result = Bukkit.unloadWorld(world, true)
    sender.sendMessage("[OWG] unload $name: $result save=true")
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
    val moved =
        player.teleport(Location(world, 0.5, entry.spawnY.toDouble(), 0.5)) && player.world == world
    if (moved) {
      player.gameMode = entry.gameMode
      player.allowFlight = entry.allowFlight
      if (!entry.allowFlight) player.isFlying = false
    }
    player.sendMessage(if (moved) "[OWG] ${entry.name} に移動しました" else "[OWG] 移動に失敗しました")
    return moved
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
              "appliedVersion=${appliedVersions[entry.name] ?: "-"} forceLoaded=$forceLoaded"
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
      if (currentConfig.worlds.isEmpty() && currentConfig.validationErrors.isEmpty()) {
        selfTestResult = SelfTestResult.NOT_RUN
        plugin.logger.warning(
            "[OWG][startup] No height-managed worlds configured; self-test skipped"
        )
        return
      }
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
            else ->
                if (selectSelfTestEntries().all { runSelfTest(it) == SelfTestResult.PASSED })
                    SelfTestResult.PASSED
                else SelfTestResult.FAILED
          }
      if (selfTestResult == SelfTestResult.DISABLED) {
        plugin.logger.severe(
            "[OWG][self-test] DISABLED by configuration; target worlds will not be loaded and " +
                "already-loaded targets will remain loaded without an unverified unload"
        )
      } else if (selfTestResult == SelfTestResult.FAILED) {
        plugin.logger.severe(
            "[OWG][startup] Self-test failed; fail-closed inspection will still scan every target"
        )
      }

      val loadingAllowed = supported && configValid && selfTestResult == SelfTestResult.PASSED
      for (worldName in targetNames) {
        try {
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
    heightProvider.declare(entry.name, entry.heightSpec, entry.kind.environment)
  }

  private fun createAndVerify(entry: OwgWorldConfig, sender: CommandSender): Boolean {
    declare(entry)
    applyResults.remove(entry.name)
    appliedVersions.remove(entry.name)
    plugin.logger.info(
        "[OWG][lifecycle] Creating/loading ${entry.name}: expected min=${entry.heightSpec.minY} max=${entry.heightSpec.maxHeight}"
    )
    val world =
        createManagedWorld(
            entry.name,
            worldCreator(entry.name, entry),
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
  }

  private fun selectSelfTestEntries(): List<OwgWorldConfig> =
      currentConfig.worlds.values
          .distinctBy { it.kind to it.heightSpec }
          .sortedWith(compareBy<OwgWorldConfig> { it.kind.id }.thenBy { it.heightSpec.maxHeight })

  private fun runSelfTest(entry: OwgWorldConfig): SelfTestResult {
    val name = SELF_TEST_WORLD
    val spec = entry.heightSpec
    val allowedFolders = selfTestFolders()
    plugin.logger.info(
        "[OWG][self-test] BEGIN world=$name kind=${entry.kind.id} expected min=${spec.minY} max=${spec.maxHeight} " +
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
      heightProvider.declare(name, spec, entry.kind.environment)
      applyResults.remove(name)
      plugin.logger.info("[OWG][self-test] createWorld start")
      val createdWorld =
          createManagedWorld(
              name,
              worldCreator(name, entry),
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
    return setOf(
        root.resolve(SELF_TEST_WORLD).normalize(),
        checkNotNull(primaryWorldStorageRoot()) { "Primary world is unavailable" }
            .resolve("dimensions/minecraft/$SELF_TEST_WORLD")
            .normalize(),
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

  private fun worldCreator(worldName: String, entry: OwgWorldConfig): WorldCreator {
    val creator =
        WorldCreator(worldName).environment(entry.kind.environment).generateStructures(false)
    return when (entry.kind) {
      OwgWorldKind.VOID_END -> creator.generator(VoidGenerator(entry.spawnY))
      OwgWorldKind.FLAT -> creator.type(WorldType.FLAT)
    }
  }

  private fun writeWorldConfig(entry: OwgWorldConfig) {
    val path = "worlds.${entry.name}"
    plugin.config.set("$path.generator", entry.kind.id)
    plugin.config.set("$path.min-y", entry.heightSpec.minY)
    plugin.config.set("$path.height", entry.heightSpec.height)
    plugin.config.set("$path.logical-height", entry.heightSpec.logicalHeight)
    plugin.config.set("$path.spawn-y", entry.spawnY)
    plugin.config.set("$path.gamemode", entry.gameMode.name.lowercase())
    plugin.config.set("$path.allow-flight", entry.allowFlight)
    plugin.saveConfig()
    plugin.logger.info("[OWG][config] Added ${entry.name} (${entry.kind.id}) to config.yml")
  }

  private fun worldFolders(worldName: String): Set<Path> {
    val root = Bukkit.getWorldContainer().toPath().toAbsolutePath().normalize()
    return setOf(
        root.resolve(worldName).normalize(),
        checkNotNull(primaryWorldStorageRoot()) { "Primary world is unavailable" }
            .resolve("dimensions/minecraft/$worldName")
            .normalize(),
    )
  }

  private fun recoverFailedWorld(world: World, reason: String) {
    failedWorlds += world.name
    plugin.logger.severe(
        "[OWG][lifecycle] Refusing to unload ${world.name}: $reason; " +
            "height is unverified, world remains loaded and will not be loaded again this run"
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

  companion object {
    private const val SELF_TEST_WORLD = "owg_selftest"
  }
}
