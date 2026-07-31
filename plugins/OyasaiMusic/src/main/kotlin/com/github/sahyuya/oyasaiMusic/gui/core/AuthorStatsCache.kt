package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit

/**
 * 左列①(自作楽曲一覧タブ)のホバー統計表示用キャッシュ。 UI/UX設計書2章「①プレイヤースキン頭…ホバー情報: 自分の統計（総いいね数、総お気に入り数、
 * 総再生回数、総フォロワー数）」に対応する。
 *
 * [GuiChrome.render] は同期的に呼ばれるためDB集計をその場で行うことができない。 そのため [get] はキャッシュ済みの値を即座に返しつつ、裏で非同期に最新値を取得し直し、
 * 次回描画時に反映される、という方式にしている。
 */
object AuthorStatsCache {
  data class Stats(
      val totalLikes: Long,
      val totalFavorites: Long,
      val totalViews: Long,
      val totalFollowers: Long,
  )

  private val cache = ConcurrentHashMap<UUID, Stats>()
  private val loading = ConcurrentHashMap.newKeySet<UUID>()

  /** キャッシュ済みの値を即座に返す（無ければnull）。裏で非同期に最新値を取得し直す。 */
  fun get(plugin: OyasaiMusic, playerUuid: UUID, onLoaded: (() -> Unit)? = null): Stats? {
    if (loading.add(playerUuid)) {
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                try {
                  val songs = plugin.songRepository.findByAuthor(playerUuid, includeDrafts = true)
                  val totalLikes = songs.sumOf { it.likes }
                  val totalViews = songs.sumOf { it.views }
                  val totalFavorites = plugin.socialRepository.countFavoritesForAuthor(playerUuid)
                  val totalFollowers = plugin.socialRepository.countFollowers(playerUuid)
                  cache[playerUuid] = Stats(totalLikes, totalFavorites, totalViews, totalFollowers)
                  onLoaded?.let { Bukkit.getScheduler().runTask(plugin, Runnable { it() }) }
                } finally {
                  loading.remove(playerUuid)
                }
              },
          )
    }
    return cache[playerUuid]
  }
}
