package icu.oyasai.citiesskymine.crowd

import kotlin.math.abs
import kotlin.math.exp
import kotlin.math.max
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class NaturalCrowdTest {
  @Test
  fun placementInvariants() {
    val base = NaturalCrowdOptions(48, 32, seed = 42)
    val cases =
        listOf(
            base,
            base.copy(gap = 0, density = 0.6),
            base.copy(gap = 3),
            base.copy(group = 3.0, stand = 100.0),
            base.copy(width = 8, depth = 8, density = 1.0),
        )
    for (options in cases) {
      val result = generateNaturalCrowd(options)
      assertTrue(result.people.size <= result.target)
      val cells = HashMap<Pair<Int, Int>, Int>()
      for (person in result.people) {
        assertTrue(person.x in 0 until options.width && person.z in 0 until options.depth)
        assertTrue(cells.put(person.x to person.z, person.group) == null, "同じマスに2人")
      }
      for (a in result.people) for (b in result.people) {
        if (a.group != b.group) {
          assertTrue(max(abs(a.x - b.x), abs(a.z - b.z)) > options.gap, "別グループの間隔")
        }
      }
      assertEquals(result, generateNaturalCrowd(options), "同じ seed で再現")
    }
  }

  @Test
  fun soloShareMatchesZeroTruncatedPoisson() {
    var solos = 0
    var people = 0
    for (seed in 40L..49L) {
      val result =
          generateNaturalCrowd(
              NaturalCrowdOptions(128, 128, density = 0.05, noise = 0.0, gap = 0, seed = seed)
          )
      solos += result.solos
      people += result.people.size
    }
    val share = solos.toDouble() / people
    assertTrue(abs(share - exp(-1.0)) < 0.05, "solo share=$share, people=$people")
  }
}
