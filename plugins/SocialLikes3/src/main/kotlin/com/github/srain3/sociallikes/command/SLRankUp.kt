package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.gui.SLRankUp
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object SLRankUp : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slrankup") return false
    if (!sender.isOp) {
      return false
    }
    if (sender !is Player) return false
    sender.sendMessage(Tools.socialLikesLOGO + "&f ランクアップ候補の処理中です...".color())

    val groups =
        if (args.isEmpty() || args[0].toIntOrNull() != null) listOf("default", "chukyu")
        else args[0].split(',')
    val days = args.getOrNull(0)?.toIntOrNull() ?: 30
    Thread {
          val gui = SLRankUp.getGUI(groups, days)
          object : BukkitRunnable() {
                override fun run() {
                  gui.show(sender)
                }
              }
              .runTaskLater(Tools.plugin, 1)
        }
        .start()
    return true
  }
}
