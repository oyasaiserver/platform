package io.oyasai.signshop

import java.io.File
import java.nio.file.Files
import java.sql.DriverManager
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LegacyDataMigrationTest {
  @Test
  fun `copies all legacy data including nested files and SQLite while retaining originals`() =
      temporaryDirectory { plugins ->
        val legacy = plugins.resolve("SignShop")
        legacy.resolve("nested").mkdirs()
        legacy.resolve("nested/config.yml").writeText("setting: legacy")
        legacy.resolve("sellers.yml").writeText("sellers: {}")
        legacy.resolve("books.db").writeBytes(byteArrayOf(0, 1, 2, 3))
        DriverManager.getConnection("jdbc:sqlite:${legacy.resolve("shops.db")}").use { db ->
          db.createStatement().use {
            it.execute("CREATE TABLE retained_shop (name TEXT)")
            it.execute("INSERT INTO retained_shop VALUES ('legacy')")
          }
        }
        val target = plugins.resolve("OyasaiSignShop")
        val logs = mutableListOf<String>()

        migrateLegacyData(target, logs::add)

        legacy
            .walkTopDown()
            .filter { it.isFile }
            .forEach { original ->
              assertContentEquals(
                  original.readBytes(),
                  target.resolve(original.relativeTo(legacy)).readBytes(),
              )
            }
        DriverManager.getConnection("jdbc:sqlite:${target.resolve("shops.db")}").use { db ->
          db.createStatement().use { statement ->
            statement.executeQuery("SELECT name FROM retained_shop").use {
              assertTrue(it.next())
              assertEquals("legacy", it.getString(1))
            }
          }
        }
        assertTrue(legacy.resolve("shops.db").isFile)
        assertEquals(1, logs.size)
      }

  @Test
  fun `does not copy into an existing new folder`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("SignShop")
    legacy.mkdirs()
    legacy.resolve("sellers.yml").writeText("legacy")
    val target = plugins.resolve("OyasaiSignShop")
    target.mkdirs()
    target.resolve("shops.db").writeText("current")

    migrateLegacyData(target)

    assertEquals("current", target.resolve("shops.db").readText())
    assertFalse(target.resolve("sellers.yml").exists())
  }

  @Test
  fun `does nothing when the legacy folder is absent`() = temporaryDirectory { plugins ->
    val target = plugins.resolve("OyasaiSignShop")
    migrateLegacyData(target)
    assertFalse(target.exists())
  }

  private fun temporaryDirectory(block: (File) -> Unit) {
    val directory = Files.createTempDirectory("oyasai-signshop").toFile()
    try {
      block(directory)
    } finally {
      directory.deleteRecursively()
    }
  }
}
