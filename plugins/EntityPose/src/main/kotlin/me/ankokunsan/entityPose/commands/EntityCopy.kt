package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityCopyClick.Companion.clipboard
import me.ankokunsan.entityPose.EntityCopyData
import me.ankokunsan.entityPose.EntityPose
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Ageable
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
import org.bukkit.persistence.PersistentDataType

class EntityCopy : CommandExecutor {

  @Suppress("DEPRECATION")
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
    val uuid = player.uniqueId
    val targets = activeselection[uuid]?.filter { it.isValid }

    if (targets == null) {
      player.sendMessage("§6[EntityPose] §c範囲選択されているエンティティがいません")
      return true
    }

    val originVec = player.location.toVector()
    val snapshot =
        targets.map { entity ->
          val loc = entity.location
          val relativePos = loc.toVector().subtract(originVec)

          val container = entity.persistentDataContainer

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
            val slots =
                arrayOf(
                    EquipmentSlot.HAND,
                    EquipmentSlot.OFF_HAND,
                    EquipmentSlot.HEAD,
                    EquipmentSlot.CHEST,
                    EquipmentSlot.LEGS,
                    EquipmentSlot.FEET)
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
              isInvincible = container.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE),
              isArrangeLocked = container.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE),
              isItemLocked = container.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE),
              hasGravity = entity.hasGravity(),
              hasBasePlate = armorStands?.hasBasePlate() ?: true,
              isInvisible = armorStands?.isInvisible == true,
              isSmall = armorStands?.isSmall ?: false,
              scale = (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0,
              isTamed = (entity as? Tameable)?.isTamed ?: false,
              isMini =
                  when (entity) {
                    is Ageable -> !entity.isAdult
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
              rightLegPose = armorStands?.rightLegPose)
        }
    clipboard[uuid] = snapshot
    player.sendMessage("§6[EntityPose] §a${snapshot.size}体のエンティティをコピーしました")
    return true
  }
}
