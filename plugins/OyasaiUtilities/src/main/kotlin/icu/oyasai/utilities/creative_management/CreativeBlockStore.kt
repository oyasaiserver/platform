package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.OyasaiUtilities.plugin
import java.util.UUID
import org.bukkit.Chunk
import org.bukkit.NamespacedKey
import org.bukkit.block.Block
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.world.ChunkUnloadEvent
import org.bukkit.persistence.PersistentDataType

/**
 * クリエイティブ設置ブロックの印をチャンク PDC に保存する。
 *
 * Bukkit Metadata と異なり、チャンクのワールドデータと一緒に保存されるため、再起動や
 * チャンクのアンロード後も残る。チャンクごとに整数配列を一つだけ保存し、メモリ上では
 * Set に展開するので、個々のブロックを走査せずに判定できる。
 */
object CreativeBlockStore : Listener {
  private val markerKey = NamespacedKey(plugin, "creative-block-positions")
  private val cache = mutableMapOf<ChunkId, MutableSet<Int>>()

  fun isMarked(block: Block): Boolean = markers(block.chunk).contains(pack(block))

  fun mark(block: Block) {
    val chunk = block.chunk
    val markers = markers(chunk)
    if (markers.add(pack(block))) persist(chunk, markers)
  }

  fun remove(block: Block) {
    val chunk = block.chunk
    val markers = markers(chunk)
    if (markers.remove(pack(block))) persist(chunk, markers)
  }

  /** ピストン等による移動では、移動元を全て消してから移動先へ印を付ける。 */
  fun move(blocks: List<Block>, offsetX: Int, offsetY: Int, offsetZ: Int) {
    val markedBlocks = blocks.filter(::isMarked)
    markedBlocks.forEach(::remove)
    markedBlocks.forEach { mark(it.getRelative(offsetX, offsetY, offsetZ)) }
  }

  @EventHandler
  fun onChunkUnload(event: ChunkUnloadEvent) {
    cache.remove(ChunkId(event.chunk))
  }

  fun clearCache() {
    cache.clear()
  }

  private fun markers(chunk: Chunk): MutableSet<Int> {
    return cache.getOrPut(ChunkId(chunk)) {
      chunk.persistentDataContainer
        .get(markerKey, PersistentDataType.INTEGER_ARRAY)
        ?.toMutableSet()
        ?: mutableSetOf()
    }
  }

  private fun persist(chunk: Chunk, markers: Set<Int>) {
    if (markers.isEmpty()) {
      chunk.persistentDataContainer.remove(markerKey)
    } else {
      chunk.persistentDataContainer.set(
        markerKey,
        PersistentDataType.INTEGER_ARRAY,
        markers.sorted().toIntArray(),
      )
    }
  }

  private fun pack(block: Block): Int {
    val relativeY = block.y - block.world.minHeight
    return (relativeY shl 8) or ((block.z and 15) shl 4) or (block.x and 15)
  }

  private data class ChunkId(val worldId: UUID, val x: Int, val z: Int) {
    constructor(chunk: Chunk) : this(chunk.world.uid, chunk.x, chunk.z)
  }
}
