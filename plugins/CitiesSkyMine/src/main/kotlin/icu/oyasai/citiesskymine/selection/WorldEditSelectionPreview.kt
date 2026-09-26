package icu.oyasai.citiesskymine.selection

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import icu.oyasai.citiesskymine.Main
import java.util.UUID
import kotlin.math.ceil
import kotlin.math.floor
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

private const val PARTICLES_PER_BLOCK = 3

object WorldEditSelectionPreview : Listener {
  private val states = mutableMapOf<UUID, State>()

  private class State {
    @Volatile var active = true
    @Volatile var running = false
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    states.remove(event.player.uniqueId)?.active = false
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
                  return@Runnable
                }
            val cuboid = region as? CuboidRegion ?: return@Runnable
            val min = cuboid.minimumPoint
            val max = cuboid.maximumPoint
            if (limit > 0 && exceedsVolumeLimit(min, max, limit) && !bypass) return@Runnable
            drawSelection(player, state, location, radius.toDouble(), radiusSquared, min, max)
          } finally {
            state.running = false
          }
        },
    )
  }

  private fun exceedsVolumeLimit(min: BlockVector3, max: BlockVector3, limit: Long): Boolean {
    val width = max.x().toLong() - min.x() + 1
    val height = max.y().toLong() - min.y() + 1
    val depth = max.z().toLong() - min.z() + 1
    return exceedsVolumeLimit(width, height, depth, limit)
  }

  private fun drawSelection(
      player: Player,
      state: State,
      location: Location,
      radius: Double,
      radiusSquared: Double,
      min: BlockVector3,
      max: BlockVector3,
  ) {
    val x0 = min.x().toDouble()
    val y0 = min.y().toDouble()
    val z0 = min.z().toDouble()
    val x1 = max.x() + 1.0
    val y1 = max.y() + 1.0
    val z1 = max.z() + 1.0
    for (y in doubleArrayOf(y0, y1)) {
      drawLine(player, state, location, radius, radiusSquared, x0, y, z0, x1, y, z0)
      drawLine(player, state, location, radius, radiusSquared, x0, y, z1, x1, y, z1)
      drawLine(player, state, location, radius, radiusSquared, x0, y, z0, x0, y, z1)
      drawLine(player, state, location, radius, radiusSquared, x1, y, z0, x1, y, z1)
    }
    for (x in doubleArrayOf(x0, x1)) {
      for (z in doubleArrayOf(z0, z1)) {
        drawLine(player, state, location, radius, radiusSquared, x, y0, z, x, y1, z)
      }
    }
  }

  private fun drawLine(
      player: Player,
      state: State,
      location: Location,
      radius: Double,
      radiusSquared: Double,
      fromX: Double,
      fromY: Double,
      fromZ: Double,
      toX: Double,
      toY: Double,
      toZ: Double,
  ) {
    val axis = if (fromX != toX) 0 else if (fromY != toY) 1 else 2
    val from =
        when (axis) {
          0 -> fromX
          1 -> fromY
          else -> fromZ
        }
    val to =
        when (axis) {
          0 -> toX
          1 -> toY
          else -> toZ
        }
    val center =
        when (axis) {
          0 -> location.x
          1 -> location.y
          else -> location.z
        }
    val offsetSquared =
        when (axis) {
          0 ->
              (fromY - location.y) * (fromY - location.y) +
                  (fromZ - location.z) * (fromZ - location.z)
          1 ->
              (fromX - location.x) * (fromX - location.x) +
                  (fromZ - location.z) * (fromZ - location.z)
          else ->
              (fromX - location.x) * (fromX - location.x) +
                  (fromY - location.y) * (fromY - location.y)
        }
    if (offsetSquared > radiusSquared) return
    val steps = ((to - from) * PARTICLES_PER_BLOCK).toLong()
    for (i in clippedLineIndices(from, to, center, radius)) {
      if (!state.active) return
      val t = i.toDouble() / steps
      val x = fromX + (toX - fromX) * t
      val y = fromY + (toY - fromY) * t
      val z = fromZ + (toZ - fromZ) * t
      val dx = x - location.x
      val dy = y - location.y
      val dz = z - location.z
      if (dx * dx + dy * dy + dz * dz > radiusSquared) continue
      player.spawnParticle(Particle.FLAME, x, y, z, 1, 0.0, 0.0, 0.0, 0.0, null, true)
    }
  }
}

internal fun clippedLineIndices(
    from: Double,
    to: Double,
    center: Double,
    radius: Double,
): LongRange {
  val start = maxOf(from, center - radius)
  val end = minOf(to, center + radius)
  if (start > end) return LongRange.EMPTY
  return ceil((start - from) * PARTICLES_PER_BLOCK).toLong()..floor(
              (end - from) * PARTICLES_PER_BLOCK
          )
          .toLong()
}

internal fun exceedsVolumeLimit(width: Long, height: Long, depth: Long, limit: Long): Boolean =
    width > limit || height > limit / width || depth > limit / width / height
