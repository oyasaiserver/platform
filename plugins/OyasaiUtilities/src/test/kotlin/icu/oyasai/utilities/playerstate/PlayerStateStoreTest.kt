package icu.oyasai.utilities.playerstate

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.io.File
import java.nio.file.Files
import java.util.UUID
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import kotlin.test.*

class PlayerStateStoreTest {
  private fun withDirectories(test: (File, File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val temporary = Files.createTempDirectory(root.toPath(), "player-state-").toFile()
    try {
      test(File(temporary, "utilities.db"), File(temporary, "essentials").apply { mkdirs() })
    } finally {
      temporary.deleteRecursively()
    }
  }

  @Test
  fun `legacy import and all saved fields survive reopen without another import`() =
      withDirectories { file, legacy ->
        val id = UUID.randomUUID()
        val legacyFile = File(legacy, "$id.yml")
        legacyFile.writeText("nickname: LegacyName\nflymode: true\ntimestamps:\n  lastheal: 42\n")
        val expected = SavedPlayerState(null, false, true, 0.4f, 0.3f, "RealName", 123456789)
        UtilitiesDatabase(file).use { db ->
          val store = PlayerStateStore(db, legacy)
          val imported = store.get(id)
          assertEquals("LegacyName", imported.nickname)
          assertTrue(imported.flyMode)
          assertEquals(42L, imported.lastHeal)
          store.save(id, expected)
          expected.nickname = "Mutation after save"
          store.forget(id)
          assertNull(store.get(id).nickname)
        }
        expected.nickname = null
        legacyFile.writeText("nickname: ChangedLegacyName\nflymode: true\n")
        UtilitiesDatabase(file).use { db ->
          assertEquals(expected, PlayerStateStore(db, legacy).get(id))
          db.read { c ->
            c.createStatement().use { s ->
              s.executeQuery("SELECT essentials_imported FROM playerstate_players").use { rows ->
                assertTrue(rows.next())
                assertEquals(1, rows.getInt(1))
                assertFalse(rows.next())
              }
            }
          }
        }
      }

  @Test
  fun `absent legacy file is marked imported before a later file appears`() =
      withDirectories { file, legacy ->
        val id = UUID.randomUUID()
        UtilitiesDatabase(file).use { db ->
          assertNull(PlayerStateStore(db, legacy).get(id).nickname)
        }
        File(legacy, "$id.yml").writeText("nickname: LateLegacyName\nflymode: true\n")
        UtilitiesDatabase(file).use { db ->
          val state = PlayerStateStore(db, legacy).get(id)
          assertNull(state.nickname)
          assertFalse(state.flyMode)
        }
      }

  @Test
  fun `rejoin uses latest snapshot while writer is blocked`() = withDirectories { file, legacy ->
    UtilitiesDatabase(file).use { db ->
      val store = PlayerStateStore(db, legacy)
      val release = CountDownLatch(1)
      db.write { check(release.await(5, TimeUnit.SECONDS)) }
      try {
        val id = UUID.randomUUID()
        val state = store.get(id)
        state.nickname = "Latest"
        store.save(id)
        state.nickname = "Not saved"
        store.forget(id)
        assertEquals("Latest", store.get(id).nickname)
      } finally {
        release.countDown()
      }
    }
  }

  @Test
  fun `invalid legacy YAML fails without creating a default row`() =
      withDirectories { file, legacy ->
        val id = UUID.randomUUID()
        File(legacy, "$id.yml").writeText("nickname: [unterminated\n")
        UtilitiesDatabase(file).use { db ->
          assertFails { PlayerStateStore(db, legacy).get(id) }
          db.read { c ->
            c.createStatement().use { s ->
              s.executeQuery("SELECT COUNT(*) FROM playerstate_players").use { rows ->
                rows.next()
                assertEquals(0, rows.getInt(1))
              }
            }
          }
        }
      }
}
