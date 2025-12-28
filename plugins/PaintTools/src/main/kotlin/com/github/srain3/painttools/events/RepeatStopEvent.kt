package com.github.srain3.painttools.events

import org.bukkit.event.player.PlayerInteractEvent

/** イベントを作成 */
class RepeatStopEvent(event: PlayerInteractEvent) :
    PlayerInteractEvent(
        event.player,
        event.action,
        event.item,
        event.clickedBlock,
        event.blockFace,
        event.hand,
    ) {
  override fun setCancelled(cancel: Boolean) {}
}
