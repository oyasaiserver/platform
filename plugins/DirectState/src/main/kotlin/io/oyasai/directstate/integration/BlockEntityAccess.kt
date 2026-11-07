package io.oyasai.directstate.integration

import net.minecraft.core.BlockPos
import net.minecraft.world.item.BlockItem
import net.minecraft.world.level.levelgen.structure.BoundingBox
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.TileState
import org.bukkit.block.data.BlockData
import org.bukkit.craftbukkit.CraftWorld
import org.bukkit.craftbukkit.block.data.CraftBlockData
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.craftbukkit.inventory.CraftItemStack
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin

/** ブロック本体を描画するBlockEntityを切り替える。 */
internal object BlockEntityAccess {
  private data class Pending(val data: BlockData, val present: Boolean)

  private val pending = linkedMapOf<Block, Pending>()

  /** 配置アイテムの保存データとコンポーネントを、バニラと同じ権限確認で引き継ぐ。 */
  fun applyItem(player: Player, block: Block, item: ItemStack) {
    if (!item.hasItemMeta() || block.state !is TileState) return
    val level = (block.world as CraftWorld).handle
    val position = BlockPos(block.x, block.y, block.z)
    val stack = CraftItemStack.asNMSCopy(item)
    BlockItem.updateCustomBlockEntityTag(level, (player as CraftPlayer).handle, position, stack)
    val entity =
        level.getBlockEntity(position)
            ?: error("Placed block entity is missing at ${block.location}")
    entity.applyComponentsFromItemStack(stack)
    entity.setChanged()
  }

  fun hasBody(block: Block): Boolean {
    pending[block]
        ?.takeIf { it.data.asString == block.blockData.asString }
        ?.let {
          return it.present
        }
    return block.chunk.getTileEntities(false).any {
      it.x == block.x && it.y == block.y && it.z == block.z
    }
  }

  fun setBody(block: Block, data: BlockData, present: Boolean) {
    writeBody(block, data, present)
    val plugin = JavaPlugin.getProvidingPlugin(BlockEntityAccess::class.java)
    if (!plugin.isEnabled) {
      pending.remove(block)
      block.world.refreshChunk(block.x shr 4, block.z shr 4)
      return
    }
    val schedule = pending.isEmpty()
    pending[block] = Pending(data.clone(), present)
    // 後続の（どのプラグインかは不明）イベントリスナーや差分送信が本体を再生成することがあるっぽい。次tickに確定することで逃がす
    if (schedule) plugin.server.scheduler.runTaskLater(plugin, Runnable { flush() }, 1L)
  }

  fun flush() {
    val changes = pending.toMap()
    pending.clear()
    val chunks = linkedSetOf<org.bukkit.Chunk>()
    for ((block, change) in changes) {
      if (
          !block.world.isChunkLoaded(block.x shr 4, block.z shr 4) ||
              block.blockData.asString != change.data.asString
      )
          continue
      writeBody(block, change.data, change.present)
      chunks += block.chunk
    }
    // 同じチャンクの変更をすべて確定してから再送
    chunks.forEach { it.world.refreshChunk(it.x, it.z) }
  }

  /** この座標に予約されたブロックtick（特有の定期実行処理とか）を、実行待ち分も含めて除去する。 */
  fun clearScheduledTicks(block: Block) {
    val level = (block.world as CraftWorld).handle
    level.blockTicks.clearArea(BoundingBox(BlockPos(block.x, block.y, block.z)))
  }

  private fun writeBody(block: Block, data: BlockData, present: Boolean) {
    val level = (block.world as CraftWorld).handle
    val chunk = level.getChunk(block.x shr 4, block.z shr 4)
    val position = BlockPos(block.x, block.y, block.z)
    // BukkitのsetBlockData/physics=falseでは本体が再生成されてしまう。
    // FAWEはチャンクを書き換えて、完成したチャンクを送るっぽい。
    chunk.setBlockState(position, (data as CraftBlockData).state, 0)
    if (present) {
      level.getBlockEntity(position)
    } else {
      chunk.removeBlockEntity(position)
      if (block.type == Material.CREAKING_HEART) {
        clearScheduledTicks(block)
      }
    }
    chunk.markUnsaved()
  }
}
