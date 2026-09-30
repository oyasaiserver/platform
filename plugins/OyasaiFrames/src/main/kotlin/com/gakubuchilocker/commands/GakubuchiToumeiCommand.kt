package com.gakubuchilocker.commands

import com.gakubuchilocker.GakubuchiLockerPlugin
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class GakubuchiToumeiCommand(
    private val plugin: GakubuchiLockerPlugin,
) : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§cこのコマンドはプレイヤーのみ使用できます。")
      return true
    }

    if (!sender.hasPermission("gakubuchilocker.use")) {
      sender.sendMessage("§c[Gakubuchi] §fこのコマンドを使用する権限がありません。")
      return true
    }

    val sub = args.getOrNull(0)?.lowercase()
    if (sub != "on" && sub != "off") {
      sender.sendMessage("§eUsage: /${command.name} <on|off>")
      return true
    }

    if (sub == "on") {
      plugin.toumeiPlayers.add(sender.uniqueId)
      sender.sendMessage("§a[Gakubuchi] §f額縁自動透明化モードを§aON§fにしました。額縁を設置すると自動で透明になります。")
      sender.sendMessage("§7/$label off §7で終了します。")
    } else {
      if (plugin.toumeiPlayers.remove(sender.uniqueId)) {
        sender.sendMessage("§e[Gakubuchi] §f額縁自動透明化モードを§cOFF§fにしました。")
      } else {
        sender.sendMessage("§c[Gakubuchi] §f額縁自動透明化モードはONになっていません。")
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
    if (args.size == 1) {
      return listOf("on", "off").filter { it.startsWith(args[0].lowercase()) }
    }
    return emptyList()
  }
}
