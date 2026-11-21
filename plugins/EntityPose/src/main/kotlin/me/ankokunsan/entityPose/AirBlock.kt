package me.ankokunsan.entityPose

import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Block
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.block.BlockCanBuildEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.metadata.FixedMetadataValue
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

object AirBlock {
  private val glowingTarget = mutableMapOf<UUID, Entity>()
  private val glowingTasks = mutableMapOf<UUID, BukkitTask>()
  private val enabledPlayers = mutableSetOf<UUID>()
  private val activeScaffolds = mutableMapOf<UUID, MutableList<Pair<Block, BukkitTask>>>()

  fun setStatus(player: Player, status: Boolean) {
    if (status) {
      enabledPlayers.add(player.uniqueId)
    } else {
      enabledPlayers.remove(player.uniqueId)
    }
  }

  fun isEnabled(player: Player): Boolean = enabledPlayers.contains(player.uniqueId)

  private fun isSpawnProtected(player: Player, block: Block): Boolean {
    val server = Bukkit.getServer()
    if (player.isOp || server.operators.isEmpty() || block.world != server.worlds.firstOrNull()) {
      return false
    }
    val spawn = block.world.spawnLocation
    val radius = server.spawnRadius
    return radius > 0 &&
        kotlin.math.max(
            kotlin.math.abs(block.x - spawn.blockX),
            kotlin.math.abs(block.z - spawn.blockZ),
        ) <= radius
  }

  private fun removeScaffoldBlock(block: Block, player: Player?) {
    if (block.hasMetadata("EntityHojo")) {
      if (block.type == Material.GLASS) {
        block.type = Material.AIR
      }
      block.removeMetadata("EntityHojo", EntityPose.INSTANCE)
      if (player != null && player.isOnline && player.world == block.world) {
        player.sendBlockChange(block.location, Material.AIR.createBlockData())
      }
    }
  }

  fun airblockplace(player: Player) {
    if (!isEnabled(player)) return
    val block = player.location.subtract(0.0, 1.0, 0.0).block
    val world = block.world

    if (block.y !in world.minHeight until world.maxHeight) return
    if (!world.worldBorder.isInside(block.location.add(0.5, 0.5, 0.5))) return
    if (isSpawnProtected(player, block)) return
    if (block.type != Material.AIR) return

    val nearby = world.getNearbyEntities(block.location.add(0.5, 0.5, 0.5), 0.5, 0.5, 0.5)
    if (nearby.any { it != player }) return

    val previousState = block.state
    val canBuildEvent =
        BlockCanBuildEvent(
            block,
            player,
            Material.GLASS.createBlockData(),
            true,
            EquipmentSlot.HAND,
        )
    Bukkit.getPluginManager().callEvent(canBuildEvent)
    if (!canBuildEvent.isBuildable) return

    // 足場を設置し、保護プラグイン（WorldGuard等）の判定を通す
    block.setType(Material.GLASS, false)
    val placeEvent =
        BlockPlaceEvent(
            block,
            previousState,
            block,
            ItemStack(Material.GLASS),
            player,
            true,
            EquipmentSlot.HAND,
        )
    Bukkit.getPluginManager().callEvent(placeEvent)
    if (placeEvent.isCancelled || !placeEvent.canBuild()) {
      previousState.update(true, false)
      return
    }

    block.setMetadata("EntityHojo", FixedMetadataValue(EntityPose.INSTANCE, true))
    val centerLoc = block.location.add(0.5, 0.0, 0.5)
    centerLoc.world?.playSound(centerLoc, Sound.ENTITY_CHICKEN_EGG, 1.0f, 2.0f)

    val uuid = player.uniqueId
    val task =
        object : BukkitRunnable() {
              override fun run() {
                if (!player.isOnline || player.world != centerLoc.world) {
                  cleanupEntry()
                  centerLoc.world?.playSound(centerLoc, Sound.BLOCK_GLASS_BREAK, 2.0f, 1.0f)
                  return
                }
                val pLoc = player.location
                val dx = pLoc.x - centerLoc.x
                val dz = pLoc.z - centerLoc.z
                if (dx * dx + dz * dz >= 1.1 * 1.1 || !block.hasMetadata("EntityHojo")) {
                  cleanupEntry()
                  centerLoc.world?.playSound(centerLoc, Sound.BLOCK_GLASS_BREAK, 2.0f, 1.0f)
                  return
                }
              }

              private fun cleanupEntry() {
                removeScaffoldBlock(block, player)
                activeScaffolds[uuid]?.removeIf { it.first == block }
                if (activeScaffolds[uuid]?.isEmpty() == true) {
                  activeScaffolds.remove(uuid)
                }
                cancel()
              }
            }
            .runTaskTimer(EntityPose.INSTANCE, 0L, 20L)
    if (!task.isCancelled) {
      activeScaffolds.getOrPut(uuid) { mutableListOf() }.add(block to task)
    }
  }

  fun stopGlowing(uuid: UUID) {
    glowingTasks.remove(uuid)?.cancel()
    glowingTarget.remove(uuid)?.isGlowing = false
  }

  fun cleanup(uuid: UUID) {
    enabledPlayers.remove(uuid)
    stopGlowing(uuid)
    activeScaffolds.remove(uuid)?.forEach { (block, task) ->
      task.cancel()
      removeScaffoldBlock(block, Bukkit.getPlayer(uuid))
    }
  }

  fun cleanupAll() {
    val allUuids =
        (enabledPlayers + glowingTasks.keys + glowingTarget.keys + activeScaffolds.keys).toSet()
    allUuids.forEach { cleanup(it) }
  }

  fun startglowing(player: Player) {
    val uuid = player.uniqueId
    stopGlowing(uuid)
    val task =
        object : BukkitRunnable() {
              override fun run() {
                if (
                    !player.isOnline ||
                        !player.isValid ||
                        !player.hasPermission("entitypose_arrange")
                ) {
                  stopGlowing(uuid)
                  cancel()
                  return
                }
                val hand = player.inventory.itemInMainHand
                if (!isEntiStick(hand) && !isCopyWand(hand)) {
                  stopGlowing(uuid)
                  cancel()
                  return
                }
                val result =
                    player.world.rayTraceEntities(
                        player.eyeLocation,
                        player.location.direction,
                        5.0,
                        0.1,
                    ) {
                      it is LivingEntity && it !is Player
                    }
                val newtarget = result?.hitEntity
                val lastTarget = glowingTarget[uuid]
                if (newtarget != lastTarget) {
                  lastTarget?.isGlowing = false
                  newtarget?.isGlowing = true
                  if (newtarget != null) {
                    glowingTarget[uuid] = newtarget
                  } else glowingTarget.remove(uuid)
                }
              }
            }
            .runTaskTimer(EntityPose.INSTANCE, 0L, 2L)
    glowingTasks[uuid] = task
  }
}
