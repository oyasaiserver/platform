package icu.oyasai.utilities.menu_gui.guilib

import org.bukkit.Bukkit
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.inventory.InventoryType
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object GuiInventory : Listener {
  private val invList = mutableMapOf<Inventory, Pair<Boolean, Boolean>>()

  /**
   * インベントリ(GUI)を作成して返す
   *
   * @param type インベントリのタイプ
   * @param title インベントリのタイトル
   * @param keep trueの場合はインベントリを閉じた時にキャッシュから消さない
   * @param lock trueの場合は下部インベントリの操作をキャンセルする
   */
  fun createInventory(
      type: InventoryType,
      title: String,
      keep: Boolean = false,
      lock: Boolean = true,
  ): Inventory {
    val inv = Bukkit.createInventory(null, type, title)
    invList[inv] = Pair(keep, lock)
    return inv
  }

  /**
   * インベントリ(GUI)を作成して返す
   *
   * @param line 行数(1～6)
   * @param title インベントリのタイトル
   * @param keep trueの場合はインベントリを閉じた時にキャッシュから消さない
   * @param lock trueの場合は下部インベントリの操作をキャンセルする
   */
  fun createInventory(
      line: Int,
      title: String,
      keep: Boolean = false,
      lock: Boolean = true,
  ): Inventory {
    val inv = Bukkit.createInventory(null, 9 * line, title)
    invList[inv] = Pair(keep, lock)
    return inv
  }

  @EventHandler
  fun clickEvent(e: InventoryClickEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    GuiItem.itemToRun(e)
    if (invList[e.view.topInventory]?.second == true &&
        e.clickedInventory?.type == InventoryType.PLAYER)
        e.isCancelled = true
  }

  @EventHandler
  fun dragEvent(e: InventoryDragEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    e.isCancelled = true
  }

  /** Inventory閉じた時に判定用キャッシュから消す用 */
  @EventHandler
  fun inventoryCloseEvent(e: InventoryCloseEvent) {
    // invListに存在しないインベントリのイベントの場合return
    // keepがtrueの場合はキャッシュから消さない(return)
    if (invList[e.view.topInventory]?.first ?: true) return
    invList.remove(e.view.topInventory)
  }

  /** プラグイン無効化の時の処理 */
  fun disableTask() {
    // invListにあるインベントリを見ているプレイヤーにインベントリを閉じさせる処理
    invList.keys.toList().forEach { inv ->
      inv.viewers.toList().forEach { player -> player.closeInventory() }
    }
  }

  fun InventoryClickEvent.clickSound(
      sound: Sound = Sound.UI_BUTTON_CLICK,
      category: SoundCategory = SoundCategory.MASTER,
      volume: Float = 1f,
      pitch: Float = 1f,
  ) {
    (this.whoClicked as Player).playSound(this.whoClicked, sound, category, volume, pitch)
  }

  /**
   * インベントリのxy座標にアイテムをセットする
   *
   * @param posX x座標(0~8)
   * @param posY y座標(0~5)
   * @param item アイテム
   */
  fun Inventory.setItem(posX: Int, posY: Int, item: ItemStack?) {
    this.setItem(posY * 9 + posX, item)
  }
}
