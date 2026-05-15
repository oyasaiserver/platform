package icu.oyasai.citiesskymine.road

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import kotlin.math.*
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.type.Stairs

object RoadBuilder {

  /** 既存の EditSession に道路ブロックを追加する。 交差点の腕など、複数パスを同一セッションで扱う場合に使用する。 */
  internal fun buildInto(editSession: EditSession, path: List<PathPoint>, settings: RoadSettings) {
    val placed = HashSet<Triple<Int, Int, Int>>()
    val occupancy = HashMap<BlockPos, OffsetZone>()
    val hasLane = settings.laneWidth > 0
    val hasSidewalk = settings.sidewalkWidth > 0
    val cHW = (settings.centerLineWidth + 1) / 2
    val lW = settings.laneWidth
    val olW = settings.outerLineWidth
    val swW = settings.sidewalkWidth

    val offsetSlots = buildOffsetSlots(cHW, lW, olW, swW)
    val lineSlots = offsetSlots.filter { it.zone.isLine() }
    val otherSlots = offsetSlots.filterNot { it.zone.isLine() }

    val tracedBySlot = HashMap<OffsetSlot, TraceResult>()
    for (slot in offsetSlots) {
      val trace =
          traceBlocksForOffset(path, slot.offset, avoidRightAngleCorners = slot.zone.isLine())
      tracedBySlot[slot] = trace
    }

    val pendingCornerFill = mutableListOf<CornerFillRequest>()

    // 1. 白線（中央・外縁）を先にラスタライズして配置
    for (slot in lineSlots) {
      val trace = tracedBySlot[slot] ?: continue
      for (block in trace.blocks) {
        placeBlockIfNeeded(slot, block, settings, editSession, placed, occupancy)
      }
      if (trace.removedCorners.isNotEmpty()) {
        pendingCornerFill += CornerFillRequest(slot, trace.removedCorners)
      }
    }

    // 2. 車線・歩道を配置
    for (slot in otherSlots) {
      val trace = tracedBySlot[slot] ?: continue
      for (block in trace.blocks) {
        placeBlockIfNeeded(slot, block, settings, editSession, placed, occupancy)
      }
    }

    // 3. 取り除いた角セルを埋める
    fillRemovedCornersWithNeighbors(
        pendingCornerFill, settings, hasLane, hasSidewalk, editSession, placed, occupancy)
  }

  // heading(ラジアン) を最近傍のカーディナル方向へ変換。
  // 階段の facing は進行方向に対して垂直（+π/2）にすることで白線が滑らかに見える。
  private fun headingToFacing(heading: Double): BlockFace {
    val h = ((heading + PI / 2) % (2 * PI) + 2 * PI) % (2 * PI)
    return when {
      h < PI / 4 || h >= 7 * PI / 4 -> BlockFace.EAST
      h < 3 * PI / 4 -> BlockFace.SOUTH
      h < 5 * PI / 4 -> BlockFace.WEST
      else -> BlockFace.NORTH
    }
  }

