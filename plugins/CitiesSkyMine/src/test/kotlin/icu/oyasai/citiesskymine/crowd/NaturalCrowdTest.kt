package icu.oyasai.citiesskymine.crowd

import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.exp
import kotlin.math.max
import kotlin.math.sin
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class NaturalCrowdTest {
  @Test
  fun walkingThreesFormOneBlockV() {
    val groups =
        generateNaturalCrowd(
                NaturalCrowdOptions(
                    64,
                    64,
                    density = 0.2,
                    group = 2.0,
                    stand = 0.0,
                    jitter = 0.0,
                    right = 100.0,
                    gap = 0,
                    seed = 42,
                )
            )
            .people
            .groupBy { it.group }
            .values
            .filter { it.size == 3 }
    assertTrue(groups.isNotEmpty())
    for (group in groups) {
      val (left, middle, right) = group.sortedBy { it.z }
      assertEquals(left.x, middle.x + 1)
      assertEquals(right.x, middle.x + 1)
    }
  }

  @Test
  fun standingPairsHaveOneEmptyCellAndFaceEachOther() {
    val people =
        generateNaturalCrowd(
                NaturalCrowdOptions(
                    48,
                    48,
                    density = 0.2,
                    group = 2.0,
                    stand = 100.0,
                    gap = 0,
                    seed = 42,
                )
            )
            .people
    val positions = people.map { it.x to it.z }.toSet()
    val groups = people.groupBy { it.group }.values.filter { it.size == 2 }
    assertTrue(groups.isNotEmpty())
    for ((a, b) in groups.map { it[0] to it[1] }) {
      assertEquals(2, abs(a.x - b.x) + abs(a.z - b.z))
      assertTrue(a.x == b.x || a.z == b.z)
      assertTrue(((a.x + b.x) / 2 to (a.z + b.z) / 2) !in positions)
      assertTrue(abs(cos(a.yaw) + cos(b.yaw)) < 1e-9)
      assertTrue(abs(sin(a.yaw) + sin(b.yaw)) < 1e-9)
    }
  }

  @Test
  fun walkingPairsVaryWithLocalDensity() {
    fun pairs(density: Double) =
        generateNaturalCrowd(
                NaturalCrowdOptions(
                    64,
                    64,
                    density = density,
                    group = 2.0,
                    stand = 0.0,
                    noise = 0.0,
                    gap = 0,
                    right = 100.0,
                    jitter = 0.0,
                    seed = 42,
                )
            )
            .people
            .groupBy { it.group }
            .values
            .filter { it.size == 2 }

    val sparse = pairs(0.05)
    assertTrue(sparse.isNotEmpty())
    assertTrue(sparse.all { it[0].x == it[1].x && abs(it[0].z - it[1].z) == 1 })

    val dense = pairs(0.5)
    assertTrue(dense.any { abs(it[0].x - it[1].x) == 1 && it[0].z == it[1].z })
    assertTrue(dense.any { abs(it[0].x - it[1].x) == 1 && abs(it[0].z - it[1].z) == 1 })
  }

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
    assertTrue(abs(share - exp(-0.6)) < 0.05, "solo share=$share, people=$people")
  }

  @Test
  fun walkingDirectionsFollowPlayerAxesPerGroup() {
    val base =
        NaturalCrowdOptions(48, 32, density = 0.25, group = 2.0, stand = 0.0, gap = 0, seed = 42)
    val frontBack = generateNaturalCrowd(base.copy(fb = 100.0))
    assertTrue(frontBack.people.isNotEmpty())
    assertTrue(frontBack.people.all { abs(cos(it.yaw)) <= sin(base.jitter * PI / 180) + 1e-9 })

    val forward = generateNaturalCrowd(base.copy(fb = 100.0, forward = 100.0, jitter = 0.0))
    assertTrue(forward.people.isNotEmpty())
    assertTrue(forward.people.all { abs(sin(it.yaw) - 1.0) < 1e-9 })

    val left = generateNaturalCrowd(base.copy(fb = 0.0, right = 0.0, jitter = 0.0))
    assertTrue(left.people.isNotEmpty())
    assertTrue(left.people.all { abs(cos(it.yaw) + 1.0) < 1e-9 })

    val mixed = generateNaturalCrowd(base.copy(fb = 50.0, jitter = 0.0))
    assertTrue(mixed.people.any { abs(cos(it.yaw)) > 0.5 })
    assertTrue(mixed.people.any { abs(sin(it.yaw)) > 0.5 })
    assertTrue(
        mixed.people
            .groupBy { it.group }
            .values
            .all { group -> group.map { it.yaw }.distinct().size == 1 }
    )
  }
}
