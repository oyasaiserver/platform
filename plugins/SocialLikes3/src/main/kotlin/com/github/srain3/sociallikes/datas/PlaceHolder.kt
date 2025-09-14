package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.SocialLikes
import me.clip.placeholderapi.expansion.PlaceholderExpansion
import org.bukkit.OfflinePlayer

class PlaceHolder(private val plugin: SocialLikes) : PlaceholderExpansion() {

  override fun getAuthor(): String {
    return "Srain3"
  }

  override fun getIdentifier(): String {
    return "SocialLikes3"
  }

  override fun getVersion(): String {
    return "0.4.0"
  }

  override fun persist(): Boolean {
    return true // This is required or else PlaceholderAPI will unregister the Expansion on reload
  }

  override fun onRequest(player: OfflinePlayer, params: String): String? {
    if (params.equals("ReceivedLikeCount", ignoreCase = true)) {
      val likesInt = Data.userLikesInt[player.uniqueId] ?: 0
      return "$likesInt"
    }
    if (params.equals("ALLLikeCount", ignoreCase = true)) {
      val list = Data.userLikesInt.values.toList()
      var allInt = 0
      list.forEach { allInt += it }
      return "$allInt"
    }
    if (params.equals("ALLBuildingCount", ignoreCase = true)) {
      return "${Data.getBuildingInt()}"
    }
    return null
  }
}
