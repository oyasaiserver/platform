package icu.oyasai.utilities.teleport

import kotlin.math.roundToInt
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.entity.Player

/** Main-thread block inspection, following EssentialsX 776f709 LocationUtil. */
object TeleportSafety {
  private val solidTransparent =
      setOf(Material.BARRIER, Material.DIRT_PATH, Material.FARMLAND, Material.WATER)
  private val damaging =
      setOf(
          Material.CACTUS,
          Material.CAMPFIRE,
          Material.FIRE,
          Material.MAGMA_BLOCK,
          Material.SOUL_CAMPFIRE,
          Material.SOUL_FIRE,
          Material.SWEET_BERRY_BUSH,
          Material.WITHER_ROSE,
      )
  private val volume =
      (-3..3)
          .flatMap { x -> (-3..3).flatMap { y -> (-3..3).map { z -> Triple(x, y, z) } } }
          .sortedBy { (x, y, z) -> x * x + y * y + z * z }

  /** /sethome validates the exact feet block; unlike teleport it never searches or rounds. */
  fun canSetHome(player: Player, loc: Location): Boolean {
    val world = loc.world ?: return false
    if (!listOf(loc.x, loc.y, loc.z).all { it.isFinite() }) return false
    if (
        player.world == world &&
            player.allowFlight &&
            (player.gameMode == GameMode.CREATIVE || player.gameMode == GameMode.SPECTATOR)
    )
        return true
    return world.worldBorder.isInside(loc) && !unsafe(world, loc.blockX, loc.blockY, loc.blockZ)
  }

  fun destination(
      player: Player,
      loc: Location,
      safety: Boolean = true,
      center: Boolean = true,
  ): Location? {
    val world = loc.world ?: return null
    if (
        !listOf(loc.x, loc.y, loc.z, loc.yaw.toDouble(), loc.pitch.toDouble()).all { it.isFinite() }
    )
        return null
    val privileged = player.gameMode == GameMode.CREATIVE || player.gameMode == GameMode.SPECTATOR
    if (!safety || privileged) {
      if (safety && privileged && player.allowFlight && shouldFly(world, loc)) {
        player.isFlying = true
      }
      return if (center)
          Location(
              world,
              loc.blockX + 0.5,
              loc.y.roundToInt().toDouble(),
              loc.blockZ + 0.5,
              loc.yaw,
              loc.pitch,
          )
      else loc.clone()
    }
    // The Nether logical ceiling is 128; destinations explicitly above it remain above it.
    val maxY =
        if (world.environment == World.Environment.NETHER && loc.blockY < 128) 127
        else world.maxHeight - 2
    val minY = world.minHeight + 1
    if (minY > maxY) return null
    val border = world.worldBorder
    val half = border.size / 2.0
    val x =
        loc.blockX.coerceIn(
            kotlin.math.ceil(border.center.x - half).toInt(),
            kotlin.math.ceil(border.center.x + half).toInt() - 1,
        )
    val z =
        loc.blockZ.coerceIn(
            kotlin.math.ceil(border.center.z - half).toInt(),
            kotlin.math.ceil(border.center.z + half).toInt() - 1,
        )
    val originalY = loc.y.roundToInt().coerceIn(minY, maxY)
    fun candidate(cx: Int, cy: Int, cz: Int): Location? {
      if (cy !in minY..maxY) return null
      val result = Location(world, cx + 0.5, cy.toDouble(), cz + 0.5, loc.yaw, loc.pitch)
      return result.takeIf { border.isInside(it) && !unsafe(world, cx, cy, cz) }
    }
    // Preserve upstream's initial downward search over air before searching the 3-block volume.
    var y = originalY
    while (y > minY && hollow(world.getBlockAt(x, y - 1, z).type)) y--
    candidate(x, y, z)?.let {
      return it
    }
    volume.forEach { (dx, dy, dz) ->
      candidate(x + dx, (originalY + dy).coerceIn(minY, maxY), z + dz)?.let {
        return it
      }
    }
    // Upstream eventually scans columns up to 48 blocks east; use explicit bounds to avoid loops
    // at empty floors and respect negative build heights and the world border on every candidate.
    for (dx in 0..48) {
      for (cy in (originalY + 3).coerceAtMost(maxY)..maxY) candidate(x + dx, cy, z)?.let {
        return it
      }
      for (cy in maxY downTo minY) candidate(x + dx, cy, z)?.let {
        return it
      }
    }
    return null
  }

  fun unsafe(world: World, x: Int, y: Int, z: Int): Boolean {
    if (y <= world.minHeight || y + 1 >= world.maxHeight) return true
    val below = world.getBlockAt(x, y - 1, z).type
    val feet = world.getBlockAt(x, y, z).type
    val above = world.getBlockAt(x, y + 1, z).type
    return below in damaging ||
        below == Material.LAVA ||
        below.name.endsWith("_BED") ||
        hollow(below) ||
        feet == Material.NETHER_PORTAL ||
        !hollow(feet) ||
        !hollow(above)
  }

  private fun shouldFly(world: World, loc: Location): Boolean {
    var y = loc.y.roundToInt()
    var count = 0
    while (y >= world.minHeight && unsafe(world, loc.blockX, y, loc.blockZ)) {
      y--
      if (++count > 2) return true
    }
    return y < world.minHeight
  }

  @Suppress("DEPRECATION")
  private fun hollow(material: Material): Boolean =
      material == Material.LIGHT || (material.isTransparent && material !in solidTransparent)
}
