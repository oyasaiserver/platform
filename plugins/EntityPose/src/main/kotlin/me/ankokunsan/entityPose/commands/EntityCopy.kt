package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.EntityCopyClick.Companion.clipboard
import me.ankokunsan.entityPose.EntityCopyClick.Companion.highlightTasks
import me.ankokunsan.entityPose.EntityCopyClick.Companion.selection
import me.ankokunsan.entityPose.EntityCopyData
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Cat
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Parrot
import org.bukkit.entity.Player
import org.bukkit.entity.Rabbit
import org.bukkit.entity.Sittable
import org.bukkit.entity.Tameable
import org.bukkit.entity.Wolf
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.util.BoundingBox
import java.util.UUID

class EntityCopy : CommandExecutor {

    private fun stopHighlight(uuid: UUID) {
        highlightTasks[uuid]?.cancel()
        highlightTasks.remove(uuid)
    }

    @Suppress("DEPRECATION")
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
        val uuid = player.uniqueId
        val (p1, p2) = selection[uuid] ?: (null to null)

        if (p1 == null || p2 == null) {
            player.sendMessage("§c範囲が選択されていません。Entity Copy Wandで2地点を指定してください")
            return true
        }
        val origin = player.location
        val originVec = origin.toVector()
        val box = BoundingBox.of(p1, p2).expand(0.2)
        val world = player.world
        val targets = world.getNearbyEntities(box).filter { entity ->
            entity != player &&
                    (entity as? LivingEntity)?.hasAI() == false
        }
        val snapshot = targets.map { entity ->
            val relativePos = entity.location.toVector().subtract(originVec)

            val variantStr =
                when (entity) {
                    is Wolf -> entity.variant.key.toString()
                    is Cat -> entity.catType.key.toString()
                    is Rabbit -> entity.rabbitType.name
                    is Parrot -> entity.variant.name
                    else -> null
                }
            val equipmentMap = mutableMapOf<EquipmentSlot, ItemStack?>()
            val sitting = (entity as? Sittable)?.isSitting ?: false

            val armorStands = entity as? ArmorStand
            val equip = armorStands?.equipment
            if (equip != null) {
                val slots = arrayOf(
                    EquipmentSlot.HAND,
                    EquipmentSlot.OFF_HAND,
                    EquipmentSlot.HEAD,
                    EquipmentSlot.CHEST,
                    EquipmentSlot.LEGS,
                    EquipmentSlot.FEET
                )
                for (slot in slots) {
                    val item = equip.getItem(slot)
                    if (item.type != Material.AIR) {
                        equipmentMap[slot] = item.clone()
                    }
                }
            }
            EntityCopyData(
                type = entity.type,
                offset = relativePos,
                yaw = entity.location.yaw,
                pitch = entity.location.pitch,
                customName = if (entity.customName == "Dinnerbone") null else entity.customName,
                hanten = entity.customName == "Dinnerbone",
                scoreBoard = entity.scoreboardTags.toSet(),
                hasGravity = entity.hasGravity(),
                hasBasePlate = armorStands?.hasBasePlate() ?: true,
                isInvisible = armorStands?.isInvisible == true,
                isSmall = armorStands?.isSmall ?: false,
                scale = (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0,
                isTamed = (entity as? Tameable)?.isTamed ?: false,
                isMini = when(entity) {
                    is Wolf -> !entity.isAdult
                    is Cat -> !entity.isAdult
                    else -> false
                },
                isSitting = sitting,
                variant = variantStr,
                equipment = equipmentMap,
                hasArms = armorStands?.hasArms() ?: true,
                headPose = armorStands?.headPose,
                bodyPose = armorStands?.bodyPose,
                leftArmPose = armorStands?.leftArmPose,
                rightArmPose = armorStands?.rightArmPose,
                leftLegPose = armorStands?.leftLegPose,
                rightLegPose = armorStands?.rightLegPose
            )
        }
        clipboard[uuid] = snapshot
        player.sendMessage("§6[EntityPose] §a${snapshot.size}体のエンティティをコピーしました")
        stopHighlight(uuid)
        selection.remove(uuid)
        return true
    }
}