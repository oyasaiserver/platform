package me.realized.tokenmanager.api.event

import me.realized.tokenmanager.shop.Shop
import me.realized.tokenmanager.shop.Slot
import org.bukkit.entity.Player
import org.bukkit.event.HandlerList
import org.bukkit.inventory.ItemStack

open class TMSellAllEvent(player: Player, amount: Long) : TMEvent(player, amount) {
  override fun getHandlers(): HandlerList = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList(): HandlerList = HANDLERS
  }
}

open class TMSellHandEvent(player: Player, amount: Long, private val item: ItemStack) :
    TMEvent(player, amount) {
  open fun getItem(): ItemStack = item

  override fun getHandlers(): HandlerList = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList(): HandlerList = HANDLERS
  }
}

open class TMShopPurchaseEvent(
    player: Player,
    amount: Long,
    private val shop: Shop,
    private val slot: Slot,
) : TMEvent(player, amount) {
  open fun getShop(): Shop = shop

  open fun getSlot(): Slot = slot

  override fun getHandlers(): HandlerList = HANDLERS

  companion object {
    private val HANDLERS = HandlerList()

    @JvmStatic fun getHandlerList(): HandlerList = HANDLERS
  }
}
