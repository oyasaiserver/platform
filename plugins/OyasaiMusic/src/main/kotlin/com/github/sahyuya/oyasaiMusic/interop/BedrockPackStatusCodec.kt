package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.nio.ByteBuffer
import java.nio.charset.CodingErrorAction
import java.util.UUID

/**
 * Velocity -> Paper confirmation for the pack attached to the current Geyser session. Wire: u8
 * version=1, UUID playerId (16), u8 loaded, u8 packIdLen, packId UTF-8 (<=64B).
 */
object BedrockPackStatusCodec {
  const val CHANNEL = "oyasaimusic:bedrock_pack_status"
  const val VERSION = 1
  const val MAX_PACK_ID_BYTES = BedrockTransferCodec.MAX_PACK_ID_BYTES
  const val MAX = 1 + 16 + 1 + 1 + MAX_PACK_ID_BYTES

  data class Status(val playerId: UUID, val loaded: Boolean, val packId: String)

  fun encode(playerId: UUID, loaded: Boolean, packId: String): ByteArray {
    val idBytes = packId.toByteArray(Charsets.UTF_8)
    require(idBytes.size <= MAX_PACK_ID_BYTES) { "bedrock pack id too long" }
    return ByteArrayOutputStream().use { bytes ->
      DataOutputStream(bytes).use { out ->
        out.writeByte(VERSION)
        out.writeLong(playerId.mostSignificantBits)
        out.writeLong(playerId.leastSignificantBits)
        out.writeByte(if (loaded) 1 else 0)
        out.writeByte(idBytes.size)
        out.write(idBytes)
      }
      bytes.toByteArray().also { require(it.size in 19..MAX) { "bedrock pack status size" } }
    }
  }

  fun decode(bytes: ByteArray): Status? =
      runCatching {
            require(bytes.size in 19..MAX) { "size" }
            DataInputStream(bytes.inputStream()).use { input ->
              require(input.readUnsignedByte() == VERSION) { "version" }
              val playerId = UUID(input.readLong(), input.readLong())
              val loaded =
                  when (input.readUnsignedByte()) {
                    1 -> true
                    0 -> false
                    else -> throw IllegalArgumentException("loaded")
                  }
              val length = input.readUnsignedByte()
              require(length <= MAX_PACK_ID_BYTES) { "pack id length" }
              val idBytes = input.readNBytes(length)
              require(idBytes.size == length && input.available() == 0) { "eof" }
              Status(playerId, loaded, decodeUtf8(idBytes))
            }
          }
          .getOrNull()

  private fun decodeUtf8(bytes: ByteArray): String =
      Charsets.UTF_8.newDecoder()
          .onMalformedInput(CodingErrorAction.REPORT)
          .onUnmappableCharacter(CodingErrorAction.REPORT)
          .decode(ByteBuffer.wrap(bytes))
          .toString()
}
