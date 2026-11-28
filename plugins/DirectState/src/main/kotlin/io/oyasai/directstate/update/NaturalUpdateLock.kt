package io.oyasai.directstate.update

import io.oyasai.directstate.integration.BlockEntityAccess
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Waterlogged
import org.bukkit.plugin.java.JavaPlugin

/** 自然更新を起こす処理を除去する */
internal class NaturalUpdateLock(
    private val plugin: JavaPlugin,
    private val stop: (Block) -> Unit = { block ->
      when {
        block.type == Material.CREAKING_HEART ->
            BlockEntityAccess.setBody(block, block.blockData, false)
        containsFluid(block) -> BlockEntityAccess.clearFluidTicks(block)
        else -> BlockEntityAccess.clearScheduledTicks(block)
      }
    },
) {
  private val eggs = linkedMapOf<Block, BlockData>()
  private val fluids = linkedMapOf<Block, Material>()

  fun forget(blocks: List<Block>) {
    blocks.forEach {
      eggs.remove(it)
      fluids.remove(it)
    }
  }

  fun freezeFluidAfterPlacement(block: Block, fluid: Material) {
    val schedule = fluids.isEmpty()
    fluids[block] = fluid
    // 設置後にfluid tick消すスケジュール
    if (schedule) plugin.server.scheduler.runTaskLater(plugin, Runnable { flush() }, 1L)
  }

  fun freeze(blocks: List<Block>) {
    val schedule = eggs.isEmpty()
    for (block in blocks) {
      if (block.type != Material.SNIFFER_EGG && block.type != Material.CREAKING_HEART) continue
      stop(block)
      if (block.type == Material.SNIFFER_EGG) eggs[block] = block.blockData.clone()
    }
    // 通常はBlockPlaceEventの後にonPlaceが孵化（block tick）を予約する。
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
    val placedFluids = fluids.toMap()
    fluids.clear()
    for ((block, fluid) in placedFluids) {
      if (!block.world.isChunkLoaded(block.x shr 4, block.z shr 4)) continue
      if (
          fluid == Material.LAVA && block.type == Material.LAVA ||
              fluid == Material.WATER && block.type != Material.LAVA && containsFluid(block)
      )
          stop(block)
    }
  }

  companion object {
    private fun containsFluid(block: Block) =
        block.type == Material.WATER ||
            block.type == Material.LAVA ||
            block.type == Material.BUBBLE_COLUMN ||
            (block.blockData as? Waterlogged)?.isWaterlogged == true
  }
}
