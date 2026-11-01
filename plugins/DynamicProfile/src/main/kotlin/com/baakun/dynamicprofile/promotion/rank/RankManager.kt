package com.baakun.dynamicprofile.promotion.rank

import com.baakun.dynamicprofile.promotion.utils.DateTimeUtils
import com.baakun.dynamicprofile.promotion.utils.PermsUtils.getCurrentRank
import com.baakun.dynamicprofile.util.Tools.plugin
import com.baakun.dynamicprofile.util.Tools.readStats
import com.github.srain3.sociallikes.datas.Data
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.io.File
import java.time.temporal.ChronoUnit
import java.util.*
import java.util.concurrent.CompletableFuture
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.Statistic

object RankManager {
  val ranks: MutableList<Rank> by lazy {
    val file = File(plugin.dataFolder, "ranks.json")
    if (!file.exists() || file.length() == 0L) mutableListOf()
    else Gson().fromJson(file.readText(), object : TypeToken<MutableList<Rank>>() {}.type)
  }

  fun getRankByName(name: String): Rank? {
    return ranks.find { it.name.equals(name, ignoreCase = true) }
  }

  fun getRankByGroupName(groupName: String): Rank? {
    return ranks.find { it.groupName.equals(groupName, ignoreCase = true) }
  }

  fun getNextRank(currentRank: Rank): Rank? {
    return ranks.filter { it.grade > currentRank.grade }.minByOrNull { it.grade }
  }

  fun getPreviousRank(currentRank: Rank): Rank? {
    return ranks.filter { it.grade < currentRank.grade }.maxByOrNull { it.grade }
  }

  fun isCandidate(player: OfflinePlayer): CompletableFuture<Rank?> {
    val future = CompletableFuture<Rank?>()
    getCurrentRank(player.uniqueId).thenAccept { currentRank ->
      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                if (currentRank != null) {
                  val nextRank = getNextRank(currentRank)
                  if (nextRank != null) {
                    val statsData = readStats(player.uniqueId) // DynamicProfile依存
                    val tick = player.getStatistic(Statistic.PLAY_ONE_MINUTE)
                    val minute = (tick / 20) / 60
                    val hour = minute / 60
                    val joinDays = statsData.join
                    val buildCount =
                        Data.getSLDataAll().count { it.owner == player.uniqueId } // SL依存
                    val elapse =
                        ChronoUnit.DAYS.between(
                            DateTimeUtils.unixToJST(player.firstPlayed),
                            DateTimeUtils.getCurrentJST(),
                        )

                    if (
                        hour >= nextRank.minPlayTimeHours &&
                            joinDays >= nextRank.minJoinDays &&
                            elapse >= nextRank.minElapse &&
                            buildCount >= nextRank.minBuilds
                    ) {
                      future.complete(nextRank)
                      return@Runnable
                    }
                  }
                }
                future.complete(null)
              },
          )
    }
    return future
  }
}
