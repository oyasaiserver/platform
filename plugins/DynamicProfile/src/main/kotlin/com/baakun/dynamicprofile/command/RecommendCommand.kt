package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.util.Tools.getStats
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object RecommendCommand : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {

    if (command.name != "dpsuki") return false
    if (sender !is Player) {
      sender.sendMessage("プレイヤーのみ実行可能です。")
      return true
    }
    if (args.isEmpty()) {
      sender.sendMessage("/dpsuki <add|remove> <スロット番号> [建築ID]")
      return true
    }
    val stats = getStats(sender.uniqueId)
    val sub = args[0]
    when (sub) {
      "add" -> {
        if (args.size < 3) {
          sender.sendMessage("/dpsuki add <スロット番号> <建築ID>")
          return true
        }
        val slot = args[1].toIntOrNull()
        val id = args[2].toIntOrNull()
        if (slot == null || slot !in 0..4) {
          sender.sendMessage("スロット番号は0～4で指定してください。")
          return true
        }
        if (id == null) {
          sender.sendMessage("建築IDは数字で指定してください。")
          return true
        }
        stats.recommends[slot] = id
        sender.sendMessage("スロット$slot にID $id を登録しました。")
      }
      "remove" -> {
        if (args.size < 2) {
          sender.sendMessage("/dpsuki remove <スロット番号>")
          return true
        }
        val slot = args[1].toIntOrNull()
        if (slot == null || slot !in 0..4) {
          sender.sendMessage("スロット番号は0～4で指定してください。")
          return true
        }
        stats.recommends[slot] = Int.MIN_VALUE
        sender.sendMessage("スロット$slot を空にしました。")
      }
      else -> sender.sendMessage("/dpsuki <add|remove> <スロット番号> [建築ID]")
    }
    return true
  }
}
