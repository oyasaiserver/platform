package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.gui.SLMenu
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLMenu : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "slmenu") return false
    if (sender !is Player) {
      return false
    }

    if (args.isEmpty()) {

      SLMenu.createGUI().show(sender)
      return true
    }
    return true
  }
}
