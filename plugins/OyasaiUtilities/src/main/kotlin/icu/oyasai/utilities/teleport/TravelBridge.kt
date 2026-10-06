package icu.oyasai.utilities.teleport

import java.util.UUID
import org.bukkit.entity.Player

/** Optional coexistence adapter. Travel and jail policy never depend on Essentials. */
interface TravelBridge {
  fun clearJail(player: Player) {}

  fun offlineExempt(id: UUID): Boolean = false
}
