package icu.oyasai.utilities.skriptport

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class SkriptCalculationsTest {
  @Test
  fun `scale reciprocals reach rank priority and flight boundaries match the scripts`() {
    assertEquals(0.0625, scaleMultiplier(-16.0))
    assertEquals(0.25, scaleMultiplier(-4.0))
    assertEquals(4.0, scaleMultiplier(-0.25))
    assertEquals(0.0, scaleMultiplier(0.0))
    assertEquals(1.0, scaleMultiplier(1.0))
    assertEquals(16.0, scaleMultiplier(16.0))
    assertEquals(64, reachLimit { true })
    assertEquals(48, reachLimit { it in setOf("reach.blue", "reach.takumi", "reach.builder") })
    assertEquals(32, reachLimit { it == "reach.takumi" })
    assertEquals(16, reachLimit { it == "reach.builder" })
    assertEquals(0, reachLimit { false })
    assertTrue(validFlySpeed(0.1))
    assertTrue(validFlySpeed(5.0))
    assertFalse(validFlySpeed(0.099))
    assertFalse(validFlySpeed(5.001))
    assertFalse(validFlySpeed(Double.NaN))
    assertFalse(validFlySpeed(Double.POSITIVE_INFINITY))
  }
}
