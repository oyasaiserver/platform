package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Executors
import java.util.concurrent.ScheduledExecutorService
import java.util.concurrent.ThreadFactory
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicInteger
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/**
 * オーディオエンジン（データ・システム設計書 4章）。
 *
 * メインスレッドとは独立した [ScheduledExecutorService] で音符ごとのタイミングを 高精度にスケジュールし、実際の音送信（Bukkit API呼び出し）だけを
 * メインスレッドへ折り返して実行する。
 *
 * デフォルトの再生方式は [PlaybackMode.DEFAULT]（Adventure APIの`Sound.Emitter`）で、
 * 音源をプレイヤー自身に追従させることで移動による音響の乱れを防いでいる。 ステレオ定位(Pan)付きの [PlaybackMode.POSITIONAL]（立体音響再生）は、リスナーごとに
 * 個別選択できるオプション再生として提供する（[modeResolver] 参照）。
 *
 * 再生に必要な文脈（スケール済み音符・Bedrock向け間引き結果・各種コールバック等）を [PlaybackContext] としてセッションIDごとに保持し、[pause]
 * では未発火のタスクを全て キャンセルするだけ、[resume] ではその時点の経過時間から残りの音符・コールバックを 再スケジュールする、という形で実現している。
 *
 * 注意: `Player#playSound` はPaper上で非同期スレッドから呼び出すと `IllegalStateException: Asynchronous play sound!`
 * で例外になることを確認しているため、 メインスレッドへのホップ自体は省略できない。
 */
