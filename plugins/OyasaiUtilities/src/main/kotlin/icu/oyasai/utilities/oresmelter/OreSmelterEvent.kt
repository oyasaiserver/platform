package icu.oyasai.utilities.oresmelter

import de.miraculixx.veinminer.VeinMinerEvent.VeinminerDropEvent
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockDropItemEvent

object OreSmelterEvent : Listener {
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onNormalDrop(e: BlockDropItemEvent) {
    if (!e.player.inventory.itemInMainHand.type.toString().contains("PICKAXE")) return
    if (!OreSmelter.toggled.contains(e.player.uniqueId)) return
    e.items.forEach { itemEntity ->
      val stack = itemEntity.itemStack
      if (OreSmelter.convertMaterial.contains(stack.type)) {
        val newMaterial = OreSmelter.convertMaterial[stack.type] ?: return@forEach
        val newStack = stack.clone()
        newStack.type = newMaterial
        itemEntity.itemStack = newStack
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onVeinminerDrop(e: VeinminerDropEvent) {
    if (!e.player.inventory.itemInMainHand.type.toString().contains("PICKAXE")) return
    if (!OreSmelter.toggled.contains(e.player.uniqueId)) return
    val iterator = e.items.listIterator()
    while (iterator.hasNext()) {
      val item = iterator.next()
      if (OreSmelter.convertMaterial.contains(item.type)) {
        val newMaterial = OreSmelter.convertMaterial[item.type] ?: continue
        val newStack = item.clone()
        newStack.type = newMaterial
        iterator.set(newStack)
      }
    }
  }
}
