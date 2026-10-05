package icu.oyasai.games.slot

import kotlin.test.*

class SlotPackingTest {
  @Test
  fun `merges identical metadata kinds then splits across empty slots`() {
    val existing = listOf(SlotStack(1, 60, 64), SlotStack(2, 32, 64), null, null)
    val packed = packSlotItems(existing, listOf(SlotStack(1, 100, 64)))
    assertEquals(
        listOf(
            SlotStack(1, 64, 64),
            SlotStack(2, 32, 64),
            SlotStack(1, 64, 64),
            SlotStack(1, 32, 64),
        ),
        packed,
    )
    assertEquals(60, existing[0]!!.amount)
  }

  @Test
  fun `nonstackable and multiple rewards require enough capacity`() {
    val rewards = listOf(SlotStack(1, 2, 1), SlotStack(2, 1, 1))
    assertEquals(
        listOf(SlotStack(1, 1, 1), SlotStack(1, 1, 1), SlotStack(2, 1, 1)),
        packSlotItems(List(3) { null }, rewards),
    )
    assertFailsWith<IllegalStateException> { packSlotItems(List(2) { null }, rewards) }
  }

  @Test
  fun `failure does not change any inventory cell and full cells stay full`() {
    val existing = listOf(SlotStack(1, 64, 64), SlotStack(2, 1, 1))
    assertFailsWith<IllegalStateException> { packSlotItems(existing, listOf(SlotStack(1, 1, 64))) }
    assertEquals(listOf(SlotStack(1, 64, 64), SlotStack(2, 1, 1)), existing)
    assertEquals(existing, packSlotItems(existing, emptyList()))
  }

  @Test
  fun `invalid reward cannot silently remove items`() {
    assertFailsWith<IllegalArgumentException> {
      packSlotItems(listOf(null), listOf(SlotStack(1, -1, 64)))
    }
    assertFailsWith<IllegalArgumentException> {
      packSlotItems(listOf(null), listOf(SlotStack(1, 1, 0)))
    }
  }
}
