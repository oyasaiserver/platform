package com.github.srain3.sociallikes

import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardCopyOption.ATOMIC_MOVE
import java.nio.file.StandardCopyOption.REPLACE_EXISTING
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration

/** Persists pending offline-like rewards without ever deleting the live file before replacement. */
internal class OfflineLikePointStore(private val dataDirectory: Path) {
  private val file = dataDirectory.resolve(FILE_NAME)

  fun save(points: Map<UUID, Int>) {
    Files.createDirectories(dataDirectory)

    val yaml = YamlConfiguration()
    points.filterValues { it != 0 }.forEach { (uuid, points) -> yaml.set(uuid.toString(), points) }

    val temporaryFile = Files.createTempFile(dataDirectory, "$FILE_NAME.", ".tmp")
    try {
      yaml.save(temporaryFile.toFile())
      try {
        Files.move(temporaryFile, file, REPLACE_EXISTING, ATOMIC_MOVE)
      } catch (exception: AtomicMoveNotSupportedException) {
        throw IllegalStateException("Atomic replacement is not supported for $file", exception)
      }
    } finally {
      Files.deleteIfExists(temporaryFile)
    }
  }

  fun load(): Map<UUID, Int> {
    if (Files.notExists(file)) return emptyMap()

    val yaml = YamlConfiguration.loadConfiguration(file.toFile())
    return yaml.getKeys(false).associate { uuidString ->
      UUID.fromString(uuidString) to yaml.getInt(uuidString, 0)
    }
  }

  companion object {
    const val FILE_NAME = "offlineLikePoint.yml"
  }
}
