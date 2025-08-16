@file:Suppress("DEPRECATION")

package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.Tools
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder

/** GUIとして使うインベントリを作成する。自動でそのインベントリ内で起こるクリックイベントをキャンセルする。 */
object GuiInventory : Listener {
  /**
   * インベントリ(GUI)を作成して返す
   *
   * @param line 行数(1～6)
   * @param title インベントリのタイトル
   * @param [owner] インベントリの所有者、デフォnull
   */
  fun createInventory(line: Int, title: String, owner: InventoryHolder? = null): Inventory {
    val inv = Bukkit.createInventory(owner, 9 * line, title)
    invList.add(inv)
    return inv
  }

  /**
   * インベントリ(GUI)を作成して返す
   *
   * @param line 行数(1～6)
   * @param title インベントリのタイトル
   */
  fun createInventory(line: Int, title: String): Inventory {
    val inv = Bukkit.createInventory(null, 9 * line, title)
    invList.add(inv)
    return inv
  }

  /** インベントリイベント判定用 */
  private val invList = mutableListOf<Inventory>()

  /** Inventoryシングルクリックのキャンセル用 */
  @EventHandler
  fun inventoryClickEvents(e: InventoryClickEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    Tools.plugin.logger.info("debug: invListにあるInventoryのClickEvent発生")
    e.isCancelled = true
    GuiItem.clickItemToRun(e)
  }

  /** Inventoryドラッグのキャンセル用 */
  @EventHandler
  fun inventoryDragEvents(e: InventoryDragEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    Tools.plugin.logger.info("debug: invListにあるInventoryのDragEvent発生")
    e.isCancelled = true
  }

  /** Inventory閉じた時に判定用キャッシュから消す用 */
  @EventHandler
  fun inventoryCloseEvent(e: InventoryCloseEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    Tools.plugin.logger.info("debug: invListにあるInventoryのCloseEvent発生")
    invList.remove(e.view.topInventory)
  }

  /** プラグイン無効化の時の処理 */
  fun disableTask() {
    // invListにあるインベントリを見ているプレイヤーにインベントリを閉じさせる処理
    invList.toList().forEach { inv ->
      inv.viewers.toList().forEach { player -> player.closeInventory() }
    }
  }
}
