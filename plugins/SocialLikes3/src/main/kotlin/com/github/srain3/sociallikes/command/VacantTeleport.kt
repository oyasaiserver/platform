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
  const val MAX_RADIUS = 64

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
    val biome = if (checkBiomeString(args[0])) args[0] else null
    val radius =
        intArg(sender, if (biome != null) args.getOrNull(1) else args[0], 8) ?: return false
    if (radius !in 1..MAX_RADIUS) {
      sender.sendMessage((Tools.socialLikesLOGO + "&e半径は1〜${MAX_RADIUS}の範囲で指定してください。").color())
      return true
    }
    val maxCount =
        intArg(sender, if (biome != null) args.getOrNull(2) else args.getOrNull(1), radius / 3)
            ?: return false
    if (maxCount < 0) {
      sender.sendMessage((Tools.socialLikesLOGO + "&e上限数は0以上で指定してください。").color())
      return true
    }
    Data.vacantTPTask(sender, radius, maxCount, biome)
    return true
  }

  private fun intArg(sender: Player, raw: String?, default: Int): Int? {
    if (raw == null) return default
    return raw.toIntOrNull()
        ?: run {
          sender.sendMessage(Tools.socialLikesLOGO + "&e引数が間違っています。")
          null
        }
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
