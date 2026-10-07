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

  private val staffFeatures = mutableListOf<io.oyasai.oyasaiAdminTools.staff.StaffFeature>()
  private var playerHistory: io.oyasai.oyasaiAdminTools.playerhistory.PlayerHistoryFeature? = null
  var tpOffline: io.oyasai.oyasaiAdminTools.tpoffline.TpOfflineFeature? = null
    private set

  private fun enableStaffFeature(factory: () -> io.oyasai.oyasaiAdminTools.staff.StaffFeature) {
    try {
      val feature = factory()
      feature.enable()
      staffFeatures.add(feature)
      if (feature is io.oyasai.oyasaiAdminTools.tpoffline.TpOfflineFeature) tpOffline = feature
    } catch (failure: Exception) {
      logger.log(java.util.logging.Level.SEVERE, "Staff feature disabled", failure)
    }
  }

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

    bulletinAvailable = true
    worldborderAvailable = true

    if (bulletinAvailable) {
      AnnouncementManager.load()
      SurveyManager.load()
    }
    if (worldborderAvailable) WorldBorderManager.enable()

    this.getCommand("playermanager")?.setExecutor(PlayerManagerCommandExecutor)
    this.getCommand("playermanager")?.tabCompleter = PlayerManagerCommandExecutor
    this.getCommand("kakutyo")?.setExecutor(KakutyoCommandExecutor)
    this.getCommand("kakutyo")?.tabCompleter = KakutyoCommandExecutor
    this.getCommand("wborder")?.setExecutor(WorldBorderCommandExecutor)
    this.getCommand("wborder")?.tabCompleter = WorldBorderCommandExecutor

    this.getCommand("applylifeworldsettings")?.setExecutor(ApplyLifeWorldSettingsCommandExecutor)

    try {
      val history = io.oyasai.oyasaiAdminTools.playerhistory.PlayerHistoryFeature(this)
      history.enable()
      playerHistory = history
    } catch (failure: Exception) {
      logger.log(java.util.logging.Level.SEVERE, "Player history disabled", failure)
    }
    enableStaffFeature { io.oyasai.oyasaiAdminTools.invsee.InvseeFeature(this) }
    enableStaffFeature { io.oyasai.oyasaiAdminTools.vanish.VanishFeature(this) }
    enableStaffFeature { io.oyasai.oyasaiAdminTools.socialspy.SocialSpyFeature(this) }
    enableStaffFeature { io.oyasai.oyasaiAdminTools.sudo.SudoFeature(this) }
    playerHistory?.let { history ->
      enableStaffFeature { io.oyasai.oyasaiAdminTools.seen.SeenFeature(this, history) }
      enableStaffFeature { io.oyasai.oyasaiAdminTools.whois.WhoisFeature(this, history) }
      enableStaffFeature { io.oyasai.oyasaiAdminTools.tpoffline.TpOfflineFeature(this, history) }
    }

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
    staffFeatures.asReversed().forEach { feature ->
      try {
        feature.disable()
      } catch (failure: Exception) {
        logger.log(java.util.logging.Level.SEVERE, "${feature.name} shutdown failed", failure)
      }
    }
    staffFeatures.clear()
    tpOffline = null
    playerHistory?.disable()
    playerHistory = null
    // Plugin shutdown logic
    if (worldborderAvailable) WorldBorderManager.disable()
    if (bulletinAvailable) {
      AnnouncementManager.stopAll()
      SurveyManager.stopAll()
    }
    if (::db.isInitialized) db.close()
  }
}
