package icu.oyasai.citiesskymine.selection

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import icu.oyasai.citiesskymine.Main
import java.util.UUID
import kotlin.math.abs
import kotlin.math.roundToInt
import org.bukkit.Particle
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

object WorldEditSelectionPreview : Listener {
  private const val PARTICLES_PER_BLOCK = 3
  private val states = mutableMapOf<UUID, State>()

  private data class Selection(val world: UUID, val min: BlockVector3, val max: BlockVector3)

  private class State {
    @Volatile var active = true
    @Volatile var running = false
    @Volatile var cached: Pair<Selection, DoubleArray>? = null
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    states.remove(event.player.uniqueId)?.let {
      it.active = false
      it.cached = null
    }
  }

  fun clear() {
    states.values.forEach { it.active = false }
    states.clear()
  }

  fun showOnce(plugin: Main, player: Player) {
    val maxPing = plugin.config.getInt("sui.max-ping", 150)
    if (maxPing > 0 && player.ping > maxPing) return

    val state = states.getOrPut(player.uniqueId) { State() }
    if (state.running) return
    state.running = true
    val actor = BukkitAdapter.adapt(player)
    val world = BukkitAdapter.adapt(player.world)
    val worldId = player.world.uid
    val location = player.location
    val limit = plugin.config.getLong("sui.max-selection-size-to-display", 10_000_000L)
    val bypass =
        plugin.config.getBoolean("sui.enable-max-selection-bypass-perm", true) &&
            player.hasPermission("citiesskymine.sui.maxselectionsize.bypass")
    val radius = plugin.config.getInt("sui.particle-viewdistance", 99).coerceIn(1, 500)
    val radiusSquared = radius.toDouble() * radius

    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          try {
            if (!state.active) return@Runnable
            val session =
                WorldEdit.getInstance().sessionManager.getIfPresent(actor) ?: return@Runnable
            val region =
                try {
                  session.getSelection(world)
                } catch (_: IncompleteRegionException) {
                  state.cached = null
                  return@Runnable
                }
            val cuboid = region as? CuboidRegion ?: return@Runnable
            val selection = Selection(worldId, cuboid.minimumPoint, cuboid.maximumPoint)
            if (limit > 0 && exceedsVolumeLimit(selection, limit) && !bypass) return@Runnable

            val points =
                state.cached?.takeIf { it.first == selection }?.second ?: calculate(selection)
            if (state.active) state.cached = selection to points
            for (i in points.indices step 3) {
              if (!state.active) break
              val dx = points[i] - location.x
              val dy = points[i + 1] - location.y
              val dz = points[i + 2] - location.z
              if (dx * dx + dy * dy + dz * dz > radiusSquared) continue
              player.spawnParticle(
                  Particle.FLAME,
                  points[i],
                  points[i + 1],
                  points[i + 2],
                  1,
                  0.0,
                  0.0,
                  0.0,
                  0.0,
                  null,
                  true,
              )
            }
          } finally {
            state.running = false
          }
        },
    )
  }

  private fun exceedsVolumeLimit(selection: Selection, limit: Long): Boolean {
    val width = selection.max.x().toLong() - selection.min.x() + 1
    val height = selection.max.y().toLong() - selection.min.y() + 1
    val depth = selection.max.z().toLong() - selection.min.z() + 1
    return exceedsVolumeLimit(width, height, depth, limit)
  }

  private fun calculate(selection: Selection): DoubleArray {
    val points = ArrayList<Double>()
    val x0 = selection.min.x().toDouble()
    val y0 = selection.min.y().toDouble()
    val z0 = selection.min.z().toDouble()
    val x1 = selection.max.x() + 1.0
    val y1 = selection.max.y() + 1.0
    val z1 = selection.max.z() + 1.0
    for (y in doubleArrayOf(y0, y1)) {
      drawLine(points, x0, y, z0, x1, y, z0)
      drawLine(points, x0, y, z1, x1, y, z1)
      drawLine(points, x0, y, z0, x0, y, z1)
      drawLine(points, x1, y, z0, x1, y, z1)
    }
    for (x in doubleArrayOf(x0, x1)) {
      for (z in doubleArrayOf(z0, z1)) {
        drawLine(points, x, y0, z, x, y1, z)
      }
    }
    return points.toDoubleArray()
  }

  private fun drawLine(
      points: MutableList<Double>,
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
      points.add(fromX + (toX - fromX) * t)
      points.add(fromY + (toY - fromY) * t)
      points.add(fromZ + (toZ - fromZ) * t)
    }
  }
}

internal fun exceedsVolumeLimit(width: Long, height: Long, depth: Long, limit: Long): Boolean =
    width > limit || height > limit / width || depth > limit / width / height
