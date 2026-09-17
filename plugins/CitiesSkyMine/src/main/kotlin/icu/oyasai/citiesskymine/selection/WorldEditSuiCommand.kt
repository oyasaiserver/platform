package icu.oyasai.citiesskymine.selection

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.util.MessageUtil
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class WorldEditSuiCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  companion object {
    const val PERMISSION = "citiesskymine.sui"
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!sender.hasPermission(PERMISSION)) {
      MessageUtil.error(sender, "このコマンドを使用する権限がありません。")
      return true
    }
    return when (args.getOrNull(0)?.lowercase()) {
      null -> showStatus(sender)
      "on" -> setEnabled(sender, true)
      "off" -> setEnabled(sender, false)
      else -> usage(sender, label)
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> =
      if (args.size == 1) {
        listOf("on", "off").filter { it.startsWith(args[0], ignoreCase = true) }
      } else {
        emptyList()
      }

  private fun showStatus(player: Player): Boolean {
    val enabled = plugin.isSuiEnabled(player)
    MessageUtil.info(
        player,
        "WorldEdit SUI (選択範囲表示): <white>${onOff(enabled)}</white>",
    )
    return true
  }

  private fun setEnabled(player: Player, enabled: Boolean): Boolean {
    plugin.setSuiEnabled(player, enabled)
    MessageUtil.success(
        player,
        "WorldEdit SUI を <white>${onOff(enabled)}</white> にしました。",
    )
    return true
  }

  private fun usage(player: Player, label: String): Boolean {
    MessageUtil.error(player, "使い方: /$label [on|off]")
    return true
  }

  private fun onOff(value: Boolean): String = if (value) "on" else "off"
}
