package icu.oyasai.citiesskymine.road

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import kotlin.math.round
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class IntersectionCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§cプレイヤーのみ使用できます。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.INTERSECTION)) return true
    val player = sender
    val session = plugin.getIntersectionSession(player)

    if (args.isEmpty()) {
      sendHelp(player)
      return true
    }

    when (args[0].lowercase()) {
      "help" -> sendHelp(player)
      "here" -> handleHere(player, session)
      "set" -> handleSet(player, session, args)
      "build" -> handleBuild(player, session)
      "undo" -> player.sendMessage("§e[RI] 取り消しは FAWE の //undo を使ってください。")
      "status" -> handleStatus(player, session)
      else -> sendHelp(player)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (sender !is Player) return emptyList()
    if (args.size == 1) return SUBCOMMANDS.filter { it.startsWith(args[0].lowercase()) }
    if (args[0].lowercase() == "set") {
      val offset = args.size - 1
      return if (offset % 2 == 1) {
        SET_PARAMS.filter { it.startsWith(args.last().lowercase()) }
      } else {
        tabCompleteValue(args[args.size - 2].lowercase(), args.last())
      }
    }
    return emptyList()
  }

  private fun tabCompleteValue(param: String, prefix: String): List<String> =
      when (param) {
        "arms" -> listOf("3", "4", "5", "6").filter { it.startsWith(prefix) }
        "armlength" -> listOf("8", "12", "16", "24", "32").filter { it.startsWith(prefix) }
        "cornerradius" -> listOf("0", "2", "3", "4", "6", "8").filter { it.startsWith(prefix) }
        "rotation" ->
            listOf("0", "45", "90", "135", "180", "225", "270", "315").filter {
              it.startsWith(prefix)
            }
        else -> emptyList()
      }

  // ──────────────────────────────────────────────────
  // サブコマンド
  // ──────────────────────────────────────────────────

  /** 現在のブロック座標を交差点中心として記録し、プレビューを開始する */
  private fun handleHere(player: Player, session: IntersectionSession) {
    val loc = player.location
    // ブロック座標にスナップ（プレイヤーの足元ブロックが中心）
    session.center =
        Location(loc.world, loc.blockX.toDouble(), loc.blockY.toDouble(), loc.blockZ.toDouble())
    // プレイヤーの向きを 45° スナップして最初の腕方向に使う
    session.rotationDeg = round(loc.yaw.toDouble() / 45.0) * 45.0
    plugin.saveIntersectionSettings(player, session)
    player.sendMessage("§a[RI] 交差点中心を §f(${loc.blockX}, ${loc.blockY}, ${loc.blockZ}) §aに設定しました。")
    player.sendMessage(
        "§7向き: §f${session.rotationDeg.toInt()}°スナップ  腕数: §f${session.arms}  " +
            "長さ: §f${session.armLength}  コーナー: §f${session.cornerRadius}"
    )
    plugin.updateIntersectionPreview(player)
  }

  /** 設定を一括変更（/ri set param1 val1 [param2 val2 ...] ） */
  private fun handleSet(player: Player, session: IntersectionSession, args: Array<out String>) {
    if (args.size < 3 || (args.size - 1) % 2 != 0) {
      player.sendMessage("§c使い方: /ri set <パラメータ> <値> [<パラメータ> <値> ...]")
      player.sendMessage("§7  ${SET_PARAMS.joinToString(" / ")}")
      return
    }
    var i = 1
    while (i < args.size) {
      if (!applyOne(player, session, args[i], args[i + 1])) return
      i += 2
    }
    plugin.saveIntersectionSettings(player, session)
    plugin.updateIntersectionPreview(player)
  }

  private fun applyOne(
      player: Player,
      session: IntersectionSession,
      param: String,
      value: String,
  ): Boolean {
    try {
      when (param.lowercase()) {
        "arms" -> {
          session.arms = value.toInt().coerceIn(3, 6)
          player.sendMessage("§a[RI] 腕数: §f${session.arms}")
        }
        "armlength" -> {
          session.armLength = value.toInt().coerceAtLeast(2)
          player.sendMessage("§a[RI] 腕の長さ: §f${session.armLength} ブロック")
        }
        "cornerradius" -> {
          session.cornerRadius = value.toInt().coerceAtLeast(0)
          player.sendMessage("§a[RI] コーナー半径: §f${session.cornerRadius} ブロック")
        }
        "rotation" -> {
          session.rotationDeg = value.toDouble()
          player.sendMessage("§a[RI] 回転: §f${session.rotationDeg}°")
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

  private fun handleBuild(player: Player, session: IntersectionSession) {
    val center =
        session.center
            ?: run {
              player.sendMessage("§c[RI] まず §f/ri here §cで交差点の中心を設定してください。")
              return
            }
    val roadSettings = plugin.getSession(player).settings.copy()
    val buildSession = snapshot(session)
    player.sendMessage("§a[RI] 交差点を生成中…")
    val world = player.world
    val buildCenter = center.clone()

    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          try {
            val result =
                CsmEditSession.run(world, player, plugin.logger) { editSession ->
                  IntersectionBuilder.buildInto(
                      editSession,
                      world,
                      buildCenter,
                      buildSession,
                      roadSettings,
                  )
                  true
                }
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  if (result.undoRecorded) {
                    player.sendMessage("§a[RI] 交差点の設置が完了しました。§7//undo で取り消せます。")
                  } else {
                    player.sendMessage("§e[RI] 交差点の設置は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
                  }
                },
            )
          } catch (e: Exception) {
            plugin.server.scheduler.runTask(
                plugin,
                Runnable {
                  player.sendMessage("§c[RI] エラーが発生しました: ${e.message}")
                  plugin.logger.severe("IntersectionBuilder error: ${e.stackTraceToString()}")
                },
            )
          }
        },
    )
  }

  private fun snapshot(session: IntersectionSession): IntersectionSession =
      IntersectionSession().also {
        it.arms = session.arms
        it.armLength = session.armLength
        it.cornerRadius = session.cornerRadius
        it.rotationDeg = session.rotationDeg
        it.center = session.center?.clone()
      }

  private fun handleStatus(player: Player, session: IntersectionSession) {
    val s = plugin.getSession(player).settings
    val cHW = (s.centerLineWidth + 1) / 2
    val totalHW = cHW + s.laneWidth + s.outerLineWidth + s.sidewalkWidth
    val previewState = if (session.previewTask != null) "§a表示中" else "§7停止中"
    player.sendMessage("§e=== Intersection 設定 ===")
    player.sendMessage("§7腕数:           §f${session.arms}")
    player.sendMessage("§7腕の長さ:       §f${session.armLength} ブロック")
    player.sendMessage("§7コーナー半径:   §f${session.cornerRadius} ブロック")
    player.sendMessage("§7回転:           §f${session.rotationDeg.toInt()}°")
    player.sendMessage("§7道路半幅:       §f$totalHW ブロック  §8（/rc で変更）")
    val c = session.center
    player.sendMessage(
        "§7中心:           §f${if (c != null) "(${c.blockX}, ${c.blockY}, ${c.blockZ})" else "未設定"}"
    )
    player.sendMessage("§7プレビュー:     $previewState")
  }

  private fun sendHelp(player: Player) {
    player.sendMessage("§e=== Intersection ヘルプ ===")
    player.sendMessage("§f/ri here                 §7足元ブロックを交差点中心に設定・プレビュー開始")
    player.sendMessage("§f/ri set arms <3-6>       §7腕の数（3=Y字, 4=十字, 5=五叉路…）")
    player.sendMessage("§f/ri set armlength <n>    §7腕の長さ（ブロック）")
    player.sendMessage("§f/ri set cornerradius <n> §7コーナーの丸め量")
    player.sendMessage("§f/ri set rotation <deg>   §7全体を手動回転（度）")
    player.sendMessage("§f/ri build                §7交差点ブロックを設置")
    player.sendMessage("§f//undo                   §7最後の交差点生成をFAWEで取り消し")
    player.sendMessage("§f/ri status               §7現在の設定を表示")
    player.sendMessage("§8道幅・歩道幅・素材は /rc set の設定を共有します。")
  }

  companion object {
    private val SUBCOMMANDS = listOf("help", "here", "set", "build", "status")
    private val SET_PARAMS = listOf("arms", "armlength", "cornerradius", "rotation")
  }
}
