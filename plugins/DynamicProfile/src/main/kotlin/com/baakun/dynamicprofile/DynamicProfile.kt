package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.command.DProfileCmd
import com.baakun.dynamicprofile.command.LeaderBoardCommand
import com.baakun.dynamicprofile.command.LeaderBoardCommandCompleter
import com.baakun.dynamicprofile.command.OperatorCommand
import com.baakun.dynamicprofile.command.OperatorCommandCompleter
import com.baakun.dynamicprofile.command.RecommendCommand
import com.baakun.dynamicprofile.command.RecommendTabCompleter
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.NumberBanner
import com.baakun.dynamicprofile.leaderBoard.LBStats
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.loadWeeklyLB
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.saveWeeklyLB
import com.baakun.dynamicprofile.listener.DailyEvent
import com.baakun.dynamicprofile.listener.MoveEvent
import com.baakun.dynamicprofile.listener.SLEvents
import com.baakun.dynamicprofile.model.GiftItem
import com.baakun.dynamicprofile.profile.playerTitle.Title
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.loadTitles
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.saveTitles
import com.baakun.dynamicprofile.promotion.PromotionMigration
import com.baakun.dynamicprofile.promotion.commands.SyokakuCommandExecutor
import com.baakun.dynamicprofile.promotion.commands.SyokakuManagerCommandExecutor
import com.baakun.dynamicprofile.storage.ProfileDatabase
import com.baakun.dynamicprofile.util.Tools.plugin
import java.io.File
import java.util.*
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import net.milkbowl.vault.permission.Permission
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable

/** メインクラス */
class DynamicProfile : JavaPlugin() {

  companion object {
    var UUIDMap: MutableMap<UUID, LBStats> = Collections.synchronizedMap(mutableMapOf())
    var allTitles: MutableMap<Int, Title> = mutableMapOf()
    val allUser = Collections.synchronizedList(mutableListOf<UUID>())
    val allStats = Collections.synchronizedMap(mutableMapOf<UUID, Stats>())
    val failedUser = Collections.synchronizedList(mutableListOf<UUID>())
    val playTimes = Collections.synchronizedMap(mutableMapOf<Player, BukkitRunnable>())
    var perms: Permission? = null

    private fun setupPermissions(): Boolean {
      val rsp = plugin.server.servicesManager.getRegistration(Permission::class.java)
      perms = rsp?.provider
      return perms != null
    }
  }

  @Volatile
  var statsReady = false
    private set

  @Volatile private var stopping = false
  @Volatile private var database: ProfileDatabase? = null
  private val loader =
      Executors.newSingleThreadExecutor { task -> Thread(task, "DynamicProfile-loader") }

  /** Snapshot on the caller thread; all SQLite writes run on the serialized writer. */
  fun saveStats(uuid: UUID) {
    check(statsReady) { "Profile data has not finished loading" }
    checkNotNull(database).save(uuid, com.baakun.dynamicprofile.util.Tools.readStats(uuid))
  }

  var recommendBroadcaster: RecommendBroadcaster? = null
  private var recommendBroadcasterTask: BukkitRunnable? = null

  fun restartRecommendBroadcaster(intervalTicks: Long) {
    recommendBroadcasterTask?.cancel()
    val broadcaster = RecommendBroadcaster(this)
    recommendBroadcaster = broadcaster
    recommendBroadcasterTask = broadcaster.startAndReturnTask(intervalTicks)
  }

