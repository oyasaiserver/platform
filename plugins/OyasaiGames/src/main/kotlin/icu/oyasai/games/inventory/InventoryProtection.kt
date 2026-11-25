package icu.oyasai.games.inventory

import icu.oyasai.utilities.api.MinigameInventoryProtection
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.entity.Player

/** Utilities is optional; when installed its protection must be available. */
internal object InventoryProtection {
  private fun service(): MinigameInventoryProtection? {
    val utilities = Bukkit.getPluginManager().getPlugin("OyasaiUtilities") ?: return null
    check(utilities.isEnabled) { "OyasaiUtilities inventory protection is unavailable" }
    return Bukkit.getServicesManager().load(MinigameInventoryProtection::class.java)
        ?: error("OyasaiUtilities inventory protection service is unavailable; update Utilities")
  }

  fun checkAvailable(id: UUID, module: String) {
    service()?.checkAvailable(id, "oyasaigames:$module")
  }

  fun acquire(id: UUID, module: String) {
    service()?.acquire(id, "oyasaigames:$module")
  }

  fun release(player: Player, module: String) {
    service()?.release(player, "oyasaigames:$module")
  }
}
