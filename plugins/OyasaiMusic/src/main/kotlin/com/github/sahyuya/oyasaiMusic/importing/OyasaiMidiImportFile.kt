package com.github.sahyuya.oyasaiMusic.importing

import com.github.sahyuya.oyasaiMusic.audio.InstrumentMapper
import com.github.sahyuya.oyasaiMusic.audio.VanillaSoundCatalog
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.google.gson.JsonParser
import java.io.BufferedInputStream
import java.io.ByteArrayInputStream
import java.io.DataInputStream
import java.io.File
import java.io.InputStream
import org.bukkit.Instrument

/** OMMTが生成する、バージョンに依存しない楽器IDを持つ`.oyasai`ファイルを読み込む。 */
object OyasaiMidiImportFile {
  private const val MAGIC = 0x4F594D49 // OYMI
  private const val MIN_VERSION = 1
  private const val MAX_VERSION = 3
  private const val HEADER_SIZE = 20L
  private const val NOTE_SIZE = 8L
  private const val MAX_METADATA_BYTES = 16 * 1024 * 1024
  private const val MAX_EXISTING_OYMB_NOTES = 1_000_000L

  data class ImportedSong(
      val title: String,
      val bpm: Int,
      val durationMs: Long,
      val notes: List<NoteEvent>,
  )

  internal data class ResolvedSound(val eventKey: String, val seed: Long)

  fun read(file: File): ImportedSong {
    require(file.isFile) { "インポートファイルが見つかりません: ${file.name}" }
    require(file.length() >= HEADER_SIZE) { "インポートファイルのヘッダーが不足しています。" }
    return read(file.inputStream(), file.length(), ::resolveCatalogSound)
  }

  fun read(bytes: ByteArray): ImportedSong {
    require(bytes.size.toLong() >= HEADER_SIZE) { "インポートデータのヘッダーが不足しています。" }
    return read(ByteArrayInputStream(bytes), bytes.size.toLong(), ::resolveCatalogSound)
  }

  private fun read(
      source: InputStream,
      sourceLength: Long,
      soundResolver: (String, Int) -> ResolvedSound?,
  ): ImportedSong {
    DataInputStream(BufferedInputStream(source)).use { input ->
      require(input.readInt() == MAGIC) { "OMMTの.oyasaiファイルではありません。" }
      val version = input.readUnsignedShort()
      require(version in MIN_VERSION..MAX_VERSION) { "未対応の.oyasaiバージョンです: $version" }
      require(input.readUnsignedShort() == 0) { "予約領域が0ではありません。" }
      val metadataLength = input.readInt().toLong() and 0xFFFF_FFFFL
      val noteCount = input.readInt().toLong() and 0xFFFF_FFFFL
      val durationMs = input.readInt().toLong() and 0xFFFF_FFFFL

      require(metadataLength in 2..MAX_METADATA_BYTES.toLong()) { "メタデータ長が不正です。" }
      require(noteCount <= Int.MAX_VALUE.toLong()) { "このサーバーで扱えるノート数を超えています。" }
      require(noteCount <= MAX_EXISTING_OYMB_NOTES) {
        "現在のOyasaiMusic音源で読み込めるノート数（$MAX_EXISTING_OYMB_NOTES）を超えています。"
      }
      val expectedLength = HEADER_SIZE + metadataLength + noteCount * NOTE_SIZE
      require(sourceLength == expectedLength) { "データ長とヘッダー情報が一致しません。" }

      val metadataBytes = input.readNBytes(metadataLength.toInt())
      require(metadataBytes.size == metadataLength.toInt()) { "メタデータが途中で切れています。" }
      val metadata = metadataBytes.toString(Charsets.UTF_8)
      val metadataRoot =
          try {
            JsonParser.parseString(metadata).asJsonObject
          } catch (error: Exception) {
            throw IllegalArgumentException("メタデータJSONが不正です。", error)
          }
      require(metadataRoot.get("format")?.asString == "oyasai-midi-import") {
        "インポート形式の識別情報がありません。"
      }
      require(metadataRoot.get("version")?.asInt == version) { "メタデータのバージョンがヘッダーと一致しません。" }
      val customSounds = readCustomSounds(metadataRoot, version, noteCount.toInt(), soundResolver)
      val songMetadata = metadataRoot.getAsJsonObject("song")
      val title =
          runCatching { songMetadata?.get("title")?.asString }
              .getOrNull()
              ?.trim()
              ?.take(120)
              .orEmpty()
              .ifBlank { "無題の楽曲" }
      val bpm =
          runCatching { songMetadata?.get("displayBpm")?.asInt }.getOrNull()?.coerceIn(1, 60_000)
              ?: 120

      val notes = ArrayList<NoteEvent>(noteCount.toInt())
      repeat(noteCount.toInt()) { noteIndex ->
        val timeMs = input.readInt().toLong() and 0xFFFF_FFFFL
        val stableInstrumentId = input.readUnsignedByte()
        val pitch = input.readUnsignedByte()
        val volume = input.readUnsignedByte()
        val pan = input.readByte().toInt()
        require(timeMs <= Int.MAX_VALUE.toLong()) { "発音時刻がOyasaiMusicの上限を超えています。" }
        require(timeMs <= durationMs) { "総再生時間を超えるノートがあります。" }
        require(pitch in 0..24) { "音階が0〜24の範囲外です。" }
        require(volume in 0..100) { "音量が0〜100の範囲外です。" }
        require(pan in -100..100) { "Panが-100〜100の範囲外です。" }
        val instrument = stableInstrument(stableInstrumentId)
        notes +=
            NoteEvent(
                timeMs = timeMs.toInt(),
                instrument = InstrumentMapper.toId(instrument),
                pitch = pitch.toByte(),
                volume = volume,
                pan = pan,
                customSound = customSounds[noteIndex]?.eventKey,
                customSoundSeed = customSounds[noteIndex]?.seed,
            )
      }
      require(input.read() == -1) { "ファイル末尾に余分なデータがあります。" }
      return ImportedSong(title, bpm, durationMs, notes)
    }
  }

