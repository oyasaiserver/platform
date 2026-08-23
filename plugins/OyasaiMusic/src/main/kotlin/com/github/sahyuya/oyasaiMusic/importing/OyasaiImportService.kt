package com.github.sahyuya.oyasaiMusic.importing

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.model.Song
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/** サーバーのimportフォルダに置かれたOMMTファイルを、非公開のOyasaiMusic楽曲へ変換する。 */
class OyasaiImportService(private val plugin: OyasaiMusic) {
  private val importDirectory = File(plugin.dataFolder, "import")
  private val processedDirectory = File(importDirectory, "processed")
  private val importingFiles = ConcurrentHashMap.newKeySet<String>()

  init {
    importDirectory.mkdirs()
    processedDirectory.mkdirs()
  }

  data class ImportResult(
      val song: Song,
      val noteCount: Int,
      val sourceMoved: Boolean?,
  )

  fun availableFiles(prefix: String = ""): List<String> =
      importDirectory
          .listFiles { file ->
            file.isFile &&
                file.extension.equals("oyasai", ignoreCase = true) &&
                file.name.startsWith(prefix, ignoreCase = true)
          }
          ?.map { it.name }
          ?.sortedWith(String.CASE_INSENSITIVE_ORDER)
          .orEmpty()
          .take(100)

  fun importFor(authorUuid: UUID, authorName: String, requestedName: String): ImportResult {
    val source = resolveImportFile(requestedName)
    require(importingFiles.add(source.name)) { "このファイルは別のプレイヤーがインポート中です。" }
    try {
      val imported = OyasaiMidiImportFile.read(source)
      val result = persistImported(authorUuid, authorName, imported)
      return result.copy(sourceMoved = moveToProcessed(source))
    } finally {
      importingFiles.remove(source.name)
    }
  }

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

  private fun resolveImportFile(requestedName: String): File {
    val name = requestedName.trim()
    require(name.isNotBlank()) { "ファイル名を指定してください。" }
    require(!name.contains('/') && !name.contains('\\') && name != "." && name != "..") {
      "importフォルダ直下のファイル名だけを指定してください。"
    }
    require(name.endsWith(".oyasai", ignoreCase = true)) { ".oyasaiファイルを指定してください。" }
    val root = importDirectory.canonicalFile
    val file = File(root, name).canonicalFile
    require(file.parentFile == root) { "importフォルダ外のファイルは指定できません。" }
    require(file.isFile) { "ファイルが見つかりません: $name" }
    return file
  }

  private fun moveToProcessed(source: File): Boolean =
      try {
        val destination =
            generateSequence(File(processedDirectory, source.name)) { candidate ->
                  File(
                      processedDirectory,
                      "${candidate.nameWithoutExtension}-${System.currentTimeMillis()}.oyasai",
                  )
                }
                .first { !it.exists() }
        try {
          Files.move(source.toPath(), destination.toPath(), StandardCopyOption.ATOMIC_MOVE)
        } catch (_: Exception) {
          Files.move(source.toPath(), destination.toPath())
        }
        true
      } catch (error: Exception) {
        plugin.logger.warning("インポート済みファイルをprocessedへ移動できませんでした: ${error.message}")
        false
      }
}
