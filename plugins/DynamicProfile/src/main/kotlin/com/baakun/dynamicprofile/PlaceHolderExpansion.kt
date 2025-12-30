package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.util.Tools.getStats
import me.clip.placeholderapi.expansion.PlaceholderExpansion
import org.bukkit.OfflinePlayer

class PlaceHolderExpansion( //
    private val plugin: DynamicProfile
) : PlaceholderExpansion() {
  override fun getAuthor(): String {
    return "Author"
  }

  override fun getIdentifier(): String {
    return "dp" //
  }

  override fun getVersion(): String {
    return "1.0.0" //
  }

  override fun persist(): Boolean {
    return true //
  }

  override fun onRequest(player: OfflinePlayer, params: String): String? {
    if (params.equals("level", ignoreCase = true)) {
      if (getStats(player.uniqueId).title != -1) {
        val title = getTitleFromId(getStats(player.uniqueId).title)
        if (title.id != -1) return "${title.title}&r" else getStats(player.uniqueId).title = -1
      }
      val level = Calculator.getLevel(player).toString()
      return "Lv.$level" //
    }
    return null //
  }
}
