package icu.oyasai.utilities

import icu.oyasai.utilities.adminbp.AdminBP
import icu.oyasai.utilities.creative_management.CreativeManagement
import icu.oyasai.utilities.getuuid.GetUUIDCmd
import icu.oyasai.utilities.menu_gui.MenuCommand
import icu.oyasai.utilities.notnbt.NotNBTEvent
import icu.oyasai.utilities.ore_reappears.OreReappears
import icu.oyasai.utilities.oresmelter.OreSmelter
import icu.oyasai.utilities.oresmelter.OreSmelterEvent
import icu.oyasai.utilities.tpath.BackForwardCmd
import icu.oyasai.utilities.tpath.TeleportListener
import icu.oyasai.utilities.timerbar.TimerBarEvent
import icu.oyasai.utilities.timerbar.TimerCmd
import icu.oyasai.utilities.timerbar.TimerObj
import org.bukkit.plugin.java.JavaPlugin

class Main : JavaPlugin() {
  override fun onLoad() {}

  override fun onEnable() {
    server.pluginManager.registerEvents(NotNBTEvent, this) // NotNBTのイベント登録
    server.pluginManager.registerEvents(OreSmelterEvent, this) // OreSmelterのイベント登録
    server.pluginManager.registerEvents(TimerBarEvent, this) // TimerBar用のイベント登録
    server.pluginManager.registerEvents(TeleportListener, this) // TPathのイベント登録

    server.getPluginCommand("oresmelter")?.setExecutor(OreSmelter) // OreSmelterのコマンド
    server.getPluginCommand("uuid")?.setExecutor(GetUUIDCmd) // GetUUIDのコマンド
    server.getPluginCommand("timerbar")?.setExecutor(TimerCmd) // TimerBarのコマンド
    server.getPluginCommand("menu")?.setExecutor(MenuCommand) // Menuのコマンド
    server.getPluginCommand("back")?.setExecutor(BackForwardCmd) // back コマンド
    server.getPluginCommand("forward")?.setExecutor(BackForwardCmd) // forward コマンド

    OreReappears.onEnable() // OreReappearsの有効化
    AdminBP.onEnable()
    OreSmelter.reloadConfig() // OreSmelterのコンフィグリロード
    CreativeManagement.onEnable()
  }

  override fun onDisable() {
    OreReappears.onDisable() // OreReappearsの無効化
    AdminBP.onDisable()
    TimerObj.onDisable()
  }
}
