package icu.oyasai.games.weapons

import java.util.Locale
import org.bukkit.util.Vector

/** Numeric pins for the three measured legacy weapons, not a general CrackShot conversion. */
internal data class WeaponObservedOverride(
    val firingTicks: Set<Int>,
    val cycleTicks: Int,
    val projectileDamage: Double,
    val recoilSpeed: Double? = null,
    val blockEnergy: Boolean = false,
) {
  val inputHoldTicks = 5
  val firstShotDelay = 1L
  val ammoPerShot = 1

  fun shotDue(tick: Int): Boolean = Math.floorMod(tick, cycleTicks) in firingTicks

  fun recoil(direction: Vector): Vector? = recoilSpeed?.let { direction.clone().multiply(it) }

  fun immunityAfterHit(current: Int, reset: Boolean, accepted: Boolean): Int =
      if (reset && accepted) 0 else current
}

internal object WeaponObservedOverrides {
  // Single-input observations: 4-5, 2-3 and 4 rounds respectively, each consuming one round.
  // Damage events: 3, 4 and 0. The dash sample is 1.456 after horizontal drag (1.6 * .91).
  private val weapons =
      mapOf(
          "chainsaw" to WeaponObservedOverride((1..9).toSet(), 10, 3.0, blockEnergy = true),
          "ak-47" to WeaponObservedOverride(setOf(0), 2, 4.0),
          "rittaikidou" to WeaponObservedOverride(setOf(1, 2, 3, 4), 5, 0.0, recoilSpeed = 1.6),
      )

  fun forWeapon(id: String): WeaponObservedOverride? = weapons[id.lowercase(Locale.ROOT)]

  /** Measured short CHAINSAW beam volumes; other energy weapons keep their existing geometry. */
  fun energyIntersection(
      center: Vector,
      half: Vector,
      direction: Vector,
      radius: Double,
      range: Double,
  ): Double? {
    val extent = radius + .5
    for (step in 1..kotlin.math.floor(range).toInt()) {
      val offset = center.clone().subtract(direction.clone().multiply(step.toDouble()))
      if (
          kotlin.math.abs(offset.x) < extent + half.x &&
              kotlin.math.abs(offset.y) < extent + half.y &&
              kotlin.math.abs(offset.z) < extent + half.z
      )
          return step.toDouble()
    }
    return null
  }
}
