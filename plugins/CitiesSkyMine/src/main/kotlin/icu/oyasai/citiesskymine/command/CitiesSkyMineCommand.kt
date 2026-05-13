package icu.oyasai.citiesskymine.command

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.config.ConfigGuiCommand
import icu.oyasai.citiesskymine.debugstick.DebugStickCommand
import icu.oyasai.citiesskymine.facade.HaussmannCommand
import icu.oyasai.citiesskymine.payload.PayloadCommand
import icu.oyasai.citiesskymine.preset.BrushPresetCommand
import icu.oyasai.citiesskymine.road.IntersectionCommand
import icu.oyasai.citiesskymine.road.RoadCurveCommand
import icu.oyasai.citiesskymine.selection.SelectionCommand
import icu.oyasai.citiesskymine.slabstairs.SlabStairsCommand
import icu.oyasai.citiesskymine.stack.StackCommand
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
    private val slabStairsCommand: SlabStairsCommand,
    private val stackCommand: StackCommand,
    private val selectionCommand: SelectionCommand,
    private val configCommand: ConfigGuiCommand,
    private val debugStickCommand: DebugStickCommand,
    private val brushPresetCommand: BrushPresetCommand
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
      "window" -> {
        if (!requireAccess(sender, CommandKey.WINDOW)) return true
        windowCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "slabstairs",
      "slab-stairs",
      "ss" -> {
        if (!requireAccess(sender, CommandKey.SLAB_STAIRS)) return true
        slabStairsCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "stack",
      "ns" -> {
        if (!requireAccess(sender, CommandKey.STACK)) return true
        stackCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "selection",
      "sel" -> {
        if (!requireAccess(sender, CommandKey.SELECTION)) return true
        selectionCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
      }
      "config",
      "cf" -> {
        if (!requireAccess(sender, CommandKey.CONFIG)) return true
        configCommand.onCommand(sender, command, label, args.drop(1).toTypedArray())
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
      "window" -> windowCommand.onTabComplete(sender, command, alias, childArgs)
      "slabstairs",
      "slab-stairs",
      "ss" -> slabStairsCommand.onTabComplete(sender, command, alias, childArgs)
      "stack",
      "ns" -> stackCommand.onTabComplete(sender, command, alias, childArgs)
      "selection",
      "sel" -> selectionCommand.onTabComplete(sender, command, alias, childArgs)
      "config",
      "cf" -> configCommand.onTabComplete(sender, command, alias, childArgs)
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
    MessageUtil.helpEntry(sender, "//undo", "直近のFAWE対応CSM生成を取り消し")
    MessageUtil.helpEntry(
        sender, "/csm window [width] [height] [frame] [glass] [backing]", "正面方向に窓を生成")
    MessageUtil.helpEntry(
        sender, "/csm slabstairs [build] [slab] [stair] [full]", "WorldEdit選択範囲に階段を生成。取り消しは //undo")
    MessageUtil.helpEntry(
        sender, "/csm stack <forward|back|left|right|up|down...> <times>", "選択範囲を視点基準で複製")
    MessageUtil.helpEntry(sender, "/csm selection <save|list|p|name>", "WorldEdit選択範囲を保存・復元")
    MessageUtil.helpEntry(sender, "/csm config", "個人設定GUIを開く")
    MessageUtil.helpEntry(sender, "/csm debugstick <select|cycle>", "BlockDataをデバッグ棒相当に変更")
    MessageUtil.helpEntry(sender, "/csm preset <save|load|list|delete|名前>", "ブラシプリセットを管理")
    MessageUtil.helpEntry(sender, "/csm reload", "設定をリロード")
    MessageUtil.send(
        sender,
        "<gray>Shortcuts: /.rc, /.ri, /.hb, /.pl, /.win, /.ss, /.ns, /.sel, /.cf, /.ds, /.brp</gray>")
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
            "window",
            "slabstairs",
            "stack",
            "selection",
            "config",
            "debugstick",
            "preset")
  }
}
