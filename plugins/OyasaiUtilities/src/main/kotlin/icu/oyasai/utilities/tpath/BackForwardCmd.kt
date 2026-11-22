package icu.oyasai.utilities.tpath

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.OyasaiUtilities.color
import icu.oyasai.utilities.teleport.TeleportRules
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object BackForwardCmd : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("&cYou are not a Player")
      return true
    }
    if (OyasaiUtilities.plugin.teleportFeature?.isJailed(sender) == true) {
      sender.sendMessage("&c入獄中はテレポート履歴を使えません".color())
      return true
    }
    if (sender.world.name.equals("pvp", ignoreCase = true) && !sender.isOp) {
      sender.sendMessage("&cこのワールドではテレポート履歴を使えません".color())
      return true
    }
    val name = command.name
    when (name) {
      "back" -> {
        val preview = TeleportManager.peekBack(sender)
        if (preview == null) {
          sender.sendMessage("&cこれ以前の履歴がありません".color())
          return true
        }
        if (!canTeleportTo(sender, preview)) {
          sender.sendMessage("&c移動先のワールドへのテレポート権限がありません".color())
          return true
        }
        val loc = TeleportManager.getBack(sender) ?: return true
        TeleportManager.pushIgnore(sender)
        try {
          sender.teleport(loc)
        } finally {
          TeleportManager.shouldIgnore(sender)
        }
        sender.sendMessage("&a前の地点にTP中…".color())
      }
      "forward" -> {
        val preview = TeleportManager.peekForward(sender)
        if (preview == null) {
          sender.sendMessage("&cこれ以降の履歴がありません".color())
          return true
        }
        if (!canTeleportTo(sender, preview)) {
          sender.sendMessage("&c移動先のワールドへのテレポート権限がありません".color())
          return true
        }
        val loc = TeleportManager.getForward(sender) ?: return true
        TeleportManager.pushIgnore(sender)
        try {
          sender.teleport(loc)
        } finally {
          TeleportManager.shouldIgnore(sender)
        }
        sender.sendMessage("&a次の地点にTP中…".color())
      }
      else -> return false
    }
    return true
  }

  private fun canTeleportTo(player: Player, target: Location): Boolean {
    val targetWorld = target.world ?: return false
    if (targetWorld.name.equals("pvp", ignoreCase = true) && !player.isOp) {
      return false
    }
    val tf = runCatching { OyasaiUtilities.plugin.teleportFeature }.getOrNull()
    if (tf != null) {
      return tf.isWorldTeleportAllowed(player, target)
    }
    return TeleportRules.worldAllowed(player.world.name, targetWorld.name, player::hasPermission)
  }
}
