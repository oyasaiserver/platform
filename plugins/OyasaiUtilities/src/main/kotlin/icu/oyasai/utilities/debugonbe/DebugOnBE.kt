package icu.oyasai.utilities.debugonbe

import icu.oyasai.utilities.debugonbe.command.DebugOnBeCommand
import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.data.TogoSettingsStore
import icu.oyasai.utilities.debugonbe.display.ArmorStandSpawner
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.display.PacketBlockHider
import icu.oyasai.utilities.debugonbe.gui.TogoGui
import icu.oyasai.utilities.debugonbe.listener.BlockListener
import icu.oyasai.utilities.debugonbe.listener.TogoAutoItemListener
import org.bukkit.plugin.Plugin

object DebugOnBE {

  lateinit var store: PlacementDataStore
  lateinit var settingsStore: TogoSettingsStore
  lateinit var displayManager: BlockDisplayManager
  lateinit var togoGui: TogoGui

  fun onEnable(plugin: Plugin) {
    plugin.dataFolder.mkdirs()

    store = PlacementDataStore(plugin)
    store.loadAll()
    settingsStore = TogoSettingsStore(plugin)

    val hider = PacketBlockHider(plugin)
    displayManager =
        BlockDisplayManager(
            plugin = plugin,
            store = store,
            spawner = ArmorStandSpawner,
            hider = hider,
            settingsStore = settingsStore,
        )

    togoGui = TogoGui(plugin, displayManager, store)
    plugin.server.pluginManager.registerEvents(togoGui, plugin)
    val autoItemListener = TogoAutoItemListener(plugin, displayManager)
    plugin.server.pluginManager.registerEvents(autoItemListener, plugin)
    autoItemListener.syncOnlinePlayers()

    val dobeCommand = DebugOnBeCommand(displayManager, store, togoGui)
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
    if (::togoGui.isInitialized) {
      togoGui.closeAll()
    }
    if (::displayManager.isInitialized) {
      displayManager.removeAll()
    }
    if (::settingsStore.isInitialized) {
      settingsStore.save()
    }
  }
}
