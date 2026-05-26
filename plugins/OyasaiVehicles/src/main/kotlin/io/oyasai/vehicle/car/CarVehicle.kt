package io.oyasai.vehicle.car

import io.oyasai.toolbox.ControlKey
import io.oyasai.vehicle.base.LandVehicle
import io.oyasai.vehicle.base.VehicleBalanceSettings
import org.bukkit.util.Vector

abstract class CarVehicle(
    speedLimit2: Double,
    power2: Int,
    brake2: Int,
    maxSize2: Double,
    underBlockCheck2: Boolean,
    val maximumGears: Int,
    val manualTransmission: Boolean,
) : LandVehicle(speedLimit2, power2, brake2, maxSize2, underBlockCheck2) {

  companion object {
    private const val POWER_DIVISOR = 20000.0
    private const val BRAKE_DIVISOR = 15000.0
  }

  var nowGear: Int = 1

  val gearSpeedList: MutableList<Double> = mutableListOf()
  val gearRatioList: MutableList<Double> = mutableListOf()

  var gearShiftDelay: Int = 0

  var cruiseMode: Boolean = false

  var cruiseSpeed: Double = 0.0

  init {
    if (this.maximumGears > 0) {
      val finalGear =
          this.maximumGears *
              (0.5 + this.maximumGears * 0.5 / (this.maximumGears * this.maximumGears))
      val gearSpeed = speedLimit2 * 100.0 / this.maximumGears
      var speed = 0.0
      gearSpeedList.add(0, 0.0)
      gearRatioList.add(0, 0.0)
      for (i in 1..this.maximumGears) {
        val ratio = (this.maximumGears + 1 - i) / finalGear
        speed += ratio * gearSpeed
        gearSpeedList.add(i, speed / 100.0)
        gearRatioList.add(i, ratio)
      }
    }
  }

  fun gearShift(slot: Int) {
    when (slot) {
      -1 -> {
        gearShiftDelay = 8
        nowGear = (-1).coerceAtLeast(nowGear - 1)
      }
      1 -> {
        gearShiftDelay = (6.0 / (maximumGears * 0.1)).toInt()
        nowGear = maximumGears.coerceAtMost(nowGear + 1)
      }
    }
  }

  fun autoTrans(per: Double) {
    if (per >= 0.975) {
      if (maximumGears > nowGear) gearShift(1)
    } else if (
        nowGear > 1 && gearSpeedList.getOrNull(nowGear - 1)?.let { speed.z / it < 0.875 } == true
    ) {
      gearShift(-1)
    }
  }

  protected val currentGearSpeed: Double
    get() = gearSpeedList.getOrElse(maxOf(nowGear, 1)) { 0.0 }

  protected val currentGearRatio: Double
    get() = gearRatioList.getOrElse(maxOf(nowGear, 1)) { 0.0 }

  protected fun calculateAddSpeed(
      wasd: ControlKey?,
      per: Double,
      slipstream: Boolean,
      ubc: Double,
  ): Double {
    var addSpeed = 0.0
    val ratio = currentGearRatio
    val powerMultiplier = if (per > 0.625) 1.25 - per else 0.625
    val ubcFriction = if (ubc >= 1.0) 1.0 else if (ubc >= 0.0) ubc * 0.02 + 0.98 else 0.98

    when (wasd) {
      ControlKey.W,
      ControlKey.WA,
      ControlKey.WD -> {
        if (per > 1.0 && !slipstream) {
          if (speed.z > currentGearSpeed + 0.0085) {
            if (speed.z > speedLimit0)
                speed.multiply(0.99925 * VehicleBalanceSettings.carOverspeedFriction)
            else
                speed
                    .multiply(0.9875 * VehicleBalanceSettings.carOverspeedFriction)
                    .multiply(ubcFriction)
          }
        } else if (nowGear > 0) {
          if (!cruiseMode || cruiseSpeed > speed.z) {
            if (gearShiftDelay <= 0) addSpeed = power0 * powerMultiplier * ratio / POWER_DIVISOR
          } else if (cruiseSpeed < speed.z) {
            speed.z = cruiseSpeed
          }
        } else if (nowGear == -1 && speed.z <= 0.0 && !cruiseMode && gearShiftDelay <= 0) {
          addSpeed = -(power0 * powerMultiplier * ratio / POWER_DIVISOR)
        }
      }
      ControlKey.S,
      ControlKey.SA,
      ControlKey.SD -> {
        val brakeEffect = Math.max(2.0 - ubc, 0.0) * VehicleBalanceSettings.carBrakeMultiplier
        addSpeed =
            when {
              speed.z > 0.0 -> -brake0 / BRAKE_DIVISOR * brakeEffect
              !manualTransmission && speed.z <= 0.01 -> -brake0 / BRAKE_DIVISOR * brakeEffect
              speed.z < 0.0 -> brake0 / BRAKE_DIVISOR * brakeEffect
              else -> 0.0
            }
        if (cruiseMode) cruiseMode = false
      }
      else -> {
        if (cruiseMode) {
          if (cruiseSpeed > speed.z && gearShiftDelay <= 0)
              addSpeed = power0 * powerMultiplier * ratio / POWER_DIVISOR
          else if (cruiseSpeed < speed.z) speed.z = cruiseSpeed
        }
        speed.multiply(VehicleBalanceSettings.carCoastFriction)
        if (cruiseMode) {
          if (Math.abs(speed.z - cruiseSpeed) <= SPEED_THRESHOLD_ZERO) speed.z = cruiseSpeed
        }
        if (Math.abs(speed.z) <= SPEED_THRESHOLD_ZERO) speed.z = 0.0
      }
    }
    return addSpeed
  }

  protected fun applySpeedUpdate(
      wasd: ControlKey?,
      slot: Int,
      slipstream: Boolean,
      ubc: Double,
      slipMultiplier: Double = 1.0,
  ): Vector {
    if (slot == 4 && speed.z >= 0.05) {
      cruiseMode = !cruiseMode
      if (cruiseMode) cruiseSpeed = speed.z
    }

    var per = Math.abs(speed.z) / currentGearSpeed.coerceAtLeast(0.001)
    if (!manualTransmission) autoTrans(per) else gearShift(slot)
    per = Math.abs(speed.z) / currentGearSpeed.coerceAtLeast(0.001)

    val ubcFriction = if (ubc >= 1.0) 1.0 else if (ubc >= 0.0) ubc * 0.02 + 0.98 else 0.98

    if (wasd == null) {
      speed.multiply(0.625)
      if (Math.abs(speed.z) <= SPEED_THRESHOLD_ZERO) speed.z = 0.0
      cruiseMode = false
    }

    val addSpeed = calculateAddSpeed(wasd, per, slipstream, ubc)

    speed.z += addSpeed * ubc * slipMultiplier
    speed.z *= ubcFriction
    gearShiftDelay = 0.coerceAtLeast(gearShiftDelay - 1)

    val revLimit = speedLimit0 * 0.33
    if (speed.z <= -revLimit) speed.z = -revLimit

    return speed.clone()
  }

  abstract fun controlSpeed(wasd: ControlKey?, slot: Int, slipstream: Boolean, ubc: Double): Vector

  abstract fun slip(first: ControlKey?): Double

  abstract fun addSlip(first: ControlKey?): Float
}
