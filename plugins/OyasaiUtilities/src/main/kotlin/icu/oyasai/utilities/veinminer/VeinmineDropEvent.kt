package icu.oyasai.utilities.veinminer

import org.bukkit.block.Block
import org.bukkit.block.BlockState
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.HandlerList
import org.bukkit.inventory.ItemStack

class VeinmineDropEvent(
    block: Block,
    val blockState: BlockState,
    val player: Player,
    var items: MutableList<ItemStack>,
    var expToDrop: Int,
) : Event() {
  override fun getHandlers(): HandlerList = handlers

  companion object {
    private val handlers = HandlerList()

    @JvmStatic fun getHandlerList(): HandlerList = handlers
  }
}
