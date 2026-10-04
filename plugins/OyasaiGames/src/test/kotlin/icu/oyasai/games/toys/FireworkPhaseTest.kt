package icu.oyasai.games.toys

import kotlin.test.assertEquals
import kotlin.test.assertNull
import org.bukkit.Particle
import org.junit.jupiter.api.Test

class FireworkPhaseTest {
  @Test
  fun mapleRepeatsEveryNinetyTicksAtExactBoundaries() {
    val boundaries =
        mapOf(
            1 to Particle.SMALL_FLAME,
            19 to Particle.SMALL_FLAME,
            20 to Particle.COPPER_FIRE_FLAME,
            49 to Particle.COPPER_FIRE_FLAME,
            50 to Particle.SOUL_FIRE_FLAME,
            69 to Particle.SOUL_FIRE_FLAME,
            70 to Particle.COPPER_FIRE_FLAME,
            89 to Particle.COPPER_FIRE_FLAME,
            90 to Particle.SMALL_FLAME,
            180 to Particle.SMALL_FLAME,
            200 to Particle.COPPER_FIRE_FLAME,
        )
    for ((elapsed, particle) in boundaries) {
      assertEquals(FireworkPhase(listOf(particle), 0.2, 0.4), fireworkPhase("線香花火「楓」", elapsed))
    }
  }

  @Test
  fun cornflowerAndCherryKeepTheirStageTransitionsAndCoupledProbabilities() {
    for ((elapsed, particle) in
        mapOf(
            66 to Particle.SOUL_FIRE_FLAME,
            67 to Particle.SCRAPE,
            133 to Particle.SCRAPE,
            134 to Particle.OMINOUS_SPAWNING,
            200 to Particle.OMINOUS_SPAWNING,
        )) {
      assertEquals(FireworkPhase(listOf(particle), 0.2, 0.4), fireworkPhase("線香花火「矢車菊」", elapsed))
    }
    val stages =
        listOf(
            1..33 to listOf(Particle.COPPER_FIRE_FLAME),
            34..66 to listOf(Particle.COPPER_FIRE_FLAME, Particle.GLOW),
            67..100 to listOf(Particle.GLOW, Particle.OMINOUS_SPAWNING),
            101..133 to listOf(Particle.OMINOUS_SPAWNING, Particle.END_ROD),
            134..166 to listOf(Particle.END_ROD, Particle.CHERRY_LEAVES),
            167..200 to listOf(Particle.CHERRY_LEAVES),
        )
    for ((range, particles) in stages) for (elapsed in range) {
      val probability = if (particles.size == 2) 0.1 else 0.2
      assertEquals(
          FireworkPhase(particles, probability, probability * 2),
          fireworkPhase("線香花火「桜」", elapsed),
      )
    }
  }

  @Test
  fun tigerLilyKeepsItsMixedParticlesAndUnknownNameProducesNoParticles() {
    for (elapsed in 1..200) {
      assertEquals(
          FireworkPhase(listOf(Particle.SMALL_FLAME, Particle.WAX_ON), 0.1, 0.2),
          fireworkPhase("線香花火「鬼百合」", elapsed),
      )
    }
    assertNull(fireworkPhase("線香花火", 1))
  }
}
