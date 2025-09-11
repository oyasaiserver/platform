package com.baakun.dynamicprofile.listener

import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.util.Tools.getStats
import com.destroystokyo.paper.event.player.PlayerJumpEvent
import io.papermc.paper.event.player.AsyncChatEvent
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.vehicle.VehicleMoveEvent

object MoveEvent : Listener {
  private fun userStats(player: Player) = getStats(player.uniqueId)

  @EventHandler
  fun jump(e: PlayerJumpEvent) {
    userStats(e.player).addCount(BehType.JUMP)
  }

  @EventHandler
  fun walk(e: PlayerMoveEvent) {
    if (!e.hasChangedPosition()) return
    val stats = userStats(e.player)
    stats.distance += e.from.distance(e.to)
    if (e.player.isFlying) {
      stats.addCount(BehType.FLY)
    } else {
      stats.addCount(BehType.MOVE)
    }
  }

  @EventHandler
  fun block(e: BlockPlaceEvent) {
    userStats(e.player).addCount(BehType.PLACE_BLOCK)
  }

  @EventHandler
  fun vehicle(e: VehicleMoveEvent) {
    val player = e.vehicle.passengers.firstOrNull { it is Player } as? Player ?: return
    val stats = userStats(player)
    stats.distance += e.from.distance(e.to)
    stats.addCount(BehType.VEHICLE)
  }

  @EventHandler
  fun chat(e: AsyncChatEvent) {
    userStats(e.player).addCount(BehType.CHAT)
  }
}
