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
import icu.oyasai.utilities.redbull.RedBullCommand
import icu.oyasai.utilities.redbull.RedBullFeature
import icu.oyasai.utilities.sit.SitFeature
import icu.oyasai.utilities.skin.SkinFeature
import icu.oyasai.utilities.spawn.SpawnFeature
import icu.oyasai.utilities.timerbar.TimerBarEvent
import icu.oyasai.utilities.timerbar.TimerCmd
import icu.oyasai.utilities.timerbar.TimerObj
import icu.oyasai.utilities.tpath.BackForwardCmd
import icu.oyasai.utilities.tpath.TeleportListener
import icu.oyasai.utilities.tpswitch.TpSwitchFeature
import icu.oyasai.utilities.veinminer.VeinminerConfig
import icu.oyasai.utilities.veinminer.VeinminerEvent
import org.bukkit.plugin.java.JavaPlugin

class Main : JavaPlugin() {
  private lateinit var backpackFeature: BackpackFeature
  private lateinit var skinFeature: SkinFeature
  private lateinit var tpSwitchFeature: TpSwitchFeature
  private lateinit var sitFeature: SitFeature

  override fun onLoad() {}

  override fun onEnable() {
    tpSwitchFeature = TpSwitchFeature(this)
    tpSwitchFeature.enable()
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
    // Essentials が無いと SpawnFeature のクラス読み込み自体が失敗するので、先に確かめる
    if (server.pluginManager.isPluginEnabled("Essentials")) SpawnFeature.onEnable()
    else logger.warning("Spawn: Essentials is not enabled; /spawn disabled")
    Pita.onEnable() // Pitaの有効化
    OreSmelter.reloadConfig() // OreSmelterのコンフィグリロード
    VeinminerConfig.reloadConfig()
    CreativeManagement.onEnable()
    RedBullFeature.onEnable()
    DebugOnBE.onEnable(this)
  }

  override fun onDisable() {
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
  }
}
