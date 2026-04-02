package icu.oyasai.citiesskymine.facade

import com.sk89q.worldedit.EditSession
import java.io.File
import java.util.*
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

class HaussmannCommand(private val plugin: JavaPlugin) : CommandExecutor, TabCompleter {

  private val lastEdit = HashMap<UUID, EditSession>()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§cプレイヤーのみ使用可能です")
      return true
    }
    when (args.getOrNull(0)?.lowercase()) {
      "build" -> doBuild(sender, args)
      "schem" -> doSchem(sender, args)
      "undo" -> doUndo(sender)
      else -> showHelp(sender)
    }
    return true
  }

  // ── /hb build [bays] [palette] ────────────────────────────────────────

  private fun doBuild(player: Player, args: Array<out String>) {
    val bays = args.getOrNull(1)?.toIntOrNull()?.coerceIn(1, 40) ?: 4
    val palette = FacadePalette.from(args.getOrNull(2) ?: "cream")
    player.sendMessage("§7プロシージャル生成中... (${bays}ベイ, ${palette.id})")
    val es = FacadeGenerator.generate(player, bays, palette)
    if (es != null) {
      lastEdit[player.uniqueId] = es
      player.sendMessage("§a生成完了！")
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
      val es = SchematicFacadeGenerator.pasteFull(player, schemFile)
      if (es != null) {
        lastEdit[player.uniqueId] = es
        player.sendMessage("§a貼り付け完了！")
      }
      return
    }

    val bays = sub.toIntOrNull()?.coerceIn(1, 60) ?: 4
    val pattern = args.getOrNull(2)?.lowercase() ?: "regular"
    player.sendMessage("§7スキマティック生成中... (${bays}ベイ, パターン:${pattern})")
    val es = SchematicFacadeGenerator.generate(player, schemFile, bays, pattern)
    if (es != null) {
      lastEdit[player.uniqueId] = es
      player.sendMessage("§a生成完了！")
    }
  }

  // ── /hb undo ─────────────────────────────────────────────────────────

  private fun doUndo(player: Player) {
    val es =
        lastEdit.remove(player.uniqueId)
            ?: run {
              player.sendMessage("§cアンドゥする操作がありません")
              return
            }
    FacadeGenerator.undo(player, es)
    player.sendMessage("§aアンドゥ完了")
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
            §e/hb undo §7— 直前の生成を取り消す
        """
            .trimIndent())
  }

  // ── tab complete ──────────────────────────────────────────────────────

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): List<String> {
    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""
    return when (args.size) {
      1 -> listOf("build", "schem", "undo", "help").filter { it.startsWith(a0) }
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
