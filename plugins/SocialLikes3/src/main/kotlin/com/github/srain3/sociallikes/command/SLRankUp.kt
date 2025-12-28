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
    if (!sender.hasPermission("sociallikes3.slrankup")) {
      return false
    }
    if (sender !is Player) return false
    sender.sendMessage(Tools.socialLikesLOGO + "&f ランクアップ候補の処理中です...".color())

    if (args.isEmpty()) {
      Thread {
            val gui = SLRankUp.getGUI(listOf("default", "chukyu"), 30)
            object : BukkitRunnable() {
                  override fun run() {
                    gui.show(sender)
                  }
                }
                .runTaskLater(Tools.plugin, 1)
          }
          .start()
    } else if (args[0].toIntOrNull() == null) {
      val list = args[0].split(',')
      Thread {
            val gui = SLRankUp.getGUI(list, 30)
            object : BukkitRunnable() {
                  override fun run() {
                    gui.show(sender)
                  }
                }
                .runTaskLater(Tools.plugin, 1)
          }
          .start()
    } else if (args[0].toIntOrNull() != null) {
      Thread {
            val gui = SLRankUp.getGUI(listOf("default", "chukyu"), args[0].toInt())
            object : BukkitRunnable() {
                  override fun run() {
                    gui.show(sender)
                  }
                }
                .runTaskLater(Tools.plugin, 1)
          }
          .start()
    } else if (args.size == 2) {
      val list = args[0].split(',')
      Thread {
            val gui = SLRankUp.getGUI(list, args[1].toIntOrNull() ?: 30)
            object : BukkitRunnable() {
                  override fun run() {
                    gui.show(sender)
                  }
                }
                .runTaskLater(Tools.plugin, 1)
          }
          .start()
    }
    return true
  }
}
