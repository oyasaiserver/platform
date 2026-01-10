package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.discord.SendEmbedMessage
import org.bukkit.Bukkit
import org.bukkit.Sound
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
          SendEmbedMessage.sendBanNotification(args[0], sender.name, args[2], args[1])
          Bukkit.getOnlinePlayers().forEach {
            it.playSound(it.eyeLocation, Sound.ITEM_MACE_SMASH_GROUND_HEAVY, 0.5f, 2.0f)
            it.sendMessage("§4§l[ＢＡＮ] §f§l${args[0]} §fが§c§lBAN§fされました。")
          }
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
