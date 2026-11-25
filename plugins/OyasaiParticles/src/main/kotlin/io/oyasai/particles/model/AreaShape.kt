package io.oyasai.particles.model

import kotlin.math.PI
import kotlin.math.ceil
import kotlin.math.cos
import kotlin.math.floor
import kotlin.math.max
import kotlin.math.min
import kotlin.math.sin

enum class ShapeMode {
  BOX,
  CYLINDER;

  fun next(): ShapeMode = if (this == BOX) CYLINDER else BOX
}

sealed interface AreaShape {
  val mode: ShapeMode
  val minY: Int
  val maxY: Int

  fun contains(x: Double, y: Double, z: Double): Boolean

  fun volume(): Long

  fun center(): Triple<Double, Double, Double>

  fun boundingRadius(): Double

  fun sampleProtectionPoints(step: Int = 8): List<Triple<Int, Int, Int>>

  fun describe(): String

  data class Box(
      val minX: Int,
      override val minY: Int,
      val minZ: Int,
      val maxX: Int,
      override val maxY: Int,
      val maxZ: Int,
  ) : AreaShape {
    override val mode: ShapeMode = ShapeMode.BOX

    override fun contains(x: Double, y: Double, z: Double): Boolean {
      return x >= minX.toDouble() &&
          x <= (maxX + 1).toDouble() &&
          y >= minY.toDouble() &&
          y <= (maxY + 1).toDouble() &&
          z >= minZ.toDouble() &&
          z <= (maxZ + 1).toDouble()
    }

    override fun volume(): Long {
      val dx = Math.addExact((maxX - minX).toLong(), 1L)
      val dy = Math.addExact((maxY - minY).toLong(), 1L)
      val dz = Math.addExact((maxZ - minZ).toLong(), 1L)
      return Math.multiplyExact(Math.multiplyExact(dx, dy), dz)
    }

    fun maxSide(): Int {
      val dx = maxX - minX + 1
      val dy = maxY - minY + 1
      val dz = maxZ - minZ + 1
      return maxOf(dx, dy, dz)
    }

    override fun center(): Triple<Double, Double, Double> =
        Triple((minX + maxX + 1) / 2.0, (minY + maxY + 1) / 2.0, (minZ + maxZ + 1) / 2.0)

    override fun boundingRadius(): Double {
      val dx = (maxX - minX + 1) / 2.0
      val dy = (maxY - minY + 1) / 2.0
      val dz = (maxZ - minZ + 1) / 2.0
      return kotlin.math.sqrt(dx * dx + dy * dy + dz * dz)
    }

    override fun sampleProtectionPoints(step: Int): List<Triple<Int, Int, Int>> {
      val safeStep = max(1, step)
      val points = LinkedHashSet<Triple<Int, Int, Int>>()
      val xs = sampleAxis(minX, maxX, safeStep)
      val ys = sampleAxis(minY, maxY, safeStep)
      val zs = sampleAxis(minZ, maxZ, safeStep)
      for (x in xs) {
        for (y in ys) {
          for (z in zs) {
            points.add(Triple(x, y, z))
          }
        }
      }
      val (cx, cy, cz) = center()
      points.add(Triple(floor(cx).toInt(), floor(cy).toInt(), floor(cz).toInt()))
      return points.toList()
    }

    override fun describe(): String = "Box($minX,$minY,$minZ -> $maxX,$maxY,$maxZ)"

    companion object {
      fun of(x1: Int, y1: Int, z1: Int, x2: Int, y2: Int, z2: Int): Box =
          Box(
              minX = min(x1, x2),
              minY = min(y1, y2),
              minZ = min(z1, z2),
              maxX = max(x1, x2),
              maxY = max(y1, y2),
              maxZ = max(z1, z2),
          )
    }
  }

  data class Cylinder(
      val centerX: Double,
      val centerZ: Double,
      override val minY: Int,
      override val maxY: Int,
      val radius: Double,
  ) : AreaShape {
    override val mode: ShapeMode = ShapeMode.CYLINDER

    init {
      require(radius > 0.0) { "radius must be positive" }
      require(minY <= maxY) { "minY must be <= maxY" }
    }

    override fun contains(x: Double, y: Double, z: Double): Boolean {
      if (y < minY.toDouble() || y > (maxY + 1).toDouble()) return false
      val dx = x - centerX
      val dz = z - centerZ
      return dx * dx + dz * dz <= radius * radius
    }

    override fun volume(): Long {
      val h = Math.addExact((maxY - minY).toLong(), 1L)
      val area = max(1L, ceil(PI * radius * radius).toLong())
      return Math.multiplyExact(area, h)
    }

    fun height(): Int = maxY - minY + 1

    override fun center(): Triple<Double, Double, Double> =
        Triple(centerX, (minY + maxY + 1) / 2.0, centerZ)

    override fun boundingRadius(): Double {
      val halfH = (maxY - minY + 1) / 2.0
      return kotlin.math.sqrt(radius * radius + halfH * halfH)
    }

    override fun sampleProtectionPoints(step: Int): List<Triple<Int, Int, Int>> {
      val safeStep = max(1, step)
      val points = LinkedHashSet<Triple<Int, Int, Int>>()
      val ys = sampleAxis(minY, maxY, safeStep)
      val ringCounts = max(1, ceil(radius / safeStep).toInt())
      val angleCount = max(8, ceil(2.0 * PI * radius / safeStep).toInt().coerceAtMost(32))

      for (y in ys) {
        points.add(Triple(floor(centerX).toInt(), y, floor(centerZ).toInt()))
        for (ring in 1..ringCounts) {
          val r = radius * ring.toDouble() / ringCounts.toDouble()
          for (i in 0 until angleCount) {
            val angle = 2.0 * PI * i / angleCount
            val px = floor(centerX + r * cos(angle)).toInt()
            val pz = floor(centerZ + r * sin(angle)).toInt()
            points.add(Triple(px, y, pz))
          }
        }
      }
      return points.toList()
    }

    override fun describe(): String =
        "Cylinder(${String.format("%.1f", centerX)},${String.format("%.1f", centerZ)} y=$minY..$maxY r=${String.format("%.1f", radius)})"

    companion object {
      fun of(centerX: Double, centerZ: Double, y1: Int, y2: Int, radius: Double): Cylinder =
          Cylinder(
              centerX = centerX,
              centerZ = centerZ,
              minY = min(y1, y2),
              maxY = max(y1, y2),
              radius = radius.coerceAtLeast(0.5),
          )
    }
  }
}

private fun sampleAxis(minVal: Int, maxVal: Int, step: Int): List<Int> {
  val result = LinkedHashSet<Int>()
  result.add(minVal)
  var v = minVal + step
  while (v < maxVal) {
    result.add(v)
    v += step
  }
  result.add(maxVal)
  return result.toList()
}
