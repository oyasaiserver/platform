package io.oyasai.economy.api

import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.event.Cancellable
import org.bukkit.event.Event
import org.bukkit.event.HandlerList

/**
 * Fired before queue acceptance. Cancellation changes neither memory nor storage. Do not mutate the
 * economy from these handlers.
 */
class EconomyBalanceChangeEvent(
    val currency: String,
    val uuid: UUID,
    val oldBalance: Long,
    val newBalance: Long,
    val reason: String,
) : Event(!Bukkit.isPrimaryThread()), Cancellable {
  private var cancelled = false

  override fun isCancelled() = cancelled

  override fun setCancelled(value: Boolean) {
    cancelled = value
  }

  override fun getHandlers() = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList() = HANDLERS
  }
}

class EconomyTransferEvent(val currency: String, val from: UUID, val to: UUID, val amount: Long) :
    Event(!Bukkit.isPrimaryThread()), Cancellable {
  private var cancelled = false

  override fun isCancelled() = cancelled

  override fun setCancelled(value: Boolean) {
    cancelled = value
  }

  override fun getHandlers() = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList() = HANDLERS
  }
}
