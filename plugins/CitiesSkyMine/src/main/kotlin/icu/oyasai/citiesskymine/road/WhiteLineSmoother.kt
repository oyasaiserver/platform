package icu.oyasai.citiesskymine.road

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import kotlin.math.*
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.type.Stairs

object WhiteLineSmoother {

  data class SmoothResult(val editSession: EditSession, val affectedBlocks: Int)

  fun smooth(world: World, path: List<PathPoint>, settings: RoadSettings): SmoothResult {
    val lineData = settings.lineMaterial.createBlockData()
    require(lineData is Stairs) { "白線素材には階段ブロックを設定してください。" }
    if (path.isEmpty()) return SmoothResult(emptyEditSession(world), 0)

    val editSession =
        WorldEdit.getInstance().newEditSessionBuilder().world(BukkitAdapter.adapt(world)).build()

    val slots = buildOffsetSlots(settings).filter { it.zone.isLine() }
    var affected = 0
    for (slot in slots) {
      val traced = traceBlocksForOffset(path, slot.offset)
      val zigzagOrientations = computeZigzagOrientations(traced, slot.offset)
      for (i in traced.indices) {
        val block = traced[i]
        val pos = block.pos
        val prev = if (i > 0) traced[i - 1].pos else null
        val next = if (i + 1 < traced.size) traced[i + 1].pos else null
        val prevVec = prev?.vectorTo(pos)
        val nextVec = next?.let { pos.vectorTo(it) }

        val blockState = world.getBlockAt(pos.x, pos.y, pos.z)
        if (!isLineMaterial(blockState.type, settings.lineMaterial)) continue
        val orientation =
            zigzagOrientations[i]
                ?: resolveOrientation(prevVec, nextVec, slot.offset, block.heading)
        val data =
            (settings.lineMaterial.createBlockData() as Stairs).apply {
              facing = orientation.facing
              shape = orientation.shape
              half = Bisected.Half.BOTTOM
              isWaterlogged = false
            }

        editSession.setBlock(BlockVector3.at(pos.x, pos.y, pos.z), BukkitAdapter.adapt(data))
        affected++
      }
    }

    editSession.close()
    return SmoothResult(editSession, affected)
  }

  private fun emptyEditSession(world: World): EditSession {
    val es =
        WorldEdit.getInstance().newEditSessionBuilder().world(BukkitAdapter.adapt(world)).build()
    es.close()
    return es
  }

  private fun isLineMaterial(target: Material, line: Material): Boolean {
    if (target == line) return true
    val targetData = target.createBlockData()
    val lineData = line.createBlockData()
    return targetData.material == lineData.material
  }

  private fun resolveOrientation(
      prev: Vec?,
      next: Vec?,
      offset: Int,
      heading: Double
  ): Orientation {
    val prevCard = prev?.takeIf { it.isCardinal() }
    val nextCard = next?.takeIf { it.isCardinal() }
    val prevDiag = prev?.takeIf { it.isDiagonal() }
    val nextDiag = next?.takeIf { it.isDiagonal() }

    if (prevDiag != null && nextDiag != null && prevDiag == nextDiag) {
      return orientDiagonal(prevDiag, offset)
    }

    val cardinal = prevCard ?: nextCard
    if (cardinal != null) {
      return when {
        prevCard != null && nextCard != null && prevCard != nextCard ->
            orientCorner(prevCard, nextCard, offset)
        else -> orientStraight(cardinal, offset)
      }
    }

    val diagonal = prevDiag ?: nextDiag
    if (diagonal != null) {
      return orientDiagonal(diagonal, offset)
    }

    return Orientation(headingToFacing(heading), Stairs.Shape.STRAIGHT)
  }

  private fun orientStraight(vec: Vec, offset: Int): Orientation {
    val facingVec = if (offset >= 0) vec.rotateCW() else vec.rotateCCW()
    return Orientation(facingVec.toFace(), Stairs.Shape.STRAIGHT)
  }

  private fun orientCorner(prev: Vec, next: Vec, offset: Int): Orientation {
    val basis = if (next.isCardinal()) next else prev
    val facingVec = if (offset >= 0) basis.rotateCW() else basis.rotateCCW()
    val shape =
        if (prev.turnDirection(next) > 0) Stairs.Shape.INNER_LEFT else Stairs.Shape.INNER_RIGHT
    return Orientation(facingVec.toFace(), shape)
  }

