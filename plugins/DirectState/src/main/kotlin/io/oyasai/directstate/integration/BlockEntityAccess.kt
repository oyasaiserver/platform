package io.oyasai.directstate.integration

import org.bukkit.block.Block
import org.bukkit.block.data.BlockData
import org.bukkit.plugin.java.JavaPlugin

/** ブロック本体を描画するBlockEntityを切り替える。 */
internal object BlockEntityAccess {
  private data class Pending(val data: BlockData, val present: Boolean)
  private val pending = linkedMapOf<Block, Pending>()

  fun hasBody(block: Block): Boolean {
    pending[block]?.takeIf { it.data.asString == block.blockData.asString }?.let { return it.present }
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
      if (!block.world.isChunkLoaded(block.x shr 4, block.z shr 4) || block.blockData.asString != change.data.asString) continue
      writeBody(block, change.data, change.present)
      chunks += block.chunk
    }
    // 同じチャンクの変更をすべて確定してから再送
    chunks.forEach { it.world.refreshChunk(it.x, it.z) }
  }

  private fun writeBody(block: Block, data: BlockData, present: Boolean) {
    val level = block.world.javaClass.getMethod("getHandle").invoke(block.world)
    val chunk =
        level.javaClass
            .getMethod("getChunk", Int::class.java, Int::class.java)
            .invoke(level, block.x shr 4, block.z shr 4)
    val positionType = Class.forName("net.minecraft.core.BlockPos")
    val position =
        positionType
            .getConstructor(Int::class.java, Int::class.java, Int::class.java)
            .newInstance(block.x, block.y, block.z)
    // BukkitのsetBlockData/physics=falseでは本体が再生成されてしまう。
    // FAWEはチャンクを書き換えて、完成したチャンクを送るっぽい。
    val state = data.javaClass.getMethod("getState").invoke(data)
    val stateType = Class.forName("net.minecraft.world.level.block.state.BlockState")
    chunk.javaClass
        .getMethod("setBlockState", positionType, stateType, Int::class.java)
        .invoke(chunk, position, state, 0)
    if (present) {
      level.javaClass.getMethod("getBlockEntity", positionType).invoke(level, position)
    } else {
      chunk.javaClass.getMethod("removeBlockEntity", positionType).invoke(chunk, position)
    }
    chunk.javaClass.getMethod("markUnsaved").invoke(chunk)
  }
}
