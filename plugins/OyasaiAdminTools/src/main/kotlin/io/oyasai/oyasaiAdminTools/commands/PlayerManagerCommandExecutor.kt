package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.commands.playerManager.*
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

object PlayerManagerCommandExecutor : CommandExecutor, TabCompleter {
  private val subCommands = listOf("tpoffline")

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
    return when (args[0].lowercase()) {
      "tpoffline" -> TeleportOffline.onCommand(sender, command, label, args.drop(1).toTypedArray())
      else -> {
        sender.sendMessage("§c不明なサブコマンドです。")
        false
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    return when {
      args.size == 1 -> subCommands.filter { it.startsWith(args[0], ignoreCase = true) }
      else -> emptyList()
    }
  }
}
