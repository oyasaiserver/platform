package icu.oyasai.citiesskymine.bezier

import com.sk89q.worldedit.math.BlockVector3
import kotlin.math.abs
import kotlin.math.ceil
import kotlin.math.max
import kotlin.math.roundToInt
import kotlin.math.sqrt
import org.bukkit.Location

object BezierGeometry {

  fun evaluate(points: List<Location>, t: Double): Location {
    val xs = points.map { it.x }.toMutableList()
    val ys = points.map { it.y }.toMutableList()
    val zs = points.map { it.z }.toMutableList()
    for (level in 1 until points.size) {
      for (i in 0 until points.size - level) {
        xs[i] = lerp(xs[i], xs[i + 1], t)
        ys[i] = lerp(ys[i], ys[i + 1], t)
        zs[i] = lerp(zs[i], zs[i + 1], t)
      }
    }
    return Location(points[0].world, xs[0], ys[0], zs[0])
  }

  fun blockPath(points: List<Location>, segments: Int, radius: Int): Set<BlockVector3> {
    if (points.size < 2) return emptySet()

    val safeSegments = segments.coerceIn(8, 256)
    val safeRadius = radius.coerceIn(0, 8)
    val sampled =
        (0..safeSegments).map { i -> evaluate(points, i.toDouble() / safeSegments.toDouble()) }
    val blocks = LinkedHashSet<BlockVector3>()
    for (i in 0 until sampled.lastIndex) {
      addLine(blocks, sampled[i], sampled[i + 1], safeRadius)
    }
    if (sampled.isNotEmpty()) addBrush(blocks, sampled.last(), safeRadius)
    return blocks
  }

  fun flatRoadPath(points: List<Location>, segments: Int, width: Int): Set<BlockVector3> {
    if (points.size < 2) return emptySet()

    val safeSegments = segments.coerceIn(8, 256)
    val safeWidth = width.coerceIn(1, 64)
    val sampled =
        (0..safeSegments).map { i -> evaluate(points, i.toDouble() / safeSegments.toDouble()) }
    val blocks = LinkedHashSet<BlockVector3>()
    for (i in 0 until sampled.lastIndex) {
      addFlatLine(blocks, sampled[i], sampled[i + 1], safeWidth)
    }
    if (sampled.isNotEmpty())
        addFlatBrush(blocks, sampled.last(), sampled.getOrNull(sampled.lastIndex - 1), safeWidth)
    return blocks
  }

  private fun addLine(blocks: MutableSet<BlockVector3>, a: Location, b: Location, radius: Int) {
    val dx = b.x - a.x
    val dy = b.y - a.y
    val dz = b.z - a.z
    val steps = max(1, ceil(max(abs(dx), max(abs(dy), abs(dz))) * 2.0).toInt())
    for (i in 0..steps) {
      val t = i.toDouble() / steps.toDouble()
      addBrush(
          blocks,
          Location(a.world, lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t)),
          radius,
      )
    }
  }

  private fun addFlatLine(blocks: MutableSet<BlockVector3>, a: Location, b: Location, width: Int) {
    val dx = b.x - a.x
    val dy = b.y - a.y
    val dz = b.z - a.z
    val steps = max(1, ceil(max(abs(dx), max(abs(dy), abs(dz))) * 2.0).toInt())
    for (i in 0..steps) {
      val t = i.toDouble() / steps.toDouble()
      val point = Location(a.world, lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t))
      addFlatBrush(blocks, point, b, width)
    }
  }

  private fun addFlatBrush(
      blocks: MutableSet<BlockVector3>,
      center: Location,
      next: Location?,
      width: Int,
  ) {
    val headingX = (next?.x ?: center.x + 1.0) - center.x
    val headingZ = (next?.z ?: center.z) - center.z
    val length = max(1.0e-6, sqrt(headingX * headingX + headingZ * headingZ))
    val perpX = -headingZ / length
    val perpZ = headingX / length
    val start = -(width - 1) / 2.0
    val cy = center.y.roundToInt()

    for (i in 0 until width) {
      val offset = start + i.toDouble()
      val x = (center.x + perpX * offset).roundToInt()
      val z = (center.z + perpZ * offset).roundToInt()
      blocks += BlockVector3.at(x, cy, z)
    }
  }

  private fun addBrush(blocks: MutableSet<BlockVector3>, center: Location, radius: Int) {
    val cx = center.x.roundToInt()
    val cy = center.y.roundToInt()
    val cz = center.z.roundToInt()
    if (radius <= 0) {
      blocks += BlockVector3.at(cx, cy, cz)
      return
    }

    val radiusSquared = radius * radius
    for (dx in -radius..radius) {
      for (dy in -radius..radius) {
        for (dz in -radius..radius) {
          if (dx * dx + dy * dy + dz * dz > radiusSquared) continue
          blocks += BlockVector3.at(cx + dx, cy + dy, cz + dz)
        }
      }
    }
  }

  private fun lerp(a: Double, b: Double, t: Double): Double = a + (b - a) * t
}
