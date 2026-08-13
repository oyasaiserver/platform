package icu.oyasai.utilities.redbull

import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object RedBullCommand : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    when (command.name.lowercase()) {
      "redbull" -> {
        val player =
            sender as? Player
                ?: run {
                  sender.sendMessage("§cこのコマンドはプレイヤーのみ実行できます。")
                  return true
                }
        RedBullFeature.activateFromCommand(player)
      }
      "buyredbull",
      "buyredbullset" -> {
        val targetName =
            args.singleOrNull()
                ?: run {
                  sender.sendMessage("§c使用法: /${command.name} <プレイヤー>")
                  return true
                }
        val target =
            Bukkit.getPlayerExact(targetName)
                ?: run {
                  sender.sendMessage("§c対象プレイヤーはオンラインではありません。")
                  return true
                }
        val amount = if (command.name.equals("buyredbullset", ignoreCase = true)) 12 else 1
        RedBullFeature.buy(sender.name, target, amount)
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (args.size != 1 || command.name.equals("redbull", ignoreCase = true)) return emptyList()
    return Bukkit.getOnlinePlayers().map(Player::getName).filter {
      it.startsWith(args[0], ignoreCase = true)
    }
  }
}
