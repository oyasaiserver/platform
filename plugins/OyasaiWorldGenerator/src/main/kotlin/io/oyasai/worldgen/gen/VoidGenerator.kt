package io.oyasai.worldgen.gen

import java.util.Random
import org.bukkit.Location
import org.bukkit.World
import org.bukkit.generator.ChunkGenerator
import org.bukkit.generator.WorldInfo

class VoidGenerator(private val spawnY: Int) : ChunkGenerator() {
  override fun generateNoise(
      worldInfo: WorldInfo,
      random: Random,
      chunkX: Int,
      chunkZ: Int,
      chunkData: ChunkData,
  ) = Unit

  override fun generateSurface(
      worldInfo: WorldInfo,
      random: Random,
      chunkX: Int,
      chunkZ: Int,
      chunkData: ChunkData,
  ) = Unit

  override fun generateBedrock(
      worldInfo: WorldInfo,
      random: Random,
      chunkX: Int,
      chunkZ: Int,
      chunkData: ChunkData,
  ) = Unit

  override fun generateCaves(
      worldInfo: WorldInfo,
      random: Random,
      chunkX: Int,
      chunkZ: Int,
      chunkData: ChunkData,
  ) = Unit

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
