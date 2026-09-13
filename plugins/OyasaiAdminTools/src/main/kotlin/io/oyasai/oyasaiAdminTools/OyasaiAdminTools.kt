package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyListener
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.commands.*
import io.oyasai.oyasaiAdminTools.punishment.PunishmentListener
import io.oyasai.oyasaiAdminTools.punishment.PunishmentService
import io.oyasai.oyasaiAdminTools.utils.BookInputHandler
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.plugin.java.JavaPlugin

class OyasaiAdminTools : JavaPlugin() {
  companion object {
    lateinit var plugin: OyasaiAdminTools
  }

  override fun onEnable() {
    plugin = this
    plugin.saveDefaultConfig()

    AnnouncementManager.load()
    SurveyManager.load()
    PunishmentService.init(this)

    claimPunishmentCommands()

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

    val punishmentExecutor = PunishmentCommandExecutor
    listOf("unban", "mute", "unmute", "warn", "warns", "history").forEach { name ->
      this.getCommand(name)?.setExecutor(punishmentExecutor)
      this.getCommand(name)?.tabCompleter = punishmentExecutor
    }

    val bulletinExecutor = io.oyasai.oyasaiAdminTools.bulletin.BulletinCommandExecutor
    this.getCommand("bulletin")?.setExecutor(bulletinExecutor)
    this.getCommand("bulletin")?.tabCompleter = bulletinExecutor
    this.getCommand("anke")?.setExecutor(bulletinExecutor)
    this.getCommand("anke")?.tabCompleter = bulletinExecutor

    Bukkit.getPluginManager().registerEvents(SurveyListener, this)
    Bukkit.getPluginManager().registerEvents(BookInputHandler, this)
    Bukkit.getPluginManager().registerEvents(PunishmentListener, this)

    Bukkit.getScheduler().runTask(this, Runnable { claimPunishmentCommands() })
  }

  override fun onDisable() {
    AnnouncementManager.stopAll()
    AnnouncementManager.save()
    SurveyManager.stopAll()
    SurveyManager.save()
    JsonUtils.writeJsonFile("ranks.json", io.oyasai.oyasaiAdminTools.rank.RankManager.ranks)
    PunishmentService.shutdown()
  }

  private fun claimPunishmentCommands() {
    val known = Bukkit.getCommandMap().knownCommands
    val names = listOf("ban", "unban", "mute", "unmute", "warn", "warns", "history")
    for (name in names) {
      val cmd: Command = getCommand(name) ?: continue
      val aliases = (cmd.aliases + name).distinct()
      for (alias in aliases) {
        known.remove(alias)
        known.remove("advancedban:$alias")
        known.remove("essentials:$alias")
        known.remove("essentialsx:$alias")
        known[alias] = cmd
      }
    }
  }
}
