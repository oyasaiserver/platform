package io.oyasai.oyasaiAdminTools.commands.syokaku

import io.oyasai.oyasaiAdminTools.rank.RankManager
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object SeeRequirements : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    // /syokaku seerequirements <rank>
    if (args.size < 1) {
      sender.sendMessage("§cUsage: /syokaku seerequirements <rank>")
      return true
    }
    val rankName = args[0]
    val rank = RankManager.getRankByName(rankName)
    if (rank != null) {
      sender.sendMessage("§e${rank.name}§aへの昇格条件:")
      sender.sendMessage(" - 最低プレイ時間: ${rank.minPlayTimeHours}時間")
      sender.sendMessage(" - 最低ログイン日数: ${rank.minJoinDays}日")
      sender.sendMessage(" - 最低経過日数: ${rank.minElapse}日")
      sender.sendMessage(" - 最低建築数: ${rank.minBuilds}個")
    } else {
      sender.sendMessage("§cランク§e${rankName}§cが見つかりません。")
    }
    return true
  }
}
