package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.gui.UserBuild
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLUser : CommandExecutor {
  @Suppress("DEPRECATION")
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "sluser") return false
    if (args.isEmpty()) return false
    if (sender !is Player) return false

    val offPlayer = Bukkit.getOfflinePlayer(args[0])

    UserBuild.createGUI(offPlayer, sender).show(sender)
    return true
  }
}
