package io.oyasai.worldgen

import io.oyasai.worldgen.command.MultiverseCommand
import io.oyasai.worldgen.command.OwgCommand
import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.gen.VoidGenerator
import io.oyasai.worldgen.height.NmsHeightProvider
import io.oyasai.worldgen.portal.PortalCommand
import io.oyasai.worldgen.portal.Portals
import io.oyasai.worldgen.world.NormalWorlds
import io.oyasai.worldgen.world.WorldLifecycle
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import java.util.logging.Level
import org.bukkit.generator.ChunkGenerator
import org.bukkit.plugin.java.JavaPlugin

class OyasaiWorldGenerator : JavaPlugin() {
  @Volatile private var preliminaryConfig = OwgConfig.empty()
  private var generatorReady = false
  private var lifecycle: WorldLifecycle? = null

  override fun onEnable() {
    val multiversePresent =
        server.pluginManager.getPlugin("Multiverse-Core") != null ||
            server.pluginManager.getPlugin("Multiverse-Portals") != null
    if (multiversePresent) {
      logger.warning("[OWG] Multiverse is installed; normal world and portal management disabled")
    }
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

    var normalWorlds: NormalWorlds? = null
    var portals: Portals? = null
    if (!multiversePresent) {
      try {
        normalWorlds = NormalWorlds(this) { lifecycle?.configSnapshot() ?: preliminaryConfig }
        normalWorlds.initialize()
        server.pluginManager.registerEvents(normalWorlds, this)
      } catch (throwable: Throwable) {
        logger.log(Level.SEVERE, "[OWG] Normal world registry failed", throwable)
        normalWorlds = null
      }
      try {
        portals = Portals(this)
        portals.initialize()
        server.pluginManager.registerEvents(portals, this)
      } catch (throwable: Throwable) {
        logger.log(Level.SEVERE, "[OWG] Portal registry failed", throwable)
        portals = null
      }
    }

    try {
      val created = WorldLifecycle(this, NmsHeightProvider(logger), preliminaryConfig, normalWorlds)
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
      if (normalWorlds != null) {
        val mvCommand = MultiverseCommand(normalWorlds, checkNotNull(lifecycle))
        for (name in listOf("mv", "mvtp")) {
          registerCommand(
              name,
              object : BasicCommand {
                override fun execute(source: CommandSourceStack, args: Array<out String>) {
                  mvCommand.execute(source.sender, name, args)
                }

                override fun suggest(
                    source: CommandSourceStack,
                    args: Array<String>,
                ): Collection<String> = mvCommand.suggest(source.sender, name, args)
              },
          )
        }
      }
      if (portals != null) registerCommand("mvp", PortalCommand(portals))
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
        normalized.isEmpty() ||
            normalized.equals("void", ignoreCase = true) ||
            normalized.equals("void-end", ignoreCase = true)
    ) {
      val spawnY =
          lifecycle?.configSnapshot()?.worlds?.get(worldName)?.spawnY
              ?: preliminaryConfig.worlds[worldName]?.spawnY
              ?: 64
      return VoidGenerator(spawnY)
    }
    val reason =
        if (family == "flat") "flat uses vanilla WorldType.FLAT, not an OWG generator id"
        else "unknown generator id"
    logger.severe("[OWG] Refusing generator substitution for world=$worldName id=$id: $reason")
    return null
  }
}
