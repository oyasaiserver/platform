package io.oyasai.oyasaiAdminTools.worldborder

import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerPortalEvent
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.event.world.WorldLoadEvent

object WorldBorderListener : Listener {
  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun onPlayerTeleport(event: PlayerTeleportEvent) {
    if (WorldBorderManager.knockBack == 0.0) return
    val to = event.to
    val worldName = to.world?.name ?: return
    val border = WorldBorderManager.getBorder(worldName) ?: return
    if (border.inside(to.x, to.z, WorldBorderManager.roundBorder)) return

    if (
        event.cause == PlayerTeleportEvent.TeleportCause.ENDER_PEARL &&
            WorldBorderManager.denyEnderpearl
    ) {
      event.isCancelled = true
      return
    }

    val corrected = WorldBorderManager.knockBackIfOutside(event.player, to, notify = true)
    if (corrected != null) event.setTo(corrected)
  }

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun onPlayerPortal(event: PlayerPortalEvent) {
    if (WorldBorderManager.knockBack == 0.0 || !WorldBorderManager.portalRedirection) return
    val to = event.to
    if (to.world == null) return
    val corrected = WorldBorderManager.knockBackIfOutside(event.player, to, notify = false)
    if (corrected != null) event.setTo(corrected)
  }

  @EventHandler
  fun onWorldLoad(event: WorldLoadEvent) {
    WorldBorderManager.applyToWorld(event.world)
  }

  fun showWhoosh(loc: Location) {
    if (!WorldBorderManager.whooshEffect) return
    val world = loc.world ?: return
    world.spawnParticle(Particle.PORTAL, loc, 20, 0.3, 0.6, 0.3, 0.05)
    world.spawnParticle(Particle.SMOKE, loc, 8, 0.2, 0.4, 0.2, 0.01)
    world.playSound(loc, Sound.ENTITY_GHAST_SHOOT, 1f, 1f)
  }
}
