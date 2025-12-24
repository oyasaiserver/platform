package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.util.SignDisplayUtil
import org.bukkit.Bukkit
import org.bukkit.block.Sign
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.SignChangeEvent

class SignCreateListener : Listener {

    @EventHandler
    fun onSignCreate(e: SignChangeEvent) {
        val line0 = e.getLine(0) ?: return
        if (!line0.equals("vote", ignoreCase = true)) return

        val signName = e.getLine(1) ?: "SVSign"
        val creatorUuid = e.player.uniqueId
        val loc = e.block.location
        val dm = SocialVotes.dataManager

        val sv = dm.registerSign(loc, signName, creatorUuid)

        // 1tick後に確実にstateを更新
        Bukkit.getScheduler().runTask(SocialVotes.instance, Runnable {
            val state = loc.block.state
            if (state is Sign) {

                // 表示を更新
                SignDisplayUtil.applyFormat(state, sv)
                state.update(true, false)
            }
        })

        e.player.sendMessage("SV看板を登録しました (ID:${sv.id})")
    }
}
