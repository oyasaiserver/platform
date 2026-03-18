package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.CopyWand
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityCopyClick.Companion.selection
import me.ankokunsan.entityPose.stopHighlight
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class EntityWand : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    // プレイヤーでない場合はメッセージを送って終了
    val player =
        sender as? Player
            ?: run {
              return true
            }
    if (!sender.hasPermission("entitypose_arrange")) {
      sender.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    if (args.isNotEmpty() && args[0].equals("-c", ignoreCase = true)) {
      val uuid = player.uniqueId
      if (selection.contains(uuid)) {
        stopHighlight(uuid)
        activeselection.remove(uuid)
        selection.remove(uuid)
        player.sendMessage("§6[EntityPose] §e範囲選択をリセットしました")
      } else {
        player.sendMessage("§6[EntityPose] §c範囲選択されているエンティティがいません")
        return true
      }
    } else if (args.isEmpty()) {
      player.inventory.addItem(CopyWand.create1())
      player.sendMessage("§6[EntityPose] §aEntity Copy Wandを手に入れました!")
      return true
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
      return listOf("-c").filter { it.startsWith(args[0], ignoreCase = true) }
    }
    return emptyList()
  }
}
