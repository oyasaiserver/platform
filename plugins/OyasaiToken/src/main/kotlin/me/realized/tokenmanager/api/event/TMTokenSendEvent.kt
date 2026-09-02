package me.realized.tokenmanager.api.event

import org.bukkit.entity.Player
import org.bukkit.event.HandlerList

open class TMTokenSendEvent(player: Player, private val target: Player, amount: Long) :
    TMEvent(player, amount) {
  open fun getTarget(): Player = target

  override fun getHandlers(): HandlerList = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList(): HandlerList = HANDLERS
  }
}
