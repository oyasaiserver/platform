package io.oyasai.particles.gui

import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder

sealed interface ParticleGuiHolder : InventoryHolder {
  var backingInventory: Inventory?

  override fun getInventory(): Inventory =
      backingInventory ?: error("GUI inventory has not been initialized yet")
}

class AreaListHolder(
    val showAll: Boolean,
    val page: Int,
    val slotAreaIds: MutableMap<Int, String> = HashMap(),
    override var backingInventory: Inventory? = null,
) : ParticleGuiHolder

class AreaEditorHolder(
    val areaId: String,
    val returnShowAll: Boolean = false,
    var confirmReclaim: Boolean = false,
    var confirmDelete: Boolean = false,
    override var backingInventory: Inventory? = null,
) : ParticleGuiHolder
