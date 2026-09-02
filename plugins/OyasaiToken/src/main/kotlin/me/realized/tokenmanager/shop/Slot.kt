package me.realized.tokenmanager.shop

import me.realized.tokenmanager.TokenManagerPlugin
import org.bukkit.inventory.ItemStack

open class Slot(
    open val plugin: TokenManagerPlugin,
    open val shop: Shop,
    open val slot: Int,
    open val cost: Int,
    open val emptySlotsRequired: Int,
    open val displayed: ItemStack,
    open val message: String?,
    open val subshop: String?,
    open val commands: List<String>,
    open val usePermission: Boolean,
    open val confirmPurchase: Boolean,
) {
  open fun isUsePermission(): Boolean = usePermission

  open fun isConfirmPurchase(): Boolean = confirmPurchase
}
