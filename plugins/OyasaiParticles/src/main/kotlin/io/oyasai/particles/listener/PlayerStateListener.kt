package io.oyasai.particles.listener

import io.oyasai.particles.engine.AreaVisualizer
import io.oyasai.particles.engine.ParticleRenderEngine
import io.oyasai.particles.selection.SelectionManager
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerQuitEvent

class PlayerStateListener(
    private val renderEngine: ParticleRenderEngine,
    private val visualizer: AreaVisualizer,
    private val selectionManager: SelectionManager,
) : Listener {

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val player = event.player
    renderEngine.releasePlayer(player)
    visualizer.releasePlayer(player.uniqueId)
    selectionManager.clear(player.uniqueId)
  }

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    val player = event.player
    renderEngine.resetPlayerState(player)
    selectionManager.clear(player.uniqueId)
  }
}
