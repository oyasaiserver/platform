package me.realized.tokenmanager.api.event

import java.util.UUID
import org.bukkit.event.Event
import org.bukkit.event.HandlerList

open class TMTokenBalanceChangeEvent(
    private val playerUuid: UUID,
    private val playerName: String?,
    private val oldBalance: Long,
    private val newBalance: Long,
    private val delta: Long,
    private val reason: String,
) : Event() {
  open fun getPlayerUuid(): UUID = playerUuid

  open fun getPlayerName(): String? = playerName

  open fun getOldBalance(): Long = oldBalance

  open fun getNewBalance(): Long = newBalance

  open fun getDelta(): Long = delta

  open fun getReason(): String = reason

  override fun getHandlers(): HandlerList = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList(): HandlerList = HANDLERS
  }
}
