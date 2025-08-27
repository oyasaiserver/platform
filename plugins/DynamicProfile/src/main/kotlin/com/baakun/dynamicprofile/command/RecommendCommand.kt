package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.RecommendMode
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.plugin
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
    if (command.name == "dpmanager" && args.isNotEmpty() && args[0] == "recommendMode") {
      if (args.size == 1) {
        val modeConfig = plugin.config.getInt("RecommendBroadcastMode", 0)
        val mode = if (modeConfig==0){
          RecommendMode.BUILDING_FIRST
        }else{
          RecommendMode.PLAYER_FIRST
        }
        sender.sendMessage("現在のおすすめ建築モード: ${mode.name}")
        return true
      }
      val modeArg = args[1].uppercase()
      val mode = runCatching { RecommendMode.valueOf(modeArg) }.getOrNull()
      if (mode == null) {
        sender.sendMessage("無効なモードです。PLAYER_FIRST または BUILDING_FIRST を指定してください。")
        return true
      }

      plugin.config.set("RecommendBroadcastMode", if (mode==RecommendMode.PLAYER_FIRST) 1 else 0)
      plugin.saveConfig()
      sender.sendMessage("おすすめ建築モードを ${mode.name} に変更しました。")
      return true
    }

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
        Data.getSLData(id)?.owner?.equals(sender.uniqueId)?.let {
          if (!it){
            sender.sendMessage("ID $id の建築はあなたのものではありません。")
            return true
          }
        }
        Data.getSLData(id) ?: run {
          sender.sendMessage("ID $id の建築は存在しません。")
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