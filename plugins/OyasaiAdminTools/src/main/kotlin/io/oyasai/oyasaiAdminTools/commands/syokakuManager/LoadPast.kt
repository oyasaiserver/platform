package io.oyasai.oyasaiAdminTools.commands.syokakuManager

import com.baakun.dynamicprofile.DynamicProfile.Companion.allUser
import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.rank.RankManager.getPreviousRank
import io.oyasai.oyasaiAdminTools.rank.RankManager.getRankByGroupName
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object LoadPast : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    // /syokakuManager loadpast
    sender.sendMessage("§e過去データの読み込みを開始します...")
    val api = LuckPermsProvider.get()
    val userManager = api.userManager
    //
    // api.actionLogger.log.get().getUserHistory(Bukkit.getOfflinePlayer("Nacukat").uniqueId).forEach {
    //            println("${it.timestamp.atZone(ZoneId.systemDefault())}: ${it.description}")
    //        }
    try {
      api.actionLogger.log.thenAcceptAsync { logs ->
        allUser.forEach { uuid ->
          val statsData = getStats(uuid)
          val log = logs.getUserHistory(uuid).toList().sortedBy { it.timestamp }
          Bukkit.getScheduler()
            .runTask(
              plugin,
              Runnable {
                log.forEach { action ->
                  val _args = action.description.split(" ")
                  if (_args.size < 3) return@forEach
                  // parent add ~~
                  if (_args[0] != "parent" || _args[1] != "add") return@forEach
                  val groupName = _args[2]
                  val time = DateTimeUtils.unixToJST(action.timestamp.toEpochMilli())
                  val proBy = action.source.uniqueId.toString()
                  val rank = getRankByGroupName(groupName)
                  var prevRankName = "NONE"

                  if (rank != null) {
                    val prevRank = getPreviousRank(rank)
                    if (prevRank != null) {
                      prevRankName = prevRank.groupName
                    }
                  }
                  val buildsBeforePromote =
                    Data.getSLDataAll().filter {
                      it.owner == uuid && it.time.isBefore(time.toLocalDateTime())
                    }
                  val lastBuild = buildsBeforePromote.maxByOrNull { it.time }
                  val buildCount = buildsBeforePromote.size

                  statsData.promotions.records.addFirst(
                    PromotionRecord(
                      type = PromotionType.PROMOTE,
                      newRank = groupName,
                      previousRank = prevRankName,
                      promotedBy = proBy,
                      isForced = false,
                      date = DateTimeUtils.formatToString(time),
                      note = "Auto recovered",
                      playedSec = 0L,
                      lastBuildID = lastBuild?.id ?: Integer.MIN_VALUE,
                      builds = buildCount,
                      lastLv = 0,
                      lastExp = 0,
                    )
                  )
                }
                JsonUtils.saveUserJson(uuid)
              },
            )
        }
      }
    } catch (e: Exception) {
      e.printStackTrace()
      sender.sendMessage("§cエラーが発生しました。")
    }

    return true
  }
}
