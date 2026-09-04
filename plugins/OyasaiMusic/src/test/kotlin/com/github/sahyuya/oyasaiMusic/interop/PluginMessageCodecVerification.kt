package com.github.sahyuya.oyasaiMusic.interop

import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.nio.file.Files
import java.nio.file.Path
import java.util.Base64
import java.util.UUID
import java.util.zip.InflaterInputStream

/** Pure JVM verification: no Bukkit server, commands, chat acknowledgement or Plugin Message bus is needed. */
object PluginMessageCodecVerification {
  @JvmStatic
  fun main(args: Array<String>) {
    val id = UUID.fromString("00112233-4455-6677-8899-aabbccddeeff")
    verifyTransportBounds()
    verifyPlaybackEnvelope(id)
    verifyPlaybackV2()
    verifyServerCapabilities()
    verifyUploadRequestAndBegin(id)
    verifyServerResponses(id)
    verifyMalformedPacketsFailClosed(id)
    verifySharedOymiGoldenFixtures()
    verifyUploadV4ExtendedRangeAndTrumpet()
    verifySongAudioCompatibility()
    verifyBedrockTransferCodec(id)
    println("PluginMessageCodecVerification: PASS")
  }

  private fun verifyTransportBounds() {
    check(!PluginMessageBounds.accepts(17))
    check(PluginMessageBounds.accepts(18))
    check(PluginMessageBounds.accepts(24 * 1024))
    check(!PluginMessageBounds.accepts(24 * 1024 + 1))
    check(!PluginMessageBounds.accepts(2_100_000))
  }

  private fun verifyPlaybackEnvelope(id: UUID) {
    val bytes = PlaybackWireCodec.encode(PlaybackBuffer.TYPE_READY, id) { write(ByteArray(32) { it.toByte() }) }
    val decoded = PlaybackWireCodec.decode(bytes)
    check(decoded.type == PlaybackBuffer.TYPE_READY && decoded.id == id && decoded.body.contentEquals(ByteArray(32) { it.toByte() }))
    expectFailure { PlaybackWireCodec.decode(bytes + ByteArray(PlaybackWireCodec.MAX)) }
  }

  private fun verifyServerCapabilities() {
    check(PlaybackBuffer.serverCapabilities("1.21.11") == 0)
    check(PlaybackBuffer.serverCapabilities("Purpur-1.21.11-1234") == 0)
    check(PlaybackBuffer.serverCapabilities("26.0") == 0)
    check(PlaybackBuffer.serverCapabilities("26.1.2") == 0)
    val all = PlaybackBuffer.CAP_BRASS_NOTE_BLOCK or PlaybackBuffer.CAP_OYPB_V2 or PlaybackBuffer.CAP_BANK_MANIFEST_V1 or PlaybackBuffer.CAP_SOUND_CATALOG_26_2
    check(PlaybackBuffer.serverCapabilities("Purpur-26.2-42") == all)
    check(PlaybackBuffer.serverCapabilities("27.1") == 0)
    check(PlaybackBuffer.serverCapabilities("unknown") == 0)
    val decoded = PlaybackWireCodec.decode(PlaybackBuffer.serverCapabilitiesEnvelope("26.2"))
    check(decoded.type == PlaybackBuffer.TYPE_SERVER_CAPABILITIES)
    check(decoded.id == UUID(0L, 0L))
    check(decoded.body.contentEquals(byteArrayOf(0, 0, 0, all.toByte())))
  }

  private fun verifyPlaybackV2() {
    val manifest = ByteArray(32) { (it + 1).toByte() }
    val notes =
        listOf(
            NoteEvent(125, 16, 12, 90, -50, pitchCents = -25),
            NoteEvent(
                250,
                0,
                12,
                80,
                75,
                customSound = "minecraft:ui.button.click",
                customSoundSeed = 42L,
                pitchCents = 2_550,
            ),
        )
    check(PlaybackBuffer.prepare(notes) == null)
    val fold = PlaybackBuffer.prepareV2(notes, customPattern = { if (it.customSound != null) 1 else null })
        ?: error("folded OYPB v2 was not prepared")
    check(fold.mode == 1 && fold.bankPolicy == 0 && fold.manifestHash.all { it == 0.toByte() })
    check(fold.firstNoteMs == 125 && fold.durationMs == 250 && fold.chunks.isNotEmpty())
    val bank = PlaybackBuffer.prepareV2(notes, bankPolicy = 1, manifestHash = manifest, customPattern = { if (it.customSound != null) 1 else null })
        ?: error("bank OYPB v2 was not prepared")
    check(bank.manifestHash.contentEquals(manifest) && !bank.compressed.contentEquals(fold.compressed))
    val raw = InflaterInputStream(bank.compressed.inputStream()).use { it.readBytes() }
    DataInputStream(raw.inputStream()).use { input ->
      check(input.readInt() == 0x4F595042 && input.readUnsignedByte() == 2)
      check(readVarUInt(input) == 250)
      check(readVarUInt(input) == 2)
      check(readVarUInt(input) == 1)
      check(input.readUnsignedByte() == 1 && input.readUnsignedByte() == 1)
      check(input.readNBytes(32).contentEquals(manifest))
    }
    check(PlaybackBuffer.prepareV2(notes, bankPolicy = 1, manifestHash = ByteArray(32), customPattern = { 1 }) == null)
    check(PlaybackBuffer.prepareV2(notes, customPattern = { null }) == null)
  }

