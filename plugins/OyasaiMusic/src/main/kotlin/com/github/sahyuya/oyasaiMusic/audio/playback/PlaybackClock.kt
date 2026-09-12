package com.github.sahyuya.oyasaiMusic.audio

/** Injectable monotonic clock; pausing during a lead-in never creates negative song time. */
internal class PlaybackClock(private val now: () -> Long = System::nanoTime) {
  private var accumulatedMs = 0L
  private var segmentNanos = now()
  private var paused = false

  fun startAfter(delayMs: Long) {
    accumulatedMs = 0L
    paused = false
    segmentNanos = now() + delayMs.coerceAtLeast(0) * 1_000_000L
  }

  fun hasStarted(): Boolean = !paused && now() - segmentNanos >= 0L

  fun positionMs(): Long = accumulatedMs +
    if (paused) 0L else ((now() - segmentNanos) / 1_000_000L).coerceAtLeast(0L)

  fun pause() {
    if (paused) return
    accumulatedMs = positionMs()
    paused = true
  }

  fun resumeAfter(delayMs: Long) {
    if (!paused) return
    segmentNanos = now() + delayMs.coerceAtLeast(0L) * 1_000_000L
    paused = false
  }
}

internal fun playbackTimeLabel(positionMs: Long, durationMs: Long): String {
  val duration = durationMs.coerceAtLeast(0)
  fun time(ms: Long): String {
    val seconds = ms / 1000L
    return (seconds / 60L).toString().padStart(2, '0') + ":" +
      (seconds % 60L).toString().padStart(2, '0')
  }
  return "[${time(positionMs.coerceIn(0L, duration))} / ${time(duration)}]"
}
