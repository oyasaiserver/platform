package io.oyasai.vehicle.air

import io.oyasai.toolbox.ControlKey
import io.oyasai.vehicle.base.AirVehicle
import kotlin.math.abs
import org.bukkit.util.Vector

data class AircraftVehicle(
    val speedLimit: Double,
    val power: Int,
    val brake: Int,
    val slip: Float,
) : AirVehicle(speedLimit, power, brake) {

  var slipAngle: Float = 0.0f

  override fun controlSpeed(wasd: ControlKey?): Vector {
    var addSpeed = 0.0
    val per: Double = this.speed.z / this.speedLimit
    when (wasd) {
      null -> {
        this.speed.multiply(0.625)
        if (abs(this.speed.z) <= 0.03) {
          this.speed.z = 0.0
        }
      }
      ControlKey.W,
      ControlKey.WA,
      ControlKey.WD -> {
        if (this.speed.z <= this.speedLimit) {
          addSpeed = this.power * (if (per > 0.625) 1.25 - per else 0.625) / 20000.0
        }
      }
      ControlKey.S,
      ControlKey.SA,
      ControlKey.SD -> {
        addSpeed =
            if (this.speed.z > 0.0) -this.brake / 15000.0
            else if (this.speed.z <= 0.01) -this.brake / 15000.0
            else if (this.speed.z < 0.0) this.brake / 15000.0 else 0.0
      }
      else -> {
        this.speed.multiply(0.9975)
        if (Math.abs(this.speed.z) <= 0.03) {
          this.speed.z = 0.0
        }
      }
    }

    this.speed.z += addSpeed
    if (this.speed.z <= -(this.speedLimit / 3.0)) {
      this.speed.z = -(this.speedLimit / 3.0)
    }

    return this.speed.clone()
  }

  override fun slip(first: ControlKey?): Float {
    when (first) {
      ControlKey.W -> {
        this.slipAngle *= 0.975F.coerceAtMost(this.slip / 100.0F + 0.9F)
      }
      ControlKey.WA,
      ControlKey.SA,
      ControlKey.A -> {
        this.slipAngle =
            (this.slipAngle +
                this.slip +
                1.5F.coerceAtMost(Math.abs(this.speed.z).toFloat() * 1.2F)) * 0.899F
        if (first == ControlKey.SA) {
          this.slipAngle *= 0.97F
        }
        if (first != ControlKey.A) {
          this.speed.multiply(0.9925)
        } else {
          this.speed.multiply(0.995)
        }
      }
      ControlKey.WD,
      ControlKey.SD,
      ControlKey.D -> {
        this.slipAngle =
            (this.slipAngle -
                this.slip -
                1.5F.coerceAtMost(Math.abs(this.speed.z).toFloat() * 1.2F)) * 0.899F
        if (first == ControlKey.SD) {
          this.slipAngle *= 0.97F
        }
        if (first != ControlKey.D) {
          this.speed.multiply(0.9925)
        } else {
          this.speed.multiply(0.995)
        }
      }
      ControlKey.S -> {
        this.slipAngle *= 0.925F.coerceAtMost(this.slip / 100.0F + 0.85F)
      }
      else -> {
        this.slipAngle *= 0.95F
      }
    }
    return this.slipAngle
  }

  fun jetRiseAndFall(slotInt: Int?): Double {
    if (slotInt == null) return -0.2
    val base = this.speed.z + 0.5
    return when (slotInt) {
      0 -> base * -0.2
      1 -> base * -0.15
      2 -> base * -0.1
      3 -> base * -0.05
      4 -> base * -0.005
      5 -> base * 0.1
      6 -> base * 0.2
      7 -> base * 0.3
      8 -> base * 0.4
      else -> -0.2
    }
  }
}
