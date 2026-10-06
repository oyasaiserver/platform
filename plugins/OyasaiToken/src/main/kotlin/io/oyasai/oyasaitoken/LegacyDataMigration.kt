package io.oyasai.oyasaitoken

import java.io.File
import java.nio.file.Files

/** Copy before configuration or SQLite is opened; retain the legacy folder for rollback. */
internal fun migrateLegacyData(dataFolder: File, log: (String) -> Unit = {}) {
  val legacy = dataFolder.parentFile?.resolve("TokenManager") ?: return
  if (dataFolder.exists() || !legacy.isDirectory) return

  // Publish only a complete copy, so a failed copy can be retried on the next startup.
  val staging =
      Files.createTempDirectory(dataFolder.parentFile.toPath(), ".oyasaitoken-copy-").toFile()
  try {
    legacy.copyRecursively(staging, overwrite = false) { _, error -> throw error }
    Files.move(staging.toPath(), dataFolder.toPath())
  } finally {
    staging.deleteRecursively()
  }
  log("Copied legacy TokenManager data to OyasaiToken; retained the legacy folder")
}
