package io.oyasai.vehicle.car

import io.oyasai.toolbox.ControlKey
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min
import org.bukkit.util.Vector

data class CarNormalVehicle(
    val speedLimit: Double,
    val power: Int,
    val brake: Int,
    val maxSize: Double,
    val underBlockCheck: Boolean,
    val gearMax: Int,
    val isMT: Boolean,
    val slip: Double
) : CarVehicle(speedLimit, power, brake, maxSize, underBlockCheck, gearMax, isMT) {

  var slipAngle: Double = 0.0

  override fun controlSpeed(
      wasd: ControlKey?,
      slot: Int,
      slipstream: Boolean,
      ubc: Double
  ): Vector = applySpeedUpdate(wasd, slot, slipstream, ubc, 20000.0, 15000.0, 1.0)

  override fun slip(first: ControlKey?): Double {
    val speedFactor = abs(speed.z) * slip * max(0.1, 1.2 - abs(speed.z))

    when (first) {
      ControlKey.W -> slipAngle *= min(0.975, slip / 100.0 + 0.9)
      ControlKey.WA,
      ControlKey.SA,
      ControlKey.A -> {
        slipAngle += speedFactor
        if (first == ControlKey.SA) slipAngle *= 0.97
        speed.multiply(FRICTION_HEAVY)
      }
      ControlKey.WD,
      ControlKey.SD,
      ControlKey.D -> {
        slipAngle -= speedFactor
        if (first == ControlKey.SD) slipAngle *= 0.97
        speed.multiply(FRICTION_HEAVY)
      }
      ControlKey.S -> slipAngle *= min(0.925, slip / 100.0 + 0.85)
      else -> slipAngle *= 0.95
    }

    slipAngle = slipAngle.coerceIn(-SLIP_ANGLE_MAX, SLIP_ANGLE_MAX)
    return slipAngle
  }

  override fun addSlip(first: ControlKey?): Float {
    val d = abs(speed.z) * slip * max(0.1, 1.2 - abs(speed.z))
    return when (first) {
      ControlKey.WA,
      ControlKey.A -> d.toFloat()
      ControlKey.WD,
      ControlKey.D -> (-d).toFloat()
      ControlKey.SA -> (d * 0.97).toFloat()
      ControlKey.SD -> (-d * 0.97).toFloat()
      else -> 0.0f
    }
  }
}

