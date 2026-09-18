package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.gui.GuidebookGUI
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLGuide : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slguide" || sender !is Player) return false
    if (args.isNotEmpty()) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /slguide".color())
      return true
    }
    if (!Data.loading) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }
    GuidebookGUI.openCatalog(sender)
    return true
  }
}
