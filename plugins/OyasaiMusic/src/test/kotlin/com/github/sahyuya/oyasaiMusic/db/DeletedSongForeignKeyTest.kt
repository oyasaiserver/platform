package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.audio.PlaybackMode
import java.io.File
import java.lang.reflect.Proxy
import java.nio.file.Files
import java.util.UUID
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.plugin.Plugin

class DeletedSongForeignKeyTest {
  private fun fakePlugin(dataFolder: File): Plugin {
    val logger = Logger.getLogger("OyasaiMusicTest")
    return Proxy.newProxyInstance(
        Plugin::class.java.classLoader,
        arrayOf(Plugin::class.java),
    ) { _, method, _ ->
      when (method.name) {
        "getDataFolder" -> dataFolder
        "getLogger" -> logger
        "getName" -> "OyasaiMusic"
        "isEnabled" -> true
        else -> null
      }
    } as Plugin
  }

  @Test
  fun `operations against deleted song or playlist return safely without foreign key exception`() {
    val tempDir = Files.createTempDirectory("oyasaimusic-fk-test").toFile()
    val db = DatabaseManager(fakePlugin(tempDir), "test.db")
    db.connect()
    try {
      val songRepo = SongRepository(db)
      val socialRepo = SocialRepository(db)
      val playlistRepo = PlaylistRepository(db)
      val prefRepo = PlaybackPreferenceRepository(db)
      val saleRepo = RecordSaleRepository(db)
      val userRepo = UserRepository(db)

      val author = UUID.randomUUID()
      val listener = UUID.randomUUID()

      val songId = songRepo.insertDraft(author, "Test Song", 120, "MUSIC_DISC_13", 1000, "1.bin")
      val playlistId = playlistRepo.create(listener, "My Playlist")

      // Delete the song and playlist before async operations arrive.
      songRepo.delete(songId)
      playlistRepo.delete(playlistId)

      assertFalse(
          socialRepo.registerQualifiedView(
              listenerUuid = listener,
              authorUuid = author,
              songId = songId,
              timestamp = 1_700_000_000L,
              hourLimit = 3,
              dayLimit = 10,
              monetizationEligible = true,
              viewsPerPoint = 1,
          )
      )
      assertFalse(socialRepo.registerLikeWithAuthorReward(listener, author, songId, 2))
      assertFalse(socialRepo.addFavorite(listener, songId))
      assertFalse(playlistRepo.addSong(playlistId, songId))

      prefRepo.setMode(listener, songId, PlaybackMode.POSITIONAL)
      assertNull(prefRepo.getMode(listener, songId))

      // If payment already succeeded before song deletion, author share is still credited without
      // FK failure.
      saleRepo.recordSale(
          songId = songId,
          buyerUuid = listener,
          authorUuid = author,
          grossAmount = 1000,
          authorShare = 800,
          creditAuthor = true,
      )
      assertEquals(800L, userRepo.get(author).pendingMoney)

      // Existing song and playlist still work as expected.
      val activeSongId =
          songRepo.insertDraft(author, "Active Song", 120, "MUSIC_DISC_13", 1000, "2.bin")
      val activePlaylistId = playlistRepo.create(listener, "Active Playlist")
      assertTrue(
          socialRepo.registerQualifiedView(
              listenerUuid = listener,
              authorUuid = author,
              songId = activeSongId,
              timestamp = 1_700_000_000L,
              hourLimit = 3,
              dayLimit = 10,
              monetizationEligible = true,
              viewsPerPoint = 1,
          )
      )
      assertEquals(1L, songRepo.findById(activeSongId)?.views)
      assertEquals(1L, userRepo.get(author).pendingPoints)
      assertTrue(socialRepo.registerLikeWithAuthorReward(listener, author, activeSongId, 2))
      assertTrue(socialRepo.addFavorite(listener, activeSongId))
      assertTrue(playlistRepo.addSong(activePlaylistId, activeSongId))
      assertFalse(playlistRepo.addSong(playlistId, activeSongId))
    } finally {
      db.close()
      tempDir.deleteRecursively()
    }
  }
}
