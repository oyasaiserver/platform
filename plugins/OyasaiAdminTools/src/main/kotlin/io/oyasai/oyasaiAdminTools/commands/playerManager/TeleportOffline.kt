package io.oyasai.oyasaiAdminTools.commands.playerManager

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import org.bukkit.command.*

/** Kept as a second entry point; the actual teleport implementation is shared. */
object TeleportOffline : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val feature = OyasaiAdminTools.plugin.tpOffline
    if (feature == null) sender.sendMessage("§cオフライン移動機能は利用できません。")
    else feature.onCommand(sender, command, label, args)
    return true
  }
}
