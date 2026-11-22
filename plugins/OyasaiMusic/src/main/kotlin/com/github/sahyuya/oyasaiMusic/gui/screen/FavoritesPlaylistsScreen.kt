package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.PlaylistRepository.AddSongResult
import com.github.sahyuya.oyasaiMusic.db.PlaylistRepository.Companion.MAX_PLAYLISTS
import com.github.sahyuya.oyasaiMusic.model.Playlist
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * お気に入りとプレイリストを表示・管理する画面。 先頭は固定のお気に入り、末尾は新規作成で、プレイリストには共有・名前変更・削除を提供する。
 * 金床入力後も画面を再表示するため、非同期の再読込完了時にこのメニューを開き直す。
 */
class FavoritesPlaylistsScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
) : BaseGridMenu(viewer, Component.text("ストレージ・お気に入り・プレイリスト")) {

  companion object {
    // サヒュヤ氏の指示: 5×8フル(40スロット)、slot1(左上)から詰めて表示する。
    val SLOTS: List<Int> = ContentGrid.SLOTS
    private const val FAVORITES_INDEX = 1 // SLOTS[0] は常に「お気に入り」固定
    private const val FIXED_SLOTS = 2
  }

  private var playlists: List<Playlist> = emptyList()
  private var favoriteCount = -1
  private var page = 0
  private val canCreate: Boolean
    get() = playlists.size < MAX_PLAYLISTS

  private val createIndex: Int
    get() = FIXED_SLOTS + playlists.size

  private val lastPage
    get() = (createIndex - if (canCreate) 0 else 1) / SLOTS.size

  private var pendingDeletePlaylistId: Long? = null

  init {
    render()
    reload()
  }

  override fun refresh() = reload()

  private fun reload(reopen: Boolean = false) {
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val list = plugin.playlistRepository.listByOwner(viewer.uniqueId)
              val favoriteCount = plugin.socialRepository.listFavoriteSongIds(viewer.uniqueId).size
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!viewer.isOnline) return@Runnable
                        playlists = list
                        this.favoriteCount = favoriteCount
                        page = page.coerceAtMost(lastPage)
                        render()
                        // Anvil入力等を経由してGUIが一旦閉じられていた場合のみ、別画面へ遷移していなければ再表示する。
                        if (
                            reopen &&
                                menuManager.lastKnownMenu(viewer.uniqueId) === this &&
                                viewer.openInventory.topInventory !== inventory
                        ) {
                          menuManager.open(viewer, this, rememberAsPrevious = false)
                        }
                      },
                  )
            },
        )
  }

  private fun render() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
        inventory,
        NavTab.FAVORITES_PLAYLISTS,
        state,
        sortLabel = "-",
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = ActionModeCategory.PLAYLIST_LIST,
    )
    SLOTS.forEachIndexed { index, slot ->
      val globalIndex = page * SLOTS.size + index
      inventory.setItem(
          slot,
          when {
            globalIndex == 0 ->
                GuiItemBuilder(Material.RED_BUNDLE)
                    .name(Component.text("ストレージ", NamedTextColor.RED))
                    .lore(Component.text("レコード専用・最大20ページ", NamedTextColor.GRAY))
                    .build()
            globalIndex == FAVORITES_INDEX -> favoritesIcon(favoriteCount)
            globalIndex < createIndex -> playlistIcon(playlists[globalIndex - FIXED_SLOTS])
            globalIndex == createIndex && canCreate ->
                GuiItemBuilder(Material.WRITABLE_BOOK)
                    .name(Component.text("+ 新規プレイリスト作成", NamedTextColor.GREEN))
                    .build()
            else -> null
          },
      )
    }

    if (page == 0) inventory.setItem(ControllerSlots.PAGE_PREV, null)
    if (page == lastPage) inventory.setItem(ControllerSlots.PAGE_NEXT, null)
  }

  private fun favoritesIcon(favoriteCount: Int) =
      GuiItemBuilder(Material.NETHER_STAR)
          .name(Component.text("お気に入り", NamedTextColor.LIGHT_PURPLE))
          .lore(
              if (favoriteCount >= 0) Component.text("$favoriteCount 曲", NamedTextColor.GRAY)
              else Component.text("読み込み中...", NamedTextColor.GRAY),
              Component.text("クリックで開く", NamedTextColor.DARK_GRAY),
          )
          .build()

  private fun playlistIcon(playlist: Playlist): org.bukkit.inventory.ItemStack {
    val confirming = pendingDeletePlaylistId == playlist.id
    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    val lore =
        mutableListOf<Component>(Component.text("${playlist.songCount} 曲", NamedTextColor.GRAY))
    lore +=
        ActionLoreBuilder.build(
            viewer,
            prefix,
            ActionModeCategory.PLAYLIST_LIST,
            "開く",
            "共有",
            "名前変更",
            "削除",
        )
    if (confirming) lore += Component.text("もう一度Shift+右クリックで削除確定", NamedTextColor.RED)

    return GuiItemBuilder(Material.CHISELED_BOOKSHELF)
        .name(Component.text(playlist.name, NamedTextColor.YELLOW))
        .lore(lore)
        .glint(confirming)
        .build()
  }

  override fun onClick(event: InventoryClickEvent) {
    val slot = event.rawSlot
    if (slot == ControllerSlots.PAGE_PREV || slot == ControllerSlots.PAGE_NEXT) {
      val nextPage = page + if (slot == ControllerSlots.PAGE_NEXT) 1 else -1
      if (nextPage in 0..lastPage) {
        page = nextPage
        pendingDeletePlaylistId = null
        render()
      }
      return
    }
    if (
        NavTabRouter.handle(
            slot,
            NavTab.FAVORITES_PLAYLISTS,
            ActionModeCategory.PLAYLIST_LIST,
            plugin,
            menuManager,
            viewer,
        )
    )
        return
    if (plugin.playbackController.handleControllerClick(slot, viewer)) return

    val slotIndex = SLOTS.indexOf(slot)
    if (slotIndex == -1) return
    val index = page * SLOTS.size + slotIndex

    if (index == 0) {
      menuManager.open(viewer, RecordStorageScreen(plugin, menuManager, viewer))
      return
    }
    if (index == FAVORITES_INDEX) {
      pendingDeletePlaylistId = null
      menuManager.open(viewer, PlaylistDetailScreen.forFavorites(plugin, menuManager, viewer))
      return
    }

    val playlistIndex = index - FIXED_SLOTS
    val playlist = playlists.getOrNull(playlistIndex)
    if (playlist == null) {
      if (index == createIndex && canCreate) createPlaylist()
      return
    }
    if (playlist.id != pendingDeletePlaylistId) pendingDeletePlaylistId = null

    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    val action = resolveActionMode(viewer, event, ActionModeCategory.PLAYLIST_LIST, prefix)
    when (action) {
      ActionMode.PRIMARY ->
          menuManager.open(
              viewer,
              PlaylistDetailScreen.forPlaylist(plugin, menuManager, viewer, playlist),
          )
      ActionMode.SECONDARY -> sharePlaylist(playlist)
      ActionMode.TERTIARY -> renamePlaylist(playlist)
      ActionMode.QUATERNARY -> confirmOrDeletePlaylist(playlist)
    }
  }

  private fun createPlaylist() {
    AnvilTextInputSession.open(plugin, viewer, Component.text("新しいプレイリスト名")) { name ->
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                val created = plugin.playlistRepository.create(viewer.uniqueId, name) != null
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          viewer.sendMessage(
                              if (created) "§aプレイリスト「$name」を作成しました。"
                              else "§cプレイリストは最大${MAX_PLAYLISTS}個まで作成できます。"
                          )
                          reload(reopen = true)
                        },
                    )
              },
          )
    }
  }

  private fun renamePlaylist(playlist: Playlist) {
    AnvilTextInputSession.open(
        plugin,
        viewer,
        Component.text("プレイリスト名を変更"),
        initialText = playlist.name,
    ) { newName ->
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                plugin.playlistRepository.rename(requireNotNull(playlist.id), newName)
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          viewer.sendMessage("§aプレイリスト名を変更しました: $newName")
                          reload(reopen = true)
                        },
                    )
              },
          )
    }
  }

  private fun confirmOrDeletePlaylist(playlist: Playlist) {
    if (pendingDeletePlaylistId != playlist.id) {
      pendingDeletePlaylistId = playlist.id
      render()
      return
    }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              plugin.playlistRepository.delete(requireNotNull(playlist.id))
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        viewer.sendMessage("§aプレイリストを削除しました: ${playlist.name}")
                        pendingDeletePlaylistId = null
                        reload()
                      },
                  )
            },
        )
  }

  /**
   * 「共有」: 指定したオンラインプレイヤーへ、この曲順のままコピーしたプレイリストを 新規作成する形で送る。共有先はオンラインプレイヤーに限定する
   * （オフラインだと即座に通知できずUUID解決の確実性も下がるため）。 失敗パス（プレイヤーが見つからない等）も含め、必ず [reload] でGUIを再表示すること。
   */
  private fun sharePlaylist(playlist: Playlist) {
    AnvilTextInputSession.open(plugin, viewer, Component.text("共有先のプレイヤー名")) { targetName ->
      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                val target = Bukkit.getPlayerExact(targetName)
                if (target == null) {
                  viewer.sendMessage("§cオンラインのプレイヤーが見つかりません: $targetName")
                  reload(reopen = true)
                  return@Runnable
                }
                if (target.uniqueId == viewer.uniqueId) {
                  viewer.sendMessage("§c自分自身には共有できません。")
                  reload(reopen = true)
                  return@Runnable
                }
                Bukkit.getScheduler()
                    .runTaskAsynchronously(
                        plugin,
                        Runnable {
                          val songs =
                              plugin.playlistRepository.listSongs(requireNotNull(playlist.id))
                          val newPlaylistId =
                              plugin.playlistRepository.create(target.uniqueId, playlist.name)
                          if (newPlaylistId == null) {
                            Bukkit.getScheduler()
                                .runTask(
                                    plugin,
                                    Runnable {
                                      viewer.sendMessage(
                                          "§c${target.name} のプレイリストが上限（${MAX_PLAYLISTS}個）に達しているため共有できません。"
                                      )
                                      reload(reopen = true)
                                    },
                                )
                            return@Runnable
                          }
                          val copied =
                              songs.count { song ->
                                song.id?.let {
                                  plugin.playlistRepository.addSong(
                                      newPlaylistId,
                                      target.uniqueId,
                                      it,
                                      song.recordIdentity,
                                  )
                                } == AddSongResult.ADDED
                              }
                          Bukkit.getScheduler()
                              .runTask(
                                  plugin,
                                  Runnable {
                                    viewer.sendMessage(
                                        "§a${target.name} にプレイリスト「${playlist.name}」(${copied}曲)を共有しました。"
                                    )
                                    target.sendMessage(
                                        "§d${viewer.name} からプレイリスト「${playlist.name}」が共有されました！ §7(ストレージ・お気に入り・プレイリストに追加されました)"
                                    )
                                    reload(reopen = true)
                                  },
                              )
                        },
                    )
              },
          )
    }
  }
}