data class CarProVehicle(
    val speedLimitVal: Double,
    val powerVal: Int,
    val brakeVal: Int,
    val maxSizeVal: Double,
    val underBlockCheckVal: Boolean,
    val gearMaxVal: Int,
    val isMTVal: Boolean,
    val grip: Int,
    val plusMode: Boolean
) :
    CarVehicle(
        speedLimitVal, powerVal, brakeVal, maxSizeVal, underBlockCheckVal, gearMaxVal, isMTVal) {

  var slipAngle: Double = 0.0

  private val gripForce = (200 - grip) / 100.0
  private val gripForce2 = max(0.75F, grip / 100.0F)
  private val gripAdjustedSlipFactor = 1.005F - grip / 40.0F * 0.002F
  private val powerSlide = max(3.3, powerVal / 100.0).toFloat()

  override fun controlSpeed(
      wasd: ControlKey?,
      slot: Int,
      slipstream: Boolean,
      ubc: Double
  ): Vector =
      applySpeedUpdate(
          wasd, slot, slipstream, ubc, 20000.0, 15000.0, 1.0 - slipAngle / SLIP_ANGLE_MAX)

  override fun handling(wasd: ControlKey?, wheelZ: Float): Float {
    val handlingStrength = gripForce2 * (3.0F - speed.z.toFloat() * 1.5F)
    val slipFloat = slipAngle.toFloat()

    val result =
        if (plusMode) {
          when (wasd) {
            null -> 0.0F
            ControlKey.W -> -(slipFloat / (18.3F - powerSlide))
            ControlKey.WA -> -handlingStrength - slipFloat / (13.3F - powerSlide)
            ControlKey.WD -> handlingStrength - slipFloat / (13.3F - powerSlide)
            ControlKey.SA,
            ControlKey.A -> -handlingStrength - slipFloat / 10.0F
            ControlKey.SD,
            ControlKey.D -> handlingStrength - slipFloat / 10.0F
            else -> -(slipFloat / 20.0F)
          }
        } else {
          when (wasd) {
            ControlKey.WA,
            ControlKey.SA,
            ControlKey.A -> {
              val slipAdjust = if (slipAngle > 0.0) -(slipFloat / 30.0F) else slipFloat / 60.0F
              -handlingStrength + slipAdjust
            }
            ControlKey.WD,
            ControlKey.SD,
            ControlKey.D -> {
              val s = if (slipAngle < 0.0) -(slipFloat / 30.0F) else slipFloat / 60.0F
              handlingStrength + s
            }
            else -> 0.0F
          }
        }
    oldHandlingFloat = result
    return result
  }

  override fun slip(first: ControlKey?): Double {
    val speedAbs = abs(speed.z)
    val slipFactor = speedAbs * gripForce * max(0.1, 2.2 - speedAbs)

    when (first) {
      null -> slipAngle *= 0.5
      ControlKey.W ->
          slipAngle *=
              (if (plusMode) min(0.6F + speedAbs.toFloat(), gripAdjustedSlipFactor) else 0.9675F)
                  .toDouble()
      ControlKey.WA,
      ControlKey.SA,
      ControlKey.A -> {
        slipAngle += slipFactor
        handleLeftTurnSlip(first, speedAbs.toFloat())
        if (plusMode && slipAngle < 0.0) slipAngle *= (1.0 - grip / 1000.0)
      }
      ControlKey.WD,
      ControlKey.SD,
      ControlKey.D -> {
        slipAngle -= slipFactor
        handleRightTurnSlip(first, speedAbs.toFloat())
        if (plusMode && slipAngle > 0.0) slipAngle *= (1.0 - grip / 1000.0)
      }
      ControlKey.S -> slipAngle *= if (plusMode) 0.945 else 0.9125
      else -> slipAngle *= if (plusMode) 0.9125 else 0.95
    }

    if (abs(slipAngle) <= 3.5 &&
        first !in
            listOf(
                ControlKey.W,
                ControlKey.WA,
                ControlKey.WD,
                ControlKey.SA,
                ControlKey.SD,
                ControlKey.A,
                ControlKey.D)) {
      slipAngle = 0.0
    }

    slipAngle = slipAngle.coerceIn(-SLIP_ANGLE_MAX, SLIP_ANGLE_MAX)
    return slipAngle
  }

  private fun handleLeftTurnSlip(first: ControlKey, speedAbs: Float) {
    when (first) {
      ControlKey.SA ->
          if (plusMode) {
            slipAngle += 10.6 * (0.5 + speedAbs)
            slipAngle *= 1.05
          } else slipAngle *= 0.945
      ControlKey.WA ->
          slipAngle *= (if (plusMode) min(0.6F + speedAbs, 0.99F) else 0.975F).toDouble()
      ControlKey.A -> if (plusMode) slipAngle *= min(0.8F + speedAbs, 1.075F).toDouble()
      else -> {}
    }
  }

  private fun handleRightTurnSlip(first: ControlKey, speedAbs: Float) {
    when (first) {
      ControlKey.SD ->
          if (plusMode) {
            slipAngle -= 10.6 * (0.5 + speedAbs)
            slipAngle *= 1.05
          } else slipAngle *= 0.945
      ControlKey.WD ->
          slipAngle *= (if (plusMode) min(0.6F + speedAbs, 0.99F) else 0.975F).toDouble()
      ControlKey.D -> if (plusMode) slipAngle *= min(0.8F + speedAbs, 1.075F).toDouble()
      else -> {}
    }
  }

  override fun addSlip(first: ControlKey?): Float = 0.0F
}

class CarRealVehicle(
    speedLimit: Double,
    power: Int,
    brake: Int,
    maxSize: Double,
    underBlockCheck: Boolean,
    gearMax: Int,
    val isMT: Boolean,
    val grip: Int
) : CarVehicle(speedLimit, power, brake, maxSize, underBlockCheck, gearMax, isMT) {

  var slipAngle: Double = 0.0

  override fun controlSpeed(
      wasd: ControlKey?,
      slot: Int,
      slipstream: Boolean,
      ubc: Double
  ): Vector =
      applySpeedUpdate(
          wasd, slot, slipstream, ubc, 20000.0, 15000.0, 1.0 - slipAngle / SLIP_ANGLE_MAX)

  override fun handling(wasd: ControlKey?, wheelZ: Float): Float {
    val baseHandling =
        when (wasd) {
          null -> 0.0f
          ControlKey.WA,
          ControlKey.SA,
          ControlKey.A -> -35.0f
          ControlKey.WD,
          ControlKey.SD,
          ControlKey.D -> 35.0f
          else -> -slipAngle.toFloat()
        }

    val gripAdjustedHandlingForce = baseHandling * (grip * 0.03F)

    if (gripAdjustedHandlingForce == 0.0F) {
      if (wasd != null) {
        handleAngle *= 0.95F
        if (handleAngle in -0.75F..0.75F) handleAngle = 0.0F
      }
    } else {
      when (wasd) {
        ControlKey.WA,
        ControlKey.SA,
        ControlKey.A,
        ControlKey.WD,
        ControlKey.SD,
        ControlKey.D -> handleAngle += gripAdjustedHandlingForce * 0.12F
        else -> {
          handleAngle *= 0.95F
          if (handleAngle in -0.75F..0.75F) handleAngle = 0.0F
        }
      }
    }

    handleAngle =
        handleAngle.coerceIn(
            -(35.0 / (0.5 + abs(speed.z) * 1.5)).toFloat(),
            (35.0 / (0.5 + abs(speed.z) * 1.5)).toFloat())
    return gripAdjustedHandlingForce
  }

  override fun slip(first: ControlKey?): Double = 0.0

  override fun addSlip(first: ControlKey?): Float = 0.0F
}
