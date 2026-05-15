package io.oyasai.vehicle.base

import io.oyasai.toolbox.ControlKey
import org.bukkit.entity.ArmorStand
import org.bukkit.util.Vector

abstract class AirVehicle(speedLimit1: Double, power1: Int, brake1: Int) :
    BaseVehicle(speedLimit1, power1, brake1) {

  open fun handling(wasd: ControlKey?): Float {
    var handlingStrength: Float =
        HANDLING_MULTIPLIER * 0.1F.coerceAtLeast(5.5F - this.speed.z.toFloat() * 1.5F)
    if (handlingStrength >= HANDLING_MAX) handlingStrength = HANDLING_MAX

    return when (wasd) {
      ControlKey.A,
      ControlKey.WA,
      ControlKey.SA -> -handlingStrength
      ControlKey.D,
      ControlKey.WD,
      ControlKey.SD -> handlingStrength
      else -> 0.0F
    }
  }

  fun down(mainArmorStand: ArmorStand): Double {
    val descentValue = GRAVITY_DESCENT * (1.0 - Math.min(this.speed.z / 0.75, 1.0))
    return calculateDescent(mainArmorStand, descentValue)
  }

  abstract fun controlSpeed(wasd: ControlKey?): Vector

  abstract fun slip(first: ControlKey?): Float
}
