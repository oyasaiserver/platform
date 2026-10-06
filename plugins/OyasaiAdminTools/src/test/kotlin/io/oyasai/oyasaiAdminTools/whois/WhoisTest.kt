package io.oyasai.oyasaiAdminTools.whois

import kotlin.test.*

class WhoisTest {
  @Test
  fun experienceMatchesEssentialsAcrossLevelFormulaBoundariesAndRoundsHalfUp() {
    val expected = mapOf(0 to 0L, 1 to 7L, 16 to 352L, 17 to 394L, 31 to 1507L, 32 to 1628L)
    expected.forEach { (level, exp) -> assertEquals(exp, totalExperience(level, 0f)) }
    assertEquals(12L, totalExperience(1, 0.5f))
  }
}
