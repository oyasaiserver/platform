package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.util.UUID

/**
 * Binary OMMT upload protocol carried by Minecraft plugin messages.
 *
 * The client may send only a small [Request] before Paper authorizes the transfer with READY. Song
 * bytes are compressed OYMC, never command text, Base64 or Unicode15. Every allocation is bounded
 * by manifest values validated here and again by the upload service.
 */
object UploadPacketCodec {
  const val CHANNEL = "oyasaimusic:upload_v1"
  const val VERSION = 1
  const val MAX_PACKET_BYTES = 24 * 1024
  const val CHUNK_BYTES = 20 * 1024
  const val MAX_CHUNKS = 64
  const val MAX_COMPRESSED_BYTES = 1_048_576
  const val MAX_TRANSPORT_BYTES = 1_048_576
  const val MAX_OYMI_BYTES = 1_048_576
  const val MAX_NOTES = 100_000

  const val TYPE_REQUEST = 1
  const val TYPE_BEGIN = 2
  const val TYPE_CHUNK = 3
  const val TYPE_FINISH = 4
  const val TYPE_ABORT = 5
  const val TYPE_READY = 64
  const val TYPE_STATUS = 65

  const val STATUS_PROCESSING = 1
  const val STATUS_DONE = 2
  const val STATUS_ERROR = 3

  const val CAP_COMPACT_ZLIB = 1
  const val CAP_CUSTOM_SOUND = 1 shl 1
  const val CAP_CUSTOM_SOUND_PATTERN = 1 shl 2
  const val CAP_OYMI_V4_PITCH_CENTS = 1 shl 3
  const val CAPABILITIES =
      CAP_COMPACT_ZLIB or CAP_CUSTOM_SOUND or CAP_CUSTOM_SOUND_PATTERN or CAP_OYMI_V4_PITCH_CENTS

  sealed interface ClientMessage {
    val id: UUID
  }

  data class Request(override val id: UUID) : ClientMessage

  data class Begin(
      override val id: UUID,
      val chunks: Int,
      val compressedBytes: Int,
      val transportBytes: Int,
      val oymiBytes: Int,
      val notes: Int,
      val canonicalHash: ByteArray,
  ) : ClientMessage

  data class Chunk(
      override val id: UUID,
      val sequence: Int,
      val total: Int,
      val bytes: ByteArray,
  ) : ClientMessage

  data class Finish(override val id: UUID, val canonicalHash: ByteArray) : ClientMessage

  data class Abort(override val id: UUID, val reason: Int) : ClientMessage

  sealed interface ServerMessage {
    val id: UUID
  }

  data class Ready(
      override val id: UUID,
      val capabilities: Int,
      val maxOymiBytes: Int,
      val maxCompressedBytes: Int,
      val maxChunks: Int,
      val chunkBytes: Int,
  ) : ServerMessage

  data class Status(
      override val id: UUID,
      val status: Int,
      val detail: String,
  ) : ServerMessage

  fun decodeClient(bytes: ByteArray): ClientMessage {
    require(bytes.size in 18..MAX_PACKET_BYTES) { "upload packet size is out of bounds" }
    return DataInputStream(ByteArrayInputStream(bytes)).use { input ->
      require(input.readUnsignedByte() == VERSION) { "unsupported upload packet version" }
      val type = input.readUnsignedByte()
      val id = UUID(input.readLong(), input.readLong())
      val message =
          when (type) {
            TYPE_REQUEST -> Request(id)
            TYPE_BEGIN ->
                Begin(
                    id = id,
                    chunks = input.readUnsignedShort(),
                    compressedBytes = input.readInt(),
                    transportBytes = input.readInt(),
                    oymiBytes = input.readInt(),
                    notes = input.readInt(),
                    canonicalHash = input.readHash(),
                )
            TYPE_CHUNK -> {
              val sequence = input.readUnsignedShort()
              val total = input.readUnsignedShort()
              val length = input.readUnsignedShort()
              require(length in 1..CHUNK_BYTES && length <= input.available()) {
                "invalid upload chunk length"
              }
              Chunk(id, sequence, total, input.readNBytes(length))
            }
            TYPE_FINISH -> Finish(id, input.readHash())
            TYPE_ABORT -> Abort(id, input.readUnsignedByte())
            else -> throw IllegalArgumentException("unknown client upload packet type")
          }
      require(input.available() == 0) { "trailing upload packet bytes" }
      message
    }
  }

  fun decodeServer(bytes: ByteArray): ServerMessage {
    require(bytes.size in 18..MAX_PACKET_BYTES) { "upload packet size is out of bounds" }
    return DataInputStream(ByteArrayInputStream(bytes)).use { input ->
      require(input.readUnsignedByte() == VERSION) { "unsupported upload packet version" }
      val type = input.readUnsignedByte()
      val id = UUID(input.readLong(), input.readLong())
      val message =
          when (type) {
            TYPE_READY ->
                Ready(
                    id = id,
                    capabilities = input.readInt(),
                    maxOymiBytes = input.readInt(),
                    maxCompressedBytes = input.readInt(),
                    maxChunks = input.readUnsignedShort(),
                    chunkBytes = input.readUnsignedShort(),
                )
            TYPE_STATUS -> {
              val status = input.readUnsignedByte()
              val detail = input.readUTF()
              require(status in STATUS_PROCESSING..STATUS_ERROR)
              require(detail.length <= 64 && detail.all { it.code in 0x20..0x7e })
              Status(id, status, detail)
            }
            else -> throw IllegalArgumentException("unknown server upload packet type")
          }
      require(input.available() == 0) { "trailing upload packet bytes" }
      message
    }
  }

  fun ready(id: UUID): ByteArray =
      encode(TYPE_READY, id) {
        writeInt(CAPABILITIES)
        writeInt(MAX_OYMI_BYTES)
        writeInt(MAX_COMPRESSED_BYTES)
        writeShort(MAX_CHUNKS)
        writeShort(CHUNK_BYTES)
      }

  fun status(id: UUID, status: Int, detail: String = ""): ByteArray {
    require(status in STATUS_PROCESSING..STATUS_ERROR)
    require(detail.length <= 64 && detail.all { it.code in 0x20..0x7e }) {
      "upload status detail must be bounded ASCII"
    }
    return encode(TYPE_STATUS, id) {
      writeByte(status)
      writeUTF(detail)
    }
  }

  private fun encode(type: Int, id: UUID, body: DataOutputStream.() -> Unit): ByteArray =
      ByteArrayOutputStream().use { bytes ->
        DataOutputStream(bytes).use { output ->
          output.writeByte(VERSION)
          output.writeByte(type)
          output.writeLong(id.mostSignificantBits)
          output.writeLong(id.leastSignificantBits)
          output.body()
        }
        require(bytes.size() <= MAX_PACKET_BYTES)
        bytes.toByteArray()
      }

  private fun DataInputStream.readHash(): ByteArray =
      readNBytes(32).also { require(it.size == 32) { "truncated upload hash" } }
}
