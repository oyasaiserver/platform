package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordItem
import java.util.UUID
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

/**
 * Player data stores inventory and these pages in the same player save. All access is main-thread.
 */
object RecordStorage {
  const val PAGE_SIZE = 40
  const val MAX_PAGES = 20
  private const val MAX_BYTES = 1_048_576
  private val cache = mutableMapOf<UUID, Array<Array<ItemStack?>>>()

  private fun key(page: Int) = NamespacedKey("oyasaimusic", "record_storage_v1_$page")

  private fun pages(player: Player): Array<Array<ItemStack?>> =
      cache.getOrPut(player.uniqueId) {
        Array(MAX_PAGES) { page ->
          val bytes = player.persistentDataContainer.get(key(page), PersistentDataType.BYTE_ARRAY)
          if (bytes == null) arrayOfNulls(PAGE_SIZE)
          else {
            require(bytes.size <= MAX_BYTES) { "Storage page exceeds limit" }
            val loaded = ItemStack.deserializeItemsFromBytes(bytes)
            require(loaded.size == PAGE_SIZE) { "Invalid storage page size" }
            Array(PAGE_SIZE) { loaded[it].takeUnless { item -> item.type.isAir } }
          }
        }
      }

  fun page(player: Player, index: Int): Array<ItemStack?> {
    require(index in 0 until MAX_PAGES)
    return pages(player)[index].map { it?.clone() }.toTypedArray()
  }

  fun all(player: Player): List<ItemStack> = pages(player).flatMap { it.filterNotNull() }

  fun save(plugin: Plugin, player: Player, index: Int, items: Array<ItemStack?>) {
    require(index in 0 until MAX_PAGES && items.size == PAGE_SIZE)
    require(
        items.all { it == null || it.type.isAir || PhysicalRecordItem.isRecordItem(plugin, it) }
    )
    val proposed = items.map { it?.takeUnless { it.type.isAir }?.clone() }.toTypedArray()
    val bytes = ItemStack.serializeItemsAsBytes(proposed)
    require(bytes.size <= MAX_BYTES) { "Storage page exceeds limit" }
    val state = pages(player)
    player.persistentDataContainer.set(key(index), PersistentDataType.BYTE_ARRAY, bytes)
    state[index] = proposed
  }

  fun compact(player: Player) {
    val state = pages(player)
    val occupied = compactRecordPages(state.toList()) { it != null && !it.type.isAir }
    // Encode every surviving page before replacing anything, so encoding failures change nothing.
    val encoded =
        occupied.map {
          ItemStack.serializeItemsAsBytes(it).also { bytes -> require(bytes.size <= MAX_BYTES) }
        }
    for (index in 0 until MAX_PAGES) {
      if (index < encoded.size)
          player.persistentDataContainer.set(
              key(index),
              PersistentDataType.BYTE_ARRAY,
              encoded[index],
          )
      else player.persistentDataContainer.remove(key(index))
    }
    cache[player.uniqueId] = Array(MAX_PAGES) { occupied.getOrNull(it) ?: arrayOfNulls(PAGE_SIZE) }
  }

  fun forget(id: UUID) {
    cache.remove(id)
  }

  fun clear() {
    cache.clear()
  }
}

internal fun <T> compactRecordPages(
    pages: List<Array<T>>,
    occupied: (T) -> Boolean,
): List<Array<T>> {
  require(pages.size <= RecordStorage.MAX_PAGES)
  require(pages.all { it.size == RecordStorage.PAGE_SIZE })
  return pages.filter { it.any(occupied) }
}
