package com.github.srain3.painttools.tools.configs

import com.github.srain3.painttools.tools.ToolBox

/** painttools:id is a canvas ID, independent of Bukkit's map ID. */
object MapIdList {
  private lateinit var store: CanvasStore
  private val ids = mutableSetOf<Int>()
  private val existing = mutableSetOf<Int>()
  private val locked = mutableSetOf<Int>()
  private var lastId = 0

  private fun persist(block: () -> Unit) {
    store.submit(block).whenComplete { _, failure ->
      if (failure != null)
          ToolBox.pl.logger.severe("Canvas metadata save failed: ${failure.message}")
    }
  }

  internal fun load(metadata: CanvasMetadata, database: CanvasStore) {
    store = database
    ids.clear()
    ids.addAll(metadata.ids)
    existing.clear()
    existing.addAll(metadata.existing)
    locked.clear()
    locked.addAll(metadata.locked)
    lastId = metadata.lastId
  }

  fun saveID(id: Int) {
    ids.add(id)
    existing.add(id)
    lastId = id
    MapData.newCanvas(id)
    persist { store.register(id, id) }
  }

  fun checkID(id: Int): Boolean = id in ids

  fun exists(id: Int): Boolean = id in existing

  fun getLastID(): Int = lastId

  fun setLockID(id: Int) {
    if (locked.add(id)) persist { store.setLocked(id, true) }
  }

  fun checkLockID(id: Int): Boolean = id in locked

  fun removeLockID(id: Int): Boolean {
    if (!locked.remove(id)) return false
    persist { store.setLocked(id, false) }
    return true
  }
}
