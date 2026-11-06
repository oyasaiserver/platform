package io.oyasai.directstate.update

import io.oyasai.directstate.integration.BlockEntityAccess
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.data.BlockData
import org.bukkit.plugin.java.JavaPlugin

/** 自然更新を起こす処理を除去する */
internal class NaturalUpdateLock(
    private val plugin: JavaPlugin,
    private val stop: (Block) -> Unit = { block ->
      if (block.type == Material.CREAKING_HEART)
          BlockEntityAccess.setBody(block, block.blockData, false)
      else BlockEntityAccess.clearScheduledTicks(block)
    },
) {
  private val eggs = linkedMapOf<Block, BlockData>()

  fun forget(blocks: List<Block>) {
    blocks.forEach { eggs.remove(it) }
  }

  fun freeze(blocks: List<Block>) {
    val schedule = eggs.isEmpty()
    for (block in blocks) {
      if (block.type != Material.SNIFFER_EGG && block.type != Material.CREAKING_HEART) continue
      stop(block)
      if (block.type == Material.SNIFFER_EGG) eggs[block] = block.blockData.clone()
    }
    // 通常はBlockPlaceEventの後にonPlaceが孵化（block tickという）を予約する。
    if (schedule && eggs.isNotEmpty())
        plugin.server.scheduler.runTaskLater(plugin, Runnable { flush() }, 1L)
  }

  fun flush() {
    val pending = eggs.toMap()
    eggs.clear()
    for ((block, data) in pending) {
      if (
          block.world.isChunkLoaded(block.x shr 4, block.z shr 4) &&
              block.blockData.asString == data.asString
      )
          stop(block)
    }
  }
}
