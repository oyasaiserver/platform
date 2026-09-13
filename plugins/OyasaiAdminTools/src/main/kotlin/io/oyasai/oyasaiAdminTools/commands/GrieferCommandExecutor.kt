package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.punishment.DurationParser
import io.oyasai.oyasaiAdminTools.punishment.PunishmentService
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
        val duration = DurationParser.parse(args[1])
        if (duration == null) {
          sender.sendMessage("§c期間の形式が正しくありません。(例: 1mo, 2w, 3d, 4h, 5m, 6s, perm)")
          return false
        }
        val reason = args.drop(2).joinToString(" ")
        PunishmentService.ban(args[0], duration, reason, sender.name, announce = true)
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
      2 -> listOf("1mo", "2w", "3d", "4h", "5m", "6s", "perm")
      3 -> listOf("あらし")
      else -> emptyList()
    }
  }
}
