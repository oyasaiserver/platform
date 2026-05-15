package io.oyasai.toolbox

import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

open class OyasaiMenu(val size: Int, var title: String) : InventoryHolder {

  private var inventory: Inventory = Bukkit.createInventory(this, size, legacyTextComponent(title))
  private val actions = mutableMapOf<Int, (InventoryClickEvent) -> Unit>()
  private var globalAction: ((InventoryClickEvent) -> Unit)? = null
  private var dragAction: ((InventoryDragEvent) -> Unit)? = null
  private var bottomClickAction: ((InventoryClickEvent) -> Unit)? = null

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

  fun updateTitle(newTitle: String, player: Player) {
    title = newTitle
    val oldContents = inventory.contents
    inventory = Bukkit.createInventory(this, size, legacyTextComponent(title))
    inventory.contents = oldContents
    player.openInventory(inventory)
  }

  fun open(player: Player) {
    player.openInventory(inventory)
  }

  override fun getInventory(): Inventory = inventory

  fun handleClick(event: InventoryClickEvent) {
    if (event.clickedInventory == inventory) {
      globalAction?.invoke(event)
      val slot = event.rawSlot
      if (slot < size) {
        actions[slot]?.invoke(event)
      }
    } else if (event.clickedInventory == event.view.bottomInventory) {
      bottomClickAction?.invoke(event)
    }
  }

  fun handleDrag(event: InventoryDragEvent) {
    dragAction?.invoke(event)
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
}
