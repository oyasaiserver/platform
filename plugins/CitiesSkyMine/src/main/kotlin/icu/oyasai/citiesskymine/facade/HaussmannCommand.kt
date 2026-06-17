package icu.oyasai.citiesskymine.facade

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import java.io.File
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class HaussmannCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "プレイヤーのみ使用可能です")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.FACADE)) return true
    when (args.getOrNull(0)?.lowercase()) {
      "build" -> doBuild(sender, args)
      "schem" -> doSchem(sender, args)
      "undo" -> MessageUtil.warn(sender, "取り消しは FAWE の //undo を使ってください。")
      else -> showHelp(sender)
    }
    return true
  }

  // ── /hb build [bays] [palette] ────────────────────────────────────────

  private fun doBuild(player: Player, args: Array<out String>) {
    val bays = args.getOrNull(1)?.toIntOrNull()?.coerceIn(1, 40) ?: 4
    val palette = FacadePalette.from(args.getOrNull(2) ?: "cream")
    MessageUtil.send(player, "<gray>プロシージャル生成中... (${bays}ベイ, ${palette.id})</gray>")
    val result =
        try {
          CsmEditSession.run(player, plugin.logger) { editSession ->
            FacadeGenerator.generateInto(player, editSession, bays, palette)
          }
        } catch (e: Exception) {
          MessageUtil.error(player, "生成に失敗しました: ${e.message}")
          return
        }
    if (result.changed) {
      sendUndoResult(player, result.undoRecorded, "生成")
    }
  }

  // ── /hb schem <bays|full> [pattern] [file] ───────────────────────────

  private fun doSchem(player: Player, args: Array<out String>) {
    val sub = args.getOrNull(1)?.lowercase() ?: "full"

    // Resolve schematic file: 3rd arg as absolute path, else data folder
    val fileArg = args.getOrNull(3)
    val schemFile =
        if (fileArg != null) {
          File(fileArg)
        } else {
          File(plugin.dataFolder, "fasard.schem").takeIf { it.exists() }
              ?: File("/Users/aa/Downloads/fasard.schem") // dev fallback
        }

    if (!schemFile.exists()) {
      MessageUtil.error(player, "ファイルが見つかりません: ${schemFile.absolutePath}")
      MessageUtil.send(
          player,
          "<gray>${plugin.dataFolder.absolutePath}/fasard.schem に配置してください</gray>",
      )
      return
    }

    if (sub == "full") {
      MessageUtil.send(player, "<gray>スキマティック全体を貼り付け中...</gray>")
      val result =
          try {
            CsmEditSession.run(player, plugin.logger) { editSession ->
              SchematicFacadeGenerator.pasteFullInto(player, editSession, schemFile)
            }
          } catch (e: Exception) {
            MessageUtil.error(player, "貼り付けに失敗しました: ${e.message}")
            return
          }
      if (result.changed) {
        sendUndoResult(player, result.undoRecorded, "貼り付け")
      }
      return
    }

    val bays = sub.toIntOrNull()?.coerceIn(1, 60) ?: 4
    val pattern = args.getOrNull(2)?.lowercase() ?: "regular"
    MessageUtil.send(player, "<gray>スキマティック生成中... (${bays}ベイ, パターン:${pattern})</gray>")
    val result =
        try {
          CsmEditSession.run(player, plugin.logger) { editSession ->
            SchematicFacadeGenerator.generateInto(player, editSession, schemFile, bays, pattern)
          }
        } catch (e: Exception) {
          MessageUtil.error(player, "生成に失敗しました: ${e.message}")
          return
        }
    if (result.changed) {
      sendUndoResult(player, result.undoRecorded, "生成")
    }
  }

  private fun sendUndoResult(player: Player, undoRecorded: Boolean, label: String) {
    if (undoRecorded) {
      MessageUtil.success(player, "${label}完了！")
      MessageUtil.info(player, "FAWE の //undo で取り消せます。")
    } else {
      MessageUtil.warn(player, "${label}は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }
  }

  // ── help ─────────────────────────────────────────────────────────────

  private fun showHelp(sender: CommandSender) {
    MessageUtil.header(sender, "Haussmann Facade Generator")
    MessageUtil.helpEntry(
        sender,
        "/hb build [ベイ数=4] [palette=cream|grey|brown|red]",
        "プロシージャルにファサードを生成",
    )
    MessageUtil.helpEntry(sender, "/hb schem full", "スキマティック全体を1棟貼り付け")
    MessageUtil.helpEntry(
        sender,
        "/hb schem &lt;ベイ数&gt; [pattern] [ファイルパス]",
        "pattern: regular(3幅) / wide(4幅) / grand(4幅左)",
    )
    MessageUtil.helpEntry(sender, "//undo", "直前の生成をFAWEで取り消す")
  }

  // ── tab complete ──────────────────────────────────────────────────────

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): List<String> {
    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""
    return when (args.size) {
      1 -> listOf("build", "schem", "help").filter { it.startsWith(a0) }
      2 ->
          when (a0) {
            "build" -> listOf("2", "3", "4", "5", "6", "8", "10")
            "schem" -> listOf("full", "2", "3", "4", "5", "6", "8", "10", "12")
            else -> emptyList()
          }
      3 ->
          when {
            a0 == "build" -> FacadePalette.values().map { it.id }.filter { it.startsWith(a1) }
            a0 == "schem" && a1 != "full" -> SchematicFacadeGenerator.patternIds
            else -> emptyList()
          }
      else -> emptyList()
    }
  }
}
