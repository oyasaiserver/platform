package icu.oyasai.lwc

import java.io.File
import java.io.IOException
import java.nio.file.Files

internal fun migrateLegacyData(dataFolder: File, log: (String) -> Unit = {}) {
  val parent = dataFolder.parentFile ?: return
  val legacy = parent.resolve("LWC")
  if (dataFolder.exists() || !legacy.isDirectory) return

  // Publish only a complete copy so a failed attempt can be retried on the next startup.
  val staging = Files.createTempDirectory(parent.toPath(), ".oyasailwc-migration-").toFile()
  try {
    if (!legacy.copyRecursively(staging, onError = { _, error -> throw error })) {
      throw IOException("LWC data copy did not complete")
    }
    Files.move(staging.toPath(), dataFolder.toPath())
  } finally {
    staging.deleteRecursively()
  }
  log("Copied legacy LWC data to OyasaiLWC; the legacy folder was retained")
}
