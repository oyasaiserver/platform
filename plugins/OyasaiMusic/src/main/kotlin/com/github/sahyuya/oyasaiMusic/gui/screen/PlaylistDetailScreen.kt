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
    /** 曲間の間隔: 0.75秒。 */
    private const val ADVANCE_DELAY_TICKS = 15L

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
  private var page = 0
  private var pendingRemoveSongId: Long? = null
  private var autoPlayIndex = 0
  private var draggingSongId: Long? = null
  private var draggingFromIndex: Int? = null
  private var pendingAdvanceTask: org.bukkit.scheduler.BukkitTask? = null

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
      ControllerSlots.PREV_SONG -> {
        if (songs.isEmpty()) return
        val prevIndex = (autoPlayIndex - 1).let { if (it < 0) songs.size - 1 else it }
        playIndex(prevIndex, delayTicks = ADVANCE_DELAY_TICKS)
      }
      ControllerSlots.NEXT_SONG -> scheduleAdvance()
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

  private fun playIndex(index: Int, delayTicks: Long = 0) {
    val song = songs.getOrNull(index) ?: return
    autoPlayIndex = index
    pendingAdvanceTask?.cancel()
    pendingAdvanceTask = null
    if (delayTicks <= 0) {
      plugin.playbackController.play(viewer, song, onCompletion = { scheduleAdvance() })
    } else {
      pendingAdvanceTask =
          Bukkit.getScheduler()
              .runTaskLater(
                  plugin,
                  Runnable {
                    pendingAdvanceTask = null
                    plugin.playbackController.play(
                        viewer,
                        song,
                        onCompletion = { scheduleAdvance() },
                    )
                  },
                  delayTicks,
              )
    }
  }

  /**
   * UI/UX設計書6章「以降は設定順に順次再生」への対応。末尾まで再生したらループ設定に従う。 シャッフルONの場合は次の曲をランダムに選ぶ（サヒュヤ氏の指示「シャッフル、ループ機能」対応）。
   * 曲と曲の間には約1秒の間隔を空ける（サヒュヤ氏の指示）。
   */
  private fun scheduleAdvance() {
    if (songs.isEmpty()) return
    pendingAdvanceTask?.cancel()
    pendingAdvanceTask =
        Bukkit.getScheduler()
            .runTaskLater(
                plugin,
                Runnable {
                  pendingAdvanceTask = null
                  // 曲間待機中に切り替えたループ/シャッフル設定を、ここで改めて反映する。
                  val nextIndex =
                      resolveNextIndex(plugin.controllerStateService.stateFor(viewer.uniqueId))
                          ?: return@Runnable
                  playIndex(nextIndex)
                },
                ADVANCE_DELAY_TICKS,
            )
  }

  private fun resolveNextIndex(
      state: com.github.sahyuya.oyasaiMusic.gui.PlayerControllerState
  ): Int? {
    if (state.loopMode == LoopMode.SINGLE) return autoPlayIndex
    if (state.shuffle) {
      if (songs.size == 1) return if (state.loopMode != LoopMode.OFF) 0 else null
      var next: Int
      do {
        next = songs.indices.random()
      } while (next == autoPlayIndex)
      return next
    }
    val nextIndex = autoPlayIndex + 1
    if (nextIndex < songs.size) return nextIndex
    return if (state.loopMode == LoopMode.LIST) 0 else null
  }
}
