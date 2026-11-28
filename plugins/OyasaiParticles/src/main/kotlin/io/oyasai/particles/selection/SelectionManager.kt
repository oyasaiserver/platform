package io.oyasai.particles.selection

import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.model.ShapeMode
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.math.hypot
import kotlin.math.max
import kotlin.math.min
import org.bukkit.Location

data class BlockPos(val x: Int, val y: Int, val z: Int)

data class PlayerSelection(
    val worldName: String,
    val mode: ShapeMode = ShapeMode.BOX,
    val pos1: BlockPos? = null,
    val pos2: BlockPos? = null,
    val cylinderRadius: Double = 6.0,
    val cylinderMinY: Int? = null,
    val cylinderMaxY: Int? = null,
) {
  fun toAreaShape(): AreaShape? {
    val p1 = pos1 ?: return null
    return when (mode) {
      ShapeMode.BOX -> {
        val p2 = pos2 ?: return null
        AreaShape.Box.of(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
      }
      ShapeMode.CYLINDER -> {
        val minY = cylinderMinY ?: p1.y
        val maxY = cylinderMaxY ?: max(p1.y + 8, minY)
        AreaShape.Cylinder.of(
            centerX = p1.x + 0.5,
            centerZ = p1.z + 0.5,
            y1 = minY,
            y2 = maxY,
            radius = cylinderRadius.coerceAtLeast(1.0),
        )
      }
    }
  }
}

class SelectionManager {
  private val selections = ConcurrentHashMap<UUID, PlayerSelection>()

  fun get(playerUuid: UUID): PlayerSelection? = selections[playerUuid]

  fun setPos1(playerUuid: UUID, location: Location): PlayerSelection {
    val worldName = location.world?.name ?: ""
    val pos = BlockPos(location.blockX, location.blockY, location.blockZ)
    val current = selections[playerUuid]?.takeIf { it.worldName == worldName }
    val updated =
        if (current == null) {
          PlayerSelection(
              worldName = worldName,
              mode = ShapeMode.BOX,
              pos1 = pos,
              cylinderMinY = pos.y,
              cylinderMaxY = pos.y + 8,
          )
        } else {
          val minY =
              if (current.pos2 != null) min(pos.y, current.pos2.y)
              else (current.cylinderMinY ?: pos.y)
          val maxY =
              if (current.pos2 != null) max(pos.y, current.pos2.y)
              else (current.cylinderMaxY ?: (pos.y + 8))
          val radius =
              if (current.pos2 != null) {
                hypot((current.pos2.x - pos.x).toDouble(), (current.pos2.z - pos.z).toDouble())
                    .coerceAtLeast(1.0)
              } else {
                current.cylinderRadius
              }
          current.copy(
              pos1 = pos,
              cylinderRadius = radius,
              cylinderMinY = min(minY, maxY),
              cylinderMaxY = max(minY, maxY),
          )
        }
    selections[playerUuid] = updated
    return updated
  }

  fun setPos2(playerUuid: UUID, location: Location): PlayerSelection {
    val worldName = location.world?.name ?: ""
    val pos = BlockPos(location.blockX, location.blockY, location.blockZ)
    val current = selections[playerUuid]?.takeIf { it.worldName == worldName }
    val updated =
        if (current == null) {
          PlayerSelection(
              worldName = worldName,
              mode = ShapeMode.BOX,
              pos2 = pos,
              cylinderMinY = pos.y,
              cylinderMaxY = pos.y + 8,
          )
        } else {
          val p1 = current.pos1
          val minY = if (p1 != null) min(p1.y, pos.y) else (current.cylinderMinY ?: pos.y)
          val maxY = if (p1 != null) max(p1.y, pos.y) else (current.cylinderMaxY ?: (pos.y + 8))
          val radius =
              if (p1 != null) {
                hypot((pos.x - p1.x).toDouble(), (pos.z - p1.z).toDouble()).coerceAtLeast(1.0)
              } else {
                current.cylinderRadius
              }
          current.copy(
              pos2 = pos,
              cylinderRadius = radius,
              cylinderMinY = min(minY, maxY),
              cylinderMaxY = max(minY, maxY),
          )
        }
    selections[playerUuid] = updated
    return updated
  }

  fun setMode(playerUuid: UUID, worldName: String, mode: ShapeMode): PlayerSelection {
    val current = selections[playerUuid]?.takeIf { it.worldName == worldName }
    val updated = (current ?: PlayerSelection(worldName = worldName)).copy(mode = mode)
    selections[playerUuid] = updated
    return updated
  }

  fun toggleMode(playerUuid: UUID, worldName: String): PlayerSelection {
    val current = selections[playerUuid]?.takeIf { it.worldName == worldName }
    val nextMode = (current?.mode ?: ShapeMode.BOX).next()
    return setMode(playerUuid, worldName, nextMode)
  }

  fun setCylinderRadius(playerUuid: UUID, worldName: String, radius: Double): PlayerSelection {
    val current = selections[playerUuid]?.takeIf { it.worldName == worldName }
    val updated =
        (current ?: PlayerSelection(worldName = worldName, mode = ShapeMode.CYLINDER)).copy(
            mode = ShapeMode.CYLINDER,
            cylinderRadius = radius.coerceAtLeast(1.0),
        )
    selections[playerUuid] = updated
    return updated
  }

  fun setCylinderHeight(
      playerUuid: UUID,
      worldName: String,
      minY: Int,
      maxY: Int,
  ): PlayerSelection {
    val current = selections[playerUuid]?.takeIf { it.worldName == worldName }
    val updated =
        (current ?: PlayerSelection(worldName = worldName, mode = ShapeMode.CYLINDER)).copy(
            mode = ShapeMode.CYLINDER,
            cylinderMinY = min(minY, maxY),
            cylinderMaxY = max(minY, maxY),
        )
    selections[playerUuid] = updated
    return updated
  }

  fun buildShape(playerUuid: UUID, worldName: String): AreaShape? {
    val selection = selections[playerUuid] ?: return null
    if (selection.worldName != worldName) return null
    return selection.toAreaShape()
  }

  fun clear(playerUuid: UUID) {
    selections.remove(playerUuid)
  }
}