  private fun buildOffsetSlots(cHW: Int, lW: Int, olW: Int, swW: Int): List<OffsetSlot> {
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

  private fun traceBlocksForOffset(
      path: List<PathPoint>,
      offset: Int,
      avoidRightAngleCorners: Boolean
  ): TraceResult {
    if (path.isEmpty()) return TraceResult(emptyList(), emptyList())
    val traced = mutableListOf<TracedBlock>()
    val removedCorners = mutableListOf<TracedBlock>()

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

      val segmentBlocks = walkGrid(lastExactX, lastExactY, lastExactZ, px, py, pz, h)
      if (segmentBlocks.isEmpty() && targetBlock != lastBlock) {
        traced += TracedBlock(targetBlock, h)
        if (avoidRightAngleCorners) {
          traced.removeRightAngleCornerIfNeeded()?.let { removedCorners += it }
        }
      } else {
        for (block in segmentBlocks) {
          traced += block
          if (avoidRightAngleCorners) {
            traced.removeRightAngleCornerIfNeeded()?.let { removedCorners += it }
          }
        }
      }

      lastBlock = targetBlock
      lastExactX = px
      lastExactY = py
      lastExactZ = pz
    }

    return TraceResult(traced, removedCorners)
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

    val stepX =
        when {
          dx > 0 -> 1
          dx < 0 -> -1
          else -> 0
        }
    val stepZ =
        when {
          dz > 0 -> 1
          dz < 0 -> -1
          else -> 0
        }

    val invDx = if (dx != 0.0) 1.0 / abs(dx) else Double.POSITIVE_INFINITY
    val invDz = if (dz != 0.0) 1.0 / abs(dz) else Double.POSITIVE_INFINITY
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

  private fun sharesEdge(a: BlockPos, b: BlockPos): Boolean {
    val dx = abs(a.x - b.x)
    val dz = abs(a.z - b.z)
    return (dx == 1 && dz == 0) || (dx == 0 && dz == 1)
  }

  private fun hasCardinalNeighbor(pos: BlockPos, set: Set<BlockPos>): Boolean {
    val dirs = arrayOf(intArrayOf(1, 0), intArrayOf(-1, 0), intArrayOf(0, 1), intArrayOf(0, -1))
    for (dir in dirs) {
      val neighbor = BlockPos(pos.x + dir[0], pos.y, pos.z + dir[1])
      if (neighbor in set) return true
    }
    return false
  }

  private fun isCardinal(dir: Pair<Int, Int>): Boolean {
    val absX = abs(dir.first)
    val absZ = abs(dir.second)
    return absX + absZ == 1
  }

  private fun isDiagonal(dir: Pair<Int, Int>): Boolean {
    return abs(dir.first) == 1 && abs(dir.second) == 1
  }

  private fun MutableList<TracedBlock>.removeRightAngleCornerIfNeeded(): TracedBlock? {
    if (size < 3) return null
    val c = this[size - 1].pos
    val b = this[size - 2].pos
    val a = this[size - 3].pos
    val dx1 = b.x - a.x
    val dz1 = b.z - a.z
    val dx2 = c.x - b.x
    val dz2 = c.z - b.z
    if (abs(dx1) + abs(dz1) != 1) return null
    if (abs(dx2) + abs(dz2) != 1) return null
    if (dx1 * dx2 + dz1 * dz2 != 0) return null
    // remove the middle corner to keep diagonal connection
    return removeAt(size - 2)
  }

  private fun fillRemovedCornersWithNeighbors(
      pending: List<CornerFillRequest>,
      settings: RoadSettings,
      hasLane: Boolean,
      hasSidewalk: Boolean,
      editSession: EditSession,
      placed: MutableSet<Triple<Int, Int, Int>>,
      occupancy: MutableMap<BlockPos, OffsetZone>
  ) {
    if (pending.isEmpty()) return
    for (request in pending) {
      for (corner in request.corners) {
        val zone =
            findNearestZoneForCorner(corner.pos, occupancy, request.slot.zone)
                ?: fallbackFillerZone(request.slot.zone, hasLane, hasSidewalk)
                ?: continue
        placeFillerBlock(zone, corner.pos, corner.heading, settings, editSession, placed, occupancy)
      }
    }
  }

  private fun findNearestZoneForCorner(
      pos: BlockPos,
      occupancy: Map<BlockPos, OffsetZone>,
      ignoreZone: OffsetZone
  ): OffsetZone? {
    val dirs = arrayOf(intArrayOf(1, 0), intArrayOf(-1, 0), intArrayOf(0, 1), intArrayOf(0, -1))
    var sidewalkCandidate: OffsetZone? = null
    for (dir in dirs) {
      val neighbor = BlockPos(pos.x + dir[0], pos.y, pos.z + dir[1])
      val zone = occupancy[neighbor] ?: continue
      if (zone == ignoreZone || zone.isLine()) continue
      if (zone == OffsetZone.LANE) return OffsetZone.LANE
      if (zone == OffsetZone.SIDEWALK && sidewalkCandidate == null) {
        sidewalkCandidate = OffsetZone.SIDEWALK
      }
    }
    return sidewalkCandidate
  }

  private fun fallbackFillerZone(
      slotZone: OffsetZone,
      hasLane: Boolean,
      hasSidewalk: Boolean
  ): OffsetZone? =
      when (slotZone) {
        OffsetZone.CENTER_LINE ->
            when {
              hasLane -> OffsetZone.LANE
              hasSidewalk -> OffsetZone.SIDEWALK
              else -> null
            }
        OffsetZone.OUTER_LINE ->
            when {
              hasSidewalk -> OffsetZone.SIDEWALK
              hasLane -> OffsetZone.LANE
              else -> null
            }
        else -> null
      }

  private fun placeFillerBlock(
      zone: OffsetZone,
      pos: BlockPos,
      heading: Double,
      settings: RoadSettings,
      editSession: EditSession,
      placed: MutableSet<Triple<Int, Int, Int>>,
      occupancy: MutableMap<BlockPos, OffsetZone>
  ) {
    val key = Triple(pos.x, pos.y, pos.z)
    if (!placed.add(key)) return

    val blockData = zone.material(settings).createBlockData()
    if (blockData is Stairs) {
      blockData.facing = headingToFacing(heading)
      blockData.shape = Stairs.Shape.STRAIGHT
      blockData.half = Bisected.Half.BOTTOM
    }
    val vec = BlockVector3.at(pos.x, pos.y, pos.z)
    val weBlock = BukkitAdapter.adapt(blockData)
    editSession.setBlock(vec, weBlock)
    occupancy[pos] = zone
  }

  private fun placeBlockIfNeeded(
      slot: OffsetSlot,
      tracedBlock: TracedBlock,
      settings: RoadSettings,
      editSession: EditSession,
      placed: MutableSet<Triple<Int, Int, Int>>,
      occupancy: MutableMap<BlockPos, OffsetZone>
  ) {
    val (x, y, z) = tracedBlock.pos
    val key = Triple(x, y, z)
    if (!placed.add(key)) return

    val material = resolveMaterial(slot, settings)
    val blockData = material.createBlockData()
    if (blockData is Stairs) {
      if (slot.zone.isLine()) {
        blockData.facing = BlockFace.NORTH
        blockData.shape = Stairs.Shape.STRAIGHT
      } else {
        blockData.facing = headingToFacing(tracedBlock.heading)
        blockData.shape = Stairs.Shape.STRAIGHT
      }
      blockData.half = Bisected.Half.BOTTOM
    }

    val pos = BlockVector3.at(x, y, z)
    val weBlock = BukkitAdapter.adapt(blockData)
    editSession.setBlock(pos, weBlock)
    occupancy[tracedBlock.pos] = slot.zone
  }

  private fun OffsetZone.material(settings: RoadSettings) =
      when (this) {
        OffsetZone.CENTER_LINE,
        OffsetZone.OUTER_LINE -> settings.lineMaterial
        OffsetZone.LANE -> settings.roadMaterial
        OffsetZone.SIDEWALK -> settings.sidewalkMaterial
      }

  private fun resolveMaterial(slot: OffsetSlot, settings: RoadSettings): Material =
      if (!settings.debugLineGroups) {
        slot.zone.material(settings)
      } else {
        when {
          slot.zone == OffsetZone.CENTER_LINE -> Material.DIAMOND_BLOCK
          slot.zone == OffsetZone.OUTER_LINE && slot.offset >= 0 -> Material.GOLD_BLOCK
          slot.zone == OffsetZone.OUTER_LINE && slot.offset < 0 -> Material.EMERALD_BLOCK
          else -> slot.zone.material(settings)
        }
      }

  private fun OffsetZone.isLine() = this == OffsetZone.CENTER_LINE || this == OffsetZone.OUTER_LINE

  private data class TraceResult(
      val blocks: List<TracedBlock>,
      val removedCorners: List<TracedBlock>
  )

  private data class CornerFillRequest(val slot: OffsetSlot, val corners: List<TracedBlock>)

  private data class BlockPos(val x: Int, val y: Int, val z: Int)

  private data class TracedBlock(val pos: BlockPos, val heading: Double)

  private data class OffsetSlot(val offset: Int, val zone: OffsetZone)

  private enum class OffsetZone {
    CENTER_LINE,
    LANE,
    OUTER_LINE,
    SIDEWALK
  }
}
