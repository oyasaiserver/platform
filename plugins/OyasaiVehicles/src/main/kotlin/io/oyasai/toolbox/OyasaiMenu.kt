package io.oyasai.toolbox

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderGUI
import io.oyasai.anybuilder.carbuilder2.CarBuilder2GUI
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

open class OyasaiMenu(val size: Int, var title: String) : InventoryHolder {

  private var inventory: Inventory = Bukkit.createInventory(this, size, legacyTextComponent(title))
  private val actions = mutableMapOf<Int, (InventoryClickEvent) -> Unit>()
  private var globalAction: ((InventoryClickEvent) -> Unit)? = null
  private var dragAction: ((InventoryDragEvent) -> Unit)? = null
  private var bottomClickAction: ((InventoryClickEvent) -> Unit)? = null
  private var closeAction: ((InventoryCloseEvent) -> Unit)? = null
  private var updatingTitle: Boolean = false

  fun setItem(slot: Int, item: ItemStack, action: ((InventoryClickEvent) -> Unit)? = null) {
    inventory.setItem(slot, item)
    if (action != null) {
      actions[slot] = action
    } else {
      actions.remove(slot)
    }
  }

  fun setGlobalClickAction(action: (InventoryClickEvent) -> Unit) {
    globalAction = action
  }

  fun setGlobalDragAction(action: (InventoryDragEvent) -> Unit) {
    dragAction = action
  }

  fun setOnBottomClick(action: (InventoryClickEvent) -> Unit) {
    bottomClickAction = action
  }

  fun setOnClose(action: (InventoryCloseEvent) -> Unit) {
    closeAction = action
  }

  fun updateTitle(newTitle: String, player: Player) {
    title = newTitle
    val oldContents = inventory.contents
    inventory = Bukkit.createInventory(this, size, legacyTextComponent(title))
    inventory.contents = oldContents
    updatingTitle = true
    try {
      player.openInventory(inventory)
    } finally {
      updatingTitle = false
    }
  }

  fun open(player: Player) {
    player.openInventory(inventory)
  }

  override fun getInventory(): Inventory = inventory

  fun handleClick(event: InventoryClickEvent) {
    if (
        event.action == InventoryAction.COLLECT_TO_CURSOR || event.click == ClickType.DOUBLE_CLICK
    ) {
      event.isCancelled = true
    }
    if (event.clickedInventory == inventory) {
      globalAction?.invoke(event)
      val slot = event.rawSlot
      if (slot in 0 until size) {
        actions[slot]?.invoke(event)
      }
    } else if (event.clickedInventory == event.view.bottomInventory) {
      if (event.isShiftClick || event.action == InventoryAction.MOVE_TO_OTHER_INVENTORY) {
        event.isCancelled = true
      }
      bottomClickAction?.invoke(event)
    }
  }

  fun handleDrag(event: InventoryDragEvent) {
    if (event.rawSlots.any { it in 0 until size }) {
      event.isCancelled = true
    }
    dragAction?.invoke(event)
  }

  fun handleClose(event: InventoryCloseEvent) {
    if (!updatingTitle) {
      closeAction?.invoke(event)
    }
  }
}

class PaginatedOyasaiMenu(size: Int, title: String, private val pageSize: Int = size - 9) :
    OyasaiMenu(size, title) {
  var currentPage = 0
  private var allItems = mutableListOf<Pair<ItemStack, (InventoryClickEvent) -> Unit>>()

  fun addPaginatedItem(item: ItemStack, action: (InventoryClickEvent) -> Unit) {
    allItems.add(item to action)
  }

  fun clearPaginatedItems() {
    allItems.clear()
  }

  fun populate(player: Player? = null) {
    // Clear paginated area
    for (i in 0 until pageSize) {
      setItem(i, ItemStack(org.bukkit.Material.AIR), null)
    }

    val start = currentPage * pageSize
    val end = minOf(start + pageSize, allItems.size)

    for (i in start until end) {
      val (item, action) = allItems[i]
      setItem(i - start, item, action)
    }

    if (player != null) {
      open(player)
    }
  }

  fun getTotalPages(): Int {
    if (allItems.isEmpty()) return 1
    return (allItems.size + pageSize - 1) / pageSize
  }
}

object OyasaiMenuListener : Listener {
  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val holder = event.inventory.holder
    if (holder is OyasaiMenu) {
      holder.handleClick(event)
    }
  }

  @EventHandler
  fun onInventoryDrag(event: InventoryDragEvent) {
    val holder = event.inventory.holder
    if (holder is OyasaiMenu) {
      holder.handleDrag(event)
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    val holder = event.inventory.holder
    if (holder is OyasaiMenu) {
      holder.handleClose(event)
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val uuid = event.player.uniqueId
    CarBuilder2GUI.clearPlayerState(uuid)
    AircraftBuilderGUI.clearPlayerState(uuid)
  }
}
