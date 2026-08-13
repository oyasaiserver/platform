package com.github.srain3.sociallikes

import com.fren_gor.ultimateAdvancementAPI.AdvancementMain
import com.github.srain3.sociallikes.command.*
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PlaceHolder
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.discord.SLDiscord
import com.github.srain3.sociallikes.gui.FollowBuild
import java.io.File
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

class SocialLikes : JavaPlugin() {
  private val advMain by lazy { AdvancementMain(this) }

  override fun onLoad() {
    advMain.load()
  }

  override fun onEnable() {
    advMain.enableSQLite(File(this.dataFolder, "Advancement.db"))
    SLDatabase.init(this)

    server.pluginManager.registerEvents(Events, this)
    server.pluginManager.registerEvents(FollowBuild, this)
    server.pluginManager.registerEvents(SLDataFont, this)
    server.pluginManager.registerEvents(SLData, this)
    server.pluginManager.registerEvents(SLResourcePack, this)
    SLData.cleanupLingeringDisplays()

    server.getPluginCommand("sltp")?.setExecutor(SLtp)
    server.getPluginCommand("slbuild")?.setExecutor(SLBuilds)
    server.getPluginCommand("sluser")?.setExecutor(SLUser)
    server.getPluginCommand("slupdate")?.setExecutor(SLUpdate)
    server.getPluginCommand("slsignget")?.setExecutor(SLSignGet)
    server.getPluginCommand("slmenu")?.setExecutor(SLMenu)
    server.getPluginCommand("slnear")?.setExecutor(SLNear)
    server.getPluginCommand("slsignbreak")?.setExecutor(SLTPSignBreak)
    server.getPluginCommand("vacanttp")?.setExecutor(VacantTeleport)
    server.getPluginCommand("vacanttp")?.tabCompleter = VacantTeleportTAB
    server.getPluginCommand("slrankup")?.setExecutor(SLRankUp)
    server.getPluginCommand("slrankup")?.tabCompleter = SLRankUpTAB
    server.getPluginCommand("sldatafont")?.setExecutor(SLDataFont)
    server.getPluginCommand("sldata")?.setExecutor(SLData)
    server.getPluginCommand("sldata")?.tabCompleter = SLData
    server.getPluginCommand("sldatapack")?.setExecutor(SLDataPack)

    if (Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
      PlaceHolder(this).register()
    }

    Data.loadFileToDataCache()
    SLtp.userLastSLTPTimeLoad()
    Events.offlineLikePointLoad()
    FollowBuild.reloadJoinFix(server.onlinePlayers)

    PublicityHistory.loadYAML()

    SLDiscord.enable()
    server.scheduler.runTaskLater(this, Runnable { SLData.logWeeklyDialogGraphPreview() }, 20L * 4L)
  }

  override fun onDisable() {
    advMain.disable()
    SLDiscord.disable()

    if (Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
      PlaceHolder(this).unregister()
    }
    SLtp.userLastSLTPTimeSave()
    Events.offlineLikePointSave()
    SLData.cleanupLingeringDisplays()
    SLDatabase.close()
  }
}
