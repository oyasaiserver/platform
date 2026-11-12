package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.io.File
import java.util.UUID

/** `/record stop` 時に新規下書きではなく既存楽曲の音源を差し替える録音先。 */
data class RecordingReplacementTarget(
    val songId: Long,
    val fileName: String,
    val recordIdentity: String,
)

/** Writes a new file before switching the database reference. Call off the game thread. */
internal fun OyasaiMusic.replaceRecordingAudio(
    target: RecordingReplacementTarget,
    notes: List<NoteEvent>,
    bpm: Int? = null,
) {
  val replacement = File(File(target.fileName).parent, "${UUID.randomUUID()}.bin")
  val output = File(audioDirectory, replacement.path)
  val supportsPositional = notes.any { it.pan != 0 }
  var switched = false
  try {
    SongAudioFile.write(output, notes)
    switched =
        songRepository.replaceAudio(
            target.songId,
            target.recordIdentity,
            target.fileName,
            replacement.path,
            supportsPositional,
            bpm,
        )
    check(switched) { "置換先の楽曲または音源が変更されました。" }
  } finally {
    if (!switched && output.exists() && !output.delete())
        logger.warning("差し替え用の一時音源を削除できませんでした: ${output.name}")
  }
  val previous = File(audioDirectory, target.fileName)
  if (previous.exists() && !previous.delete())
      logger.warning("差し替え済みの旧音源を削除できませんでした: ${previous.name}")
}
