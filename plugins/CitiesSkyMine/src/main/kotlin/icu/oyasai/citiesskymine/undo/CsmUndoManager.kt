package icu.oyasai.citiesskymine.undo

import org.bukkit.command.BlockCommandSender
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class CsmUndoManager {
  enum class Source(val id: String, val displayName: String) {
    PAYLOAD("payload", "payload"),
    WINDOW("window", "window"),
    ROAD("road", "road"),
    INTERSECTION("intersection", "intersection"),
    FACADE("facade", "facade");

    companion object {
      fun fromId(raw: String?): Source? =
          entries.firstOrNull { it.id.equals(raw, ignoreCase = true) }
    }
  }

  data class Entry(val key: String, val source: Source, val createdAt: Long)

  private val entries = ArrayList<Entry>()

  @Synchronized
  fun record(sender: CommandSender, source: Source) {
    val key = keyFor(sender) ?: return
    entries.removeAll { it.key == key && it.source == source }
    entries.add(Entry(key, source, System.currentTimeMillis()))
    trim(key)
  }

  @Synchronized
  fun peekLatest(sender: CommandSender): Entry? {
    val key = keyFor(sender) ?: return null
    for (index in entries.indices.reversed()) {
      if (entries[index].key == key) {
        return entries[index]
      }
    }
    return null
  }

  @Synchronized
  fun takeLatest(sender: CommandSender): Entry? {
    val key = keyFor(sender) ?: return null
    for (index in entries.indices.reversed()) {
      if (entries[index].key == key) {
        return entries.removeAt(index)
      }
    }
    return null
  }

  @Synchronized
  fun peekLatest(sender: CommandSender, source: Source): Entry? {
    val key = keyFor(sender) ?: return null
    for (index in entries.indices.reversed()) {
      val entry = entries[index]
      if (entry.key == key && entry.source == source) {
        return entry
      }
    }
    return null
  }

  @Synchronized
  fun takeLatest(sender: CommandSender, source: Source): Entry? {
    val key = keyFor(sender) ?: return null
    for (index in entries.indices.reversed()) {
      val entry = entries[index]
      if (entry.key == key && entry.source == source) {
        return entries.removeAt(index)
      }
    }
    return null
  }

  private fun keyFor(sender: CommandSender): String? =
      when (sender) {
        is Player -> "player:${sender.uniqueId}"
        is BlockCommandSender -> {
          val loc = sender.block.location
          "block:${sender.block.world.uid}:${loc.blockX}:${loc.blockY}:${loc.blockZ}"
        }
        else -> null
      }

  private fun trim(key: String) {
    val matching = entries.count { it.key == key }
    if (matching <= MAX_ENTRIES_PER_KEY) return
    val overflow = matching - MAX_ENTRIES_PER_KEY
    var removed = 0
    val iterator = entries.iterator()
    while (iterator.hasNext() && removed < overflow) {
      if (iterator.next().key == key) {
        iterator.remove()
        removed++
      }
    }
  }

  companion object {
    private const val MAX_ENTRIES_PER_KEY = 32
  }
}
