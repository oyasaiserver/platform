package io.oyasai.oyasaiAdminTools.commands

import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object KakutyoCommandExecutor : CommandExecutor, TabCompleter {

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>
  ): Boolean {

    if (sender !is Player) {
      sender.sendMessage("§cプレイヤーのみ実行可能です")
      return true
    }

    if (!sender.isOp) {
      sender.sendMessage("§cOPのみ実行可能です")
      return true
    }

    if (args.size != 2) {
      sender.sendMessage("§c使い方: /kakutyo <player> <point>")
      return true
    }

    val targetName = args[0]
    val point = args[1].toIntOrNull()

    if (point == null || point <= 0) {
      sender.sendMessage("§cポイントは正の整数で指定してください")
      return true
    }

    val expandTimes = point / 100
    if (expandTimes <= 0) {
      sender.sendMessage("§c100ポイント以上必要です")
      return true
    }

    val expandRadius = expandTimes * 50
    val world = sender.world
    val border = world.worldBorder

    val centerX = border.center.x.toInt()
    val centerZ = border.center.z.toInt()
    val currentDiameter = border.size
    val currentRadius = currentDiameter / 2
    val newRadius = currentRadius + expandRadius
    val newDiameter = newRadius * 2

    // WorldBorder拡張
    val wbCommand = "wb set $newDiameter $centerX 0 $centerZ ${world.name}"
    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), wbCommand)

    // TokenManagerポイント消費
    val tmCommand = "tm remove $targetName $point"
    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), tmCommand)

    sender.sendMessage("§aワールド拡張完了！")
    sender.sendMessage("§7半径: $currentRadius → $newRadius")
    sender.sendMessage("§7消費ポイント: $point")

    return true
  }
  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>
  ): List<String> {

    if (!sender.isOp) return emptyList()

    return when (args.size) {
      1 ->
        Bukkit.getOnlinePlayers()
          .map { it.name }
          .filter { it.startsWith(args[0], ignoreCase = true) }
      2 -> listOf("100", "200", "300", "500", "1000").filter { it.startsWith(args[1]) }
      else -> emptyList()
    }
  }
}
