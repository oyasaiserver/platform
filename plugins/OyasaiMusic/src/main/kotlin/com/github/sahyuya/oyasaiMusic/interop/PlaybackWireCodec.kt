package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.util.UUID

/** Shared v1 envelope shape; no Bukkit dependency, so wire vectors can be unit tested. */
object PlaybackWireCodec {
  const val VERSION = 1
  const val MAX = 24 * 1024

  data class Message(val type: Int, val id: UUID, val body: ByteArray)

  fun encode(type: Int, id: UUID, body: DataOutputStream.() -> Unit = {}): ByteArray =
    ByteArrayOutputStream().use { b ->
      DataOutputStream(b).use { o ->
        o.writeByte(VERSION)
        o.writeByte(type)
        o.writeLong(id.mostSignificantBits)
        o.writeLong(id.leastSignificantBits)
        o.body()
      }
      require(b.size() <= MAX)
      b.toByteArray()
    }

  fun decode(bytes: ByteArray): Message {
    require(bytes.size in 18..MAX) { "playback packet size is out of bounds" }
    return DataInputStream(ByteArrayInputStream(bytes)).use { input ->
      require(input.readUnsignedByte() == VERSION) { "unsupported playback packet version" }
      val type = input.readUnsignedByte()
      val id = UUID(input.readLong(), input.readLong())
      Message(type, id, input.readNBytes(input.available()))
    }
  }
}
