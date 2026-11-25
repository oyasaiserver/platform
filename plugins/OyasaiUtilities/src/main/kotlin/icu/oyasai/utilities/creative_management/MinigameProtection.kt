package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.api.MinigameInventoryProtection
import java.io.File
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.entity.Player

internal fun durableInventoryWrite(file: File, bytes: ByteArray) {
  Files.createDirectories(file.parentFile.toPath())
  val temporary = File(file.parentFile, file.name + ".tmp")
  FileOutputStream(temporary).use {
    it.write(bytes)
    it.fd.sync()
  }
  Files.move(
      temporary.toPath(),
      file.toPath(),
      StandardCopyOption.ATOMIC_MOVE,
      StandardCopyOption.REPLACE_EXISTING,
  )
}

internal class InventoryHolds(private val directory: File) {
  private val owners = mutableMapOf<UUID, String>()

  init {
    (if (directory.exists()) checkNotNull(directory.listFiles()) { "Cannot read inventory holds" }
        else emptyArray())
        .filter { it.extension == "hold" }
        .forEach {
          val id = UUID.fromString(it.nameWithoutExtension)
          val owner = it.readText().also { value -> require(value.isNotBlank()) }
          owners[id] = owner
        }
  }

  fun held(id: UUID) = owners.containsKey(id)

  fun checkAvailable(id: UUID, owner: String) {
    val previous = owners[id]
    check(previous == null || previous == owner) { "Inventory recovery belongs to $previous" }
  }

  fun acquire(id: UUID, owner: String) {
    require(owner.isNotBlank())
    val previous = owners[id]
    check(previous == null || previous == owner) { "Inventory recovery belongs to $previous" }
    if (previous != null) return
    durableInventoryWrite(File(directory, "$id.hold"), owner.toByteArray(Charsets.UTF_8))
    owners[id] = owner
  }

  fun release(id: UUID, owner: String, persistRestored: () -> Unit) {
    val previous = owners[id] ?: return
    check(previous == owner) { "Inventory recovery belongs to $previous" }
    persistRestored()
    Files.delete(File(directory, "$id.hold").toPath())
    owners.remove(id)
  }
}

internal class MinigameProtection(directory: File) : MinigameInventoryProtection {
  private val holds = InventoryHolds(directory)

  override fun isProtected(playerId: UUID) = holds.held(playerId)

  override fun checkAvailable(playerId: UUID, owner: String) {
    check(Bukkit.isPrimaryThread())
    holds.checkAvailable(playerId, owner)
  }

  override fun acquire(playerId: UUID, owner: String) {
    check(Bukkit.isPrimaryThread())
    holds.acquire(playerId, owner)
  }

  override fun release(player: Player, owner: String) {
    check(Bukkit.isPrimaryThread())
    holds.release(player.uniqueId, owner) {
      check(!player.isDead) { "Respawn before restoring inventory" }
      player.saveData()
      InventoryEvent.persistRestored(player)
    }
  }
}
