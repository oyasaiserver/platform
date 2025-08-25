package com.baakun.dynamicprofile.exp

import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.api.LikeEvent
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener

object SLEvents : Listener {
  @EventHandler
  fun onlike(e: LikeEvent) {
    val whoLiked = getStats(e.likeUser)
    whoLiked.addCount(BehType.LIKE)

    val whoReceived = getStats(e.buildOwner)
    whoReceived.addCount(BehType.RECEIVE_LIKE)
  }
}
