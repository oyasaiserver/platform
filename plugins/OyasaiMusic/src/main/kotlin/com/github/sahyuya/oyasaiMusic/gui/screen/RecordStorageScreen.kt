package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordItem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.ItemStack

/** Manually applies allowed transfers; the real items never occupy the navigation cells. */
class RecordStorageScreen(
    private val plugin: OyasaiMusic,
    private val menus: MenuManager,
    viewer: Player,
) : BaseGridMenu(viewer, Component.text("レコードストレージ")) {
  private var page = 0
  private var failed = false

  init {
    refresh()
  }

  override fun refresh() {
    if (failed) return
    try {
      val items = RecordStorage.page(viewer, page)
      GuiChrome.render(
          inventory,
          NavTab.FAVORITES_PLAYLISTS,
          plugin.controllerStateService.stateFor(viewer.uniqueId),
          "配置順",
          viewer,
          plugin,
      )
      ContentGrid.SLOTS.forEachIndexed { index, slot -> inventory.setItem(slot, items[index]) }
      if (page == 0) inventory.setItem(ControllerSlots.PAGE_PREV, GuiChrome.backControllerButton())
      inventory.setItem(
          ControllerSlots.SORT,
          GuiItemBuilder(Material.RED_BUNDLE)
              .name(
                  Component.text("ストレージ ${page+1}/${RecordStorage.MAX_PAGES}", NamedTextColor.RED)
              )
              .lore(Component.text("OyasaiMusicのレコードのみ収納できます", NamedTextColor.GRAY))
              .build(),
      )
      if (page == RecordStorage.MAX_PAGES - 1)
          inventory.setItem(
              ControllerSlots.PAGE_NEXT,
              GuiItemBuilder(Material.GRAY_DYE)
                  .name(Component.text("最終ページ", NamedTextColor.GRAY))
                  .build(),
          )
    } catch (e: Exception) {
      fail(e)
    }
  }

  private fun fail(e: Exception) {
    failed = true
    plugin.logger.severe("Record storage unavailable: " + e.javaClass.simpleName)
    viewer.sendMessage("§cストレージを読み書きできません。保存データは保持しています。")
  }

  private fun item(value: ItemStack?) =
      value?.takeUnless { it.type.isAir || it.amount <= 0 }?.clone()

  private fun allowed(value: ItemStack?) =
      value == null || PhysicalRecordItem.isRecordItem(plugin, value)

  override fun onClick(event: InventoryClickEvent) {
    if (failed) return
    val raw = event.rawSlot
    if (raw == ControllerSlots.PAGE_PREV) {
      if (page == 0) menus.open(viewer, FavoritesPlaylistsScreen(plugin, menus, viewer), false)
      else {
        page--
        refresh()
      }
      return
    }
    if (raw == ControllerSlots.PAGE_NEXT) {
      if (page < 19) {
        page++
        refresh()
      }
      return
    }
    if (NavTabRouter.handle(raw, NavTab.FAVORITES_PLAYLISTS, null, plugin, menus, viewer)) return
    if (raw < 54 && raw !in ContentGrid.SLOTS) {
      plugin.playbackController.handleControllerClick(raw, viewer)
      return
    }
    if (raw < 0) return
    try {
      val cells = RecordStorage.page(viewer, page)
      if (event.isShiftClick) {
        if (raw >= 54 && event.clickedInventory == viewer.inventory) {
          val incoming = item(event.currentItem) ?: return
          if (!allowed(incoming)) return
          val remaining = distribute(cells, incoming)
          RecordStorage.save(plugin, viewer, page, cells)
          viewer.inventory.setItem(event.slot, remaining)
        } else {
          val index = ContentGrid.SLOTS.indexOf(raw)
          if (index < 0) return
          val outgoing = cells[index] ?: return
          val playerCells = viewer.inventory.storageContents.map(::item).toTypedArray()
          cells[index] = distribute(playerCells, outgoing)
          RecordStorage.save(plugin, viewer, page, cells)
          viewer.inventory.storageContents = playerCells
        }
        refresh()
        return
      }
      // Number keys, double-click collect, creative cloning and dropping are not forwarded.
      if (
          event.click != org.bukkit.event.inventory.ClickType.LEFT &&
              event.click != org.bukkit.event.inventory.ClickType.RIGHT
      )
          return
      if (raw >= 54) {
        event.isCancelled = false
        return
      }
      val index = ContentGrid.SLOTS.indexOf(raw)
      if (index < 0) return
      var cursor = item(viewer.itemOnCursor)
      var cell = item(cells[index])
      if (!allowed(cursor)) return
      if (cursor == null) {
        if (cell == null) return
        val count = if (event.isRightClick) (cell.amount + 1) / 2 else cell.amount
        cursor = cell.clone().also { it.amount = count }
        cell.amount -= count
        cell = item(cell)
      } else if (cell == null || cell.isSimilar(cursor)) {
        val space = cursor.maxStackSize - (cell?.amount ?: 0)
        val count = minOf(if (event.isRightClick) 1 else cursor.amount, space)
        if (count <= 0) return
        cell = (cell ?: cursor.clone().also { it.amount = 0 }).also { it.amount += count }
        cursor.amount -= count
        cursor = item(cursor)
      } else {
        val swap = cell
        cell = cursor
        cursor = swap
      }
      cells[index] = cell
      RecordStorage.save(plugin, viewer, page, cells)
      viewer.setItemOnCursor(cursor)
      refresh()
    } catch (e: Exception) {
      fail(e)
    }
  }

  fun onDrag(event: InventoryDragEvent) {
    if (failed) return
    if (event.rawSlots.all { it >= 54 }) {
      event.isCancelled = false
      return
    }
    if (!event.rawSlots.all { it in ContentGrid.SLOTS } || !allowed(item(event.oldCursor))) return
    try {
      val cells = RecordStorage.page(viewer, page)
      event.newItems.forEach { (raw, value) ->
        require(allowed(value))
        cells[ContentGrid.SLOTS.indexOf(raw)] = item(value)
      }
      RecordStorage.save(plugin, viewer, page, cells)
      viewer.setItemOnCursor(item(event.cursor))
      refresh()
    } catch (e: Exception) {
      fail(e)
    }
  }

  private fun distribute(target: Array<ItemStack?>, source: ItemStack): ItemStack? {
    val remaining = source.clone()
    for (index in target.indices) {
      val current = target[index] ?: continue
      if (!current.isSimilar(remaining)) continue
      val count = minOf(remaining.amount, (current.maxStackSize - current.amount).coerceAtLeast(0))
      current.amount += count
      remaining.amount -= count
      if (remaining.amount == 0) return null
    }
    for (index in target.indices) {
      if (target[index] != null) continue
      val count = minOf(remaining.amount, remaining.maxStackSize)
      target[index] = remaining.clone().also { it.amount = count }
      remaining.amount -= count
      if (remaining.amount == 0) return null
    }
    return remaining
  }

  override fun onClose(event: InventoryCloseEvent) {
    if (failed) return
    try {
      RecordStorage.compact(viewer)
      page = 0
      refresh()
    } catch (e: Exception) {
      fail(e)
    }
  }
}
