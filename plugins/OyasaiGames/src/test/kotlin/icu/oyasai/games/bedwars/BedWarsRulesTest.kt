package icu.oyasai.games.bedwars

import kotlin.test.*

class BedWarsRulesTest {
  @Test
  fun `final kill reward is suppressed while other configured rewards are preserved`() {
    assertEquals(0.0, bedWarsRewardAmount("final-kill", 13.0))
    assertEquals(0.0, bedWarsRewardAmount("final-kill", 0.0))
    assertEquals(7.0, bedWarsRewardAmount("kill", 7.0))
    assertEquals(31.0, bedWarsRewardAmount("win", 31.0))
    assertEquals(11.0, bedWarsRewardAmount("bed-destroy", 11.0))
    assertEquals(0.0, bedWarsRewardAmount("kill", 0.0))
  }

  @Test
  fun `starting inventory follows configured items without an implicit compass`() {
    val fictionalKit = listOf("WOODEN_AXE", "LEATHER_BOOTS")
    assertEquals(fictionalKit, gameStartMaterials(true, fictionalKit))
    assertEquals(listOf("COMPASS"), gameStartMaterials(true, listOf("COMPASS")))
    assertTrue(gameStartMaterials(false, fictionalKit).isEmpty())
    assertFalse("COMPASS" in gameStartMaterials(true, emptyList()))
  }

  @Test
  fun `team assignment balances in configured order and enforces capacity`() {
    val capacities = linkedMapOf("red" to 2, "blue" to 2)
    val members = linkedMapOf<String, String>()
    for ((i, expected) in listOf("red", "blue", "red", "blue").withIndex()) {
      assertEquals(expected, chooseTeam(capacities, members))
      members["player$i"] = expected
    }
    assertNull(chooseTeam(capacities, members))
  }

  @Test
  fun `bed death respawns once and final death gives one kill`() {
    val r =
        BwRules().apply {
          add("first", "red")
          add("second", "blue")
        }
    assertFalse(r.destroyBed("red", "red"))
    assertEquals(false, r.die("first", "second"))
    assertNull(r.die("first", "second"))
    assertEquals(1, r.fighters.getValue("second").kills)
    assertNull(r.winner())
    assertTrue(r.respawn("first"))
    assertFalse(r.respawn("first"))
    assertTrue(r.destroyBed("red", "blue"))
    assertFalse(r.destroyBed("red", "blue"))
    assertEquals(true, r.die("first", "second"))
    assertNull(r.die("first", "second"))
    assertEquals(1, r.fighters.getValue("second").finalKills)
    assertEquals("blue", r.winner())
    assertTrue(r.canFinish())
  }

  @Test
  fun `respawning teammates stay alive until eliminated and same team gets no credit`() {
    val r =
        BwRules().apply {
          add("one", "red")
          add("two", "red")
          add("three", "blue")
        }
    r.die("one", "two")
    assertEquals(0, r.fighters.getValue("two").kills)
    r.eliminate("three")
    assertEquals("red", r.winner())
    r.eliminate("one")
    r.eliminate("two")
    assertTrue(r.canFinish())
    assertNull(r.winner())
    assertFails { r.add("one", "red") }
  }

  @Test
  fun `generator timings match observed whole second scheduler and exact timed boundaries`() {
    assertEquals(40L, generatorIntervalTicks(2.5, 1.0))
    assertEquals(40L, generatorIntervalTicks(2.5, 2.0))
    assertEquals(1L, generatorIntervalTicks(0.001, 1.0))
    assertFails { generatorIntervalTicks(Double.NaN, 1.0) }
    assertFails { generatorIntervalTicks(1.0, 0.0) }
    val schedule = mapOf("Diamond-II" to 30, "Diamond-III" to 70, "Emerald-II" to 60)
    assertEquals(1, timedGeneratorLevel("diamond", 29, schedule))
    assertEquals(2, timedGeneratorLevel("diamond", 30, schedule))
    assertEquals(3, timedGeneratorLevel("diamond", 70, schedule))
    assertEquals(1, timedGeneratorLevel("emerald", 59, schedule))
  }

  @Test
  fun `rejoin restores only an inactive member whose same team still has a bed`() {
    val r =
        BwRules().apply {
          add("first", "red")
          add("second", "blue")
        }
    assertFalse(r.rejoin("first", "red"))
    r.eliminate("first")
    assertFalse(r.rejoin("first", "blue"))
    assertTrue(r.rejoin("first", "red"))
    assertFalse(r.rejoin("first", "red"))
    r.eliminate("first")
    r.destroyBed("red", "blue")
    assertFalse(r.rejoin("first", "red"))
  }

  @Test
  fun `fractional generator levels increase amount using a bounded weighted draw`() {
    assertEquals(2, generatorAmount(1.25, 0.249))
    assertEquals(2, generatorAmount(1.25, 0.0))
    assertEquals(1, generatorAmount(1.25, 0.25))
    assertEquals(3, generatorAmount(3.0, 0.0))
    assertEquals(0, generatorAmount(0.0, 0.2))
    assertFails { generatorAmount(1.0, 1.0) }
    assertFails { generatorAmount(Double.NaN, 0.2) }
  }

  @Test
  fun `arena lookup rejects ambiguous names and does not guess aliases`() {
    assertEquals("Example", resolveBwName("EXAMPLE", listOf("Example")))
    assertNull(resolveBwName("Exam", listOf("Example")))
    assertNull(resolveBwName("example", listOf("Example", "example")))
  }
}
