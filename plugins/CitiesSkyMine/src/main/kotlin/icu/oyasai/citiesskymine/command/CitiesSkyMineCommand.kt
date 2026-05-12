package icu.oyasai.citiesskymine.command

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.debugstick.DebugStickCommand
import icu.oyasai.citiesskymine.facade.HaussmannCommand
import icu.oyasai.citiesskymine.payload.PayloadCommand
import icu.oyasai.citiesskymine.preset.BrushPresetCommand
import icu.oyasai.citiesskymine.road.IntersectionCommand
import icu.oyasai.citiesskymine.road.RoadCurveCommand
import icu.oyasai.citiesskymine.undo.CsmUndoCommand
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.window.WindowCommand
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

class CitiesSkyMineCommand(
    private val plugin: Main,
    private val roadCommand: RoadCurveCommand,
    private val intersectionCommand: IntersectionCommand,
    private val facadeCommand: HaussmannCommand,
    private val payloadCommand: PayloadCommand,
    private val windowCommand: WindowCommand,
    private val debugStickCommand: DebugStickCommand,
    private val brushPresetCommand: BrushPresetCommand,
    private val undoCommand: CsmUndoCommand
) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    val sub = args.getOrNull(0)?.lowercase()
    return when (sub) {
      null,
      "help" -> {
        showHelp(sender)
        true
      }
      "version",
      "ver" -> {
        MessageUtil.info(
            sender, "CitiesSkyMine version: <white>${plugin.description.version}</white>")
        true
      }
      "info" -> {
        showInfo(sender)
        true
      }
      "reload" -> {
        if (!requireAccess(sender, CommandKey.RELOAD)) return true
        plugin.reloadConfig()
        MessageUtil.success(sender, "設定をリロードしました。")
        true
      }
      "road" -> {
        if (!requireAccess(sender, CommandKey.ROAD)) return true
        roadCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "intersection" -> {
        if (!requireAccess(sender, CommandKey.INTERSECTION)) return true
        intersectionCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "facade" -> {
        if (!requireAccess(sender, CommandKey.FACADE)) return true
        facadeCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "payload" -> {
        if (!requireAccess(sender, CommandKey.PAYLOAD)) return true
        payloadCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "load" -> {
        if (!requireAccess(sender, CommandKey.LOAD)) return true
        payloadCommand.onCommand(sender, command, label, args)
      }
      "load64" -> {
        if (!requireAccess(sender, CommandKey.LOAD64)) return true
        payloadCommand.onCommand(sender, command, label, args)
      }
      "undo" -> {
        if (!requireAccess(sender, CommandKey.UNDO)) return true
        undoCommand.onCommand(sender, command, "$label undo", args.drop(1).toTypedArray())
      }
      "window" -> {
        if (!requireAccess(sender, CommandKey.WINDOW)) return true
        windowCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "debugstick" -> {
        if (!requireAccess(sender, CommandKey.DEBUGSTICK)) return true
        debugStickCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "preset" -> {
        if (!requireAccess(sender, CommandKey.PRESET)) return true
        brushPresetCommand.onCommand(sender, command, "$label preset", args.drop(1).toTypedArray())
      }
      else -> {
        MessageUtil.error(sender, "不明なサブコマンド: $sub")
        showHelp(sender)
        true
      }
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    if (args.isEmpty()) return emptyList()
    if (args.size == 1) {
      return ROOT_SUBCOMMANDS.filter { it.startsWith(args[0], ignoreCase = true) }
    }

    val childArgs = args.drop(1).toTypedArray()
    return when (args[0].lowercase()) {
      "road" -> roadCommand.onTabComplete(sender, command, alias, childArgs)
      "intersection" -> intersectionCommand.onTabComplete(sender, command, alias, childArgs)
      "facade" -> facadeCommand.onTabComplete(sender, command, alias, childArgs)
      "payload" -> payloadCommand.onTabComplete(sender, command, alias, childArgs)
      "load",
      "load64" -> payloadCommand.onTabComplete(sender, command, alias, args)
      "undo" -> undoCommand.onTabComplete(sender, command, "$alias undo", childArgs)
      "window" -> windowCommand.onTabComplete(sender, command, alias, childArgs)
      "debugstick" -> debugStickCommand.onTabComplete(sender, command, alias, childArgs)
      "preset" -> brushPresetCommand.onTabComplete(sender, command, "$alias preset", childArgs)
      else -> emptyList()
    }
  }

  private fun showHelp(sender: CommandSender) {
    MessageUtil.header(sender, "CitiesSkyMine")
    MessageUtil.helpEntry(sender, "/csm road <...>", "道路カーブを生成")
    MessageUtil.helpEntry(sender, "/csm intersection <...>", "交差点を生成")
    MessageUtil.helpEntry(sender, "/csm facade <...>", "ファサードを生成")
    MessageUtil.helpEntry(sender, "/csm payload load <payload> [0-3] [L|R]", "payloadをFAWEで配置")
    MessageUtil.helpEntry(sender, "/csm undo [payload|window|road|intersection|facade]", "直近のCSM操作を取り消し")
    MessageUtil.helpEntry(sender, "/csm payload undo [last]", "payload配置を復元")
    MessageUtil.helpEntry(
        sender, "/csm window [width] [height] [frame] [glass] [backing]", "正面方向に窓を生成")
    MessageUtil.helpEntry(sender, "/csm debugstick <select|cycle>", "BlockDataをデバッグ棒相当に変更")
    MessageUtil.helpEntry(sender, "/csm preset <save|load|list|delete|名前>", "ブラシプリセットを管理")
    MessageUtil.helpEntry(sender, "/csm reload", "設定をリロード")
    MessageUtil.send(
        sender,
        "<gray>Shortcuts: /.rc, /.ri, /.hb, /.pl, /.win, /.ds, /.brp, /.undo</gray>")
  }

  private fun showInfo(sender: CommandSender) {
    val faweVersion =
        plugin.server.pluginManager.getPlugin("FastAsyncWorldEdit")?.description?.version ?: "未検出"
    MessageUtil.header(sender, "統合状況")
    MessageUtil.info(sender, "FAWE: <white>$faweVersion</white>")
  }

  private fun requireAccess(sender: CommandSender, command: CommandKey): Boolean =
      plugin.access.require(sender, command)

  companion object {
    private val ROOT_SUBCOMMANDS =
        listOf(
            "help",
            "version",
            "info",
            "reload",
            "road",
            "intersection",
            "facade",
            "payload",
            "load",
            "load64",
            "undo",
            "window",
            "debugstick",
            "preset")
  }
}
