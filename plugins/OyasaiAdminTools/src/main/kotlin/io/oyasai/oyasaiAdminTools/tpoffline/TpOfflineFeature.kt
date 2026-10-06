package io.oyasai.oyasaiAdminTools.tpoffline

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.playerhistory.PlayerHistoryFeature
import io.oyasai.oyasaiAdminTools.staff.StaffFeature
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent

class TpOfflineFeature(plugin: OyasaiAdminTools, private val history: PlayerHistoryFeature) :
    StaffFeature(plugin, "tpoffline") {
  override fun execute(sender: CommandSender, args: Array<out String>) {
    if (!sender.hasPermission("essentials.tpoffline")) {
      sender.sendMessage("§c権限がありません。")
      return
    }
    if (sender !is Player) {
      sender.sendMessage("§cプレイヤー専用です。")
      return
    }
    if (args.isEmpty()) {
      sender.sendMessage("/tpoffline <player>")
      return
    }
    val target = history.resolve(args[0]) ?: return missing(sender)
    val last = history.store.get(target.uniqueId, target.name).location
    if (last == null) {
      sender.sendMessage("§c最終ログアウト場所の記録がありません。")
      return
    }
    val location = history.location(last)
    if (location == null) {
      sender.sendMessage("§c保存先のワールドが見つかりません。")
      return
    }
    if (
        sender.world != location.world &&
            plugin.config.getBoolean("staff.world-teleport-permissions", false) &&
            !sender.hasPermission("essentials.worlds.${location.world.name}")
    ) {
      sender.sendMessage("§c移動先ワールドへの権限がありません。")
      return
    }
    sender.teleportAsync(location, PlayerTeleportEvent.TeleportCause.COMMAND).whenComplete {
        success,
        error ->
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            if (sender.isOnline)
                sender.sendMessage(
                    if (error == null && success == true) "§a${target.name} の最終ログアウト場所へ移動しました。"
                    else "§cテレポートに失敗しました。"
                )
          },
      )
    }
  }
}
