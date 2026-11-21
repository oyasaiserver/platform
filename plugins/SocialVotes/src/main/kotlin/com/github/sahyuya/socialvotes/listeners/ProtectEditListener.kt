package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.SocialVotes
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerSignOpenEvent

class ProtectEditListener : Listener {

  @EventHandler
  fun onSignEdit(e: PlayerSignOpenEvent) {

    // SV看板かどうかを判定
    val dm = SocialVotes.dataManager
    val loc = e.sign.location
    val sv = dm.getSignAt(loc)
    val signId = dm.readSignIdFromBlock(e.sign)
    if (sv != null || (signId != null && dm.signById.containsKey(signId))) {
      // 編集画面を開かせない
      e.isCancelled = true
    }
  }
}
