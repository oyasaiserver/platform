package icu.oyasai.citiesskymine

import icu.oyasai.citiesskymine.access.CsmAccessController
import icu.oyasai.citiesskymine.bezier.BezierCommand
import icu.oyasai.citiesskymine.bezier.BezierPreview
import icu.oyasai.citiesskymine.bezier.BezierSession
import icu.oyasai.citiesskymine.cloud.CloudCommand
import icu.oyasai.citiesskymine.columns.ColumnLayoutCommand
import icu.oyasai.citiesskymine.command.CitiesSkyMineCommand
import icu.oyasai.citiesskymine.config.ConfigGuiCommand
import icu.oyasai.citiesskymine.config.ServerConfigCommand
import icu.oyasai.citiesskymine.crowd.CrowdCommand
import icu.oyasai.citiesskymine.debugstick.DebugStickCommand
import icu.oyasai.citiesskymine.debugstick.DebugStickMemoryStore
import icu.oyasai.citiesskymine.facade.HaussmannCommand
import icu.oyasai.citiesskymine.hud.WorldEditHudCommand
import icu.oyasai.citiesskymine.hud.WorldEditHudListener
import icu.oyasai.citiesskymine.hud.WorldEditHudService
import icu.oyasai.citiesskymine.payload.PayloadCommand
import icu.oyasai.citiesskymine.preset.BrushPresetCommand
import icu.oyasai.citiesskymine.road.IntersectionCommand
import icu.oyasai.citiesskymine.road.IntersectionPreview
import icu.oyasai.citiesskymine.road.IntersectionSession
import icu.oyasai.citiesskymine.road.RoadCurveCommand
import icu.oyasai.citiesskymine.road.RoadGeometry
import icu.oyasai.citiesskymine.road.RoadPreview
import icu.oyasai.citiesskymine.road.RoadSession
import icu.oyasai.citiesskymine.road.RoadSettings
import icu.oyasai.citiesskymine.road.WaypointListener
import icu.oyasai.citiesskymine.schematic.SchematicCommand
import icu.oyasai.citiesskymine.selection.SelectionCommand
import icu.oyasai.citiesskymine.slabstairs.SlabStairsCommand
import icu.oyasai.citiesskymine.stack.StackCommand
import icu.oyasai.citiesskymine.storage.PlayerDataStore
import icu.oyasai.citiesskymine.window.WindowCommand
import java.util.HashMap
import java.util.UUID
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

class Main : JavaPlugin() {
  lateinit var playerDataStore: PlayerDataStore
    private set

  lateinit var access: CsmAccessController
    private set

  lateinit var worldEditHud: WorldEditHudService
    private set

  private val sessions = HashMap<UUID, RoadSession>()
  private val intersectionSessions = HashMap<UUID, IntersectionSession>()
  private val bezierSessions = HashMap<UUID, BezierSession>()
  private lateinit var cloudHandler: CloudCommand
  private var debugStickMemoryStore: DebugStickMemoryStore? = null

  companion object {
    lateinit var instance: Main
      private set
  }