class PlaybackEngine(
    private val plugin: Plugin,
    private val bedrockPrefix: String,
    private val chordLimit: Int,
    private val defaultMode: PlaybackMode = PlaybackMode.DEFAULT,
) {

  private val threadCounter = AtomicInteger(1)
  private val executor: ScheduledExecutorService =
      Executors.newScheduledThreadPool(
          4,
          ThreadFactory { r ->
            Thread(r, "OyasaiMusic-Playback-${threadCounter.getAndIncrement()}").apply {
              isDaemon = true
            }
          },
      )

  /** [pause]/[resume] による再スケジュールに必要な、セッションごとの再生文脈。 */
  private data class PlaybackContext(
      val song: Song,
      val scaledNotes: List<Pair<Int, NoteEvent>>,
      val bedrockSurvivingIndices: Set<Int>,
      val totalDurationMs: Int,
      val mode: PlaybackMode,
      val modeResolver: ((Player) -> PlaybackMode?)?,
      val onListenThresholdReached: ((Player, Song) -> Unit)?,
      val onCompletion: ((PlaybackSession) -> Unit)?,
  )

  private val contexts = ConcurrentHashMap<UUID, PlaybackContext>()

  /**
   * 楽曲を指定リスナー群に対して再生する。
   *
   * @param notes 再生する音符列（[SongAudioFile.read] の結果等）
   * @param recipients 再生対象プレイヤー（個人プレイヤー再生なら1人、環境BGMなら範囲内の複数人）
   * @param playbackBpm 再生速度の基準となるBPM。song.bpmと異なる場合、ノート間隔を比例縮小/拡大する
   * @param onListenThresholdReached 各リスナーが総演奏時間の80%まで聴き終えた時点で呼ばれる
   * @param onCompletion 再生が最後まで完了した時点で呼ばれる（一時停止中は呼ばれない）
   * @param mode [modeResolver] が指定されない場合、または該当リスナーの解決結果が無い場合に使う既定の再生方式
   * @param modeResolver リスナーごとの再生方式を解決する関数（楽曲詳細GUIでの個人設定を反映する想定）。 nullを返した場合は [mode] にフォールバックする。
   */
  fun play(
      song: Song,
      notes: List<NoteEvent>,
      recipients: Collection<Player>,
      playbackBpm: Int = song.bpm,
      onListenThresholdReached: ((Player, Song) -> Unit)? = null,
      onCompletion: ((PlaybackSession) -> Unit)? = null,
      mode: PlaybackMode = defaultMode,
      modeResolver: ((Player) -> PlaybackMode?)? = null,
  ): PlaybackSession {
    val session = PlaybackSession(song = song, initialRecipients = recipients)
    if (notes.isEmpty() || recipients.isEmpty()) {
      return session
    }

    val scale = if (playbackBpm > 0) song.bpm.toDouble() / playbackBpm else 1.0
    val scaledNotes: List<Pair<Int, NoteEvent>> =
        notes.mapIndexed { index, note ->
          index to note.copy(timeMs = (note.timeMs * scale).toInt())
        }
    val bedrockSurvivingIndices = computeBedrockSurvivingIndices(scaledNotes)
    val totalDurationMs = scaledNotes.maxOfOrNull { (_, n) -> n.timeMs } ?: 0

    contexts[session.sessionId] =
        PlaybackContext(
            song = song,
            scaledNotes = scaledNotes,
            bedrockSurvivingIndices = bedrockSurvivingIndices,
            totalDurationMs = totalDurationMs,
            mode = mode,
            modeResolver = modeResolver,
            onListenThresholdReached = onListenThresholdReached,
            onCompletion = onCompletion,
        )

    scheduleFrom(session, fromElapsedMs = 0)
    return session
  }

  /** 一時停止: 未発火のスケジュール済みタスクを全てキャンセルし、経過時間だけを保持する。 */
  fun pause(session: PlaybackSession) {
    if (session.isCancelled || session.isPaused) return
    session.markPaused()
    session.scheduledTasks.forEach { it.cancel(false) }
    session.scheduledTasks.clear()
  }

  /** 再開: 一時停止した時点の経過時間から、残りの音符・コールバックを再スケジュールする。 */
  fun resume(session: PlaybackSession) {
    if (session.isCancelled || !session.isPaused) return
    session.markResumed()
    scheduleFrom(session, fromElapsedMs = session.elapsedPlaybackMs())
  }

  fun stop(session: PlaybackSession) {
    contexts.remove(session.sessionId)
    session.cancel()
  }

  fun shutdown() {
    executor.shutdownNow()
  }

  /**
   * [fromElapsedMs] 時点以降に鳴るべき音符・コールバックだけを対象にスケジュールする。 初回再生は fromElapsedMs=0 で呼ばれ、[resume]
   * は一時停止した時点の経過時間で呼ばれる。 同一ミリ秒の音符（和音）は1回のスケジュール/メインスレッドホップにまとめる
   * （音符ごとに個別スケジュールすると和音のタイミングがズレて聞こえることがあったため）。
   */
  private fun scheduleFrom(session: PlaybackSession, fromElapsedMs: Long) {
    val ctx = contexts[session.sessionId] ?: return

    val groupedByTime: Map<Int, List<Pair<Int, NoteEvent>>> =
        ctx.scaledNotes
            .filter { (_, note) -> note.timeMs >= fromElapsedMs }
            .groupBy { (_, note) -> note.timeMs }

    for ((timeMs, group) in groupedByTime) {
      val delay = (timeMs - fromElapsedMs).coerceAtLeast(0)
      val future =
          executor.schedule(
              Runnable {
                if (session.isCancelled || session.isPaused) return@Runnable
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          for ((index, note) in group) {
                            dispatch(
                                note,
                                index in ctx.bedrockSurvivingIndices,
                                session,
                                ctx.mode,
                                ctx.modeResolver,
                            )
                          }
                        },
                    )
              },
              delay,
              TimeUnit.MILLISECONDS,
          )
      session.scheduledTasks.add(future)
    }

    if (ctx.onListenThresholdReached != null) {
      val thresholdMs = (ctx.totalDurationMs * 0.8).toLong()
      if (thresholdMs >= fromElapsedMs) {
        val delay = thresholdMs - fromElapsedMs
        val future =
            executor.schedule(
                Runnable {
                  if (session.isCancelled || session.isPaused) return@Runnable
                  Bukkit.getScheduler()
                      .runTask(
                          plugin,
                          Runnable {
                            for (uuid in session.recipients) {
                              val player = Bukkit.getPlayer(uuid) ?: continue
                              if (player.isOnline)
                                  ctx.onListenThresholdReached.invoke(player, ctx.song)
                            }
                          },
                      )
                },
                delay,
                TimeUnit.MILLISECONDS,
            )
        session.scheduledTasks.add(future)
      }
    }

    // onCompletion が無い再生でも文脈を必ず解放する。解放しないと単発再生のたびに
    // contexts が残り続け、長時間稼働時にメモリリークとなる。
    val delay = (ctx.totalDurationMs.toLong() + 50L - fromElapsedMs).coerceAtLeast(0)
    val future =
        executor.schedule(
            Runnable {
              if (session.isCancelled || session.isPaused) return@Runnable
              contexts.remove(session.sessionId)
              Bukkit.getScheduler().runTask(plugin, Runnable { ctx.onCompletion?.invoke(session) })
            },
            delay,
            TimeUnit.MILLISECONDS,
        )
    session.scheduledTasks.add(future)
  }

  private fun dispatch(
      note: NoteEvent,
      bedrock: Boolean,
      session: PlaybackSession,
      fallbackMode: PlaybackMode,
      modeResolver: ((Player) -> PlaybackMode?)?,
  ) {
    for (uuid in session.recipients) {
      val player = Bukkit.getPlayer(uuid) ?: continue
      if (!player.isOnline) continue
      val isBedrockPlayer = BedrockUtil.isBedrock(player, bedrockPrefix)
      if (isBedrockPlayer && !bedrock) continue // 和音間引きでこのプレイヤー種別からは間引かれた音
      val mode = modeResolver?.invoke(player) ?: fallbackMode
      SoundDispatcher.play(player, note, mode, isBedrock = isBedrockPlayer)
    }
  }

  /**
   * データ設計書 4-2章のBedrock向け和音間引きルール: 同一ミリ秒・同一楽器の音が [chordLimit] 個以上重なっている場合、
   * 最高音(Pitch最大)と最低音(Pitch最小)の2音のみを残す。
   *
   * @return Bedrockプレイヤーに対して再生してよい音符のインデックス集合
   */
  private fun computeBedrockSurvivingIndices(scaledNotes: List<Pair<Int, NoteEvent>>): Set<Int> {
    val groups = scaledNotes.groupBy { (_, note) -> note.timeMs to note.instrument }
    val surviving = HashSet<Int>()
    for (group in groups.values) {
      if (group.size < chordLimit) {
        group.forEach { (index, _) -> surviving.add(index) }
      } else {
        val minEntry = group.minBy { (_, note) -> note.pitch }
        val maxEntry = group.maxBy { (_, note) -> note.pitch }
        surviving.add(minEntry.first)
        surviving.add(maxEntry.first)
      }
    }
    return surviving
  }
}
