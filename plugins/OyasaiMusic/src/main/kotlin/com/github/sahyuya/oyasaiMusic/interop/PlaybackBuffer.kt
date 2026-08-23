package com.github.sahyuya.oyasaiMusic.interop

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.io.ByteArrayOutputStream
import java.io.DataOutputStream
import java.security.MessageDigest
import java.util.UUID
import java.util.zip.Deflater

/**
 * Pure OYPB v1 preparation. Custom sounds are intentionally excluded: those recipients stay
 * vanilla.
 */
object PlaybackBuffer {
  const val CHANNEL = "oyasaimusic:playback_v1"
  const val MAX_COMPRESSED = 4 * 1024 * 1024
  const val MAX_CHUNKS = 256
  const val CHUNK_BYTES = 20 * 1024
  const val TYPE_PROBE = 1
  const val TYPE_BEGIN = 2
  const val TYPE_CHUNK = 3
  const val TYPE_START = 4
  const val TYPE_PAUSE = 5
  const val TYPE_RESUME = 6
  const val TYPE_STOP = 7

  data class Prepared(
      val compressed: ByteArray,
      val chunks: List<ByteArray>,
      val hash: ByteArray,
      val durationMs: Int,
  )

  fun prepare(notes: List<NoteEvent>): Prepared? =
      try {
        if (notes.size !in 1..100_000 || notes.any { it.customSound != null }) return null
        val sorted = notes.sortedBy { it.timeMs }
        val duration = sorted.last().timeMs
        val raw =
            ByteArrayOutputStream().use { bytes ->
              DataOutputStream(bytes).use { out ->
                out.writeInt(0x4F595042)
                out.writeByte(1)
                varUInt(out, duration)
                varUInt(out, sorted.size)
                varUInt(out, 0)
                var previous = 0
                sorted.forEach { note ->
                  require(note.timeMs >= previous)
                  varUInt(out, note.timeMs - previous)
                  previous = note.timeMs
                  varUInt(out, note.instrument)
                  out.writeByte(note.pitch.toInt())
                  out.writeByte(note.volume)
                  out.writeByte(note.pan + 100)
                  varUInt(out, 0)
                }
              }
              bytes.toByteArray()
            }
        val compressed = deflate(raw)
        if (compressed.size !in 1..MAX_COMPRESSED) return null
        val chunks = compressed.asList().chunked(CHUNK_BYTES).map { chunk -> chunk.toByteArray() }
        if (chunks.size !in 1..MAX_CHUNKS) null
        else
            Prepared(
                compressed,
                chunks,
                MessageDigest.getInstance("SHA-256").digest(compressed),
                duration,
            )
      } catch (_: Exception) {
        null
      }

  fun envelope(type: Int, session: UUID, body: DataOutputStream.() -> Unit = {}): ByteArray =
      PlaybackWireCodec.encode(type, session, body)

  private fun varUInt(out: DataOutputStream, value: Int) {
    require(value >= 0)
    var current = value
    while (current and -128 != 0) {
      out.writeByte((current and 127) or 128)
      current = current ushr 7
    }
    out.writeByte(current)
  }

  private fun deflate(input: ByteArray): ByteArray {
    val deflater = Deflater(Deflater.BEST_COMPRESSION)
    deflater.setInput(input)
    deflater.finish()
    val output = ByteArrayOutputStream()
    val buffer = ByteArray(4096)
    while (!deflater.finished()) {
      val count = deflater.deflate(buffer)
      if (count == 0) break
      output.write(buffer, 0, count)
    }
    deflater.end()
    return output.toByteArray()
  }
}
