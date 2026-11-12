package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.audio.PlaybackMode
import java.nio.file.Path
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.junit.jupiter.api.io.TempDir

class StaleSongWriteTest {
  @TempDir lateinit var directory: Path

  @Test
  fun `deleted songs and reused IDs do not receive stale writes`() {
    val db = DatabaseManager(directory.resolve("music.db").toFile())
    db.connect()
    try {
      val owner = UUID.randomUUID()
      val listener = UUID.randomUUID()
      val songs = SongRepository(db)
      val social = SocialRepository(db)
      val preferences = PlaybackPreferenceRepository(db)
      val playlists = PlaylistRepository(db)
      val playlist = playlists.create(listener, "test")
      val id = songs.insertDraft(owner, "original", 120, "MUSIC_DISC_13", 0, "original.bin")
      val identity = assertNotNull(songs.findById(id)).recordIdentity
      fun registerView(identity: String) =
          social.registerQualifiedView(listener, owner, id, identity, 1_700_000_000, 3, 10, true, 1)

      assertEquals("original.bin", songs.deleteMatching(id, identity))
      assertFalse(registerView(identity))
      assertEquals(
          SocialRepository.FavoriteResult.STALE_SONG,
          social.addFavorite(listener, id, identity),
      )
      assertFalse(preferences.setMode(listener, id, identity, PlaybackMode.DEFAULT))
      assertEquals(
          PlaylistRepository.AddSongResult.STALE_TARGET,
          playlists.addSong(playlist, listener, id, identity),
      )

      assertEquals(
          id,
          songs.insertDraft(owner, "replacement", 120, "MUSIC_DISC_13", 0, "new.bin", true),
      )
      val replacement = assertNotNull(songs.findById(id))
      assertFalse(registerView(identity))
      assertFalse(social.registerLikeWithAuthorReward(listener, owner, id, 2, identity))
      assertEquals(
          SocialRepository.FavoriteResult.STALE_SONG,
          social.addFavorite(listener, id, identity),
      )
      assertFalse(preferences.setMode(listener, id, identity, PlaybackMode.POSITIONAL))
      assertEquals(
          PlaylistRepository.AddSongResult.STALE_TARGET,
          playlists.addSong(playlist, listener, id, identity),
      )
      assertNull(songs.deleteMatching(id, identity))
      assertFalse(songs.replaceAudio(id, identity, "original.bin", "orphan.bin", false))
      assertEquals("new.bin", assertNotNull(songs.findById(id)).fileName)
      assertEquals(0L, assertNotNull(songs.findById(id)).views)
      assertEquals(0L, UserRepository(db).get(owner).pendingPoints)
      assertNull(preferences.getMode(listener, id))

      assertFalse(songs.updateSettings(id, identity, title = "stale edit"))
      assertFalse(
          songs.updateStatus(id, com.github.sahyuya.oyasaiMusic.model.SongStatus.REJECTED, identity)
      )
      assertEquals(replacement, songs.findById(id))

      val current = replacement.recordIdentity
      assertTrue(songs.updateSettings(id, current, title = "current edit"))
      assertEquals("current edit", songs.findById(id)?.title)
      songs.togglePublication(id, limitedClick = false, expectedIdentity = current)
      assertFalse(songs.requestReview(id, identity))
      assertTrue(songs.requestReview(id, current))
      assertFalse(songs.cancelReviewRequest(id, identity))
      assertTrue(songs.cancelReviewRequest(id, current))
      assertTrue(registerView(current))
      assertEquals(SocialRepository.FavoriteResult.ADDED, social.addFavorite(listener, id, current))
      assertEquals(
          SocialRepository.FavoriteResult.ALREADY_ADDED,
          social.addFavorite(listener, id, current),
      )
      assertTrue(preferences.setMode(listener, id, current, PlaybackMode.POSITIONAL))
      assertEquals(PlaybackMode.POSITIONAL, preferences.getMode(listener, id))
      assertEquals(
          PlaylistRepository.AddSongResult.STALE_TARGET,
          playlists.addSong(playlist, owner, id, current),
      )
      assertEquals(
          PlaylistRepository.AddSongResult.ADDED,
          playlists.addSong(playlist, listener, id, current),
      )
      assertEquals(
          PlaylistRepository.AddSongResult.ALREADY_ADDED,
          playlists.addSong(playlist, listener, id, current),
      )
      playlists.delete(playlist)
      assertEquals(
          PlaylistRepository.AddSongResult.STALE_TARGET,
          playlists.addSong(playlist, listener, id, current),
      )
      assertTrue(songs.replaceAudio(id, current, "new.bin", "first-recording.bin", false, bpm = 90))
      assertFalse(songs.replaceAudio(id, current, "new.bin", "late-recording.bin", true, bpm = 180))
      val recorded = assertNotNull(songs.findById(id))
      assertEquals("first-recording.bin", recorded.fileName)
      assertFalse(recorded.supportsPositional)
      assertEquals(90, recorded.bpm)
    } finally {
      db.close()
    }
  }

  @Test
  fun `pending delivery prevents deletion and visibility changes until all deliveries finish`() {
    val db = DatabaseManager(directory.resolve("music.db").toFile())
    db.connect()
    try {
      val songs = SongRepository(db)
      val id =
          songs.insertDraft(UUID.randomUUID(), "purchase", 120, "MUSIC_DISC_13", 0, "purchase.bin")
      val identity = assertNotNull(songs.findById(id)).recordIdentity
      songs.togglePublication(id, limitedClick = false, expectedIdentity = identity)
      db.transaction {
        songs.beginDeliveryGuard(id)
        songs.beginDeliveryGuard(id)
      }
      assertFailsWith<IllegalStateException> { songs.deleteMatching(id, identity) }
      assertFailsWith<IllegalStateException> {
        songs.togglePublication(id, limitedClick = true, expectedIdentity = identity)
      }
      songs.endDeliveryGuard(id)
      assertFailsWith<IllegalStateException> { songs.deleteMatching(id, identity) }
      assertTrue(assertNotNull(songs.findById(id)).published)

      songs.endDeliveryGuard(id)
      assertFalse(
          songs
              .togglePublication(id, limitedClick = true, expectedIdentity = identity)
              .first
              .published
      )
      assertEquals("purchase.bin", songs.deleteMatching(id, identity))
    } finally {
      db.close()
    }
  }
}
