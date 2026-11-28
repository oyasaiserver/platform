package io.oyasai.particles.listener

import io.oyasai.particles.item.ParticleItemFactory
import org.bukkit.event.Event
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.FurnaceBurnEvent
import org.bukkit.event.inventory.FurnaceSmeltEvent
import org.bukkit.event.inventory.PrepareAnvilEvent
import org.bukkit.event.inventory.PrepareGrindstoneEvent
import org.bukkit.event.inventory.PrepareItemCraftEvent
import org.bukkit.event.inventory.PrepareSmithingEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent

/** ワンドおよびパーティクルアイテムがクラフト・金床・燃料・羊染色など バニラ用途に悪用・誤消費されるのを防止する。 */
class ItemProtectionListener(
    private val itemFactory: ParticleItemFactory,
) : Listener {

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onPrepareCraft(event: PrepareItemCraftEvent) {
    if (event.inventory.matrix.any { itemFactory.isManagedItem(it) }) {
      event.inventory.result = null
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onPrepareAnvil(event: PrepareAnvilEvent) {
    val inv = event.inventory
    if (itemFactory.isManagedItem(inv.firstItem) || itemFactory.isManagedItem(inv.secondItem)) {
      event.result = null
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onPrepareGrindstone(event: PrepareGrindstoneEvent) {
    val inv = event.inventory
    if (itemFactory.isManagedItem(inv.upperItem) || itemFactory.isManagedItem(inv.lowerItem)) {
      event.result = null
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onPrepareSmithing(event: PrepareSmithingEvent) {
    if (event.inventory.contents.any { itemFactory.isManagedItem(it) }) {
      event.result = null
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onFurnaceBurn(event: FurnaceBurnEvent) {
    if (itemFactory.isManagedItem(event.fuel)) {
      event.isCancelled = true
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onFurnaceSmelt(event: FurnaceSmeltEvent) {
    if (itemFactory.isManagedItem(event.source)) {
      event.isCancelled = true
    }
  }

  @EventHandler(priority = EventPriority.LOW, ignoreCancelled = true)
  fun onInteractEntity(event: PlayerInteractEntityEvent) {
    val player = event.player
    val held = player.inventory.getItem(event.hand)
    if (itemFactory.isManagedItem(held)) {
      event.isCancelled = true
    }
  }

  @EventHandler(priority = EventPriority.LOW)
  fun onInteractBlockVanillaGuard(event: PlayerInteractEvent) {
    if (itemFactory.isManagedItem(event.item)) {
      // 看板の染色・大釜・コンポスター・設置等、バニラ側のブロック相互作用を抑止する
      event.setUseInteractedBlock(Event.Result.DENY)
    }
  }
}
