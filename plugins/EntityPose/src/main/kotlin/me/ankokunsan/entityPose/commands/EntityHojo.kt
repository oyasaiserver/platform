package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.AirBlock
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class EntityHojo : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              return true
            }
    if (!player.hasPermission("entitypose_arrange")) {
      player.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    if (args.isEmpty()) {
      player.sendMessage("§6[EntityPose] §c/ehojo onまたはoff と入力してください")
      return true
    }
    when (args[0].lowercase()) {
      "on" -> {
        AirBlock.setStatus(player, true)
        player.sendMessage("§6[EntityPose] §b足場自動生成を§a【ON】§bにしました")
      }

      "off" -> {
        AirBlock.setStatus(player, false)
        player.sendMessage("§6[EntityPose] §b足場自動生成を§c【OFF】§bにしました")
      }

      else -> {
        player.sendMessage("§6[EntityPose] §conまたはoff を入力してください")
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>
  ): List<String> {
    if (args.size == 1) {
      val rst = listOf("on", "off")
      return rst.filter { it.startsWith(args[0], ignoreCase = true) }
    }
    return emptyList()
  }
}
