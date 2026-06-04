package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.commands.GrieferCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.KakutyoCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.PlayerManagerCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.SyokakuCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.SyokakuManagerCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.SurveyCommandExecutor
import io.oyasai.oyasaiAdminTools.announcements.AnnouncementListener
import io.oyasai.oyasaiAdminTools.announcements.AnnouncementManager
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
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
    this.getCommand("sv")?.setExecutor(SurveyCommandExecutor)
    this.getCommand("sv")?.tabCompleter = SurveyCommandExecutor
    this.getCommand("svo")?.setExecutor(SurveyCommandExecutor)
    this.getCommand("svo")?.tabCompleter = SurveyCommandExecutor

    Bukkit.getPluginManager().registerEvents(AnnouncementListener, this)
  }

  override fun onDisable() {
    // Plugin shutdown logic
    AnnouncementManager.stopAll()
    AnnouncementManager.save()
    JsonUtils.writeJsonFile("ranks.json", io.oyasai.oyasaiAdminTools.rank.RankManager.ranks)
  }
}
