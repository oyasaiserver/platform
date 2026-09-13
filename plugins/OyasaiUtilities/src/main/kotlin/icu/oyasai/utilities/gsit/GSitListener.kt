package icu.oyasai.utilities.gsit

import org.bukkit.GameMode
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.entity.EntityRemoveEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerGameModeChangeEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.event.player.PlayerToggleSneakEvent
import org.bukkit.event.world.ChunkLoadEvent
import org.bukkit.event.world.ChunkUnloadEvent
import org.bukkit.inventory.EquipmentSlot

object GSitListener : Listener {
  @EventHandler(ignoreCancelled = true)
  fun onInteract(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_BLOCK) return
    if (event.hand != EquipmentSlot.HAND) return
    val block = event.clickedBlock ?: return
    val player = event.player
    if (!GSitFeature.isValidSitBlock(block)) return
    if (GSitConfig.emptyHandOnly && !player.inventory.itemInMainHand.type.isAir) return
    if (GSitFeature.startSitOn(player, block)) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onDismount(event: EntityDismountEvent) {
    val player = event.entity as? Player ?: return
    if (!GSitFeature.isSeat(event.dismounted)) return
    if (GSitFeature.isReleasing(player)) return
    if (!GSitConfig.getUpSneak) {
      event.isCancelled = true
      return
    }
    GSitFeature.stop(player)
  }

  @EventHandler(ignoreCancelled = true)
  fun onSneak(event: PlayerToggleSneakEvent) {
    if (!event.isSneaking || !GSitConfig.getUpSneak) return
    val session = GSitFeature.sessionOf(event.player) ?: return
    if (session.mode.usesSeatEntity) return
    GSitFeature.stop(event.player)
  }

  @EventHandler(ignoreCancelled = true)
  fun onMove(event: PlayerMoveEvent) {
    val to = event.to
    val frozen = GSitFeature.freezeIfNeeded(event.player, event.from, to) ?: return
    event.to = frozen
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onTeleport(event: PlayerTeleportEvent) {
    if (GSitFeature.isReleasing(event.player)) return
    if (!GSitFeature.isBusy(event.player)) return
    GSitFeature.stop(event.player, silent = true)
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    GSitFeature.stop(event.player, silent = true)
  }

  @EventHandler
  fun onDeath(event: PlayerDeathEvent) {
    GSitFeature.stop(event.player, silent = true)
  }

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    GSitFeature.stop(event.player, silent = true)
  }

  @EventHandler(ignoreCancelled = true)
  fun onGameMode(event: PlayerGameModeChangeEvent) {
    if (event.newGameMode != GameMode.SPECTATOR) return
    GSitFeature.stop(event.player, silent = true)
  }

  @EventHandler(ignoreCancelled = true)
  fun onBlockBreak(event: BlockBreakEvent) {
    GSitFeature.stopIfSeatBlock(event.block)
  }

  @EventHandler
  fun onChunkUnload(event: ChunkUnloadEvent) {
    GSitFeature.unloadSeatsInChunk(
        event.chunk.entities,
        event.world.uid,
        event.chunk.x,
        event.chunk.z,
    )
  }

  @EventHandler
  fun onChunkLoad(event: ChunkLoadEvent) {
    GSitFeature.removeOrphanSeats(event.chunk.entities)
  }

  @EventHandler
  fun onEntityRemove(event: EntityRemoveEvent) {
    if (!GSitFeature.isSeat(event.entity)) return
    val passengers = event.entity.passengers.filterIsInstance<Player>()
    passengers.forEach { player ->
      if (!GSitFeature.isReleasing(player)) GSitFeature.stop(player, silent = true)
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onCommand(event: PlayerCommandPreprocessEvent) {
    if (!GSitFeature.isBusy(event.player)) return
    if (!GSitFeature.isBlacklistedCommand(event.message)) return
    event.isCancelled = true
    event.player.sendMessage("§c座っている間は /skin と /nick は使えません。")
  }
}
