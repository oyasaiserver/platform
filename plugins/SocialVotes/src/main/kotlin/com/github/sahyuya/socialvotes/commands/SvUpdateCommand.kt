package com.github.sahyuya.socialvotes.commands

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class SvUpdateCommand : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("プレイヤーのみ実行できます。")
      return true
    }
    UpdateModeManager.watchPlayer(sender.uniqueId)
    sender.sendMessage("更新したいSV看板を右クリックすることでアップデートできます。")
    return true
  }
}
