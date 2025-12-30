package com.baakun.dynamicprofile.command

import com.github.srain3.sociallikes.datas.Data
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class RecommendTabCompleter : TabCompleter {
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String>? {
    if (command.name != "dpsuki") return null
    if (sender !is Player) return null
    return when (args.size) {
      1 -> listOf("add", "remove", "list").filter { it.startsWith(args[0]) }
      2 ->
          when (args[0]) {
            "add",
            "remove" -> (0..4).map { it.toString() }.filter { it.startsWith(args[1]) }
            else -> null
          }
      3 ->
          if (args[0] == "add") {
            Data.getSLDataAll().filter { it.owner == sender.uniqueId }.map { it.id.toString() }
          } else null
      else -> null
    }
  }
}
