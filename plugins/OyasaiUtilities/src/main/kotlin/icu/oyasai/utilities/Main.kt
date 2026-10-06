package icu.oyasai.utilities

import icu.oyasai.utilities.adminbp.AdminBP
import icu.oyasai.utilities.backpack.BackpackFeature
import icu.oyasai.utilities.creative_management.CreativeManagement
import icu.oyasai.utilities.debugonbe.DebugOnBE
import icu.oyasai.utilities.elevator.ElevatorListener
import icu.oyasai.utilities.getuuid.GetUUIDCmd
import icu.oyasai.utilities.hats.Hats
import icu.oyasai.utilities.hologram.HologramFeature
import icu.oyasai.utilities.joincommands.JoinCommands
import icu.oyasai.utilities.notnbt.NotNBTEvent
import icu.oyasai.utilities.ore_reappears.OreReappears
import icu.oyasai.utilities.oresmelter.OreSmelter
import icu.oyasai.utilities.oresmelter.OreSmelterEvent
import icu.oyasai.utilities.pita.Pita
import icu.oyasai.utilities.playerstate.PlayerStateFeature
import icu.oyasai.utilities.redbull.RedBullCommand
import icu.oyasai.utilities.redbull.RedBullFeature
import icu.oyasai.utilities.sit.SitFeature
import icu.oyasai.utilities.skin.SkinFeature
import icu.oyasai.utilities.skriptport.CommandAliases
import icu.oyasai.utilities.skriptport.Guidance
import icu.oyasai.utilities.skriptport.NonOpUtilities
import icu.oyasai.utilities.skriptport.Scale
import icu.oyasai.utilities.spawn.SpawnFeature
import icu.oyasai.utilities.storage.UtilitiesDatabase
import icu.oyasai.utilities.teleport.TeleportFeature
import icu.oyasai.utilities.timerbar.TimerBarEvent
import icu.oyasai.utilities.timerbar.TimerCmd
import icu.oyasai.utilities.timerbar.TimerObj
import icu.oyasai.utilities.tpath.BackForwardCmd
import icu.oyasai.utilities.tpath.TeleportListener
import icu.oyasai.utilities.tpswitch.TpSwitchFeature
import icu.oyasai.utilities.veinminer.VeinminerConfig
import icu.oyasai.utilities.veinminer.VeinminerEvent
import icu.oyasai.utilities.workstation.WorkstationFeature
import java.io.File
import java.util.logging.Level
import org.bukkit.plugin.java.JavaPlugin

class Main : JavaPlugin() {
  private lateinit var backpackFeature: BackpackFeature
  private lateinit var skinFeature: SkinFeature
  lateinit var tpSwitchFeature: TpSwitchFeature
    private set

  var teleportFeature: TeleportFeature? = null
    private set

  private lateinit var sitFeature: SitFeature
  private var playerStateFeature: PlayerStateFeature? = null
  private var workstationFeature: WorkstationFeature? = null
  private lateinit var guidance: Guidance

  var database: UtilitiesDatabase? = null
    private set

  override fun onLoad() {}

