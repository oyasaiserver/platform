package io.oyasai.worldgen.gen

import java.util.Random
import org.bukkit.Location
import org.bukkit.World
import org.bukkit.generator.ChunkGenerator

class VoidGenerator(private val spawnY: Int) : ChunkGenerator() {
  override fun shouldGenerateNoise(): Boolean = false

  override fun shouldGenerateSurface(): Boolean = false

  override fun shouldGenerateBedrock(): Boolean = false

  override fun shouldGenerateCaves(): Boolean = false

  override fun shouldGenerateDecorations(): Boolean = false

  override fun shouldGenerateMobs(): Boolean = false

  override fun shouldGenerateStructures(): Boolean = false

  override fun getFixedSpawnLocation(world: World, random: Random): Location =
      Location(world, 0.5, spawnY.toDouble(), 0.5)
}
