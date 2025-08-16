package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.Tools
import org.bukkit.NamespacedKey
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/** GuiInventoryと連携して使う、クリックするとアクションが起こるアイテム用 */
object GuiItem {
  // Long型の最小値～最大値のrange、GuiItemのランダムID用
  private val rangeLong = (Long.MIN_VALUE..Long.MAX_VALUE)
  // GuiItemのデータのKey用
  private val key by lazy { NamespacedKey(Tools.plugin, "GuiItemID") }
  // GuiItemID別のRunnable保存用
  private val cache = mutableMapOf<Long, Runnable>()

  /**
   * Gui用の処理を登録
   *
   * @param run ここに処理したい内容
   */
  fun ItemStack.guiRun(run: Runnable): ItemStack {
    val meta = this.itemMeta
    val idLong = rangeLong.random()
    meta.persistentDataContainer.set(key, PersistentDataType.LONG, idLong)
    this.itemMeta = meta
    cache[idLong] = run
    return this
  }

  /** ClickEventからクリックされたアイテムを取得してrunが存在すれば実行する */
  fun clickItemToRun(e: InventoryClickEvent) {
    val clickItem = e.currentItem ?: return
    val idLong =
      clickItem.itemMeta.persistentDataContainer.get(key, PersistentDataType.LONG) ?: return
    cache[idLong]?.run()
  }
}
