package icu.oyasai.utilities.elevator

import org.bukkit.Material

internal sealed interface FloorSearch {
  data class Found(val y: Int, val number: Int, val total: Int) : FloorSearch

  data object TooFar : FloorSearch

  data object Missing : FloorSearch
}

private val floorPairs =
    setOf(
        Material.QUARTZ_BLOCK to Material.REDSTONE_BLOCK,
        Material.GRANITE to Material.COARSE_DIRT,
        Material.QUARTZ_BLOCK to Material.WHITE_STAINED_GLASS_PANE,
        Material.QUARTZ_SLAB to Material.IRON_BLOCK,
        Material.RED_CARPET to Material.BLUE_WOOL,
    )

internal fun isElevatorFloor(top: Material, bottom: Material): Boolean = top to bottom in floorPairs

/** [column] starts at the world's minimum height; indexes are relative to that height. */
internal fun findFloor(
    column: List<Material>,
    source: Int,
    up: Boolean,
    isEmpty: (Material) -> Boolean,
): FloorSearch {
  val top = column.getOrNull(source) ?: return FloorSearch.Missing
  val bottom = column.getOrNull(source - 1) ?: return FloorSearch.Missing
  if (!isElevatorFloor(top, bottom)) return FloorSearch.Missing

  val floors =
      column.indices.filter { y ->
        column[y] == top &&
            column.getOrNull(y - 1) == bottom &&
            (1..if (top == Material.RED_CARPET) 1 else 2).all { offset ->
              column.getOrNull(y + offset)?.let(isEmpty) == true
            }
      }
  val destination =
      if (up) floors.firstOrNull { it > source } else floors.lastOrNull { it < source }
  if (destination == null) return FloorSearch.Missing
  if (kotlin.math.abs(destination - source) > 40) return FloorSearch.TooFar
  return FloorSearch.Found(destination, floors.indexOf(destination) + 1, floors.size)
}
