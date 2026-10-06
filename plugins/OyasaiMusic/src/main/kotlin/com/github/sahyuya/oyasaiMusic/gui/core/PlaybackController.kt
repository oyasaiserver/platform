package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PlaybackMode
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.audio.VanillaSoundCatalog
import com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.Song
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.bossbar.BossBar
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scheduler.BukkitTask

/**
 * 再生・一時停止・ループ・シャッフル等、下段メディアコントローラーに関する状態変更を 一箇所に集約するコントローラー。
 *
 * 再生に関する操作は必ずこのクラスを経由し、状態変更後は [MenuManager.refreshCurrent]で開いている画面を更新する。再生状態とGUI表示を同じ
 * データ源に揃えることで、曲名・再生中表示・ボスバーの不整合を防ぐ。
 */
class PlaybackController(private val plugin: OyasaiMusic, private val menuManager: MenuManager) :
    Listener {

  companion object {
    private const val TRACK_TRANSITION_TICKS = 15L // 0.75秒
    private const val PAUSE_AUTO_FINISH_TICKS = 400L // 20秒。一時停止のまま放置したら終了扱いにする。
  }

  /** 一時停止の放置終了タイマー。キー=プレイヤー。発火・解除の全経路で除去する。 */
  private val pauseAutoFinishTasks = ConcurrentHashMap<UUID, BukkitTask>()

  private val nowPlayingBars = ConcurrentHashMap<UUID, BossBar>()
  private val bossBarTasks = ConcurrentHashMap<UUID, BukkitTask>()
  /** Kept while a personal playback session survives a disconnect, so its bar can be reattached. */
  private val nowPlayingDurations = ConcurrentHashMap<UUID, Int>()

  private class ListContext(var key: Any, var order: ListPlaybackOrder, val sequential: Boolean) {
    lateinit var completion: () -> Unit
    var updateGeneration = 0L
  }

  private val lists = mutableMapOf<UUID, ListContext>()
  private val requests = mutableMapOf<UUID, Long>()
  private var requestSerial = 0L
  private val transitions = mutableMapOf<UUID, BukkitTask>()

  private fun beginRequest(id: UUID): Long {
    transitions.remove(id)?.cancel()
    plugin.resourcePackService.discardPendingPlayback(id)
    return (++requestSerial).also { requests[id] = it }
  }

  /** Load the complete originating list once per selection, off the game thread. */
  fun playList(
      viewer: Player,
      selected: Song,
      key: Any,
      sequential: Boolean = false,
      loader: () -> List<Long>,
  ) {
    val id = viewer.uniqueId
    val existing = lists[id]
    if (existing?.key == key && selected.id in existing.order.ids) {
      existing.order.select(requireNotNull(selected.id))
      playListSong(viewer, existing, requireNotNull(selected.id))
      return
    }
    val generation = beginRequest(id)
    lists.remove(id)
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val order =
                  try {
                    ListPlaybackOrder(loader())
                  } catch (e: Exception) {
                    plugin.logger.warning("楽曲一覧の読み込みに失敗しました: " + e.javaClass.simpleName)
                    ListPlaybackOrder(emptyList())
                  }
              if (!plugin.isEnabled) return@Runnable
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!viewer.isOnline || requests[id] != generation) return@Runnable
                        val selectedId = selected.id
                        if (selectedId == null || selectedId !in order.ids) {
                          viewer.sendMessage("§cこの楽曲は現在の一覧から再生できません。")
                          return@Runnable
                        }
                        val context = ListContext(key, order, sequential)
                        lists[id] = context
                        context.completion = {
                          if (lists[id] === context)
                              scheduleTrackTransition(viewer) {
                                if (lists[id] === context) advanceList(viewer, context)
                              }
                        }
                        context.order.select(selectedId)
                        playListSong(viewer, context, selectedId)
                      },
                  )
            },
        )
  }

  /** Reset the shuffle bag after an explicit sort/edit, without restarting the current song. */
  fun updateList(viewer: Player, oldKey: Any, newKey: Any, loader: () -> List<Long>) {
    val id = viewer.uniqueId
    val context = lists[id]?.takeIf { it.key == oldKey } ?: return
    context.key = newKey
    val updateGeneration = ++context.updateGeneration
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val replacement =
                  try {
                    ListPlaybackOrder(loader())
                  } catch (e: Exception) {
                    plugin.logger.warning("再生リストの更新に失敗しました: " + e.javaClass.simpleName)
                    return@Runnable
                  }
              if (!plugin.isEnabled) return@Runnable
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (
                            !viewer.isOnline ||
                                lists[id] !== context ||
                                context.key != newKey ||
                                context.updateGeneration != updateGeneration
                        )
                            return@Runnable
                        context.order.current
                            ?.takeIf { it in replacement.ids }
                            ?.let(replacement::select)
                        context.order = replacement
                      },
                  )
            },
        )
  }

  private fun advanceList(viewer: Player, context: ListContext, manual: Boolean = false) {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    val next =
        context.order.next(
            state.shuffle,
            state.loopMode == LoopMode.LIST,
            !manual && state.loopMode == LoopMode.SINGLE,
            manual || context.sequential,
        ) ?: return
    playListSong(viewer, context, next)
  }

  private fun playListSong(viewer: Player, context: ListContext, songId: Long) {
    val id = viewer.uniqueId
    val generation = beginRequest(id)
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val song = plugin.songRepository.findById(songId)
              if (!plugin.isEnabled) return@Runnable
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!viewer.isOnline || requests[id] != generation || lists[id] !== context)
                            return@Runnable
                        if (song == null || !SongAccess.canListen(plugin, viewer, song)) {
                          lists.remove(id)
                          viewer.sendMessage("§7楽曲が削除または非公開になったため、リスト再生を終了しました。")
                          return@Runnable
                        }
                        play(viewer, song, onCompletion = context.completion)
                      },
                  )
            },
        )
  }

  fun shutdown() {
    transitions.values.forEach { it.cancel() }
    transitions.clear()
    lists.clear()
    requests.clear()
    nowPlayingBars.forEach { (id, bar) -> Bukkit.getPlayer(id)?.hideBossBar(bar) }
    bossBarTasks.values.forEach { it.cancel() }
    bossBarTasks.clear()
    pauseAutoFinishTasks.values.forEach { it.cancel() }
    pauseAutoFinishTasks.clear()
    nowPlayingBars.clear()
    nowPlayingDurations.clear()
  }

  /**
   * Minecraft のボスバー色はクライアント仕様により7色の列挙値だけであり、任意の RGB 値には できない。そのため文字色は指定 RGB
   * をそのまま使い、バー本体は最も近い標準色へ対応付ける。
   */
  private data class RecordBossBarStyle(val textColor: TextColor, val barColor: BossBar.Color)

  /**
   * 楽曲を再生する。既に何か再生中であればまず停止してから開始する（多重再生防止）。
   *
   * @param onCompletion 再生完了時に追加で呼びたい処理（プレイリストの連続再生等）。 状態のリセット・GUI再描画は本メソッドが自動的に行うため、ここには含めなくてよい。
   */
  fun play(
      viewer: Player,
      song: Song,
      onCompletion: (() -> Unit)? = null,
      rememberInHistory: Boolean = true,
      reviewPreview: Boolean = false,
  ) {
    val playerId = viewer.uniqueId
    val request = beginRequest(playerId)
    if (onCompletion !== lists[playerId]?.completion) lists.remove(playerId)
    val songId = song.id
    if (songId == null) {
      viewer.sendMessage("§c保存前の楽曲は再生できません。")
      return
    }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val song = plugin.songRepository.findById(songId) ?: return@Runnable
              val file = File(plugin.audioDirectory, song.fileName)
              if (!file.exists()) {
                Bukkit.getScheduler()
                    .runTask(plugin, Runnable { viewer.sendMessage("§c音源ファイルが見つかりません。") })
                return@Runnable
              }
              val audio =
                  try {
                    SongAudioFile.read(file)
                  } catch (e: Exception) {
                    plugin.logger.warning("音源ファイルの読み込みに失敗しました (${file.name}): ${e.message}")
                    Bukkit.getScheduler()
                        .runTask(
                            plugin,
                            Runnable { viewer.sendMessage("§c音源ファイルが壊れているか、未対応の形式です。") },
                        )
                    return@Runnable
                  }
              if (audio.notes.isEmpty()) {
                Bukkit.getScheduler()
                    .runTask(plugin, Runnable { viewer.sendMessage("§7この楽曲には再生できる音符がありません。") })
                return@Runnable
              }
              val preparedV1 = PlaybackBuffer.prepare(audio.notes)
              val customPattern: (NoteEvent) -> Int? = { note ->
                note.customSound?.let { event ->
                  note.customSoundSeed?.let { seed ->
                    VanillaSoundCatalog.patternForSeed(event, seed)
                  }
                }
              }
              val preparedV2Fold =
                  PlaybackMode.entries.associateWith { playbackMode ->
                    PlaybackBuffer.prepareV2(
                        notes = audio.notes,
                        spatialMode = if (playbackMode == PlaybackMode.POSITIONAL) 1 else 0,
                        customPattern = customPattern,
                    )
                  }
              val configuredManifest = plugin.resourcePackService.configuredManifestHash()
              val preparedV2Bank =
                  configuredManifest?.let { manifest ->
                    PlaybackMode.entries.associateWith { playbackMode ->
                      PlaybackBuffer.prepareV2(
                          notes = audio.notes,
                          spatialMode = if (playbackMode == PlaybackMode.POSITIONAL) 1 else 0,
                          bankPolicy = 1,
                          manifestHash = manifest,
                          customPattern = customPattern,
                      )
                    }
                  }
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!viewer.isOnline || requests[playerId] != request) return@Runnable
                        val mode = plugin.playbackModeService.resolve(viewer.uniqueId, song)
                        val startPlayback: (Boolean) -> Unit = startPlayback@{ useBufferedRoute ->
                          if (!viewer.isOnline || requests[playerId] != request)
                              return@startPlayback
                          if (
                              !(reviewPreview && viewer.hasPermission("oyasaimusic.admin")) &&
                                  !SongAccess.canListen(plugin, viewer, song)
                          ) {
                            viewer.sendMessage("§cこの楽曲を再生する権限がありません。限定品はレコードの所持が必要です。")
                            return@startPlayback
                          }
                          // Persisted ALLOW is not the same as a loaded pack. Resolve the current
                          // connection first and defer until either OMMT's matching bank or the
                          // external resource pack has actually been confirmed.
                          if (plugin.resourcePackService.requestIfNeeded(viewer)) {
                            plugin.resourcePackService.deferPlayback(
                                viewer.uniqueId,
                                song,
                                onCompletion,
                                rememberInHistory,
                                reviewPreview,
                            )
                            viewer.sendMessage("§e拡張音域を準備しています。完了後に再生を開始します。")
                            return@startPlayback
                          }
                          val prepared =
                              if (!useBufferedRoute) {
                                null
                              } else if (
                                  plugin.ommtPlaybackClientRegistry.supportsV2(viewer.uniqueId)
                              ) {
                                val loadedManifest =
                                    plugin.resourcePackService.manifestHashFor(viewer.uniqueId)
                                val bank = preparedV2Bank?.get(mode)
                                if (
                                    bank != null &&
                                        loadedManifest != null &&
                                        loadedManifest.contentEquals(bank.manifestHash) &&
                                        plugin.ommtPlaybackClientRegistry.supportsBankManifest(
                                            viewer.uniqueId
                                        )
                                ) {
                                  bank
                                } else {
                                  preparedV2Fold[mode]
                                }
                              } else {
                                preparedV1
                              }
                          // A manual play supersedes any deferred download playback.
                          plugin.resourcePackService.discardPendingPlayback(viewer.uniqueId)
                          val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
                          // 既に再生中のセッションがあれば止める（多重再生防止）。
                          cancelPauseAutoFinish(viewer.uniqueId)
                          state.activeSession?.let { plugin.playbackEngine.stop(it) }
                          hideNowPlayingBar(viewer)
                          val session =
                              plugin.playbackEngine.play(
                                  song = song,
                                  notes = audio.notes,
                                  recipients = listOf(viewer),
                                  mode = mode,
                                  prepared = prepared,
                                  onListenThresholdReached = listen@{ player, s ->
                                        if (reviewPreview) return@listen
                                        plugin.viewCountService.registerView(
                                            player,
                                            s,
                                            isAmbientPlayback = false,
                                        ) {
                                          // 視聴回数がDBへ実際に記録できた時点でGUIを再描画し、
                                          // 一覧等の「再生数」表示が最新化されるようにする。
                                          menuManager.refreshCurrent(player.uniqueId)
                                        }
                                      },
                                  onCompletion = { finishedSession ->
                                    val s2 = plugin.controllerStateService.stateFor(viewer.uniqueId)
                                    if (s2.activeSession?.sessionId == finishedSession.sessionId) {
                                      cancelPauseAutoFinish(viewer.uniqueId)
                                      s2.isPlaying = false
                                      s2.activeSession = null
                                      nowPlayingDurations.remove(viewer.uniqueId)
                                      hideNowPlayingBar(viewer)
                                      menuManager.refreshCurrent(viewer.uniqueId)
                                      if (requests[playerId] == request) onCompletion?.invoke()
                                    }
                                  },
                              )
                          state.isPlaying = true
                          state.nowPlayingSong = song
                          state.activeSession = session
                          showNowPlayingBar(viewer, song, session, audio.totalDurationMs)
                          if (rememberInHistory) rememberSong(state, song)
                          menuManager.refreshCurrent(viewer.uniqueId)
                        }
                        // POSITIONAL also supports buffered OMMT playback with spatialMode=1 and
                        // bank manifest.
                        // Previously POSITIONAL was forced to Paper (startPlayback(false)), which
                        // prevented
                        // OMMT client-side bank rendering and manifested as "allow downloads but
                        // not audible".
                        plugin.ommtPlaybackClientRegistry.resolveForPlayback(viewer) { buffered ->
                          // Negotiation may take seconds. Re-read policy after it, before any
                          // buffer is sent.
                          Bukkit.getScheduler()
                              .runTaskAsynchronously(
                                  plugin,
                                  Runnable {
                                    val latest = plugin.songRepository.findById(songId)
                                    if (!plugin.isEnabled) return@Runnable
                                    Bukkit.getScheduler()
                                        .runTask(
                                            plugin,
                                            Runnable {
                                              if (!viewer.isOnline || requests[playerId] != request)
                                                  return@Runnable
                                              if (
                                                  latest == null ||
                                                      latest.recordIdentity !=
                                                          song.recordIdentity ||
                                                      (!(reviewPreview &&
                                                          viewer.hasPermission(
                                                              "oyasaimusic.admin"
                                                          )) &&
                                                          !SongAccess.canListen(
                                                              plugin,
                                                              viewer,
                                                              latest,
                                                          ))
                                              ) {
                                                viewer.sendMessage("§cこの楽曲を再生する権限がありません。")
                                                return@Runnable
                                              }
                                              startPlayback(buffered)
                                            },
                                        )
                                  },
                              )
                        }
                      },
                  )
            },
        )
  }

  /**
   * 下段「再生/一時停止」ボタン。 再生中のセッションが無くても、直前に再生していた曲([PlayerControllerState.nowPlayingSong])が
   * 残っていればそれを再生し直す（サヒュヤ氏の指示: 「再生が終了した後、もう一度下段の再生ボタンを 押したら再生できるように」。次の曲を再生するまでは最後に再生した曲を覚えておく）。
   */
  fun togglePlayPause(viewer: Player) {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    val session = state.activeSession
    if (session == null) {
      val lastSong = state.nowPlayingSong
      if (lastSong != null) {
        val context = lists[viewer.uniqueId]
        if (context != null && lastSong.id in context.order.ids) {
          playListSong(viewer, context, requireNotNull(lastSong.id))
        } else play(viewer, lastSong)
      } else {
        viewer.sendMessage("§7再生中の曲がありません。曲を選んで再生してください。")
      }
      return
    }
    if (state.isPlaying) {
      plugin.playbackEngine.pause(session)
      state.isPlaying = false
      GuiFeedback.info(viewer, "一時停止しました。", NamedTextColor.YELLOW)
      schedulePauseAutoFinish(viewer, session)
    } else {
      cancelPauseAutoFinish(viewer.uniqueId)
      plugin.playbackEngine.resume(session)
      state.isPlaying = true
      GuiFeedback.info(viewer, "再生を再開しました。", NamedTextColor.GREEN)
    }
    menuManager.refreshCurrent(viewer.uniqueId)
  }

  private fun cancelPauseAutoFinish(playerId: UUID) {
    pauseAutoFinishTasks.remove(playerId)?.cancel()
  }

  /** 一時停止のまま20秒経過したら、その曲を再生終了扱いにする。ボスバーと再生進捗を 自然終了と同一にリセットする（`nowPlayingSong`/履歴は残し、再再生は可能）。 */
  private fun schedulePauseAutoFinish(
      viewer: Player,
      session: com.github.sahyuya.oyasaiMusic.audio.PlaybackSession,
  ) {
    cancelPauseAutoFinish(viewer.uniqueId)
    val playerId = viewer.uniqueId
    val sessionId = session.sessionId
    pauseAutoFinishTasks[playerId] =
        Bukkit.getScheduler()
            .runTaskLater(
                plugin,
                Runnable {
                  pauseAutoFinishTasks.remove(playerId)
                  val state = plugin.controllerStateService.stateFor(playerId)
                  val current = state.activeSession
                  if (current == null || current.sessionId != sessionId) return@Runnable
                  if (current.isCancelled || !current.isPaused || state.isPlaying) return@Runnable
                  plugin.playbackEngine.stop(current)
                  state.isPlaying = false
                  state.activeSession = null
                  nowPlayingDurations.remove(playerId)
                  Bukkit.getPlayer(playerId)
                      ?.takeIf { it.isOnline }
                      ?.let { online ->
                        hideNowPlayingBar(online)
                        menuManager.refreshCurrent(playerId)
                        GuiFeedback.info(online, "20秒間一時停止のため再生を終了しました。", NamedTextColor.GRAY)
                      }
                      ?: run {
                        bossBarTasks.remove(playerId)?.cancel()
                        nowPlayingBars.remove(playerId)
                      }
                },
                PAUSE_AUTO_FINISH_TICKS,
            )
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
    state.cycleLoopMode()
    menuManager.refreshCurrent(viewer.uniqueId)
  }

  fun toggleShuffle(viewer: Player) {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    state.toggleShuffleMode()
    menuManager.refreshCurrent(viewer.uniqueId)
  }

  /** 曲間の統一クールタイム（0.75秒）後に、ループ/シャッフル状態を再評価して遷移する。 */
  fun scheduleTrackTransition(viewer: Player, action: () -> Unit) {
    val id = viewer.uniqueId
    val generation = requests[id]
    transitions.remove(id)?.cancel()
    transitions[id] =
        Bukkit.getScheduler()
            .runTaskLater(
                plugin,
                Runnable {
                  transitions.remove(id)
                  if (viewer.isOnline && requests[id] == generation) action()
                },
                TRACK_TRANSITION_TICKS,
            )
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
        bar.name(
            nowPlayingName(
                updatedSong.title,
                authorName,
                style.textColor,
                state.activeSession?.elapsedPlaybackMs() ?: 0,
                (nowPlayingDurations[player.uniqueId] ?: 0).toLong(),
            )
        )
        bar.color(style.barColor)
      }
    }
  }

  /** List context wins; standalone playback retains history navigation. */
  fun playPrevious(viewer: Player) {
    val context = lists[viewer.uniqueId]
    if (context != null) {
      context.order.previous()?.let { playListSong(viewer, context, it) }
    } else moveInHistory(viewer, -1, "前の曲はありません")
  }

  /** Advance within the originating list, using its current shuffle mode. */
  fun playNext(viewer: Player) {
    val context = lists[viewer.uniqueId]
    if (context != null) advanceList(viewer, context, manual = true)
    else moveInHistory(viewer, 1, "次の曲はありません")
  }

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
      state.listeningHistory
          .subList(state.listeningHistoryIndex + 1, state.listeningHistory.size)
          .clear()
    }
    state.listeningHistory += song
    state.listeningHistoryIndex = state.listeningHistory.lastIndex
  }

  /**
   * 下段メディアコントローラーの共通クリック処理。各画面のonClickから呼び出す。 PREV_SONG/NEXT_SONG
   * はプレイヤーごとの試聴履歴を利用するため、一覧・詳細・コマンド試聴の いずれからでも前後の曲に移動できる。
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

  private fun showNowPlayingBar(
      viewer: Player,
      song: Song,
      session: com.github.sahyuya.oyasaiMusic.audio.PlaybackSession,
      durationMs: Int,
  ) {
    bossBarTasks.remove(viewer.uniqueId)?.cancel()
    nowPlayingBars.remove(viewer.uniqueId)?.let { viewer.hideBossBar(it) }
    nowPlayingDurations[viewer.uniqueId] = durationMs.coerceAtLeast(1)
    val style = bossBarStyle(song.recordMaterial)
    val authorName = Bukkit.getOfflinePlayer(song.authorUuid).name ?: "不明"
    val bar =
        BossBar.bossBar(
            nowPlayingName(
                song.title,
                authorName,
                style.textColor,
                session.elapsedPlaybackMs(),
                durationMs.toLong(),
            ),
            0f,
            style.barColor,
            BossBar.Overlay.PROGRESS,
        )
    nowPlayingBars[viewer.uniqueId] = bar
    viewer.showBossBar(bar)
    val safeDuration = durationMs.coerceAtLeast(1).toLong()
    var lastSecond = -1L
    bossBarTasks[viewer.uniqueId] =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  if (
                      !viewer.isOnline ||
                          session.isCancelled ||
                          plugin.controllerStateService
                              .stateFor(viewer.uniqueId)
                              .activeSession
                              ?.sessionId != session.sessionId
                  ) {
                    if (nowPlayingBars[viewer.uniqueId] === bar) hideNowPlayingBar(viewer)
                    return@Runnable
                  }
                  val elapsed = session.elapsedPlaybackMs().coerceIn(0L, safeDuration)
                  if (elapsed / 1000L != lastSecond) {
                    lastSecond = elapsed / 1000L
                    val currentSong =
                        plugin.controllerStateService.stateFor(viewer.uniqueId).nowPlayingSong
                            ?: song
                    val currentStyle = bossBarStyle(currentSong.recordMaterial)
                    bar.name(
                        nowPlayingName(
                            currentSong.title,
                            authorName,
                            currentStyle.textColor,
                            elapsed,
                            durationMs.toLong(),
                        )
                    )
                  }
                  bar.progress(
                      (session.elapsedPlaybackMs().toDouble() / safeDuration)
                          .coerceIn(0.0, 1.0)
                          .toFloat()
                  )
                },
                0L,
                2L,
            )
  }

  private fun hideNowPlayingBar(viewer: Player) {
    bossBarTasks.remove(viewer.uniqueId)?.cancel()
    nowPlayingBars.remove(viewer.uniqueId)?.let { bar ->
      viewer.hideBossBar(bar)
      Bukkit.getPlayer(viewer.uniqueId)?.takeIf { it !== viewer }?.hideBossBar(bar)
    }
  }

  /**
   * Personal playback state intentionally survives a short disconnect. Adventure boss bars do not,
   * so a returning player must receive a fresh bar bound to the still-current session.
   */
  @EventHandler
  fun onPlayerJoin(event: PlayerJoinEvent) {
    val viewer = event.player
    hideNowPlayingBar(viewer)
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              if (!viewer.isOnline) return@Runnable
              val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
              val session = state.activeSession ?: return@Runnable
              val song = state.nowPlayingSong ?: session.song
              val duration = nowPlayingDurations[viewer.uniqueId] ?: return@Runnable
              if (session.isCancelled || session.elapsedPlaybackMs() >= duration) return@Runnable
              showNowPlayingBar(viewer, song, session, duration)
              menuManager.refreshCurrent(viewer.uniqueId)
            },
            1L,
        )
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    transitions.remove(event.player.uniqueId)?.cancel()
    lists.remove(event.player.uniqueId)
    requests.remove(event.player.uniqueId)
    hideNowPlayingBar(event.player)
    // 切断時は放置終了タイマーを破棄する（再接続 semantics は維持し、壁時計での終了は行わない）。
    cancelPauseAutoFinish(event.player.uniqueId)
    val session =
        plugin.controllerStateService.stateFor(event.player.uniqueId).activeSession ?: return
    // A reconnect creates a new client process/network generation with no buffered payload. Route
    // the remainder through vanilla if the player returns before this server session finishes.
    session.bufferedRecipients.remove(event.player.uniqueId)
    session.bufferCandidates.remove(event.player.uniqueId)
    session.ackPendingRecipients.remove(event.player.uniqueId)
    session.paperFallbackRecipients.remove(event.player.uniqueId)
    session.ackDeadlinesMillis.remove(event.player.uniqueId)
    plugin.ommtPlaybackClientRegistry.removeExpected(event.player.uniqueId, session.sessionId)
    hideNowPlayingBar(event.player)
  }

  private fun nowPlayingName(
      title: String,
      authorName: String,
      defaultColor: TextColor,
      elapsedMs: Long,
      durationMs: Long,
  ): Component =
      Component.text("♪ ", defaultColor)
          .append(Component.text(title, defaultColor).decoration(TextDecoration.ITALIC, false))
          .append(
              Component.text(
                  " - $authorName " +
                      com.github.sahyuya.oyasaiMusic.audio.playbackTimeLabel(elapsedMs, durationMs),
                  defaultColor,
              )
          )

  private fun bossBarStyle(recordMaterial: String): RecordBossBarStyle =
      when (recordMaterial.uppercase()) {
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
        "MUSIC_DISC_BOUNCE" -> recordBossBarStyle("656563", BossBar.Color.WHITE)
        else -> recordBossBarStyle("FCFCFC", BossBar.Color.YELLOW)
      }

  private fun recordBossBarStyle(textHex: String, barColor: BossBar.Color): RecordBossBarStyle =
      RecordBossBarStyle(TextColor.color(textHex.toInt(16)), barColor)
}