  override fun onEnable() {
    try {
      database =
          UtilitiesDatabase(File(dataFolder, "oyasaiutilities.db")) {
            logger.log(Level.SEVERE, "Shared SQLite: write failed", it)
          }
    } catch (e: Exception) {
      logger.log(Level.SEVERE, "Shared SQLite: failed to open; dependent features disabled", e)
    }
    val workstations = WorkstationFeature(this)
    try {
      workstations.enable()
      workstationFeature = workstations
    } catch (e: Exception) {
      runCatching { workstations.disable() }.onFailure { e.addSuppressed(it) }
      logger.log(Level.SEVERE, "Workstation: failed to enable; continuing other features", e)
    }
    val playerState = PlayerStateFeature(this)
    try {
      playerState.enable()
      playerStateFeature = playerState
    } catch (e: Exception) {
      runCatching { playerState.disable() }.onFailure { e.addSuppressed(it) }
      logger.log(Level.SEVERE, "PlayerState: failed to enable; continuing other features", e)
    }
    guidance = Guidance(this)
    guidance.enable()
    NonOpUtilities(this).enable()
    Scale(this).enable()
    CommandAliases(this).enable()
    tpSwitchFeature = TpSwitchFeature(this)
    tpSwitchFeature.enable()
    val travel = TeleportFeature(this)
    try {
      travel.enable()
      teleportFeature = travel
    } catch (e: Exception) {
      runCatching { travel.disable() }.onFailure { e.addSuppressed(it) }
      logger.log(Level.SEVERE, "Teleport: failed to enable; continuing other features", e)
    }
    sitFeature = SitFeature(this)
    sitFeature.enable()
    skinFeature = SkinFeature(this)
    skinFeature.enable()
    backpackFeature = BackpackFeature(this)
    backpackFeature.enable()
    server.pluginManager.registerEvents(NotNBTEvent, this) // NotNBTのイベント登録
    server.pluginManager.registerEvents(OreSmelterEvent, this) // OreSmelterのイベント登録
    server.pluginManager.registerEvents(VeinminerEvent, this)
    server.pluginManager.registerEvents(ElevatorListener(this), this)
    server.pluginManager.registerEvents(TimerBarEvent, this) // TimerBar用のイベント登録
    server.pluginManager.registerEvents(TeleportListener, this) // TPathのイベント登録
    server.pluginManager.registerEvents(Pita, this) // Pitaのイベント
    server.pluginManager.registerEvents(RedBullFeature, this) // RedBullのイベント
    server.pluginManager.registerEvents(skinFeature, this)
    server.getPluginCommand("skin")?.setExecutor(skinFeature)
    server.getPluginCommand("skin")?.tabCompleter = skinFeature
    server.getPluginCommand("oresmelter")?.setExecutor(OreSmelter) // OreSmelterのコマンド
    server.getPluginCommand("uuid")?.setExecutor(GetUUIDCmd) // GetUUIDのコマンド
    server.getPluginCommand("timerbar")?.setExecutor(TimerCmd) // TimerBarのコマンド
    server.getPluginCommand("back")?.setExecutor(BackForwardCmd) // back コマンド
    server.getPluginCommand("forward")?.setExecutor(BackForwardCmd) // forward コマンド
    server.getPluginCommand("pita")?.setExecutor(Pita) // Pitaのコマンド
    listOf("redbull", "buyredbull", "buyredbullset").forEach { commandName ->
      server.getPluginCommand(commandName)?.setExecutor(RedBullCommand)
      server.getPluginCommand(commandName)?.tabCompleter = RedBullCommand
    }

    OreReappears.onEnable() // OreReappearsの有効化
    AdminBP.onEnable()
    Hats.onEnable()
    HologramFeature.onEnable()
    JoinCommands.onEnable()
    try {
      if (teleportFeature != null) SpawnFeature.onEnable()
      else logger.warning("Spawn: teleport storage is unavailable; /spawn disabled")
    } catch (e: Exception) {
      logger.log(Level.SEVERE, "Spawn: failed to enable; continuing other features", e)
    }
    Pita.onEnable() // Pitaの有効化
    OreSmelter.reloadConfig() // OreSmelterのコンフィグリロード
    VeinminerConfig.reloadConfig()
    CreativeManagement.onEnable()
    RedBullFeature.onEnable()
    DebugOnBE.onEnable(this)
  }

  override fun onDisable() {
    try {
      teleportFeature?.disable()
      playerStateFeature?.disable()
      workstationFeature?.disable()
      if (::guidance.isInitialized) guidance.disable()
      if (::tpSwitchFeature.isInitialized) tpSwitchFeature.disable()
      if (::sitFeature.isInitialized) sitFeature.disable()
      if (::skinFeature.isInitialized) skinFeature.disable()
      OreReappears.onDisable() // OreReappearsの無効化
      AdminBP.onDisable()
      Hats.onDisable()
      HologramFeature.onDisable()
      Pita.onDisable() // Pitaの無効化
      TimerObj.onDisable()
      CreativeManagement.onDisable()
      RedBullFeature.onDisable()
      DebugOnBE.onDisable()
      if (::backpackFeature.isInitialized) backpackFeature.disable()
    } finally {
      runCatching { database?.close() }
          .onFailure {
            logger.log(Level.SEVERE, "Shared SQLite: failed to finish writes or close", it)
          }
      database = null
    }
  }
}
