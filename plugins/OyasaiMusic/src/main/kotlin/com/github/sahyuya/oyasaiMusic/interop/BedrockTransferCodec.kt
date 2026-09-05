package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.util.UUID

/**
 * Paper -> Velocity transfer request for Bedrock pack application. The Velocity/Geyser consumer
 * lands in phase-2; Paper only sends. Wire: u8 version=1, UUID playerId (16), u8 allow, u8
 * packIdLen, packId UTF-8 (<=64B).
 */
object BedrockTransferCodec {
  const val CHANNEL = "oyasaimusic:bedrock_transfer"
  const val VERSION = 1
  const val MAX_PACK_ID_BYTES = 64
  const val MAX = 1 + 16 + 1 + 1 + MAX_PACK_ID_BYTES

  data class Request(val playerId: UUID, val allow: Boolean, val packId: String)

  fun encode(playerId: UUID, allow: Boolean, packId: String): ByteArray {
    val idBytes = packId.toByteArray(Charsets.UTF_8)
    require(idBytes.size <= MAX_PACK_ID_BYTES) { "bedrock pack id too long" }
    return ByteArrayOutputStream().use { bytes ->
      DataOutputStream(bytes).use { out ->
        out.writeByte(VERSION)
        out.writeLong(playerId.mostSignificantBits)
        out.writeLong(playerId.leastSignificantBits)
        out.writeByte(if (allow) 1 else 0)
        out.writeByte(idBytes.size)
        out.write(idBytes)
      }
      bytes.toByteArray().also { require(it.size in 19..MAX) { "bedrock transfer packet size" } }
    }
  }

  fun decode(bytes: ByteArray): Request? =
      runCatching {
            require(bytes.size in 19..MAX) { "size" }
            DataInputStream(bytes.inputStream()).use { input ->
              require(input.readUnsignedByte() == VERSION) { "version" }
              val id = UUID(input.readLong(), input.readLong())
              val allow =
                  when (input.readUnsignedByte()) {
                    1 -> true
                    0 -> false
                    else -> throw IllegalArgumentException("allow")
                  }
              val len = input.readUnsignedByte()
              require(len <= MAX_PACK_ID_BYTES) { "pack id length" }
              val idBytes = input.readNBytes(len)
              require(idBytes.size == len && input.available() == 0) { "eof" }
              Request(id, allow, idBytes.toString(Charsets.UTF_8))
            }
          }
          .getOrNull()
}
