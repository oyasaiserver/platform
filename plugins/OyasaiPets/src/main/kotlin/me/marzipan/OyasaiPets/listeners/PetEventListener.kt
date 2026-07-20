@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityTeleportEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.inventory.*
import org.bukkit.scheduler.BukkitTask

/**
 * PetEventListener handles basic pet-related events:
 * - PlayerDropItem: Tracks drop cooldowns
 * - EntityTeleport: Prevents teleporting during fetch tasks
 * - EntityDismount: Handles flying pet descent after dismount
 */
class PetEventListener(
    private val dropCooldowns: MutableMap<UUID, Long>,
    private val activeFetchTasks: MutableMap<UUID, BukkitTask>,
) : Listener {

  @EventHandler
  fun onPlayerDropItem(event: PlayerDropItemEvent) {
    dropCooldowns[event.player.uniqueId] = System.currentTimeMillis()
  }

  @EventHandler
  fun onEntityTeleport(event: EntityTeleportEvent) {
    if (activeFetchTasks.containsKey(event.entity.uniqueId)) {
      event.isCancelled = true
    }
  }
}
