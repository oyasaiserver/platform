package io.oyasai.oyasaivotifier

import java.io.File
import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LegacyDataMigrationTest {
  @Test
  fun `migrates party progress but not legacy RSA keys`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("Votifier")
    legacy.resolve("rsa").mkdirs()
    legacy.resolve("rsa/public.key").writeText("old public")
    legacy.resolve("rsa/private.key").writeText("old private")
    legacy.resolve("party-progress.yml").writeText("votes: 17")
    val logs = mutableListOf<String>()

    val target = plugins.resolve("OyasaiVotifier")
    migrateLegacyData(target, logs::add)

    assertFalse(target.resolve("rsa").exists())
    assertEquals("votes: 17", target.resolve("party-progress.yml").readText())
    assertEquals(1, logs.size)
  }

  @Test
  fun `does not overwrite existing new data`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("Votifier")
    legacy.mkdirs()
    legacy.resolve("party-progress.yml").writeText("votes: 17")
    val target = plugins.resolve("OyasaiVotifier")
    target.mkdirs()
    target.resolve("party-progress.yml").writeText("votes: 4")

    migrateLegacyData(target)

    assertEquals("votes: 4", target.resolve("party-progress.yml").readText())
  }

  @Test
  fun `does not migrate the legacy config`() = temporaryDirectory { plugins ->
    val legacy = plugins.resolve("Votifier")
    legacy.mkdirs()
    legacy.resolve("config.yml").writeText("tokens:\n  default: old-token")
    val target = plugins.resolve("OyasaiVotifier")

    migrateLegacyData(target)

    assertFalse(target.resolve("config.yml").exists())
  }

  @Test
  fun `does nothing when the legacy folder is absent`() = temporaryDirectory { plugins ->
    val target = plugins.resolve("OyasaiVotifier")

    migrateLegacyData(target)

    assertTrue(!target.exists())
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
