package icu.oyasai.utilities.tpath

import icu.oyasai.utilities.tpath.TPath.TPData
import icu.oyasai.utilities.tpath.TPath.teleportPlayer
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object TPathCmd : CommandExecutor {

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (sender !is Player) return false
    val tpStatus: TPStatus = TPData.computeIfAbsent(sender.uniqueId) { k -> TPStatus() }
    return when (command.name) {
      "back" -> {
        if (tpStatus.index <= 0) {
          sender.sendMessage("これ以前のTPはありません")
          return true
        }
        teleportPlayer(sender, tpStatus, tpStatus.index - 1)
        true
      }

      "forward" -> {
        if (tpStatus.index + 1 >= tpStatus.locations.size) {
          sender.sendMessage("これ以降のTPはありません")
          return true
        }
        teleportPlayer(sender, tpStatus, tpStatus.index + 1)
        true
      }

      "tpdata" -> {
        TPData.forEach { uuid, status ->
          sender.sendMessage("UUID: $uuid")
          status.locations.forEach { loc ->
            sender.sendMessage("${loc.getX()}, ${loc.getY()}, ${loc.getZ()}")
          }
        }
        true
      }

      else -> false
    }
  }
}
