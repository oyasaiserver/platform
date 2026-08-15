package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.command.*
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PlaceHolder
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.discord.SLDiscord
import com.github.srain3.sociallikes.gui.FollowBuild
import com.github.srain3.sociallikes.gui.SocialLikesAnvilInput
import java.nio.file.FileVisitResult
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.SimpleFileVisitor
import java.nio.file.StandardCopyOption
import java.nio.file.attribute.BasicFileAttributes
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

class SocialLikes : JavaPlugin() {
  override fun onEnable() {
    backupPluginDataOnStartup()
    saveDefaultConfig()

    SLDatabase.init(this)

    server.pluginManager.registerEvents(Events, this)
    server.pluginManager.registerEvents(FollowBuild, this)
    server.pluginManager.registerEvents(SocialLikesAnvilInput, this)
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
    // Do not generate the diagnostic graph preview at startup. It runs aggregate SQLite queries
    // through submitBlocking and used to block the server thread a few seconds after enable.
  }

  override fun onDisable() {
    SLDiscord.disable()

    if (Bukkit.getPluginManager().getPlugin("PlaceholderAPI") != null) {
      PlaceHolder(this).unregister()
    }
    SLtp.userLastSLTPTimeSave()
    Events.offlineLikePointSave()
    SLData.cleanupLingeringDisplays()
    SLDatabase.close()
  }

  private fun backupPluginDataOnStartup() {
    if (!dataFolder.exists()) {
      return
    }

    val pluginsDir =
        dataFolder.parentFile?.toPath()
            ?: throw IllegalStateException("[SocialLikes3] Could not resolve plugins directory")
    val timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss"))
    val backupDir = pluginsDir.resolve("SocialLikes3-backups").resolve("startup-$timestamp")

    try {
      copyDirectory(dataFolder.toPath(), backupDir)
      logger.info("[SocialLikes3] Startup backup created: $backupDir")
    } catch (e: Exception) {
      logger.severe("[SocialLikes3] Startup backup failed: ${e.message}")
      throw IllegalStateException("SocialLikes3 startup backup failed", e)
    }
  }

  private fun copyDirectory(source: Path, target: Path) {
    Files.walkFileTree(
        source,
        object : SimpleFileVisitor<Path>() {
          override fun preVisitDirectory(dir: Path, attrs: BasicFileAttributes) =
              FileVisitResult.CONTINUE.also {
                Files.createDirectories(target.resolve(source.relativize(dir)))
              }

          override fun visitFile(file: Path, attrs: BasicFileAttributes) =
              FileVisitResult.CONTINUE.also {
                Files.copy(
                    file,
                    target.resolve(source.relativize(file)),
                    StandardCopyOption.COPY_ATTRIBUTES,
                )
              }
        },
    )
  }
}
