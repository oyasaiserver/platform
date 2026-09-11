package io.oyasai.directstate.integration

import org.bukkit.block.Block
import org.bukkit.block.data.BlockData

/** ブロック本体を描画するBlockEntityを切り替える。 */
internal object BlockEntityAccess {
  fun hasBody(block: Block): Boolean = block.chunk.getTileEntities(false).any {
    it.x == block.x && it.y == block.y && it.z == block.z
  }

  fun setBody(block: Block, data: BlockData, present: Boolean) {
    val level = block.world.javaClass.getMethod("getHandle").invoke(block.world)
    val chunk =
        level.javaClass.getMethod("getChunk", Int::class.java, Int::class.java)
            .invoke(level, block.x shr 4, block.z shr 4)
    val positionType = Class.forName("net.minecraft.core.BlockPos")
    val position =
        positionType.getConstructor(Int::class.java, Int::class.java, Int::class.java)
            .newInstance(block.x, block.y, block.z)
    // BukkitのsetBlockData/physics=falseでは本体が再生成されてしまう。
    // FAWEはチャンクを書き換えて、完成したチャンクを送るっぽい。
    val state = data.javaClass.getMethod("getState").invoke(data)
    val stateType = Class.forName("net.minecraft.world.level.block.state.BlockState")
    chunk.javaClass.getMethod("setBlockState", positionType, stateType, Int::class.java)
        .invoke(chunk, position, state, 0)
    if (present) {
      level.javaClass.getMethod("getBlockEntity", positionType).invoke(level, position)
    } else {
      chunk.javaClass.getMethod("removeBlockEntity", positionType).invoke(chunk, position)
    }
    chunk.javaClass.getMethod("markUnsaved").invoke(chunk)
    block.world.refreshChunk(block.x shr 4, block.z shr 4)
  }
}
