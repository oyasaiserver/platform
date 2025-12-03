package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.discord.SendEmbedMessage
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

object GrieferCommandExecutor : CommandExecutor, TabCompleter {

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("§cサブコマンドを指定してください。")
      return false
    }
    when (command.name.lowercase()) {
      "ban" -> {
        if (args.size < 3) {
          sender.sendMessage("§cUsage: /ban <名前> <期間> <理由>")
          return false
        }
        if (Bukkit.dispatchCommand(sender, "tempban ${args.joinToString(" ")}")) {
          SendEmbedMessage.sendBanNotification(args[0], sender.name, args[1], args[2])
        }
        return true
      }
    }
    return false
  }

  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>,
  ): List<String> {
    return when (args.size) {
      1 ->
        Bukkit.getOnlinePlayers()
          .map { it.name }
          .filter { it.startsWith(args[0], ignoreCase = true) }
      2 -> listOf("1mo", "2w", "3d", "4h", "5m", "6s")
      3 -> listOf("あらし")
      else -> emptyList()
    }
  }
}
