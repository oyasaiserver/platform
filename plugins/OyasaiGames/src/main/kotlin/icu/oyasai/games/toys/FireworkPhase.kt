package icu.oyasai.games.toys

import org.bukkit.Particle

internal data class FireworkPhase(
    val particles: List<Particle>,
    val baseChance: Double,
    val sparkChance: Double,
)

internal fun fireworkPhase(name: String, elapsed: Int): FireworkPhase? {
  val particles =
      when (name) {
        "線香花火「鬼百合」" -> listOf(Particle.SMALL_FLAME, Particle.WAX_ON)
        "線香花火「楓」" ->
            listOf(
                when (elapsed % 90) {
                  in 0..19 -> Particle.SMALL_FLAME
                  in 20..49 -> Particle.COPPER_FIRE_FLAME
                  in 50..69 -> Particle.SOUL_FIRE_FLAME
                  else -> Particle.COPPER_FIRE_FLAME
                }
            )
        "線香花火「矢車菊」" ->
            listOf(
                when {
                  elapsed < 67 -> Particle.SOUL_FIRE_FLAME
                  elapsed < 134 -> Particle.SCRAPE
                  else -> Particle.OMINOUS_SPAWNING
                }
            )
        "線香花火「桜」" ->
            when {
              elapsed < 34 -> listOf(Particle.COPPER_FIRE_FLAME)
              elapsed < 67 -> listOf(Particle.COPPER_FIRE_FLAME, Particle.GLOW)
              elapsed < 101 -> listOf(Particle.GLOW, Particle.OMINOUS_SPAWNING)
              elapsed < 134 -> listOf(Particle.OMINOUS_SPAWNING, Particle.END_ROD)
              elapsed < 167 -> listOf(Particle.END_ROD, Particle.CHERRY_LEAVES)
              else -> listOf(Particle.CHERRY_LEAVES)
            }
        else -> return null
      }
  return if (particles.size == 2) FireworkPhase(particles, 0.1, 0.2)
  else FireworkPhase(particles, 0.2, 0.4)
}
