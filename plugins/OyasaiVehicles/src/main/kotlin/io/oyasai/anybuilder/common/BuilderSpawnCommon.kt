package io.oyasai.anybuilder.common

import io.oyasai.anybuilder.runtime.VehicleEntityData
import java.util.*
import kotlin.random.Random
import net.kyori.adventure.text.Component
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.data.BlockData
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.ArmorStand.LockType
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Display.Brightness
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.util.BoundingBox
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.AxisAngle4f

object BuilderSpawnSupport {
  fun spawnBodyArmorStands(
      loc: Location,
      count: Int,
      yaw: Float,
      createFirst: (Location) -> ArmorStand,
      createNext: (Location) -> ArmorStand = { location ->
        location.world?.spawnEntity(location, EntityType.ARMOR_STAND) as ArmorStand
      },
      customName: String = "machinev"
  ): MutableList<ArmorStand> {
    val list = mutableListOf<ArmorStand>()
    if (loc.world == null) return list

    for (index in 0..count) {
      val armorStand = if (index == 0) createFirst(loc) else createNext(loc)
      armorStand.isSmall = true
      armorStand.isInvisible = true
      armorStand.isSilent = true
      armorStand.setGravity(false)
      armorStand.setRotation(yaw, 0.0f)
      armorStand.customName(Component.text(customName))
      list.add(armorStand)
    }
    return list
  }

  fun spawnBlockDisplay(
      loc: Location,
      bodyArmorStandsList: MutableList<ArmorStand>,
      data: MutableMap<Vector, Pair<BlockData, Vector>>,
      size: Double,
      box: BoundingBox?
  ): MutableSet<BlockDisplay> {
    val list = LinkedHashSet<BlockDisplay>()
    val world = loc.world ?: return list
    val lastIndex = bodyArmorStandsList.lastIndex

    for ((vec, pair) in data) {
      val blockDisplay = world.spawnEntity(loc, EntityType.BLOCK_DISPLAY) as BlockDisplay
      blockDisplay.setBlock(pair.first)
      blockDisplay.brightness = Brightness(0, 15)
      val fixWidth = size / (box?.maxX ?: 1.0)
      blockDisplay.transformation =
          Transformation(
              vec.clone().multiply(fixWidth).toVector3f(),
              AxisAngle4f(),
              pair.second.clone().multiply(fixWidth).toVector3f(),
              AxisAngle4f())
      blockDisplay.interpolationDuration = 2
      blockDisplay.interpolationDelay = 0
      blockDisplay.setRotation(0.0f, 0.0f)
      blockDisplay.customName(Component.text("machinev"))
      val passengerIndex = if (lastIndex >= 1) Random.nextInt(1, lastIndex + 1) else 0
      bodyArmorStandsList[passengerIndex].addPassenger(blockDisplay)
      list.add(blockDisplay)
    }
    return list
  }

  fun spawnSeat(
      loc: Location,
      seatPairs: Iterable<Pair<Int, Vector>>,
      yaw: Float,
      indexedName: Boolean
  ): MutableMap<Pair<Int, ArmorStand>, Vector> {
    val map = LinkedHashMap<Pair<Int, ArmorStand>, Vector>()
    val world = loc.world ?: return map
    for ((i, vec) in seatPairs) {
      val rotatedVec = vec.clone().rotateAroundY(Math.toRadians(-yaw.toDouble()))
      val armorStand =
          world.spawnEntity(loc.clone().add(rotatedVec), EntityType.ARMOR_STAND) as ArmorStand
      armorStand.isSmall = true
      armorStand.isSilent = true
      armorStand.isInvisible = true
      armorStand.setGravity(false)
      armorStand.setRotation(yaw, 0.0f)
      armorStand.setBasePlate(false)
      armorStand.customName(Component.text(if (indexedName) "machinev_seat_$i" else "machinev"))
      armorStand.setItem(
          EquipmentSlot.HEAD, ItemStack(if (i == 0) Material.GREEN_WOOL else Material.BLACK_WOOL))
      armorStand.addEquipmentLock(EquipmentSlot.HEAD, LockType.REMOVING_OR_CHANGING)
      map[i to armorStand] = vec
    }
    return map
  }

  fun <T : VehicleEntityData> clearOldTrialSpawn(
      spawnPlayer: Player?,
      oldMap: MutableMap<UUID, T>
  ) {
    if (spawnPlayer == null) return
    val oldData = oldMap.remove(spawnPlayer.uniqueId) ?: return
    if (!oldData.exit) {
      oldData.exit = true
      oldData.exitTask()
    }
  }

  fun <T : VehicleEntityData> beginTrialSpawn(
      owner: Player?,
      spawnPlayer: Player?,
      oldMap: MutableMap<UUID, T>
  ) {
    if (owner == null) {
      clearOldTrialSpawn(spawnPlayer, oldMap)
    }
  }

  fun <T : VehicleEntityData> rememberTrialSpawn(
      owner: Player?,
      spawnPlayer: Player?,
      oldMap: MutableMap<UUID, T>,
      data: T
  ) {
    if (owner == null && spawnPlayer != null) {
      oldMap[spawnPlayer.uniqueId] = data
    }
  }
}
