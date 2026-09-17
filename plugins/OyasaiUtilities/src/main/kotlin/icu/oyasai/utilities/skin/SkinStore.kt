package icu.oyasai.utilities.skin

import java.io.File
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.StandardCopyOption.ATOMIC_MOVE
import java.nio.file.StandardCopyOption.REPLACE_EXISTING
import java.util.Properties
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

internal data class SkinTexture(val value: String, val signature: String, val fetchedAt: Long)

internal object SkinCache {
  const val maxAgeMillis = 6 * 60 * 60 * 1000L

  fun isFresh(texture: SkinTexture, now: Long = System.currentTimeMillis()): Boolean =
      now - texture.fetchedAt in 0..maxAgeMillis
}

internal class SkinStore(dataFolder: File) {
  private val file = File(dataFolder, "skins.properties")
  private val executor: ExecutorService =
      Executors.newSingleThreadExecutor { task ->
        Thread(task, "OyasaiUtilities-SkinStore").apply { isDaemon = true }
      }
  private val ready = CompletableFuture<Unit>()
  private val textures = ConcurrentHashMap<String, SkinTexture>()
  private val assignments = ConcurrentHashMap<UUID, String>()

  fun loadAsync(): CompletableFuture<Unit> {
    executor.execute {
      runCatching {
            file.parentFile.mkdirs()
            val properties = Properties()
            if (file.isFile) Files.newInputStream(file.toPath()).use(properties::load)
            properties
                .stringPropertyNames()
                .filter { it.endsWith(".value") }
                .forEach { key ->
                  val name = key.removePrefix("texture.").removeSuffix(".value")
                  val signature =
                      properties.getProperty("texture.$name.signature") ?: return@forEach
                  val fetchedAt =
                      properties.getProperty("texture.$name.fetchedAt")?.toLongOrNull()
                          ?: return@forEach
                  textures[name] = SkinTexture(properties.getProperty(key), signature, fetchedAt)
                }
            properties
                .stringPropertyNames()
                .filter { it.startsWith("assignment.") }
                .forEach { key ->
                  val uuid =
                      runCatching { UUID.fromString(key.removePrefix("assignment.")) }.getOrNull()
                  if (uuid != null) assignments[uuid] = properties.getProperty(key)
                }
          }
          .onSuccess { ready.complete(Unit) }
          .onFailure { ready.completeExceptionally(it) }
    }
    return ready
  }

  fun texture(name: String): CompletableFuture<SkinTexture?> = ready.thenApply { textures[name] }

  fun assignment(playerId: UUID): CompletableFuture<String?> =
      ready.thenApply { assignments[playerId] }

  fun saveTexture(name: String, texture: SkinTexture): CompletableFuture<Void> =
      ready.thenRunAsync(
          {
            textures[name] = texture
            persist()
          },
          executor,
      )

  fun saveAssignment(playerId: UUID, skinName: String): CompletableFuture<Void> =
      ready.thenRunAsync(
          {
            assignments[playerId] = skinName
            persist()
          },
          executor,
      )

  fun clearAssignment(playerId: UUID): CompletableFuture<Void> =
      ready.thenRunAsync(
          {
            assignments.remove(playerId)
            persist()
          },
          executor,
      )

  fun close() {
    executor.shutdown()
  }

  private fun persist() {
    val properties = Properties()
    textures.forEach { (name, texture) ->
      properties["texture.$name.value"] = texture.value
      properties["texture.$name.signature"] = texture.signature
      properties["texture.$name.fetchedAt"] = texture.fetchedAt.toString()
    }
    assignments.forEach { (uuid, skinName) -> properties["assignment.$uuid"] = skinName }
    val temporary = file.toPath().resolveSibling("${file.name}.tmp")
    Files.newOutputStream(temporary).use { properties.store(it, "OyasaiUtilities skin cache") }
    try {
      Files.move(temporary, file.toPath(), ATOMIC_MOVE, REPLACE_EXISTING)
    } catch (_: AtomicMoveNotSupportedException) {
      Files.move(temporary, file.toPath(), REPLACE_EXISTING)
    }
  }
}
