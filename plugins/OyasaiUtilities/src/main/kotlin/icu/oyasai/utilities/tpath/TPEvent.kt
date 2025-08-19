package icu.oyasai.utilities.tpath

import icu.oyasai.utilities.tpath.TPath.TPData
import icu.oyasai.utilities.tpath.TPath.areLocationsNotEqual
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerTeleportEvent

object TPEvent : Listener {
  @EventHandler
  fun onTeleport(e: PlayerTeleportEvent) {
    if (e.cause == PlayerTeleportEvent.TeleportCause.PLUGIN) return
    val tpStatus: TPStatus = TPData.getOrPut(e.player.uniqueId) { TPStatus() }
    val toLoc = e.to
    // 履歴を遡った中でTPした際、それ以降の履歴を切り捨てる
    if (tpStatus.index < tpStatus.locations.size - 1) {
      tpStatus.locations = ArrayList(tpStatus.locations.subList(0, tpStatus.index + 1))
    }

    // TP元も履歴に追加する。（初TPの場合、直前のTPから移動していた場合）
    if (tpStatus.locations.isEmpty() || areLocationsNotEqual(tpStatus.locations.last(), e.from)) {
      tpStatus.locations.add(e.from)
    }
    tpStatus.locations.add(toLoc)
    tpStatus.index = tpStatus.locations.size - 1
  }
}
