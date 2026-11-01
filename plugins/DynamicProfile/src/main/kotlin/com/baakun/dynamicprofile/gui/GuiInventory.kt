@file:Suppress("DEPRECATION")

package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.util.Tools
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory

/** GUIとして使うインベントリを作成する。自動でそのインベントリ内で起こるクリックイベントをキャンセルする。 */
object GuiInventory : Listener {
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
    // Tools.plugin.logger.info("debug: invListにあるInventoryのClickEvent発生")
    e.isCancelled = true
    Bukkit.getScheduler().runTaskLater(Tools.plugin, Runnable { GuiItem.clickItemToRun(e) }, 1L)
  }

  /** Inventoryドラッグのキャンセル用 */
  @EventHandler
  fun inventoryDragEvents(e: InventoryDragEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    // Tools.plugin.logger.info("debug: invListにあるInventoryのDragEvent発生")
    e.isCancelled = true
  }

  /** Inventory閉じた時に判定用キャッシュから消す用 */
  @EventHandler
  fun inventoryCloseEvent(e: InventoryCloseEvent) {
    // invListに存在しないインベントリのイベントの場合return
    if (!invList.contains(e.view.topInventory)) return
    // Tools.plugin.logger.info("debug: invListにあるInventoryのCloseEvent発生")
    invList.remove(e.view.topInventory)
  }
}
