package me.realized.tokenmanager.api.event

import org.bukkit.entity.Player
import org.bukkit.event.Cancellable
import org.bukkit.event.Event

abstract class TMEvent(
    private val player: Player,
    private val amount: Long,
) : Event(), Cancellable {
  private var cancelled = false

  fun getPlayer(): Player = player

  fun getAmount(): Long = amount

  override fun isCancelled(): Boolean = cancelled

  override fun setCancelled(cancel: Boolean) {
    cancelled = cancel
  }
}
