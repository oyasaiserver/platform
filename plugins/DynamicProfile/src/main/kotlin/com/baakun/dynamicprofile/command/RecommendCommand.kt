package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
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
          sender.sendMessage("/dpsuki add <スロット番号(1-5)> <建築ID>")
          return true
        }
        val slot = args[1].toIntOrNull()
        val id = args[2].toIntOrNull()
        if (slot == null || slot !in 1..5) {
          sender.sendMessage("スロット番号は1～5で指定してください。")
          return true
        }
        if (id == null) {
          sender.sendMessage("建築IDは数字で指定してください。")
          return true
        }
        Data.getSLData(id)?.owner?.equals(sender.uniqueId)?.let {
          if (!it) {
            sender.sendMessage("ID $id の建築はあなたのものではありません。")
            return true
          }
        }
        Data.getSLData(id)
            ?: run {
              sender.sendMessage("ID $id の建築は存在しません。")
              return true
            }
        stats.recommends[slot - 1] = id
        runCatching { if (Tools.plugin.statsReady) Tools.saveStats(sender.uniqueId) }
        sender.sendMessage("スロット$slot にID $id を登録しました。")
      }
      "remove" -> {
        if (args.size < 2) {
          sender.sendMessage("/dpsuki remove <スロット番号(1-5)>")
          return true
        }
        val slot = args[1].toIntOrNull()
        if (slot == null || slot !in 1..5) {
          sender.sendMessage("スロット番号は1～5で指定してください。")
          return true
        }
        stats.recommends[slot - 1] = Int.MIN_VALUE
        runCatching { if (Tools.plugin.statsReady) Tools.saveStats(sender.uniqueId) }
        sender.sendMessage("スロット$slot を空にしました。")
      }
      "list" -> {
        for (i in 0..4) {
          val recId = stats.recommends[i] ?: Int.MIN_VALUE
          if (recId == Int.MIN_VALUE) {
            sender.sendMessage("スロット${i + 1}: 未設定")
          } else {
            val title = Data.getSLData(recId)?.title ?: "不明"
            sender.sendMessage("スロット${i + 1}: ID $recId ($title)")
          }
        }
      }
      else -> sender.sendMessage("/dpsuki <add|remove> <スロット番号> [建築ID]")
    }
    return true
  }
}
