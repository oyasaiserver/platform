package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.isEntiStick
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.ExperienceOrb
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import kotlin.math.round

class EntityScale : CommandExecutor {
    override fun onCommand(
        sender: CommandSender,
        command: Command,
        label: String,
        args: Array<out String>
    ): Boolean {
        val player = sender as? Player ?: run {
            return true
        }
        val hand = sender.inventory.itemInMainHand
        if (!isEntiStick(hand)) {
            sender.sendMessage("§6[EntityPose] §cエンティティ棒を手に持って実行してください")
            return true
        }
        if (!sender.hasPermission("entitypose_arrange")) {
            sender.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
            return true
        }
        val result = player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) { it != player && it !is ExperienceOrb }
        val target = result?.hitEntity
        if (target == null) {
            sender.sendMessage("§6[EntityPose] §c視線の先にエンティティがありません")
            return true
        }
        if (target is Player) {
            sender.sendMessage("§6[EntityPose] §cプレイヤーをいじろうとしないでね")
            return true
        }
        val livingEntity = target as? LivingEntity ?: return true
            if(livingEntity.hasAI()) {
            player.sendMessage("§6[EntityPose] §cこのモブはAIが有効です")
            return true
        }
        if (args.isEmpty()) {
            player.sendMessage("§6[EntityPose] §c数字を入力してください")
            return true
        }
        val scale= args[0].toDoubleOrNull()
        if (scale != null) {
            val limitedScale = scale.coerceIn(0.1, 3.0)
            val attribute = livingEntity.getAttribute(Attribute.SCALE)
            if (attribute != null) {
            val roundedScale = round(limitedScale * 10) / 10.0
            attribute.baseValue = roundedScale
                player.sendMessage("§6[EntityPose] §a視線の先にあるエンティティのサイズを $roundedScale に設定しました")
            }
        }else {
            sender.sendMessage("§6[EntityPose] §c数字を入力してください")
        }
        return true
    }
}