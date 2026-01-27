package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.gui.GuiManager
import me.marzipan.OyasaiPets.systems.FetchSystem
import me.marzipan.OyasaiPets.systems.PetControlSystem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.inventory.ItemStack
import java.util.UUID

/**
 * PetInteractionListener handles player interactions with pet entities:
 * - Right-clicking on pets (onEntityInteract)
 * - Opening pet GUI
 * - Feeding pets
 * - Using pet brush and treats
 * - Skill unlocking
 * - Particle unlocking
 * - Mounting pets
 */
class PetInteractionListener(
    private val guiManager: GuiManager,
    private val fetchSystem: FetchSystem,
    private val petControlSystem: PetControlSystem,
    private val mountCooldowns: MutableMap<UUID, Long>,
    // Helper method references - these need to be exposed from BigWolfPlugin
    private val checkAndMigrateOwnerFn: (LivingEntity, Player) -> Unit,
    private val isOwnerFn: (LivingEntity, Player) -> Boolean,
    private val isPetFoodFn: (ItemStack) -> Boolean,
    private val giveFoodFn: (Player, LivingEntity) -> Unit,
    private val isPetBrushFn: (ItemStack) -> Boolean,
    private val useBrushFn: (Player, LivingEntity) -> Unit,
    private val isPetTreatFn: (ItemStack) -> Boolean,
    private val giveTreatFn: (Player, LivingEntity) -> Unit,
    private val isPetHealFn: (ItemStack) -> Boolean,
    private val healPetFn: (Player, LivingEntity) -> Unit,
    private val getUnlockItemLevelFn: (ItemStack) -> Int,
    private val handleSkillUnlockFn: (Player, LivingEntity, ItemStack, Int) -> Unit,
    private val isParticleUnlockItemFn: (ItemStack) -> Boolean,
    private val handleParticleUnlockFn: (Player, LivingEntity, ItemStack) -> Unit
) : Listener {

    @EventHandler
    fun onEntityInteract(event: PlayerInteractEntityEvent) {
        val player = event.player
        val entity = event.rightClicked as? LivingEntity ?: return

        checkAndMigrateOwnerFn(entity, player)
        val isOwner = isOwnerFn(entity, player)

        val plainName = entity.customName()?.let {
            PlainTextComponentSerializer.plainText().serialize(it)
        } ?: ""
        if (entity.ownerId == null && !plainName.containsDefaultPetMarker()) return

        event.isCancelled = true


        if (isOwner && isPetFoodFn(player.inventory.itemInMainHand)) {
            giveFoodFn(player, entity)
            return
        }

        // ブラシ
        if (isOwner && isPetBrushFn(player.inventory.itemInMainHand)) {
            useBrushFn(player, entity)
            return
        }

        val mainHand = player.inventory.itemInMainHand

        // おやつ
        if (isOwner && isPetTreatFn(mainHand)) {
            giveTreatFn(player, entity)
            return
        }

        // ヒールアイテム
        if (isOwner && isPetHealFn(mainHand)) {
            healPetFn(player, entity)
            return
        }

        // スキル強化アイテム
        if (isOwner) {
            val unlockLevel = getUnlockItemLevelFn(mainHand)
            if (unlockLevel > 0) {
                handleSkillUnlockFn(player, entity, mainHand, unlockLevel)
                event.isCancelled = true
                return
            }

            // パーティクルアンロックアイテム
            if (isParticleUnlockItemFn(mainHand)) {
                handleParticleUnlockFn(player, entity, mainHand)
                event.isCancelled = true
                return
            }
        }

        if (isOwner) {
            if (player.isSneaking) {
                guiManager.openPetInfoGui(player, entity)
            } else {
                if (player !in entity.passengers) {
                    fetchSystem.stopFetchTask(entity)
                    // Set sitting to false if supported
                    try {
                        val sittable = entity as? org.bukkit.entity.Sittable
                        sittable?.isSitting = false
                    } catch (_: Exception) {
                        // Ignore if Sittable is not available
                    }
                    entity.addPassenger(player)
                    mountCooldowns[player.uniqueId] = System.currentTimeMillis()
                    player.sendMessage(Component.text("運転席に乗りました！(左クリックでスキル)", GREEN))
                    petControlSystem.startControlTask(player, entity)
                }
            }
        } else {
            player.sendMessage(Component.text("このペットには飼い主しか乗れません。", RED))
            return
        }
    }
}
