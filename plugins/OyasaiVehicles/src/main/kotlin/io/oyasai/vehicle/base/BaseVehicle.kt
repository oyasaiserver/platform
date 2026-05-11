package io.oyasai.vehicle.base

import org.bukkit.entity.ArmorStand
import org.bukkit.util.Vector

abstract class BaseVehicle(val speedLimit0: Double, val power0: Int, val brake0: Int) {
  val speed: Vector = Vector()

  companion object {
    const val GRAVITY_DESCENT = -0.525
    const val RAYCAST_DISTANCE = 0.07
    const val SLIP_ANGLE_MAX = 32.5
    const val HANDLING_MAX = 12.5f
    const val HANDLING_MULTIPLIER = 0.75f
    const val FRICTION_HEAVY = 0.9985
    const val SPEED_THRESHOLD_ZERO = 0.03

    protected val DOWN_VECTOR: Vector = Vector(0.0, -1.0, 0.0)
  }

  protected fun calculateDescent(
      mainArmorStand: ArmorStand,
      descentValue: Double = GRAVITY_DESCENT
  ): Double {
    val result =
        mainArmorStand.world.rayTraceBlocks(mainArmorStand.location, DOWN_VECTOR, RAYCAST_DISTANCE)
            ?: return descentValue
    val block = result.hitBlock ?: return descentValue
    return if (block.isPassable) descentValue else 0.0
  }
}
