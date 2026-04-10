package io.oyasai.vehicle.base

import io.oyasai.toolbox.ControlKey
import org.bukkit.FluidCollisionMode
import org.bukkit.entity.ArmorStand
import org.bukkit.util.Vector

abstract class LandVehicle(
    speedLimit1: Double,
    power1: Int,
    brake1: Int,
    val maxSize0: Double,
    val underBlockCheck0: Boolean
) : BaseVehicle(speedLimit1, power1, brake1) {

  var oldHandlingFloat: Float = 0.0f

  var handleAngle: Float = 0.0f

  open fun handling(wasd: ControlKey?, wheelZ: Float): Float {
    var handlingStrength: Float =
        HANDLING_MULTIPLIER * 0.1F.coerceAtLeast(5.0F - this.speed.z.toFloat() * 1.5F)
    if (handlingStrength >= HANDLING_MAX) handlingStrength = HANDLING_MAX

    return when (wasd) {
      ControlKey.A,
      ControlKey.WA,
      ControlKey.SA -> {
        this.oldHandlingFloat = -handlingStrength
        -handlingStrength
      }
      ControlKey.D,
      ControlKey.WD,
      ControlKey.SD -> {
        this.oldHandlingFloat = handlingStrength
        handlingStrength
      }
      else -> {
        this.oldHandlingFloat = 0.0F
        0.0F
      }
    }
  }

  private fun traceStepBlock(
      mainArmorStand: ArmorStand,
      forwardVec: Vector
  ): org.bukkit.block.Block? {
    val world = mainArmorStand.world
    val direction = forwardVec.clone().normalize()
    val start = mainArmorStand.location.clone().add(0.0, 0.062, 0.0)
    val rayTrace =
        world.rayTraceBlocks(
            start,
            direction,
            1.25 + this.speed.z * 2.0 + this.maxSize0,
            FluidCollisionMode.NEVER,
            true) ?: return null

    return rayTrace.hitBlock
  }

  fun jump(mainArmorStand: ArmorStand): Double {
    if (this.speed.z <= SPEED_THRESHOLD_ZERO) return 0.0

    val forwardVec =
        Vector(0.0, 0.0, 1.0).rotateAroundY(-Math.toRadians(mainArmorStand.location.yaw.toDouble()))
    val hitBlock = traceStepBlock(mainArmorStand, forwardVec) ?: return 0.0

    val aboveBlock = hitBlock.location.add(0.0, 1.0, 0.0).block
    return if (!aboveBlock.isEmpty && !aboveBlock.isPassable) 0.0
    else 0.55 * (1 + this.speed.z * 0.25)
  }

  fun down(mainArmorStand: ArmorStand): Double {
    return calculateDescent(mainArmorStand, GRAVITY_DESCENT)
  }
}
