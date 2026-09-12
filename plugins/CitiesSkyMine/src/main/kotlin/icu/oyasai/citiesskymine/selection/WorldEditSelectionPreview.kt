package icu.oyasai.citiesskymine.selection

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.regions.CuboidRegion
import kotlin.math.abs
import kotlin.math.roundToInt
import org.bukkit.Particle
import org.bukkit.entity.Player

object WorldEditSelectionPreview {

  private const val PARTICLES_PER_BLOCK = 3

  fun showOnce(player: Player) {
    val session =
        WorldEdit.getInstance().sessionManager.getIfPresent(BukkitAdapter.adapt(player)) ?: return
    val region =
        try {
          session.getSelection(BukkitAdapter.adapt(player.world))
        } catch (_: IncompleteRegionException) {
          return
        }
    val cuboid = region as? CuboidRegion ?: return

    val min = cuboid.minimumPoint
    val max = cuboid.maximumPoint
    val x0 = min.x().toDouble()
    val y0 = min.y().toDouble()
    val z0 = min.z().toDouble()
    val x1 = max.x() + 1.0
    val y1 = max.y() + 1.0
    val z1 = max.z() + 1.0

    for (y in doubleArrayOf(y0, y1)) {
      drawLine(player, x0, y, z0, x1, y, z0)
      drawLine(player, x0, y, z1, x1, y, z1)
      drawLine(player, x0, y, z0, x0, y, z1)
      drawLine(player, x1, y, z0, x1, y, z1)
    }
    for (x in doubleArrayOf(x0, x1)) {
      for (z in doubleArrayOf(z0, z1)) {
        drawLine(player, x, y0, z, x, y1, z)
      }
    }
  }

  private fun drawLine(
      player: Player,
      fromX: Double,
      fromY: Double,
      fromZ: Double,
      toX: Double,
      toY: Double,
      toZ: Double,
  ) {
    val steps =
        (maxOf(abs(toX - fromX), abs(toY - fromY), abs(toZ - fromZ)) * PARTICLES_PER_BLOCK)
            .roundToInt()
    for (i in 0..steps) {
      val t = i.toDouble() / steps
      player.spawnParticle(
          Particle.FLAME,
          fromX + (toX - fromX) * t,
          fromY + (toY - fromY) * t,
          fromZ + (toZ - fromZ) * t,
          1,
          0.0,
          0.0,
          0.0,
          0.0,
      )
    }
  }
}
