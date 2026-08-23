package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID
import java.util.concurrent.CopyOnWriteArraySet
import java.util.concurrent.ScheduledFuture
import java.util.concurrent.atomic.AtomicBoolean
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitTask

/**
 * 1回の再生（個人プレイヤー再生 or 環境BGM等の複数人再生）を表すセッション。 [PlaybackEngine.stop] で全スケジュール済みタスクをキャンセルできるよう、
 * スケジュールしたFutureを保持する。
 *
 * 一時停止していない実質再生時間を [elapsedPlaybackMs] で追跡する。実際の スケジュール操作（タスクのキャンセル・再スケジュール）は [PlaybackEngine]
 * 側が行う。
 */
class PlaybackSession(
    val sessionId: UUID = UUID.randomUUID(),
    val song: Song,
    initialRecipients: Collection<Player>,
) {
  val recipients: MutableSet<UUID> = CopyOnWriteArraySet(initialRecipients.map { it.uniqueId })
  /** Recipients with a verified local buffer; vanilla pre-play and normal dispatch exclude them. */
  internal val bufferedRecipients: MutableSet<UUID> = CopyOnWriteArraySet()
  /** Candidates remain vanilla until their exact hash-bound READY acknowledgement succeeds. */
  internal val bufferCandidates: MutableSet<UUID> = CopyOnWriteArraySet()
  internal val scheduledTasks: MutableList<ScheduledFuture<*>> = mutableListOf()
  internal val outboundTasks: MutableList<BukkitTask> = mutableListOf()
  private val cancelled = AtomicBoolean(false)

  val isCancelled: Boolean
    get() = cancelled.get()

  /** 一時停止中かどうか（[PlaybackEngine.pause]/[PlaybackEngine.resume] が管理する）。 */
  var isPaused: Boolean = false
    internal set

  private var accumulatedPlayMs: Long = 0
  private var segmentStartMillis: Long = System.currentTimeMillis()
  internal var initialDelayMs: Long = 0
  internal var startDeadlineMillis: Long = System.currentTimeMillis()
  internal var routeDecisionDeadlineMillis: Long = System.currentTimeMillis()
  internal fun startAfter(delayMs: Long, routeDecisionLeadMs: Long) {
    initialDelayMs = delayMs.coerceAtLeast(0)
    startDeadlineMillis = System.currentTimeMillis() + initialDelayMs
    routeDecisionDeadlineMillis = (startDeadlineMillis - routeDecisionLeadMs.coerceAtLeast(0)).coerceAtLeast(System.currentTimeMillis())
    segmentStartMillis = startDeadlineMillis
  }

  /** 現在の再生位置（ミリ秒）。一時停止中はその時点の値のまま変化しない。 */
  fun elapsedPlaybackMs(): Long =
      (accumulatedPlayMs + if (!isPaused) (System.currentTimeMillis() - segmentStartMillis) else 0).coerceAtLeast(0)

  internal fun markPaused() {
    if (isPaused) return
    accumulatedPlayMs += System.currentTimeMillis() - segmentStartMillis
    isPaused = true
  }

  internal fun markResumed() {
    if (!isPaused) return
    segmentStartMillis = System.currentTimeMillis()
    isPaused = false
  }

  fun cancel() {
    if (cancelled.compareAndSet(false, true)) {
      scheduledTasks.forEach { it.cancel(false) }
      scheduledTasks.clear()
      outboundTasks.forEach { it.cancel() }
      outboundTasks.clear()
    }
  }
}
