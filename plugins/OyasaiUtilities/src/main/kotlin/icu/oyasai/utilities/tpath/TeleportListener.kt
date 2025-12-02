package icu.oyasai.utilities.tpath

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.player.PlayerTeleportEvent

object TeleportListener : Listener {
  @EventHandler
  fun onTeleport(e: PlayerTeleportEvent) {
    val p = e.player
    if (TeleportManager.shouldIgnore(p)) return
    TeleportManager.record(p, e.from)
  }

  @EventHandler
  fun onDeath(e: PlayerDeathEvent) {
    val p = e.entity
    TeleportManager.record(p, p.location)
  }
}