  private fun readVarUInt(input: DataInputStream): Int {
    var value = 0
    repeat(5) { index ->
      val byte = input.readUnsignedByte()
      value = value or ((byte and 127) shl (index * 7))
      if (byte and 128 == 0) return value
    }
    error("overlong varuint")
  }

  private fun verifyUploadRequestAndBegin(id: UUID) {
    check(UploadPacketCodec.decodeClient(packet(UploadPacketCodec.TYPE_REQUEST, id)) == UploadPacketCodec.Request(id))
    val hash = ByteArray(32) { (it * 3).toByte() }
    val decoded = UploadPacketCodec.decodeClient(packet(UploadPacketCodec.TYPE_BEGIN, id) {
      writeShort(2); writeInt(25_000); writeInt(48_000); writeInt(60_000); writeInt(7_000); write(hash)
    }) as UploadPacketCodec.Begin
    check(decoded.chunks == 2 && decoded.compressedBytes == 25_000 && decoded.transportBytes == 48_000)
    check(decoded.oymiBytes == 60_000 && decoded.notes == 7_000 && decoded.canonicalHash.contentEquals(hash))
  }

  private fun verifyServerResponses(id: UUID) {
    val ready = UploadPacketCodec.decodeServer(UploadPacketCodec.ready(id)) as UploadPacketCodec.Ready
    check(ready.capabilities == UploadPacketCodec.CAPABILITIES && ready.chunkBytes == UploadPacketCodec.CHUNK_BYTES)
    val done = UploadPacketCodec.decodeServer(UploadPacketCodec.status(id, UploadPacketCodec.STATUS_DONE, "2s")) as UploadPacketCodec.Status
    check(done.status == UploadPacketCodec.STATUS_DONE && done.detail == "2s")
  }

  private fun verifyMalformedPacketsFailClosed(id: UUID) {
    expectFailure { UploadPacketCodec.decodeClient(byteArrayOf(UploadPacketCodec.VERSION.toByte())) }
    expectFailure { UploadPacketCodec.decodeClient(packet(127, id)) }
    expectFailure {
      UploadPacketCodec.decodeClient(packet(UploadPacketCodec.TYPE_CHUNK, id) {
        writeShort(0); writeShort(1); writeShort(UploadPacketCodec.CHUNK_BYTES + 1); write(ByteArray(UploadPacketCodec.CHUNK_BYTES + 1))
      })
    }
    expectFailure { UploadPacketCodec.decodeClient(ByteArray(UploadPacketCodec.MAX_PACKET_BYTES + 1)) }
  }

