package io.oyasai.anybuilder.carbuilder2

import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseData
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseDataType
import io.oyasai.anybuilder.common.spawn.BuilderSpawnSupport
import kotlin.math.max
import kotlin.math.min
import org.bukkit.Location
import org.bukkit.block.BlockFace
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Directional
import org.bukkit.block.data.MultipleFacing
import org.bukkit.block.data.Rotatable
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.BlockDisplay
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector

fun CarBuilder2Spawn.spawnAutoFlip(
    loc: Location,
    bodyArmorStandsList: MutableList<ArmorStand>,
    blockData: MutableMap<Vector, Pair<BlockData, Vector>>,
    offsetData: MutableMap<Int, Vector>,
    size: Double,
    box: BoundingBox?
): MutableMap<Pair<Int, Vector>, MutableSet<BlockDisplay>> {
  val map = mutableMapOf<Pair<Int, Vector>, MutableSet<BlockDisplay>>()

  for ((i, vec) in offsetData) {
    val blockDisplays =
        if (vec.x >= 0.0) {
          BuilderSpawnSupport.spawnBlockDisplay(loc, bodyArmorStandsList, blockData, size, box)
        } else {
          val flippedBD = mutableMapOf<Vector, Pair<BlockData, Vector>>()
          for ((wVec, pairData) in blockData) {
            val scale = pairData.second.clone()
            val flippedPos = wVec.clone()
            flippedPos.x = -flippedPos.x - scale.x

            val flippedData = pairData.first.clone()
            if (flippedData is Directional) {
              flippedData.facing =
                  when (flippedData.facing) {
                    BlockFace.EAST -> BlockFace.WEST
                    BlockFace.WEST -> BlockFace.EAST
                    else -> flippedData.facing
                  }
            }
            if (flippedData is Rotatable) {
              flippedData.rotation =
                  when (flippedData.rotation) {
                    BlockFace.EAST -> BlockFace.WEST
                    BlockFace.WEST -> BlockFace.EAST
                    else -> flippedData.rotation
                  }
            }
            if (flippedData is MultipleFacing) {
              val hasWest = flippedData.hasFace(BlockFace.WEST)
              val hasEast = flippedData.hasFace(BlockFace.EAST)
              flippedData.setFace(BlockFace.WEST, hasEast)
              flippedData.setFace(BlockFace.EAST, hasWest)
            }
            flippedBD[flippedPos] = flippedData to scale
          }
          BuilderSpawnSupport.spawnBlockDisplay(loc, bodyArmorStandsList, flippedBD, size, box)
        }
    map[i to vec] = blockDisplays
  }
  return map
}

fun CarBuilder2Spawn.getCarSize(cbd: CarBuilder2BaseData): Vector {
  var maxX = 0.0
  var minX = 0.0
  var maxY = 0.0
  var minY = 0.0
  var maxZ = 0.0
  var minZ = 0.0

  val fixWidth =
      cbd.config.getSize(CarBuilder2BaseDataType.Body) /
          (cbd.boxSize[CarBuilder2BaseDataType.Body]?.maxX ?: 1.0)
  val bodyOffset = cbd.config.getOffsetBody()

  for ((vec, pair) in cbd.body) {
    val bodyVec = vec.clone().multiply(fixWidth)
    val bodyScale = pair.second.clone().multiply(fixWidth)

    if (bodyVec.x + bodyOffset.x > 0.0) {
      maxX = max(bodyVec.x + bodyScale.x + bodyOffset.x, maxX)
    } else {
      minX = min(bodyVec.x + bodyOffset.x, minX)
    }

    if (bodyVec.y + bodyOffset.y > 0.0) {
      maxY = max(bodyVec.y + bodyScale.y + bodyOffset.y, maxY)
    } else {
      minY = min(bodyVec.y + bodyOffset.y, minY)
    }

    if (bodyVec.z + bodyOffset.z > 0.0) {
      maxZ = max(bodyVec.z + bodyScale.z + bodyOffset.z, maxZ)
    } else {
      minZ = min(bodyVec.z + bodyOffset.z, minZ)
    }
  }

  fun applyWheelRange(
      wheelData: Map<Vector, Pair<BlockData, Vector>>,
      type: CarBuilder2BaseDataType
  ) {
    var maxXW = 0.0
    var minXW = 0.0
    var maxYW = 0.0
    var minYW = 0.0
    var maxZW = 0.0
    var minZW = 0.0

    for ((vec, pair) in wheelData) {
      val wheelVec = vec.clone().multiply(fixWidth)
      val wheelScale = pair.second.clone().multiply(fixWidth)

      if (wheelVec.x > 0.0) {
        maxXW = max(wheelVec.x + wheelScale.x, maxXW)
      } else {
        minXW = min(wheelVec.x, minXW)
      }

      if (wheelVec.y > 0.0) {
        maxYW = max(wheelVec.y + wheelScale.y, maxYW)
      } else {
        minYW = min(wheelVec.y, minYW)
      }

      if (wheelVec.z > 0.0) {
        maxZW = max(wheelVec.z + wheelScale.z, maxZW)
      } else {
        minZW = min(wheelVec.z, minZW)
      }
    }

    for (offset in cbd.config.getOffset(type).values) {
      maxX = max(maxXW + offset.x, maxX)
      minX = min(minXW + offset.x, minX)
      maxY = max(maxYW + offset.y, maxY)
      minY = min(minYW + offset.y, minY)
      maxZ = max(maxZW + offset.z, maxZ)
      minZ = min(minZW + offset.z, minZ)
    }
  }

  applyWheelRange(cbd.wheel, CarBuilder2BaseDataType.Wheel)
  applyWheelRange(cbd.wheel2, CarBuilder2BaseDataType.Wheel2)

  return Vector(maxX, maxY, maxZ)
}
