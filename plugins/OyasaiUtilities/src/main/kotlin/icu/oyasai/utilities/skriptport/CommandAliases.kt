package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.Main
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class CommandAliases(private val plugin: Main) : CommandExecutor {
  fun enable() {
    listOf("c", "d", "l").forEach { requireNotNull(plugin.getCommand(it)).setExecutor(this) }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("このコマンドはプレイヤー専用です。")
      return true
    }
    if (args.isNotEmpty()) return false
    sender.performCommand(
        when (command.name) {
          "c" -> "oyasaiutilities:workbench"
          "d" -> "oyasaiutilities:disposal"
          else -> "list"
        }
    )
    return true
  }
}
