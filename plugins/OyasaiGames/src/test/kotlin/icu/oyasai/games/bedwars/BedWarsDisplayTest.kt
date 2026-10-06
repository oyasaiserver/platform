package icu.oyasai.games.bedwars

import kotlin.test.*

class BedWarsDisplayTest {
  @Test
  fun `mode membership is exactly configured team capacity and ordering is deterministic`() {
    val arenas =
        listOf(
            ArenaView("Zulu", 2, 0, 8, true),
            ArenaView("Alpha", 2, 4, 8, false),
            ArenaView("Solo", 1, 0, 4, true),
            ArenaView("Unsupported", 5, 0, 10, true),
        )
    assertEquals(listOf("Alpha", "Zulu"), modeArenas("double", arenas).map { it.name })
    assertEquals(listOf("Solo"), modeArenas("solo", arenas).map { it.name })
    assertEquals("triples", bedWarsMode(3))
    assertEquals("squads", bedWarsMode(4))
    assertNull(bedWarsMode(5))
    assertTrue(modeArenas("invalid", arenas).isEmpty())
  }

  @Test
  fun `menu empty fallback and overflow pages leave footer slots unused`() {
    assertEquals(BedWarsMenuPage(0, 0, 0), bedWarsMenuPage(0, 10))
    assertEquals(BedWarsMenuPage(0, 0, 0), bedWarsMenuPage(45, 1))
    assertEquals(BedWarsMenuPage(1, 45, 1), bedWarsMenuPage(46, 1))
    assertEquals(BedWarsMenuPage(1, 45, 1), bedWarsMenuPage(90, Int.MAX_VALUE))
    assertEquals(BedWarsMenuPage(2, 90, 2), bedWarsMenuPage(91, 2))
    assertEquals(BedWarsMenuPage(0, 0, 2), bedWarsMenuPage(91, -1))
    assertFailsWith<IllegalArgumentException> { bedWarsMenuPage(-1, 0) }
  }
}
