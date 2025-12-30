package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import org.bukkit.block.Biome
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object VacantTeleport : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "vacanttp") return false
    if (sender !is Player) return false

    if (!Data.loading) {
      // ファイルのロードが終わっていない場合の処理
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }

    if (args.isEmpty()) {
      Data.vacantTPTask(sender, 8, 2, null)
      return true
    }
    if (checkBiomeString(args[0])) {
      val radius =
          if (args.size >= 2) {
            if (args[1].toIntOrNull() != null) {
              args[1].toInt()
            } else {
              sender.sendMessage(Tools.socialLikesLOGO + "&e引数が間違っています。")
              return false
            }
          } else {
            8
          }
      val maxCount =
          if (args.size >= 3) {
            if (args[2].toIntOrNull() != null) {
              args[2].toInt()
            } else {
              sender.sendMessage(Tools.socialLikesLOGO + "&e引数が間違っています。")
              return false
            }
          } else {
            radius / 3
          }

      Data.vacantTPTask(sender, radius, maxCount, args[0])
      return true
    } else {
      val radius =
          if (args[0].toIntOrNull() != null) {
            args[0].toInt()
          } else {
            sender.sendMessage(Tools.socialLikesLOGO + "&e引数が間違っています。")
            return false
          }
      val maxCount =
          if (args.size >= 2) {
            if (args[1].toIntOrNull() != null) {
              args[1].toInt()
            } else {
              sender.sendMessage(Tools.socialLikesLOGO + "&e引数が間違っています。")
              return false
            }
          } else {
            radius / 3
          }

      Data.vacantTPTask(sender, radius, maxCount, null)
    }
    return true
  }

  @Suppress("UnstableApiUsage", "removal")
  fun checkBiomeString(string: String): Boolean {
    Biome.values().forEach { biome: Biome ->
      if (biome.name() == string) {
        return true
      }
    }
    return false
  }
}
