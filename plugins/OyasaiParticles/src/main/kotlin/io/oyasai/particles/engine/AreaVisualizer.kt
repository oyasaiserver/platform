package io.oyasai.particles.engine

import io.oyasai.particles.item.ParticleItemFactory
import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.model.ParticleArea
import io.oyasai.particles.selection.SelectionManager
import io.oyasai.particles.service.AreaService
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.math.PI
import kotlin.math.ceil
import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.sqrt
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.World
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.entity.Player

class AreaVisualizer(
    private val areaService: AreaService,
    private val selectionManager: SelectionManager,
    private val itemFactory: ParticleItemFactory,
    config: FileConfiguration,
) {
  val tickInterval: Long = config.getLong("render.visualize-tick-interval", 10L).coerceIn(2L, 40L)
  private val visualizeRange: Double =
      config.getDouble("render.visualize-range", 48.0).coerceIn(12.0, 96.0)
  private val toggledPlayers = ConcurrentHashMap.newKeySet<UUID>()

  fun toggle(playerUuid: UUID): Boolean {
    return if (toggledPlayers.remove(playerUuid)) {
      false
    } else {
      toggledPlayers.add(playerUuid)
      true
    }
  }

  fun isToggled(playerUuid: UUID): Boolean = toggledPlayers.contains(playerUuid)

  fun releasePlayer(playerUuid: UUID) {
    toggledPlayers.remove(playerUuid)
  }

  fun isVisualizing(player: Player): Boolean {
    val holdingWand =
        itemFactory.isWand(player.inventory.itemInMainHand) ||
            itemFactory.isWand(player.inventory.itemInOffHand)
    return holdingWand || toggledPlayers.contains(player.uniqueId)
  }

  /** プレイヤーの視線先にある編集可能エリアの中心マーカー（白いパーティクル）を判定して返す。 */
  fun findTargetedAreaCenter(
      player: Player,
      maxDistance: Double = 10.0,
      hitRadius: Double = 1.6,
  ): ParticleArea? {
    if (!isVisualizing(player)) return null
    val world = player.world
    val eye = player.eyeLocation
    val dir = eye.direction.clone().normalize()
    val isAdmin = player.hasPermission("oyasaiparticles.admin")

    var bestArea: ParticleArea? = null
    var bestAlong = Double.MAX_VALUE

    for (area in areaService.areasInWorld(world.name)) {
      if (!isAdmin && area.ownerUuid != player.uniqueId) continue
      val (cx, cy, cz) = area.shape.center()
      val vx = cx - eye.x
      val vy = cy - eye.y
      val vz = cz - eye.z
      val along = vx * dir.x + vy * dir.y + vz * dir.z
      if (along < 0.0 || along > maxDistance) continue

      val px = eye.x + dir.x * along
      val py = eye.y + dir.y * along
      val pz = eye.z + dir.z * along
      val perpSq = (cx - px) * (cx - px) + (cy - py) * (cy - py) + (cz - pz) * (cz - pz)
      if (perpSq <= hitRadius * hitRadius && along < bestAlong) {
        bestAlong = along
        bestArea = area
      }
    }
    return bestArea
  }

  fun tick() {
    val dustParticle = runCatching { Particle.DUST }.getOrNull() ?: return
    val centerMarker = runCatching { Particle.END_ROD }.getOrNull()
    val selectionDust = Particle.DustOptions(Color.AQUA, 1.15f)
    val ownAreaDust = Particle.DustOptions(Color.fromRGB(255, 110, 199), 1.15f)
    val otherAreaDust = Particle.DustOptions(Color.YELLOW, 1.05f)

    for (player in Bukkit.getOnlinePlayers()) {
      if (!isVisualizing(player)) {
        continue
      }

      val world = player.world
      val selectionShape = selectionManager.buildShape(player.uniqueId, world.name)
      if (selectionShape != null) {
        drawOutline(player, world, selectionShape, dustParticle, selectionDust)
      }

      val isAdmin = player.hasPermission("oyasaiparticles.admin")
      val pLoc = player.location
      for (area in areaService.areasInWorld(world.name)) {
        if (!isAdmin && area.ownerUuid != player.uniqueId) continue
        val (cx, cy, cz) = area.shape.center()
        val distSq =
            (pLoc.x - cx) * (pLoc.x - cx) +
                (pLoc.y - cy) * (pLoc.y - cy) +
                (pLoc.z - cz) * (pLoc.z - cz)
        val maxDist = visualizeRange + area.shape.boundingRadius()
        if (distSq > maxDist * maxDist) continue

        val dust = if (area.ownerUuid == player.uniqueId) ownAreaDust else otherAreaDust
        drawOutline(player, world, area.shape, dustParticle, dust)
        if (centerMarker != null) {
          player.spawnParticle(centerMarker, Location(world, cx, cy, cz), 1, 0.0, 0.0, 0.0, 0.0)
        }
      }
    }
  }

  private fun drawOutline(
      player: Player,
      world: World,
      shape: AreaShape,
      particle: Particle,
      dust: Particle.DustOptions,
  ) {
    when (shape) {
      is AreaShape.Box -> drawBoxOutline(player, world, shape, particle, dust)
      is AreaShape.Cylinder -> drawCylinderOutline(player, world, shape, particle, dust)
    }
  }

  private fun drawBoxOutline(
      player: Player,
      world: World,
      box: AreaShape.Box,
      particle: Particle,
      dust: Particle.DustOptions,
  ) {
    val x1 = box.minX.toDouble()
    val y1 = box.minY.toDouble()
    val z1 = box.minZ.toDouble()
    val x2 = (box.maxX + 1).toDouble()
    val y2 = (box.maxY + 1).toDouble()
    val z2 = (box.maxZ + 1).toDouble()

    drawSegment(player, world, x1, y1, z1, x2, y1, z1, particle, dust)
    drawSegment(player, world, x1, y1, z2, x2, y1, z2, particle, dust)
    drawSegment(player, world, x1, y2, z1, x2, y2, z1, particle, dust)
    drawSegment(player, world, x1, y2, z2, x2, y2, z2, particle, dust)

    drawSegment(player, world, x1, y1, z1, x1, y1, z2, particle, dust)
    drawSegment(player, world, x2, y1, z1, x2, y1, z2, particle, dust)
    drawSegment(player, world, x1, y2, z1, x1, y2, z2, particle, dust)
    drawSegment(player, world, x2, y2, z1, x2, y2, z2, particle, dust)

    drawSegment(player, world, x1, y1, z1, x1, y2, z1, particle, dust)
    drawSegment(player, world, x2, y1, z1, x2, y2, z1, particle, dust)
    drawSegment(player, world, x1, y1, z2, x1, y2, z2, particle, dust)
    drawSegment(player, world, x2, y1, z2, x2, y2, z2, particle, dust)
  }

  private fun drawCylinderOutline(
      player: Player,
      world: World,
      cyl: AreaShape.Cylinder,
      particle: Particle,
      dust: Particle.DustOptions,
  ) {
    val y1 = cyl.minY.toDouble()
    val y2 = (cyl.maxY + 1).toDouble()
    val points = (2.0 * PI * cyl.radius / 1.5).toInt().coerceIn(12, 48)
    for (i in 0 until points) {
      val angle = 2.0 * PI * i / points
      val px = cyl.centerX + cyl.radius * cos(angle)
      val pz = cyl.centerZ + cyl.radius * sin(angle)
      spawnDustIfNearby(player, world, px, y1, pz, particle, dust)
      spawnDustIfNearby(player, world, px, y2, pz, particle, dust)
    }
    for (i in 0 until 4) {
      val angle = 2.0 * PI * i / 4.0
      val px = cyl.centerX + cyl.radius * cos(angle)
      val pz = cyl.centerZ + cyl.radius * sin(angle)
      drawSegment(player, world, px, y1, pz, px, y2, pz, particle, dust)
    }
  }

  private fun drawSegment(
      player: Player,
      world: World,
      x1: Double,
      y1: Double,
      z1: Double,
      x2: Double,
      y2: Double,
      z2: Double,
      particle: Particle,
      dust: Particle.DustOptions,
  ) {
    val len = sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1))
    val steps = ceil(len / 1.5).toInt().coerceIn(1, 32)
    for (i in 0..steps) {
      val t = i.toDouble() / steps.toDouble()
      val x = x1 + (x2 - x1) * t
      val y = y1 + (y2 - y1) * t
      val z = z1 + (z2 - z1) * t
      spawnDustIfNearby(player, world, x, y, z, particle, dust)
    }
  }

  private fun spawnDustIfNearby(
      player: Player,
      world: World,
      x: Double,
      y: Double,
      z: Double,
      particle: Particle,
      dust: Particle.DustOptions,
  ) {
    val pLoc = player.location
    val maxSq = visualizeRange * visualizeRange
    val dx = pLoc.x - x
    val dy = pLoc.y - y
    val dz = pLoc.z - z
    if (dx * dx + dy * dy + dz * dz <= maxSq) {
      player.spawnParticle(particle, Location(world, x, y, z), 1, 0.0, 0.0, 0.0, 0.0, dust)
    }
  }
}
