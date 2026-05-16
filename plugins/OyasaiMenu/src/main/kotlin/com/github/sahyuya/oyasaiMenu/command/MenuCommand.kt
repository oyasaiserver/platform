package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class MenuCommand(private val plugin: OyasaiMenu) : CommandExecutor, TabCompleter {
  companion object {
    private val POPUP_ALIASES = mapOf("u" to "utility", "utility" to "utility")
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("§cゲーム内から実行してください。")
              return false
            }
    if (!player.hasPermission("oyasaimenu.use")) {
      player.sendMessage(c("&cこのコマンドを使う権限がありません。"))
      return false
    }
    val requested = args.getOrNull(0)?.takeIf { it.isNotBlank() }
    val popupId = requested?.lowercase()?.let { POPUP_ALIASES[it] }
    if (popupId != null) {
      plugin.popupMenuEngine.open(player, popupId)
      return true
    }

    val menuId = requested ?: plugin.config.getString("menu.default", "root") ?: "root"
    plugin.menuEngine.openMenu(player, menuId)
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>
  ): List<String>? {
    if (!sender.hasPermission("oyasaimenu.admin")) return emptyList()
    if (args.size != 1) return emptyList()
    val prefix = args[0]
    return POPUP_ALIASES.keys.filter { it.startsWith(prefix, ignoreCase = true) }
  }
}
