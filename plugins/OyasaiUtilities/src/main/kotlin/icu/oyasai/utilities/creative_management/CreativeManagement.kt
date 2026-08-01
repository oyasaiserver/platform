package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.OyasaiUtilities

object CreativeManagement {
  fun onEnable() {
    val server = OyasaiUtilities.plugin.server
    server.pluginManager.registerEvents(GetEvent, OyasaiUtilities.plugin)
    server.pluginManager.registerEvents(InventoryEvent, OyasaiUtilities.plugin)
    server.pluginManager.registerEvents(CreativeBlockStore, OyasaiUtilities.plugin)
  }

  fun onDisable() {
    CreativeBlockStore.clearCache()
  }
}
