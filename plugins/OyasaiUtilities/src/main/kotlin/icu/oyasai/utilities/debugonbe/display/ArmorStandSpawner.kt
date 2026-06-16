package icu.oyasai.utilities.debugonbe.display

import icu.oyasai.utilities.debugonbe.model.ArmorStandPlacement
import org.bukkit.Location
import org.bukkit.attribute.Attribute
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.EntityType
import org.bukkit.inventory.EquipmentSlot

/** ArmorStandPlacement のデータに従って防具立てをスポーン・設定するユーティリティ。 */
object ArmorStandSpawner {

  /**
   * ブロック座標 (blockLoc) を基準に防具立てをスポーンする。
   *
   * ブロック底辺の中心を原点 (0,0,0) とし、各オフセットを加算する。
   *
   * @param blockLoc 対象ブロックの Location (ブロック座標)
   * @param placement 配置データ
   * @return スポーンした ArmorStand
   */
  fun spawn(blockLoc: Location, placement: ArmorStandPlacement): ArmorStand {
    val world = blockLoc.world!!

    // ブロックの底辺中心を原点にしてオフセットを適用
    val spawnLoc =
        Location(
            world,
            blockLoc.blockX + 0.5 + placement.offsetX,
            blockLoc.blockY.toDouble() + placement.offsetY,
            blockLoc.blockZ + 0.5 + placement.offsetZ,
            placement.yaw,
            0f,
        )

    val stand = world.spawnEntity(spawnLoc, EntityType.ARMOR_STAND) as ArmorStand

    // --- 基本設定 ---
    stand.isSmall = placement.isSmall
    stand.isVisible = placement.visible
    stand.isInvulnerable = true
    stand.isCustomNameVisible = false
    stand.setGravity(false)
    stand.isSilent = true
    stand.setBasePlate(false)

    stand.setCollidable(false)
    stand.isMarker = true

    // --- スケール ---
    if (placement.scale != 1.0) {
      val scaleAttr = stand.getAttribute(Attribute.SCALE)
      if (scaleAttr != null) {
        // 既存のモディファイアをクリアしてから設定
        scaleAttr.modifiers.forEach { scaleAttr.removeModifier(it) }
        scaleAttr.baseValue = placement.scale
      }
    }

    // --- ポーズ ---
    stand.headPose = placement.headPose
    stand.bodyPose = placement.bodyPose
    stand.leftArmPose = placement.leftArmPose
    stand.rightArmPose = placement.rightArmPose
    stand.leftLegPose = placement.leftLegPose
    stand.rightLegPose = placement.rightLegPose

    // --- 装備 ---
    val equipment = stand.equipment ?: return stand
    placement.headItem?.let { equipment.setItem(EquipmentSlot.HEAD, it, true) }
    placement.chestItem?.let { equipment.setItem(EquipmentSlot.CHEST, it, true) }
    placement.legsItem?.let { equipment.setItem(EquipmentSlot.LEGS, it, true) }
    placement.feetItem?.let { equipment.setItem(EquipmentSlot.FEET, it, true) }
    placement.mainHandItem?.let { equipment.setItem(EquipmentSlot.HAND, it, true) }
    placement.offHandItem?.let { equipment.setItem(EquipmentSlot.OFF_HAND, it, true) }

    return stand
  }

  /** デフォルト設定の「編集用」防具立てをスポーンする。 プレイヤーが /cbm add したときに基準ブロックの中心に出現する防具立て。 */
  fun spawnEditing(blockLoc: Location): ArmorStand {
    val spawnLoc =
        Location(
            blockLoc.world!!,
            blockLoc.blockX + 0.5,
            blockLoc.blockY.toDouble(),
            blockLoc.blockZ + 0.5,
        )

    val stand = blockLoc.world!!.spawnEntity(spawnLoc, EntityType.ARMOR_STAND) as ArmorStand
    stand.isSmall = true
    stand.isVisible = true
    stand.isInvulnerable = true
    stand.setGravity(false)
    stand.isSilent = true
    stand.isMarker = false
    stand.setBasePlate(false)
    return stand
  }
}
