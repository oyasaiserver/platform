package me.ankokunsan.entityPose.commands

import kotlin.collections.set
import me.ankokunsan.entityPose.ChooseGUi
import me.ankokunsan.entityPose.EntityClick
import me.ankokunsan.entityPose.isEntiStick
import org.bukkit.Sound
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.ExperienceOrb
import org.bukkit.entity.LivingEntity
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
    val hand = sender.inventory.itemInMainHand
    if (!isEntiStick(hand)) {
      sender.sendMessage("§6[EntityPose] §cエンティティ棒を手に持って実行してください。")
      return true
    }
    if (!sender.hasPermission("entitypose_arrange")) {
      sender.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) {
          it != player && it !is ExperienceOrb
        }
    val target = result?.hitEntity
    if (target == null) {
      sender.sendMessage("§6[EntityPose] §c視線の先にエンティティがありません")
      return true
    }
    if (target is LivingEntity && target.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です。")
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
      EntityClick.currentZah[target.uniqueId] = limitedValue1
      sender.sendMessage(
          "§6[EntityPose] §a視線の先にあるエンティティの一回あたりに動く座標の大きさを ${limitedValue1}マス に設定しました。")
    } else {
      sender.sendMessage("§6[EntityPose] §c有効な数字を入力するか、/zahyoとだけ打ってGUIを開いてください。")
    }
    return true
  }
}
