package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.SLResourcePack
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLDataPack : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "sldatapack") return false

    if (sender !is Player) {
      sender.sendMessage(Tools.socialLikesLOGO + " &cプレイヤーから実行してください。".color())
      return true
    }

    SLResourcePack.forceResend(sender)
    return true
  }
}
