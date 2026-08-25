package com.github.sahyuya.oyasaiMusic.interop

/** Transport-level limits shared by the Paper receiver and the stateless Velocity relay. */
object PluginMessageBounds {
  const val MIN_PACKET_BYTES = 18
  const val MAX_PACKET_BYTES = 24 * 1024

  fun accepts(size: Int): Boolean = size in MIN_PACKET_BYTES..MAX_PACKET_BYTES
}
