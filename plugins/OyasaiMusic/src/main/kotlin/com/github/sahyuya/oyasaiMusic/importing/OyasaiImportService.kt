package com.github.sahyuya.oyasaiMusic.importing

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.model.Song
import java.io.File
import java.nio.file.Files
import java.util.UUID

/** OMMTファイルのバイト列を、非公開のOyasaiMusic楽曲へ変換する。 */
class OyasaiImportService(private val plugin: OyasaiMusic) {
  private val importDirectory = File(plugin.dataFolder, "import")
  private val processedDirectory = File(importDirectory, "processed")

  init {
    importDirectory.mkdirs()
    processedDirectory.mkdirs()
  }

  data class ImportResult(
      val song: Song,
      val noteCount: Int,
      val sourceMoved: Boolean?,
  )

  fun importBytesFor(authorUuid: UUID, authorName: String, bytes: ByteArray): ImportResult =
      persistImported(authorUuid, authorName, OyasaiMidiImportFile.read(bytes))

  private fun persistImported(
      authorUuid: UUID,
      authorName: String,
      imported: OyasaiMidiImportFile.ImportedSong,
  ): ImportResult {
    require(imported.notes.isNotEmpty()) { "インポートできるノートがありません。" }
    val authorDirectory =
        authorName.removePrefix(".").replace(Regex("[\\\\/:*?\"<>|]"), "_").ifBlank {
          authorUuid.toString()
        }
    val relativeAudioName = "$authorDirectory/${UUID.randomUUID()}.bin"
    val audioFile = File(plugin.audioDirectory, relativeAudioName)
    var songId: Long? = null
    try {
      SongAudioFile.write(audioFile, imported.notes)
      songId =
          plugin.songRepository.insertDraft(
              authorUuid = authorUuid,
              title = imported.title,
              bpm = imported.bpm,
              recordMaterial =
                  plugin.config.getString("recording.default-record-material", "MUSIC_DISC_13")
                      ?: "MUSIC_DISC_13",
              price = plugin.config.getInt("recording.default-price", 1000),
              fileName = relativeAudioName,
              supportsPositional = imported.notes.any { it.pan != 0 },
          )
      val savedSong =
          plugin.songRepository.findById(songId)
              ?: throw IllegalStateException("保存した楽曲を再取得できませんでした。")
      return ImportResult(savedSong, imported.notes.size, null)
    } catch (error: Exception) {
      if (songId != null) plugin.songRepository.delete(songId)
      Files.deleteIfExists(audioFile.toPath())
      throw error
    }
  }
}
