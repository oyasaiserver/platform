package io.oyasai.signshop

import java.io.File
import java.nio.file.Files

internal fun migrateLegacyData(dataFolder: File, log: (String) -> Unit = {}) {
  val parent = dataFolder.parentFile ?: return
  val legacy = parent.resolve("SignShop")
  if (dataFolder.exists() || !legacy.isDirectory) return

  // Publish only a complete copy, so a failed copy cannot become the next startup's data folder.
  val staging = Files.createTempDirectory(parent.toPath(), ".oyasaisignshop-migration-").toFile()
  try {
    check(legacy.copyRecursively(staging, overwrite = false)) { "Legacy SignShop copy failed" }
    Files.move(staging.toPath(), dataFolder.toPath())
  } finally {
    staging.deleteRecursively()
  }
  log("Copied legacy SignShop data to OyasaiSignShop; the original folder is retained")
}
