package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import java.util.concurrent.ThreadLocalRandom
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Particle

/**
 * 再生状態を視覚化する、1秒間隔の音符パーティクル表示。
 *
 * 個人再生は再生している本人の頭上だけに表示する。環境レコードは聴取者へは表示せず、 音源であるジュークボックスの上だけに表示することで、誰が再生しているかを混同させない。
 */
class PlaybackParticleService(private val plugin: OyasaiMusic) {

  fun tick() {
    plugin.controllerStateService.activeStates().forEach { (playerUuid, state) ->
      val player = Bukkit.getPlayer(playerUuid) ?: return@forEach
      val session = state.activeSession ?: return@forEach
      if (!player.isOnline || !state.isPlaying || session.isCancelled || session.isPaused)
          return@forEach
      spawnNote(player.eyeLocation.clone().add(0.0, 0.85, 0.0))
    }
    plugin.ambientPlaybackRegistry.activePlaybackLocations().forEach { location ->
      spawnNote(location.clone().add(0.5, 1.25, 0.5))
    }
  }

  private fun spawnNote(location: Location) {
    location.world?.spawnParticle(
        Particle.NOTE,
        location,
        1,
        ThreadLocalRandom.current().nextDouble(),
        0.0,
        0.0,
        1.0,
    )
  }
}
