package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.SongSort
import java.util.UUID
import org.bukkit.entity.Player

/** [SongListMenu] の共通構築ヘルパー。同じ「楽曲一覧グリッド」画面を 自作楽曲一覧・全楽曲一覧・作者ごとの作品一覧・題名検索結果で使い回すための工場関数群。 */
object MainMenuScreens {

  fun mySongs(plugin: OyasaiMusic, menuManager: MenuManager, viewer: Player): SongListMenu =
    SongListMenu(
      plugin,
      menuManager,
      viewer,
      title = "自作楽曲一覧",
      availableSorts = listOf(SongSort.CREATED_AT_DESC, SongSort.ID_ASC, SongSort.TITLE_ASC),
      initialSort = SongSort.CREATED_AT_DESC,
      ownTab = NavTab.MY_SONGS,
      playbackIds = { sort ->
        plugin.songRepository.listPlaybackIds(sort, viewer.uniqueId, includeDrafts = true)
      },
    ) { sort, limit, offset ->
      plugin.songRepository.findByAuthor(
        viewer.uniqueId,
        includeDrafts = true,
        sort = sort,
        limit = limit,
        offset = offset,
      )
    }

  fun allSongs(plugin: OyasaiMusic, menuManager: MenuManager, viewer: Player): SongListMenu =
    SongListMenu(
      plugin,
      menuManager,
      viewer,
      title = "全楽曲一覧",
      availableSorts =
        listOf(
          SongSort.CREATED_AT_DESC,
          SongSort.ID_ASC,
          SongSort.TITLE_ASC,
          SongSort.LIKES_DESC,
          SongSort.VIEWS_DESC,
        ),
      initialSort = SongSort.CREATED_AT_DESC,
      ownTab = NavTab.ALL_SONGS,
      playbackIds = { sort -> plugin.songRepository.listPlaybackIds(sort) },
    ) { sort, limit, offset ->
      plugin.songRepository.searchPublished(sort = sort, limit = limit, offset = offset)
    }

  fun authorWorks(
    plugin: OyasaiMusic,
    menuManager: MenuManager,
    viewer: Player,
    authorUuid: UUID,
    authorName: String,
  ): SongListMenu =
    SongListMenu(
      plugin,
      menuManager,
      viewer,
      title = "$authorName の作品",
      playbackIds = { sort -> plugin.songRepository.listPlaybackIds(sort, authorUuid) },
      availableSorts = listOf(SongSort.CREATED_AT_DESC, SongSort.ID_ASC, SongSort.TITLE_ASC),
      initialSort = SongSort.CREATED_AT_DESC,
    ) { sort, limit, offset ->
      plugin.songRepository.findByAuthor(
        authorUuid,
        includeDrafts = false,
        sort = sort,
        limit = limit,
        offset = offset,
      )
    }
}
