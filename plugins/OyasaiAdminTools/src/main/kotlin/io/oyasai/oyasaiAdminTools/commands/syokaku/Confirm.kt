package io.oyasai.oyasaiAdminTools.commands.syokaku

import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotificationStorer
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotifier
import io.oyasai.oyasaiAdminTools.rank.RankManager.getNextRank
import io.oyasai.oyasaiAdminTools.rank.RankManager.isCandidate
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils.getCurrentRank
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import java.time.temporal.ChronoUnit

object Confirm : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    // /syokaku confirm <player>
    if (args.size < 1) {
      sender.sendMessage("§cUsage: /syokaku confirm <player>")
      return true
    }
    val playerName = args[0]
    val player = Bukkit.getOfflinePlayer(playerName)
    val notification = PromotionNotificationStorer.getPendingNotification(player.uniqueId.toString())
    if (notification != null) {
      PromotionNotifier.notifyAll(notification)
    }else {
      sender.sendMessage("§c${player.name}さんの確認待ち昇格通知は見つかりません。")
    }
    return true
  }
}
