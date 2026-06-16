package icu.oyasai.utilities.debugonbe.command

import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class DebugOnBeCommand(
    private val displayManager: BlockDisplayManager,
    private val store: PlacementDataStore,
) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§c[DebugOnBE] このコマンドはプレイヤーのみ使用できます。")
      return true
    }

    // /togo コマンドの処理
    if (command.name == "togo") {
      if (!sender.hasPermission("debugonbe.refresh")) {
        sender.sendMessage("§c[DebugOnBE] このコマンドを使用する権限がありません。")
        return true
      }
      handleTogo(sender, args)
      return true
    }

    if (args.isEmpty()) {
      sendHelp(sender)
      return true
    }

    val sub = args[0].lowercase()

    if (!sender.hasPermission("debugonbe.admin")) {
      sender.sendMessage("§c[DebugOnBE] このコマンドを使用する権限がありません。")
      return true
    }

    when (sub) {
      "refresh" -> handleRefresh(sender, args)
      "reload" -> handleReload(sender)
      "help" -> sendHelp(sender)
      else -> sender.sendMessage("§c[DebugOnBE] 不明なサブコマンドです。/debugonbe help を参照してください。")
    }
    return true
  }

  private fun handleRefresh(player: Player, args: Array<out String>) {
    val radius = if (args.size >= 2) args[1].toIntOrNull() ?: 10 else 10
    if (radius < 1 || radius > 50) {
      player.sendMessage("§c[DebugOnBE] 半径は 1〜50 の範囲で指定してください。")
      return
    }
    displayManager.refreshAround(player, radius, 30)
  }

  private fun handleTogo(player: Player, args: Array<out String>) {
    if (displayManager.isRefreshing(player)) {
      displayManager.clearRefresh(player)
      player.sendMessage("§e[DebugOnBE] 表示を解除しました。")
      return
    }

    val radius = if (args.isNotEmpty()) args[0].toIntOrNull() ?: 10 else 10
    if (radius !in 1..50) {
      player.sendMessage("§c[DebugOnBE] 半径は 1〜50 の範囲で指定してください。")
      return
    }

    val time = if (args.size >= 2) args[1].toDoubleOrNull() ?: 1.0 else 1.0
    if (time !in 0.1..5.0) {
      player.sendMessage("§c[DebugOnBE] 期限は 0.1〜5分 の範囲で指定してください。")
      return
    }

    val durationSeconds = (time * 60).toInt()
    displayManager.refreshAround(player, radius, durationSeconds)

    player.sendMessage("§a[DebugOnBE] 表示を適用しました！")
    player.sendMessage("§7  - 半径: §e$radius §7(MAX 50)")
    player.sendMessage("§7  - 期限: §e${time}分 §7(MAX 5分)")
    player.sendMessage("§7  - 解除するにはもう一度 /togo を実行してください。")
    player.sendMessage("§7  - 使い方: /togo [半径] [時間(分)]")
  }

  private fun handleReload(player: Player) {
    store.reloadAll()
    player.sendMessage("§a[DebugOnBE] 設定ファイルを再読み込みしました。")
  }

  private fun sendHelp(player: Player) {
    player.sendMessage(
        """
        §b━━━ DebugOnBE ヘルプ §b━━━
        §7■ コマンド
        §a/togo [radius] [time]       §7- 周囲ブロックを一定時間表示置換
        §a/debugonbe refresh [radius] §7- 周囲ブロックを置換 (デフォルト10)
        §a/debugonbe reload           §7- 設定ファイルを再読み込み
        """
            .trimIndent()
    )
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (sender !is Player) return emptyList()

    val isTogo = command.name.lowercase() == "togo" || alias.lowercase() == "togo"
    if (isTogo) {
      return when (args.size) {
        1 -> listOf("5", "10", "16", "32", "50").filter { it.startsWith(args[0]) }
        2 -> listOf("0.5", "1", "2", "3", "5").filter { it.startsWith(args[1]) }
        else -> emptyList()
      }
    }

    return when (args.size) {
      1 -> listOf("refresh", "reload", "help").filter { it.startsWith(args[0].lowercase()) }
      2 ->
          when (args[0].lowercase()) {
            "refresh" -> listOf("5", "10", "16", "32", "64").filter { it.startsWith(args[1]) }
            else -> emptyList()
          }
      else -> emptyList()
    }
  }
}
