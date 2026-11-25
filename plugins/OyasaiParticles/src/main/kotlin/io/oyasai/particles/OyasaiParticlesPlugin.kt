package io.oyasai.particles

import io.oyasai.particles.command.OpartCommand
import io.oyasai.particles.engine.AreaVisualizer
import io.oyasai.particles.engine.ParticleRenderEngine
import io.oyasai.particles.gui.AreaGuiManager
import io.oyasai.particles.integration.WorldGuardHook
import io.oyasai.particles.item.ParticleItemFactory
import io.oyasai.particles.listener.GuiListener
import io.oyasai.particles.listener.ItemProtectionListener
import io.oyasai.particles.listener.PlayerStateListener
import io.oyasai.particles.listener.WandAndItemUseListener
import io.oyasai.particles.selection.AreaLimitValidator
import io.oyasai.particles.selection.AreaLimitsConfig
import io.oyasai.particles.selection.SelectionManager
import io.oyasai.particles.service.AreaService
import io.oyasai.particles.storage.YamlAreaRepository
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask

class OyasaiParticlesPlugin : JavaPlugin() {
  private lateinit var worldGuardHook: WorldGuardHook
  private lateinit var areaService: AreaService
  private lateinit var renderEngine: ParticleRenderEngine
  private var renderTask: BukkitTask? = null
  private var visualizeTask: BukkitTask? = null

  override fun onLoad() {
    worldGuardHook = WorldGuardHook(this)
    worldGuardHook.registerFlag()
  }

  override fun onEnable() {
    saveDefaultConfig()

    val maxHistory = config.getInt("history.max-entries", 500).coerceAtLeast(1)
    val repository = YamlAreaRepository(dataFolder, logger)
    areaService = AreaService(repository, maxHistory)
    areaService.load()

    val limits = AreaLimitsConfig.fromConfig(config)
    val selectionManager = SelectionManager()
    val limitValidator = AreaLimitValidator(limits, areaService, worldGuardHook)
    val itemFactory = ParticleItemFactory(this)

    renderEngine = ParticleRenderEngine(areaService, worldGuardHook, config)
    val visualizer = AreaVisualizer(areaService, selectionManager, itemFactory, config)
    val guiManager = AreaGuiManager(areaService, itemFactory, selectionManager, limitValidator)

    val pm = server.pluginManager
    pm.registerEvents(ItemProtectionListener(itemFactory), this)
    pm.registerEvents(
        WandAndItemUseListener(itemFactory, selectionManager, areaService, limitValidator),
        this,
    )
    pm.registerEvents(PlayerStateListener(renderEngine, visualizer, selectionManager), this)
    pm.registerEvents(GuiListener(guiManager), this)

    val command =
        OpartCommand(
            areaService = areaService,
            selectionManager = selectionManager,
            limitValidator = limitValidator,
            itemFactory = itemFactory,
            renderEngine = renderEngine,
            visualizer = visualizer,
            guiManager = guiManager,
        )
    getCommand("oyasaiparticles")?.let { cmd ->
      cmd.setExecutor(command)
      cmd.tabCompleter = command
    }

    renderTask =
        server.scheduler.runTaskTimer(
            this,
            Runnable { renderEngine.tick() },
            renderEngine.tickInterval,
            renderEngine.tickInterval,
        )
    visualizeTask =
        server.scheduler.runTaskTimer(
            this,
            Runnable { visualizer.tick() },
            visualizer.tickInterval,
            visualizer.tickInterval,
        )

    logger.info("OyasaiParticles を有効化しました (登録エリア数: ${areaService.allAreas().size})")
  }

  override fun onDisable() {
    renderTask?.cancel()
    visualizeTask?.cancel()
    if (::renderEngine.isInitialized) {
      renderEngine.resetAllOnlinePlayers()
    }
    if (::areaService.isInitialized) {
      areaService.saveAll()
    }
  }
}
