package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.model.Playlist
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * お気に入りとプレイリストを表示・管理する画面。
 * 先頭は固定のお気に入り、末尾は新規作成で、プレイリストには共有・名前変更・削除を提供する。
 * 金床入力後も画面を再表示するため、非同期の再読込完了時にこのメニューを開き直す。
 */
class FavoritesPlaylistsScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
) : BaseGridMenu(viewer, Component.text("お気に入り♪プレイリスト")) {

    companion object {
        // サヒュヤ氏の指示: 5×8フル(40スロット)、slot1(左上)から詰めて表示する。
        val SLOTS: List<Int> = ContentGrid.SLOTS
        private const val FAVORITES_INDEX = 0 // SLOTS[0] は常に「お気に入り」固定
    }

    private var playlists: List<Playlist> = emptyList()
    private var pendingDeletePlaylistId: Long? = null

    init { reload() }

    override fun refresh() = reload()

    private fun reload() {
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val list = plugin.playlistRepository.listByOwner(viewer.uniqueId)
            val favoriteCount = plugin.socialRepository.listFavoriteSongIds(viewer.uniqueId).size
            Bukkit.getScheduler().runTask(plugin, Runnable {
                playlists = list
                render(favoriteCount)
                // Anvil入力等を経由してGUIが一旦閉じられていた場合でも確実に再表示する。
                menuManager.open(viewer, this, rememberAsPrevious = false)
            })
        })
    }

    private fun render(favoriteCount: Int = -1) {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        GuiChrome.render(
            inventory, NavTab.FAVORITES_PLAYLISTS, state, sortLabel = "-",
            viewer = viewer, plugin = plugin, actionModeCategory = ActionModeCategory.PLAYLIST_LIST,
        )

        inventory.setItem(SLOTS[FAVORITES_INDEX], favoritesIcon(favoriteCount))

        playlists.forEachIndexed { i, playlist ->
            val slotIndex = FAVORITES_INDEX + 1 + i
            if (slotIndex < SLOTS.size) inventory.setItem(SLOTS[slotIndex], playlistIcon(playlist))
        }

        val createIndex = FAVORITES_INDEX + 1 + playlists.size
        if (createIndex < SLOTS.size) {
            inventory.setItem(
                SLOTS[createIndex],
                GuiItemBuilder(Material.WRITABLE_BOOK)
                    .name(Component.text("+ 新規プレイリスト作成", NamedTextColor.GREEN))
                    .build(),
            )
        }
    }

    private fun favoritesIcon(favoriteCount: Int) = GuiItemBuilder(Material.NETHER_STAR)
        .name(Component.text("お気に入り", NamedTextColor.LIGHT_PURPLE))
        .lore(
            if (favoriteCount >= 0) Component.text("$favoriteCount 曲", NamedTextColor.GRAY) else Component.text("読み込み中...", NamedTextColor.GRAY),
            Component.text("クリックで開く", NamedTextColor.DARK_GRAY),
        )
        .build()

    private fun playlistIcon(playlist: Playlist): org.bukkit.inventory.ItemStack {
        val confirming = pendingDeletePlaylistId == playlist.id
        val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
        val lore = mutableListOf<Component>(Component.text("${playlist.songCount} 曲", NamedTextColor.GRAY))
        lore += ActionLoreBuilder.build(viewer, prefix, ActionModeCategory.PLAYLIST_LIST, "開く", "共有", "名前変更", "削除")
        if (confirming) lore += Component.text("もう一度Shift+右クリックで削除確定", NamedTextColor.RED)

        return GuiItemBuilder(Material.CHISELED_BOOKSHELF)
            .name(Component.text(playlist.name, NamedTextColor.YELLOW))
            .lore(lore)
            .glint(confirming)
            .build()
    }

    override fun onClick(event: InventoryClickEvent) {
        val slot = event.rawSlot
        if (NavTabRouter.handle(slot, NavTab.FAVORITES_PLAYLISTS, ActionModeCategory.PLAYLIST_LIST, plugin, menuManager, viewer)) return
        if (plugin.playbackController.handleControllerClick(slot, viewer)) return

        val index = SLOTS.indexOf(slot)
        if (index == -1) return

        if (index == FAVORITES_INDEX) {
            pendingDeletePlaylistId = null
            menuManager.open(viewer, PlaylistDetailScreen.forFavorites(plugin, menuManager, viewer))
            return
        }

        val playlistIndex = index - FAVORITES_INDEX - 1
        val playlist = playlists.getOrNull(playlistIndex)
        if (playlist == null) {
            if (index == FAVORITES_INDEX + 1 + playlists.size) createPlaylist()
            return
        }
        if (playlist.id != pendingDeletePlaylistId) pendingDeletePlaylistId = null

        val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
        val action = resolveActionMode(viewer, event, ActionModeCategory.PLAYLIST_LIST, prefix)
        when (action) {
            ActionMode.PRIMARY -> menuManager.open(viewer, PlaylistDetailScreen.forPlaylist(plugin, menuManager, viewer, playlist))
            ActionMode.SECONDARY -> sharePlaylist(playlist)
            ActionMode.TERTIARY -> renamePlaylist(playlist)
            ActionMode.QUATERNARY -> confirmOrDeletePlaylist(playlist)
        }
    }

    private fun createPlaylist() {
        AnvilTextInputSession.open(plugin, viewer, Component.text("新しいプレイリスト名")) { name ->
            Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
                plugin.playlistRepository.create(viewer.uniqueId, name)
                Bukkit.getScheduler().runTask(plugin, Runnable {
                    viewer.sendMessage("§aプレイリスト「$name」を作成しました。")
                    reload()
                })
            })
        }
    }

    private fun renamePlaylist(playlist: Playlist) {
        AnvilTextInputSession.open(plugin, viewer, Component.text("プレイリスト名を変更"), initialText = playlist.name) { newName ->
            Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
                plugin.playlistRepository.rename(requireNotNull(playlist.id), newName)
                Bukkit.getScheduler().runTask(plugin, Runnable {
                    viewer.sendMessage("§aプレイリスト名を変更しました: $newName")
                    reload()
                })
            })
        }
    }

    private fun confirmOrDeletePlaylist(playlist: Playlist) {
        if (pendingDeletePlaylistId != playlist.id) {
            pendingDeletePlaylistId = playlist.id
            render()
            return
        }
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            plugin.playlistRepository.delete(requireNotNull(playlist.id))
            Bukkit.getScheduler().runTask(plugin, Runnable {
                viewer.sendMessage("§aプレイリストを削除しました: ${playlist.name}")
                pendingDeletePlaylistId = null
                reload()
            })
        })
    }

    /**
     * 「共有」: 指定したオンラインプレイヤーへ、この曲順のままコピーしたプレイリストを
     * 新規作成する形で送る。共有先はオンラインプレイヤーに限定する
     * （オフラインだと即座に通知できずUUID解決の確実性も下がるため）。
     * 失敗パス（プレイヤーが見つからない等）も含め、必ず [reload] でGUIを再表示すること。
     */
    private fun sharePlaylist(playlist: Playlist) {
        AnvilTextInputSession.open(plugin, viewer, Component.text("共有先のプレイヤー名")) { targetName ->
            Bukkit.getScheduler().runTask(plugin, Runnable {
                val target = Bukkit.getPlayerExact(targetName)
                if (target == null) {
                    viewer.sendMessage("§cオンラインのプレイヤーが見つかりません: $targetName")
                    reload()
                    return@Runnable
                }
                if (target.uniqueId == viewer.uniqueId) {
                    viewer.sendMessage("§c自分自身には共有できません。")
                    reload()
                    return@Runnable
                }
                Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
                    val songs = plugin.playlistRepository.listSongs(requireNotNull(playlist.id))
                    val newPlaylistId = plugin.playlistRepository.create(target.uniqueId, playlist.name)
                    songs.forEach { song -> song.id?.let { plugin.playlistRepository.addSong(newPlaylistId, it) } }
                    Bukkit.getScheduler().runTask(plugin, Runnable {
                        viewer.sendMessage("§a${target.name} にプレイリスト「${playlist.name}」(${songs.size}曲)を共有しました。")
                        target.sendMessage("§d${viewer.name} からプレイリスト「${playlist.name}」が共有されました！ §7(お気に入り♪プレイリストに追加されました)")
                        reload()
                    })
                })
            })
        }
    }
}