  /**
   * OYMI v2/v3 keep the canonical eight-byte note body unchanged and add only a sparse,
   * note-indexed sound map. v2 strings are retained as a compatibility input and mean pattern 1; v3
   * requires an explicit one-based pattern. The formal server catalog remains authoritative.
   */
  private fun readCustomSounds(
      metadataRoot: com.google.gson.JsonObject,
      version: Int,
      noteCount: Int,
      soundResolver: (String, Int) -> ResolvedSound?,
  ): Map<Int, ResolvedSound> {
    val member = metadataRoot.get("customSounds")
    if (version == 1) {
      require(member == null) { "OYMI v1にcustomSoundsは指定できません。" }
      return emptyMap()
    }
    require(member != null && member.isJsonObject) { "OYMI v2/v3にcustomSoundsが必要です。" }
    val result = LinkedHashMap<Int, ResolvedSound>()
    var previousIndex = -1
    member.asJsonObject.entrySet().forEach { (rawIndex, value) ->
      require(rawIndex.matches(Regex("0|[1-9][0-9]*"))) { "customSoundsのノート番号が不正です。" }
      val index = rawIndex.toIntOrNull()
      require(index != null && index in 0 until noteCount && index > previousIndex) {
        "customSoundsのノート番号が範囲外または未ソートです。"
      }
      val rawSound: String
      val pattern: Int
      if (version == 2) {
        require(value.isJsonPrimitive && value.asJsonPrimitive.isString) {
          "OYMI v2 customSoundsのサウンドIDが文字列ではありません。"
        }
        rawSound = value.asString.lowercase()
        pattern = 1
      } else {
        require(value.isJsonObject) { "OYMI v3 customSoundsはeventとpatternのオブジェクトで指定してください。" }
        val objectValue = value.asJsonObject
        require(objectValue.size() == 2 && objectValue.has("event") && objectValue.has("pattern")) {
          "OYMI v3 customSoundsにはeventとpatternだけを指定してください。"
        }
        rawSound =
            runCatching { objectValue.get("event").asString.lowercase() }
                .getOrElse { throw IllegalArgumentException("customSoundsのeventが不正です。") }
        pattern =
            runCatching { objectValue.get("pattern").asInt }
                .getOrElse { throw IllegalArgumentException("customSoundsのpatternが不正です。") }
        require(pattern in 1..65_535) { "customSoundsのpatternが範囲外です。" }
      }
      require(rawSound.matches(Regex("minecraft:[a-z0-9_./-]{1,246}"))) {
        "customSoundsのサウンドID形式が不正です。"
      }
      val resolvedSound = soundResolver(rawSound, pattern)
      require(resolvedSound != null) { "この1.21.11サーバーでは未対応のサウンドまたはパターンです: $rawSound #$pattern" }
      result[index] = resolvedSound
      previousIndex = index
    }
    require(result.isNotEmpty()) { "OYMI v2/v3のcustomSoundsが空です。" }
    return result
  }

  /** Pure metadata-validation seam; avoids bootstrapping Bukkit registries in codec tests. */
  internal fun readCustomSoundsForTesting(
      metadata: String,
      version: Int,
      noteCount: Int,
      soundResolver: (String, Int) -> ResolvedSound?,
  ): Map<Int, ResolvedSound> =
      readCustomSounds(
          JsonParser.parseString(metadata).asJsonObject,
          version,
          noteCount,
          soundResolver,
      )

  private fun resolveCatalogSound(rawSound: String, pattern: Int): ResolvedSound? =
      VanillaSoundCatalog.find(rawSound)?.selectionForPattern(pattern)?.let {
        ResolvedSound("minecraft:${it.eventKey}", it.seed)
      }

  private fun stableInstrument(id: Int): Instrument =
      when (id) {
        0 -> Instrument.PIANO
        1 -> Instrument.BASS_GUITAR
        2 -> Instrument.BASS_DRUM
        3 -> Instrument.SNARE_DRUM
        4 -> Instrument.STICKS
        5 -> Instrument.FLUTE
        6 -> Instrument.BELL
        7 -> Instrument.GUITAR
        8 -> Instrument.CHIME
        9 -> Instrument.XYLOPHONE
        10 -> Instrument.IRON_XYLOPHONE
        11 -> Instrument.COW_BELL
        12 -> Instrument.DIDGERIDOO
        13 -> Instrument.BIT
        14 -> Instrument.BANJO
        15 -> Instrument.PLING
        else -> throw IllegalArgumentException("未対応の安定楽器IDです: $id")
      }
}
