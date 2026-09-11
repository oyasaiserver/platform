package io.oyasai.worldgen.config

import io.oyasai.worldgen.height.HeightSpec
import java.util.Locale
import java.util.logging.Logger
import org.bukkit.GameMode
import org.bukkit.configuration.file.FileConfiguration

data class OwgWorldConfig(
    val name: String,
    val generator: String,
    val heightSpec: HeightSpec,
    val spawnY: Int,
    val gameMode: GameMode,
    val allowFlight: Boolean,
)

data class OwgConfig(
    val worlds: Map<String, OwgWorldConfig>,
    val selfTest: Boolean,
    val clearForceLoadedChunks: Boolean,
    val configuredWorldNames: Set<String>,
    val validationErrors: List<String>,
) {
  companion object {
    private val SAFE_WORLD_NAME = Regex("[A-Za-z0-9_.-]+")

    fun empty(): OwgConfig = OwgConfig(emptyMap(), true, false, emptySet(), emptyList())

    fun load(config: FileConfiguration, logger: Logger): OwgConfig {
      val worldsSection = config.getConfigurationSection("worlds")
      if (worldsSection == null) {
        val error = "'worlds' section is missing"
        logger.warning("[OWG][config] $error; no worlds will be loaded")
        return OwgConfig(
            emptyMap(),
            config.getBoolean("self-test", true),
            config.getBoolean("clear-force-loaded-chunks", false),
            emptySet(),
            listOf(error),
        )
      }

      val parsed = linkedMapOf<String, OwgWorldConfig>()
      val configuredNames = linkedSetOf<String>()
      val errors = mutableListOf<String>()
      for (worldName in worldsSection.getKeys(false).sorted()) {
        configuredNames += worldName
        val path = "worlds.$worldName"
        val section = config.getConfigurationSection(path)
        if (section == null) {
          val error = "$worldName: expected a configuration section"
          errors += error
          logger.warning("[OWG][config] Ignoring $error")
          continue
        }
        if (!SAFE_WORLD_NAME.matches(worldName)) {
          val error = "$worldName: unsafe world name"
          errors += error
          logger.warning("[OWG][config] Ignoring $error")
          continue
        }

        val generator = section.getString("generator", "void")!!.trim().lowercase(Locale.ROOT)
        val generatorFamily = generator.substringBefore(':')
        if (generator != "void") {
          val reason =
              if (generatorFamily == "flat") "flat generator is reserved but not implemented"
              else "unsupported generator '$generator'"
          errors += "$worldName: $reason"
          logger.warning("[OWG][config] Ignoring $worldName: $reason")
          continue
        }

        val minY = section.getInt("min-y", 0)
        val height = section.getInt("height", 0)
        val logicalHeight = section.getInt("logical-height", height)
        val maxHeight = minY.toLong() + height.toLong()
        val invalidReason =
            when {
              height <= 0 -> "height must be positive"
              minY % 16 != 0 -> "min-y must be a multiple of 16"
              height % 16 != 0 -> "height must be a multiple of 16"
              maxHeight > 2032L -> "min-y + height must be <= 2032 (was $maxHeight)"
              maxHeight < -2032L -> "max height is below Minecraft's supported range"
              minY < -2032 -> "min-y must be >= -2032"
              logicalHeight <= 0 -> "logical-height must be positive"
              logicalHeight > height -> "logical-height must be <= height"
              else -> null
            }
        if (invalidReason != null) {
          errors += "$worldName: $invalidReason"
          logger.warning("[OWG][config] Ignoring $worldName: $invalidReason")
          continue
        }

        val spawnY = section.getInt("spawn-y", minY)
        if (spawnY !in minY until maxHeight.toInt()) {
          errors += "$worldName: spawn-y $spawnY is outside [$minY, $maxHeight)"
          logger.warning(
              "[OWG][config] Ignoring $worldName: spawn-y $spawnY is outside [$minY, $maxHeight)"
          )
          continue
        }

        val gameModeName = section.getString("gamemode", "adventure")!!.uppercase(Locale.ROOT)
        val gameMode = runCatching { GameMode.valueOf(gameModeName) }.getOrNull()
        if (gameMode == null) {
          errors += "$worldName: unknown gamemode '$gameModeName'"
          logger.warning("[OWG][config] Ignoring $worldName: unknown gamemode '$gameModeName'")
          continue
        }

        parsed[worldName] =
            OwgWorldConfig(
                name = worldName,
                generator = generator,
                heightSpec = HeightSpec(minY, height, logicalHeight),
                spawnY = spawnY,
                gameMode = gameMode,
                allowFlight = section.getBoolean("allow-flight", false),
            )
      }

      logger.info(
          "[OWG][config] Loaded ${parsed.size} valid world(s); errors=${errors.size}; " +
              "self-test=${config.getBoolean("self-test", true)}; " +
              "clear-force-loaded-chunks=${config.getBoolean("clear-force-loaded-chunks", false)}"
      )
      return OwgConfig(
          parsed,
          config.getBoolean("self-test", true),
          config.getBoolean("clear-force-loaded-chunks", false),
          configuredNames,
          errors,
      )
    }
  }
}
