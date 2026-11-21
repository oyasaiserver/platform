package com.baakun.dynamicprofile.listener

import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.getStats
import com.destroystokyo.paper.event.player.PlayerJumpEvent
import io.papermc.paper.event.player.AsyncChatEvent
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.vehicle.VehicleMoveEvent

object MoveEvent : Listener {
  private fun userStats(player: Player) = getStats(player.uniqueId)

  @EventHandler(ignoreCancelled = true)
  fun jump(e: PlayerJumpEvent) {
    userStats(e.player).addCount(BehType.JUMP)
  }

  @EventHandler(ignoreCancelled = true)
  fun walk(e: PlayerMoveEvent) {
    if (!e.hasChangedPosition()) return
    if (e.from.world != e.to.world) return
    val stats = userStats(e.player)
    stats.distance += e.from.distance(e.to)
    if (e.player.isFlying) {
      stats.addCount(BehType.FLY)
    } else {
      stats.addCount(BehType.MOVE)
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun block(e: BlockPlaceEvent) {
    userStats(e.player).addCount(BehType.PLACE_BLOCK)
  }

  @EventHandler(ignoreCancelled = true)
  fun vehicle(e: VehicleMoveEvent) {
    if (e.from.world != e.to.world) return
    val player = e.vehicle.passengers.firstOrNull { it is Player } as? Player ?: return
    val stats = userStats(player)
    stats.distance += e.from.distance(e.to)
    stats.addCount(BehType.VEHICLE)
  }

  @EventHandler(ignoreCancelled = true)
  fun chat(e: AsyncChatEvent) {
    val player = e.player
    val server = runCatching { Bukkit.getServer() }.getOrNull()
    val scheduler = runCatching { server?.scheduler }.getOrNull()
    val pluginInstance = runCatching { Tools.plugin }.getOrNull()
    if (server != null && !server.isPrimaryThread && scheduler != null && pluginInstance != null) {
      scheduler.runTask(pluginInstance, Runnable { userStats(player).addCount(BehType.CHAT) })
    } else {
      userStats(player).addCount(BehType.CHAT)
    }
  }
}
