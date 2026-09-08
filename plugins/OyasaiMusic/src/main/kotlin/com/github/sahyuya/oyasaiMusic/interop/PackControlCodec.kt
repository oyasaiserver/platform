package com.github.sahyuya.oyasaiMusic.interop

import java.nio.ByteBuffer
import java.util.UUID

/** Private main/proxy control traffic; never forwarded to clients. */
object PackControlCodec {
  const val CHANNEL = "oyasaimusic:pack_control"
  const val SIZE = 34
  const val CONFIRM = 1
  const val SET = 2
  const val UNSET = 3
  const val OK = 16
  const val CANCEL = 17
  const val UNKNOWN = 18
  const val FAILED = 19
  data class Message(val operation: Int, val requestId: UUID, val targetId: UUID)
  fun encode(message: Message): ByteArray {
    require(message.operation in setOf(CONFIRM, SET, UNSET, OK, CANCEL, UNKNOWN, FAILED))
    return ByteBuffer.allocate(SIZE).apply {
      put(1.toByte()); put(message.operation.toByte())
      putLong(message.requestId.mostSignificantBits); putLong(message.requestId.leastSignificantBits)
      putLong(message.targetId.mostSignificantBits); putLong(message.targetId.leastSignificantBits)
    }.array()
  }
  fun decode(bytes: ByteArray): Message? = runCatching {
    require(bytes.size == SIZE)
    val input = ByteBuffer.wrap(bytes)
    require(input.get().toInt() == 1)
    val operation = input.get().toInt()
    require(operation in setOf(CONFIRM, SET, UNSET, OK, CANCEL, UNKNOWN, FAILED))
    Message(operation, UUID(input.long, input.long), UUID(input.long, input.long))
  }.getOrNull()
}
