package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.SocialVotes
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerSignOpenEvent

class ProtectEditListener : Listener {

    @EventHandler
    fun onSignEdit(e: PlayerSignOpenEvent) {

        // SV看板かどうかを判定
        val loc = e.sign.location
        val sv = SocialVotes.dataManager.locationToId[loc]
        if (sv != null) {
            // 編集画面を開かせない
            e.isCancelled = true
        }
    }
}
