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
  private var loaded = false

  fun save(points: Map<UUID, Int>): Boolean {
    if (!loaded) return false

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
    return true
  }

  fun load(): Map<UUID, Int> {
    loaded = false
    if (Files.notExists(file)) {
      loaded = true
      return emptyMap()
    }

    val yaml = YamlConfiguration().apply { load(file.toFile()) }
    val points =
        yaml.getKeys(false).associate { uuidString ->
          require(yaml.isInt(uuidString)) { "Invalid offline-like points for $uuidString" }
          UUID.fromString(uuidString) to yaml.getInt(uuidString, 0)
        }
    loaded = true
    return points
  }

  companion object {
    const val FILE_NAME = "offlineLikePoint.yml"
  }
}
