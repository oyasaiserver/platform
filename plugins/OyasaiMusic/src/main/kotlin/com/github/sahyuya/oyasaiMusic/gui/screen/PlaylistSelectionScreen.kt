package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.model.Playlist
import com.github.sahyuya.oyasaiMusic.model.Song
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * お気に入り♪プレイリスト選択画面（UI/UX設計書、参照画像6枚目）。
 * 楽曲一覧・楽曲詳細から「お気に入り/プレイリストへ追加」しようとした際に開く選択画面
 * （左列緑タブから直接開く[FavoritesPlaylistsScreen]とは別物）。
 *
 * 背景装飾は使わず、5×8の40枠をすべて使用する。1ページ目の戻る操作は
 * 下段の「前のページ」欄を矢印に置き換えて提供する。
 */
class PlaylistSelectionScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
    private val targetSong: Song,
) : BaseGridMenu(viewer, Component.text("お気に入り♪プレイリスト選択")) {

    companion object {
        private const val PAGE_SIZE = 40
        val SLOTS: List<Int> = ContentGrid.SLOTS
    }

    private var playlists: List<Playlist> = emptyList()
    private var page = 0

    init {
        if (!targetSong.published) {
            GuiFeedback.invalid(viewer, "非公開の楽曲はお気に入り・プレイリストへ追加できません")
            menuManager.openPrevious(viewer)
        } else reload()
    }

    override fun refresh() = reload()

    private fun reload() {
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val list = plugin.playlistRepository.listByOwner(viewer.uniqueId)
            Bukkit.getScheduler().runTask(plugin, Runnable {
                playlists = list
                render()
            })
        })
    }

    private fun render() {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        GuiChrome.render(inventory, null, state, sortLabel = "-", viewer = viewer, plugin = plugin, actionModeCategory = null)
        SLOTS.forEachIndexed { index, slot ->
            val globalIndex = page * PAGE_SIZE + index
            inventory.setItem(slot, selectionItem(globalIndex))
        }
        if (page == 0) inventory.setItem(ControllerSlots.PAGE_PREV, GuiChrome.backControllerButton())
    }

    private fun selectionItem(globalIndex: Int): org.bukkit.inventory.ItemStack? = when {
        globalIndex == 0 -> GuiItemBuilder(Material.NETHER_STAR)
            .name(Component.text("お気に入りに追加", NamedTextColor.LIGHT_PURPLE))
            .lore(Component.text("「${targetSong.title}」を追加", NamedTextColor.GRAY))
            .build()
        globalIndex in 1..playlists.size -> playlists[globalIndex - 1].let { playlist ->
            GuiItemBuilder(Material.CHISELED_BOOKSHELF)
                .name(Component.text(playlist.name, NamedTextColor.YELLOW))
                .lore(Component.text("${playlist.songCount} 曲", NamedTextColor.GRAY))
                .build()
        }
        globalIndex == playlists.size + 1 -> GuiItemBuilder(Material.WRITABLE_BOOK)
            .name(Component.text("+ 新規プレイリストを作成して追加", NamedTextColor.GREEN))
            .build()
        else -> null
    }

    override fun onClick(event: InventoryClickEvent) {
        val slot = event.rawSlot
        if (slot == ControllerSlots.PAGE_PREV) {
            if (page > 0) { page--; render() } else menuManager.openPrevious(viewer)
            return
        }
        if (slot == ControllerSlots.PAGE_NEXT) {
            if ((page + 1) * PAGE_SIZE < playlists.size + 2) { page++; render() }
            return
        }
        if (NavTabRouter.handle(slot, null, null, plugin, menuManager, viewer)) return
        if (plugin.playbackController.handleControllerClick(slot, viewer)) return

        val slotIndex = SLOTS.indexOf(slot)
        if (slotIndex == -1) return
        val index = page * PAGE_SIZE + slotIndex

        if (index == 0) {
            addToFavorites()
            return
        }
        val playlistIndex = index - 1
        val playlist = playlists.getOrNull(playlistIndex)
        if (playlist != null) {
            addToPlaylist(playlist)
        } else if (index == playlists.size + 1) {
            createPlaylistAndAdd()
        }
    }

    private fun addToFavorites() {
        val songId = targetSong.id ?: return
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val added = plugin.socialRepository.addFavorite(viewer.uniqueId, songId)
            Bukkit.getScheduler().runTask(plugin, Runnable {
                viewer.sendMessage(if (added) "§aお気に入りに追加しました: ${targetSong.title}" else "§7既にお気に入り済みです。")
                menuManager.openPrevious(viewer)
            })
        })
    }

    private fun addToPlaylist(playlist: Playlist) {
        val songId = targetSong.id ?: return
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val added = plugin.playlistRepository.addSong(requireNotNull(playlist.id), songId)
            Bukkit.getScheduler().runTask(plugin, Runnable {
                viewer.sendMessage(if (added) "§a「${playlist.name}」に追加しました: ${targetSong.title}" else "§7既に追加済みです。")
                menuManager.openPrevious(viewer)
            })
        })
    }

    private fun createPlaylistAndAdd() {
        AnvilTextInputSession.open(plugin, viewer, Component.text("新しいプレイリスト名")) { name ->
            Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
                val playlistId = plugin.playlistRepository.create(viewer.uniqueId, name)
                val songId = targetSong.id
                if (songId != null) plugin.playlistRepository.addSong(playlistId, songId)
                Bukkit.getScheduler().runTask(plugin, Runnable {
                    viewer.sendMessage("§aプレイリスト「$name」を作成し、「${targetSong.title}」を追加しました。")
                    menuManager.openPrevious(viewer)
                })
            })
        }
    }
}
