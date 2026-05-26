package icu.oyasai.citiesskymine.facade

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
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
      sender.sendMessage("§cプレイヤーのみ使用可能です")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.FACADE)) return true
    when (args.getOrNull(0)?.lowercase()) {
      "build" -> doBuild(sender, args)
      "schem" -> doSchem(sender, args)
      "undo" -> sender.sendMessage("§e取り消しは FAWE の //undo を使ってください。")
      else -> showHelp(sender)
    }
    return true
  }

  // ── /hb build [bays] [palette] ────────────────────────────────────────

  private fun doBuild(player: Player, args: Array<out String>) {
    val bays = args.getOrNull(1)?.toIntOrNull()?.coerceIn(1, 40) ?: 4
    val palette = FacadePalette.from(args.getOrNull(2) ?: "cream")
    player.sendMessage("§7プロシージャル生成中... (${bays}ベイ, ${palette.id})")
    val result =
        try {
          CsmEditSession.run(player, plugin.logger) { editSession ->
            FacadeGenerator.generateInto(player, editSession, bays, palette)
          }
        } catch (e: Exception) {
          player.sendMessage("§c生成に失敗しました: ${e.message}")
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
      player.sendMessage("§cファイルが見つかりません: ${schemFile.absolutePath}")
      player.sendMessage("§7${plugin.dataFolder.absolutePath}/fasard.schem に配置してください")
      return
    }

    if (sub == "full") {
      player.sendMessage("§7スキマティック全体を貼り付け中...")
      val result =
          try {
            CsmEditSession.run(player, plugin.logger) { editSession ->
              SchematicFacadeGenerator.pasteFullInto(player, editSession, schemFile)
            }
          } catch (e: Exception) {
            player.sendMessage("§c貼り付けに失敗しました: ${e.message}")
            return
          }
      if (result.changed) {
        sendUndoResult(player, result.undoRecorded, "貼り付け")
      }
      return
    }

    val bays = sub.toIntOrNull()?.coerceIn(1, 60) ?: 4
    val pattern = args.getOrNull(2)?.lowercase() ?: "regular"
    player.sendMessage("§7スキマティック生成中... (${bays}ベイ, パターン:${pattern})")
    val result =
        try {
          CsmEditSession.run(player, plugin.logger) { editSession ->
            SchematicFacadeGenerator.generateInto(player, editSession, schemFile, bays, pattern)
          }
        } catch (e: Exception) {
          player.sendMessage("§c生成に失敗しました: ${e.message}")
          return
        }
    if (result.changed) {
      sendUndoResult(player, result.undoRecorded, "生成")
    }
  }

  private fun sendUndoResult(player: Player, undoRecorded: Boolean, label: String) {
    if (undoRecorded) {
      player.sendMessage("§a${label}完了！ §7//undo で取り消せます。")
    } else {
      player.sendMessage("§e${label}は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }
  }

  // ── help ─────────────────────────────────────────────────────────────

  private fun showHelp(sender: CommandSender) {
    sender.sendMessage(
        """
        §6=== Haussmann Facade Generator ===
        §e/hb build §7[ベイ数=4] [palette=cream|grey|brown|red]
          §7プロシージャルにファサードを生成
        §e/hb schem full §7— スキマティック全体を1棟貼り付け
        §e/hb schem §7<ベイ数> §7[pattern] [ファイルパス]
          §7pattern: regular(3幅) / wide(4幅) / grand(4幅左)
        §e//undo §7— 直前の生成をFAWEで取り消す
        """
            .trimIndent()
    )
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
