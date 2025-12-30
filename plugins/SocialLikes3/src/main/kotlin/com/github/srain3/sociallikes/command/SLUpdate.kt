package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import java.util.*
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object SLUpdate : CommandExecutor {
  val switch = mutableMapOf<UUID, Boolean>()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slupdate") return false
    if (sender !is Player) return false

    sender.sendMessage(Tools.socialLikesLOGO + "&eアップデートモードに入りました".color())
    sender.sendMessage(Tools.socialLikesLOGO + "&e移動させたlike看板を右クリックで更新します(10秒後モード終了)".color())
    switch[sender.uniqueId] = true

    object : BukkitRunnable() {
          override fun run() {
            if (switch[sender.uniqueId] == true) {
              if (sender.isOnline) {
                sender.sendMessage(Tools.socialLikesLOGO + "&eアップデートモードを自動終了しました".color())
              }
              switch[sender.uniqueId] = false
            }
          }
        }
        .runTaskLater(Tools.plugin, 20 * 10)

    return true
  }
}
