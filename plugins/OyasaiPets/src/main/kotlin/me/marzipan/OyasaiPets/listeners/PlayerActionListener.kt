package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.ToyType
import me.marzipan.OyasaiPets.systems.FetchSystem
import me.marzipan.OyasaiPets.systems.SkillSystem
import org.bukkit.Location
import org.bukkit.block.BlockFace
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import java.util.UUID

/**
 * PlayerActionListener handles player actions:
 * - onPlayerInteract: Right-click with items (toys, stored pets)
 * - onPlayerFish: Fishing rod toy interactions
 * - onPlayerSkillTrigger: Left-click to activate pet skills
 */
class PlayerActionListener(
    @Suppress("unused") private val plugin: BigWolfPlugin,
    private val fetchSystem: FetchSystem,
    @Suppress("unused") private val petSpawnSystem: me.marzipan.OyasaiPets.systems.PetSpawnSystem,
    private val skillSystem: SkillSystem,
    private val dropCooldowns: MutableMap<UUID, Long>,
    private val mountCooldowns: MutableMap<UUID, Long>,
    // Helper method references
    private val isOwnerFn: (LivingEntity, Player) -> Boolean,
    private val restorePetFromItemFn: (Player, ItemStack, Location) -> Unit
) : Listener {

    @EventHandler
    fun onPlayerInteract(event: PlayerInteractEvent) {
        val item = event.item ?: return
        val player = event.player

        if (event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK) {
            val toySpec = PetRegistry.findSpecByToy(item)

            if (toySpec != null && toySpec.toyType == ToyType.THROW_FETCH) {
                event.isCancelled = true
                fetchSystem.handleThrowToy(player, item, toySpec)
                return
            }

            if (toySpec != null && toySpec.toyType == ToyType.BALLOON_JUMP) {
                event.isCancelled = true
                fetchSystem.handleBalloonJump(player, item, toySpec)
                return
            }
        }

        if ((event.action == Action.RIGHT_CLICK_BLOCK || event.action == Action.RIGHT_CLICK_AIR) &&
            event.hand == EquipmentSlot.HAND) {
            val meta = item.itemMeta ?: return
            if (meta.persistentDataContainer.has(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE)) {
                event.isCancelled = true
                val clicked = event.clickedBlock
                val spawnLoc =
                    if (clicked != null) {
                        when (event.blockFace) {
                            BlockFace.UP -> clicked.location.add(0.5, 1.0, 0.5)
                            BlockFace.DOWN -> clicked.location.add(0.5, -1.0, 0.5)
                            else -> clicked.getRelative(event.blockFace).location.add(0.5, 0.0, 0.5)
                        }
                    } else {
                        val eye = player.eyeLocation
                        val dir = eye.direction.clone().normalize().multiply(1.5)
                        eye.add(dir)
                        eye
                    }
                restorePetFromItemFn(player, item, spawnLoc)
            }
        }
    }

    @EventHandler
    fun onPlayerFish(event: PlayerFishEvent) {
        val player = event.player
        val item = player.inventory.itemInMainHand

        val toySpec = PetRegistry.findSpecByToy(item) ?: return
        if (toySpec.toyType != ToyType.FISHING_ROD) return

        if (event.state == PlayerFishEvent.State.FISHING) {
            fetchSystem.handleFishingToy(player, toySpec)
        }
    }

    @EventHandler
    fun onPlayerSkillTrigger(event: PlayerInteractEvent) {
        if (event.action != Action.LEFT_CLICK_AIR && event.action != Action.LEFT_CLICK_BLOCK) return
        if (event.hand != EquipmentSlot.HAND) return

        val player = event.player
        val vehicle = player.vehicle as? LivingEntity ?: return

        if (!isOwnerFn(vehicle, player)) return

        val now = System.currentTimeMillis()
        if (now - dropCooldowns.getOrDefault(player.uniqueId, 0L) < 500) return
        if (now - mountCooldowns.getOrDefault(player.uniqueId, 0L) < 1000) return

        // SkillSystemに委譲
        skillSystem.tryActivateSkill(player, vehicle)
    }
}
