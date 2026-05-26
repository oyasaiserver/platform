package io.oyasai.anybuilder.schematic

import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.io.ClipboardFormats
import java.io.File
import java.io.FileInputStream
import java.util.*
import org.bukkit.Material
import org.bukkit.block.data.BlockData
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector

object SchematicToData {
  fun fileToRawBlockData(file: File): MutableMap<Vector, BlockData>? {
    val rawBlockData = LinkedHashMap<Vector, BlockData>()
    if (file.isFile && file.exists()) {
      val format = ClipboardFormats.findByFile(file) ?: return null
      try {
        format.getReader(FileInputStream(file)).use { reader ->
          val clipboard = reader.read()
          val region = clipboard.region
          val min = clipboard.minimumPoint

          for (y in 0 until region.getHeight()) {
            for (x in 0 until region.getWidth()) {
              for (z in 0 until region.getLength()) {
                val block = clipboard.getFullBlock(min.add(x, y, z))
                val bukkitBlockData = BukkitAdapter.adapt(block)
                if (bukkitBlockData.material != Material.AIR) {
                  rawBlockData[Vector(x, y, z)] = bukkitBlockData
                }
              }
            }
          }
        }
      } catch (e: Exception) {
        e.printStackTrace()
        return null
      }
      return rawBlockData
    }
    return null
  }

  fun size(raw: MutableMap<Vector, BlockData>): Pair<BoundingBox, Pair<Vector, Vector>> {
    if (raw.isEmpty()) throw NoSuchElementException()

    var minX = Double.MAX_VALUE
    var minY = Double.MAX_VALUE
    var minZ = Double.MAX_VALUE
    var maxX = -Double.MAX_VALUE
    var maxY = -Double.MAX_VALUE
    var maxZ = -Double.MAX_VALUE

    for (v in raw.keys) {
      if (v.x < minX) minX = v.x
      if (v.y < minY) minY = v.y
      if (v.z < minZ) minZ = v.z
      if (v.x > maxX) maxX = v.x
      if (v.y > maxY) maxY = v.y
      if (v.z > maxZ) maxZ = v.z
    }

    val minVec = Vector(minX, minY, minZ)
    val maxVec = Vector(maxX, maxY, maxZ)

    val sizeVec = Vector(maxX - minX + 1.0, maxY - minY + 1.0, maxZ - minZ + 1.0)
    val box = BoundingBox.of(Vector(0, 0, 0), sizeVec)

    return Pair(box, Pair(maxVec, minVec))
  }

  fun compressBlockData(
      raw: MutableMap<Vector, BlockData>
  ): MutableMap<Vector, Pair<BlockData, Vector>> {
    if (raw.isEmpty()) return LinkedHashMap()
    val sizeResult = size(raw)
    val box = sizeResult.first
    val maxVec = sizeResult.second.first
    val minVec = sizeResult.second.second

    val yxz = compressYXZ(raw, box, maxVec, minVec)
    val xzy = compressXZY(raw, box, maxVec, minVec)

    return if (yxz.size <= xzy.size) yxz else xzy
  }

  private fun compressYXZ(
      raw: MutableMap<Vector, BlockData>,
      box: BoundingBox,
      max: Vector,
      min: Vector,
  ): MutableMap<Vector, Pair<BlockData, Vector>> {
    val checkList = mutableSetOf<Vector>()
    val compressData = LinkedHashMap<Vector, Pair<BlockData, Vector>>()
    val center = box.center

    for ((vec, blockData) in raw) {
      if (vec in checkList) continue
      checkList.add(vec)

      val pos = vec.clone().subtract(min).subtract(center)

      var sizeX = 0
      var sizeY = 0
      var sizeZ = 0

      // Expand in Y
      var y = 1
      while (true) {
        val nextVec = vec.clone().add(Vector(0, y, 0))
        if (raw[nextVec] == blockData && nextVec !in checkList) {
          checkList.add(nextVec)
          sizeY++
          y++
        } else {
          break
        }
      }

      // Expand in X
      var x = 1
      while (true) {
        var canExpand = true
        for (curY in 0..sizeY) {
          val nextVec = vec.clone().add(Vector(x, curY, 0))
          if (raw[nextVec] != blockData || nextVec in checkList) {
            canExpand = false
            break
          }
        }
        if (canExpand) {
          for (curY in 0..sizeY) {
            checkList.add(vec.clone().add(Vector(x, curY, 0)))
          }
          sizeX++
          x++
        } else {
          break
        }
      }

      // Expand in Z
      var z = 1
      while (true) {
        var canExpand = true
        for (curX in 0..sizeX) {
          for (curY in 0..sizeY) {
            val nextVec = vec.clone().add(Vector(curX, curY, z))
            if (raw[nextVec] != blockData || nextVec in checkList) {
              canExpand = false
              break
            }
          }
          if (!canExpand) break
        }
        if (canExpand) {
          for (curX in 0..sizeX) {
            for (curY in 0..sizeY) {
              checkList.add(vec.clone().add(Vector(curX, curY, z)))
            }
          }
          sizeZ++
          z++
        } else {
          break
        }
      }

      compressData[pos] = Pair(blockData.clone(), Vector(sizeX + 1.0, sizeY + 1.0, sizeZ + 1.0))
    }
    return compressData
  }

  private fun compressXZY(
      raw: MutableMap<Vector, BlockData>,
      box: BoundingBox,
      max: Vector,
      min: Vector,
  ): MutableMap<Vector, Pair<BlockData, Vector>> {
    val checkList = mutableSetOf<Vector>()
    val compressData = LinkedHashMap<Vector, Pair<BlockData, Vector>>()
    val center = box.center

    for ((vec, blockData) in raw) {
      if (vec in checkList) continue
      checkList.add(vec)

      val pos = vec.clone().subtract(min).subtract(center)

      var sizeX = 0
      var sizeY = 0
      var sizeZ = 0

      // Expand in X
      var x = 1
      while (true) {
        val nextVec = vec.clone().add(Vector(x, 0, 0))
        if (raw[nextVec] == blockData && nextVec !in checkList) {
          checkList.add(nextVec)
          sizeX++
          x++
        } else {
          break
        }
      }

      // Expand in Z
      var z = 1
      while (true) {
        var canExpand = true
        for (curX in 0..sizeX) {
          val nextVec = vec.clone().add(Vector(curX, 0, z))
          if (raw[nextVec] != blockData || nextVec in checkList) {
            canExpand = false
            break
          }
        }
        if (canExpand) {
          for (curX in 0..sizeX) {
            checkList.add(vec.clone().add(Vector(curX, 0, z)))
          }
          sizeZ++
          z++
        } else {
          break
        }
      }

      // Expand in Y
      var y = 1
      while (true) {
        var canExpand = true
        for (curX in 0..sizeX) {
          for (curZ in 0..sizeZ) {
            val nextVec = vec.clone().add(Vector(curX, y, curZ))
            if (raw[nextVec] != blockData || nextVec in checkList) {
              canExpand = false
              break
            }
          }
          if (!canExpand) break
        }
        if (canExpand) {
          for (curX in 0..sizeX) {
            for (curZ in 0..sizeZ) {
              checkList.add(vec.clone().add(Vector(curX, y, curZ)))
            }
          }
          sizeY++
          y++
        } else {
          break
        }
      }

      compressData[pos] = Pair(blockData.clone(), Vector(sizeX + 1.0, sizeY + 1.0, sizeZ + 1.0))
    }
    return compressData
  }
}
