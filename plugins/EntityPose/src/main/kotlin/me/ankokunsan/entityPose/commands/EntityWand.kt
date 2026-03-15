package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.CopyWand
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class EntityWand : CommandExecutor {

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
    player.inventory.addItem(CopyWand.create1())
    player.sendMessage("§6[EntityPose] §aEntity Copy Wandを手に入れました!")

    return true
  }
}
