package icu.oyasai.utilities.oresmelter

import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockDropItemEvent
import de.miraculixx.veinminer.VeinMinerEvent.VeinminerDropEvent

object OreSmelterEvent : Listener {

  @EventHandler(priority = EventPriority.LOWEST)
  fun dropEvent(e: BlockDropItemEvent) {
    if (!e.player.inventory.itemInMainHand.type.toString().contains("PICKAXE")) return
    if (!OreSmelter.toggled.contains(e.player.uniqueId)) return
    val normalDrop = e.items.map { it.itemStack }
    normalDrop.forEach { item ->
      if (OreSmelter.convertMaterial.contains(item.type)) {
        val newMaterial = OreSmelter.convertMaterial[item.type] ?: item.type
        item.type = newMaterial
      }
    }
  }

  @EventHandler
  fun onVeinminerDrop(e: VeinminerDropEvent) {
    if (!e.player.inventory.itemInMainHand.type.toString().contains("PICKAXE")) return
    if (!OreSmelter.toggled.contains(e.player.uniqueId)) return
    e.items.forEach { item ->
      if (OreSmelter.convertMaterial.contains(item.type)) {
        val newMaterial = OreSmelter.convertMaterial[item.type] ?: item.type
        item.type = newMaterial
      }
    }
  }
}
