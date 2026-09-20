package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderManager
import me.realized.tokenmanager.api.TokenManager
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
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§cこのコマンドはプレイヤーのみ実行可能です。")
      return true
    }
    if (args.size != 2) {
      sender.sendMessage("§c使用法: /kakutyo <プレイヤー名> <消費ポイント>")
      return true
    }

    val targetName = args[0]
    val pointsStr = args[1]
    val targetPlayer = Bukkit.getPlayer(targetName)
    if (targetPlayer == null) {
      sender.sendMessage("§c指定されたプレイヤー ${targetName} はオンラインではありません。")
      return true
    }

    // ポイントが数値か確認
    val points = pointsStr.toLongOrNull()
    if (points == null || points <= 0) {
      sender.sendMessage("§cポイントは正の整数で指定してください。")
      return true
    }

    // 100ポイント単位かどうかのチェック
    if (points % 100 != 0L) {
      sender.sendMessage("§cポイントは100の倍数で指定してください。(例: 100, 200, 500...)")
      return true
    }

    val tmPlugin = Bukkit.getPluginManager().getPlugin("TokenManager")
    if (tmPlugin !is TokenManager) {
      sender.sendMessage("TokenManagerが見つかりませんでした。; ;")
      return true
    }
    // 現在のトークン残高確認
    val balance = tmPlugin.getTokens(targetPlayer).orElse(0)
    if (balance < points) {
      sender.sendMessage("§c${targetName}のポイントが不足しています。(現在: $balance, 必要: $points)")
      return true
    }

    val currentWorldName = sender.world.name
    val borderData = WorldBorderManager.getBorder(currentWorldName)

    if (borderData == null) {
      sender.sendMessage(
          "§cこのワールド (${currentWorldName}) にはWorldBorderが設定されていません。先に /wb set を行ってください。"
      )
      return true
    }

    // 100ポイント = 半径50ブロック
    val expansionRadius = ((points / 100) * 50).toInt()
    val currentRadiusX = borderData.radiusX
    val currentRadiusZ = borderData.radiusZ
    val centerX = borderData.x
    val centerZ = borderData.z
    val newRadiusX = currentRadiusX + expansionRadius
    val newRadiusZ = currentRadiusZ + expansionRadius

    WorldBorderManager.setRadii(currentWorldName, newRadiusX, newRadiusZ)

    sender.sendMessage("§aワールド §e$currentWorldName §aの拡張を開始します。")
    sender.sendMessage("§8中心: ($centerX, $centerZ)")
    sender.sendMessage("§8半径: $currentRadiusX -> $newRadiusX (+ $expansionRadius)")

    val success = tmPlugin.removeTokens(targetPlayer, points)
    if (success) {
      sender.sendMessage("§b拡張成功！ ${targetName}から ${points}ポイント徴収しました。")
      targetPlayer.sendMessage("§gワールド拡張のため ${points}ポイント消費しました。")
    } else {
      sender.sendMessage("§cトークン消費に失敗したため、ボーダーを元に戻します。")
      WorldBorderManager.setRadii(currentWorldName, currentRadiusX, currentRadiusZ)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
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
