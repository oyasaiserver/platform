package io.oyasai.oyasaiAdminTools.rank

import com.baakun.dynamicprofile.DynamicProfile.Companion.allStats
import com.baakun.dynamicprofile.data.PromotionHistory
import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.JsonUtils.readJsonFile
import io.oyasai.oyasaiAdminTools.utils.PermsUtils.getCurrentRank
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.OfflinePlayer
import java.time.temporal.ChronoUnit
import java.util.*
import java.util.concurrent.CompletableFuture

object RankManager {
    val ranks: MutableList<Rank> by lazy {
        readJsonFile(
            path = "ranks.json",
            default = mutableListOf()
        )
    }

    fun addRank(rank: Rank) {
        ranks.add(rank)
        ranks.sortBy { it.grade }
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
            Bukkit.getScheduler().runTask(plugin, Runnable{
                if (currentRank != null) {
                    val nextRank = getNextRank(currentRank)
                    if (nextRank != null) {
                        val statsData = getStats(player.uniqueId) // DynamicProfile依存
                        val tick = player.getStatistic(Statistic.PLAY_ONE_MINUTE)
                        val minute = (tick / 20) / 60
                        val hour = minute / 60
                        val joinDays = statsData.join
                        val buildCount = Data.getSLDataAll().count { it.owner == player.uniqueId } // SL依存
                        val elapse = ChronoUnit.DAYS.between(DateTimeUtils.unixToJST(player.firstPlayed),DateTimeUtils.getCurrentJST())

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
            })

        }
        return future
    }

}