  private fun verifyUploadV4ExtendedRangeAndTrumpet() {
    // v4 extended pitch: -5400..7300 must round-trip, outside must fail.
    val metadata = "{}".toByteArray()

    // Build v4 compact with explicit times 0,100,200... to exercise extended pitch and trumpet.
    fun buildV4Compact(pitches: List<Int>, instruments: List<Int>): ByteArray {
      require(pitches.size == instruments.size)
      return ByteArrayOutputStream().use { bytes ->
        DataOutputStream(bytes).use { out ->
          out.writeInt(0x4F594D43)
          out.writeByte(4)
          writeVarUInt(out, metadata.size)
          writeVarUInt(out, pitches.size)
          writeVarUInt(out, 5000)
          out.write(metadata)
          var prev = 0
          pitches.forEachIndexed { idx, cents ->
            val time = idx * 100
            val delta = time - prev
            writeVarUInt(out, delta)
            prev = time
            out.writeByte(instruments[idx])
            out.writeShort(cents)
            out.writeByte(90)
            out.writeByte(100) // pan 0 -> 100
          }
        }
        bytes.toByteArray()
      }
    }

    // Boundary pitches must succeed.
    val okPitches = listOf(-5400, -1000, 0, 2400, 2500, 7300)
    val okInsts = listOf(0, 0, 0, 0, 0, 0)
    val okCompact = buildV4Compact(okPitches, okInsts)
    val okOymi = UploadV2Codec.reconstructOymi(okCompact)
    // OYMI v4 record is 9 bytes: time(4)+inst(1)+pitch(2)+vol(1)+pan(1)
    check(okOymi.size == 20 + metadata.size + okPitches.size * 9) { "OYMI v4 size mismatch" }
    // Verify validateOymi's size formula matches.
    run {
      val buf = java.nio.ByteBuffer.wrap(okOymi)
      check(buf.int == 0x4F594D49)
      val v = buf.short.toInt()
      check(v == 4)
      check(buf.short.toInt() == 0)
      val meta = buf.int
      val notes = buf.int
      buf.int // duration
      check(meta == metadata.size && notes == okPitches.size)
      val recordBytes = if (v == 4) 9L else 8L
      check(20L + meta.toLong() + notes.toLong() * recordBytes == okOymi.size.toLong())
    }

    // Trumpet 16..19 must succeed in v4.
    val trumpetPitches = listOf(1200, 1200, 1200, 1200)
    val trumpets = listOf(16, 17, 18, 19)
    val trumpetCompact = buildV4Compact(trumpetPitches, trumpets)
    val trumpetOymi = UploadV2Codec.reconstructOymi(trumpetCompact)
    check(trumpetOymi.size == 20 + metadata.size + 4 * 9)

    // Instrument 20 must fail.
    expectFailure { UploadV2Codec.reconstructOymi(buildV4Compact(listOf(1200), listOf(20))) }
    // Pitch out of range must fail.
    expectFailure { UploadV2Codec.reconstructOymi(buildV4Compact(listOf(-5401), listOf(0))) }
    expectFailure { UploadV2Codec.reconstructOymi(buildV4Compact(listOf(7301), listOf(0))) }
    // v4 golden fixture must still pass validateOymi size check.
    val v4Fixture = Base64.getDecoder().decode(Files.readString(Path.of("..", "..", "..", "docs", "interop", "fixtures", "minimal-oymi-v4-pitch-cents.oyasai.base64")).trim())
    val v4FixtureCompactB64 = "T1lNQwReAXh7ImZvcm1hdCI6Im95YXNhaS1taWRpLWltcG9ydCIsInZlcnNpb24iOjQsInNvbmciOnsidGl0bGUiOiJFeHRlbmRlZCBjZW50cyIsImRpc3BsYXlCcG0iOjEyMH19eAAJxGRk"
    val v4Compact = Base64.getDecoder().decode(v4FixtureCompactB64)
    val reconstructed = UploadV2Codec.reconstructOymi(v4Compact)
    check(reconstructed.contentEquals(v4Fixture)) { "v4 fixture reconstruct mismatch" }
  }

  private fun writeVarUInt(out: DataOutputStream, value: Int) {
    var v = value
    repeat(5) {
      if (v and -128 == 0) { out.writeByte(v); return }
      out.writeByte((v and 127) or 128)
      v = v ushr 7
    }
    error("overlong varuint")
  }

  /**
   * Golden OYMC vectors emitted by OMMT for the shared v1/v2/v3 OYMI fixtures.
   * Paper must reconstruct byte-for-byte the original fixture before it asks the authoritative
   * importer to validate custom IDs/patterns.
   */
  private fun verifySharedOymiGoldenFixtures() {
    val vectors =
        mapOf(
            "minimal-oymi-v1.oyasai.base64" to
                "T1lNQwFXAQB7ImZvcm1hdCI6Im95YXNhaS1taWRpLWltcG9ydCIsInZlcnNpb24iOjEsInNvbmciOnsidGl0bGUiOiJGaXh0dXJlIiwiZGlzcGxheUJwbSI6MTIwfX0ABmRk",
            "minimal-oymi-v2-custom.oyasai.base64" to
                "T1lNQwKSAQEAeyJmb3JtYXQiOiJveWFzYWktbWlkaS1pbXBvcnQiLCJ2ZXJzaW9uIjoyLCJzb25nIjp7InRpdGxlIjoiQ3VzdG9tIGJlbGwiLCJkaXNwbGF5QnBtIjoxMjB9LCJjdXN0b21Tb3VuZHMiOnsiMCI6Im1pbmVjcmFmdDpibG9jay5ub3RlX2Jsb2NrLmJlbGwifX0ABlBk",
            "minimal-oymi-v3-custom-pattern.oyasai.base64" to
                "T1lNQwOhAQEAeyJmb3JtYXQiOiJveWFzYWktbWlkaS1pbXBvcnQiLCJ2ZXJzaW9uIjozLCJzb25nIjp7InRpdGxlIjoiRml4ZWQgcGF0dGVybiIsImRpc3BsYXlCcG0iOjEyMH0sImN1c3RvbVNvdW5kcyI6eyIwIjp7ImV2ZW50IjoibWluZWNyYWZ0OmFtYmllbnQuY2F2ZSIsInBhdHRlcm4iOjJ9fX0ABlBk",
            "minimal-oymi-v4-pitch-cents.oyasai.base64" to
                "T1lNQwReAXh7ImZvcm1hdCI6Im95YXNhaS1taWRpLWltcG9ydCIsInZlcnNpb24iOjQsInNvbmciOnsidGl0bGUiOiJFeHRlbmRlZCBjZW50cyIsImRpc3BsYXlCcG0iOjEyMH19eAAJxGRk",
        )
    vectors.forEach { (fixture, compactBase64) ->
      val expected = Base64.getDecoder().decode(Files.readString(Path.of("..", "..", "..", "docs", "interop", "fixtures", fixture)).trim())
      check(expected.contentEquals(UploadV2Codec.reconstructOymi(Base64.getDecoder().decode(compactBase64)))) {
        "Paper OYMC decode differs from OMMT fixture: $fixture"
      }
    }
  }

