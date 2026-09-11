package io.oyasai.worldgen.command

import io.oyasai.worldgen.world.WorldLifecycle
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class OwgCommand(private val lifecycle: WorldLifecycle) : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    when (args.firstOrNull()?.lowercase() ?: "status") {
      "status" -> lifecycle.statusLines().forEach(sender::sendMessage)
      "tp" -> {
        if (sender !is Player) {
          sender.sendMessage("[OWG] tp はプレイヤーから実行してください")
          return true
        }
        lifecycle.teleport(sender, args.getOrNull(1))
      }
      "load" -> {
        if (!requireAdmin(sender) || args.size != 2) {
          if (args.size != 2) sender.sendMessage("Usage: /owg load <world>")
          return true
        }
        lifecycle.loadWorld(args[1], sender)
      }
      "unload" -> {
        if (!requireAdmin(sender) || args.size != 2) {
          if (args.size != 2) sender.sendMessage("Usage: /owg unload <world>")
          return true
        }
        lifecycle.unloadWorld(args[1], sender)
      }
      "check" -> {
        if (!requireAdmin(sender)) return true
        lifecycle.runCheck(sender)
      }
      else ->
          sender.sendMessage("Usage: /owg <status|tp [world]|load <world>|unload <world>|check>")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    val candidates =
        when (args.size) {
          1 -> listOf("status", "tp", "load", "unload", "check")
          2 ->
              if (
                  args[0].equals("tp", true) ||
                      args[0].equals("load", true) ||
                      args[0].equals("unload", true)
              )
                  lifecycle.configSnapshot().worlds.keys.toList()
              else emptyList()
          else -> emptyList()
        }
    val prefix = args.lastOrNull()?.lowercase().orEmpty()
    return candidates.filter { it.lowercase().startsWith(prefix) }
  }

  private fun requireAdmin(sender: CommandSender): Boolean {
    if (sender.hasPermission("oyasai.owg.admin")) return true
    sender.sendMessage("[OWG] 権限がありません")
    return false
  }
}
