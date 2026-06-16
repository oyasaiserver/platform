package icu.oyasai.utilities.debugonbe

import icu.oyasai.utilities.debugonbe.command.DebugOnBeCommand
import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.display.ArmorStandSpawner
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.display.PacketBlockHider
import icu.oyasai.utilities.debugonbe.listener.BlockListener
import org.bukkit.plugin.Plugin

object DebugOnBE {

  lateinit var store: PlacementDataStore
  lateinit var displayManager: BlockDisplayManager

  fun onEnable(plugin: Plugin) {
    plugin.dataFolder.mkdirs()

    store = PlacementDataStore(plugin)
    store.loadAll()

    val hider = PacketBlockHider(plugin)
    displayManager =
        BlockDisplayManager(
            plugin = plugin,
            store = store,
            spawner = ArmorStandSpawner,
            hider = hider,
        )

    val dobeCommand = DebugOnBeCommand(displayManager, store)
    plugin.getServer().getPluginCommand("debugonbe")?.let {
      it.setExecutor(dobeCommand)
      it.tabCompleter = dobeCommand
    }
    plugin.getServer().getPluginCommand("togo")?.let {
      it.setExecutor(dobeCommand)
      it.tabCompleter = dobeCommand
    }
    plugin.getServer().getPluginCommand("togom")?.let {
      it.setExecutor(dobeCommand)
      it.tabCompleter = dobeCommand
    }

    plugin.server.pluginManager.registerEvents(BlockListener(displayManager), plugin)
  }

  fun onDisable() {
    if (::displayManager.isInitialized) {
      displayManager.removeAll()
    }
  }
}
