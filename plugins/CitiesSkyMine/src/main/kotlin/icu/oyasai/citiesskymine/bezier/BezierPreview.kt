package icu.oyasai.citiesskymine.bezier

import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.entity.Player

object BezierPreview {

  fun showOnce(player: Player, controlPoints: List<Location>, segments: Int) {
    if (controlPoints.size < 2) return

    val safeSegments = segments.coerceIn(8, 256)
    for (i in 0..safeSegments) {
      val t = i.toDouble() / safeSegments.toDouble()
      val point = BezierGeometry.evaluate(controlPoints, t)
      dust(player, point.x, point.y + 0.12, point.z, Color.AQUA, 1.0f)
    }

    for ((index, point) in controlPoints.withIndex()) {
      val color = if (index == 0 || index == controlPoints.lastIndex) Color.LIME else Color.YELLOW
      dust(player, point.x, point.y + 0.25, point.z, color, 1.6f)
    }

    for (i in 0 until controlPoints.lastIndex) {
      drawControlLine(player, controlPoints[i], controlPoints[i + 1])
    }
  }

  private fun drawControlLine(player: Player, a: Location, b: Location) {
    val steps = 12
    for (i in 0..steps) {
      val t = i.toDouble() / steps.toDouble()
      val x = lerp(a.x, b.x, t)
      val y = lerp(a.y, b.y, t) + 0.06
      val z = lerp(a.z, b.z, t)
      dust(player, x, y, z, Color.SILVER, 0.75f)
    }
  }

  private fun dust(player: Player, x: Double, y: Double, z: Double, color: Color, size: Float) {
    player.spawnParticle(
        Particle.DUST,
        x,
        y,
        z,
        1,
        0.0,
        0.0,
        0.0,
        0.0,
        Particle.DustOptions(color, size),
    )
  }

  private fun lerp(a: Double, b: Double, t: Double): Double = a + (b - a) * t
}
