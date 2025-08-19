package com.baakun.dynamicprofile.data

import java.util.UUID
import org.bukkit.Bukkit

object UserStatsCache {
  private val cache = mutableMapOf<UUID, UserStatsData>()

  /** UUIDから[UserStatsData]を返す */
  fun getUserStats(uuid: UUID): UserStatsData {
    return cache[uuid] ?: loadStatsData(uuid)
  }

  /** uuidからユーザー情報用classを作ってキャッシュに入れる、ついでに作ったclassも返す */
  private fun loadStatsData(uuid: UUID): UserStatsData {
    val offlinePlayer = Bukkit.getOfflinePlayer(uuid)
    val data = UserStatsData(offlinePlayer)
    cache[uuid] = data
    return data
  }
}
