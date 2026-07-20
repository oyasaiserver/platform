package icu.oyasai.utilities.debugonbe.command

import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.gui.TogoGui
import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.TogoSettingsLimits
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class DebugOnBeCommand(
    private val displayManager: BlockDisplayManager,
    private val store: PlacementDataStore,
    private val togoGui: TogoGui,
) : CommandExecutor, TabCompleter {

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
      togoGui.open(sender)
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
    val radius = if (args.size >= 2) args[1].toIntOrNull() else TogoSettingsLimits.DEFAULT_RADIUS
    if (radius == null || radius !in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS) {
      player.sendMessage(
          "§c[DOB] 半径は ${TogoSettingsLimits.MIN_RADIUS}〜${TogoSettingsLimits.MAX_RADIUS} の範囲で指定してください。"
      )
      return
    }
    displayManager.refreshAround(player, radius, 30)
  }

  private fun handleTogo(player: Player, args: Array<out String>) {
    if (args.isNotEmpty() && args[0].lowercase() == "help") {
      val page = if (args.size > 1) args[1].toIntOrNull() ?: 1 else 1
      sendHelp(player, page)
      return
    }

    if (displayManager.isRefreshing(player)) {
      displayManager.clearRefresh(player)
      player.sendMessage("§e[DOB] 表示を解除しました。")
      return
    }

    val radius = if (args.isNotEmpty()) args[0].toIntOrNull() else displayManager.getRadius(player)
    if (radius == null || radius !in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS) {
      player.sendMessage(
          "§c[DOB] 半径は ${TogoSettingsLimits.MIN_RADIUS}〜${TogoSettingsLimits.MAX_RADIUS} の範囲で指定してください。"
      )
      return
    }

    val durationSeconds =
        if (args.size >= 2) {
          parseDurationSeconds(args[1])
        } else {
          displayManager.getDurationSeconds(player)
        }
    if (durationSeconds == null) {
      player.sendMessage(
          "§c[DOB] 期限は ${TogoSettingsLimits.MIN_DURATION_SECONDS}〜${TogoSettingsLimits.MAX_DURATION_SECONDS}秒の範囲で指定してください。"
      )
      return
    }

    displayManager.refreshAround(player, radius, durationSeconds)

    player.sendMessage("§a[DOB] 表示を適用しました！")
    player.sendMessage("§7  - 半径: §e$radius §7(MAX ${TogoSettingsLimits.MAX_RADIUS})")
    player.sendMessage(
        "§7  - 期限: §e${durationSeconds}秒 §7(MAX ${TogoSettingsLimits.MAX_DURATION_SECONDS}秒)"
    )
    player.sendMessage("§7  - 解除するにはもう一度 /togo を実行してください。")
    player.sendMessage("§7  - 使い方: /togo [半径] [時間(秒)]")
    player.sendMessage("§7  - 設定変更: /togom")
  }

  /** /togo の秒単位引数を検証する。 */
  private fun parseDurationSeconds(raw: String): Int? {
    val seconds = raw.toIntOrNull() ?: return null
    return seconds.takeIf {
      it in TogoSettingsLimits.MIN_DURATION_SECONDS..TogoSettingsLimits.MAX_DURATION_SECONDS
    }
  }

  private fun handleReload(player: Player) {
    store.reloadAll()
    player.sendMessage("§a[DOB] 設定ファイルを再読み込みしました。")
  }

  private fun sendHelp(player: Player, page: Int = 1) {
    if (page == 1) {
      player.sendMessage(
          """
          §b━━━ DebugOnBE ヘルプ (1/2) §b━━━
          §7■ コマンド
          §a/togo [radius] [time]       §7- 周囲ブロックを一定時間表示置換
          §a/togom                     §7- Togo設定GUIを開く
          §a/debugonbe refresh [radius] §7- 周囲ブロックを置換 (デフォルト10)
          §a/debugonbe reload           §7- 設定ファイルを再読み込み

          §7次ページ: /togo help 2
          """
              .trimIndent()
      )
    } else {
      val filter = displayManager.getFilter(player)
      fun status(shape: BlockShape) = if (filter == null || filter.contains(shape)) "§a✅" else "§7❌"
      fun name(shape: BlockShape, label: String): String {
        val configured = store.get(shape).states.values.any { it.isNotEmpty() }
        return (if (configured) "§a" else "§c") + label
      }

      player.sendMessage(
          """
          §b━━━ DebugOnBE ヘルプ (2/2) §b━━━
          §e■ Togo設定状況 (✅=表示対象):
          §7ブロック数制限: §e${displayManager.getLimit(player)} §7個
          §7変換半径: §e${displayManager.getRadius(player)} §7ブロック
          §7変換時間: §e${displayManager.getDurationSeconds(player)} §7秒
          ${status(BlockShape.STAIRS)} ${name(BlockShape.STAIRS, "st/stairs")}    ${status(BlockShape.IRON_BARS)} ${name(BlockShape.IRON_BARS, "ib/iron_bars")}
          ${status(BlockShape.FENCE)} ${name(BlockShape.FENCE, "fc/fences")}    ${status(BlockShape.WALL)} ${name(BlockShape.WALL, "wl/walls")}
          ${status(BlockShape.SLAB)} ${name(BlockShape.SLAB, "sl/slabs")}     ${status(BlockShape.DOOR)} ${name(BlockShape.DOOR, "dr/doors")}
          ${status(BlockShape.TRAPDOOR)} ${name(BlockShape.TRAPDOOR, "td/trapdoors")}  ${status(BlockShape.GLASS_PANE)} ${name(BlockShape.GLASS_PANE, "gp/glass_panes")}
          
          §7※ 緑色は設定ファイル対応済み、赤色は未対応です。
          §7設定変更: /togom
          §7前ページ: /togo help 1
          """
              .trimIndent()
      )
    }
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
      if (args.size == 1) {
        val options = listOf("5", "10", "16", "32", "help")
        return options.filter { it.startsWith(args[0].lowercase()) }
      }
      if (args.size == 2 && args[0].lowercase() == "help") {
        return listOf("1", "2").filter { it.startsWith(args[1]) }
      }
      if (args.size == 2 && args[0].lowercase() != "help") {
        return listOf("10", "30", "60", "120", "300").filter {
          val seconds = parseDurationSeconds(it) ?: return@filter false
          seconds <= TogoSettingsLimits.MAX_DURATION_SECONDS && it.startsWith(args[1])
        }
      }
      return emptyList()
    }

    if (cmdName == "togom") {
      return emptyList()
    }

    return when (args.size) {
      1 -> listOf("refresh", "reload", "help").filter { it.startsWith(args[0].lowercase()) }
      2 ->
          when (args[0].lowercase()) {
            "refresh" -> listOf("5", "10", "16", "32").filter { it.startsWith(args[1]) }
            else -> emptyList()
          }
      else -> emptyList()
    }
  }
}
