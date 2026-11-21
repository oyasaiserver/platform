package icu.oyasai.citiesskymine.facade

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.shared.ArgSuggest
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

    val schemFile = resolveSchemFile(player, args.getOrNull(3)) ?: return

    if (!schemFile.isFile) {
      MessageUtil.error(player, "ファイルが見つかりません: ${schemFile.name}")
      MessageUtil.send(
          player,
          "<gray>plugins/${plugin.name}/fasard.schem に配置してください</gray>",
      )
      return
    }
    val maxFileBytes = plugin.config.getLong("limits.max-schematic-file-bytes", 10L * 1024L * 1024L)
    if (maxFileBytes > 0 && schemFile.length() > maxFileBytes) {
      MessageUtil.error(
          player,
          "スキマティックファイルが上限 ($maxFileBytes bytes) を超えています: ${schemFile.length()}",
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

  private fun resolveSchemFile(player: Player, fileArg: String?): File? {
    val baseDir = plugin.dataFolder.canonicalFile
    val basePath = baseDir.toPath()
    if (fileArg == null) {
      return File(baseDir, "fasard.schem")
    }
    if (
        fileArg.isBlank() ||
            fileArg.contains("..") ||
            fileArg.contains('/') ||
            fileArg.contains('\\') ||
            fileArg.contains(':') ||
            File(fileArg).isAbsolute ||
            !SCHEM_FILE_NAME.matches(fileArg)
    ) {
      MessageUtil.error(
          player,
          "無効なファイル名です。プラグインフォルダ直下の .schem / .schematic ファイル名のみ指定できます。",
      )
      return null
    }
    val canonical =
        try {
          File(baseDir, fileArg).canonicalFile
        } catch (_: Exception) {
          MessageUtil.error(player, "ファイルパスを解決できません。")
          return null
        }
    if (!canonical.toPath().startsWith(basePath)) {
      MessageUtil.error(player, "許可されていないファイルパスです。")
      return null
    }
    return canonical
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
            "build" ->
                ArgSuggest.filterSuggestions(
                    ArgSuggest.positional(
                        "bays",
                        "2-12",
                        listOf("2", "3", "4", "5", "6", "8", "10"),
                    ),
                    args.last(),
                )
            "schem" ->
                ArgSuggest.filterSuggestions(
                    ArgSuggest.positional(
                        "bays",
                        "2-12",
                        listOf("full", "2", "3", "4", "5", "6", "8", "10", "12"),
                    ),
                    args.last(),
                )
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

  companion object {
    private val SCHEM_FILE_NAME = Regex("[A-Za-z0-9][A-Za-z0-9_.-]{0,127}\\.(?i:schem|schematic)")
  }
}
