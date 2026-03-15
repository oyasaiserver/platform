package me.ankokunsan.entityPose

import org.bukkit.entity.EntityType
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.util.EulerAngle
import org.bukkit.util.Vector

data class EntityCopyData(
    val type: EntityType,
    val offset: Vector,
    val yaw: Float,
    val pitch: Float,
    val hanten: Boolean = false,
    val customName: String?,
    val scoreBoard: Set<String> = emptySet(),
    val hasGravity: Boolean = true, // 重力
    val hasBasePlate: Boolean = true,
    val isSmall: Boolean = true,
    val isInvisible: Boolean = false, // 透明
    val scale: Double = 1.0, // サイズ
    val isTamed: Boolean = false,
    val isMini: Boolean = false,
    val isSitting: Boolean = false,
    val headPose: EulerAngle? = null,
    val bodyPose: EulerAngle? = null,
    val leftArmPose: EulerAngle? = null,
    val rightArmPose: EulerAngle? = null,
    val leftLegPose: EulerAngle? = null,
    val rightLegPose: EulerAngle? = null,
    val hasArms: Boolean = true,
    val equipment: Map<EquipmentSlot, ItemStack?> = emptyMap(),
    val variant: String? = null
)
