package com.gakubuchilocker.database

import com.gakubuchilocker.GakubuchiLockerPlugin
import icu.oyasai.frames.FrameStore
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.entity.ItemFrame
import org.bukkit.persistence.PersistentDataType

class DatabaseManager(private val plugin: GakubuchiLockerPlugin) {
  private val store = FrameStore(plugin.plugin.dataFolder.resolve("frames.db"))
  private val cache = ConcurrentHashMap(store.lockedOwners())

  fun lockFrame(frame: ItemFrame, ownerUuid: UUID) {
    val loc = frame.location
    store.lock(
        frame.uniqueId,
        ownerUuid,
        frame.world.uid,
        frame.world.name,
        loc.blockX,
        loc.blockY,
        loc.blockZ,
    )
    cache[frame.uniqueId] = ownerUuid
    frame.persistentDataContainer.set(
        plugin.ownerKey,
        PersistentDataType.STRING,
        ownerUuid.toString(),
    )
  }

  fun unlockFrame(frame: ItemFrame) {
    frame.persistentDataContainer.remove(plugin.ownerKey)
    unlockFrame(frame.uniqueId)
  }

  fun unlockFrame(entityUuid: UUID) {
    store.unlock(entityUuid)
    cache.remove(entityUuid)
    (Bukkit.getEntity(entityUuid) as? ItemFrame)?.persistentDataContainer?.remove(plugin.ownerKey)
  }

  fun isLocked(entityUuid: UUID): Boolean = cache.containsKey(entityUuid)

  fun getOwner(entityUuid: UUID): UUID? = cache[entityUuid]

  fun close() = store.close()
}
