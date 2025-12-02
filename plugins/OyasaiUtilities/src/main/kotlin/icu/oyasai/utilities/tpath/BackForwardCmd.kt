package icu.oyasai.utilities.tpath

import icu.oyasai.utilities.OyasaiUtilities.color
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object BackForwardCmd : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("&cYou are not a Player")
      return true
    }
    val name = command.name
    when (name) {
      "back" -> {
        val loc = TeleportManager.getBack(sender)
        if (loc == null) {
          sender.sendMessage("&cこれ以前の履歴がありません".color())
          return true
        }
        TeleportManager.pushIgnore(sender)
        sender.teleport(loc)
        sender.sendMessage("&a前の地点にTP中…".color())
      }
      "forward" -> {
        val loc = TeleportManager.getForward(sender)
        if (loc == null) {
          sender.sendMessage("&cこれ以降の履歴がありません".color())
          return true
        }
        TeleportManager.pushIgnore(sender)
        sender.teleport(loc)
        sender.sendMessage("&a次の地点にTP中…".color())
      }
      else -> return false
    }
    return true
  }
}
