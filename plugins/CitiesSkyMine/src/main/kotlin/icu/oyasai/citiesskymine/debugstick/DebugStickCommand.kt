package icu.oyasai.citiesskymine.debugstick

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import net.kyori.adventure.text.Component
import org.bukkit.GameMode
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class DebugStickCommand(private val plugin: Main, memoryStore: DebugStickMemoryStore) :
    CommandExecutor, TabCompleter {

  private val service = DebugStickService(plugin, memoryStore)

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
    if (!plugin.access.require(sender, CommandKey.DEBUGSTICK)) return true
    if (!plugin.config.getBoolean("debug-stick.enabled", true)) {
      MessageUtil.error(sender, "デバッグ棒互換コマンドは無効です。")
      return true
    }
    if (
        plugin.config.getBoolean("debug-stick.require-creative", false) &&
            sender.gameMode != GameMode.CREATIVE
    ) {
      MessageUtil.error(sender, "クリエイティブモードでのみ使用できます。")
      return true
    }

    val result =
        when (args.getOrNull(0)?.lowercase()) {
          "select" -> service.select(sender)
          "cycle" -> service.cycle(sender)
          else -> {
            MessageUtil.error(sender, "使い方: /$label <select|cycle>")
            return true
          }
        }

    when (result) {
      is DebugStickResult.Success -> sender.sendActionBar(Component.text(result.message))
      is DebugStickResult.Error -> MessageUtil.error(sender, result.message)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> =
      when (args.size) {
        1 -> listOf("select", "cycle").filter { it.startsWith(args[0], ignoreCase = true) }
        else -> emptyList()
      }
}
