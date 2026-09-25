package icu.oyasai.imageonmap

import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.Rotation
import org.bukkit.block.BlockFace
import org.bukkit.entity.ItemFrame
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.MapMeta

internal object PosterFrames {
  private val directions = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)

  internal fun mapIndex(
      columns: Int,
      rows: Int,
      face: BlockFace,
      col: Int,
      rowFromBottom: Int,
  ): Int =
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

  private fun at(
      origin: Location,
      face: BlockFace,
      up: BlockFace,
      col: Int,
      rowFromBottom: Int,
  ): Location {
    val (right, rise) = vectors(face, up)
    return origin
        .clone()
        .add(
            (right.first * col + rise.first * rowFromBottom).toDouble(),
            if (face in listOf(BlockFace.UP, BlockFace.DOWN)) 0.0 else rowFromBottom.toDouble(),
            (right.second * col + rise.second * rowFromBottom).toDouble(),
        )
  }

  private fun frame(at: Location, face: BlockFace): ItemFrame? =
      at.world
          .getNearbyEntities(at.clone().add(0.5, 0.5, 0.5), 0.75, 0.75, 0.75)
          .filterIsInstance<ItemFrame>()
          .firstOrNull {
            it.facing == face &&
                it.location.blockX == at.blockX &&
                it.location.blockY == at.blockY &&
                it.location.blockZ == at.blockZ
          }

  private fun rotation(face: BlockFace, up: BlockFace, first: Boolean): Rotation {
    if (face !in listOf(BlockFace.UP, BlockFace.DOWN)) return Rotation.NONE
    val quarter = directions.indexOf(up).let { if (it < 0) 0 else it }
    val steps = if (face == BlockFace.UP) quarter else (4 - quarter) % 4
    val adjusted = (steps + if (first) 3 else 0) % 4
    return listOf(Rotation.NONE, Rotation.CLOCKWISE, Rotation.FLIPPED, Rotation.COUNTER_CLOCKWISE)[
        adjusted]
  }

  fun place(clicked: ItemFrame, up: BlockFace, poster: Poster): Boolean {
    val frames = buildList {
      for (row in 0 until poster.rows) for (col in 0 until poster.columns) {
        val next = frame(at(clicked.location, clicked.facing, up, col, row), clicked.facing)
        if (next == null || next.item.type != Material.AIR) return false
        add(next)
      }
    }
    frames.forEachIndexed { i, next ->
      val col = i % poster.columns
      val row = i / poster.columns
      val id = poster.ids[mapIndex(poster.columns, poster.rows, next.facing, col, row)]
      val item = ItemStack(Material.FILLED_MAP)
      val meta = item.itemMeta as MapMeta
      meta.mapId = id
      item.itemMeta = meta
      next.setItem(item, false)
      next.rotation = rotation(next.facing, up, i == 0)
    }
    return true
  }

  fun remove(hit: ItemFrame, poster: Poster, index: Int): Int {
    val col =
        if (hit.facing == BlockFace.DOWN) poster.columns - 1 - index % poster.columns
        else index % poster.columns
    val rowFromBottom = poster.rows - 1 - index / poster.columns
    val orientations =
        if (hit.facing in listOf(BlockFace.UP, BlockFace.DOWN)) directions
        else listOf(BlockFace.NORTH)
    val candidates =
        orientations.map { up ->
          val (right, rise) = vectors(hit.facing, up)
          val origin =
              hit.location
                  .clone()
                  .add(
                      (-right.first * col - rise.first * rowFromBottom).toDouble(),
                      if (hit.facing in listOf(BlockFace.UP, BlockFace.DOWN)) 0.0
                      else -rowFromBottom.toDouble(),
                      (-right.second * col - rise.second * rowFromBottom).toDouble(),
                  )
          buildList {
            for (row in 0 until poster.rows) for (c in 0 until poster.columns) {
              val next = frame(at(origin, hit.facing, up, c, row), hit.facing) ?: continue
              val meta = next.item.itemMeta as? MapMeta
              val mapId = if (meta?.hasMapId() == true) meta.mapId else null
              if (mapId == poster.ids[mapIndex(poster.columns, poster.rows, hit.facing, c, row)])
                  add(next)
            }
          }
        }
    val matches = candidates.maxByOrNull { it.size } ?: return 0
    matches.forEach { it.setItem(ItemStack(Material.AIR), false) }
    return matches.size
  }
}
