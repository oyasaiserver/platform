package icu.oyasai.utilities.timerbar

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

object TimerBarEvent : Listener {
  @EventHandler
  fun joinEvent(e: PlayerJoinEvent) {
    if (!TimerBar.isTimerObject()) return
    TimerBar.addPlayerToBossBar(e.player)
  }

  @EventHandler
  fun quitEvent(e: PlayerQuitEvent) {
    if (!TimerBar.isTimerObject()) return
    TimerBar.removePlayerToBossBar(e.player)
  }
}
