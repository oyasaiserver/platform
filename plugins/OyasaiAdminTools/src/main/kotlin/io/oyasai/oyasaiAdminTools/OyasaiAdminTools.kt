package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyListener
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.commands.*
import io.oyasai.oyasaiAdminTools.storage.AdminDb
import io.oyasai.oyasaiAdminTools.utils.BookInputHandler
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderListener
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderManager
import java.io.File
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

class OyasaiAdminTools : JavaPlugin() {
  companion object {
    lateinit var plugin: OyasaiAdminTools
  }

  lateinit var db: AdminDb
    private set

  var bulletinAvailable = false
    private set

  var worldborderAvailable = false
    private set

  override fun onEnable() {
    // Plugin startup logic
    plugin = this
    plugin.saveDefaultConfig()
    db = AdminDb(File(dataFolder, "admintools.db"), logger)
    try {
      db.open()
    } catch (failure: Exception) {
      logger.severe("AdminTools SQLite unavailable: ${failure.message}")
      server.pluginManager.disablePlugin(this)
      return
    }

    bulletinAvailable =
        try {
          db.importBulletinIfNeeded(dataFolder)?.let { logger.info("Bulletin legacy import: $it") }
          true
        } catch (failure: Exception) {
          logger.severe("Bulletin disabled: legacy import failed: ${failure.message}")
          false
        }
    worldborderAvailable =
        try {
          val keys =
              listOf(
                  "message",
                  "round-border",
                  "whoosh-effect",
                  "portal-redirection",
                  "knock-back-dist",
                  "timer-delay-ticks",
                  "deny-enderpearl",
              )
          val settings = keys.associateWith { config.get("worldborder.$it") }
          db.importWorldborderIfNeeded(
                  dataFolder,
                  File(dataFolder.parentFile, "WorldBorder/config.yml"),
                  settings,
              )
              ?.let { logger.info("Worldborder legacy import: $it") }
          true
        } catch (failure: Exception) {
          logger.severe("Worldborder disabled: legacy import failed: ${failure.message}")
          false
        }

    if (bulletinAvailable) {
      AnnouncementManager.load()
      SurveyManager.load()
    }
    if (worldborderAvailable) WorldBorderManager.enable()

    this.getCommand("syokaku")?.setExecutor(SyokakuCommandExecutor)
    this.getCommand("syokaku")?.tabCompleter = SyokakuCommandExecutor
    this.getCommand("syokakumanager")?.setExecutor(SyokakuManagerCommandExecutor)
    this.getCommand("syokakumanager")?.tabCompleter = SyokakuManagerCommandExecutor
    this.getCommand("playermanager")?.setExecutor(PlayerManagerCommandExecutor)
    this.getCommand("playermanager")?.tabCompleter = PlayerManagerCommandExecutor
    this.getCommand("kakutyo")?.setExecutor(KakutyoCommandExecutor)
    this.getCommand("kakutyo")?.tabCompleter = KakutyoCommandExecutor
    this.getCommand("wborder")?.setExecutor(WorldBorderCommandExecutor)
    this.getCommand("wborder")?.tabCompleter = WorldBorderCommandExecutor

    this.getCommand("applylifeworldsettings")?.setExecutor(ApplyLifeWorldSettingsCommandExecutor)

    // Bulletin Commands
    val bulletinExecutor = io.oyasai.oyasaiAdminTools.bulletin.BulletinCommandExecutor
    this.getCommand("bulletin")?.setExecutor(bulletinExecutor)
    this.getCommand("bulletin")?.tabCompleter = bulletinExecutor
    this.getCommand("anke")?.setExecutor(bulletinExecutor)
    this.getCommand("anke")?.tabCompleter = bulletinExecutor

    if (bulletinAvailable) {
      Bukkit.getPluginManager().registerEvents(SurveyListener, this)
      Bukkit.getPluginManager().registerEvents(BookInputHandler, this)
    }
    if (worldborderAvailable) Bukkit.getPluginManager().registerEvents(WorldBorderListener, this)
  }

  override fun onDisable() {
    // Plugin shutdown logic
    if (worldborderAvailable) WorldBorderManager.disable()
    if (bulletinAvailable) {
      AnnouncementManager.stopAll()
      SurveyManager.stopAll()
    }
    if (::db.isInitialized) db.close()
  }
}
