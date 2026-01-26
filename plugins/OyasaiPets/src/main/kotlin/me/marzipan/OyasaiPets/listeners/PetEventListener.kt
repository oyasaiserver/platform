package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.BigWolfPlugin
import me.marzipan.OyasaiPets.domain.PetCategory
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.ownerId
import org.bukkit.entity.LivingEntity
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.entity.EntityTeleportEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import java.util.UUID

/**
 * PetEventListener handles basic pet-related events:
 * - PlayerDropItem: Tracks drop cooldowns
 * - EntityTeleport: Prevents teleporting during fetch tasks
 * - EntityDismount: Handles flying pet descent after dismount
 */
class PetEventListener(
    private val plugin: BigWolfPlugin,
    private val dropCooldowns: MutableMap<UUID, Long>,
    private val activeFetchTasks: MutableMap<UUID, BukkitTask>
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

    @EventHandler
    fun onEntityDismount(event: EntityDismountEvent) {
        val entity = event.dismounted as? LivingEntity ?: return
        if (entity.ownerId == null) return

        val spec = PetRegistry.get(entity.type)
        if (spec.category == PetCategory.FLYING) {
            object : BukkitRunnable() {
                override fun run() {
                    if (!entity.isValid || entity.isDead || !entity.passengers.isEmpty()) {
                        cancel()
                        return
                    }
                    if (entity.isOnGround) {
                        cancel()
                        return
                    }
                    val vel = entity.velocity
                    vel.y = -0.2
                    entity.velocity = vel
                }
            }.runTaskTimer(plugin, 0L, 1L)
        }
    }
}