  override fun onEnable() {
    instance = this
    saveDefaultConfig()

    if (!checkDependencies()) {
      logger.severe("依存プラグインが見つかりません。CitiesSkyMine を無効化します。")
      server.pluginManager.disablePlugin(this)
      return
    }

    playerDataStore = PlayerDataStore(this)
    access = CsmAccessController(this)
    worldEditHud = WorldEditHudService(this)
    debugStickMemoryStore = DebugStickMemoryStore(this).also { it.load() }

    val rcHandler = RoadCurveCommand(this)
    val rcCmd = getCommand("rc")
    rcCmd?.setExecutor(rcHandler)
    rcCmd?.tabCompleter = rcHandler
    val dotRcCmd = getCommand(".rc")
    dotRcCmd?.setExecutor(rcHandler)
    dotRcCmd?.tabCompleter = rcHandler
    server.pluginManager.registerEvents(WaypointListener(this), this)

    val riHandler = IntersectionCommand(this)
    val riCmd = getCommand("ri")
    riCmd?.setExecutor(riHandler)
    riCmd?.tabCompleter = riHandler
    val dotRiCmd = getCommand(".ri")
    dotRiCmd?.setExecutor(riHandler)
    dotRiCmd?.tabCompleter = riHandler

    val hbHandler = HaussmannCommand(this)
    val hbCmd = getCommand("hb")
    hbCmd?.setExecutor(hbHandler)
    hbCmd?.tabCompleter = hbHandler
    val dotHbCmd = getCommand(".hb")
    dotHbCmd?.setExecutor(hbHandler)
    dotHbCmd?.tabCompleter = hbHandler

    val payloadHandler = PayloadCommand(this)
    val windowHandler = WindowCommand(this)
    val slabStairsHandler = SlabStairsCommand(this)
    val columnLayoutHandler = ColumnLayoutCommand(this)
    val stackHandler = StackCommand(this)
    val crowdHandler = CrowdCommand(this)
    val selectionHandler = SelectionCommand(this)
    val settingsHandler = ConfigGuiCommand(this)
    val serverConfigHandler = ServerConfigCommand(this)
    cloudHandler = CloudCommand(this)
    val bezierHandler = BezierCommand(this)
    val debugStickHandler =
        DebugStickCommand(this, debugStickMemoryStore ?: DebugStickMemoryStore(this))
    val brushPresetHandler = BrushPresetCommand(this)
    val schematicHandler = SchematicCommand(this)
    val hudHandler = WorldEditHudCommand(this)
    val csmHandler =
        CitiesSkyMineCommand(
            this,
            rcHandler,
            riHandler,
            hbHandler,
            payloadHandler,
            windowHandler,
            slabStairsHandler,
            columnLayoutHandler,
            stackHandler,
            crowdHandler,
            selectionHandler,
            settingsHandler,
            serverConfigHandler,
            cloudHandler,
            bezierHandler,
            debugStickHandler,
            brushPresetHandler,
            schematicHandler,
        )
    val csmCmd = getCommand("csm")
    csmCmd?.setExecutor(csmHandler)
    csmCmd?.tabCompleter = csmHandler
    val dotHelpCmd = getCommand(".help")
    dotHelpCmd?.setExecutor(csmHandler)
    dotHelpCmd?.tabCompleter = csmHandler
    val dotPayloadCmd = getCommand(".pl")
    dotPayloadCmd?.setExecutor(payloadHandler)
    dotPayloadCmd?.tabCompleter = payloadHandler
    val dotWindowCmd = getCommand(".win")
    dotWindowCmd?.setExecutor(windowHandler)
    dotWindowCmd?.tabCompleter = windowHandler
    val dotSlabStairsCmd = getCommand(".ss")
    dotSlabStairsCmd?.setExecutor(slabStairsHandler)
    dotSlabStairsCmd?.tabCompleter = slabStairsHandler
    val dotColumnCmd = getCommand(".col")
    dotColumnCmd?.setExecutor(columnLayoutHandler)
    dotColumnCmd?.tabCompleter = columnLayoutHandler
    val dotStackCmd = getCommand(".ns")
    dotStackCmd?.setExecutor(stackHandler)
    dotStackCmd?.tabCompleter = stackHandler
    val dotCrowdCmd = getCommand(".crowd")
    dotCrowdCmd?.setExecutor(crowdHandler)
    dotCrowdCmd?.tabCompleter = crowdHandler
    val dotSelectionCmd = getCommand(".sel")
    dotSelectionCmd?.setExecutor(selectionHandler)
    dotSelectionCmd?.tabCompleter = selectionHandler
    val dotSettingsCmd = getCommand(".settings")
    dotSettingsCmd?.setExecutor(settingsHandler)
    dotSettingsCmd?.tabCompleter = settingsHandler
    val dotConfigCmd = getCommand(".config")
    dotConfigCmd?.setExecutor(serverConfigHandler)
    dotConfigCmd?.tabCompleter = serverConfigHandler
    val dotCloudCmd = getCommand(".cloud")
    dotCloudCmd?.setExecutor(cloudHandler)
    dotCloudCmd?.tabCompleter = cloudHandler
    val dotBezierCmd = getCommand(".bez")
    dotBezierCmd?.setExecutor(bezierHandler)
    dotBezierCmd?.tabCompleter = bezierHandler
    server.pluginManager.registerEvents(selectionHandler, this)
    selectionHandler.startTracking()
    server.pluginManager.registerEvents(settingsHandler, this)
    val dotDebugStickCmd = getCommand(".ds")
    dotDebugStickCmd?.setExecutor(debugStickHandler)
    dotDebugStickCmd?.tabCompleter = debugStickHandler
    val dotBrushPresetCmd = getCommand(".brp")
    dotBrushPresetCmd?.setExecutor(brushPresetHandler)
    dotBrushPresetCmd?.tabCompleter = brushPresetHandler
    val dotSchematicCmd = getCommand(".sc")
    dotSchematicCmd?.setExecutor(schematicHandler)
    dotSchematicCmd?.tabCompleter = schematicHandler
    getCommand(".hud")?.setExecutor(hudHandler)
    getCommand(".hud")?.tabCompleter = hudHandler
    server.pluginManager.registerEvents(WorldEditHudListener(this), this)
    worldEditHud.start()

    logger.info("CitiesSkyMine enabled")
  }

