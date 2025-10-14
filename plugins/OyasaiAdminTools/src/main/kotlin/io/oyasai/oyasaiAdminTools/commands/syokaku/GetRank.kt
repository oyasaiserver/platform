package io.oyasai.oyasaiAdminTools.commands.syokaku

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object GetRank : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("Usage: /syokaku getrank <player>")
      return true
    }

    val playerName = args[0]
    val player = Bukkit.getOfflinePlayer(playerName)
    val api = LuckPermsProvider.get()

    PermsUtils.getCurrentRank(player.uniqueId).thenAccept { rank ->
      Bukkit.getScheduler()
        .runTask(
          plugin,
          Runnable {
            if (rank != null) {
              sender.sendMessage("§a${player.name}さんの現在のランクは§e${rank.name}§aです。")
            } else {
              sender.sendMessage("§c${player.name}さんのランク情報が見つかりません。")
            }
          },
        )
    }

    return true
  }
}
