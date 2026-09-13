package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyListener
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.commands.*
import io.oyasai.oyasaiAdminTools.utils.BookInputHandler
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderListener
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderManager
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

class OyasaiAdminTools : JavaPlugin() {
  companion object {
    lateinit var plugin: OyasaiAdminTools
  }

  override fun onEnable() {
    // Plugin startup logic
    plugin = this
    plugin.saveDefaultConfig()

    AnnouncementManager.load()
    SurveyManager.load()
    WorldBorderManager.enable()

    val commandMap = Bukkit.getCommandMap()
    val knownCommands = commandMap.knownCommands
    knownCommands.remove("ban")
    knownCommands.remove("advancedban:ban")

    this.getCommand("syokaku")?.setExecutor(SyokakuCommandExecutor)
    this.getCommand("syokaku")?.tabCompleter = SyokakuCommandExecutor
    this.getCommand("syokakumanager")?.setExecutor(SyokakuManagerCommandExecutor)
    this.getCommand("syokakumanager")?.tabCompleter = SyokakuManagerCommandExecutor
    this.getCommand("playermanager")?.setExecutor(PlayerManagerCommandExecutor)
    this.getCommand("playermanager")?.tabCompleter = PlayerManagerCommandExecutor
    this.getCommand("ban")?.setExecutor(GrieferCommandExecutor)
    this.getCommand("ban")?.tabCompleter = GrieferCommandExecutor
    this.getCommand("kakutyo")?.setExecutor(KakutyoCommandExecutor)
    this.getCommand("kakutyo")?.tabCompleter = KakutyoCommandExecutor
    this.getCommand("wborder")?.setExecutor(WorldBorderCommandExecutor)
    this.getCommand("wborder")?.tabCompleter = WorldBorderCommandExecutor

    // Bulletin Commands
    val bulletinExecutor = io.oyasai.oyasaiAdminTools.bulletin.BulletinCommandExecutor
    this.getCommand("bulletin")?.setExecutor(bulletinExecutor)
    this.getCommand("bulletin")?.tabCompleter = bulletinExecutor
    this.getCommand("anke")?.setExecutor(bulletinExecutor)
    this.getCommand("anke")?.tabCompleter = bulletinExecutor

    Bukkit.getPluginManager().registerEvents(SurveyListener, this)
    Bukkit.getPluginManager().registerEvents(BookInputHandler, this)
    Bukkit.getPluginManager().registerEvents(WorldBorderListener, this)
  }

  override fun onDisable() {
    // Plugin shutdown logic
    WorldBorderManager.disable()
    AnnouncementManager.stopAll()
    AnnouncementManager.save()
    SurveyManager.stopAll()
    SurveyManager.save()
    JsonUtils.writeJsonFile("ranks.json", io.oyasai.oyasaiAdminTools.rank.RankManager.ranks)
  }
}
