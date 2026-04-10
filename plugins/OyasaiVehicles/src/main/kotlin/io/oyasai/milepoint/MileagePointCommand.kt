package io.oyasai.milepoint

import io.oyasai.anybuilder.common.BuilderCommandTabSupport
import io.oyasai.hasOyasaiAdminPermission
import io.oyasai.toolbox.Tools.color
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

// milepoint add <amount> [player]
// milepoint check <player>

object MileagePointCommand : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    if (command.name != "milepoint") return false

    if (args.isEmpty()) {
      if (sender is Player) {
        sender.sendMessage(
            color("&9現在のマイルポイント&7: &b${MileagePoint.getUserPoint(sender.uniqueId)}p"))
      }
      return true
    }

    if (!sender.hasOyasaiAdminPermission()) {
      sender.sendMessage(color("&c権限がありません。"))
      return true
    }

    when (args[0]) {
      "add" -> {
        when (args.size) {
          2 -> {
            if (sender is Player) {
              val amount =
                  args[1].toIntOrNull()
                      ?: run {
                        sender.sendMessage(color("&c数値を指定してください。"))
                        return true
                      }
              sender.sendMessage(
                  "${sender.name}のマイルポイントを${MileagePoint.changePoint(sender.uniqueId, amount)}pに変更しました")
            } else {
              sender.sendMessage(color("&c/milepoint add <amount> <player>"))
            }
            return true
          }
          3 -> {
            val amount =
                args[1].toIntOrNull()
                    ?: run {
                      sender.sendMessage(color("&c数値を指定してください。"))
                      return true
                    }
            val targetPlayer = Bukkit.getPlayer(args[2])
            when {
              targetPlayer == null -> sender.sendMessage("プレイヤーが見つかりません")
              targetPlayer.isOnline ->
                  sender.sendMessage(
                      "${args[2]}のマイルポイントを${MileagePoint.changePoint(targetPlayer.uniqueId, amount)}pに変更しました")
              else -> sender.sendMessage("プレイヤーがオンラインではありません")
            }
            return true
          }
          else -> sender.sendMessage(color("&c/milepoint add <amount> [player]"))
        }
      }
      "check" -> {
        if (args.size == 2) {
          val targetPlayer = Bukkit.getPlayer(args[1])
          when {
            targetPlayer == null -> sender.sendMessage("プレイヤーが見つかりません")
            targetPlayer.isOnline ->
                sender.sendMessage(
                    "${args[1]}のマイルポイントは${MileagePoint.getUserPoint(targetPlayer.uniqueId)}p")
            else -> sender.sendMessage("プレイヤーがオンラインではありません")
          }
          return true
        }
        sender.sendMessage(color("&c/milepoint check <player>"))
      }
      else -> sender.sendMessage(color("&c/milepoint add <amount> [player] / check <player>"))
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): MutableList<String>? {
    if (command.name != "milepoint" || !sender.hasOyasaiAdminPermission()) return null

    val completions =
        when (args.size) {
          1 -> BuilderCommandTabSupport.filterStartsWith(args[0], listOf("add", "check"))
          2 ->
              when (args[0]) {
                "add" ->
                    BuilderCommandTabSupport.filterStartsWith(
                        args[1], listOf("-10", "10", "25", "50", "100"))
                "check" ->
                    BuilderCommandTabSupport.filterStartsWith(
                        args[1], Bukkit.getOnlinePlayers().map { it.name })
                else -> mutableListOf()
              }
          3 ->
              if (args[0] == "add") {
                BuilderCommandTabSupport.filterStartsWith(
                    args[2], Bukkit.getOnlinePlayers().map { it.name })
              } else {
                mutableListOf()
              }
          else -> mutableListOf()
        }
    completions.sort()
    return completions
  }
}