  override fun onDisable() {
    debugStickMemoryStore?.save()
    if (::playerDataStore.isInitialized) {
      playerDataStore.saveAll()
    }
    if (::cloudHandler.isInitialized) {
      cloudHandler.cancelAll()
    }
    if (::worldEditHud.isInitialized) {
      worldEditHud.stop()
    }
    sessions.values.forEach { it.previewTask?.cancel() }
    intersectionSessions.values.forEach { it.previewTask?.cancel() }
    bezierSessions.values.forEach { it.previewTask?.cancel() }
    sessions.clear()
    intersectionSessions.clear()
    bezierSessions.clear()
  }

  private fun checkDependencies(): Boolean {
    val fawe = server.pluginManager.getPlugin("FastAsyncWorldEdit")
    if (fawe == null || !fawe.isEnabled) {
      logger.severe("FastAsyncWorldEdit が見つかりません!")
      return false
    }
    return true
  }

  // ──────────────────────────────────────────────────
  // Road セッション
  // ──────────────────────────────────────────────────

  fun getSession(player: Player): RoadSession =
      sessions.getOrPut(player.uniqueId) {
        RoadSession().also { loadRoadSettings(player, it.settings) }
      }

  fun updatePreview(player: Player) {
    val session = getSession(player)
    session.previewDirty = true
    if (session.previewTask != null) return
    if (session.waypoints.size < 2) return

    session.previewTask =
        server.scheduler.runTaskTimer(
            this,
            Runnable {
              if (!player.isOnline) {
                stopPreview(player)
                return@Runnable
              }
              val s = getSession(player)
              if (s.waypoints.size < 2) return@Runnable
              if (s.previewDirty) {
                s.cachedPath = RoadGeometry.computePath(s.waypoints, s.settings)
                s.previewDirty = false
              }
              if (s.cachedPath.isNotEmpty()) RoadPreview.showOnce(player, s.cachedPath, s.settings)
            },
            0L,
            10L,
        )
  }

  fun stopPreview(player: Player) {
    val session = sessions[player.uniqueId] ?: return
    session.previewTask?.cancel()
    session.previewTask = null
    session.cachedPath = emptyList()
  }

  // ──────────────────────────────────────────────────
  // Intersection セッション
  // ──────────────────────────────────────────────────

  fun getIntersectionSession(player: Player): IntersectionSession =
      intersectionSessions.getOrPut(player.uniqueId) {
        IntersectionSession().also { loadIntersectionSettings(player, it) }
      }

  /** 設定変更・中心設定後に呼び出す。dirty フラグを立ててプレビュータスクを起動する。 */
  fun updateIntersectionPreview(player: Player) {
    val session = getIntersectionSession(player)
    if (session.previewTask != null) return // 既存タスクが再描画する
    if (session.center == null) return

    val roadSettings = getSession(player).settings
    session.previewTask =
        server.scheduler.runTaskTimer(
            this,
            Runnable {
              if (!player.isOnline) {
                stopIntersectionPreview(player)
                return@Runnable
              }
              val s = getIntersectionSession(player)
              if (s.center == null) return@Runnable
              // プレビューはパーティクル輪郭線のみ（ブロック計算不要）
              IntersectionPreview.showOnce(player, s.center!!, s, roadSettings)
            },
            0L,
            10L,
        )
  }

  fun stopIntersectionPreview(player: Player) {
    val session = intersectionSessions[player.uniqueId] ?: return
    session.previewTask?.cancel()
    session.previewTask = null
  }

