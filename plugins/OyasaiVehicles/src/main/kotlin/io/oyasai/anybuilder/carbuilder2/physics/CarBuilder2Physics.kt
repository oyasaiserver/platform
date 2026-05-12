package io.oyasai.anybuilder.carbuilder2.physics

import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityData
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityList
import io.oyasai.toolbox.ControlKey
import io.oyasai.toolbox.Tools
import io.oyasai.toolbox.UnderBlockPattern
import kotlin.math.max
import kotlin.math.min
import org.bukkit.util.Vector

fun CarBuilder2EntityData.computeYawDelta(wasd: ControlKey?): Float {
  var addYaw = this.vehicle.handling(wasd, this.wheelZ)
  if (this.realMode) {
    addYaw *= max(min(this.vehicle.speed.z * 20.0, 1.0), -1.0).toFloat() * this.handleAddYawFix
  }
  return addYaw
}

fun CarBuilder2EntityData.computeVelocity(
    wasd: ControlKey?,
    slot: Int,
    slipstreamActive: Boolean,
    setYaw0: Float,
    slipYaw: Float
): Vector {
  return this.vehicle
      .controlSpeed(
          wasd,
          slot,
          slipstreamActive,
          if (this.vehicle.underBlockCheck0) underBlockCheck(this) else 1.0)
      .rotateAroundY(Math.toRadians(-(setYaw0.toDouble() + slipYaw)))
}

fun CarBuilder2EntityData.computeVerticalMotion(): Double {
  val jumpY = this.vehicle.jump(this.bodyArmorStands[0])
  return if (jumpY == 0.0) this.vehicle.down(this.bodyArmorStands[0]) else jumpY
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
                  Math.toRadians((data.bodyArmorStands[0].location.yaw + slipAngle).toDouble()))
      val excludeList =
          CarBuilder2EntityList.getBodyArmorStandList(data.bodyArmorStands.first().uniqueId)
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
  val loc = data.bodyArmorStands[0].location.clone()
  loc.y -= 0.95
  return UnderBlockPattern.getMaterialToDouble(loc.block.type)
}
