package io.oyasai.oyasaiAdminTools.commands.syokaku

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import io.oyasai.oyasaiAdminTools.utils.PlayerUtils
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
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val playerUUID = PlayerUtils.resolveUUID(playerName) ?: return@Runnable

              PermsUtils.getCurrentRank(playerUUID).thenAccept { rank ->
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          // APIから取得した場合などは名前がnullになるため、入力された名前をフォールバックに使う
                          val displayPlayerName =
                              Bukkit.getOfflinePlayer(playerUUID).name ?: playerName
                          if (rank != null) {
                            sender.sendMessage(
                                "§a${displayPlayerName}さんの現在のランクは§e${rank.name}§aです。")
                          } else {
                            sender.sendMessage("§c${displayPlayerName}さんのランク情報が見つかりません。")
                          }
                        },
                    )
              }
            })
    return true
  }
}
