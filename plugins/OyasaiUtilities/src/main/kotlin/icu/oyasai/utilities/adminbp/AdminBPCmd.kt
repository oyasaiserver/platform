package icu.oyasai.utilities.adminbp

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object AdminBPCmd : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "adminbp") return false
    if (!sender.isOp) return false
    if (sender !is Player) return false

    AdminBPGui.openInventoryGUI(sender)
    return true
  }
}
