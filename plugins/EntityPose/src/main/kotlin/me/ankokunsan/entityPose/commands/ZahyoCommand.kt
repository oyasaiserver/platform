package me.ankokunsan.entityPose.commands

import kotlin.collections.set
import me.ankokunsan.entityPose.ChooseGUi
import me.ankokunsan.entityPose.EntityClick
import org.bukkit.Sound
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class ZahyoCommand : CommandExecutor {
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
    if (!sender.hasPermission("entitypose_arrange")) {
      sender.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    if (args.isEmpty()) {
      ChooseGUi.openZahyoGUI(player)
      player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
      return true
    }
    val value1 = args[0].toDoubleOrNull()
    if (value1 != null) {
      val limitedValue1 = value1.coerceIn(0.01, 2.0)
      EntityClick.currentZah[player.uniqueId] = limitedValue1
      sender.sendMessage("§6[EntityPose] §a視線の先にあるエンティティの一回あたりに動く座標の大きさを${limitedValue1}マスに設定しました")
    } else {
      sender.sendMessage("§6[EntityPose] §c有効な数字を入力するか、/epzahyoとだけ打ってGUIを開いてください")
    }
    return true
  }
}
