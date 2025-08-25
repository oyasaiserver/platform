package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.command.DProfileCmd
import com.baakun.dynamicprofile.command.LeaderBoardCommand
import com.baakun.dynamicprofile.command.LeaderBoardCommandCompleter
import com.baakun.dynamicprofile.command.OperatorCommand
import com.baakun.dynamicprofile.command.OperatorCommandCompleter
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.exp.DailyEvent
import com.baakun.dynamicprofile.exp.MoveEvent
import com.baakun.dynamicprofile.exp.SLEvents
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.NumberBanner
import com.baakun.dynamicprofile.leaderBoard.LBStats
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.loadWeeklyLB
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.saveWeeklyLB
import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.model.GiftItem
import com.baakun.dynamicprofile.profile.playerTitle.Title
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.loadTitles
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.saveTitles
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.plugin
import com.google.gson.GsonBuilder
import java.io.File
import java.io.FileWriter
import java.nio.charset.StandardCharsets
import java.util.*
import net.luckperms.api.LuckPerms
import net.milkbowl.vault.permission.Permission
import org.apache.commons.lang3.tuple.MutablePair
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.entity.Player
import org.bukkit.plugin.RegisteredServiceProvider
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable

/** メインクラス */
class DynamicProfile : JavaPlugin() {

  companion object {
    var UUIDMap: MutableMap<UUID, LBStats> = Collections.synchronizedMap(mutableMapOf())
    val totalPlayTimes = MutablePair(0L, Collections.synchronizedList(mutableListOf<UUID>()))
    lateinit var allTitles: MutableMap<Int, Title>
    val allUser = Collections.synchronizedList(mutableListOf<UUID>())
    val allStats = Collections.synchronizedMap(mutableMapOf<UUID, Stats>())
    val failedUser = Collections.synchronizedList(mutableListOf<UUID>())
    val provider: RegisteredServiceProvider<LuckPerms>? =
      Bukkit.getServicesManager().getRegistration(LuckPerms::class.java)
    val playTimes = Collections.synchronizedMap(mutableMapOf<Player, BukkitRunnable>())
    var perms: Permission? = null

    private const val PLAYTIME_INTERVAL_TICKS = 60 * 20L
    private const val PLAYTIME_DELAY_TICKS = 60 * 20L

    private fun setupPermissions(): Boolean {
      val rsp = plugin.server.servicesManager.getRegistration(Permission::class.java)
      perms = rsp?.provider
      return perms != null
    }

    fun getPermissions(): Permission? {
      return perms
    }
  }

  private var recommendBroadcaster: RecommendBroadcaster? = null
  private var recommendBroadcasterTask: BukkitRunnable? = null

  fun restartRecommendBroadcaster(intervalTicks: Long) {
    recommendBroadcasterTask?.cancel()
    val broadcaster = RecommendBroadcaster(this)
    recommendBroadcaster = broadcaster
    recommendBroadcasterTask = broadcaster.startAndReturnTask(intervalTicks)
  }

  override fun onEnable() {
    totalPlayTimes.left = System.currentTimeMillis()
    totalPlayTimes.right.addAll(
      allUser.sortedByDescending {
        Bukkit.getOfflinePlayer(it).getStatistic(Statistic.PLAY_ONE_MINUTE)
      }
    )
    saveDefaultConfig()
    NumberBanner.createBanner()
    setupPermissions()

    if (perms == null) {
      logger.warning("LuckPerms is not found.")
    }
    if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")) {
      PlaceHolderExpansion(this).register()
    }
    Bukkit.getScheduler()
      .runTaskAsynchronously(
        this,
        Runnable {
          val gson =
            GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create()
          try {
            loadTitles()
            loadWeeklyLB()

            val userStatsDir = File(plugin.dataFolder, "/UserStatsJSON/")
            userStatsDir.mkdirs()
            val userFiles = userStatsDir.listFiles()?.toList().orEmpty()
            if (userFiles.isNotEmpty()) {
              logger.info("Loading player data")
              val backupDir = File(plugin.dataFolder, "auto_backup").apply { mkdirs() }
              userFiles.forEach { file ->
                val fileName = file.name
                val uuid =
                  fileName.substringBeforeLast('.', "").let {
                    runCatching { UUID.fromString(it) }.getOrNull()
                  }
                if (uuid == null) {
                  logger.warning("Invalid file name (not UUID): $fileName, skipping.")

                  return@forEach
                }
                allUser.add(uuid)
                try {
                  val stats: Stats =
                    gson.fromJson(file.readText(StandardCharsets.UTF_8), Stats::class.java)
                  allStats[uuid] = stats
                } catch (je: Exception) {
                  logger.warning("Failed to load stats for $uuid: ${je.message}")
                  failedUser.add(uuid)
                  try {
                    file.copyTo(File(backupDir, file.name), overwrite = true)
                    logger.info("Backed up $fileName to auto_backup/")
                  } catch (be: Exception) {
                    logger.warning("Failed to backup $fileName: ${be.message}")
                  }
                }
              }
              logger.info("Player data has been loaded")
            } else {
              logger.info("Player data not found")
            }
          } catch (e: Exception) {
            Bukkit.getPlayer("Nacukat")?.sendMessage("失敗")
            e.message?.let { Bukkit.getPlayer("Nacukat")?.sendMessage(it) }
            logger.warning("Error loading player data: ${e.message}")
            e.printStackTrace()
          }
          for (player in Bukkit.getOnlinePlayers()) {
            val file =
              File(plugin.dataFolder.absolutePath + "/UserStatsJSON/${player.uniqueId}.json")

            file.parentFile.mkdir()
            if (file.createNewFile()) {
              logger.info("created new file for ${player.name}, ${player.uniqueId}")
            }
            val writer = FileWriter(file, StandardCharsets.UTF_8)
            GsonBuilder()
              .excludeFieldsWithoutExposeAnnotation()
              .setPrettyPrinting()
              .create()
              .toJson(getStats(player.uniqueId), writer)

            writer.flush()
            writer.close()

            val br =
              object : BukkitRunnable() {
                override fun run() {
                  getStats(player.uniqueId).addCount(BehType.PLAY_TIME)
                }
              }
            br.runTaskTimer(plugin, PLAYTIME_DELAY_TICKS, PLAYTIME_INTERVAL_TICKS)
            playTimes[player] = br
          }
        },
      )

    server.getPluginCommand("dprofile")?.setExecutor(DProfileCmd)
    server.getPluginCommand("dpmanager")?.setExecutor(OperatorCommand)
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

    if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")) { //
      PlaceHolderExpansion(this).unregister() //
    }
    for (player in Bukkit.getOnlinePlayers()) {
      playTimes[player]?.cancel()
      playTimes.remove(player)
    }

    logger.info("Saving player data")
    saveTitles()
    saveWeeklyLB()
    for (player in Bukkit.getOnlinePlayers()) {
      try {
        val userstats = getStats(player.uniqueId)
        val file = File(plugin.dataFolder, "UserStatsJSON/${player.uniqueId}.json")
        file.parentFile.mkdirs()
        file.createNewFile()
        FileWriter(file, StandardCharsets.UTF_8).use { writer ->
          GsonBuilder()
            .excludeFieldsWithoutExposeAnnotation()
            .setPrettyPrinting()
            .create()
            .toJson(userstats, writer)
        }
      } catch (e: Exception) {
        server.logger.warning("Failed to save data for ${player.name}: ${e.message}")
        e.printStackTrace()
      }
    }
    logger.info("Player data has been saved")
    logger.info("GoodBye")
  }
}
