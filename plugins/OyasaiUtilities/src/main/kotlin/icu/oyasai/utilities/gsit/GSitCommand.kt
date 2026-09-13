package icu.oyasai.utilities.gsit

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object GSitCommand : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    when (command.name.lowercase()) {
      "gsitreload" -> {
        GSitFeature.reload()
        sender.sendMessage("§aGSit の設定を再読み込みしました。")
        return true
      }
    }
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("§cこのコマンドはプレイヤーのみ実行できます。")
              return true
            }
    val mode =
        when (command.name.lowercase()) {
          "gsit" -> SeatMode.SIT
          "glay" -> SeatMode.LAY
          "glayback" -> SeatMode.LAYBACK
          "gbellyflop" -> SeatMode.BELLYFLOP
          "gspin" -> SeatMode.SPIN
          "gcrawl" -> SeatMode.CRAWL
          else -> return false
        }
    GSitFeature.toggle(player, mode)
    return true
  }
}
