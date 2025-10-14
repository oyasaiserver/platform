package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.commands.syokakuManager.LoadPast
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

object SyokakuManagerCommandExecutor : CommandExecutor, TabCompleter {
  private val subCommands = listOf("loadpast")

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
      "loadpast" -> LoadPast.onCommand(sender, command, label, args.drop(1).toTypedArray())
      else -> {
        sender.sendMessage("§c不明なサブコマンドです。")
        false
      }
    }
  }

  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): List<String?>? {
    return when {
      args.size == 1 -> subCommands.filter { it.startsWith(args[0], ignoreCase = true) }
      else -> emptyList()
    }
  }
}