  // ──────────────────────────────────────────────────
  // Bezier セッション
  // ──────────────────────────────────────────────────

  fun getBezierSession(player: Player): BezierSession =
      bezierSessions.getOrPut(player.uniqueId) { BezierSession() }

  fun updateBezierPreview(player: Player) {
    val session = getBezierSession(player)
    if (session.previewTask != null) return
    if (session.controlPoints.size < 2) return

    session.previewTask =
        server.scheduler.runTaskTimer(
            this,
            Runnable {
              if (!player.isOnline) {
                stopBezierPreview(player)
                return@Runnable
              }
              val s = getBezierSession(player)
              if (s.controlPoints.size < 2) return@Runnable
              val points =
                  if (s.planeMode) {
                    val y = s.controlPoints.first().y
                    s.controlPoints.map { Location(it.world, it.x, y, it.z) }
                  } else {
                    s.controlPoints
                  }
              BezierPreview.showOnce(
                  player,
                  points.map { it.clone().add(0.0, 1.0, 0.0) },
                  s.segments,
              )
            },
            0L,
            10L,
        )
  }

  fun stopBezierPreview(player: Player) {
    val session = bezierSessions[player.uniqueId] ?: return
    session.previewTask?.cancel()
    session.previewTask = null
  }

  fun saveRoadSettings(player: Player, settings: RoadSettings) {
    playerDataStore.setMany(
        player,
        mapOf(
            "road.radius" to settings.radius,
            "road.transition" to settings.transitionLength,
            "road.lane" to settings.laneWidth,
            "road.centerline" to settings.centerLineWidth,
            "road.outerline" to settings.outerLineWidth,
            "road.sidewalk" to settings.sidewalkWidth,
            "road.roadmat" to settings.roadMaterial.name,
            "road.sidewalkmat" to settings.sidewalkMaterial.name,
            "road.linemat" to settings.lineMaterial.name,
            "road.debug-line-groups" to settings.debugLineGroups,
        ),
    )
  }

  fun saveIntersectionSettings(player: Player, session: IntersectionSession) {
    playerDataStore.setMany(
        player,
        mapOf(
            "intersection.arms" to session.arms,
            "intersection.arm-length" to session.armLength,
            "intersection.corner-radius" to session.cornerRadius,
            "intersection.rotation" to session.rotationDeg,
        ),
    )
  }

  private fun loadRoadSettings(player: Player, settings: RoadSettings) {
    val store = playerDataStore
    settings.radius = store.getDouble(player, "road.radius") ?: settings.radius
    settings.transitionLength =
        store.getDouble(player, "road.transition") ?: settings.transitionLength
    settings.laneWidth = store.getInt(player, "road.lane") ?: settings.laneWidth
    settings.centerLineWidth = store.getInt(player, "road.centerline") ?: settings.centerLineWidth
    settings.outerLineWidth = store.getInt(player, "road.outerline") ?: settings.outerLineWidth
    settings.sidewalkWidth = store.getInt(player, "road.sidewalk") ?: settings.sidewalkWidth
    settings.roadMaterial = materialFromPlayerData(player, "road.roadmat") ?: settings.roadMaterial
    settings.sidewalkMaterial =
        materialFromPlayerData(player, "road.sidewalkmat") ?: settings.sidewalkMaterial
    settings.lineMaterial = materialFromPlayerData(player, "road.linemat") ?: settings.lineMaterial
    settings.debugLineGroups =
        store.getBoolean(player, "road.debug-line-groups") ?: settings.debugLineGroups
  }

  private fun loadIntersectionSettings(player: Player, session: IntersectionSession) {
    val store = playerDataStore
    session.arms = store.getInt(player, "intersection.arms") ?: session.arms
    session.armLength = store.getInt(player, "intersection.arm-length") ?: session.armLength
    session.cornerRadius =
        store.getInt(player, "intersection.corner-radius") ?: session.cornerRadius
    session.rotationDeg = store.getDouble(player, "intersection.rotation") ?: session.rotationDeg
  }

  private fun materialFromPlayerData(player: Player, path: String): Material? =
      playerDataStore
          .getString(player, path)
          ?.let { Material.matchMaterial(it) }
          ?.takeIf { it.isBlock }
}
