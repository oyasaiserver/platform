package icu.oyasai.utilities.debugonbe.model

import org.bukkit.inventory.ItemStack
import org.bukkit.util.EulerAngle

/**
 * 防具立て 1 体分の配置データ。
 *
 * @param offsetX ブロック中心からの X オフセット (ブロック単位)
 * @param offsetY ブロック底辺からの Y オフセット (ブロック単位)
 * @param offsetZ ブロック中心からの Z オフセット (ブロック単位)
 * @param yaw 水平向き (度数法、0=南, 90=西, 180=北, 270=東)
 * @param isSmall 小さい防具立てを使用するか
 * @param scale GENERIC_SCALE アトリビュート値 (1.0 が通常サイズ)
 * @param headPose 頭の EulerAngle
 * @param bodyPose 体の EulerAngle
 * @param leftArmPose 左腕の EulerAngle
 * @param rightArmPose 右腕の EulerAngle
 * @param leftLegPose 左脚の EulerAngle
 * @param rightLegPose 右脚の EulerAngle
 * @param headItem 頭に装備させるアイテム (素材ブロック)
 * @param chestItem 胴体に装備させるアイテム
 * @param legsItem 脚に装備させるアイテム
 * @param feetItem 足に装備させるアイテム
 * @param mainHandItem 右手に持たせるアイテム
 * @param offHandItem 左手に持たせるアイテム
 * @param visible 防具立てが透明か
 */
data class ArmorStandPlacement(
    val offsetX: Double = 0.0,
    val offsetY: Double = 0.0,
    val offsetZ: Double = 0.0,
    val yaw: Float = 0f,
    val isSmall: Boolean = true,
    val scale: Double = 1.0,
    val headPose: EulerAngle = EulerAngle.ZERO,
    val bodyPose: EulerAngle = EulerAngle.ZERO,
    val leftArmPose: EulerAngle = EulerAngle.ZERO,
    val rightArmPose: EulerAngle = EulerAngle.ZERO,
    val leftLegPose: EulerAngle = EulerAngle.ZERO,
    val rightLegPose: EulerAngle = EulerAngle.ZERO,
    val headItem: ItemStack? = null,
    val chestItem: ItemStack? = null,
    val legsItem: ItemStack? = null,
    val feetItem: ItemStack? = null,
    val mainHandItem: ItemStack? = null,
    val offHandItem: ItemStack? = null,
    val visible: Boolean = false,
)
