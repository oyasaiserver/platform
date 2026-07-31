package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordItem
import com.github.sahyuya.oyasaiMusic.util.HeadTextureUtil
import com.github.sahyuya.oyasaiMusic.model.Song
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import com.github.sahyuya.oyasaiMusic.economy.PayoutResult

/**
 * 楽曲の試聴、作者情報、ソーシャル操作、レコード購入をまとめた詳細画面。
 * 操作項目を優先して配置し、未使用の外周スロットだけを装飾する。
 */
class SongDetailScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
    initialSong: Song,
) : BaseGridMenu(viewer, Component.text("楽曲詳細")), SongUpdateAware {

    private val previewSlot = 11   // クリックで再生
    private val authorHeadSlot = 12 // クリックで作者プロフィール(作品一覧)へ
    private val followSlot = 21     // クリックでフォロー切替
    private val positionalModeSlot = 14 // 通常/立体音響再生の選択（追加項目.txt対応。楽曲にPan指定が無い場合は選択不可）
    private val settingsSlot = 15     // 作者/OPのみ: 楽曲設定画面へ（UI/UX設計書表には無いが実用上必要なため追加）
    private val likeSlot = 20         // クリックでいいね
    private val favoriteSlot = 22     // クリックでお気に入り/プレイリスト追加
    private val buyRecordSlot = 23    // レコードを購入（サヒュヤ氏の指示で追加。UI/UX設計書7章のレコード販売に対応）
    private val referenceUrlSlot = 24 // クリックで参考リンクをチャット出力
    private val backSlot = 37         // サヒュヤ氏指定: 戻る(矢)

    private var song: Song = initialSong
    private var isFollowing = false
    private var hasLiked = false
    private var currentPlaybackMode: com.github.sahyuya.oyasaiMusic.audio.PlaybackMode = com.github.sahyuya.oyasaiMusic.audio.PlaybackMode.DEFAULT

    init {
        render()
        loadSocialState()
    }

    override fun refresh() = render()

    override fun onSongUpdated(updatedSong: Song) {
        if (song.id == updatedSong.id) {
            song = updatedSong
            render()
        }
    }

    private fun loadSocialState() {
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val following = plugin.socialRepository.listFollowingUuids(viewer.uniqueId).contains(song.authorUuid)
            val liked = plugin.socialRepository.hasLiked(viewer.uniqueId, requireNotNull(song.id))
            val mode = plugin.playbackModeService.resolve(viewer.uniqueId, song)
            Bukkit.getScheduler().runTask(plugin, Runnable {
                isFollowing = following
                hasLiked = liked
                currentPlaybackMode = mode
                render()
            })
        })
    }

    private fun render() {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        GuiChrome.render(inventory, null, state, sortLabel = "-", viewer = viewer, plugin = plugin, actionModeCategory = null)

        inventory.setItem(previewSlot, previewItem(state))
        inventory.setItem(authorHeadSlot, authorHeadItem())
        inventory.setItem(followSlot, followItem())
        inventory.setItem(positionalModeSlot, positionalModeItem())
        inventory.setItem(likeSlot, likeItem())
        inventory.setItem(favoriteSlot, GuiItemBuilder(Material.CHISELED_BOOKSHELF)
            .name(Component.text("お気に入り/プレイリストに追加", NamedTextColor.YELLOW)).build())
        inventory.setItem(buyRecordSlot, buyRecordItem())
        inventory.setItem(referenceUrlSlot, referenceUrlItem())
        if (song.authorUuid == viewer.uniqueId || viewer.hasPermission("oyasaimusic.admin")) {
            inventory.setItem(settingsSlot, GuiItemBuilder(Material.COMPARATOR)
                .name(Component.text("楽曲設定を開く", NamedTextColor.LIGHT_PURPLE)).build())
        } else {
            inventory.setItem(settingsSlot, null)
        }
        inventory.setItem(backSlot, GuiChrome.contentBackButton())

        ContentGrid.fillBorderIfEmpty(inventory, Material.YELLOW_STAINED_GLASS_PANE)
    }

    private fun previewItem(state: com.github.sahyuya.oyasaiMusic.gui.PlayerControllerState): org.bukkit.inventory.ItemStack {
        val nowPlaying = state.isPlaying && state.nowPlayingSong?.id == song.id
        return GuiItemBuilder(Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13)
            .name(songTitle(song))
            .lore(
                Component.text("いいね: ${song.likes}  再生数: ${song.views}", NamedTextColor.GRAY),
                Component.text("BPM: ${song.bpm}", NamedTextColor.GRAY),
                Component.text("クリックで再生", NamedTextColor.DARK_GRAY),
                *(if (nowPlaying) arrayOf(Component.text("♪ 再生中", NamedTextColor.GREEN)) else emptyArray()),
            )
            .glint(nowPlaying)
            .build()
    }

    private fun buyRecordItem() = GuiItemBuilder(Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13)
        .name(Component.text("レコードを購入", NamedTextColor.GOLD))
        .lore(
            Component.text("価格: ${song.price}円", NamedTextColor.GRAY),
            Component.text("クリックで購入", NamedTextColor.DARK_GRAY),
            Component.text("購入額の80%は収益化対象の作者へ還元されます", NamedTextColor.DARK_GRAY),
        )
        .build()

    private fun authorHeadItem(): org.bukkit.inventory.ItemStack {
        val name = Bukkit.getOfflinePlayer(song.authorUuid).name ?: "不明"
        val stats = AuthorStatsCache.get(plugin, song.authorUuid) { render() }
        val item = HeadTextureUtil.placeholderHead(song.authorUuid, name)
        item.editMeta { meta ->
            meta.displayName(Component.text("作者: $name", NamedTextColor.GOLD).decoration(TextDecoration.ITALIC, false))
            meta.lore(buildList {
                add(Component.text("クリックで作品一覧へ", NamedTextColor.GRAY))
                if (stats == null) add(Component.text("統計を読み込み中...", NamedTextColor.DARK_GRAY))
                else {
                    add(Component.text("総いいね数: ${stats.totalLikes}", NamedTextColor.GRAY))
                    add(Component.text("総お気に入り数: ${stats.totalFavorites}", NamedTextColor.GRAY))
                    add(Component.text("総視聴回数: ${stats.totalViews}", NamedTextColor.GRAY))
                    add(Component.text("総フォロワー数: ${stats.totalFollowers}", NamedTextColor.GRAY))
                }
            }.map { it.decoration(TextDecoration.ITALIC, false) })
        }
        return item
    }

    private fun followItem() = GuiItemBuilder(Material.TOTEM_OF_UNDYING)
        .name(Component.text(if (isFollowing) "フォロー中" else "フォローする", if (isFollowing) NamedTextColor.GREEN else NamedTextColor.YELLOW))
        .lore(Component.text("クリックで切替", NamedTextColor.DARK_GRAY))
        .glint(isFollowing)
        .build()

    /**
     * 通常(デフォルト)再生 / 立体音響再生の選択（追加項目.txt対応）。
     * 「立体音響再生は楽曲詳細GUIを開いた際に、個々のリスナーが…選べて、その再生方法の選択を
     * 保存する。ただし、その楽曲にPanの指定がない場合は通常再生のみ可能。」に準拠し、
     * [Song.supportsPositional] がfalseの楽曲ではクリックしても切り替わらない。
     */
    private fun positionalModeItem(): org.bukkit.inventory.ItemStack {
        val positional = currentPlaybackMode == com.github.sahyuya.oyasaiMusic.audio.PlaybackMode.POSITIONAL
        if (!song.supportsPositional) {
            return GuiItemBuilder(Material.GRAY_DYE)
                .name(Component.text("通常再生のみ対応", NamedTextColor.DARK_GRAY))
                .lore(Component.text("この楽曲にはPan指定がありません", NamedTextColor.DARK_GRAY))
                .build()
        }
        return GuiItemBuilder(if (positional) Material.ENDER_EYE else Material.ENDER_PEARL)
            .name(Component.text(if (positional) "立体音響再生" else "通常再生", NamedTextColor.LIGHT_PURPLE))
            .lore(
                Component.text("クリックで切替", NamedTextColor.DARK_GRAY),
                Component.text("(この選択は自分専用に保存されます)", NamedTextColor.DARK_GRAY),
            )
            .glint(positional)
            .build()
    }

    private fun referenceUrlItem() = GuiItemBuilder(Material.SPYGLASS)
        .name(Component.text("参考リンク", NamedTextColor.YELLOW))
        .lore(
            Component.text(song.referenceUrl ?: "未設定", NamedTextColor.GRAY),
            Component.text("クリックでチャットへ出力", NamedTextColor.DARK_GRAY),
        )
        .build()

    private fun likeItem() = GuiItemBuilder(Material.CHERRY_STAIRS)
        .name(Component.text(if (hasLiked) "いいね済み" else "いいね", if (hasLiked) NamedTextColor.GREEN else NamedTextColor.YELLOW))
        .lore(Component.text("総いいね数: ${song.likes}", NamedTextColor.GRAY))
        .glint(hasLiked)
        .build()


    override fun onClick(event: InventoryClickEvent) {
        val slot = event.rawSlot
        if (slot == backSlot) {
            menuManager.openPrevious(viewer)
            return
        }
        if (NavTabRouter.handle(slot, null, null, plugin, menuManager, viewer)) return
        if (plugin.playbackController.handleControllerClick(slot, viewer)) return

        when (slot) {
            previewSlot -> playSong()
            authorHeadSlot -> openAuthorProfile()
            followSlot -> toggleFollow()
            positionalModeSlot -> togglePlaybackMode()
            referenceUrlSlot -> outputReferenceUrl()
            likeSlot -> likeSong()
            favoriteSlot -> {
                if (!song.published) GuiFeedback.invalid(viewer, "非公開の楽曲は追加できません")
                else menuManager.open(viewer, PlaylistSelectionScreen(plugin, menuManager, viewer, song))
            }
            buyRecordSlot -> buyRecord()
            settingsSlot -> if (song.authorUuid == viewer.uniqueId || viewer.hasPermission("oyasaimusic.admin")) {
                menuManager.open(viewer, SongSettingsScreen(plugin, menuManager, viewer, song))
            }
        }
    }

    /** ループ=1曲の場合は再生完了後に同じ曲を再生し直す（サヒュヤ氏の指示「ループはどこでも」対応）。 */
    private fun playSong() {
        plugin.playbackController.play(viewer, song, onCompletion = {
            val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
            if (state.loopMode == com.github.sahyuya.oyasaiMusic.gui.LoopMode.SINGLE) {
                plugin.playbackController.scheduleTrackTransition(viewer) {
                    if (plugin.controllerStateService.stateFor(viewer.uniqueId).loopMode == com.github.sahyuya.oyasaiMusic.gui.LoopMode.SINGLE) {
                        playSong()
                    }
                }
            }
        })
    }

    private fun buyRecord() {
        val songId = song.id ?: return
        val payment = plugin.economyService.withdraw(viewer, song.price.toLong())
        if (payment !is PayoutResult.Success) {
            val reason = when (payment) {
                is PayoutResult.Unavailable -> payment.reason
                is PayoutResult.Failed -> payment.reason
                PayoutResult.Success -> ""
            }
            viewer.sendMessage("§c購入できませんでした: $reason")
            return
        }
        val material = Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13
        val authorName = Bukkit.getOfflinePlayer(song.authorUuid).name ?: "不明"
        val item = PhysicalRecordItem.create(plugin, material, songId, song.title, authorName)
        val leftover = viewer.inventory.addItem(item)
        if (leftover.isNotEmpty()) {
            viewer.world.dropItemNaturally(viewer.location, item)
        }

        val authorShare = (song.price * plugin.config.getDouble("economy.record-sale-author-share", 0.8)).toLong()
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            if (song.isMonetizationEligible()) {
                plugin.userRepository.addPending(song.authorUuid, money = authorShare)
            }
        })
        viewer.sendMessage("§aレコードを受け取りました: ${song.title}")
        viewer.sendMessage("§7${song.price}円を支払いました。")
        viewer.sendMessage("§7Shift+右クリックで環境BGM設定（再生範囲/トリガー/ループ）を変更できます。")
    }

    private fun openAuthorProfile() {
        val name = Bukkit.getOfflinePlayer(song.authorUuid).name ?: "不明"
        menuManager.open(viewer, MainMenuScreens.authorWorks(plugin, menuManager, viewer, song.authorUuid, name))
    }

    private fun toggleFollow() {
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            if (isFollowing) {
                plugin.socialRepository.unfollow(viewer.uniqueId, song.authorUuid)
            } else {
                plugin.socialRepository.follow(viewer.uniqueId, song.authorUuid)
            }
            Bukkit.getScheduler().runTask(plugin, Runnable {
                isFollowing = !isFollowing
                viewer.sendMessage(if (isFollowing) "§aフォローしました。" else "§7フォローを解除しました。")
                render()
            })
        })
    }

    private fun togglePlaybackMode() {
        if (!song.supportsPositional) {
            viewer.sendMessage("§7この楽曲は通常再生のみ対応しています。")
            return
        }
        val next = if (currentPlaybackMode == com.github.sahyuya.oyasaiMusic.audio.PlaybackMode.POSITIONAL) {
            com.github.sahyuya.oyasaiMusic.audio.PlaybackMode.DEFAULT
        } else {
            com.github.sahyuya.oyasaiMusic.audio.PlaybackMode.POSITIONAL
        }
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            plugin.playbackModeService.setPreference(viewer.uniqueId, song, next)
            Bukkit.getScheduler().runTask(plugin, Runnable {
                currentPlaybackMode = next
                viewer.sendMessage("§a再生方式を変更しました: ${if (next == com.github.sahyuya.oyasaiMusic.audio.PlaybackMode.POSITIONAL) "立体音響再生" else "通常再生"}")
                render()
            })
        })
    }

    private fun outputReferenceUrl() {
        val url = song.referenceUrl
        if (url == null) {
            viewer.sendMessage("§7この楽曲には参考URLが設定されていません。")
            return
        }
        val message = Component.text("参考リンク: ", NamedTextColor.GOLD)
            .append(
                Component.text(url, NamedTextColor.AQUA)
                    .clickEvent(ClickEvent.openUrl(url)),
            )
        viewer.sendMessage(message)
    }

    private fun likeSong() {
        if (!song.published) {
            GuiFeedback.invalid(viewer, "非公開の楽曲にはいいねできません")
            return
        }
        if (hasLiked) {
            GuiFeedback.invalid(viewer, "既にいいね済みです。")
            return
        }
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val added = plugin.likeService.like(viewer.uniqueId, song)
            val refreshed = if (added) plugin.songRepository.findById(requireNotNull(song.id)) else null
            Bukkit.getScheduler().runTask(plugin, Runnable {
                if (added) {
                    hasLiked = true
                    if (refreshed != null) song = refreshed
                    GuiFeedback.info(viewer, "いいねしました: ${song.title}", NamedTextColor.GREEN)
                    Bukkit.getPlayer(song.authorUuid)?.let { author ->
                        plugin.toastNotificationService.showLikeReceived(author, song.title, viewer.name)
                    }
                    render()
                } else {
                    GuiFeedback.invalid(viewer, "既にいいね済みです。")
                }
            })
        })
    }
}
