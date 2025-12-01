package io.oyasai.oyasaiAdminTools.commands.syokaku

import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotification
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotificationStorer
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotifier
import io.oyasai.oyasaiAdminTools.rank.RankManager.getPreviousRank
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.node.types.InheritanceNode
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object Demote : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    // /syokaku demote <player>
    if (args.size < 1) {
      sender.sendMessage("§cUsage: /syokaku demote <player>")
      return true
    }
    val senderID =
      if (sender is Player) {
        sender.uniqueId.toString()
      } else {
        sender.name
      }
    val playerName = args[0]
    val note = if (args.size > 1) args.slice(1 until args.size).joinToString(" ") else ""
    val player = Bukkit.getOfflinePlayer(playerName)
    val api = LuckPermsProvider.get()
    val userManager = api.userManager
    userManager.loadUser(player.uniqueId).thenAccept { user ->
      PermsUtils.getCurrentRank(player.uniqueId).thenAccept { currentRank ->
        Bukkit.getScheduler()
          .runTask(
            plugin,
            Runnable {
              if (currentRank != null) {
                val previousRank = getPreviousRank(currentRank)
                if (previousRank != null) {
                  val currentGroupNode = InheritanceNode.builder(currentRank.groupName).build()
                  val previousGroupNode = InheritanceNode.builder(previousRank.groupName).build()
                  user.data().remove(currentGroupNode)
                  user.data().add(previousGroupNode)
                  api.userManager.saveUser(user)
                  val statsData = getStats(player.uniqueId)
                  val temp = statsData.promotions
                  val record =
                    PromotionRecord(
                      type = PromotionType.DEMOTE,
                      newRank = previousRank.groupName,
                      previousRank = currentRank.groupName,
                      promotedBy = senderID,
                      isForced = false,
                      date = DateTimeUtils.formatToString(DateTimeUtils.getCurrentJST()),
                      note = note,
                      playedSec = player.getStatistic(Statistic.PLAY_ONE_MINUTE) / 20L,
                      lastBuildID =
                        Data.getSLDataAll()
                          .filter { it.owner == player.uniqueId }
                          .maxByOrNull { it.time }
                          ?.id ?: Integer.MIN_VALUE,
                      builds = Data.getSLDataAll().count { it.owner == player.uniqueId },
                      lastLv = Calculator.getLevel(player),
                      lastExp = statsData.exp,
                    )

                  statsData.promotions.records.add(record)
                  JsonUtils.saveUserJson(player.uniqueId)
                  val notification = PromotionNotification(
                    player.uniqueId,
                    player.name?: "Unknown",
                    previousRank.name,
                    sender.name,
                    record,
                    previousRank.special,
                  )
                  PromotionNotificationStorer.storePendingNotification(notification)
                  sender.sendMessage("§a${player.name}さんを§e${previousRank.name}§aに降格させました。")
                } else {
                  sender.sendMessage("§e${player.name}さんは既に最低ランクです。")
                }
              } else {
                sender.sendMessage("§c${player.name}さんのランクが見つかりません。")
              }
            },
          )
      }
    }
    return true
  }
}
