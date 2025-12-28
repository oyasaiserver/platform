package io.oyasai.oyasaiAdminTools.commands.playerManager

import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object TeleportOffline : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("This command is only for players.")
      return false
    }
    if (args.isEmpty()) {
      sender.sendMessage("Usage: /playermanager tpoffline <player>")
      return false
    }
    val targetPlayer = Bukkit.getOfflinePlayer(args[0])
    targetPlayer.teleportOffline(sender.location)
    sender.sendMessage("§e${targetPlayer.name} §aをあなたの位置にテレポートしました。")
    return true
  }
}
