package io.oyasai.anybuilder.aircraftbuilder.physics

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityData
import io.oyasai.toolbox.ControlKey
import org.bukkit.util.Vector

fun AircraftBuilderEntityData.computeYawDelta(wasd: ControlKey?): Float {
  return this.vehicle.handling(wasd)
}

fun AircraftBuilderEntityData.computeVelocity(wasd: ControlKey?): Vector {
  return this.vehicle
      .controlSpeed(wasd)
      .rotateAroundY(Math.toRadians(-this.bodyArmorStands[0].eyeLocation.yaw.toDouble()))
}

fun AircraftBuilderEntityData.computeVerticalMotion(slot: Int?): Double {
  return this.vehicle.down(this.bodyArmorStands[0]) + this.vehicle.jetRiseAndFall(slot)
}
