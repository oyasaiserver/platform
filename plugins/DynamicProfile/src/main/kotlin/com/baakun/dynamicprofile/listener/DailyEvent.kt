package com.baakun.dynamicprofile.listener

import com.baakun.dynamicprofile.DynamicProfile.Companion.allUser
import com.baakun.dynamicprofile.DynamicProfile.Companion.failedUser
import com.baakun.dynamicprofile.DynamicProfile.Companion.playTimes
import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.plugin
import com.baakun.dynamicprofile.util.Tools.saveStats
import com.vexsoftware.votifier.model.VotifierEvent
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scheduler.BukkitRunnable

object DailyEvent : Listener {
  @EventHandler fun join(e: PlayerJoinEvent) = startSession(e.player)

  fun startSession(player: Player) {
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
    val modeConfig = plugin.config.getInt("RecommendBroadcastMode", 0)
    if (modeConfig == 0) {
      plugin.recommendBroadcaster
          ?.normalBuildingCache
          ?.addAll(
              getStats(player.uniqueId)
                  .recommends
                  .values
                  .filter { it != Integer.MIN_VALUE }
                  .filterIndexed { index, i -> index != 0 }
          )
    } else {
      plugin.recommendBroadcaster?.normalCache?.add(player.uniqueId)
    }
  }

  @EventHandler
  fun leave(e: PlayerQuitEvent) {
    val player = e.player
    saveStats(player.uniqueId)
    playTimes.remove(player)?.cancel()
  }

  @EventHandler
  fun vote(e: VotifierEvent) {
    val ofp = Bukkit.getOfflinePlayer(e.vote.username)
    val userStats = getStats(ofp.uniqueId)
    userStats.addCount(BehType.VOTE)
    saveStats(ofp.uniqueId)
  }
}
