package io.oyasai.oyasaiAdminTools.commands.syokaku

import com.baakun.dynamicprofile.data.PromotionHistory
import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotification
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotifier
import io.oyasai.oyasaiAdminTools.rank.RankManager
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object Promote : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    // /syokaku promote <player>
    if (args.size < 1) {
      sender.sendMessage("§cUsage: /syokaku promote <player>")
      return true
    }
    val senderID: String =
        if (sender is Player) {
          sender.uniqueId.toString()
        } else {
          sender.name
        }
    val playerName = args[0]
    val note = if (args.size > 1) args.slice(1 until args.size).joinToString(" ") else ""
    val player = Bukkit.getOfflinePlayer(playerName)
    val api = LuckPermsProvider.get()
    var isForced = false
    val userManager = api.userManager
    PermsUtils.getCurrentRank(player.uniqueId).thenAcceptAsync { currentRank ->
      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                if (currentRank != null) {
                  val nextRank = RankManager.getNextRank(currentRank)
                  if (nextRank != null) {
                    RankManager.isCandidate(player).thenAcceptAsync { isCandidateRank ->
                      Bukkit.getScheduler()
                          .runTask(
                              plugin,
                              Runnable {
                                val isCandidate = isCandidateRank != null
                                if (!isCandidate) {
                                  if (!note.startsWith("GOOD")) {
                                    sender.sendMessage("§c！！昇格条件を満たしていません！！")
                                    sender.sendMessage("§c特別に昇格させる場合は、noteの先頭に 'GOOD' を付けてください。")
                                    sender.sendMessage("§c例：/syokaku promote ${player.name} GOOD:)")
                                    return@Runnable
                                  } else {
                                    isForced = true
                                  }
                                }
                                userManager.loadUser(player.uniqueId).thenAccept { user ->
                                  Bukkit.getScheduler()
                                      .runTask(
                                          plugin,
                                          Runnable {
                                            val nextGroupNode =
                                                PermsUtils.getGroupNode(nextRank.groupName)
                                            user.data().add(nextGroupNode)
                                            api.userManager.saveUser(user)
                                            val statsData = getStats(player.uniqueId)

                                            val temp = PromotionHistory()

                                            val plugin =
                                                Bukkit.getPluginManager()
                                                    .getPlugin("DynamicProfile")
                                            plugin?.logger?.info(temp.records.size.toString())
                                            temp.records.addAll(statsData.promotions.records)
                                            val record =
                                                PromotionRecord(
                                                    type = PromotionType.PROMOTE,
                                                    newRank = nextRank.groupName,
                                                    previousRank = currentRank.groupName,
                                                    promotedBy = senderID,
                                                    isForced = isForced,
                                                    date =
                                                        DateTimeUtils.formatToString(
                                                            DateTimeUtils.getCurrentJST()),
                                                    note = note,
                                                    playedSec =
                                                        player.getStatistic(
                                                            Statistic.PLAY_ONE_MINUTE) / 20L,
                                                    lastBuildID =
                                                        Data.getSLDataAll()
                                                            .filter { it.owner == player.uniqueId }
                                                            .maxByOrNull { it.time }
                                                            ?.id ?: Integer.MIN_VALUE,
                                                    builds =
                                                        Data.getSLDataAll().count {
                                                          it.owner == player.uniqueId
                                                        },
                                                    lastLv = Calculator.getLevel(player),
                                                    lastExp = statsData.exp,
                                                )
                                            temp.records.add(record)
                                            if (plugin != null && plugin.isEnabled) {
                                              plugin.logger.info(temp.records.size.toString())
                                              temp.records.forEach { plugin.logger.info(it.date) }
                                              statsData.promotions = temp
                                              statsData.promotions.records.forEach {
                                                plugin.logger.info(it.date)
                                              }
                                              statsData.move += 100
                                            }
                                            JsonUtils.saveUserJson(player.uniqueId)
                                            val notification =
                                                PromotionNotification(
                                                    player.uniqueId,
                                                    player.name ?: "Unknown",
                                                    nextRank.name,
                                                    sender.name,
                                                    record,
                                                    nextRank.special,
                                                )
                                            PromotionNotifier.notifyAll(notification)
                                            sender.sendMessage(
                                                "§a${player.name}さんを§e${nextRank.name}§aに§6「↑昇格↑」§aさせました。")
                                          },
                                      )
                                }
                              },
                          )
                    }
                  } else {
                    sender.sendMessage("§e${player.name}さんは既に最高ランクです。")
                  }
                } else {
                  sender.sendMessage("§c${player.name}さんの現在のランクは特定できませんでした。")
                }
              },
          )
    }

    return true
  }
}
