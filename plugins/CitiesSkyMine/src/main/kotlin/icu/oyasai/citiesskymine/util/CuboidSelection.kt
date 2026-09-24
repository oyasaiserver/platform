package icu.oyasai.citiesskymine.util

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.regions.CuboidRegion
import kotlin.math.max
import kotlin.math.min
import org.bukkit.block.BlockFace
import org.bukkit.entity.Player

internal data class HorizontalUnit(val x: Int, val z: Int)

internal data class HorizontalPoint(val x: Int, val z: Int)

internal data class CuboidBounds(
    val minX: Int,
    val maxX: Int,
    val minY: Int,
    val maxY: Int,
    val minZ: Int,
    val maxZ: Int,
) {
  companion object {
    fun from(region: CuboidRegion): CuboidBounds {
      val a = region.pos1
      val b = region.pos2
      return CuboidBounds(
          min(a.x(), b.x()),
          max(a.x(), b.x()),
          min(a.y(), b.y()),
          max(a.y(), b.y()),
          min(a.z(), b.z()),
          max(a.z(), b.z()),
      )
    }
  }
}

internal fun horizontalUnit(face: BlockFace): HorizontalUnit =
    when (face) {
      BlockFace.NORTH -> HorizontalUnit(0, -1)
      BlockFace.EAST -> HorizontalUnit(1, 0)
      BlockFace.SOUTH -> HorizontalUnit(0, 1)
      BlockFace.WEST -> HorizontalUnit(-1, 0)
      else -> HorizontalUnit(0, 1)
    }

internal fun selectedCuboid(player: Player, notCuboidMessage: String): CuboidRegion? {
  val actor = BukkitAdapter.adapt(player)
  val weWorld = BukkitAdapter.adapt(player.world)
  val session = WorldEdit.getInstance().sessionManager.get(actor)
  val region =
      try {
        session.getRegionSelector(weWorld).getRegion()
      } catch (_: IncompleteRegionException) {
        MessageUtil.error(player, "WorldEdit で範囲を2点選択してから実行してください。")
        return null
      }
  return region as? CuboidRegion
      ?: run {
        MessageUtil.error(player, notCuboidMessage)
        null
      }
}

internal fun lengthAlong(bounds: CuboidBounds, axis: HorizontalUnit): Int =
    if (axis.x != 0) {
      bounds.maxX - bounds.minX + 1
    } else {
      bounds.maxZ - bounds.minZ + 1
    }

internal fun blockAt(
    bounds: CuboidBounds,
    lateralAxis: HorizontalUnit,
    lateralOffset: Int,
    depthAxis: HorizontalUnit,
    depthOffset: Int,
): HorizontalPoint {
  val x =
      coordinateAlongX(bounds, lateralAxis, lateralOffset)
          ?: coordinateAlongX(bounds, depthAxis, depthOffset)
          ?: bounds.minX
  val z =
      coordinateAlongZ(bounds, lateralAxis, lateralOffset)
          ?: coordinateAlongZ(bounds, depthAxis, depthOffset)
          ?: bounds.minZ
  return HorizontalPoint(x, z)
}

internal fun coordinateAlongX(bounds: CuboidBounds, axis: HorizontalUnit, offset: Int): Int? =
    when (axis.x) {
      1 -> bounds.minX + offset
      -1 -> bounds.maxX - offset
      else -> null
    }

internal fun coordinateAlongZ(bounds: CuboidBounds, axis: HorizontalUnit, offset: Int): Int? =
    when (axis.z) {
      1 -> bounds.minZ + offset
      -1 -> bounds.maxZ - offset
      else -> null
    }
