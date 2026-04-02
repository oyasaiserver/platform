package icu.oyasai.citiesskymine.road

import icu.oyasai.citiesskymine.Main
import org.bukkit.Material
import org.bukkit.block.data.type.Stairs
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class RoadCurveCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  // ──────────────────────────────────────────────────
  // コマンド実行
  // ──────────────────────────────────────────────────

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§cプレイヤーのみ使用できます。")
      return true
    }
    val player = sender
    val session = plugin.getSession(player)

    if (args.isEmpty()) {
      sendHelp(player)
      return true
    }

    when (args[0].lowercase()) {
      "help" -> sendHelp(player)
      "reset" -> handleReset(player, session)
      "build" -> handleBuild(player, session)
      "undo" -> handleUndo(player, session)
      "set" -> handleSet(player, session, args)
      "status" -> handleStatus(player, session)
      "debugline" -> handleDebugLine(player, session, args)
      "version" -> handleVersion(player)
      "smoothline" -> handleSmoothLines(player, session)
      else -> sendHelp(player)
    }
    return true
  }

  // ──────────────────────────────────────────────────
  // タブ補完
  // ──────────────────────────────────────────────────

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>
  ): List<String> {
    if (sender !is Player) return emptyList()
    if (args.size == 1) return SUBCOMMANDS.filter { it.startsWith(args[0].lowercase()) }
    if (args[0].lowercase() == "debugline" && args.size == 2)
        return listOf("on", "off", "toggle").filter { it.startsWith(args[1].lowercase()) }
    if (args[0].lowercase() == "set") {
      // args[1..] は param val param val ... の繰り返し
      // (args.size - 1) が奇数 → パラメータ名を補完, 偶数 → 値を補完
      val offset = args.size - 1
      return if (offset % 2 == 1) {
        SET_PARAMS.filter { it.startsWith(args.last().lowercase()) }
      } else {
        tabCompleteSetValue(args[args.size - 2].lowercase(), args.last())
      }
    }
    return emptyList()
  }

  private fun tabCompleteSetValue(param: String, prefix: String): List<String> {
    return when (param) {
      "roadmat",
      "sidewalkmat",
      "linemat" ->
          Material.values()
              .filter {
                it.isBlock && !it.isAir && it.name.lowercase().startsWith(prefix.lowercase())
              }
              .take(20)
              .map { it.name.lowercase() }
      "radius" -> listOf("10.0", "20.0", "30.0", "50.0").filter { it.startsWith(prefix) }
      "transition" -> listOf("5.0", "10.0", "15.0", "20.0").filter { it.startsWith(prefix) }
      "lane" -> listOf("2", "3", "4", "5", "6").filter { it.startsWith(prefix) }
      "centerline",
      "outerline" -> listOf("1", "2").filter { it.startsWith(prefix) }
      "sidewalk" -> listOf("1", "2", "3", "4").filter { it.startsWith(prefix) }
      else -> emptyList()
    }
  }

  // ──────────────────────────────────────────────────
  // サブコマンド実装
  // ──────────────────────────────────────────────────

  private fun handleReset(player: Player, session: RoadSession) {
    plugin.stopPreview(player)
    session.waypoints.clear()
    player.sendMessage("§a[RC] 選択点をリセットしました。")
  }

  private fun handleBuild(player: Player, session: RoadSession) {
    if (!requireWaypoints(player, session, 2)) return

    // 設定変更後(dirty)またはキャッシュ未生成の場合は再計算
    val path =
        if (session.previewDirty || session.cachedPath.isEmpty()) {
          val computed = RoadGeometry.computePath(session.waypoints, session.settings)
          session.cachedPath = computed
          session.previewDirty = false
          computed
        } else {
          session.cachedPath
        }
    if (path.isEmpty()) {
      player.sendMessage("§c[RC] パスを計算できませんでした。")
      return
    }

    player.sendMessage("§a[RC] 道路を生成中…（${path.size} サンプル点）")
    val world = player.world

    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          try {
            val editSession = RoadBuilder.build(player, world, path, session.settings)
            session.lastEditSession = editSession
            session.lastSmoothSession = null
            plugin.server.scheduler.runTask(
                plugin, Runnable { player.sendMessage("§a[RC] 道路の設置が完了しました。") })
          } catch (e: Exception) {
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  player.sendMessage("§c[RC] エラーが発生しました: ${e.message}")
                  plugin.logger.severe("RoadBuilder error: ${e.stackTraceToString()}")
                })
          }
        })
  }

  private fun handleUndo(player: Player, session: RoadSession) {
    val (editSession, isSmooth) =
        when {
          session.lastSmoothSession != null -> session.lastSmoothSession!! to true
          session.lastEditSession != null -> session.lastEditSession!! to false
          else -> {
            player.sendMessage("§c[RC] 取り消す操作がありません。")
            return
          }
        }
    try {
      RoadBuilder.undo(player, player.world, editSession)
      if (isSmooth) {
        session.lastSmoothSession = null
        player.sendMessage("§a[RC] 白線スムージングの変更を取り消しました。")
      } else {
        session.lastEditSession = null
        player.sendMessage("§a[RC] 道路の設置を取り消しました。")
      }
    } catch (e: Exception) {
      player.sendMessage("§c[RC] アンドゥに失敗しました: ${e.message}")
    }
  }

  private fun handleSmoothLines(player: Player, session: RoadSession) {
    if (!requireWaypoints(player, session, 2)) return
    if (session.settings.lineMaterial.createBlockData() !is Stairs) {
      player.sendMessage("§c[RC] 白線素材に階段ブロックを設定してください。")
      return
    }
    val path =
        session.cachedPath.ifEmpty { RoadGeometry.computePath(session.waypoints, session.settings) }
    if (path.isEmpty()) {
      player.sendMessage("§c[RC] パスを計算できませんでした。")
      return
    }

    player.sendMessage("§a[RC] 白線スムージングを実行中…（${path.size} サンプル点）")
    val world = player.world

    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          try {
            val result = WhiteLineSmoother.smooth(world, path, session.settings)
            session.lastSmoothSession = result.editSession
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  player.sendMessage("§a[RC] 白線スムージング完了: §f${result.affectedBlocks} ブロック")
                })
          } catch (e: IllegalArgumentException) {
            plugin.server.scheduler.runTask(
                plugin, Runnable { player.sendMessage("§c[RC] ${e.message}") })
          } catch (e: Exception) {
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  player.sendMessage("§c[RC] 白線スムージング中にエラー: ${e.message}")
                  plugin.logger.severe("WhiteLineSmoother error: ${e.stackTraceToString()}")
                })
          }
        })
  }

  private fun handleSet(player: Player, session: RoadSession, args: Array<out String>) {
    // args: set param1 val1 [param2 val2 ...]
    if (args.size < 3 || (args.size - 1) % 2 != 0) {
      player.sendMessage("§c使い方: /rc set <パラメータ> <値> [<パラメータ> <値> ...]")
      player.sendMessage("§7  ${SET_PARAMS.joinToString(" / ")}")
      return
    }
    val s = session.settings
    var i = 1
    while (i < args.size) {
      if (!applyOneSetting(player, s, args[i], args[i + 1])) return
      i += 2
    }
    // 設定変更をプレビューに即時反映
    plugin.updatePreview(player)
  }

  /** 単一パラメータを適用する。失敗時はエラーメッセージを送信して false を返す。 */
  private fun applyOneSetting(
      player: Player,
      s: RoadSettings,
      param: String,
      value: String
  ): Boolean {
    try {
      when (param.lowercase()) {
        "radius" -> {
          s.radius = value.toDouble()
          player.sendMessage("§a[RC] 半径: §f${s.radius} ブロック")
        }
        "transition" -> {
          s.transitionLength = value.toDouble()
          player.sendMessage("§a[RC] 緩和曲線長: §f${s.transitionLength} ブロック")
        }
        "lane" -> {
          s.laneWidth = value.toInt()
          player.sendMessage("§a[RC] 車道幅: §f${s.laneWidth} ブロック")
        }
        "centerline" -> {
          s.centerLineWidth = value.toInt()
          player.sendMessage("§a[RC] 中央白線幅: §f${s.centerLineWidth} ブロック")
        }
        "outerline" -> {
          s.outerLineWidth = value.toInt()
          player.sendMessage("§a[RC] 外縁白線幅: §f${s.outerLineWidth} ブロック")
        }
        "sidewalk" -> {
          s.sidewalkWidth = value.toInt()
          player.sendMessage("§a[RC] 歩道幅: §f${s.sidewalkWidth} ブロック")
        }
        "roadmat" -> {
          val mat =
              Material.matchMaterial(value)
                  ?: run {
                    player.sendMessage("§c不明な素材: $value")
                    return false
                  }
          s.roadMaterial = mat
          player.sendMessage("§a[RC] 車道素材: §f${mat.key}")
        }
        "sidewalkmat" -> {
          val mat =
              Material.matchMaterial(value)
                  ?: run {
                    player.sendMessage("§c不明な素材: $value")
                    return false
                  }
          s.sidewalkMaterial = mat
          player.sendMessage("§a[RC] 歩道素材: §f${mat.key}")
        }
        "linemat" -> {
          val mat =
              Material.matchMaterial(value)
                  ?: run {
                    player.sendMessage("§c不明な素材: $value")
                    return false
                  }
          s.lineMaterial = mat
          player.sendMessage("§a[RC] 白線素材: §f${mat.key}")
        }
        else -> {
          player.sendMessage("§c不明なパラメータ: $param")
          return false
        }
      }
    } catch (e: NumberFormatException) {
      player.sendMessage("§c数値が無効です: $value")
      return false
    }
    return true
  }

  private fun handleStatus(player: Player, session: RoadSession) {
    val s = session.settings
    val previewState = if (session.previewTask != null) "§a表示中" else "§7停止中"
    player.sendMessage("§e=== RoadCurve 設定 ===")
    player.sendMessage("§7通過点数:     §f${session.waypoints.size}  §7プレビュー: $previewState")
    player.sendMessage("§7半径:         §f${s.radius} ブロック")
    player.sendMessage("§7緩和曲線長:   §f${s.transitionLength} ブロック")
    player.sendMessage("§7車道幅(片側): §f${s.laneWidth} ブロック")
    player.sendMessage("§7中央白線幅:   §f${s.centerLineWidth} ブロック")
    player.sendMessage("§7外縁白線幅:   §f${s.outerLineWidth} ブロック")
    player.sendMessage("§7歩道幅:       §f${s.sidewalkWidth} ブロック")
    player.sendMessage("§7車道素材:     §f${s.roadMaterial.key}")
    player.sendMessage("§7歩道素材:     §f${s.sidewalkMaterial.key}")
    val debugFlag = if (s.debugLineGroups) "§aON" else "§7OFF"
    player.sendMessage("§7白線素材:     §f${s.lineMaterial.key}  §7デバッグ色分け: $debugFlag")
  }

  private fun handleDebugLine(player: Player, session: RoadSession, args: Array<out String>) {
    val s = session.settings
    val newValue =
        when {
          args.size < 2 -> !s.debugLineGroups
          args[1].equals("on", true) ||
              args[1].equals("enable", true) ||
              args[1].equals("true", true) -> true
          args[1].equals("off", true) ||
              args[1].equals("disable", true) ||
              args[1].equals("false", true) -> false
          args[1].equals("toggle", true) -> !s.debugLineGroups
          else -> {
            player.sendMessage("§c[RC] 使用法: /rc debugline [on|off|toggle]")
            return
          }
        }
    s.debugLineGroups = newValue
    val state = if (newValue) "§aON" else "§7OFF"
    player.sendMessage("§a[RC] 白線デバッグ色分け: $state")
    // プレビュー機能は無効化されているため何もしない
  }

  // ──────────────────────────────────────────────────
  // ユーティリティ
  // ──────────────────────────────────────────────────

  private fun requireWaypoints(player: Player, session: RoadSession, min: Int): Boolean {
    if (session.waypoints.size >= min) return true
    player.sendMessage("§c[RC] ${min}点以上の通過点が必要です。（現在: ${session.waypoints.size}点）")
    return false
  }

  private fun sendHelp(player: Player) {
    player.sendMessage("§e=== RoadCurve ヘルプ ===")
    player.sendMessage("§fBone§7 を持ってブロック右クリック → 通過点追加（2点目から自動プレビュー）")
    player.sendMessage("§f/rc build     §7道路ブロックを設置")
    player.sendMessage("§f/rc smoothline §7白線を階段でスムージング")
    player.sendMessage("§f/rc undo      §7最後の設置を取り消し")
    player.sendMessage("§f/rc reset     §7通過点をリセット・プレビュー停止")
    player.sendMessage("§f/rc status    §7現在の設定を表示")
    player.sendMessage("§f/rc set <param> <val> [<param> <val> ...]  §7設定変更（複数一括可・プレビュー即時反映）")
    player.sendMessage("§7  radius / transition / lane / centerline / outerline / sidewalk")
    player.sendMessage("§7  roadmat / sidewalkmat / linemat")
    player.sendMessage("§7  例: §f/rc set radius 30 lane 3 sidewalk 2")
    player.sendMessage("§f/rc version   §7現在のRoadCurveバージョンを表示")
  }

  private fun handleVersion(player: Player) {
    val version = plugin.description.version ?: "unknown"
    player.sendMessage("§a[RC] 現在の RoadCurve バージョン: §f$version")
  }

  companion object {
    private val SUBCOMMANDS =
        listOf(
            "help", "reset", "build", "smoothline", "undo", "set", "status", "debugline", "version")
    private val SET_PARAMS =
        listOf(
            "radius",
            "transition",
            "lane",
            "centerline",
            "outerline",
            "sidewalk",
            "roadmat",
            "sidewalkmat",
            "linemat")
  }
}
