package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.ChooseGUi
import me.ankokunsan.entityPose.EntityClick
import org.bukkit.Sound
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class KakudoCommand : CommandExecutor {
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
      ChooseGUi.openKakudoGUI(player)
      player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
      return true
    }
    val value = args[0].toDoubleOrNull()
    if (value != null) {
      val limitedValue = value.coerceIn(0.5, 90.0)
      EntityClick.currentStep[player.uniqueId] = limitedValue
      sender.sendMessage("§6[EntityPose] §aエンティティの角度の刻みを${limitedValue}度に設定しました")
    } else {
      sender.sendMessage("§6[EntityPose] §c有効な数字を入力するか、/epkakudoとだけ打ってGUIを開いてください")
    }
    return true
  }
}
