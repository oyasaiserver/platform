package icu.oyasai.utilities.menu_gui.guilib

import icu.oyasai.utilities.OyasaiUtilities.plugin
import kotlin.random.Random
import org.bukkit.NamespacedKey
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object GuiItem {
  // GuiItemのデータのKey用
  private val clickKey: NamespacedKey by lazy { NamespacedKey(plugin, "gui_click_menu") }
  // GuiItemID別のUnit保存用
  private val cacheClick = mutableMapOf<Long, Pair<Boolean, (InventoryClickEvent) -> Unit>>()

  /**
   * Gui用のクリック処理を登録
   *
   * @param cansel クリックイベントをキャンセル扱いするか
   * @param run ここに処理したい内容
   */
  fun ItemStack.guiClickEvent(
      cansel: Boolean = true,
      run: (InventoryClickEvent) -> Unit = {},
  ): ItemStack {
    val meta = this.itemMeta
    val idLong = Random.nextLong()
    meta?.persistentDataContainer?.set(clickKey, PersistentDataType.LONG, idLong)
    this.itemMeta = meta
    cacheClick[idLong] = Pair(cansel, run)
    return this
  }

  /** ClickEventから操作アイテムを取得してrunが存在すれば実行する */
  fun itemToRun(e: InventoryClickEvent) {
    val clickItem = e.currentItem ?: return
    val idLong =
        clickItem.itemMeta?.persistentDataContainer?.get(clickKey, PersistentDataType.LONG)
            ?: return
    cacheClick[idLong]?.run {
      if (this.first) e.isCancelled = true
      this.second(e)
    }
  }
}