  override fun onEnable() {
    saveDefaultConfig()
    PromotionMigration.copyLegacyFiles(dataFolder)
    reloadConfig()
    NumberBanner.createBanner()
    setupPermissions()

    if (perms == null) {
      logger.warning("LuckPerms is not found.")
    }
    loader.submit {
      try {
        val db =
            ProfileDatabase(File(dataFolder, "dynamicprofile.db")) { failure ->
              logger.severe("Failed to save profile data: ${failure.message}")
            }
        database = db
        val imported =
            db.importLegacy(File(dataFolder, "UserStatsJSON")) { filename ->
              logger.warning("Failed to import JSON: $filename")
            }
        if (imported.imported) {
          logger.info(
              "Imported ${imported.loaded} player JSON files; ${imported.failedFiles.size} failed. Original JSON files retained."
          )
        } else {
          logger.info("Legacy JSON import already completed; loading SQLite.")
        }
        val loaded = db.loadAll()
        val failed = db.failedUsers()
        loadTitles()
        loadWeeklyLB()
        if (!stopping) {
          Bukkit.getScheduler()
              .runTask(
                  this,
                  Runnable {
                    if (!stopping) {
                      allStats.clear()
                      allStats.putAll(loaded)
                      allUser.clear()
                      allUser.addAll((loaded.keys + failed).distinct())
                      failedUser.clear()
                      failedUser.addAll(failed)
                      statsReady = true
                      startFeatures()
                      logger.info("Loaded ${loaded.size} player profiles from SQLite")
                    }
                  },
              )
        }
      } catch (failure: Exception) {
        logger.log(
            java.util.logging.Level.SEVERE,
            "Failed to initialize profile database",
            failure,
        )
        if (!stopping)
            Bukkit.getScheduler()
                .runTask(this, Runnable { server.pluginManager.disablePlugin(this) })
      }
    }
  }

  private fun startFeatures() {
    for (player in Bukkit.getOnlinePlayers()) {
      DailyEvent.startSession(player)
      saveStats(player.uniqueId)
    }

    getCommand("syokaku")?.setExecutor(SyokakuCommandExecutor)
    getCommand("syokaku")?.tabCompleter = SyokakuCommandExecutor
    getCommand("syokakumanager")?.setExecutor(SyokakuManagerCommandExecutor)
    getCommand("syokakumanager")?.tabCompleter = SyokakuManagerCommandExecutor

    server.getPluginCommand("dprofile")?.setExecutor(DProfileCmd)
    server.getPluginCommand("dpmanager")?.setExecutor(OperatorCommand)
    server.getPluginCommand("dpsuki")?.setExecutor(RecommendCommand)
    server.getPluginCommand("dpsuki")?.setTabCompleter(RecommendTabCompleter())

    server.getPluginCommand("dpmanager")?.setTabCompleter(OperatorCommandCompleter)
    server.getPluginCommand("dpleaderboard")?.setExecutor(LeaderBoardCommand)
    server.getPluginCommand("dpweeklyleaderboard")?.setExecutor(LeaderBoardCommand)
    server.getPluginCommand("dpleaderboard")?.setTabCompleter(LeaderBoardCommandCompleter)
    server.getPluginCommand("dpweeklyleaderboard")?.setTabCompleter(LeaderBoardCommandCompleter)

    server.pluginManager.registerEvents(MoveEvent, this)
    server.pluginManager.registerEvents(GuiInventory, this)
    server.pluginManager.registerEvents(DailyEvent, this)
    server.pluginManager.registerEvents(GiftItem, this)
    server.pluginManager.registerEvents(SLEvents, this)
    server.pluginManager.registerEvents(
        com.baakun.dynamicprofile.listener.BookIntroListener(),
        this,
    )

    val intervalMinutes = config.getInt("RecommendBroadcastIntervalSeconds", 600)
    val intervalTicks = (intervalMinutes.coerceAtLeast(1)) * 20L
    restartRecommendBroadcaster(intervalTicks)
  }

  override fun onDisable() {

    for (player in Bukkit.getOnlinePlayers()) {
      playTimes[player]?.cancel()
      playTimes.remove(player)
    }

    stopping = true
    recommendBroadcasterTask?.cancel()
    loader.shutdown()
    var interrupted = false
    while (!loader.isTerminated) {
      try {
        loader.awaitTermination(1, TimeUnit.SECONDS)
      } catch (_: InterruptedException) {
        interrupted = true
      }
    }

    logger.info("Saving player data")
    try {
      if (statsReady) {
        synchronized(allStats) { allStats.keys.toList() }
            .forEach { uuid ->
              try {
                saveStats(uuid)
              } catch (failure: Exception) {
                logger.log(
                    java.util.logging.Level.SEVERE,
                    "Failed to queue profile save for $uuid",
                    failure,
                )
              }
            }
        saveTitles()
        saveWeeklyLB()
      }
    } finally {
      try {
        database?.close()
      } finally {
        database = null
        statsReady = false
        if (interrupted) Thread.currentThread().interrupt()
      }
    }
    logger.info("Player data has been saved")
    logger.info("GoodBye")
  }
}
