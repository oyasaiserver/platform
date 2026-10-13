package com.baakun.dynamicprofile.storage

import com.baakun.dynamicprofile.data.PromotionHistory
import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.util.JsonUtils
import java.io.File
import java.nio.file.Files
import java.util.UUID
import kotlin.test.*

class ProfileDatabaseTest {
  private fun withFolder(test: (File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val folder = Files.createTempDirectory(root.toPath(), "dp-db-").toFile()
    try {
      test(folder)
    } finally {
      folder.deleteRecursively()
    }
  }

  private fun legacyFile(folder: File, uuid: UUID): File =
      File(folder, "UserStatsJSON/$uuid.json").also { it.parentFile.mkdirs() }

  private fun fullStats(uuid: UUID): Stats =
      Stats(
          uuid = uuid.toString(),
          exp = 123456,
          move = 12,
          vehicle = 34,
          fly = 56,
          jump = 78,
          block = 90,
          chat = 123,
          vote = 456,
          like = 789,
          receiveLike = 101,
          join = 23,
          playTime = 45,
          distance = 0.125,
          lastCheck = 1780000000123L,
          lastLv = 42,
          notice = false,
          recommends = mutableMapOf(0 to 12345, 1 to Int.MIN_VALUE, 2 to 65432),
          lastLogin = "2026-10-06T12:34:56",
          friends = mutableListOf(UUID.randomUUID()),
          title = 77,
          introduction = "こんにちは\nプロフィール <>&",
          promotions =
              PromotionHistory().also {
                it.records.add(
                    PromotionRecord(
                        PromotionType.PROMOTE,
                        "builder",
                        "beginner",
                        "CONSOLE",
                        true,
                        "2026/10/01 12:34:56",
                        "GOOD test",
                        987654L,
                        12345,
                        12,
                        42,
                        123456,
                    )
                )
                it.records.add(
                    PromotionRecord(
                        PromotionType.DEMOTE,
                        "beginner",
                        "builder",
                        "staff",
                        false,
                        "2026/10/02 13:45:56",
                        "test demotion",
                        999999L,
                        Int.MIN_VALUE,
                        0,
                        42,
                        123456,
                    )
                )
              },
      )

  @Test
  fun `legacy JSON with history without history and missing fields round trips all fields`() =
      withFolder { folder ->
        val first = UUID.randomUUID()
        val second = UUID.randomUUID()
        val old = UUID.randomUUID()
        val expected =
            linkedMapOf(
                first to fullStats(first),
                second to fullStats(second).copy(promotions = PromotionHistory()),
            )
        expected.forEach { (uuid, stats) ->
          legacyFile(folder, uuid).writeText(JsonUtils.toJsonString(stats))
        }
        legacyFile(folder, old)
            .writeText("""{"uuid":"$old","exp":17,"lastLogin":"2024-01-01T00:00:00"}""")
        expected[old] = Stats(uuid = old.toString(), exp = 17, lastLogin = "2024-01-01T00:00:00")
        val before =
            File(folder, "UserStatsJSON").listFiles()!!.associate {
              it.name to it.readBytes().toList()
            }
        ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
          val result = db.importLegacy(File(folder, "UserStatsJSON"))
          assertTrue(result.imported)
          assertEquals(3, result.loaded)
          assertEquals(emptyList(), result.failedFiles)
        }
        ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
          val actual = db.loadAll()
          assertEquals(expected.keys, actual.keys)
          expected.forEach { (uuid, stats) ->
            val loaded = actual.getValue(uuid)
            assertEquals(JsonUtils.toJsonString(stats), JsonUtils.toJsonString(loaded))
            assertEquals(stats.timePlayed, loaded.timePlayed)
            assertEquals(stats.promotions.records, loaded.promotions.records)
          }
          db.read { c ->
            c.createStatement().use { s ->
              s.executeQuery("SELECT COUNT(*) FROM promotions").use {
                it.next()
                assertEquals(2, it.getInt(1))
              }
            }
          }
        }
        assertEquals(
            before,
            File(folder, "UserStatsJSON").listFiles()!!.associate {
              it.name to it.readBytes().toList()
            },
        )
      }

  @Test
  fun `second startup never reimports retained or newly added JSON`() = withFolder { folder ->
    val uuid = UUID.randomUUID()
    legacyFile(folder, uuid).writeText(JsonUtils.toJsonString(fullStats(uuid)))
    val updated = fullStats(uuid).copy(exp = 999, timePlayed = 888)
    ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
      db.importLegacy(File(folder, "UserStatsJSON"))
      db.save(uuid, updated)
    }
    legacyFile(folder, uuid).writeText("broken JSON")
    legacyFile(folder, UUID.randomUUID()).writeText("{}")
    ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
      assertFalse(db.importLegacy(File(folder, "UserStatsJSON")).imported)
      val loaded = db.loadAll().getValue(uuid)
      assertEquals(999, loaded.exp)
      assertEquals(888, loaded.timePlayed)
      assertEquals(updated.promotions.records, loaded.promotions.records)
      assertEquals(1, db.loadAll().size)
    }
  }

  @Test
  fun `one unreadable JSON does not prevent importing the remaining players`() =
      withFolder { folder ->
        val valid = UUID.randomUUID()
        val bad = UUID.randomUUID()
        legacyFile(folder, valid).writeText(JsonUtils.toJsonString(fullStats(valid)))
        legacyFile(folder, bad).writeText("not JSON")
        val reported = mutableListOf<String>()
        ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
          val result = db.importLegacy(File(folder, "UserStatsJSON"), reported::add)
          assertEquals(1, result.loaded)
          assertEquals(listOf("$bad.json"), result.failedFiles)
          assertEquals(result.failedFiles, reported)
          assertEquals(setOf(valid), db.loadAll().keys)
          assertEquals(setOf(bad), db.failedUsers())
        }
        ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
          assertFalse(db.importLegacy(File(folder, "UserStatsJSON")).imported)
          assertEquals(setOf(bad), db.failedUsers())
        }
        assertEquals("not JSON", legacyFile(folder, bad).readText())
      }

  @Test
  fun `empty import is marked complete even when all files failed`() = withFolder { folder ->
    val uuid = UUID.randomUUID()
    legacyFile(folder, uuid).writeText("null")
    ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
      assertEquals(0, db.importLegacy(File(folder, "UserStatsJSON")).loaded)
    }
    legacyFile(folder, uuid).writeText(JsonUtils.toJsonString(fullStats(uuid)))
    ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
      assertFalse(db.importLegacy(File(folder, "UserStatsJSON")).imported)
      assertTrue(db.loadAll().isEmpty())
    }
  }

  @Test
  fun `invalid promotion data is a per file failure`() = withFolder { folder ->
    val uuid = UUID.randomUUID()
    val bad = UUID.randomUUID()
    legacyFile(folder, uuid).writeText(JsonUtils.toJsonString(fullStats(uuid)))
    legacyFile(folder, bad)
        .writeText("""{"uuid":"$bad","promotions":{"records":[{"type":"UNKNOWN"}]}}""")
    ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
      assertEquals(listOf("$bad.json"), db.importLegacy(File(folder, "UserStatsJSON")).failedFiles)
      assertEquals(setOf(uuid), db.loadAll().keys)
    }
  }

  @Test
  fun `save snapshots mutable collections offloads writes and close drains the queue`() =
      withFolder { folder ->
        val uuid = UUID.randomUUID()
        val file = File(folder, "dynamicprofile.db")
        val db = ProfileDatabase(file)
        val caller = Thread.currentThread()
        val started = java.util.concurrent.CountDownLatch(1)
        val release = java.util.concurrent.CountDownLatch(1)
        val closed = java.util.concurrent.CountDownLatch(1)
        var writerThread: Thread? = null
        db.write {
          writerThread = Thread.currentThread()
          started.countDown()
          check(release.await(5, java.util.concurrent.TimeUnit.SECONDS))
        }
        assertTrue(started.await(5, java.util.concurrent.TimeUnit.SECONDS))
        assertNotSame(caller, writerThread)
        val stats = fullStats(uuid).copy(timePlayed = 73)
        val expected = JsonUtils.toJsonString(stats)
        db.save(uuid, stats) // Must return while the writer is blocked.
        stats.exp = 0
        stats.recommends.clear()
        stats.friends.clear()
        stats.promotions.records.clear()
        val closer =
            Thread {
                  try {
                    db.close()
                  } finally {
                    closed.countDown()
                  }
                }
                .apply { start() }
        try {
          assertFalse(closed.await(100, java.util.concurrent.TimeUnit.MILLISECONDS))
        } finally {
          release.countDown()
          closer.join(5000)
        }
        assertEquals(0L, closed.count)
        ProfileDatabase(file).use { reopened ->
          val actual = reopened.loadAll().getValue(uuid)
          assertEquals(expected, JsonUtils.toJsonString(actual))
          assertEquals(73, actual.timePlayed)
        }
      }

  @Test
  fun `failed profile update rolls back statistics and history and reports the error`() =
      withFolder { folder ->
        val uuid = UUID.randomUUID()
        var reported: Throwable? = null
        val db = ProfileDatabase(File(folder, "dynamicprofile.db")) { reported = it }
        val stats = fullStats(uuid)
        db.save(uuid, stats)
        db.flush()
        db.write { c ->
          c.createStatement().use {
            it.execute(
                "CREATE TRIGGER reject_promotion BEFORE INSERT ON promotions WHEN NEW.note = 'reject' BEGIN SELECT RAISE(ABORT, 'test failure'); END"
            )
          }
        }
        db.flush()
        val update =
            stats.copy(
                exp = 0,
                promotions =
                    PromotionHistory().also {
                      it.records.add(stats.promotions.records[0].copy(note = "reject"))
                    },
            )
        db.save(uuid, update)
        assertFailsWith<IllegalStateException> { db.flush() }
        assertNotNull(reported)
        val actual = db.loadAll().getValue(uuid)
        assertEquals(stats.exp, actual.exp)
        assertEquals(stats.promotions.records, actual.promotions.records)
        assertFailsWith<IllegalStateException> { db.close() }
      }

  @Test
  fun `SQL failure rolls back whole import and permits retry`() = withFolder { folder ->
    val uuid = UUID.randomUUID()
    legacyFile(folder, uuid).writeText(JsonUtils.toJsonString(fullStats(uuid)))
    ProfileDatabase(File(folder, "dynamicprofile.db")).use { db ->
      db.write { c ->
        c.createStatement().use {
          it.execute(
              "CREATE TRIGGER reject_import BEFORE INSERT ON profiles BEGIN SELECT RAISE(ABORT, 'test failure'); END"
          )
        }
      }
      db.flush()
      assertFails { db.importLegacy(File(folder, "UserStatsJSON")) }
      assertTrue(db.loadAll().isEmpty())
      db.write { c -> c.createStatement().use { it.execute("DROP TRIGGER reject_import") } }
      db.flush()
      assertEquals(1, db.importLegacy(File(folder, "UserStatsJSON")).loaded)
    }
  }
}