  private fun verifySongAudioCompatibility() {
    val legacyFile = Files.createTempFile("oymb-v3-", ".bin").toFile()
    val extendedFile = Files.createTempFile("oymb-v4-", ".bin").toFile()
    val malformedFile = Files.createTempFile("oymb-v4-bad-", ".bin").toFile()
    try {
      SongAudioFile.write(legacyFile, listOf(NoteEvent(0, 0, 12.toByte(), 100, 0)))
      val legacy = SongAudioFile.read(legacyFile)
      check(legacy.version == 3 && legacy.notes.single().pitchCents == 1_200)

      SongAudioFile.write(
          extendedFile,
          listOf(
              NoteEvent(0, 0, 12.toByte(), 100, 0, pitchCents = -25),
              NoteEvent(120, 0, 12.toByte(), 90, -10, pitchCents = 2_500),
          ),
      )
      val extended = SongAudioFile.read(extendedFile)
      check(extended.version == 4 && extended.notes.map { it.pitchCents } == listOf(-25, 2_500))

      val malformed = Files.readAllBytes(extendedFile.toPath())
      malformed[7] = 1 // v4 reserved field must be zero.
      Files.write(malformedFile.toPath(), malformed)
      expectFailure { SongAudioFile.read(malformedFile) }
    } finally {
      legacyFile.delete(); extendedFile.delete(); malformedFile.delete()
    }
  }

  private fun verifyBedrockTransferCodec(id: UUID) {
    val allow = BedrockTransferCodec.encode(id, true, "bank-26.2")
    val decoded = BedrockTransferCodec.decode(allow) ?: error("bedrock transfer round-trip failed")
    check(decoded.playerId == id && decoded.allow && decoded.packId == "bank-26.2")
    val deny = BedrockTransferCodec.decode(BedrockTransferCodec.encode(id, false, "")) ?: error("deny round-trip failed")
    check(!deny.allow && deny.packId.isEmpty())
    check(BedrockTransferCodec.encode(id, true, "x".repeat(64)).size == BedrockTransferCodec.MAX)
    expectFailure { BedrockTransferCodec.encode(id, true, "x".repeat(65)) }
    check(BedrockTransferCodec.decode(byteArrayOf(2) + allow.copyOfRange(1, allow.size)) == null) // bad version
    check(BedrockTransferCodec.decode(allow + byteArrayOf(0)) == null) // trailing
    check(BedrockTransferCodec.decode(allow.copyOfRange(0, allow.size - 1)) == null) // truncated
    check(BedrockTransferCodec.decode(ByteArray(10)) == null) // too short
  }

  private fun packet(type: Int, id: UUID, body: DataOutputStream.() -> Unit = {}): ByteArray =
      ByteArrayOutputStream().use { bytes ->
        DataOutputStream(bytes).use { output ->
          output.writeByte(UploadPacketCodec.VERSION); output.writeByte(type)
          output.writeLong(id.mostSignificantBits); output.writeLong(id.leastSignificantBits); output.body()
        }
        bytes.toByteArray()
      }

  private fun expectFailure(action: () -> Unit) {
    check(runCatching(action).isFailure) { "malformed packet unexpectedly decoded" }
  }
}
