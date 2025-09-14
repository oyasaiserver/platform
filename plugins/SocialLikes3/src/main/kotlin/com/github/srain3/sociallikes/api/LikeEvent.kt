package com.github.srain3.sociallikes.api

import java.util.*
import org.bukkit.event.Event
import org.bukkit.event.HandlerList

class LikeEvent(likeUser0: UUID, buildOwner0: UUID) : Event() {

  override fun getHandlers(): HandlerList {
    return HANDLERS
  }

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic
    fun getHandlerList(): HandlerList {
      return HANDLERS
    }
  }

  /** イイねを行ったユーザーUUID */
  val likeUser = likeUser0

  /** イイねされた建築のオーナーUUID */
  val buildOwner = buildOwner0
}
