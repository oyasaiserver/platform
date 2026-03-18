package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.ExperienceOrb
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import kotlin.collections.filter
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
        if (!sender.hasPermission("entitypose_arrange")) {
            sender.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
            return true
        }
        val result = player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) { it != player && it !is ExperienceOrb }
        val target = result?.hitEntity
        if (target == null) {
            sender.sendMessage("§6[EntityPose] §c視線の先にエンティティがいません")
            return true
        }
        if (target is Player) {
            sender.sendMessage("§6[EntityPose] §cプレイヤーをいじろうとしないでね")
            return true
        }
        val livingEntity = target as? LivingEntity ?: return true
            if(livingEntity.hasAI()) {
            player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です")
            return true
        }
        if (args.isEmpty()) {
            player.sendMessage("§6[EntityPose] §c数字を入力してください")
            return true
        }
        val scale= args[0].toDoubleOrNull()
        if (scale == null) {
            player.sendMessage("§6[EntityPose] §c数字を入力してください")
            return true
        }
        val limitedScale = scale.coerceIn(0.3, 3.0)
        val roundedScale = round(limitedScale * 10) / 10.0
        val selected = activeselection[player.uniqueId]
        if(selected != null && selected.contains(target)) {
            val targets = selected.filter { it.isValid }
                targets.forEach { entity ->
                    (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.let { attribute ->
                           attribute.baseValue = roundedScale
                       }
                    }
            player.sendMessage("§6[EntityPose] §a範囲選択されているエンティティのサイズを $roundedScale に設定しました")
        } else {
                val attribute = livingEntity.getAttribute(Attribute.SCALE)
                if (attribute != null) {
                    attribute.baseValue = roundedScale
                    player.sendMessage("§6[EntityPose] §a視線の先にあるエンティティのサイズを $roundedScale に設定しました")
                }
        }
        return true
    }
}
