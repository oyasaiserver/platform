package me.realized.tokenmanager.shop

import org.bukkit.inventory.ItemStack

open class Shop(
    open val name: String,
    open val title: String,
    open val size: Int,
    open val autoClose: Boolean,
    open val usePermission: Boolean,
    open val confirmPurchase: Boolean,
) {
  private val slots = mutableMapOf<Int, Slot>()

  init {
    require(size > 0) { "size must be positive" }
  }

  open fun setSlot(slot: Int, displayed: ItemStack, slotData: Slot) {
    slots[slot] = slotData
  }

  open fun getSlot(slot: Int): Slot? = slots[slot]

  open fun isAutoClose(): Boolean = autoClose

  open fun isUsePermission(): Boolean = usePermission

  open fun isConfirmPurchase(): Boolean = confirmPurchase
}
