package io.oyasai.worldgen

import io.oyasai.worldgen.command.OwgCommand
import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.gen.VoidGenerator
import io.oyasai.worldgen.height.NmsHeightProvider
import io.oyasai.worldgen.world.WorldLifecycle
import java.util.logging.Level
import org.bukkit.generator.ChunkGenerator
import org.bukkit.plugin.java.JavaPlugin

class OyasaiWorldGenerator : JavaPlugin() {
  @Volatile private var preliminaryConfig = OwgConfig.empty()
  private var generatorReady = false
  private var lifecycle: WorldLifecycle? = null

  override fun onEnable() {
    try {
      generatorReady = true
      logger.info("[OWG] Generator entry point registered")
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG] Generator registration failed", throwable)
    }

    try {
      saveDefaultConfig()
      reloadConfig()
      preliminaryConfig = OwgConfig.load(config, logger)
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG] Configuration loading failed", throwable)
      preliminaryConfig = OwgConfig.empty()
    }

    try {
      val created = WorldLifecycle(this, NmsHeightProvider(logger), preliminaryConfig)
      created.primeDeclarations()
      server.pluginManager.registerEvents(created, this)
      lifecycle = created
      logger.info("[OWG] Lifecycle listeners registered")
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG] Listener registration failed", throwable)
    }

    try {
      val command = OwgCommand(checkNotNull(lifecycle) { "lifecycle is unavailable" })
      val owgCommand = getCommand("owg") ?: error("owg command is missing from plugin.yml")
      owgCommand.setExecutor(command)
      owgCommand.tabCompleter = command
      logger.info("[OWG] Command registered")
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG] Command registration failed", throwable)
    }
  }

  override fun getDefaultWorldGenerator(worldName: String, id: String?): ChunkGenerator? {
    if (!generatorReady) {
      logger.severe(
          "[OWG] Generator requested before registration was ready: world=$worldName id=$id"
      )
      return null
    }
    val normalized = id?.trim().orEmpty()
    val family = if (normalized.isEmpty()) "void" else normalized.substringBefore(':').lowercase()
    if (
        family == "void" && (normalized.isEmpty() || normalized.equals("void", ignoreCase = true))
    ) {
      val spawnY =
          lifecycle?.configSnapshot()?.worlds?.get(worldName)?.spawnY
              ?: preliminaryConfig.worlds[worldName]?.spawnY
              ?: 64
      return VoidGenerator(spawnY)
    }
    val reason =
        if (family == "flat") "flat generator is not implemented" else "unknown generator id"
    logger.severe("[OWG] Refusing generator substitution for world=$worldName id=$id: $reason")
    return null
  }
}
