package icu.oyasai.utilities.debugonbe.command

import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.model.BlockShape
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class DebugOnBeCommand(
    private val displayManager: BlockDisplayManager,
    private val store: PlacementDataStore,
) : CommandExecutor, TabCompleter {

  private val shapeMap =
      mapOf(
          "st" to BlockShape.STAIRS,
          "stairs" to BlockShape.STAIRS,
          "ib" to BlockShape.IRON_BARS,
          "iron_bars" to BlockShape.IRON_BARS,
          "fc" to BlockShape.FENCE,
          "fences" to BlockShape.FENCE,
          "wl" to BlockShape.WALL,
          "walls" to BlockShape.WALL,
          "sl" to BlockShape.SLAB,
          "slabs" to BlockShape.SLAB,
          "dr" to BlockShape.DOOR,
          "doors" to BlockShape.DOOR,
          "td" to BlockShape.TRAPDOOR,
          "trapdoors" to BlockShape.TRAPDOOR,
          "gp" to BlockShape.GLASS_PANE,
          "glass_panes" to BlockShape.GLASS_PANE,
      )

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§c[DOB] このコマンドはプレイヤーのみ使用できます。")
      return true
    }

    // /togo コマンドの処理
    if (command.name == "togo") {
      if (!sender.hasPermission("debugonbe.refresh")) {
        sender.sendMessage("§c[DOB] このコマンドを使用する権限がありません。")
        return true
      }
      handleTogo(sender, args)
      return true
    }

    // /togom コマンドの処理
    if (command.name == "togom") {
      if (!sender.hasPermission("debugonbe.refresh")) {
        sender.sendMessage("§c[DOB] このコマンドを使用する権限がありません。")
        return true
      }
      handleTogom(sender, args)
      return true
    }

    if (args.isEmpty()) {
      sendHelp(sender)
      return true
    }

    val sub = args[0].lowercase()

    if (!sender.hasPermission("debugonbe.admin")) {
      sender.sendMessage("§c[DOB] このコマンドを使用する権限がありません。")
      return true
    }

    when (sub) {
      "refresh" -> handleRefresh(sender, args)
      "reload" -> handleReload(sender)
      "help" -> sendHelp(sender)
      else -> sender.sendMessage("§c[DOB] 不明なサブコマンドです。/debugonbe help を参照してください。")
    }
    return true
  }

  private fun handleRefresh(player: Player, args: Array<out String>) {
    val radius = if (args.size >= 2) args[1].toIntOrNull() ?: 10 else 10
    if (radius < 1 || radius > 50) {
      player.sendMessage("§c[DOB] 半径は 1〜50 の範囲で指定してください。")
      return
    }
    displayManager.refreshAround(player, radius, 30)
  }

  private fun handleTogo(player: Player, args: Array<out String>) {
    if (displayManager.isRefreshing(player)) {
      displayManager.clearRefresh(player)
      player.sendMessage("§e[DOB] 表示を解除しました。")
      return
    }

    val radius = if (args.isNotEmpty()) args[0].toIntOrNull() ?: 10 else 10
    if (radius !in 1..50) {
      player.sendMessage("§c[DOB] 半径は 1〜50 の範囲で指定してください。")
      return
    }

    val time = if (args.size >= 2) args[1].toDoubleOrNull() ?: 1.0 else 1.0
    if (time !in 0.1..5.0) {
      player.sendMessage("§c[DOB] 期限は 0.1〜5分 の範囲で指定してください。")
      return
    }

    val durationSeconds = (time * 60).toInt()
    displayManager.refreshAround(player, radius, durationSeconds)

    player.sendMessage("§a[DOB] 表示を適用しました！")
    player.sendMessage("§7  - 半径: §e$radius §7(MAX 50)")
    player.sendMessage("§7  - 期限: §e${time}分 §7(MAX 5分)")
    player.sendMessage("§7  - 解除するにはもう一度 /togo を実行してください。")
    player.sendMessage("§7  - 使い方: /togo [半径] [時間(分)]")
    player.sendMessage("§7  - フィルタ設定: /togom [types/reset/help]")
  }

  private fun handleTogom(player: Player, args: Array<out String>) {
    if (args.isEmpty() || args[0].lowercase() == "help") {
      val filter = displayManager.getFilter(player)
      fun status(shape: BlockShape) = if (filter == null || filter.contains(shape)) "§a✅" else "§7❌"

      player.sendMessage(
          """
          §b━━━ /togom ヘルプ §b━━━
          §a/togom [types] §7- 表示対象ブロックのフィルタ設定
          §7例: /togom st,wl (階段と壁のみ)
          §7例: /togom reset (すべて表示)
          
          §e■ 現在の設定状況 (✅=対象):
          ${status(BlockShape.STAIRS)} §fst/stairs    ${status(BlockShape.IRON_BARS)} §fib/iron_bars
          ${status(BlockShape.FENCE)} §ffc/fences    ${status(BlockShape.WALL)} §fwl/walls
          ${status(BlockShape.SLAB)} §fsl/slabs     ${status(BlockShape.DOOR)} §fdr/doors
          ${status(BlockShape.TRAPDOOR)} §ftd/trapdoors  ${status(BlockShape.GLASS_PANE)} §fgp/glass_panes
          """
              .trimIndent()
      )
      return
    }

    if (args[0].lowercase() == "reset") {
      displayManager.setFilter(player, null)
      player.sendMessage("§a[DOB] フィルタをリセットしました（すべての対象を表示）。")
      return
    }

    val input = args[0].lowercase()
    val types = input.split(",")
    val selectedShapes = mutableSetOf<BlockShape>()
    val unknowns = mutableListOf<String>()

    for (type in types) {
      val shape = shapeMap[type]
      if (shape != null) {
        selectedShapes.add(shape)
      } else {
        unknowns.add(type)
      }
    }

    if (unknowns.isNotEmpty()) {
      player.sendMessage("§c[DOB] 不明なタイプが含まれています: ${unknowns.joinToString(", ")}")
      return
    }

    if (selectedShapes.isEmpty()) {
      player.sendMessage("§c[DOB] 有効なタイプを指定してください。")
      return
    }

    displayManager.setFilter(player, selectedShapes)
    player.sendMessage(
        "§a[DOB] フィルタを設定しました: §e${selectedShapes.joinToString(", ") { it.name.lowercase() }}"
    )
  }

  private fun handleReload(player: Player) {
    store.reloadAll()
    player.sendMessage("§a[DOB] 設定ファイルを再読み込みしました。")
  }

  private fun sendHelp(player: Player) {
    player.sendMessage(
        """
        §b━━━ DebugOnBE ヘルプ §b━━━
        §7■ コマンド
        §a/togo [radius] [time]       §7- 周囲ブロックを一定時間表示置換
        §a/togom [types/reset/help]   §7- 表示対象フィルタの設定
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

    val cmdName = command.name.lowercase()
    if (cmdName == "togo") {
      return when (args.size) {
        1 -> listOf("5", "10", "16", "32", "50").filter { it.startsWith(args[0]) }
        2 -> listOf("0.5", "1", "2", "3", "5").filter { it.startsWith(args[1]) }
        else -> emptyList()
      }
    }

    if (cmdName == "togom") {
      if (args.size == 1) {
        val lastComma = args[0].lastIndexOf(',')
        val prefix = if (lastComma != -1) args[0].substring(0, lastComma + 1) else ""
        val current = if (lastComma != -1) args[0].substring(lastComma + 1) else args[0]

        val options = shapeMap.keys + listOf("reset", "help")
        return options.filter { it.startsWith(current) }.map { prefix + it }
      }
      return emptyList()
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
