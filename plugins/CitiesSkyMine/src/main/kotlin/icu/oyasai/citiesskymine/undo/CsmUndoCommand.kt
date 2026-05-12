package icu.oyasai.citiesskymine.undo

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.facade.HaussmannCommand
import icu.oyasai.citiesskymine.payload.PayloadCommand
import icu.oyasai.citiesskymine.road.IntersectionCommand
import icu.oyasai.citiesskymine.road.RoadCurveCommand
import icu.oyasai.citiesskymine.undo.CsmUndoManager.Source
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.window.WindowCommand
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class CsmUndoCommand(
    private val plugin: Main,
    private val payloadCommand: PayloadCommand,
    private val windowCommand: WindowCommand,
    private val roadCommand: RoadCurveCommand,
    private val intersectionCommand: IntersectionCommand,
    private val facadeCommand: HaussmannCommand
) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    if (!plugin.access.require(sender, CommandKey.UNDO)) return true

    val first = args.getOrNull(0)?.lowercase()
    if (first == null || first == "last") {
      undoLatest(sender)
      return true
    }
    if (first == "help") {
      showHelp(sender, label)
      return true
    }

    val source =
        Source.fromId(first)
            ?: run {
              MessageUtil.error(sender, "不明な undo 対象: $first")
              showHelp(sender, label)
              return true
            }
    undoSource(sender, source, args.getOrNull(1)?.equals("last", ignoreCase = true) == true)
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    return when (args.size) {
      1 -> (SOURCE_IDS + listOf("last", "help")).filter { it.startsWith(args[0], ignoreCase = true) }
      2 ->
          if (Source.fromId(args[0]) != null) {
            listOf("last").filter { it.startsWith(args[1], ignoreCase = true) }
          } else {
            emptyList()
          }
      else -> emptyList()
    }
  }

  private fun undoLatest(sender: CommandSender) {
    val entry =
        plugin.undoManager.peekLatest(sender)
            ?: run {
              MessageUtil.error(sender, "取り消せるCSM操作がありません。")
              return
            }
    performUndo(sender, entry.source, useLast = false)
  }

  private fun undoSource(sender: CommandSender, source: Source, useLast: Boolean) {
    performUndo(sender, source, useLast)
  }

  private fun performUndo(sender: CommandSender, source: Source, useLast: Boolean): Boolean {
    if (!requireSourcePermission(sender, source)) return false
    return when (source) {
      Source.PAYLOAD -> payloadCommand.undo(sender, useLast)
      Source.WINDOW -> {
        val player = sender as? Player ?: return playerOnly(sender)
        windowCommand.undo(player, useLast)
      }
      Source.ROAD -> {
        val player = sender as? Player ?: return playerOnly(sender)
        roadCommand.undo(player)
      }
      Source.INTERSECTION -> {
        val player = sender as? Player ?: return playerOnly(sender)
        intersectionCommand.undo(player)
      }
      Source.FACADE -> {
        val player = sender as? Player ?: return playerOnly(sender)
        facadeCommand.undo(player)
      }
    }
  }

  private fun requireSourcePermission(sender: CommandSender, source: Source): Boolean {
    val commandKey =
        when (source) {
          Source.PAYLOAD -> CommandKey.PAYLOAD
          Source.WINDOW -> CommandKey.WINDOW
          Source.ROAD -> CommandKey.ROAD
          Source.INTERSECTION -> CommandKey.INTERSECTION
          Source.FACADE -> CommandKey.FACADE
        }
    if (plugin.access.canUse(sender, commandKey)) return true
    MessageUtil.error(sender, "この undo 対象を使用する権限がありません。")
    return false
  }

  private fun playerOnly(sender: CommandSender): Boolean {
    MessageUtil.error(sender, "この undo 対象はプレイヤーから実行してください。")
    return false
  }

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Undo")
    MessageUtil.helpEntry(sender, "/$label", "自分の直近CSM操作を取り消し")
    MessageUtil.helpEntry(sender, "/$label <payload|window|road|intersection|facade>", "対象を指定して取り消し")
    MessageUtil.helpEntry(sender, "/$label payload last", "最後に保存されたpayload配置を取り消し")
  }

  companion object {
    private val SOURCE_IDS = Source.entries.map { it.id }
  }
}
