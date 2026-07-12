package icu.oyasai.citiesskymine.road

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.shared.ArgSuggest
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
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
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "プレイヤーのみ使用できます。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.ROAD)) return true
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
      "undo" -> MessageUtil.warn(player, "[RC] 取り消しは FAWE の //undo を使ってください。")
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
      args: Array<out String>,
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
      "radius" ->
          ArgSuggest.filterSuggestions(
              ArgSuggest.positional("radius", "1.0-100.0", listOf("10.0", "20.0", "30.0", "50.0")),
              prefix,
          )
      "transition" ->
          ArgSuggest.filterSuggestions(
              ArgSuggest.positional(
                  "transition",
                  "1.0-50.0",
                  listOf("5.0", "10.0", "15.0", "20.0"),
              ),
              prefix,
          )
      "lane" ->
          ArgSuggest.filterSuggestions(
              ArgSuggest.positional("lane", "2-6", listOf("2", "3", "4", "5", "6")),
              prefix,
          )
      "centerline" ->
          ArgSuggest.filterSuggestions(
              ArgSuggest.positional("centerline", "0-4", listOf("1", "2")),
              prefix,
          )
      "outerline" ->
          ArgSuggest.filterSuggestions(
              ArgSuggest.positional("outerline", "0-4", listOf("1", "2")),
              prefix,
          )
      "sidewalk" ->
          ArgSuggest.filterSuggestions(
              ArgSuggest.positional("sidewalk", "0-10", listOf("1", "2", "3", "4")),
              prefix,
          )
      else -> emptyList()
    }
  }

  // ──────────────────────────────────────────────────
  // サブコマンド実装
  // ──────────────────────────────────────────────────

  private fun handleReset(player: Player, session: RoadSession) {
    plugin.stopPreview(player)
    session.waypoints.clear()
    MessageUtil.success(player, "[RC] 選択点をリセットしました。")
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
      MessageUtil.error(player, "[RC] パスを計算できませんでした。")
      return
    }

    MessageUtil.success(player, "[RC] 道路を生成中…（${path.size} サンプル点）")
    val world = player.world
    val buildPath = path.toList()
    val buildSettings = session.settings.copy()

    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          try {
            val result =
                CsmEditSession.run(world, player, plugin.logger) { editSession ->
                  RoadBuilder.buildInto(editSession, buildPath, buildSettings)
                  true
                }
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  if (result.undoRecorded) {
                    MessageUtil.success(player, "[RC] 道路の設置が完了しました。")
                    MessageUtil.info(player, "FAWE の //undo でこの道路生成を取り消せます。")
                  } else {
                    MessageUtil.warn(player, "[RC] 道路の設置は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
                  }
                },
            )
          } catch (e: Exception) {
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  MessageUtil.error(player, "[RC] エラーが発生しました: ${e.message}")
                  plugin.logger.severe("RoadBuilder error: ${e.stackTraceToString()}")
                },
            )
          }
        },
    )
  }

  private fun handleSmoothLines(player: Player, session: RoadSession) {
    if (!requireWaypoints(player, session, 2)) return
    if (session.settings.lineMaterial.createBlockData() !is Stairs) {
      MessageUtil.error(player, "[RC] 白線素材に階段ブロックを設定してください。")
      return
    }
    val path =
        session.cachedPath.ifEmpty { RoadGeometry.computePath(session.waypoints, session.settings) }
    if (path.isEmpty()) {
      MessageUtil.error(player, "[RC] パスを計算できませんでした。")
      return
    }

    MessageUtil.success(player, "[RC] 白線スムージングを実行中…（${path.size} サンプル点）")
    val world = player.world
    val smoothPath = path.toList()
    val smoothSettings = session.settings.copy()

    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          try {
            var affectedBlocks = 0
            val result =
                CsmEditSession.run(world, player, plugin.logger) { editSession ->
                  val smoothResult =
                      WhiteLineSmoother.smooth(editSession, smoothPath, smoothSettings)
                  affectedBlocks = smoothResult.affectedBlocks
                  affectedBlocks > 0
                }
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  MessageUtil.success(player, "[RC] 白線スムージング完了: ${affectedBlocks} ブロック")
                  if (result.undoRecorded) {
                    MessageUtil.info(player, "FAWE の //undo でこの白線スムージングを取り消せます。")
                  } else if (!result.changed) {
                    MessageUtil.info(player, "変更対象はありませんでした。")
                  } else {
                    MessageUtil.warn(player, "白線スムージングは完了しましたが、FAWE undo 履歴への登録に失敗しました。")
                  }
                },
            )
          } catch (e: IllegalArgumentException) {
            plugin.server.scheduler.runTask(
                plugin,
                Runnable { MessageUtil.error(player, "[RC] ${e.message}") },
            )
          } catch (e: Exception) {
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  MessageUtil.error(player, "[RC] 白線スムージング中にエラー: ${e.message}")
                  plugin.logger.severe("WhiteLineSmoother error: ${e.stackTraceToString()}")
                },
            )
          }
        },
    )
  }

  private fun handleSet(player: Player, session: RoadSession, args: Array<out String>) {
    // args: set param1 val1 [param2 val2 ...]
    if (args.size < 3 || (args.size - 1) % 2 != 0) {
      MessageUtil.error(
          player,
          "使い方: /rc set &lt;パラメータ&gt; &lt;値&gt; [&lt;パラメータ&gt; &lt;値&gt; ...]",
      )
      MessageUtil.send(player, "<gray>  ${SET_PARAMS.joinToString(" / ")}</gray>")
      return
    }
    val s = session.settings
    var i = 1
    while (i < args.size) {
      if (!applyOneSetting(player, s, args[i], args[i + 1])) return
      i += 2
    }
    plugin.saveRoadSettings(player, s)
    // 設定変更をプレビューに即時反映
    plugin.updatePreview(player)
  }

  /** 単一パラメータを適用する。失敗時はエラーメッセージを送信して false を返す。 */
  private fun applyOneSetting(
      player: Player,
      s: RoadSettings,
      param: String,
      value: String,
  ): Boolean {
    if (ArgSuggest.isPlaceholder(value)) {
      MessageUtil.error(player, "無効な引数です。数値を入力してください: $value")
      return false
    }
    try {
      when (param.lowercase()) {
        "radius" -> {
          s.radius = value.toDouble()
          MessageUtil.success(player, "[RC] 半径: ${s.radius} ブロック")
        }
        "transition" -> {
          s.transitionLength = value.toDouble()
          MessageUtil.success(player, "[RC] 緩和曲線長: ${s.transitionLength} ブロック")
        }
        "lane" -> {
          s.laneWidth = value.toInt()
          MessageUtil.success(player, "[RC] 車道幅: ${s.laneWidth} ブロック")
        }
        "centerline" -> {
          s.centerLineWidth = value.toInt()
          MessageUtil.success(player, "[RC] 中央白線幅: ${s.centerLineWidth} ブロック")
        }
        "outerline" -> {
          s.outerLineWidth = value.toInt()
          MessageUtil.success(player, "[RC] 外縁白線幅: ${s.outerLineWidth} ブロック")
        }
        "sidewalk" -> {
          s.sidewalkWidth = value.toInt()
          MessageUtil.success(player, "[RC] 歩道幅: ${s.sidewalkWidth} ブロック")
        }
        "roadmat" -> {
          val mat =
              Material.matchMaterial(value)
                  ?: run {
                    MessageUtil.error(player, "不明な素材: $value")
                    return false
                  }
          s.roadMaterial = mat
          MessageUtil.success(player, "[RC] 車道素材: ${mat.key}")
        }
        "sidewalkmat" -> {
          val mat =
              Material.matchMaterial(value)
                  ?: run {
                    MessageUtil.error(player, "不明な素材: $value")
                    return false
                  }
          s.sidewalkMaterial = mat
          MessageUtil.success(player, "[RC] 歩道素材: ${mat.key}")
        }
        "linemat" -> {
          val mat =
              Material.matchMaterial(value)
                  ?: run {
                    MessageUtil.error(player, "不明な素材: $value")
                    return false
                  }
          s.lineMaterial = mat
          MessageUtil.success(player, "[RC] 白線素材: ${mat.key}")
        }
        else -> {
          MessageUtil.error(player, "不明なパラメータ: $param")
          return false
        }
      }
    } catch (e: NumberFormatException) {
      MessageUtil.error(player, "数値が無効です: $value")
      return false
    }
    return true
  }

  private fun handleStatus(player: Player, session: RoadSession) {
    val s = session.settings
    val previewState = if (session.previewTask != null) "<green>表示中</green>" else "<gray>停止中</gray>"
    MessageUtil.header(player, "RoadCurve 設定")
    MessageUtil.send(
        player,
        "<gray>通過点数:     <white>${session.waypoints.size}</white>  プレビュー: $previewState</gray>",
    )
    MessageUtil.send(player, "<gray>半径:         <white>${s.radius}</white> ブロック</gray>")
    MessageUtil.send(player, "<gray>緩和曲線長:   <white>${s.transitionLength}</white> ブロック</gray>")
    MessageUtil.send(player, "<gray>車道幅(片側): <white>${s.laneWidth}</white> ブロック</gray>")
    MessageUtil.send(player, "<gray>中央白線幅:   <white>${s.centerLineWidth}</white> ブロック</gray>")
    MessageUtil.send(player, "<gray>外縁白線幅:   <white>${s.outerLineWidth}</white> ブロック</gray>")
    MessageUtil.send(player, "<gray>歩道幅:       <white>${s.sidewalkWidth}</white> ブロック</gray>")
    MessageUtil.send(player, "<gray>車道素材:     <white>${s.roadMaterial.key}</white></gray>")
    MessageUtil.send(player, "<gray>歩道素材:     <white>${s.sidewalkMaterial.key}</white></gray>")
    val debugFlag = if (s.debugLineGroups) "<green>ON</green>" else "<gray>OFF</gray>"
    MessageUtil.send(
        player,
        "<gray>白線素材:     <white>${s.lineMaterial.key}</white>  デバッグ色分け: $debugFlag</gray>",
    )
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
            MessageUtil.error(player, "[RC] 使用法: /rc debugline [on|off|toggle]")
            return
          }
        }
    s.debugLineGroups = newValue
    plugin.saveRoadSettings(player, s)
    val state = if (newValue) "ON" else "OFF"
    MessageUtil.success(player, "[RC] 白線デバッグ色分け: $state")
    // プレビュー機能は無効化されているため何もしない
  }

  // ──────────────────────────────────────────────────
  // ユーティリティ
  // ──────────────────────────────────────────────────

  private fun requireWaypoints(player: Player, session: RoadSession, min: Int): Boolean {
    if (session.waypoints.size >= min) return true
    MessageUtil.error(player, "[RC] ${min}点以上の通過点が必要です。（現在: ${session.waypoints.size}点）")
    return false
  }

  private fun sendHelp(player: Player) {
    MessageUtil.header(player, "RoadCurve ヘルプ")
    MessageUtil.send(player, "<white>Bone</white><gray> を持ってブロック右クリック → 通過点追加（2点目から自動プレビュー）</gray>")
    MessageUtil.helpEntry(player, "/rc build", "道路ブロックを設置")
    MessageUtil.helpEntry(player, "/rc smoothline", "白線を階段でスムージング")
    MessageUtil.helpEntry(player, "//undo", "最後の道路生成をFAWEで取り消し")
    MessageUtil.helpEntry(player, "/rc reset", "通過点をリセット・プレビュー停止")
    MessageUtil.helpEntry(player, "/rc status", "現在の設定を表示")
    MessageUtil.helpEntry(
        player,
        "/rc set &lt;param&gt; &lt;val&gt; [&lt;param&gt; &lt;val&gt; ...]",
        "設定変更（複数一括可・プレビュー即時反映）",
    )
    MessageUtil.send(
        player,
        "<gray>  radius / transition / lane / centerline / outerline / sidewalk</gray>",
    )
    MessageUtil.send(player, "<gray>  roadmat / sidewalkmat / linemat</gray>")
    MessageUtil.send(player, "<gray>  例: <white>/rc set radius 30 lane 3 sidewalk 2</white></gray>")
    MessageUtil.helpEntry(player, "/rc version", "現在のRoadCurveバージョンを表示")
  }

  private fun handleVersion(player: Player) {
    val version = plugin.description.version ?: "unknown"
    MessageUtil.success(player, "[RC] 現在の RoadCurve バージョン: $version")
  }

  companion object {
    private val SUBCOMMANDS =
        listOf("help", "reset", "build", "smoothline", "set", "status", "debugline", "version")
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
            "linemat",
        )
  }
}
