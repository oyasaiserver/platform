package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import org.bukkit.Bukkit
import org.bukkit.entity.Player

object SongPromotionService {
  fun promote(plugin: OyasaiMusic, viewer: Player, songId: Long, recordIdentity: String) {
    plugin.musicTransactions.advertise(viewer, songId, recordIdentity).whenComplete { message, error
      ->
      if (!plugin.isEnabled) return@whenComplete
      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                if (viewer.isOnline)
                    viewer.sendMessage(message ?: (error.cause ?: error).message.orEmpty())
              },
          )
    }
  }
}
