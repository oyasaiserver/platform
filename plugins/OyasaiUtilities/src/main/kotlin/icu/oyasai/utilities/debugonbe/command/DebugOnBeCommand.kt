package icu.oyasai.utilities.debugonbe.command

import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.gui.TogoGui
import icu.oyasai.utilities.debugonbe.listener.TogoAutoItemListener
import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.TogoSettings
import icu.oyasai.utilities.debugonbe.model.TogoSettingsLimits
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class DebugOnBeCommand(
    private val displayManager: BlockDisplayManager,
    private val store: PlacementDataStore,
    private val togoGui: TogoGui,
    private val autoItemListener: TogoAutoItemListener,
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
      if (args.isEmpty()) {
        togoGui.open(sender)
      } else {
        handleTogom(sender, args)
      }
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
    val radius = if (args.size >= 2) args[1].toIntOrNull() else TogoSettings().radius
    if (radius == null || radius !in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS) {
      player.sendMessage(
          "§c[DOB] 半径は ${TogoSettingsLimits.MIN_RADIUS}〜${TogoSettingsLimits.MAX_RADIUS} の範囲で指定してください。"
      )
      return
    }
    displayManager.refreshAround(
        player,
        radius,
        30.coerceIn(
            TogoSettingsLimits.MIN_DURATION_SECONDS,
            TogoSettingsLimits.MAX_DURATION_SECONDS,
        ),
    )
  }

  private fun handleTogo(player: Player, args: Array<out String>) {
    if (args.isNotEmpty() && args[0].lowercase() == "help") {
      val page = if (args.size > 1) args[1].toIntOrNull() ?: 1 else 1
      sendHelp(player, page)
      return
    }

    if (args.size == 1 && args[0].lowercase() == "auto") {
      val enabled = !displayManager.isDebugStickAutoEnabled(player)
      displayManager.setDebugStickAutoEnabled(player, enabled)
      autoItemListener.updateNow(player)
      player.sendMessage(
          if (enabled) {
            "§a[DOB] デバッグ棒による自動Togoを有効にしました。"
          } else {
            "§e[DOB] デバッグ棒による自動Togoを無効にしました。"
          }
      )
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

  private fun handleTogom(player: Player, args: Array<out String>) {
    when (val sub = args[0].lowercase()) {
      "help" -> sendHelp(player, 2)
      "reset" -> {
        displayManager.setSettings(player, TogoSettings())
        player.sendMessage("§a[DOB] Togo設定を初期化しました。")
      }
      "lim",
      "limit" -> handleLimit(player, args)
      "radius",
      "rad" -> handleRadius(player, args)
      "duration",
      "time",
      "seconds",
      "sec" -> handleDuration(player, args)
      "types",
      "filter" -> {
        if (args.size < 2) {
          player.sendMessage("§c[DOB] ブロック種類を指定してください。 (例: /togom types stairs,slabs)")
        } else {
          handleShapeFilter(player, args[1])
        }
      }
      "replace" -> {
        if (!player.hasPermission("debugonbe.admin")) {
          player.sendMessage("§c[DOB] この全体設定を変更する権限がありません。")
        } else {
          handleReplace(player, args)
        }
      }
      else -> handleShapeFilter(player, sub)
    }
  }

  private fun handleLimit(player: Player, args: Array<out String>) {
    val raw = args.getOrNull(1)
    if (raw == null) {
      player.sendMessage("§c[DOB] 個数制限を指定してください。 (例: /togom lim 100)")
      return
    }
    if (raw.lowercase() == "reset" || raw.lowercase() == "off") {
      displayManager.setLimit(player, null)
      player.sendMessage("§a[DOB] 個数制限をデフォルトに戻しました。")
      return
    }
    val limit = raw.toIntOrNull()
    if (
        limit == null ||
            limit !in TogoSettingsLimits.MIN_MAX_BLOCKS..TogoSettingsLimits.MAX_MAX_BLOCKS
    ) {
      player.sendMessage(
          "§c[DOB] 個数制限は ${TogoSettingsLimits.MIN_MAX_BLOCKS}〜${TogoSettingsLimits.MAX_MAX_BLOCKS} の範囲で指定してください。"
      )
      return
    }
    displayManager.setLimit(player, limit)
    player.sendMessage("§a[DOB] 最大表示個数を §e$limit §a個に設定しました。")
  }

  private fun handleRadius(player: Player, args: Array<out String>) {
    val raw = args.getOrNull(1)
    if (raw == null) {
      player.sendMessage("§c[DOB] 半径を指定してください。 (例: /togom radius 10)")
      return
    }
    if (raw.lowercase() == "reset" || raw.lowercase() == "off") {
      displayManager.setSettings(
          player,
          displayManager.getSettings(player).copy(radius = TogoSettings().radius),
      )
      player.sendMessage("§a[DOB] 変換半径をデフォルトに戻しました。")
      return
    }
    val radius = raw.toIntOrNull()
    if (radius == null || radius !in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS) {
      player.sendMessage(
          "§c[DOB] 半径は ${TogoSettingsLimits.MIN_RADIUS}〜${TogoSettingsLimits.MAX_RADIUS} の範囲で指定してください。"
      )
      return
    }
    displayManager.setRadius(player, radius)
    player.sendMessage("§a[DOB] 変換半径を §e$radius §aに設定しました。")
  }

  private fun handleDuration(player: Player, args: Array<out String>) {
    val raw = args.getOrNull(1)
    if (raw == null) {
      player.sendMessage("§c[DOB] 変換時間(秒)を指定してください。 (例: /togom duration 60)")
      return
    }
    if (raw.lowercase() == "reset" || raw.lowercase() == "off") {
      displayManager.setSettings(
          player,
          displayManager.getSettings(player).copy(durationSeconds = TogoSettings().durationSeconds),
      )
      player.sendMessage("§a[DOB] 変換時間をデフォルトに戻しました。")
      return
    }
    val durationSeconds = parseDurationSeconds(raw)
    if (durationSeconds == null) {
      player.sendMessage(
          "§c[DOB] 変換時間は ${TogoSettingsLimits.MIN_DURATION_SECONDS}〜${TogoSettingsLimits.MAX_DURATION_SECONDS}秒の範囲で指定してください。"
      )
      return
    }
    displayManager.setDurationSeconds(player, durationSeconds)
    player.sendMessage("§a[DOB] 変換時間を §e${durationSeconds}秒 §aに設定しました。")
  }

  private fun handleShapeFilter(player: Player, input: String) {
    val selectedShapes = mutableSetOf<BlockShape>()
    val unknowns = mutableListOf<String>()

    input.split(",").forEach { type ->
      val shape = shapeMap[type.lowercase()]
      if (shape == null) {
        unknowns += type
      } else {
        selectedShapes += shape
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

  private fun handleReplace(player: Player, args: Array<out String>) {
    val raw = args.getOrNull(1)
    if (raw == null) {
      player.sendMessage("§c[DOB] 置き換え先ブロックを指定してください。 (例: /togom replace stone)")
      return
    }

    if (raw.lowercase() in setOf("air", "reset", "off")) {
      displayManager.setReplacementMaterial(Material.AIR)
      player.sendMessage("§a[DOB] 置き換え先をAIRに戻しました。")
      return
    }

    val material = Material.matchMaterial(raw.removePrefix("minecraft:").uppercase())
    if (material == null || !material.isBlock) {
      player.sendMessage("§c[DOB] ブロック名が不正です。")
      return
    }

    displayManager.setReplacementMaterial(material)
    player.sendMessage("§a[DOB] 置き換え先を §e${material.name.lowercase()} §aに設定しました。")
  }

  private fun sendHelp(player: Player, page: Int = 1) {
    if (page == 1) {
      player.sendMessage(
          """
          §b━━━ DebugOnBE ヘルプ (1/2) §b━━━
          §7■ コマンド
          §a/togo [radius] [time]       §7- 周囲ブロックを一定時間表示置換
          §a/togo auto                  §7- デバッグ棒を持った時の自動Togoを切替
          §a/togom                     §7- Togo設定GUIを開く
          §a/togom <types/reset/lim/...> §7- Togo設定をコマンドで変更
          §a/togom replace <block>      §7- 全体の置き換え先を設定 (AIRで解除)
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
        val options =
            (listOf(5, 10, 16, TogoSettingsLimits.MAX_RADIUS)
                    .filter { it in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS }
                    .map { it.toString() } + listOf("auto", "help"))
                .distinct()
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
      if (args.size == 1) {
        val options =
            shapeMap.keys +
                listOf(
                    "types",
                    "filter",
                    "reset",
                    "lim",
                    "limit",
                    "radius",
                    "rad",
                    "duration",
                    "time",
                    "replace",
                )
        return options.filter { it.startsWith(args[0].lowercase()) }
      }
      if (args.size == 2) {
        return when (args[0].lowercase()) {
          "types",
          "filter" -> shapeMap.keys.filter { it.startsWith(args[1].lowercase()) }
          "lim",
          "limit" ->
              listOf(
                      "1",
                      TogoSettingsLimits.DEFAULT_MAX_BLOCKS.toString(),
                      TogoSettingsLimits.MAX_MAX_BLOCKS.toString(),
                      "reset",
                      "off",
                  )
                  .filter { it.startsWith(args[1].lowercase()) }
          "radius",
          "rad" ->
              listOf(
                      "1",
                      "10",
                      TogoSettingsLimits.MAX_RADIUS.toString(),
                      "reset",
                      "off",
                  )
                  .filter { it.startsWith(args[1].lowercase()) }
          "duration",
          "time",
          "seconds",
          "sec" ->
              listOf(
                      "1",
                      "60",
                      TogoSettingsLimits.MAX_DURATION_SECONDS.toString(),
                      "reset",
                      "off",
                  )
                  .filter { it.startsWith(args[1].lowercase()) }
          "replace" ->
              (listOf("air", "reset", "off") +
                      Material.values().filter { it.isBlock }.map { it.name.lowercase() })
                  .filter { it.startsWith(args[1].lowercase()) }
          else -> emptyList()
        }
      }
      return emptyList()
    }

    return when (args.size) {
      1 -> listOf("refresh", "reload", "help").filter { it.startsWith(args[0].lowercase()) }
      2 ->
          when (args[0].lowercase()) {
            "refresh" ->
                listOf("5", "10", "16", TogoSettingsLimits.MAX_RADIUS.toString()).filter {
                  it.startsWith(args[1])
                }
            else -> emptyList()
          }
      else -> emptyList()
    }
  }
}
