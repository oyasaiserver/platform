package icu.oyasai.imageonmap

import org.bukkit.Location
import org.bukkit.Rotation
import org.bukkit.block.BlockFace
import org.bukkit.entity.Hanging
import org.bukkit.entity.ItemFrame
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.util.BoundingBox

internal object PosterFrames {
  private val directions = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)

  fun mapIndex(columns: Int, rows: Int, face: BlockFace, col: Int, rowFromBottom: Int): Int =
      (rows - rowFromBottom - 1) * columns + if (face == BlockFace.DOWN) columns - 1 - col else col

  private fun vectors(face: BlockFace, up: BlockFace): Pair<Pair<Int, Int>, Pair<Int, Int>> =
      when (face) {
        BlockFace.NORTH -> (-1 to 0) to (0 to 0)
        BlockFace.SOUTH -> (1 to 0) to (0 to 0)
        BlockFace.EAST -> (0 to -1) to (0 to 0)
        BlockFace.WEST -> (0 to 1) to (0 to 0)
        BlockFace.UP,
        BlockFace.DOWN ->
            when (up) {
              BlockFace.NORTH -> (1 to 0) to (0 to -1)
              BlockFace.SOUTH -> (-1 to 0) to (0 to 1)
              BlockFace.EAST -> (0 to 1) to (1 to 0)
              else -> (0 to -1) to (-1 to 0)
            }
        else -> error("unsupported face")
      }

  // Block coordinates relative to the clicked face's lower-left target cell.
  fun offset(face: BlockFace, up: BlockFace, col: Int, row: Int): Triple<Int, Int, Int> {
    val (right, rise) = vectors(face, up)
    return Triple(
        right.first * col + rise.first * row,
        if (face == BlockFace.UP || face == BlockFace.DOWN) 0 else row,
        right.second * col + rise.second * row,
    )
  }

  fun cells(
      origin: Location,
      face: BlockFace,
      up: BlockFace,
      columns: Int,
      rows: Int,
  ): List<Location> = buildList {
    for (row in 0 until rows) for (col in 0 until columns) {
      val (x, y, z) = offset(face, up, col, row)
      add(origin.clone().add(x.toDouble(), y.toDouble(), z.toDouble()))
    }
  }

  fun occupying(at: Location, face: BlockFace): Hanging? =
      at.world
          .getNearbyEntities(at.clone().add(0.5, 0.5, 0.5), 1.0, 1.0, 1.0)
          .filterIsInstance<Hanging>()
          .firstOrNull {
            it.facing == face &&
                (it.boundingBox.overlaps(BoundingBox.of(at.block)) ||
                    (it.location.blockX == at.blockX &&
                        it.location.blockY == at.blockY &&
                        it.location.blockZ == at.blockZ))
          }

  fun rotation(face: BlockFace, up: BlockFace, first: Boolean): Rotation {
    if (face != BlockFace.UP && face != BlockFace.DOWN) return Rotation.NONE
    val quarter = directions.indexOf(up).let { if (it < 0) 0 else it }
    val steps = if (face == BlockFace.UP) quarter else (4 - quarter) % 4
    val adjusted = (steps + if (first) 3 else 0) % 4
    return listOf(Rotation.NONE, Rotation.CLOCKWISE, Rotation.FLIPPED, Rotation.COUNTER_CLOCKWISE)[
        adjusted]
  }

  fun matches(
      hit: ItemFrame,
      poster: Poster,
      index: Int,
      managed: (ItemFrame) -> Boolean,
  ): List<ItemFrame> {
    val col =
        if (hit.facing == BlockFace.DOWN) poster.columns - 1 - index % poster.columns
        else index % poster.columns
    val row = poster.rows - 1 - index / poster.columns
    val orientations =
        if (hit.facing == BlockFace.UP || hit.facing == BlockFace.DOWN) directions
        else listOf(BlockFace.NORTH)
    return orientations
        .map { up ->
          val (x, y, z) = offset(hit.facing, up, col, row)
          cells(
                  hit.location.clone().add(-x.toDouble(), -y.toDouble(), -z.toDouble()),
                  hit.facing,
                  up,
                  poster.columns,
                  poster.rows,
              )
              .mapIndexedNotNull { i, at ->
                val frame = occupying(at, hit.facing) as? ItemFrame ?: return@mapIndexedNotNull null
                val meta = frame.item.itemMeta as? MapMeta
                val expected =
                    poster.ids[
                            mapIndex(
                                poster.columns,
                                poster.rows,
                                hit.facing,
                                i % poster.columns,
                                i / poster.columns,
                            )]
                if (managed(frame) && meta?.hasMapId() == true && meta.mapId == expected) frame
                else null
              }
        }
        .maxByOrNull { it.size } ?: emptyList()
  }
}
