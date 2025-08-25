package com.baakun.dynamicprofile.exp

import com.baakun.dynamicprofile.DynamicProfile.Companion.allUser
import com.baakun.dynamicprofile.DynamicProfile.Companion.failedUser
import com.baakun.dynamicprofile.DynamicProfile.Companion.playTimes
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.plugin
import com.google.gson.GsonBuilder
import com.vexsoftware.votifier.model.VotifierEvent
import java.io.File
import java.io.FileWriter
import java.nio.charset.StandardCharsets
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scheduler.BukkitRunnable

object DailyEvent : Listener {
  private fun gson() =
    GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create()

  private fun userStatsFile(uuid: java.util.UUID) =
    File(plugin.dataFolder, "UserStatsJSON/$uuid.json")

  private fun <T> writeJsonToFile(file: File, obj: T, clazz: Class<T>? = null) {
    FileWriter(file, StandardCharsets.UTF_8).use { writer ->
      if (clazz != null) gson().toJson(obj, clazz, writer) else gson().toJson(obj, writer)
    }
  }

  @EventHandler
  fun join(e: PlayerJoinEvent) {
    val player = e.player
    if (failedUser.contains(player.uniqueId)) {
      object : BukkitRunnable() {
          override fun run() {
            Bukkit.getOnlinePlayers()
              .filter { it.isOp }
              .forEach {
                it.sendMessage(
                  "§c[DynamicProfile] プレイヤー ${player.name}(${player.uniqueId}) のデータ読み込みに失敗しています。管理者はUserStatsJSON/${player.uniqueId}.jsonを確認してください。"
                )
              }
            player.sendMessage("§cエラーが発生したため、あなたのDynamicProfileの情報が一時的に初期化されています。管理者に連絡してください。")
          }
        }
        .runTaskLater(plugin, 40L)
      return
    }
    if (!allUser.contains(player.uniqueId)) allUser.add(player.uniqueId)

    val userStats = getStats(player.uniqueId)
    val now = LocalDateTime.now()
    val otherDate =
      try {
        LocalDateTime.parse(userStats.lastLogin)
      } catch (_: Exception) {
        LocalDateTime.MIN
      }
    val daysDifference = ChronoUnit.DAYS.between(now, otherDate)
    if (daysDifference != 0L || userStats.join == 0) {
      userStats.lastLogin = now.toString()
      userStats.addCount(BehType.JOIN)
    }
    val br =
      object : BukkitRunnable() {
        override fun run() {
          getStats(player.uniqueId).addCount(BehType.PLAY_TIME)
        }
      }
    br.runTaskTimer(plugin, 60 * 20, 60 * 20)
    playTimes[player] = br
  }

  @EventHandler
  fun leave(e: PlayerQuitEvent) {
    val player = e.player
    val userStats = getStats(player.uniqueId)
    val file = userStatsFile(player.uniqueId)
    writeJsonToFile(file, userStats, Stats::class.java)
    playTimes.remove(player)?.cancel()
  }

  @EventHandler
  fun vote(e: VotifierEvent) {
    val ofp = Bukkit.getOfflinePlayer(e.vote.username)
    val file = userStatsFile(ofp.uniqueId)
    Bukkit.broadcast(Component.text("${e.vote.serviceName} 投票を検知: ${e.vote.username}"))
    val userStats = getStats(ofp.uniqueId)
    userStats.addCount(BehType.VOTE)
    writeJsonToFile(file, userStats)
  }
}
