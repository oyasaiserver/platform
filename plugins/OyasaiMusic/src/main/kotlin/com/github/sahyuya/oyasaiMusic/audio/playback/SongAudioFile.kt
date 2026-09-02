package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.io.BufferedInputStream
import java.io.BufferedOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.io.File

/**
 * 音源データ設計（データ・システム設計書 2章）に基づく独自バイナリ(.bin)フォーマットの読み書きを行う。
 *
 * ヘッダー(16バイト固定): 0-3 : マジックナンバー "OYMB" (0x4F 0x59 0x4D 0x42) 4-5 : フォーマットバージョン (Short) 6-7 : 予約領域
 * (将来拡張用, 現状は0) 8-11 : 総音符数 (Int) 12-15 : 総再生時間ミリ秒 (Int)
 *
 * version 1のペイロード(8バイト/音符 の連続配列): 0-3 : Time (Int, 発音ミリ秒) 4 : Inst (Byte, 楽器ID 0〜255 ※符号なしとして解釈) 5
 * : Pitch (Byte, 音階 0〜24) 6 : Volume (Byte, 音量 0〜100) 7 : Pan (Byte, 定位 -100〜100, 符号あり)
 *
 * version 2では固定8バイトの直後に、カスタム音源パスの長さ(Short)とUTF-8文字列を続ける。 version
 * 3ではさらにパターン固定用seed(Long)を続ける。version 4はPitchをi16のセント値に置き換える。
 */
object SongAudioFile {

  private const val MAGIC = 0x4F594D42 // "OYMB"
  const val HEADER_SIZE = 16
  const val NOTE_SIZE = 8
  const val CURRENT_VERSION: Short = 4
  private const val MAX_NOTES = 1_000_000

  data class SongAudio(
      val version: Int,
      val totalDurationMs: Int,
      val notes: List<NoteEvent>,
  )

  /** 音符リストを .bin ファイルへ書き出す。 再生時のスケジューリングを単純化するため、書き出し前に時刻昇順へソートする。 */
  fun write(file: File, notes: List<NoteEvent>) {
    file.parentFile?.mkdirs()
    val sorted = notes.sortedBy { it.timeMs }
    val totalDuration = sorted.maxOfOrNull { it.timeMs } ?: 0

    val version = if (sorted.any { it.pitchCents % 100 != 0 || it.pitchCents !in 0..2400 }) 4 else 3
    DataOutputStream(BufferedOutputStream(file.outputStream())).use { out ->
      out.writeInt(MAGIC)
      out.writeShort(version)
      out.writeShort(0) // 予約領域
      out.writeInt(sorted.size)
      out.writeInt(totalDuration)

      for (note in sorted) {
        out.writeInt(note.timeMs)
        out.writeByte(note.instrument)
        if (version == 4) out.writeShort(note.pitchCents) else out.writeByte(note.pitch.toInt())
        out.writeByte(note.volume)
        out.writeByte(note.pan) // Byteの範囲(-128..127)にそのまま収まる(-100..100)
        val customSound = note.customSound?.toByteArray(Charsets.UTF_8) ?: ByteArray(0)
        require(customSound.size <= 256) { "カスタム音源IDが長すぎます" }
        out.writeShort(customSound.size)
        out.write(customSound)
        out.writeLong(note.customSoundSeed ?: 0L)
      }
    }
  }

  /** .bin ファイルを読み込み、ヘッダーと音符リストを返す。 */
  fun read(file: File): SongAudio {
    require(file.isFile) { "音源ファイルが見つかりません: ${file.name}" }
    require(file.length() >= HEADER_SIZE) { "音源ファイルのヘッダーが不完全です: ${file.name}" }
    DataInputStream(BufferedInputStream(file.inputStream())).use { input ->
      val magic = input.readInt()
      require(magic == MAGIC) { "不正な音源ファイルです（マジックナンバー不一致）: ${file.name}" }
      val version = input.readUnsignedShort()
      val reserved = input.readUnsignedShort()
      val totalNotes = input.readInt()
      val totalDuration = input.readInt()
      require(version in 1..CURRENT_VERSION.toInt()) {
        "未対応の音源フォーマット(version=$version): ${file.name}"
      }
      if (version == 4) require(reserved == 0) { "音源ファイルの予約領域が不正です: ${file.name}" }
      require(totalNotes in 0..MAX_NOTES) { "不正な音符数です: $totalNotes" }
      require(totalDuration >= 0) { "不正な総再生時間です: $totalDuration" }
      if (version == 1) {
        val expectedLength = HEADER_SIZE.toLong() + totalNotes.toLong() * NOTE_SIZE
        require(file.length() == expectedLength) { "音源ファイルが途中で切れているか余分なデータがあります: ${file.name}" }
      }

      val notes = ArrayList<NoteEvent>(totalNotes)
      var previousTime = 0
      repeat(totalNotes) {
        val timeMs = input.readInt()
        val inst = input.readUnsignedByte()
        val pitchCents = if (version == 4) input.readShort().toInt() else input.readUnsignedByte() * 100
        val volume = input.readUnsignedByte()
        val pan = input.readByte().toInt() // 符号あり読み込み(-128..127)
        val customSound =
            if (version >= 2) {
              val length = input.readUnsignedShort()
              require(length <= 256) { "カスタム音源IDが長すぎます: ${file.name}" }
              val bytes = input.readNBytes(length)
              require(bytes.size == length) { "音源ファイルが途中で切れています: ${file.name}" }
              bytes.toString(Charsets.UTF_8).ifBlank { null }
            } else null
        val rawCustomSoundSeed = if (version >= 3) input.readLong() else 0L
        if (version == 4) {
          require(timeMs in previousTime..totalDuration) { "v4音符の時刻が不正です: $timeMs" }
          require(inst in 0..15) { "v4音符の楽器IDが不正です: $inst" }
          require(pitchCents in -5400..7300) { "v4音符の音高が不正です: $pitchCents" }
          require(volume in 0..100) { "v4音符の音量が不正です: $volume" }
          require(pan in -100..100) { "v4音符の定位が不正です: $pan" }
          require(customSound != null || rawCustomSoundSeed == 0L) { "通常音符にカスタムseedが設定されています" }
        }
        previousTime = timeMs
        val customSoundSeed = rawCustomSoundSeed.takeIf { version >= 3 && customSound != null }
        notes +=
            NoteEvent(
                timeMs = timeMs,
                instrument = inst,
                pitch = foldForVanilla(pitchCents).toByte(),
                volume = if (version == 4) volume else volume.coerceIn(0, 100),
                pan = if (version == 4) pan else pan.coerceIn(-100, 100),
                customSound = customSound,
                customSoundSeed = customSoundSeed,
                pitchCents = if (version == 4) pitchCents else pitchCents.coerceIn(-5400, 7300),
            )
      }

      require(input.read() == -1) { "音源ファイルに余分なデータがあります: ${file.name}" }

      return SongAudio(version = version, totalDurationMs = totalDuration, notes = notes)
    }
  }

  private fun foldForVanilla(centsInput: Int): Int {
    var cents = centsInput
    while (cents < 0) cents += 1200
    while (cents > 2400) cents -= 1200
    return Math.floorDiv(cents, 100).coerceIn(0, 24)
  }
}
