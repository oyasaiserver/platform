package icu.oyasai.games.kimodameshi

import kotlin.test.Test
import kotlin.test.assertEquals

class KimodameshiRulesTest {
  @Test
  fun originalGameSizeBoundaryAndPointDisplay() {
    assertEquals(2, KimodameshiModule.hunterLimit(3))
    assertEquals(2, KimodameshiModule.hunterLimit(6))
    assertEquals(4, KimodameshiModule.hunterLimit(7))
    assertEquals(4, KimodameshiModule.hunterLimit(10))
    assertEquals("3", KimodameshiModule.number(3.0))
    assertEquals("-2.5", KimodameshiModule.number(-2.5))
  }

  @Test
  fun experienceRestorationUsesLevelAndProgressWithoutMending() {
    for ((level, xp) in listOf(0 to 0, 15 to 315, 16 to 352, 30 to 1395, 31 to 1507, 32 to 1628)) {
      assertEquals(xp, KimodameshiModule.totalExperience(level, 0f))
      assertEquals(level to 0f, KimodameshiModule.experienceState(xp))
    }
    assertEquals(1451, KimodameshiModule.totalExperience(30, 0.5f))
    assertEquals(30 to 0.5f, KimodameshiModule.experienceState(1451))
    assertEquals(0 to 0f, KimodameshiModule.experienceState(-1))
  }
}
