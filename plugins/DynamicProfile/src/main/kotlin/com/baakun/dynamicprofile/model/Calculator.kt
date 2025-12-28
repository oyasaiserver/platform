package com.baakun.dynamicprofile.model

import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.plugin
import org.bukkit.OfflinePlayer

object Calculator {
  fun expAmount(type: BehType): Int {

    return when (type) {
      BehType.MOVE -> plugin.config.getInt("Move", 20) // Default: 20

      BehType.VEHICLE -> plugin.config.getInt("Vehicle", 20)

      BehType.FLY -> plugin.config.getInt("Fly", 10) // Default: 10

      BehType.JUMP -> plugin.config.getInt("Jump", 40) // Default: 40

      BehType.PLACE_BLOCK -> plugin.config.getInt("Block", 20) // Default: 20

      BehType.VOTE -> plugin.config.getInt("Vote", 30000) // Default: 30000

      BehType.LIKE -> plugin.config.getInt("Like", 4000)

      BehType.RECEIVE_LIKE -> plugin.config.getInt("ReceiveLike", 6000)

      BehType.JOIN -> plugin.config.getInt("Join", 10000)

      BehType.CHAT -> plugin.config.getInt("Chat", 300)

      BehType.PLAY_TIME -> plugin.config.getInt("PlayTime", 300)
    }
  }

  fun enumToName(type: BehType): String {

    return when (type) {
      BehType.MOVE -> "Move"

      BehType.VEHICLE -> "Vehicle"

      BehType.FLY -> "Move"

      BehType.JUMP -> "Jump"

      BehType.PLACE_BLOCK -> "Block"

      BehType.VOTE -> "Vote"

      BehType.LIKE -> "Like"

      BehType.RECEIVE_LIKE -> "ReceiveLike"

      BehType.JOIN -> "Join"

      BehType.CHAT -> "Chat"

      BehType.PLAY_TIME -> "PlayTime"
    }
  }

  fun calculateLv(exp: Int): Int {
    var remainExp = exp
    var level = 0
    val ref = plugin.config.getInt("basicRequired", 2000)
    while (true) {
      var hikuExp = ((level + 4) * ref)
      if (hikuExp > plugin.config.getInt("maxRequired", 70000))
          hikuExp = plugin.config.getInt("maxRequired", 70000)
      if (remainExp - hikuExp >= 0) {
        remainExp -= hikuExp
        level += 1
      } else {
        break
      }
    }
    return level
  }

  fun OfflinePlayer.getLeve(): Int {
    val statsData = getStats(this.uniqueId)
    val remainExp = statsData.exp
    return calculateLv(remainExp)
  }

  fun OfflinePlayer.getExp(): Int {
    val statsData = getStats(this.uniqueId)
    val remainExp = statsData.exp
    return remainExp
  }

  fun getLevel(player: OfflinePlayer): Int {
    val statsData = getStats(player.uniqueId)
    val remainExp = statsData.exp
    return calculateLv(remainExp)
  }

  fun getExpFromLevel(maxLevel: Int): Int {
    var exp = 0
    for (i in 0..<maxLevel) {
      var additional = (i + 4) * plugin.config.getInt("basicRequired", 2000)
      if (additional > plugin.config.getInt("maxRequired", 70000))
          additional = plugin.config.getInt("maxRequired", 70000)
      exp += additional
    }
    return exp
  }
}
