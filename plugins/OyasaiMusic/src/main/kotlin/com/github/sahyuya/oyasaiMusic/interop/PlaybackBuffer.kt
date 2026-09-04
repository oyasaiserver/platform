package com.github.sahyuya.oyasaiMusic.interop

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.io.ByteArrayOutputStream
import java.io.DataOutputStream
import java.security.MessageDigest
import java.util.UUID
import java.util.zip.Deflater
import kotlin.math.max

/**
 * Pure OYPB preparation. V1 keeps compatibility with older clients, while V2 carries the
 * fixed custom-sound pattern, cent pitch, pan, and optional resource-pack bank policy needed
 * for deterministic client-side playback.
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
  const val TYPE_PROBE_RESPONSE = 8
  const val TYPE_READY = 9
  const val TYPE_SERVER_CAPABILITIES = 10
  const val TYPE_CLIENT_CAPABILITIES = 11
  const val TYPE_STARTED_ACK = 12
  const val TYPE_CLIENT_PLAYBACK_FAILED = 13
  const val TYPE_BANK_CONSENT = 14
  const val CAP_BRASS_NOTE_BLOCK = 1
  const val CAP_OYPB_V2 = 1 shl 1
  const val CAP_BANK_MANIFEST_V1 = 1 shl 2
  const val CAP_SOUND_CATALOG_26_2 = 1 shl 3

  const val CLIENT_CAP_OYPB_V2 = 1
  const val CLIENT_CAP_STARTED_ACK = 1 shl 1
  const val CLIENT_CAP_FIXED_CUSTOM_PATTERN = 1 shl 2
  const val CLIENT_CAP_POSITIONAL_PAN = 1 shl 3
  const val CLIENT_CAP_BANK_MANIFEST_V1 = 1 shl 4

  sealed interface Payload {
    val compressed: ByteArray
    val chunks: List<ByteArray>
    val hash: ByteArray
    val durationMs: Int
    val firstNoteMs: Int
    val mode: Int
  }

  data class Prepared(
      override val compressed: ByteArray,
      override val chunks: List<ByteArray>,
      override val hash: ByteArray,
      override val durationMs: Int,
      override val firstNoteMs: Int,
  ) : Payload {
    override val mode: Int = 0
  }

  /** v2 keeps OYMB runtime ids, signed cents, deterministic custom variants and pan. */
  data class PreparedV2(
      override val compressed: ByteArray,
      override val chunks: List<ByteArray>,
      override val hash: ByteArray,
      override val durationMs: Int,
      override val firstNoteMs: Int,
      val spatialMode: Int,
      val bankPolicy: Int,
      val manifestHash: ByteArray,
  ) : Payload {
    override val mode: Int = 1
  }

  fun prepareV2(
      notes: List<NoteEvent>,
      spatialMode: Int = 1,
      bankPolicy: Int = 0,
      manifestHash: ByteArray = ByteArray(32),
      customPattern: (NoteEvent) -> Int? = { null },
  ): PreparedV2? = try {
    require(notes.size in 1..100_000 && spatialMode in 0..1 && bankPolicy in 0..1 && manifestHash.size == 32)
    require((bankPolicy == 0 && manifestHash.all { it == 0.toByte() }) || (bankPolicy == 1 && manifestHash.any { it != 0.toByte() }))
    val sorted = notes.sortedBy { it.timeMs }
    val canonicalCustom = sorted.mapNotNull { note -> note.customSound?.let(::canonicalEventId) }
    val strings =
        canonicalCustom
            .distinct()
            .sortedWith(Comparator { a, b -> compareUtf8(a, b) })
    require(strings.size <= 4096 && strings.sumOf { it.toByteArray(Charsets.UTF_8).size } <= 1_048_576)
    val index = strings.withIndex().associate { it.value to it.index }
    val raw = ByteArrayOutputStream().use { bytes -> DataOutputStream(bytes).use { out ->
      out.writeInt(0x4F595042); out.writeByte(2)
      val duration = max(0, sorted.lastOrNull()?.timeMs ?: 0); varUInt(out, duration); varUInt(out, sorted.size); varUInt(out, strings.size)
      out.writeByte(spatialMode); out.writeByte(bankPolicy); out.write(manifestHash)
      strings.forEach { value -> val utf = value.toByteArray(Charsets.UTF_8); require(utf.size in 1..256 && value.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+"))); varUInt(out, utf.size); out.write(utf) }
      var previous = 0
      sorted.forEach { note ->
        require(note.timeMs >= previous && note.pitchCents in -5400..7300 && note.volume in 0..100 && note.pan in -100..100 && note.instrument in 0..255)
        varUInt(out, note.timeMs - previous); previous = note.timeMs
        if (note.customSound == null) {
          require(note.instrument in 0..19)
          out.writeByte(0)
        } else {
          val pattern = customPattern(note) ?: return null
          require(pattern in 1..65535); out.writeByte(1)
        }
        out.writeByte(note.instrument); out.writeShort(note.pitchCents); out.writeByte(note.volume); out.writeByte(note.pan + 100)
        note.customSound?.let {
          val event = canonicalEventId(it)
          val pattern = customPattern(note) ?: return null
          varUInt(out, index.getValue(event)); varUInt(out, pattern); out.writeLong(note.customSoundSeed ?: 0L)
        }
      }
    }; bytes.toByteArray() }
    val compressed = deflate(raw); if (compressed.size !in 1..MAX_COMPRESSED) return null
    val chunks = compressed.asList().chunked(CHUNK_BYTES).map { it.toByteArray() }; if (chunks.size !in 1..MAX_CHUNKS) return null
    // firstNoteMs is the first AUDIBLE note: the client skips volume-0 notes (display-only)
    // and acknowledges the first dispatched note. Comparing against a silent head would
    // force a spurious paper fallback (e.g. leading vol=0 at t=0 vs first audible at t=170).
    val firstAudibleMs = sorted.firstOrNull { it.volume > 0 }?.timeMs ?: sorted.first().timeMs
    PreparedV2(
        compressed,
        chunks,
        MessageDigest.getInstance("SHA-256").digest(compressed),
        sorted.last().timeMs,
        firstAudibleMs,
        spatialMode,
        bankPolicy,
        manifestHash.copyOf(),
    )
  } catch (_: Exception) { null }

  fun prepare(notes: List<NoteEvent>): Prepared? =
      try {
        // OYPB v1 carries only an unsigned vanilla pitch. Keep its bytes frozen and route every
        // custom, extended or detuned note through normal Paper playback instead.
        if (notes.size !in 1..100_000 || notes.any { it.customSound != null || it.pitchCents !in 0..2400 || it.pitchCents % 100 != 0 }) return null
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
                sorted.firstOrNull { it.volume > 0 }?.timeMs ?: sorted.first().timeMs,
            )
      } catch (_: Exception) {
        null
      }

  fun envelope(type: Int, session: UUID, body: DataOutputStream.() -> Unit = {}): ByteArray =
      PlaybackWireCodec.encode(type, session, body)

  fun serverCapabilities(minecraftVersion: String): Int {
    val match = Regex("(?<!\\d)(\\d+)\\.(\\d+)(?:\\.(\\d+))?").find(minecraftVersion)
        ?: return 0
    val major = match.groupValues[1].toIntOrNull() ?: return 0
    val minor = match.groupValues[2].toIntOrNull() ?: return 0
    return if (major == 26 && minor == 2) CAP_BRASS_NOTE_BLOCK or CAP_OYPB_V2 or CAP_BANK_MANIFEST_V1 or CAP_SOUND_CATALOG_26_2 else 0
  }

  fun serverCapabilitiesEnvelope(minecraftVersion: String): ByteArray =
      envelope(TYPE_SERVER_CAPABILITIES, UUID(0L, 0L)) {
        writeInt(serverCapabilities(minecraftVersion))
      }

  fun bankConsentEnvelope(allowed: Boolean, manifestHash: ByteArray): ByteArray {
    require(manifestHash.size == 32)
    require((!allowed && manifestHash.all { it == 0.toByte() }) || (allowed && manifestHash.any { it != 0.toByte() }))
    return envelope(TYPE_BANK_CONSENT, UUID(0L, 0L)) {
      writeByte(if (allowed) 1 else 0)
      write(manifestHash)
    }
  }

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

  private fun compareUtf8(left: String, right: String): Int {
    val a = left.toByteArray(Charsets.UTF_8)
    val b = right.toByteArray(Charsets.UTF_8)
    val common = minOf(a.size, b.size)
    for (index in 0 until common) {
      val comparison = (a[index].toInt() and 0xff).compareTo(b[index].toInt() and 0xff)
      if (comparison != 0) return comparison
    }
    return a.size.compareTo(b.size)
  }

  private fun canonicalEventId(value: String): String {
    val canonical = value.lowercase().let { if (':' in it) it else "minecraft:$it" }
    require(canonical.toByteArray(Charsets.UTF_8).size in 1..256)
    require(canonical.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+")))
    return canonical
  }
}
