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
 * お気に入りまたはプレイリストに登録された楽曲の一覧画面。 開いた直後は先頭曲を再生し、その後はループ・シャッフル設定に従って進める。
 *
 * 曲順変更はアイテムをカーソルへ移さない二段階操作（右クリックで選択して移動先を右クリック）を 使用する。GUI外へのクリックでアイテムが実体化することを避けるためであり、並び順を持つ
 * 実プレイリストだけで有効にする。
 *
 * 5×8の40枠をコンテンツに使い切るため、1ページ目の戻る操作は下段の 「前のページ」欄を矢印に置き換えて提供する。
 */
class PlaylistDetailScreen
private constructor(
  private val plugin: OyasaiMusic,
  private val menuManager: MenuManager,
  viewer: Player,
  private val playlist: Playlist?, // null = お気に入り
) : BaseGridMenu(viewer, Component.text(playlist?.name ?: "お気に入り")) {

  companion object {
    // サヒュヤ氏の指示: 5×8フル(40スロット)、slot1(左上)から詰めて表示する。
    val SLOTS: List<Int> = ContentGrid.SLOTS
    private const val PAGE_SIZE = 40

    fun forFavorites(plugin: OyasaiMusic, menuManager: MenuManager, viewer: Player) =
      PlaylistDetailScreen(plugin, menuManager, viewer, null)

    fun forPlaylist(
      plugin: OyasaiMusic,
      menuManager: MenuManager,
      viewer: Player,
      playlist: Playlist,
    ) = PlaylistDetailScreen(plugin, menuManager, viewer, playlist)
  }

  private var songs: List<Song> = emptyList()
  private var listRevision = 0L
  private var page = 0
  private var pendingRemoveSongId: Long? = null
  private var draggingSongId: Long? = null
  private var draggingFromIndex: Int? = null

  init {
    reload(autoPlayFirst = true)
  }

  override fun refresh() = reload()

  private fun reload(autoPlayFirst: Boolean = false) {
    Bukkit.getScheduler()
      .runTaskAsynchronously(
        plugin,
        Runnable {
          val list =
            if (playlist != null) {
              plugin.playlistRepository.listSongs(requireNotNull(playlist.id))
            } else {
              plugin.socialRepository.listFavoriteSongIds(viewer.uniqueId).mapNotNull {
                plugin.songRepository.findById(it)
              }
            }
          Bukkit.getScheduler()
            .runTask(
              plugin,
              Runnable {
                if (songs.map { it.id } != list.map { it.id }) {
                  val oldRevision = listRevision++
                  val ids =
                    list
                      .filter { it.published || it.authorUuid == viewer.uniqueId }
                      .mapNotNull { it.id }
                  plugin.playbackController.updateList(
                    viewer,
                    this to oldRevision,
                    this to listRevision,
                  ) {
                    ids
                  }
                }
                songs = list
                page = page.coerceAtMost(((songs.size - 1).coerceAtLeast(0)) / PAGE_SIZE)
                render()
                if (autoPlayFirst && songs.isNotEmpty()) playIndex(0)
              },
            )
        },
      )
  }

  private fun render() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
      inventory,
      null,
      state,
      sortLabel = "設定順",
      viewer = viewer,
      plugin = plugin,
      actionModeCategory = ActionModeCategory.PLAYLIST_DETAIL,
    )

    SLOTS.forEachIndexed { index, slot ->
      inventory.setItem(
        slot,
        songs.getOrNull(page * PAGE_SIZE + index)?.let { songIcon(it, state) },
      )
    }
    if (page == 0) inventory.setItem(ControllerSlots.PAGE_PREV, GuiChrome.backControllerButton())
  }

  private fun songIcon(
    song: Song,
    state: com.github.sahyuya.oyasaiMusic.gui.PlayerControllerState,
  ): org.bukkit.inventory.ItemStack {
    val confirming = pendingRemoveSongId == song.id
    val dragging = draggingSongId == song.id
    val nowPlaying = state.isPlaying && state.nowPlayingSong?.id == song.id
    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."

    val lore = mutableListOf<Component>(SongLoreComponents.statistics(song.likes, song.views))
    lore +=
      ActionLoreBuilder.build(
        viewer,
        prefix,
        ActionModeCategory.PLAYLIST_DETAIL,
        "再生",
        "詳細を開く",
        "掴んで移動",
        "除外",
      )
    when {
      dragging -> lore += Component.text("移動中… 移動先をクリック（再クリックでキャンセル）", NamedTextColor.AQUA)
      draggingSongId != null -> lore += Component.text("クリックでここに移動", NamedTextColor.AQUA)
      confirming -> lore += Component.text("もう一度Shift+右クリックで除外確定", NamedTextColor.RED)
      nowPlaying -> lore += Component.text("♪ 再生中", NamedTextColor.GREEN)
    }

    return GuiItemBuilder(Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13)
      .name(songTitle(song))
      .lore(lore)
      .glint(confirming || dragging || nowPlaying)
      .build()
  }

  override fun onClick(event: InventoryClickEvent) {
    val slot = event.rawSlot
    val slotIndex = SLOTS.indexOf(slot)
    val index = if (slotIndex == -1) -1 else page * PAGE_SIZE + slotIndex

    // 曲順変更中は、次のコンテンツクリックを移動先として処理する。
    // アイテムをカーソルへ載せず、DB上の並び順だけを更新する。
    if (draggingSongId != null) {
      if (index != -1) dropDragged(index) else cancelDrag()
      return
    }

    if (
      NavTabRouter.handle(
        slot,
        null,
        ActionModeCategory.PLAYLIST_DETAIL,
        plugin,
        menuManager,
        viewer,
      )
    )
      return

    when (slot) {
      ControllerSlots.PAGE_PREV ->
        if (page > 0) {
          page--
          render()
        } else menuManager.openPrevious(viewer)
      ControllerSlots.PAGE_NEXT ->
        if (songs.size > (page + 1) * PAGE_SIZE) {
          page++
          render()
        }
      else -> {
        if (plugin.playbackController.handleControllerClick(slot, viewer)) return
        if (index == -1) return
        handleSongClick(event, index)
      }
    }
  }

  private fun handleSongClick(event: InventoryClickEvent, index: Int) {
    val song = songs.getOrNull(index) ?: return
    if (song.id != pendingRemoveSongId) pendingRemoveSongId = null

    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    val action = resolveActionMode(viewer, event, ActionModeCategory.PLAYLIST_DETAIL, prefix)
    when (action) {
      ActionMode.PRIMARY -> playIndex(index)
      ActionMode.SECONDARY -> openDetailsOrSettings(song)
      ActionMode.TERTIARY -> beginDrag(song, index)
      ActionMode.QUATERNARY -> confirmOrRemove(song)
    }
  }

  private fun openDetailsOrSettings(song: Song) {
    menuManager.open(viewer, SongDetailScreen(plugin, menuManager, viewer, song))
  }

  private fun beginDrag(song: Song, index: Int) {
    if (playlist == null) {
      viewer.sendMessage("§7お気に入りには並び順がありません。")
      return
    }
    if (draggingSongId == song.id) {
      cancelDrag()
      return
    }
    draggingSongId = song.id
    draggingFromIndex = index
    viewer.sendMessage("§b「${song.title}」を持ち上げました。移動先の曲をクリックしてください（同じ曲を再クリックでキャンセル）。")
    render()
  }

  private fun cancelDrag() {
    draggingSongId = null
    draggingFromIndex = null
    render()
  }

  private fun dropDragged(targetIndex: Int) {
    val songId = draggingSongId ?: return
    val fromIndex = draggingFromIndex
    draggingSongId = null
    draggingFromIndex = null
    if (playlist == null) return
    if (targetIndex == fromIndex) {
      render()
      return
    }
    Bukkit.getScheduler()
      .runTaskAsynchronously(
        plugin,
        Runnable {
          plugin.playlistRepository.reorderToPosition(
            requireNotNull(playlist.id),
            songId,
            targetIndex,
          )
          Bukkit.getScheduler()
            .runTask(
              plugin,
              Runnable {
                viewer.sendMessage("§a曲順を変更しました。")
                reload()
              },
            )
        },
      )
  }

  private fun confirmOrRemove(song: Song) {
    if (pendingRemoveSongId != song.id) {
      pendingRemoveSongId = song.id
      render()
      return
    }
    val songId = requireNotNull(song.id)
    Bukkit.getScheduler()
      .runTaskAsynchronously(
        plugin,
        Runnable {
          if (playlist != null) {
            plugin.playlistRepository.removeSong(requireNotNull(playlist.id), songId)
          } else {
            plugin.socialRepository.removeFavorite(viewer.uniqueId, songId)
          }
          Bukkit.getScheduler()
            .runTask(
              plugin,
              Runnable {
                viewer.sendMessage("§aリストから除外しました: ${song.title}")
                pendingRemoveSongId = null
                reload()
              },
            )
        },
      )
  }

  private fun playIndex(index: Int) {
    val song = songs.getOrNull(index) ?: return
    val ids = songs.filter { it.published || it.authorUuid == viewer.uniqueId }.mapNotNull { it.id }
    plugin.playbackController.playList(
      viewer,
      song,
      key = this to listRevision,
      sequential = true,
    ) {
      ids
    }
  }
}
