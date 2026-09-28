package icu.oyasai.citiesskymine.crowd

import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.atan2
import kotlin.math.ceil
import kotlin.math.cos
import kotlin.math.exp
import kotlin.math.floor
import kotlin.math.ln
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt
import kotlin.math.sin
import kotlin.random.Random

internal data class NaturalCrowdOptions(
    val width: Int,
    val depth: Int,
    val density: Double = 0.12,
    val group: Double = 1.0,
    val stand: Double = 25.0,
    val noise: Double = 0.6,
    val scale: Double = 14.0,
    val gap: Int = 1,
    val right: Double = 50.0,
    val jitter: Double = 15.0,
    val seed: Long,
    val axisXPercent: Double? = null,
    val rightWorldX: Int = 1,
    val rightWorldZ: Int = 0,
)

internal data class NaturalPerson(
    val x: Int,
    val z: Int,
    val yaw: Double,
    val group: Int,
)

internal data class NaturalCrowd(
    val people: List<NaturalPerson>,
    val groups: Int,
    val solos: Int,
    val target: Int,
)

/** Local +X is the player's right, and local +Z is the player's facing direction. */
internal fun generateNaturalCrowd(p: NaturalCrowdOptions): NaturalCrowd {
  require(p.width > 0 && p.depth > 0 && p.width.toLong() * p.depth <= Int.MAX_VALUE / 3)
  val random = Random(p.seed)
  val area = p.width * p.depth
  val target = (p.density * area).roundToInt()
  val meanWeight =
      (0 until p.depth).sumOf { z ->
        (0 until p.width).sumOf { x -> weight(x + 0.5, z + 0.5, p) }
      } / area
  val candidates =
      List(area * 3) {
            val x = random.nextDouble() * p.width
            val z = random.nextDouble() * p.depth
            Candidate(x, z, -ln(1.0 - random.nextDouble()) / weight(x, z, p))
          }
          .sortedBy { it.key }
  val occupied = IntArray(area) { -1 }
  val people = ArrayList<NaturalPerson>(target)
  var groups = 0
  var solos = 0

  fun free(x: Int, z: Int): Boolean {
    if (x !in 0 until p.width || z !in 0 until p.depth || occupied[z * p.width + x] != -1)
        return false
    for (dz in -p.gap..p.gap) for (dx in -p.gap..p.gap) {
      val nx = x + dx
      val nz = z + dz
      if (nx in 0 until p.width && nz in 0 until p.depth && occupied[nz * p.width + nx] != -1)
          return false
    }
    return true
  }

  for (candidate in candidates) {
    if (people.size >= target) break
    val count = min(groupSize(p.group, random), target - people.size)
    val standing = count >= 2 && random.nextDouble() * 100 < p.stand
    val bend =
        ((p.density * weight(candidate.x, candidate.z, p) / meanWeight - 0.15) / 0.35).coerceIn(
            0.0,
            1.0,
        )
    val yaw =
        if (standing) random.nextDouble() * 2 * PI
        else {
          val base =
              when {
                p.axisXPercent == null -> 0.0
                random.nextDouble() * 100 < p.axisXPercent ->
                    atan2(p.rightWorldZ.toDouble(), p.rightWorldX.toDouble())
                else -> atan2(-p.rightWorldX.toDouble(), p.rightWorldZ.toDouble())
              }
          base +
              (if (random.nextDouble() * 100 < p.right) 0.0 else PI) +
              (random.nextDouble() * 2 - 1) * p.jitter * PI / 180
        }
    val cs = cos(yaw)
    val sn = sin(yaw)
    for (attempt in 0 until if (standing) 3 else 1) {
      val cells =
          formation(count, standing, bend, attempt).map { (forward, lateral) ->
            val x = candidate.x + forward * cs - lateral * sn
            val z = candidate.z + forward * sn + lateral * cs
            Cell(floor(x).toInt(), floor(z).toInt())
          }
      if (cells.toSet().size != count || cells.any { !free(it.x, it.z) }) continue
      val centerX = cells.sumOf { it.x + 0.5 } / count
      val centerZ = cells.sumOf { it.z + 0.5 } / count
      for (cell in cells) {
        occupied[cell.z * p.width + cell.x] = groups
        people +=
            NaturalPerson(
                cell.x,
                cell.z,
                if (standing) atan2(centerZ - cell.z - 0.5, centerX - cell.x - 0.5) else yaw,
                groups,
            )
      }
      groups++
      if (count == 1) solos++
      break
    }
  }
  return NaturalCrowd(people, groups, solos, target)
}

private data class Candidate(val x: Double, val z: Double, val key: Double)

private data class Cell(val x: Int, val z: Int)

private fun groupSize(lambda: Double, random: Random): Int {
  if (lambda <= 0) return 1
  val cutoff = exp(-lambda)
  while (true) {
    var count = 0
    var product = random.nextDouble()
    while (product > cutoff) {
      count++
      product *= random.nextDouble()
    }
    if (count > 0) return min(count, 8)
  }
}

private fun formation(
    count: Int,
    standing: Boolean,
    bend: Double,
    attempt: Int,
): List<Pair<Double, Double>> {
  if (standing) {
    val radius = max(1.0, count * 1.15 / (2 * PI)) + attempt * 0.5
    return List(count) { index ->
      val angle = index * 2 * PI / count
      cos(angle) * radius to sin(angle) * radius
    }
  }
  val rows = if (count <= 4) listOf(count) else listOf(ceil(count / 2.0).toInt(), count / 2)
  return rows.flatMapIndexed { row, size ->
    List(size) { index ->
      val lateral = index - (size - 1) / 2.0
      -row * 1.2 + bend * abs(lateral) * 0.8 to lateral
    }
  }
}

private fun weight(x: Double, z: Double, p: NaturalCrowdOptions): Double {
  val n =
      0.65 * valueNoise(x / p.scale, z / p.scale, p.seed) +
          0.35 * valueNoise(x / p.scale * 2.3 + 17, z / p.scale * 2.3 + 5, p.seed + 7)
  val t = ((n - 0.3) / 0.45).coerceIn(0.0, 1.0)
  return max(1e-4, 1 - p.noise + p.noise * t * t * (3 - 2 * t))
}

private fun valueNoise(x: Double, z: Double, seed: Long): Double {
  val i = floor(x).toLong()
  val j = floor(z).toLong()
  val fx = x - i
  val fz = z - j
  val u = fx * fx * (3 - 2 * fx)
  val v = fz * fz * (3 - 2 * fz)
  val a = hash(i, j, seed)
  val b = hash(i + 1, j, seed)
  val c = hash(i, j + 1, seed)
  val d = hash(i + 1, j + 1, seed)
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v
}

private fun hash(x: Long, z: Long, seed: Long): Double {
  var h = x.toInt() * 374761393 + z.toInt() * 668265263 + seed.toInt() * -2048144789
  h = (h xor (h ushr 13)) * 1274126177
  return ((h xor (h ushr 16)).toLong() and 0xffffffffL) / 4294967296.0
}
