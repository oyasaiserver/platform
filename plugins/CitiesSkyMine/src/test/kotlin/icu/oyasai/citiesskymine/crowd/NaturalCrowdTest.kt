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
  fun standingPairsAreAdjacentAndFaceEachOther() {
    val groups =
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
            .groupBy { it.group }
            .values
            .filter { it.size == 2 }
    assertTrue(groups.isNotEmpty())
    for ((a, b) in groups.map { it[0] to it[1] }) {
      assertEquals(1, abs(a.x - b.x) + abs(a.z - b.z))
      assertTrue(abs(cos(a.yaw) + cos(b.yaw)) < 1e-9)
      assertTrue(abs(sin(a.yaw) + sin(b.yaw)) < 1e-9)
    }
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
    assertTrue(abs(share - exp(-1.0)) < 0.05, "solo share=$share, people=$people")
  }

  @Test
  fun walkingAxisUsesWorldDirectionsPerGroup() {
    val base =
        NaturalCrowdOptions(48, 32, density = 0.25, group = 2.0, stand = 0.0, gap = 0, seed = 42)
    for ((rightX, rightZ) in listOf(1 to 0, 0 to 1, -1 to 0, 0 to -1)) {
      val oriented = base.copy(rightWorldX = rightX, rightWorldZ = rightZ)
      for (percent in listOf(0.0, 100.0)) {
        val people = generateNaturalCrowd(oriented.copy(axisXPercent = percent)).people
        assertTrue(people.isNotEmpty())
        for (person in people) {
          val worldX = cos(person.yaw) * rightX + sin(person.yaw) * rightZ
          val worldZ = cos(person.yaw) * rightZ - sin(person.yaw) * rightX
          val drift = if (percent == 0.0) abs(worldX) else abs(worldZ)
          assertTrue(drift <= sin(oriented.jitter * PI / 180) + 1e-9)
        }
      }
    }
    for (percent in listOf(0.0, 100.0)) for (positive in listOf(false, true)) {
      val people =
          generateNaturalCrowd(
                  base.copy(
                      axisXPercent = percent,
                      right = if (positive) 100.0 else 0.0,
                      jitter = 0.0,
                  )
              )
              .people
      val expected = if (positive) 1.0 else -1.0
      assertTrue(people.isNotEmpty())
      assertTrue(
          people.all {
            if (percent == 100.0) abs(cos(it.yaw) - expected) < 1e-9
            else abs(-sin(it.yaw) - expected) < 1e-9
          }
      )
    }
    val mixed = generateNaturalCrowd(base.copy(axisXPercent = 50.0, jitter = 0.0, right = 100.0))
    val directions = mixed.people.map { if (cos(it.yaw) > 0.5) "x" else "z" }
    assertTrue("x" in directions && "z" in directions)
    assertTrue(
        mixed.people
            .groupBy { it.group }
            .values
            .all { group -> group.map { it.yaw }.distinct().size == 1 }
    )
    val legacy =
        generateNaturalCrowd(
            base.copy(
                axisXPercent = null,
                rightWorldX = 0,
                rightWorldZ = 1,
                jitter = 0.0,
                right = 100.0,
            )
        )
    assertTrue(legacy.people.all { it.yaw == 0.0 })
  }
}
