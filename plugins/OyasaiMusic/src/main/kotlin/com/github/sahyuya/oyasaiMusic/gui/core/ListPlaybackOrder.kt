package com.github.sahyuya.oyasaiMusic.gui

import kotlin.random.Random

/** IDs plus two integer arrays; O(1) draws, O(n) refill once per cycle. Never persisted. */
internal class ListPlaybackOrder(ids: List<Long>, private val random: Random = Random.Default) {
  val ids = ids.distinct()
  private val bag = IntArray(this.ids.size) { it }
  private val positions = IntArray(this.ids.size) { it }
  private var remaining = this.ids.size
  private var currentIndex = -1
  val current: Long?
    get() = ids.getOrNull(currentIndex)

  private fun refill() {
    for (index in ids.indices) {
      bag[index] = index
      positions[index] = index
    }
    remaining = ids.size
  }

  /** Linear lookup only for explicit selection, never for automatic advancement. */
  fun select(id: Long) {
    val index = ids.indexOf(id)
    require(index >= 0)
    choose(index)
  }

  private fun choose(index: Int): Long {
    currentIndex = index
    val position = positions[index]
    if (position < remaining) {
      val last = bag[--remaining]
      bag[position] = last
      positions[last] = position
      bag[remaining] = index
      positions[index] = remaining
    }
    return ids[index]
  }

  fun next(
      shuffle: Boolean,
      repeatList: Boolean,
      repeatSingle: Boolean,
      autoAdvance: Boolean,
  ): Long? {
    if (ids.isEmpty()) return null
    if (repeatSingle) return current
    if (shuffle) {
      if (!repeatList) {
        // Shuffle alone continues indefinitely. Avoid only the immediately preceding song.
        if (ids.size == 1) return choose(0)
        var index = random.nextInt(ids.size - 1)
        if (index >= currentIndex && currentIndex >= 0) index++
        return choose(index)
      }
      if (remaining == 0) refill()
      return choose(bag[random.nextInt(remaining)])
    }
    if (!autoAdvance && !repeatList) return null
    val index = currentIndex + 1
    if (index >= ids.size && !repeatList) return null
    return choose(index % ids.size)
  }

  fun previous(): Long? =
      if (ids.isEmpty()) null else choose((currentIndex - 1 + ids.size) % ids.size)
}

internal fun PlayerControllerState.cycleLoopMode() {
  loopMode =
      when (loopMode) {
        LoopMode.OFF -> LoopMode.LIST
        LoopMode.LIST -> LoopMode.SINGLE
        LoopMode.SINGLE -> LoopMode.OFF
      }
  if (loopMode == LoopMode.SINGLE) shuffle = false
}

internal fun PlayerControllerState.toggleShuffleMode() {
  shuffle = !shuffle
  if (shuffle && loopMode == LoopMode.SINGLE) loopMode = LoopMode.OFF
}
