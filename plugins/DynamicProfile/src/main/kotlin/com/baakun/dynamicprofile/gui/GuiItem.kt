package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.util.Tools
import org.bukkit.NamespacedKey
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/** GuiInventoryと連携して使う、クリックするとアクションが起こるアイテム用 */
object GuiItem {
  private const val MAX_CACHE_SIZE = 4096
  // Long型の最小値～最大値のrange、GuiItemのランダムID用
  private val rangeLong = (Long.MIN_VALUE..Long.MAX_VALUE)
  // GuiItemのデータのKey用
  private val key by lazy { NamespacedKey(Tools.plugin, "GuiItemID") }
  private val keyright by lazy { NamespacedKey(Tools.plugin, "GuiItemIDright") }
  private val keyshiftright by lazy { NamespacedKey(Tools.plugin, "GuiItemIDshiftright") }
  // GuiItemID別のRunnable保存用
  private val cache = LinkedHashMap<Long, Runnable>()
  // GuiItemID別のRunnable保存用(右クリックのみ)
  private val cacheRight = LinkedHashMap<Long, Runnable>()
  // GuiItemID別のRunnable保存用(Shift+右クリックのみ)
  private val cacheShiftRight = LinkedHashMap<Long, Runnable>()

  private fun putBounded(map: LinkedHashMap<Long, Runnable>, id: Long, run: Runnable) {
    if (map.size >= MAX_CACHE_SIZE && !map.containsKey(id)) {
      val firstKey = map.keys.firstOrNull()
      if (firstKey != null) map.remove(firstKey)
    }
    map[id] = run
  }

  /**
   * Gui用の処理を登録
   *
   * @param run ここに処理したい内容
   */
  fun ItemStack.guiRun(run: Runnable): ItemStack {
    val meta = this.itemMeta ?: return this
    val idLong = rangeLong.random()
    meta.persistentDataContainer.set(key, PersistentDataType.LONG, idLong)
    this.itemMeta = meta
    putBounded(cache, idLong, run)
    return this
  }

  fun ItemStack.guiRunRight(run: Runnable): ItemStack {
    val meta = this.itemMeta ?: return this
    val idLong = rangeLong.random()
    meta.persistentDataContainer.set(keyright, PersistentDataType.LONG, idLong)
    this.itemMeta = meta
    putBounded(cacheRight, idLong, run)
    return this
  }

  fun ItemStack.guiRunShiftRight(run: Runnable): ItemStack {
    val meta = this.itemMeta ?: return this
    val idLong = rangeLong.random()
    meta.persistentDataContainer.set(keyshiftright, PersistentDataType.LONG, idLong)
    this.itemMeta = meta
    putBounded(cacheShiftRight, idLong, run)
    return this
  }

  /** ClickEventからクリックされたアイテムを取得してrunが存在すれば実行する */
  fun clickItemToRun(e: InventoryClickEvent) {
    val clickItem = e.currentItem ?: return
    val meta = clickItem.itemMeta ?: return
    val idLong = meta.persistentDataContainer.get(key, PersistentDataType.LONG)
    val idLongright = meta.persistentDataContainer.get(keyright, PersistentDataType.LONG)
    val idLongshiftright = meta.persistentDataContainer.get(keyshiftright, PersistentDataType.LONG)
    val run =
        if (e.isRightClick && e.isShiftClick) {
          cacheShiftRight[idLongshiftright] ?: cacheRight[idLongright] ?: cache[idLong]
        } else if (e.isRightClick) {
          cacheRight[idLongright] ?: cache[idLong]
        } else {
          cache[idLong]
        }
    run?.run()
  }

  /** インベントリ閉鎖時に登録済みアイテムのコールバックをキャッシュから解放する */
  fun cleanupInventory(inv: Inventory) {
    val contents = runCatching { inv.contents }.getOrNull() ?: return
    for (item in contents) {
      val meta = item?.itemMeta ?: continue
      val pdc = meta.persistentDataContainer
      pdc.get(key, PersistentDataType.LONG)?.let { cache.remove(it) }
      pdc.get(keyright, PersistentDataType.LONG)?.let { cacheRight.remove(it) }
      pdc.get(keyshiftright, PersistentDataType.LONG)?.let { cacheShiftRight.remove(it) }
    }
  }
}
