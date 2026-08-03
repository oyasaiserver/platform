package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.SongSort
import com.github.sahyuya.oyasaiMusic.model.Song
import org.bukkit.entity.Player
import java.util.UUID

/**
 * [SongListMenu] の共通構築ヘルパー。同じ「楽曲一覧グリッド」画面を
 * 自作楽曲一覧・全楽曲一覧・作者ごとの作品一覧・題名検索結果で使い回すための工場関数群。
 */
object MainMenuScreens {

    fun mySongs(plugin: OyasaiMusic, menuManager: MenuManager, viewer: Player): SongListMenu =
        SongListMenu(
            plugin, menuManager, viewer,
            title = "自作楽曲一覧",
            availableSorts = listOf(SongSort.CREATED_AT_DESC, SongSort.TITLE_ASC),
            initialSort = SongSort.CREATED_AT_DESC,
            ownTab = NavTab.MY_SONGS,
        ) { sort, limit, offset ->
            plugin.songRepository.findByAuthor(viewer.uniqueId, includeDrafts = true)
                .sortedWith(sortComparator(sort))
                .drop(offset).take(limit)
        }

    fun allSongs(plugin: OyasaiMusic, menuManager: MenuManager, viewer: Player): SongListMenu =
        SongListMenu(
            plugin, menuManager, viewer,
            title = "全楽曲一覧",
            availableSorts = listOf(SongSort.CREATED_AT_DESC, SongSort.TITLE_ASC, SongSort.LIKES_DESC, SongSort.VIEWS_DESC),
            initialSort = SongSort.CREATED_AT_DESC,
            ownTab = NavTab.ALL_SONGS,
        ) { sort, limit, offset -> mergeOwnDrafts(plugin, viewer, offset, limit, titleFilter = null) { o, l ->
            plugin.songRepository.searchPublished(sort = sort, limit = l, offset = o)
        } }

    fun authorWorks(plugin: OyasaiMusic, menuManager: MenuManager, viewer: Player, authorUuid: UUID, authorName: String): SongListMenu =
        SongListMenu(
            plugin, menuManager, viewer,
            title = "$authorName の作品",
            availableSorts = listOf(SongSort.CREATED_AT_DESC, SongSort.TITLE_ASC),
            initialSort = SongSort.CREATED_AT_DESC,
        ) { sort, limit, offset ->
            plugin.songRepository.findByAuthor(authorUuid, includeDrafts = false)
                .sortedWith(sortComparator(sort))
                .drop(offset).take(limit)
        }

    private fun sortComparator(sort: SongSort): Comparator<Song> = when (sort) {
        SongSort.TITLE_ASC -> compareBy { it.title }
        SongSort.LIKES_DESC -> compareByDescending { it.likes }
        SongSort.VIEWS_DESC -> compareByDescending { it.views }
        else -> compareByDescending { it.createdAt }
    }

    /**
     * 公開楽曲を表示する一覧へ、閲覧者本人の下書きだけを先頭に追加する。
     * 下書きは録音直後の設定画面へ移動しやすくするためで、アイコンの描画は
     * [SongListMenu]が非公開状態を検出して切り替える。
     *
     * 下書きと公開曲を単一の仮想リストとしてページングするため、下書きがページを埋めても
     * 次ページの公開曲を飛ばさない。
     */
    fun mergeOwnDrafts(
        plugin: OyasaiMusic,
        viewer: Player,
        offset: Int,
        limit: Int,
        titleFilter: String?,
        publishedLoader: (offset: Int, limit: Int) -> List<Song>,
    ): List<Song> {
        val myDrafts = plugin.songRepository.findByAuthor(viewer.uniqueId, includeDrafts = true)
            .filter { !it.published }
            .let { drafts -> if (titleFilter != null) drafts.filter { it.title.contains(titleFilter, ignoreCase = true) } else drafts }
            .sortedByDescending { it.createdAt }

        val draftsForPage = myDrafts.drop(offset).take(limit)
        val remaining = (limit - draftsForPage.size).coerceAtLeast(0)
        val publishedOffset = (offset - myDrafts.size).coerceAtLeast(0)
        val published = if (remaining > 0) publishedLoader(publishedOffset, remaining) else emptyList()
        return draftsForPage + published
    }
}
