package icu.oyasai.utilities.elevator

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.Material

class ElevatorFloorTest {
  private fun search(column: List<Material>, source: Int, up: Boolean): FloorSearch =
      findFloor(column, source, up) { it == Material.AIR }

  private fun column(vararg floors: Triple<Int, Material, Material>): MutableList<Material> =
      MutableList(100) { Material.AIR }
          .also { blocks ->
            floors.forEach { (y, top, bottom) ->
              blocks[y] = top
              blocks[y - 1] = bottom
            }
          }

  private val quartz = Material.QUARTZ_BLOCK
  private val redstone = Material.REDSTONE_BLOCK

  @Test
  fun `recognizes exactly the five block pairs`() {
    val pairs =
        listOf(
            quartz to redstone,
            Material.GRANITE to Material.COARSE_DIRT,
            quartz to Material.WHITE_STAINED_GLASS_PANE,
            Material.QUARTZ_SLAB to Material.IRON_BLOCK,
            Material.RED_CARPET to Material.BLUE_WOOL,
        )
    pairs.forEach { (top, bottom) -> assertTrue(isElevatorFloor(top, bottom)) }
    assertFalse(isElevatorFloor(quartz, Material.IRON_BLOCK))
  }

  @Test
  fun `uses nearest matching floor in both directions and counts all floors`() {
    val blocks =
        column(
            Triple(10, quartz, redstone),
            Triple(20, quartz, redstone),
            Triple(30, quartz, redstone),
        )
    assertEquals(FloorSearch.Found(20, 2, 3), search(blocks, 10, true))
    assertEquals(FloorSearch.Found(20, 2, 3), search(blocks, 30, false))
    assertEquals(FloorSearch.Missing, search(blocks, 30, true))
  }

  @Test
  fun `skips other combinations and blocked floors`() {
    val blocks =
        column(
            Triple(10, quartz, redstone),
            Triple(15, Material.GRANITE, Material.COARSE_DIRT),
            Triple(20, quartz, redstone),
            Triple(25, quartz, redstone),
        )
    blocks[21] = Material.STONE
    assertEquals(FloorSearch.Found(25, 2, 2), search(blocks, 10, true))
  }

  @Test
  fun `carpet needs one free block while slab needs two`() {
    val carpet =
        column(
            Triple(10, Material.RED_CARPET, Material.BLUE_WOOL),
            Triple(20, Material.RED_CARPET, Material.BLUE_WOOL),
        )
    carpet[22] = Material.STONE
    assertEquals(FloorSearch.Found(20, 2, 2), search(carpet, 10, true))

    val slab =
        column(
            Triple(10, Material.QUARTZ_SLAB, Material.IRON_BLOCK),
            Triple(20, Material.QUARTZ_SLAB, Material.IRON_BLOCK),
            Triple(30, Material.QUARTZ_SLAB, Material.IRON_BLOCK),
        )
    slab[22] = Material.STONE
    assertEquals(FloorSearch.Found(30, 2, 2), search(slab, 10, true))
  }

  @Test
  fun `allows forty blocks but stops at forty one`() {
    val forty = column(Triple(10, quartz, redstone), Triple(50, quartz, redstone))
    assertEquals(FloorSearch.Found(50, 2, 2), search(forty, 10, true))

    val fortyOne =
        column(
            Triple(10, quartz, redstone),
            Triple(51, quartz, redstone),
            Triple(60, quartz, redstone),
        )
    assertEquals(FloorSearch.TooFar, search(fortyOne, 10, true))
  }
}
