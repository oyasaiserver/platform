package com.github.sahyuya.oyasaiMusic.audio

import java.util.UUID

/** One tick's quota. After saturation, the next scan starts just beyond the last grant. */
internal class PlaybackTransferBudget(private val size: Int, private val rotation: Int) {
  private val used = HashMap<UUID, Int>()
  private var total = 0
  private var lastGranted = rotation

  fun index(offset: Int): Int = (rotation + offset) % size

  fun take(player: UUID, index: Int): Boolean {
    val playerUsed = used[player] ?: 0
    if (total >= 32 || playerUsed >= 2) return false
    used[player] = playerUsed + 1
    total++
    lastGranted = index
    return true
  }

  fun nextRotation(): Int =
      if (size == 0) 0 else ((if (total == 32) lastGranted else rotation) + 1) % size
}
