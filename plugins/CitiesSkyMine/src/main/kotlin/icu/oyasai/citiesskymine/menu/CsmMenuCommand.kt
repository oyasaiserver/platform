package icu.oyasai.citiesskymine.menu

import icu.oyasai.citiesskymine.Main
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

// =============================================================================
// CsmMenuCommand — /.csmenu コマンド
// =============================================================================
// OyasaiMenu の command/MenuCommand.kt をベースに CitiesSkyMine 用に再実装。
// OyasaiMenu の /menu コマンドとは独立して動作し、
// plugins/CitiesSkyMine/menus/ 配下のメニューを管理する。
//
// [TODO: OyasaiMenu 統合] 統合後は /.csmenu を廃止し
// OyasaiMenu の /menu コマンドへの切り替えを案内する。
// =============================================================================
class CsmMenuCommand(private val plugin: Main, private val engine: CsmMenuEngine) :
    CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("プレイヤーのみ使用できます。")
              return true
            }
    when (val sub = args.getOrNull(0)?.lowercase()) {
      null -> {
        player.sendMessage(comp("&e[CsmMenu] &7/.csmenu <menu-id>  |  /.csmenu reload"))
      }
      "reload" -> {
        if (!player.isOp) {
          player.sendMessage(comp("&cこのコマンドはOPのみ使用できます。"))
          return true
        }
        engine.reload()
        player.sendMessage(
            comp("&e[CsmMenu] &aメニューをリロードしました。(${engine.loader.getMenuIds().size} 件)"))
      }
      else -> engine.openMenu(player, sub)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    if (!sender.isOp) return emptyList()
    if (args.size != 1) return emptyList()
    val prefix = args[0]
    return (engine.loader.getMenuIds() + "reload").filter {
      it.startsWith(prefix, ignoreCase = true)
    }
  }

  private fun comp(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)
}
