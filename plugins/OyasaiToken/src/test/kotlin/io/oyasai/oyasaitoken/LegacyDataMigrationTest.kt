package io.oyasai.oyasaitoken

import java.io.File
import java.nio.file.Files
import java.sql.DriverManager
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LegacyDataMigrationTest {
  @Test
  fun `copies complete legacy data including nested SQLite and retains originals`() =
      temporaryDirectory { plugins ->
        val legacy = plugins.resolve("TokenManager")
        legacy.resolve("nested").mkdirs()
        legacy.resolve("config.yml").writeText("database:\n  file: nested/tokens.db")
        legacy.resolve("notifications.yml").writeText("enabled: true")
        legacy.resolve("data.yml").writeText("Players: {}")
        val database = legacy.resolve("nested/tokens.db")
        DriverManager.getConnection("jdbc:sqlite:$database").use { connection ->
          connection.createStatement().use { statement ->
            statement.execute("CREATE TABLE balances (amount INTEGER)")
            statement.execute("INSERT INTO balances VALUES (17)")
          }
        }
        legacy.resolve("nested/tokens.db-wal").writeBytes(byteArrayOf(1, 2, 3))
        legacy.resolve("nested/tokens.db-shm").writeBytes(byteArrayOf(4, 5, 6))
        val logs = mutableListOf<String>()
        val target = plugins.resolve("OyasaiToken")

        migrateLegacyData(target, logs::add)

        legacy
            .walkTopDown()
            .filter { it.isFile }
            .forEach { original ->
              assertTrue(
                  original
                      .readBytes()
                      .contentEquals(target.resolve(original.relativeTo(legacy)).readBytes())
              )
            }
        DriverManager.getConnection("jdbc:sqlite:${target.resolve("nested/tokens.db")}").use {
            connection ->
          connection.createStatement().use { statement ->
            statement.executeQuery("SELECT amount FROM balances").use { result ->
              assertTrue(result.next())
              assertEquals(17, result.getInt(1))
            }
          }
        }
        assertTrue(database.exists())
        assertEquals(1, logs.size)
      }

  @Test
  fun `does not overwrite or merge an existing target`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("TokenManager")
    legacy.mkdirs()
    legacy.resolve("config.yml").writeText("legacy")
    legacy.resolve("tokens.db").writeText("legacy database")
    val target = plugins.resolve("OyasaiToken")
    target.mkdirs()
    target.resolve("config.yml").writeText("new")

    migrateLegacyData(target)

    assertEquals("new", target.resolve("config.yml").readText())
    assertFalse(target.resolve("tokens.db").exists())
  }

  @Test
  fun `failed copy leaves no partial target and can be retried`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("TokenManager")
    legacy.mkdirs()
    legacy.resolve("config.yml").writeText("legacy")
    val brokenLink = legacy.resolve("missing-file").toPath()
    Files.createSymbolicLink(brokenLink, legacy.resolve("absent").toPath())
    val target = plugins.resolve("OyasaiToken")

    assertFailsWith<java.io.IOException> { migrateLegacyData(target) }

    assertFalse(target.exists())
    assertTrue(legacy.exists())
    assertEquals(listOf("TokenManager"), plugins.listFiles()!!.map { it.name })
    Files.delete(brokenLink)
    migrateLegacyData(target)
    assertEquals("legacy", target.resolve("config.yml").readText())
  }

  @Test
  fun `does nothing when legacy data is absent`() = temporaryDirectory { plugins ->
    val target = plugins.resolve("OyasaiToken")
    migrateLegacyData(target)
    assertFalse(target.exists())
  }

  private fun temporaryDirectory(block: (File) -> Unit) {
    val directory = Files.createTempDirectory("oyasai-token-test").toFile()
    try {
      block(directory)
    } finally {
      directory.deleteRecursively()
    }
  }
}
