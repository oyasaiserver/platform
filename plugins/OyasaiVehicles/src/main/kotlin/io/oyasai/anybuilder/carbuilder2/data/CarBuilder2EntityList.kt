package io.oyasai.anybuilder.carbuilder2.data

import io.oyasai.anybuilder.runtime.BaseVehicleEntityList
import io.oyasai.toolbox.ControlKey
import io.oyasai.toolbox.Tools
import io.oyasai.toolbox.UnderBlockPattern
import java.util.LinkedHashSet
import java.util.UUID
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

object CarBuilder2EntityList : BaseVehicleEntityList<CarBuilder2EntityData>() {
  override val cache: MutableSet<CarBuilder2EntityData> = LinkedHashSet()

  fun addCarEntity(data: CarBuilder2EntityData) = addEntity(data)

  fun removeCarEntity(data: CarBuilder2EntityData) = removeEntity(data)

  fun checkCarArmorStandUUID(uuid: UUID): Boolean = checkArmorStandUUID(uuid)

  fun checkCarSeatArmorStand(uuid: UUID): Boolean = checkSeatArmorStand(uuid)

  fun getCarData(uuid: UUID): CarBuilder2EntityData? = getData(uuid)

  fun breakUserCar(uuid: UUID): Int = breakUserVehicles(uuid)

  fun getCarDataByMainArmorStand(uuid: UUID): CarBuilder2EntityData? =
      cache.firstOrNull { it.bodyArmorStands.firstOrNull()?.uniqueId == uuid }

  fun getBodyArmorStandList(uuid: UUID?): List<ArmorStand> =
      cache.mapNotNull { data ->
        data.bodyArmorStands.firstOrNull()?.takeIf { it.uniqueId != uuid }
      }

  fun countOwnedVehicles(uuid: UUID): Int = cache.count { !it.exit && it.owner == uuid }

  fun getInvSlotChange(data: CarBuilder2EntityData, player: Player?): Int {
    if (player == null) {
      data.newPlayerSlot = true
      return 0
    }
    val newSlotInt = player.inventory.heldItemSlot
    if (newSlotInt != 4 && data.oldSlotInt != newSlotInt) {
      data.newPlayerSlot = true
      object : BukkitRunnable() {
            override fun run() {
              player.inventory.heldItemSlot = 4
            }
          }
          .runTaskLater(requireNotNull(Tools.pl) { "Plugin is not initialized" }, 1L)
    }
    data.oldSlotInt = newSlotInt
    return if (data.newPlayerSlot) {
      data.newPlayerSlot = false
      0
    } else {
      newSlotInt - 4
    }
  }

  fun slipstream(data: CarBuilder2EntityData, slipAngle: Float, wasd: ControlKey?): Boolean {
    if (data.vehicle.speed.z <= 0.1 || data.vehicle.cruiseMode) return false
    return when (wasd) {
      ControlKey.W,
      ControlKey.WA,
      ControlKey.WD -> {
        val loc = data.bodyArmorStands[0].location.clone()
        val dir =
            Vector(0.0, 0.0, 1.0)
                .rotateAroundY(
                    -Math.toRadians((data.bodyArmorStands[0].location.yaw + slipAngle).toDouble()))
        val excludeList = getBodyArmorStandList(data.bodyArmorStands.first().uniqueId)
        if (Tools.rayTraceEntities(
            loc, dir, (data.vehicle.speed.z + 0.01) * 30.0, 5.0, excludeList)) {
          data.vehicle.speed.z += 0.00075
          true
        } else {
          false
        }
      }
      else -> false
    }
  }

  fun underBlockCheck(data: CarBuilder2EntityData): Double {
    val loc = data.bodyArmorStands.first().location.clone()
    loc.y -= 0.95
    return UnderBlockPattern.getMaterialToDouble(loc.block.type)
  }
}
