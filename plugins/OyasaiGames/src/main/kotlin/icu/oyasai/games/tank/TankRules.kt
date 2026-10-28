package icu.oyasai.games.tank

import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.max
import kotlin.math.min
import kotlin.math.sign
import kotlin.math.sin
import kotlin.math.sqrt

/**
 * 戦車の速度・旋回・装甲の計算。Bukkit に依存しない値だけを置く。 角度は Minecraft の yaw / pitch（yaw は右回りに増え、pitch は下向きが正）。
 * ponytail: 数値は実機で調整する前の仮置き。
 */
object TankRules {
  const val MAX_HP = 100.0
  const val MAX_SPEED = 0.35
  const val MAX_REVERSE = 0.15
  const val ACCEL = 0.025
  const val BRAKE = 0.06
  const val FRICTION = 0.02
  const val TURN_PER_TICK = 3.0
  const val RELOAD_TICKS = 40
  const val SHELL_SPEED = 3.0
  const val SHELL_GRAVITY = 0.02
  const val SHELL_LIFE_TICKS = 100
  const val SHELL_DAMAGE = 35.0
  const val GUN_PITCH_UP = -20.0
  const val GUN_PITCH_DOWN = 8.0

  fun forwardX(yaw: Double): Double = -sin(Math.toRadians(yaw))

  fun forwardZ(yaw: Double): Double = cos(Math.toRadians(yaw))

  fun wrapYaw(yaw: Double): Double {
    val wrapped = ((yaw + 180.0) % 360.0 + 360.0) % 360.0 - 180.0
    return wrapped
  }

  fun nextSpeed(speed: Double, forward: Boolean, backward: Boolean): Double =
      when {
        forward && !backward ->
            if (speed < 0.0) min(0.0, speed + BRAKE) else min(MAX_SPEED, speed + ACCEL)
        backward && !forward ->
            if (speed > 0.0) max(0.0, speed - BRAKE) else max(-MAX_REVERSE, speed - ACCEL)
        abs(speed) <= FRICTION -> 0.0
        else -> speed - sign(speed) * FRICTION
      }

  fun nextYaw(yaw: Double, left: Boolean, right: Boolean): Double =
      when {
        right && !left -> wrapYaw(yaw + TURN_PER_TICK)
        left && !right -> wrapYaw(yaw - TURN_PER_TICK)
        else -> yaw
      }

  fun clampGunPitch(pitch: Double): Double = pitch.coerceIn(GUN_PITCH_UP, GUN_PITCH_DOWN)

  /** 砲弾の水平の進行方向と車体の向きから、正面 0.5・側面 1.0・背面 1.5 の倍率を返す。真上・真下からは 1.0。 */
  fun armorMultiplier(shellDx: Double, shellDz: Double, hullYaw: Double): Double {
    val length = sqrt(shellDx * shellDx + shellDz * shellDz)
    if (length < 1.0e-6) return 1.0
    val along = (shellDx * forwardX(hullYaw) + shellDz * forwardZ(hullYaw)) / length
    return when {
      along < -0.5 -> 0.5
      along > 0.5 -> 1.5
      else -> 1.0
    }
  }
}
