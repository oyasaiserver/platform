package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.gui.AllBuild
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLBuilds : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slbuild") return false
    if (sender !is Player) return false

    AllBuild.createGUI().show(sender)
    return true
  }
}
