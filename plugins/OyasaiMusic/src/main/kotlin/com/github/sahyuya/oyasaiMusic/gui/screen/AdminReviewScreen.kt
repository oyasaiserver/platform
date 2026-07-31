package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.db.ReviewSort
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.model.SongStatus
import java.io.File
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * OP用の審査・履歴管理画面。 メインメニューの管理項目から開き、公開状態とは独立した審査状態を変更する。
 *
 * 右クリックは審査状態を循環し、Shift右クリックは二段階確認で却下する。 審査済みの楽曲には光沢と判定結果を表示し、後からの判定変更も許可する。
 */
class AdminReviewScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
) : BaseGridMenu(viewer, Component.text("審査・履歴管理")) {

  companion object {
    const val PAGE_SIZE = 40
    val SLOTS: List<Int> = ContentGrid.SLOTS
    private val AVAILABLE_SORTS =
        listOf(
            ReviewSort.NEWEST,
            ReviewSort.OLDEST,
            ReviewSort.UNREVIEWED_OLDEST_FIRST,
            ReviewSort.REVIEWED_NEWEST_FIRST,
        )
  }

  private var sortIndex = 0
  private var page = 0
  private var pageSongs: List<Song> = emptyList()
  private var pendingRejectId: Long? = null

  init {
    if (hasAccess()) reload() else renderNoAccess()
  }

  override fun refresh() = if (hasAccess()) reload() else renderNoAccess()

  private fun hasAccess(): Boolean = viewer.hasPermission("oyasaimusic.admin")

  private fun renderNoAccess() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
        inventory,
        null,
        state,
        sortLabel = "-",
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = null,
    )
    inventory.setItem(
        11,
        GuiItemBuilder(Material.BARRIER)
            .name(Component.text("権限がありません", NamedTextColor.RED))
            .build(),
    )
    inventory.setItem(ControllerSlots.PAGE_PREV, GuiChrome.backControllerButton())
  }

  private fun currentSort() = AVAILABLE_SORTS[sortIndex]

  private fun reload() {
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val songs =
                  plugin.songRepository.listForReview(currentSort(), PAGE_SIZE, page * PAGE_SIZE)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        pageSongs = songs
                        render()
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
        sortLabel = sortLabel(currentSort()),
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = null,
    )

    SLOTS.forEachIndexed { index, slot ->
      inventory.setItem(slot, pageSongs.getOrNull(index)?.let(::songIcon))
    }
    if (page == 0) inventory.setItem(ControllerSlots.PAGE_PREV, GuiChrome.backControllerButton())
  }

  private fun sortLabel(sort: ReviewSort): String =
      when (sort) {
        ReviewSort.NEWEST -> "新着順"
        ReviewSort.OLDEST -> "古い順"
        ReviewSort.UNREVIEWED_OLDEST_FIRST -> "未審査古い順"
        ReviewSort.REVIEWED_NEWEST_FIRST -> "審査済新着順"
      }

  private fun statusLabel(status: SongStatus): String =
      when (status) {
        SongStatus.DRAFT -> "未審査"
        SongStatus.TEMP_OK -> "仮OK（申請済）"
        SongStatus.PERMANENT_OK -> "許可"
        SongStatus.REJECTED -> "却下"
      }

  private fun songIcon(song: Song): org.bukkit.inventory.ItemStack {
    val reviewed = song.status == SongStatus.PERMANENT_OK || song.status == SongStatus.REJECTED
    val confirming = pendingRejectId == song.id
    val authorName = Bukkit.getOfflinePlayer(song.authorUuid).name ?: "不明"
    val lore =
        mutableListOf(
            Component.text("作者: $authorName", NamedTextColor.GRAY),
            Component.text("公開: ${if (song.published) "公開中" else "非公開"}", NamedTextColor.GRAY),
            Component.text(
                "依頼: ${if (song.reviewRequestedAt != null) "あり" else "履歴のみ"}",
                NamedTextColor.GRAY,
            ),
            Component.text(
                "判定: ${statusLabel(song.status)}",
                when (song.status) {
                  SongStatus.PERMANENT_OK -> NamedTextColor.GREEN
                  SongStatus.REJECTED -> NamedTextColor.RED
                  else -> NamedTextColor.YELLOW
                },
            ),
            Component.text("左:再生 Shift+左:詳細", NamedTextColor.DARK_GRAY),
            Component.text("右:許可/未審査/却下を切替 Shift+右:却下", NamedTextColor.DARK_GRAY),
        )
    if (confirming) lore += Component.text("もう一度Shift+右クリックで却下確定", NamedTextColor.RED)

    return GuiItemBuilder(Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13)
        .name(songTitle(song))
        .lore(lore)
        .glint(reviewed)
        .build()
  }

  override fun onClick(event: InventoryClickEvent) {
    val slot = event.rawSlot
    if (slot == ControllerSlots.PAGE_PREV && page == 0) {
      menuManager.openPrevious(viewer)
      return
    }
    if (!hasAccess()) return
    if (NavTabRouter.handle(slot, null, null, plugin, menuManager, viewer)) return
    if (plugin.playbackController.handleControllerClick(slot, viewer)) return

    when (slot) {
      ControllerSlots.SORT -> {
        sortIndex = (sortIndex + 1) % AVAILABLE_SORTS.size
        page = 0
        reload()
      }
      ControllerSlots.PAGE_PREV ->
          if (page > 0) {
            page--
            reload()
          }
      ControllerSlots.PAGE_NEXT ->
          if (pageSongs.size == PAGE_SIZE) {
            page++
            reload()
          }
      else -> {
        val index = SLOTS.indexOf(slot)
        if (index == -1) return
        val song = pageSongs.getOrNull(index) ?: return
        if (song.id != pendingRejectId) pendingRejectId = null
        handleSongClick(event, song)
      }
    }
  }

  private fun handleSongClick(event: InventoryClickEvent, song: Song) {
    when (event.click) {
      ClickType.SHIFT_LEFT ->
          menuManager.open(viewer, SongDetailScreen(plugin, menuManager, viewer, song))
      ClickType.RIGHT -> cycleApproval(song)
      ClickType.SHIFT_RIGHT -> confirmOrReject(song)
      else -> playSong(song)
    }
  }

  private fun playSong(song: Song) {
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val file = File(plugin.audioDirectory, song.fileName)
              if (!file.exists()) {
                Bukkit.getScheduler()
                    .runTask(plugin, Runnable { viewer.sendMessage("§c音源ファイルが見つかりません。") })
                return@Runnable
              }
              val audio = SongAudioFile.read(file)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        plugin.playbackController.play(viewer, song)
                        // 試聴のみ目的のため視聴回数・報酬は計上しない（onListenThresholdReachedを渡さない）。
                      },
                  )
            },
        )
  }

  private fun cycleApproval(song: Song) {
    val next =
        when (song.status) {
          // 申請直後の仮OKは、OPが最初に「許可」へ確定するための暫定状態。
          SongStatus.TEMP_OK -> SongStatus.PERMANENT_OK
          SongStatus.PERMANENT_OK -> SongStatus.DRAFT
          SongStatus.DRAFT -> SongStatus.REJECTED
          SongStatus.REJECTED -> SongStatus.PERMANENT_OK
        }
    applyStatus(song, next)
  }

  private fun confirmOrReject(song: Song) {
    if (pendingRejectId != song.id) {
      pendingRejectId = song.id
      render()
      return
    }
    pendingRejectId = null
    applyStatus(song, SongStatus.REJECTED)
  }

  private fun applyStatus(song: Song, status: SongStatus) {
    val songId = song.id ?: return
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              plugin.songRepository.updateStatus(songId, status)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        viewer.sendMessage("§a判定を更新しました: ${song.title} → ${statusLabel(status)}")
                        val author = Bukkit.getPlayer(song.authorUuid)
                        author?.sendMessage(
                            "§d[OyasaiMusic] §f「${song.title}」の審査結果: ${statusLabel(status)}"
                        )
                        reload()
                      },
                  )
            },
        )
  }
}
