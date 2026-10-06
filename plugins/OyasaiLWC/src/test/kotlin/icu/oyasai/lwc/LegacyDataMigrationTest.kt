package icu.oyasai.lwc

import java.io.File
import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LegacyDataMigrationTest {
  @Test
  fun `copies all legacy files and preserves the original folder`() =
      temporaryDirectory { plugins ->
        val legacy = plugins.resolve("LWC")
        legacy.resolve("nested").mkdirs()
        val database = byteArrayOf(0x53, 0x51, 0x4c, 0, 0x7f)
        legacy.resolve("lwc.db").writeBytes(database)
        legacy.resolve("lwc.db-wal").writeText("pending writes")
        legacy.resolve("nested/config.yml").writeText("legacy configuration")
        val logs = mutableListOf<String>()
        val target = plugins.resolve("OyasaiLWC")

        migrateLegacyData(target, logs::add)

        assertContentEquals(database, target.resolve("lwc.db").readBytes())
        assertEquals("pending writes", target.resolve("lwc.db-wal").readText())
        assertEquals("legacy configuration", target.resolve("nested/config.yml").readText())
        assertContentEquals(database, legacy.resolve("lwc.db").readBytes())
        assertTrue(legacy.resolve("nested/config.yml").exists())
        assertEquals(1, logs.size)
      }

  @Test
  fun `does not overwrite an existing new folder`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("LWC")
    legacy.mkdirs()
    legacy.resolve("lwc.db").writeText("legacy database")
    legacy.resolve("config.yml").writeText("legacy config")
    val target = plugins.resolve("OyasaiLWC")
    target.mkdirs()
    target.resolve("lwc.db").writeText("new database")

    migrateLegacyData(target)

    assertEquals("new database", target.resolve("lwc.db").readText())
    assertFalse(target.resolve("config.yml").exists())
    assertEquals("legacy database", legacy.resolve("lwc.db").readText())
  }

  @Test
  fun `does nothing when the legacy folder is absent`() = temporaryDirectory { plugins ->
    val target = plugins.resolve("OyasaiLWC")

    migrateLegacyData(target)

    assertFalse(target.exists())
  }

  @Test
  fun `failed copy leaves no partial new folder`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("LWC")
    legacy.mkdirs()
    legacy.resolve("lwc.db").writeText("legacy database")
    Files.createSymbolicLink(legacy.resolve("broken").toPath(), legacy.resolve("absent").toPath())
    val target = plugins.resolve("OyasaiLWC")

    assertFailsWith<java.io.IOException> { migrateLegacyData(target) }

    assertFalse(target.exists())
    assertEquals("legacy database", legacy.resolve("lwc.db").readText())
    assertEquals(listOf("LWC"), plugins.listFiles()!!.map { it.name })
  }

  private fun temporaryDirectory(block: (File) -> Unit) {
    val directory = Files.createTempDirectory("oyasai-lwc").toFile()
    try {
      block(directory)
    } finally {
      directory.deleteRecursively()
    }
  }
}
