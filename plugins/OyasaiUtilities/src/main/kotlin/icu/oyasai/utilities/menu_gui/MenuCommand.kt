package icu.oyasai.utilities.menu_gui

import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object MenuCommand : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "menu") return false
    if (args.isEmpty()) {
      // menuを開く
      Bukkit.dispatchCommand(
        Bukkit.getConsoleSender(),
        "chestcommands:chestcommands open menu ${sender.name}",
      )
      return true
    }
    if (!sender.isOp) return true
    when (args[0]) {
      "reload" -> {
        // メニューの設定をリロード

      }
    }
    return true
  }
}
