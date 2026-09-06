package icu.oyasai.citiesskymine.hud

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.util.MessageUtil
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class WorldEditHudCommand(private val plugin: Main) : CommandExecutor, TabCompleter {
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
    if (!sender.hasPermission(WorldEditHudService.PERMISSION)) {
      MessageUtil.error(sender, "このHUDを使用する権限がありません。")
      return true
    }
    return when (args.getOrNull(0)?.lowercase()) {
      null -> showStatus(sender)
      "on",
      "off" -> setMode(sender, label, args)
      "sel" -> setSelection(sender, label, args)
      "width" -> setWidth(sender, label, args)
      else -> usage(sender, label)
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> =
      when {
        args.size == 1 ->
            listOf("on", "off", "sel", "width").filter { it.startsWith(args[0], ignoreCase = true) }
        args.size == 2 && args[0].equals("sel", ignoreCase = true) ->
            listOf("on", "off").filter { it.startsWith(args[1], ignoreCase = true) }
        args.size == 2 && args[0].equals("width", ignoreCase = true) ->
            listOf("24", "32", "40", "56", "reset").filter {
              it.startsWith(args[1], ignoreCase = true)
            }
        else -> emptyList()
      }

  private fun showStatus(player: Player): Boolean {
    val hud = plugin.worldEditHud
    MessageUtil.info(
        player,
        "HUD: <white>${hud.mode(player).id}</white> / 選択範囲: <white>${onOff(hud.showSelection(player))}</white> / 幅: <white>${hud.maxValueLength(player)}</white>",
    )
    return true
  }

  private fun setMode(player: Player, label: String, args: Array<String>): Boolean {
    if (args.size > 1) return usage(player, label)
    val mode = HudMode.from(args[0])
    plugin.worldEditHud.setMode(player, mode)
    MessageUtil.success(player, "WorldEdit HUD を <white>${mode.id}</white> にしました。")
    return true
  }

  private fun setSelection(player: Player, label: String, args: Array<String>): Boolean {
    val value =
        when (args.getOrNull(1)?.lowercase()) {
          "on" -> true
          "off" -> false
          else -> return usage(player, label)
        }
    plugin.worldEditHud.setShowSelection(player, value)
    MessageUtil.success(player, "選択範囲の表示を <white>${onOff(value)}</white> にしました。")
    return true
  }

  private fun setWidth(player: Player, label: String, args: Array<String>): Boolean {
    val requested = args.getOrNull(1) ?: return usage(player, label)
    if (requested.equals("reset", ignoreCase = true)) {
      plugin.worldEditHud.setMaxValueLength(player, null)
      MessageUtil.success(
          player,
          "表示幅をサーバー既定 (<white>${plugin.worldEditHud.maxValueLength(player)}</white>) に戻しました。",
      )
      return true
    }
    val value = requested.toIntOrNull()
    if (
        value == null ||
            value < WorldEditHudService.MIN_VALUE_LENGTH ||
            value > WorldEditHudService.MAX_VALUE_LENGTH
    ) {
      MessageUtil.error(
          player,
          "幅は ${WorldEditHudService.MIN_VALUE_LENGTH}〜${WorldEditHudService.MAX_VALUE_LENGTH} の数値、または reset を指定してください。",
      )
      return true
    }
    plugin.worldEditHud.setMaxValueLength(player, value)
    MessageUtil.success(player, "表示幅を <white>$value</white> 文字にしました。")
    return true
  }

  private fun usage(player: Player, label: String): Boolean {
    MessageUtil.error(
        player,
        "使い方: /$label [on|off] / /$label sel <on|off> / /$label width <数値|reset>",
    )
    return true
  }

  private fun onOff(value: Boolean): String = if (value) "on" else "off"
}
