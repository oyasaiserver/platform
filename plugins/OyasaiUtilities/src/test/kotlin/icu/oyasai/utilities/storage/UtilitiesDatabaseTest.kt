package icu.oyasai.utilities.storage

import java.io.File
import java.nio.file.Files
import java.sql.Connection
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import kotlin.test.*

class UtilitiesDatabaseTest {
  private fun withFile(test: (File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val temporary = Files.createTempDirectory(root.toPath(), "utilities-db-").toFile()
    try {
      test(File(temporary, "utilities.db"))
    } finally {
      temporary.deleteRecursively()
    }
  }

  @Test
  fun `migrations run once and versions belong to each feature`() = withFile { file ->
    val first: (Connection) -> Unit = { connection ->
      connection.createStatement().use { it.execute("CREATE TABLE example_values (value TEXT)") }
    }
    UtilitiesDatabase(file).use { db ->
      db.migrate("example", listOf(first))
      db.migrate("example", listOf(first))
      db.read { connection ->
        connection.createStatement().use { statement ->
          for ((pragma, expected) in
              listOf("journal_mode" to "wal", "synchronous" to "2", "busy_timeout" to "5000")) {
            statement.executeQuery("PRAGMA $pragma").use { rows ->
              assertTrue(rows.next())
              assertEquals(expected, rows.getString(1))
            }
          }
        }
      }
    }
    UtilitiesDatabase(file).use { db ->
      db.migrate(
          "example",
          listOf(
              first,
              { c ->
                c.createStatement().use {
                  it.execute("ALTER TABLE example_values ADD COLUMN extra TEXT")
                }
                Unit
              },
          ),
      )
      db.migrate(
          "other",
          listOf({ c ->
            c.createStatement().use { it.execute("CREATE TABLE other_values (value TEXT)") }
          }),
      )
      db.read { c ->
        c.createStatement().use { s ->
          s.executeQuery("SELECT feature, version FROM schema_versions ORDER BY feature").use { rows
            ->
            assertTrue(rows.next())
            assertEquals("example", rows.getString(1))
            assertEquals(2, rows.getInt(2))
            assertTrue(rows.next())
            assertEquals("other", rows.getString(1))
            assertEquals(1, rows.getInt(2))
            assertFalse(rows.next())
          }
        }
      }
      assertFails { db.migrate("example", listOf(first)) }
    }
  }

  @Test
  fun `failed migration rolls back its table and version`() = withFile { file ->
    UtilitiesDatabase(file).use { db ->
      assertFails {
        db.migrate(
            "example",
            listOf({ c ->
              c.createStatement().use { it.execute("CREATE TABLE example_values (value TEXT)") }
              error("failed migration")
            }),
        )
      }
      db.read { c ->
        c.createStatement().use { s ->
          s.executeQuery("SELECT COUNT(*) FROM schema_versions").use { rows ->
            rows.next()
            assertEquals(0, rows.getInt(1))
          }
          s.executeQuery("SELECT COUNT(*) FROM sqlite_master WHERE name = 'example_values'").use {
              rows ->
            rows.next()
            assertEquals(0, rows.getInt(1))
          }
        }
      }
    }
  }

  @Test
  fun `writes run off caller thread and close waits for completion`() = withFile { file ->
    val db = UtilitiesDatabase(file)
    val caller = Thread.currentThread()
    val started = CountDownLatch(1)
    val release = CountDownLatch(1)
    val closed = CountDownLatch(1)
    var writerThread: Thread? = null
    db.write { c ->
      writerThread = Thread.currentThread()
      started.countDown()
      check(release.await(5, TimeUnit.SECONDS))
      c.createStatement().use { it.execute("CREATE TABLE completed (value TEXT)") }
    }
    assertTrue(started.await(5, TimeUnit.SECONDS))
    assertNotSame(caller, writerThread)
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
      assertFalse(closed.await(100, TimeUnit.MILLISECONDS))
    } finally {
      release.countDown()
      closer.join(5000)
    }
    assertEquals(0L, closed.count)
    UtilitiesDatabase(file).use { reopened ->
      reopened.read { c ->
        c.createStatement().use { it.executeQuery("SELECT * FROM completed").close() }
      }
    }
  }

  @Test
  fun `write failure is logged and reported after draining`() = withFile { file ->
    var reported: Throwable? = null
    val db = UtilitiesDatabase(file) { reported = it }
    db.write { error("write failed") }
    assertFailsWith<IllegalStateException> { db.close() }
    assertEquals("write failed", reported?.message)
  }
}
