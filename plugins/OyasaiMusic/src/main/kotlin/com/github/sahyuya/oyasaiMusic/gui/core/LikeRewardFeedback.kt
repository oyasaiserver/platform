package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
import com.github.sahyuya.oyasaiMusic.db.EconomyJournal
import org.bukkit.Bukkit
import org.bukkit.entity.Player

internal fun OyasaiMusic.deliverLikeSenderReward(player: Player, reward: EconomyJournal.Entry?) {
  soundEffectService.play(PluginSoundEffect.LIKE_SENT, listOf(player))
  if (reward == null) return
  musicTransactions.payLikeReward(reward).whenComplete { message, error ->
    if (!isEnabled) return@whenComplete
    Bukkit.getScheduler()
        .runTask(
            this,
            Runnable {
              if (player.isOnline)
                  player.sendMessage(message ?: (error.cause ?: error).message.orEmpty())
            },
        )
  }
}
