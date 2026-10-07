package io.oyasai.oyasaivotifier

import java.io.File
import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LegacyDataMigrationTest {
  @Test
  fun `copies all legacy data including config and RSA keys and retains originals`() =
      temporaryDirectory { plugins ->
        val legacy = plugins.resolve("Votifier")
        legacy.resolve("rsa").mkdirs()
        legacy.resolve("extra/empty").mkdirs()
        val files =
            mapOf(
                "config.yml" to "tokens:\n  default: test-only-token",
                "rsa/public.key" to "test public",
                "rsa/private.key" to "test private",
                "party-progress.yml" to "votes: 17",
                "extra/data.bin" to "extra data",
            )
        files.forEach { (name, contents) -> legacy.resolve(name).writeText(contents) }
        val logs = mutableListOf<String>()
        val target = plugins.resolve("OyasaiVotifier")

        migrateLegacyData(target, logs::add)

        files.forEach { (name, contents) ->
          assertEquals(contents, target.resolve(name).readText())
          assertEquals(contents, legacy.resolve(name).readText())
        }
        assertTrue(target.resolve("extra/empty").isDirectory)
        assertTrue(legacy.resolve("extra/empty").isDirectory)
        assertEquals(1, logs.size)
        assertFalse(logs.single().contains("test-only-token"))
        assertFalse(plugins.listFiles()!!.any { it.name.startsWith(".oyasaivotifier-copy-") })
      }

  @Test
  fun `does not overwrite or supplement existing new data`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("Votifier")
    legacy.mkdirs()
    legacy.resolve("party-progress.yml").writeText("votes: 17")
    legacy.resolve("config.yml").writeText("legacy config")
    val target = plugins.resolve("OyasaiVotifier")
    target.mkdirs()
    target.resolve("party-progress.yml").writeText("votes: 4")
    val logs = mutableListOf<String>()

    migrateLegacyData(target, logs::add)

    assertEquals("votes: 4", target.resolve("party-progress.yml").readText())
    assertFalse(target.resolve("config.yml").exists())
    assertTrue(logs.isEmpty())
  }

  @Test
  fun `does not copy into an existing empty new folder`() = temporaryDirectory { plugins ->
    plugins.resolve("Votifier").mkdirs()
    plugins.resolve("Votifier/config.yml").writeText("legacy config")
    val target = plugins.resolve("OyasaiVotifier")
    target.mkdirs()

    migrateLegacyData(target)

    assertTrue(target.listFiles()!!.isEmpty())
  }

  @Test
  fun `does nothing when the legacy folder is absent`() = temporaryDirectory { plugins ->
    val target = plugins.resolve("OyasaiVotifier")

    migrateLegacyData(target)

    assertFalse(target.exists())
  }

  @Test
  fun `does nothing when the legacy path is a file`() = temporaryDirectory { plugins ->
    plugins.resolve("Votifier").writeText("not a directory")
    val target = plugins.resolve("OyasaiVotifier")

    migrateLegacyData(target)

    assertFalse(target.exists())
  }

  @Test
  fun `failed copy leaves target absent and can be retried`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("Votifier")
    legacy.mkdirs()
    legacy.resolve("config.yml").writeText("legacy config")
    val broken = legacy.resolve("broken")
    Files.createSymbolicLink(broken.toPath(), legacy.resolve("missing").toPath())
    val target = plugins.resolve("OyasaiVotifier")
    val logs = mutableListOf<String>()

    assertFailsWith<java.io.IOException> { migrateLegacyData(target, logs::add) }

    assertFalse(target.exists())
    assertTrue(logs.isEmpty())
    assertEquals("legacy config", legacy.resolve("config.yml").readText())
    assertFalse(plugins.listFiles()!!.any { it.name.startsWith(".oyasaivotifier-copy-") })
    Files.delete(broken.toPath())

    migrateLegacyData(target, logs::add)

    assertEquals("legacy config", target.resolve("config.yml").readText())
    assertEquals(1, logs.size)
  }

  private fun temporaryDirectory(block: (File) -> Unit) {
    val directory = Files.createTempDirectory("oyasai-votifier").toFile()
    try {
      block(directory)
    } finally {
      directory.deleteRecursively()
    }
  }
}
