package icu.oyasai.games.tntrun

import java.util.UUID
import kotlin.test.*

class TntrunRulesTest {
  @Test
  fun `shop accepts general permission or offer specific permission`() {
    assertFalse(shopPermission(false, false))
    assertTrue(shopPermission(true, false))
    assertTrue(shopPermission(false, true))
    assertTrue(shopPermission(true, true))
  }

  @Test
  fun `only unambiguous full arena names match`() {
    assertEquals("Example", arenaName("EXAMPLE", listOf("Example", "Example2")))
    assertNull(arenaName("Ex", listOf("Example", "Example2")))
    assertNull(arenaName("example", listOf("Example", "example")))
  }

  @Test
  fun `footprint follows negative block coordinates and two heights`() {
    assertEquals(
        listOf(
            Cell(-1, -7, -1),
            Cell(-2, -7, 0),
            Cell(-1, -7, 0),
            Cell(-2, -7, -1),
            Cell(-1, -8, -1),
            Cell(-2, -8, 0),
            Cell(-1, -8, 0),
            Cell(-2, -8, -1),
        ),
        footprint(-1.0, -6.5, 0.0),
    )
    assertFalse(lostAt(-62.0, -62.8))
    assertTrue(lostAt(-62.01, -62.8))
  }

  @Test
  fun `bounds normalize corners and detect overlaps on shared edges`() {
    val b = Bounds.between(Cell(5, 8, 6), Cell(2, 4, 3))
    assertEquals(80, b.volume)
    assertTrue(b.contains(Cell(2, 4, 3)))
    assertFalse(b.contains(Cell(2, 3, 3)))
    assertTrue(b.overlaps(Bounds.between(Cell(5, 8, 6), Cell(9, 9, 9))))
    assertFalse(b.overlaps(Bounds.between(Cell(6, 8, 6), Cell(9, 9, 9))))
  }

  @Test
  fun `countdown resets after leaving and cannot start twice`() {
    val r = RunRules(2, 2, 10)
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    r.active.addAll(listOf(a, b))
    assertFalse(r.second())
    assertEquals(1, r.remaining)
    r.remove(listOf(a))
    assertFalse(r.second())
    assertEquals(Phase.WAITING, r.phase)
    assertEquals(2, r.remaining)
    r.active.add(a)
    assertFalse(r.second())
    assertFalse(r.second())
    assertTrue(r.second())
    assertEquals(2, r.started)
    assertFalse(r.second())
    assertEquals(Phase.RUNNING, r.phase)
  }

  @Test
  fun `vote rounding force countdown and timeout are deterministic`() {
    assertEquals(3, votesRequired(3, 0.75))
    val r = RunRules(4, 0, 2)
    r.active.add(UUID.randomUUID())
    assertFalse(r.second(true))
    r.active.add(UUID.randomUUID())
    assertTrue(r.second(true))
    assertFalse(r.timedOut)
    r.second()
    assertFalse(r.timedOut)
    r.second()
    assertTrue(r.timedOut)
    r.end()
    assertEquals(Phase.REGENERATING, r.phase)
  }

  @Test
  fun `same tick final losses leave no winner and repeated removal is harmless`() {
    val r = RunRules(2, 0, 20)
    val ids = setOf(UUID.randomUUID(), UUID.randomUUID())
    r.active.addAll(ids)
    r.second()
    r.remove(ids)
    r.remove(ids)
    assertNull(r.active.singleOrNull())
    r.fail()
    assertEquals(Phase.FAILED, r.phase)
  }

  @Test
  fun `jump purchase caps reject overflow and invalid quantities`() {
    assertTrue(canBuyJumps(9, 1, 10))
    assertFalse(canBuyJumps(10, 1, 10))
    assertFalse(canBuyJumps(-1, 1, 10))
    assertFalse(canBuyJumps(0, 0, 10))
    assertFalse(canBuyJumps(Int.MAX_VALUE, Int.MAX_VALUE, 10))
  }

  @Test
  fun `xp awards retain progress at level formula boundaries`() {
    for (level in listOf(0, 15, 16, 17, 30, 31, 32, 50)) {
      assertEquals(level to 0f, xpProgress(level, 0f, 0))
      val next = (xpToLevel(level + 1) - xpToLevel(level)).toInt()
      assertEquals(level + 1 to 0f, xpProgress(level, 0f, next))
    }
    assertEquals(26, xpProgress(0, 0f, 1000).first)
    assertFails { xpProgress(0, 0f, -1) }
  }
}
