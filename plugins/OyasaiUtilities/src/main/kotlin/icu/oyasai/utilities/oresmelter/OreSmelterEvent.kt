package icu.oyasai.utilities.oresmelter

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
}
