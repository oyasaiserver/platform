package icu.oyasai.utilities.tpath

import java.util.*
import org.bukkit.Location
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent

object TPath {
  val TPData: MutableMap<UUID, TPStatus> = mutableMapOf()

  fun teleportPlayer(player: Player, tpStatus: TPStatus, newIndex: Int) {
    // 履歴を遡った中でまた移動し、再度履歴移動をした際、現在位置を履歴の中に挿入する
    val targetLocation = tpStatus.locations[newIndex]
    player.teleport(targetLocation, PlayerTeleportEvent.TeleportCause.PLUGIN)
    tpStatus.index = newIndex
  }

  // 向きを無視した座標比較
  fun areLocationsNotEqual(loc1: Location, loc2: Location): Boolean {
    return loc1.getWorld() != loc2.getWorld() ||
      loc1.x != loc2.x ||
      loc1.y != loc2.y ||
      loc1.z != loc2.z
  }
}
