package io.oyasai.oyasaiAdminTools.commands.syokaku

import io.oyasai.oyasaiAdminTools.notifications.PromotionNotificationStorer
import io.oyasai.oyasaiAdminTools.notifications.PromotionNotifier
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

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
    val notification =
      PromotionNotificationStorer.getPendingNotification(player.uniqueId.toString())
    if (notification != null) {
      PromotionNotifier.notifyServer(notification)
      PromotionNotificationStorer.removePendingNotification(player.uniqueId.toString())
    } else {
      sender.sendMessage("§c${player.name}さんの確認待ち昇格通知は見つかりません。")
    }
    return true
  }
}
