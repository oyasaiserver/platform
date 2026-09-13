package io.oyasai.oyasaiAdminTools.worldborder

import kotlin.math.abs
import kotlin.math.floor
import kotlin.math.sqrt
import org.bukkit.Location
import org.bukkit.World

data class WorldBorderData(
    var x: Double,
    var z: Double,
    var radiusX: Int,
    var radiusZ: Int,
    var shapeRound: Boolean? = null,
    var wrapping: Boolean = false,
) {
  val minX: Double
    get() = x - radiusX

  val maxX: Double
    get() = x + radiusX

  val minZ: Double
    get() = z - radiusZ

  val maxZ: Double
    get() = z + radiusZ

  private val radiusXSquared: Double
    get() = radiusX.toDouble() * radiusX

  private val radiusZSquared: Double
    get() = radiusZ.toDouble() * radiusZ

  fun isRound(defaultRound: Boolean): Boolean = shapeRound ?: defaultRound

  fun usesVanillaBorder(defaultRound: Boolean): Boolean =
      !isRound(defaultRound) && radiusX == radiusZ && radiusX > 0

  fun inside(xLoc: Double, zLoc: Double, defaultRound: Boolean): Boolean {
    if (isRound(defaultRound)) {
      val dx = abs(x - xLoc)
      val dz = abs(z - zLoc)
      val definiteX = sqrt(0.5 * radiusXSquared)
      val definiteZ = sqrt(0.5 * radiusZSquared)
      if (dx < definiteX && dz < definiteZ) return true
      if (dx >= radiusX || dz >= radiusZ) return false
      val quotient = if (radiusZSquared == 0.0) 0.0 else radiusXSquared / radiusZSquared
      return dx * dx + dz * dz * quotient < radiusXSquared
    }
    return xLoc in minX..maxX && zLoc in minZ..maxZ
  }

  fun correctedPosition(
      loc: Location,
      defaultRound: Boolean,
      knockBack: Double,
      flying: Boolean,
  ): Location? {
    val world = loc.world ?: return null
    var xLoc = loc.x
    var zLoc = loc.z

    if (isRound(defaultRound)) {
      val dX = xLoc - x
      val dZ = zLoc - z
      val dU = sqrt(dX * dX + dZ * dZ)
      if (dU == 0.0) return loc.clone()
      val dT =
          sqrt(
              dX * dX / radiusXSquared.coerceAtLeast(1.0) +
                  dZ * dZ / radiusZSquared.coerceAtLeast(1.0)
          )
      if (dT == 0.0) return loc.clone()
      val f = 1 / dT - knockBack / dU
      if (wrapping) {
        xLoc = x - dX * f
        zLoc = z - dZ * f
      } else {
        xLoc = x + dX * f
        zLoc = z + dZ * f
      }
    } else if (wrapping) {
      if (xLoc <= minX) xLoc = maxX - knockBack else if (xLoc >= maxX) xLoc = minX + knockBack
      if (zLoc <= minZ) zLoc = maxZ - knockBack else if (zLoc >= maxZ) zLoc = minZ + knockBack
    } else {
      if (xLoc <= minX) xLoc = minX + knockBack else if (xLoc >= maxX) xLoc = maxX - knockBack
      if (zLoc <= minZ) zLoc = minZ + knockBack else if (zLoc >= maxZ) zLoc = maxZ - knockBack
    }

    val y =
        safeY(world, floor(xLoc).toInt(), loc.blockY, floor(zLoc).toInt(), flying) ?: return null
    return Location(world, floor(xLoc) + 0.5, y, floor(zLoc) + 0.5, loc.yaw, loc.pitch)
  }

  fun describe(): String {
    val radius = if (radiusX == radiusZ) radiusX.toString() else "${radiusX}x$radiusZ"
    val shape =
        when (shapeRound) {
          true -> " (shape override: elliptic/round)"
          false -> " (shape override: rectangular/square)"
          null -> ""
        }
    val wrap = if (wrapping) " (wrapping)" else ""
    return "radius $radius at X: ${formatCoord(x)} Z: ${formatCoord(z)}$shape$wrap"
  }

  companion object {
    fun formatCoord(value: Double): String = "%.1f".format(value)

    private fun safeY(world: World, x: Int, startY: Int, z: Int, flying: Boolean): Double? {
      val minY = world.minHeight + 1
      val maxY = world.maxHeight - 2
      val y = startY.coerceIn(minY, maxY)
      if (flying) return y.toDouble()
      val standY = (world.getHighestBlockYAt(x, z) + 1).coerceIn(minY, maxY)
      return standY.toDouble()
    }
  }
}
