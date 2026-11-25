package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.api.MinigameInventoryProtection
import java.io.File
import org.bukkit.plugin.ServicePriority

object CreativeManagement {
  private var zombies: ZombiesCompatibility? = null

  fun onEnable() {
    val plugin = OyasaiUtilities.plugin
    val server = plugin.server
    val protection =
        MinigameProtection(File(plugin.dataFolder, "CreativeManagement/minigames/holds"))
    InventoryEvent.protection = protection
    server.servicesManager.register(
        MinigameInventoryProtection::class.java,
        protection,
        plugin,
        ServicePriority.Normal,
    )
    zombies = ZombiesCompatibility(plugin, protection).also { it.enable() }
    server.pluginManager.registerEvents(GetEvent, OyasaiUtilities.plugin)
    server.pluginManager.registerEvents(InventoryEvent, OyasaiUtilities.plugin)
    server.pluginManager.registerEvents(CreativeBlockStore, OyasaiUtilities.plugin)
  }

  fun onDisable() {
    zombies?.disable()
    zombies = null
    OyasaiUtilities.plugin.server.servicesManager.unregisterAll(OyasaiUtilities.plugin)
    CreativeBlockStore.clearCache()
    InventoryEvent.clearCache()
  }
}
