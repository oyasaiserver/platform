/* SPDX-License-Identifier: GPL-3.0-or-later
 * TNTRun_reloaded behaviour reference: Shevchikden, steve4744 and contributors.
 * Modified implementation: OyasaiGames contributors, 2026.
 * Footprint scanning and lose-level rules adapted from GameZone / LoseLevel;
 * rewritten in Kotlin with bounds checking and deterministic simultaneous losses.
 * See LICENSE-TNTRUN.txt and README for the source revision.
 */
package icu.oyasai.games.tntrun

import java.util.Locale
import kotlin.math.ceil
import kotlin.math.floor

internal fun arenaName(input: String, names: Collection<String>): String? =
    names.filter { it.lowercase(Locale.ROOT) == input.lowercase(Locale.ROOT) }.singleOrNull()

internal data class Cell(val x: Int, val y: Int, val z: Int) {
  val key
    get() = "$x,$y,$z"

  companion object {
    fun parse(key: String): Cell {
      val parts = key.split(',').map(String::toInt)
      require(parts.size == 3)
      return Cell(parts[0], parts[1], parts[2])
    }
  }
}

internal data class Bounds(val low: Cell, val high: Cell) {
  fun contains(c: Cell) = c.x in low.x..high.x && c.y in low.y..high.y && c.z in low.z..high.z

  val volume
    get() =
        (high.x.toLong() - low.x + 1) *
            (high.y.toLong() - low.y + 1) *
            (high.z.toLong() - low.z + 1)

  fun overlaps(other: Bounds) =
      low.x <= other.high.x &&
          high.x >= other.low.x &&
          low.y <= other.high.y &&
          high.y >= other.low.y &&
          low.z <= other.high.z &&
          high.z >= other.low.z

  companion object {
    fun between(a: Cell, b: Cell) =
        Bounds(
            Cell(minOf(a.x, b.x), minOf(a.y, b.y), minOf(a.z, b.z)),
            Cell(maxOf(a.x, b.x), maxOf(a.y, b.y), maxOf(a.z, b.z)),
        )
  }
}

internal fun footprint(x: Double, y: Double, z: Double): List<Cell> =
    listOf(floor(y).toInt(), floor(y).toInt() - 1)
        .flatMap { height ->
          listOf(0.3 to -0.3, -0.3 to 0.3, 0.3 to 0.3, -0.3 to -0.3).map { (dx, dz) ->
            Cell(floor(x + dx).toInt(), height, floor(z + dz).toInt())
          }
        }
        .distinct()

internal fun lostAt(y: Double, configuredY: Double) = y < floor(configuredY) + 1

internal fun votesRequired(minPlayers: Int, percent: Double) = ceil(minPlayers * percent).toInt()

internal fun canBuyJumps(current: Int, amount: Int, maximum: Int) =
    current >= 0 && amount > 0 && maximum >= amount && current <= maximum - amount

internal enum class Phase {
  WAITING,
  COUNTDOWN,
  RUNNING,
  REGENERATING,
  FAILED,
}

internal class RunRules(
    private val minimum: Int,
    private val countdown: Int,
    private val limit: Int,
) {
  var phase = Phase.WAITING
    private set

  var remaining = countdown
    private set

  var elapsed = 0
    private set

  val active = linkedSetOf<java.util.UUID>()
  var started = 0
    private set

  fun second(force: Boolean = false): Boolean {
    if (phase == Phase.WAITING && (active.size >= minimum || force && active.size > 1)) {
      phase = Phase.COUNTDOWN
      remaining = countdown
    }
    if (phase == Phase.COUNTDOWN) {
      if (active.size < minimum && !(force && active.size > 1)) {
        phase = Phase.WAITING
        remaining = countdown
      } else if (remaining == 0) {
        phase = Phase.RUNNING
        started = active.size
        return true
      } else remaining--
    } else if (phase == Phase.RUNNING) elapsed++
    return false
  }

  val timedOut
    get() = limit > 0 && elapsed >= limit

  fun remove(ids: Collection<java.util.UUID>) {
    active.removeAll(ids.toSet())
  }

  fun end() {
    phase = Phase.REGENERATING
  }

  fun fail() {
    phase = Phase.FAILED
  }
}

internal fun xpToLevel(level: Int): Long =
    when {
      level <= 16 -> level.toLong() * level + 6L * level
      level <= 31 -> (5L * level * level - 81L * level + 720) / 2
      else -> (9L * level * level - 325L * level + 4440) / 2
    }

internal fun xpProgress(level: Int, fraction: Float, award: Int): Pair<Int, Float> {
  require(level >= 0 && award >= 0 && fraction in 0f..1f)
  val points =
      xpToLevel(level) + ((xpToLevel(level + 1) - xpToLevel(level)) * fraction).toLong() + award
  var low = 0
  var high = maxOf(level + 1, 1)
  while (xpToLevel(high) <= points) high *= 2
  while (low + 1 < high) {
    val mid = (low + high) / 2
    if (xpToLevel(mid) <= points) low = mid else high = mid
  }
  return low to
      ((points - xpToLevel(low)).toDouble() / (xpToLevel(low + 1) - xpToLevel(low))).toFloat()
}

internal fun shopPermission(general: Boolean, offer: Boolean) = general || offer