  private fun orientDiagonal(vec: Vec, offset: Int): Orientation {
    return Orientation(diagonalFacing(vec, offset), diagonalShape(vec))
  }

  private fun diagonalShape(vec: Vec): Stairs.Shape {
    return if (vec.dx * vec.dz > 0) {
      if (vec.dx > 0) Stairs.Shape.INNER_RIGHT else Stairs.Shape.INNER_LEFT
    } else {
      if (vec.dx > 0) Stairs.Shape.INNER_LEFT else Stairs.Shape.INNER_RIGHT
    }
  }

  private fun diagonalFacing(vec: Vec, offset: Int): BlockFace {
    return when {
      vec.dx > 0 && vec.dz > 0 -> if (offset > 0) BlockFace.NORTH else BlockFace.SOUTH
      vec.dx < 0 && vec.dz < 0 -> if (offset > 0) BlockFace.EAST else BlockFace.WEST
      vec.dx > 0 && vec.dz < 0 -> if (offset > 0) BlockFace.SOUTH else BlockFace.NORTH
      else -> if (offset > 0) BlockFace.WEST else BlockFace.EAST
    }
  }

  private fun headingToFacing(heading: Double): BlockFace {
    val normalized = ((heading % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
    return when {
      normalized < Math.PI / 4 || normalized >= 7 * Math.PI / 4 -> BlockFace.EAST
      normalized < 3 * Math.PI / 4 -> BlockFace.SOUTH
      normalized < 5 * Math.PI / 4 -> BlockFace.WEST
      else -> BlockFace.NORTH
    }
  }

  private fun traceBlocksForOffset(path: List<PathPoint>, offset: Int): List<TracedBlock> {
    if (path.isEmpty()) return emptyList()
    val traced = mutableListOf<TracedBlock>()

    var lastExactX = Double.NaN
    var lastExactY = Double.NaN
    var lastExactZ = Double.NaN
    var lastBlock: BlockPos? = null

    for (point in path) {
      val h = point.heading
      val perpX = -sin(h)
      val perpZ = cos(h)
      val px = point.x + offset * perpX
      val py = point.y
      val pz = point.z + offset * perpZ
      val targetBlock = BlockPos(floor(px).toInt(), floor(py).toInt(), floor(pz).toInt())

      if (lastBlock == null) {
        traced += TracedBlock(targetBlock, h)
        lastBlock = targetBlock
        lastExactX = px
        lastExactY = py
        lastExactZ = pz
        continue
      }

      val segment = walkGrid(lastExactX, lastExactY, lastExactZ, px, py, pz, h)
      if (segment.isEmpty() && targetBlock != lastBlock) {
        traced += TracedBlock(targetBlock, h)
        traced.removeRightAngleCornerIfNeeded()
      } else {
        for (block in segment) {
          traced += block
          traced.removeRightAngleCornerIfNeeded()
        }
      }

      lastBlock = targetBlock
      lastExactX = px
      lastExactY = py
      lastExactZ = pz
    }

    return traced
  }

  private fun walkGrid(
      startX: Double,
      startY: Double,
      startZ: Double,
      endX: Double,
      endY: Double,
      endZ: Double,
      defaultHeading: Double
  ): List<TracedBlock> {
    val result = mutableListOf<TracedBlock>()
    val startBlockX = floor(startX).toInt()
    val startBlockZ = floor(startZ).toInt()
    val targetBlockX = floor(endX).toInt()
    val targetBlockZ = floor(endZ).toInt()
    if (startBlockX == targetBlockX && startBlockZ == targetBlockZ) return result

    val dx = endX - startX
    val dz = endZ - startZ
    val heading = if (abs(dx) + abs(dz) < 1e-6) defaultHeading else atan2(dz, dx)

    var currentX = startBlockX
    var currentZ = startBlockZ

    val stepX = dx.compareTo(0.0)
    val stepZ = dz.compareTo(0.0)

    val invDx = if (dx != 0.0) 1.0 / kotlin.math.abs(dx) else Double.POSITIVE_INFINITY
    val invDz = if (dz != 0.0) 1.0 / kotlin.math.abs(dz) else Double.POSITIVE_INFINITY
    var tMaxX =
        if (stepX != 0) distanceToGridBoundary(startX, currentX, stepX) * invDx
        else Double.POSITIVE_INFINITY
    var tMaxZ =
        if (stepZ != 0) distanceToGridBoundary(startZ, currentZ, stepZ) * invDz
        else Double.POSITIVE_INFINITY
    val tDeltaX = if (stepX != 0) invDx else Double.POSITIVE_INFINITY
    val tDeltaZ = if (stepZ != 0) invDz else Double.POSITIVE_INFINITY

    var t = 0.0
    while (currentX != targetBlockX || currentZ != targetBlockZ) {
      if (tMaxX < tMaxZ) {
        currentX += stepX
        t = tMaxX
        tMaxX += tDeltaX
      } else if (tMaxZ < tMaxX) {
        currentZ += stepZ
        t = tMaxZ
        tMaxZ += tDeltaZ
      } else {
        if (stepX != 0) currentX += stepX
        if (stepZ != 0) currentZ += stepZ
        t = tMaxX
        tMaxX += tDeltaX
        tMaxZ += tDeltaZ
      }

      val interpY = startY + (endY - startY) * t.coerceIn(0.0, 1.0)
      result += TracedBlock(BlockPos(currentX, floor(interpY).toInt(), currentZ), heading)
    }

    return result
  }

  private fun distanceToGridBoundary(origin: Double, cell: Int, step: Int): Double {
    return if (step > 0) (cell + 1).toDouble() - origin else origin - cell.toDouble()
  }

  private fun MutableList<TracedBlock>.removeRightAngleCornerIfNeeded() {
    if (size < 3) return
    val c = this[size - 1].pos
    val b = this[size - 2].pos
    val a = this[size - 3].pos
    val dx1 = b.x - a.x
    val dz1 = b.z - a.z
    val dx2 = c.x - b.x
    val dz2 = c.z - b.z
    if (abs(dx1) + abs(dz1) != 1) return
    if (abs(dx2) + abs(dz2) != 1) return
    if (dx1 * dx2 + dz1 * dz2 != 0) return
    removeAt(size - 2)
  }

  private fun buildOffsetSlots(settings: RoadSettings): List<OffsetSlot> {
    val cHW = (settings.centerLineWidth + 1) / 2
    val lW = settings.laneWidth
    val olW = settings.outerLineWidth
    val swW = settings.sidewalkWidth
    val totalHW = cHW + lW + olW + swW
    val slots = mutableListOf<OffsetSlot>()
    for (offset in -totalHW..totalHW) {
      val zone = classifyZone(abs(offset), cHW, lW, olW, swW) ?: continue
      slots += OffsetSlot(offset, zone)
    }
    return slots
  }

  private fun classifyZone(absOffset: Int, cHW: Int, lW: Int, olW: Int, swW: Int): OffsetZone? =
      when {
        absOffset < cHW -> OffsetZone.CENTER_LINE
        absOffset < cHW + lW -> OffsetZone.LANE
        absOffset < cHW + lW + olW -> OffsetZone.OUTER_LINE
        absOffset < cHW + lW + olW + swW -> OffsetZone.SIDEWALK
        else -> null
      }

  private fun OffsetZone.isLine() = this == OffsetZone.CENTER_LINE || this == OffsetZone.OUTER_LINE

  private data class Orientation(val facing: BlockFace, val shape: Stairs.Shape)

  private data class OffsetSlot(val offset: Int, val zone: OffsetZone)

  private enum class OffsetZone {
    CENTER_LINE,
    LANE,
    OUTER_LINE,
    SIDEWALK
  }

  private data class BlockPos(val x: Int, val y: Int, val z: Int) {
    fun vectorTo(other: BlockPos): Vec {
      return Vec(other.x - x, other.z - z)
    }
  }

  private data class TracedBlock(val pos: BlockPos, val heading: Double)

  private data class Vec(val dx: Int, val dz: Int) {
    fun isCardinal() = (abs(dx) + abs(dz) == 1)

    fun isDiagonal() = (abs(dx) == 1 && abs(dz) == 1)

    fun rotateCW() = Vec(dz, -dx)

    fun rotateCCW() = Vec(-dz, dx)

    fun toFace(): BlockFace =
        when {
          dx > 0 -> BlockFace.EAST
          dx < 0 -> BlockFace.WEST
          dz > 0 -> BlockFace.SOUTH
          else -> BlockFace.NORTH
        }

    fun turnDirection(other: Vec): Int = dx * other.dz - dz * other.dx
  }

  private fun computeZigzagOrientations(
      traced: List<TracedBlock>,
      offset: Int
  ): Array<Orientation?> {
    val size = traced.size
    val result = arrayOfNulls<Orientation>(size)
    if (size == 0) return result

    val prevVec = arrayOfNulls<Vec>(size)
    val nextVec = arrayOfNulls<Vec>(size)
    for (i in 1 until size) {
      prevVec[i] = traced[i - 1].pos.vectorTo(traced[i].pos)
    }
    for (i in 0 until size - 1) {
      nextVec[i] = traced[i].pos.vectorTo(traced[i + 1].pos)
    }

    val zigzagDir = arrayOfNulls<Vec>(size)
    for (i in 0 until size) {
      val entering = prevVec[i]
      val leaving = nextVec[i]
      val candidate =
          when {
            entering?.isCardinal() == true -> entering
            leaving?.isCardinal() == true -> leaving
            else -> null
          } ?: continue
      if (entering?.isCardinal() == true && entering != candidate) continue
      if (leaving?.isCardinal() == true && leaving != candidate) continue
      val touchesDiagonal = entering?.isDiagonal() == true || leaving?.isDiagonal() == true
      if (!touchesDiagonal) continue
      zigzagDir[i] = candidate
    }

    var index = 0
    while (index < size) {
      val dir = zigzagDir[index]
      if (dir == null) {
        index++
        continue
      }
      val start = index
      while (index < size && zigzagDir[index] == dir) {
        index++
      }
      assignZigzagRun(start, index, dir, offset, result, prevVec, nextVec)
    }

    return result
  }

  private fun assignZigzagRun(
      start: Int,
      end: Int,
      dir: Vec,
      offset: Int,
      buffer: Array<Orientation?>,
      prevVec: Array<Vec?>,
      nextVec: Array<Vec?>
  ) {
    val length = end - start
    if (length == 0) return
    val enteringDiag = prevVec[start]?.takeIf { it.isDiagonal() }
    val leavingDiag = nextVec[end - 1]?.takeIf { it.isDiagonal() }
    var baseFace =
        enteringDiag?.let { enteringFace(it, dir) }
            ?: leavingDiag?.let { leavingFace(it, dir).opposite() }
            ?: perpendicularFace(dir)
    val cornerShape = Stairs.Shape.INNER_LEFT
    val hasMiddle = length % 2 == 1
    val middle = if (hasMiddle) start + length / 2 else -1

    fun fill(face: BlockFace) {
      var currentFace = face
      var pairCount = 0
      for (i in start until end) {
        if (i == middle) {
          buffer[i] = Orientation(currentFace, cornerShape)
          currentFace = currentFace.opposite()
          pairCount = 0
          continue
        }
        buffer[i] = Orientation(currentFace, Stairs.Shape.STRAIGHT)
        pairCount++
        if (pairCount == 2) {
          currentFace = currentFace.opposite()
          pairCount = 0
        }
      }
    }

    fill(baseFace)
    if (leavingDiag != null) {
      val expected = leavingFace(leavingDiag, dir)
      if (buffer[end - 1]?.facing != expected) {
        baseFace = baseFace.opposite()
        fill(baseFace)
      }
    }
  }

  private fun enteringFace(diagonal: Vec, dir: Vec): BlockFace {
    return if (dir.dx == 0) {
      if (diagonal.dx < 0) BlockFace.EAST else BlockFace.WEST
    } else {
      if (diagonal.dz < 0) BlockFace.SOUTH else BlockFace.NORTH
    }
  }

  private fun leavingFace(diagonal: Vec, dir: Vec): BlockFace {
    return enteringFace(diagonal, dir).opposite()
  }

  private fun perpendicularFace(vec: Vec): BlockFace {
    return vec.rotateCW().toFace()
  }

  private fun BlockFace.opposite(): BlockFace =
      when (this) {
        BlockFace.NORTH -> BlockFace.SOUTH
        BlockFace.SOUTH -> BlockFace.NORTH
        BlockFace.EAST -> BlockFace.WEST
        BlockFace.WEST -> BlockFace.EAST
        else -> this
      }
}
