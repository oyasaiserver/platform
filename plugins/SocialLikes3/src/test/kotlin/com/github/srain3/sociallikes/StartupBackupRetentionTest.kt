package com.github.srain3.sociallikes

import java.io.File
import java.nio.file.Files
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class StartupBackupRetentionTest {

  @TempDir lateinit var tempDir: File

  @Test
  fun prunesOnlyOldStartupBackups() {
    val backupsDir = tempDir.toPath().resolve("SocialLikes3-backups")
    val names = (1..7).map { "startup-2026010$it-000000" }
    names.forEach { name ->
      Files.createDirectories(backupsDir.resolve(name))
      Files.writeString(backupsDir.resolve(name).resolve("data.txt"), "backup")
    }
    Files.createDirectories(backupsDir.resolve("manual-backup"))

    assertEquals(2, pruneStartupBackups(backupsDir, keepCount = 5))

    val startupNames =
        Files.list(backupsDir).use { paths ->
          paths
              .filter { it.fileName.toString().startsWith("startup-") }
              .map { it.fileName.toString() }
              .toList()
              .toSet()
        }
    assertEquals(names.takeLast(5).toSet(), startupNames)
    assertTrue(Files.isDirectory(backupsDir.resolve("manual-backup")))
  }
}
