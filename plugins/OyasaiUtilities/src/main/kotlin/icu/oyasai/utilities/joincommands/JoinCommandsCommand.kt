package icu.oyasai.utilities.joincommands

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

object JoinCommandsCommand : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (args.isEmpty() || !args[0].equals("reload", ignoreCase = true)) {
      return false
    }
    JoinCommands.reloadConfig(sender)
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): List<String> {
    if (args.size != 1) return emptyList()
    return listOf("reload").filter { it.startsWith(args[0], ignoreCase = true) }
  }
}
