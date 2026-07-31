package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.model.Song
import net.kyori.adventure.bossbar.BossBar
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitTask
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/**
 * 再生・一時停止・ループ・シャッフル等、下段メディアコントローラーに関する状態変更を
 * 一箇所に集約するコントローラー。
 *
 * 再生に関する操作は必ずこのクラスを経由し、状態変更後は
 * [MenuManager.refreshCurrent]で開いている画面を更新する。再生状態とGUI表示を同じ
 * データ源に揃えることで、曲名・再生中表示・ボスバーの不整合を防ぐ。
 */
class PlaybackController(private val plugin: OyasaiMusic, private val menuManager: MenuManager) {

    companion object {
        private const val TRACK_TRANSITION_TICKS = 15L // 0.75秒
    }

    private val nowPlayingBars = ConcurrentHashMap<UUID, BossBar>()
    private val bossBarTasks = ConcurrentHashMap<UUID, BukkitTask>()

    /**
     * Minecraft のボスバー色はクライアント仕様により7色の列挙値だけであり、任意の RGB 値には
     * できない。そのため文字色は指定 RGB をそのまま使い、バー本体は最も近い標準色へ対応付ける。
     */
    private data class RecordBossBarStyle(val textColor: TextColor, val barColor: BossBar.Color)

    /**
     * 楽曲を再生する。既に何か再生中であればまず停止してから開始する（多重再生防止）。
     * @param onCompletion 再生完了時に追加で呼びたい処理（プレイリストの連続再生等）。
     *        状態のリセット・GUI再描画は本メソッドが自動的に行うため、ここには含めなくてよい。
     */
    fun play(
        viewer: Player,
        song: Song,
        onCompletion: (() -> Unit)? = null,
        rememberInHistory: Boolean = true,
    ) {
        val songId = song.id
        if (songId == null) {
            viewer.sendMessage("§c保存前の楽曲は再生できません。")
            return
        }
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val file = File(plugin.audioDirectory, song.fileName)
            if (!file.exists()) {
                Bukkit.getScheduler().runTask(plugin, Runnable { viewer.sendMessage("§c音源ファイルが見つかりません。") })
                return@Runnable
            }
            val audio = try {
                SongAudioFile.read(file)
            } catch (e: Exception) {
                plugin.logger.warning("音源ファイルの読み込みに失敗しました (${file.name}): ${e.message}")
                Bukkit.getScheduler().runTask(plugin, Runnable { viewer.sendMessage("§c音源ファイルが壊れているか、未対応の形式です。") })
                return@Runnable
            }
            if (audio.notes.isEmpty()) {
                Bukkit.getScheduler().runTask(plugin, Runnable { viewer.sendMessage("§7この楽曲には再生できる音符がありません。") })
                return@Runnable
            }
            Bukkit.getScheduler().runTask(plugin, Runnable {
                val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
                // 既に再生中のセッションがあれば止める（多重再生防止）。
                state.activeSession?.let { plugin.playbackEngine.stop(it) }
                hideNowPlayingBar(viewer)

                val mode = plugin.playbackModeService.resolve(viewer.uniqueId, song)
                val session = plugin.playbackEngine.play(
                    song = song,
                    notes = audio.notes,
                    recipients = listOf(viewer),
                    mode = mode,
                    onListenThresholdReached = { player, s ->
                        plugin.viewCountService.registerView(player, s, isAmbientPlayback = false) {
                            // 視聴回数がDBへ実際に記録できた時点でGUIを再描画し、
                            // 一覧等の「再生数」表示が最新化されるようにする。
                            menuManager.refreshCurrent(player.uniqueId)
                        }
                    },
                    onCompletion = { finishedSession ->
                        val s2 = plugin.controllerStateService.stateFor(viewer.uniqueId)
                        if (s2.activeSession?.sessionId == finishedSession.sessionId) {
                            s2.isPlaying = false
                            s2.activeSession = null
                            hideNowPlayingBar(viewer)
                            menuManager.refreshCurrent(viewer.uniqueId)
                            onCompletion?.invoke()
                        }
                    },
                )
                state.isPlaying = true
                state.nowPlayingSong = song
                state.activeSession = session
                showNowPlayingBar(viewer, song, session, audio.totalDurationMs)
                if (rememberInHistory) rememberSong(state, song)
                menuManager.refreshCurrent(viewer.uniqueId)
            })
        })
    }

    /**
     * 下段「再生/一時停止」ボタン。
     * 再生中のセッションが無くても、直前に再生していた曲([PlayerControllerState.nowPlayingSong])が
     * 残っていればそれを再生し直す（サヒュヤ氏の指示: 「再生が終了した後、もう一度下段の再生ボタンを
     * 押したら再生できるように」。次の曲を再生するまでは最後に再生した曲を覚えておく）。
     */
    fun togglePlayPause(viewer: Player) {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        val session = state.activeSession
        if (session == null) {
            val lastSong = state.nowPlayingSong
            if (lastSong != null) {
                play(viewer, lastSong)
            } else {
                viewer.sendMessage("§7再生中の曲がありません。曲を選んで再生してください。")
            }
            return
        }
        if (state.isPlaying) {
            plugin.playbackEngine.pause(session)
            state.isPlaying = false
            GuiFeedback.info(viewer, "一時停止しました。", NamedTextColor.YELLOW)
        } else {
            plugin.playbackEngine.resume(session)
            state.isPlaying = true
            GuiFeedback.info(viewer, "再生を再開しました。", NamedTextColor.GREEN)
        }
        menuManager.refreshCurrent(viewer.uniqueId)
    }

    /** 下段「再生中の曲」ボタン。再生中の曲の楽曲詳細画面を開く。 */
    fun openNowPlayingDetail(viewer: Player) {
        val song = plugin.controllerStateService.stateFor(viewer.uniqueId).nowPlayingSong
        if (song == null) {
            viewer.sendMessage("§7現在再生中の曲はありません。")
            return
        }
        menuManager.open(viewer, SongDetailScreen(plugin, menuManager, viewer, song))
    }

    fun toggleLoop(viewer: Player) {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        state.loopMode = when (state.loopMode) {
            LoopMode.OFF -> LoopMode.LIST
            LoopMode.LIST -> LoopMode.SINGLE
            LoopMode.SINGLE -> LoopMode.OFF
        }
        menuManager.refreshCurrent(viewer.uniqueId)
    }

    fun toggleShuffle(viewer: Player) {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        state.shuffle = !state.shuffle
        menuManager.refreshCurrent(viewer.uniqueId)
    }

    /** 曲間の統一クールタイム（0.75秒）後に、ループ/シャッフル状態を再評価して遷移する。 */
    fun scheduleTrackTransition(viewer: Player, action: () -> Unit) {
        Bukkit.getScheduler().runTaskLater(plugin, Runnable {
            if (viewer.isOnline) action()
        }, TRACK_TRANSITION_TICKS)
    }

    /** 設定変更直後に、再生中表示とボスバーを最新の題名・作者・レコード種別へ差し替える。 */
    fun applySongMetadataUpdate(updatedSong: Song) {
        Bukkit.getOnlinePlayers().forEach { player ->
            val state = plugin.controllerStateService.stateFor(player.uniqueId)
            if (state.nowPlayingSong?.id != updatedSong.id) return@forEach
            state.nowPlayingSong = updatedSong
            nowPlayingBars[player.uniqueId]?.let { bar ->
                val style = bossBarStyle(updatedSong.recordMaterial)
                val authorName = Bukkit.getOfflinePlayer(updatedSong.authorUuid).name ?: "不明"
                bar.name(Component.text("♪ ${updatedSong.title} - $authorName", style.textColor))
                bar.color(style.barColor)
            }
        }
    }

    /** 試聴履歴の直前の楽曲へ戻る。プレイリストを開いていない画面でも利用できる。 */
    fun playPrevious(viewer: Player) = moveInHistory(viewer, -1, "前の曲はありません")

    /** 試聴履歴の次の楽曲へ進む。 */
    fun playNext(viewer: Player) = moveInHistory(viewer, 1, "次の曲はありません")

    private fun moveInHistory(viewer: Player, direction: Int, noSongMessage: String) {
        val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
        val targetIndex = state.listeningHistoryIndex + direction
        val target = state.listeningHistory.getOrNull(targetIndex)
        if (target == null) {
            GuiFeedback.invalid(viewer, noSongMessage)
            return
        }
        state.listeningHistoryIndex = targetIndex
        play(viewer, target, rememberInHistory = false)
    }

    private fun rememberSong(state: PlayerControllerState, song: Song) {
        // 同じ曲を再生/再開しただけなら履歴を重複させない。
        if (state.listeningHistory.getOrNull(state.listeningHistoryIndex)?.id == song.id) return
        if (state.listeningHistoryIndex < state.listeningHistory.lastIndex) {
            state.listeningHistory.subList(state.listeningHistoryIndex + 1, state.listeningHistory.size).clear()
        }
        state.listeningHistory += song
        state.listeningHistoryIndex = state.listeningHistory.lastIndex
    }

    /**
     * 下段メディアコントローラーの共通クリック処理。各画面のonClickから呼び出す。
     * PREV_SONG/NEXT_SONG はプレイヤーごとの試聴履歴を利用するため、一覧・詳細・コマンド試聴の
     * いずれからでも前後の曲に移動できる。
     *
     * @return true = ここで処理した（呼び出し元は追加のswitch分岐が不要）
     */
    fun handleControllerClick(slot: Int, viewer: Player): Boolean {
        when (slot) {
            ControllerSlots.PLAY_PAUSE -> togglePlayPause(viewer)
            ControllerSlots.NOW_PLAYING -> openNowPlayingDetail(viewer)
            ControllerSlots.LOOP -> toggleLoop(viewer)
            ControllerSlots.SHUFFLE -> toggleShuffle(viewer)
            ControllerSlots.PREV_SONG -> playPrevious(viewer)
            ControllerSlots.NEXT_SONG -> playNext(viewer)
            else -> return false
        }
        return true
    }

    private fun showNowPlayingBar(viewer: Player, song: Song, session: com.github.sahyuya.oyasaiMusic.audio.PlaybackSession, durationMs: Int) {
        val style = bossBarStyle(song.recordMaterial)
        val authorName = Bukkit.getOfflinePlayer(song.authorUuid).name ?: "不明"
        val bar = BossBar.bossBar(
            Component.text("♪ ${song.title} - $authorName", style.textColor),
            0f,
            style.barColor,
            BossBar.Overlay.PROGRESS,
        )
        nowPlayingBars[viewer.uniqueId] = bar
        viewer.showBossBar(bar)
        val safeDuration = durationMs.coerceAtLeast(1).toLong()
        bossBarTasks.remove(viewer.uniqueId)?.cancel()
        bossBarTasks[viewer.uniqueId] = Bukkit.getScheduler().runTaskTimer(plugin, Runnable {
            if (!viewer.isOnline || session.isCancelled || plugin.controllerStateService.stateFor(viewer.uniqueId).activeSession?.sessionId != session.sessionId) {
                hideNowPlayingBar(viewer)
                return@Runnable
            }
            bar.progress((session.elapsedPlaybackMs().toDouble() / safeDuration).coerceIn(0.0, 1.0).toFloat())
        }, 0L, 2L)
    }

    private fun hideNowPlayingBar(viewer: Player) {
        bossBarTasks.remove(viewer.uniqueId)?.cancel()
        nowPlayingBars.remove(viewer.uniqueId)?.let { viewer.hideBossBar(it) }
    }

    private fun bossBarStyle(recordMaterial: String): RecordBossBarStyle = when (recordMaterial.uppercase()) {
        "MUSIC_DISC_13" -> recordBossBarStyle("FCFCFC", BossBar.Color.YELLOW)
        "MUSIC_DISC_CAT" -> recordBossBarStyle("4BFC00", BossBar.Color.GREEN)
        "MUSIC_DISC_BLOCKS" -> recordBossBarStyle("DF533A", BossBar.Color.RED)
        "MUSIC_DISC_CHIRP" -> recordBossBarStyle("D80003", BossBar.Color.RED)
        "MUSIC_DISC_FAR" -> recordBossBarStyle("71CA32", BossBar.Color.GREEN)
        "MUSIC_DISC_MALL" -> recordBossBarStyle("8268CA", BossBar.Color.PURPLE)
        "MUSIC_DISC_MELLOHI" -> recordBossBarStyle("FCFCFC", BossBar.Color.PURPLE)
        "MUSIC_DISC_STAL" -> recordBossBarStyle("484848", BossBar.Color.PURPLE)
        "MUSIC_DISC_STRAD" -> recordBossBarStyle("FCFCFC", BossBar.Color.WHITE)
        "MUSIC_DISC_WARD" -> recordBossBarStyle("8CC400", BossBar.Color.GREEN)
        "MUSIC_DISC_11" -> recordBossBarStyle("252525", BossBar.Color.PURPLE)
        "MUSIC_DISC_WAIT" -> recordBossBarStyle("6D89B1", BossBar.Color.BLUE)
        "MUSIC_DISC_PIGSTEP" -> recordBossBarStyle("F4D049", BossBar.Color.RED)
        "MUSIC_DISC_OTHERSIDE" -> recordBossBarStyle("3989C2", BossBar.Color.GREEN)
        "MUSIC_DISC_5" -> recordBossBarStyle("0F8484", BossBar.Color.BLUE)
        "MUSIC_DISC_RELIC" -> recordBossBarStyle("42A3E2", BossBar.Color.RED)
        "MUSIC_DISC_CREATOR" -> recordBossBarStyle("F6CC78", BossBar.Color.GREEN)
        "MUSIC_DISC_CREATOR_MUSIC_BOX" -> recordBossBarStyle("F6CC78", BossBar.Color.YELLOW)
        "MUSIC_DISC_PRECIPICE" -> recordBossBarStyle("DE8368", BossBar.Color.GREEN)
        "MUSIC_DISC_TEARS" -> recordBossBarStyle("9DC1C1", BossBar.Color.WHITE)
        "MUSIC_DISC_LAVA_CHICKEN" -> recordBossBarStyle("FCFCF6", BossBar.Color.RED)
        else -> recordBossBarStyle("FCFCFC", BossBar.Color.YELLOW)
    }

    private fun recordBossBarStyle(textHex: String, barColor: BossBar.Color): RecordBossBarStyle =
        RecordBossBarStyle(TextColor.color(textHex.toInt(16)), barColor)
}
