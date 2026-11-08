package io.oyasai.directstate.edit

import io.oyasai.directstate.integration.BlockEntityAccess
import io.oyasai.directstate.update.UpdateMode
import java.util.UUID
import net.kyori.adventure.text.Component
import org.bukkit.*
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.BlockState
import org.bukkit.block.Container
import org.bukkit.block.TileState
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.type.Fence
import org.bukkit.block.data.type.GlassPane
import org.bukkit.block.data.type.Slab
import org.bukkit.block.data.type.Stairs
import org.bukkit.block.data.type.Wall
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

/** どのブロックを、どの状態へ変更するかを表す一件の編集要求。 */
internal data class BlockEdit(
    val block: Block,
    val data: BlockData,
    val blockEntityPresent: Boolean? = null,
)

/** 編集の適用、更新抑制との連携、連続操作ログの集約。 */
internal class BlockEditService(
    private val plugin: JavaPlugin,
    private val updateMode: UpdateMode,
    private val blockChangeLog: BlockChangeLog?,
    private val history: EditHistory? = null,
    private val editSound: (Player) -> Boolean = { true },
) {
  private var tickCount = 0L
  // 同じプレイヤーが同じ座標へ続けて行った変更を、一件のログにまとめるための保留表。
  private val pendingEdits = mutableMapOf<EditKey, PendingEdit>()
  private val pendingCandles = mutableMapOf<Block, BlockData>()
  private val faces = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)

  /** プレイヤーとワールド座標を合わせた、保留ログの重複しないキー。 */
  private data class EditKey(val player: UUID, val world: UUID, val x: Int, val y: Int, val z: Int)

  /** 連続編集の最初の状態、最後の状態、最終変更tickを保持する。 */
  private data class PendingEdit(
      val user: String,
      val block: Block,
      // beforeは連続操作の最初、afterは最後の状態を持つ。
      val before: BlockState,
      var after: BlockData,
      var lastChangedTick: Long,
  )

  private companion object {
    const val HAND_LOG_IDLE_TICKS = 40L
  }

  /** サーバーtickを進め、一定時間止まった連続編集ログを確定する。 */
  fun tick() {
    tickCount++
    flushExpiredEdits()
  }

  /** 要求された変更から重複と無変更を除き、更新抑制・ワールド反映・ログ記録を同じ順で行う。 すべての編集がこの関数を通ることで、機能ごとの適用漏れを防ぐ。 */
  fun apply(player: Player, requested: List<BlockEdit>, remember: Boolean = false) {
    val edits =
        requested
            .distinctBy { edit -> edit.block.location }
            .filter { edit ->
              edit.block.blockData.asString != edit.data.asString ||
                  edit.blockEntityPresent?.let { it != BlockEntityAccess.hasBody(edit.block) } ==
                      true
            }
    if (edits.isEmpty()) return
    val snapshots = if (remember && history != null) edits.map { snapshot(it.block) } else null
    updateMode.beforeEdit(player, edits.map { edit -> edit.block })
    val before = edits.associate { edit -> edit.block to edit.block.state }
    edits.forEach { edit ->
      pendingCandles.remove(edit.block)
      if (edit.blockEntityPresent == null) edit.block.setBlockData(edit.data, false)
      else BlockEntityAccess.setBody(edit.block, edit.data, edit.blockEntityPresent)
    }
    updateMode.afterEdit(player, edits.map { it.block })
    edits.forEach { edit ->
      queueEdit(player, before.getValue(edit.block), edit.block, edit.block.blockData.clone())
    }
    if (snapshots != null)
        history?.recordBlocks(player, snapshots, edits.map { snapshot(it.block) })
    // Paperが直後に上書きするため、ロウソクの状態だけ1tick後にもう一度反映する。
    val candleStates =
        edits
            .filter { edit -> edit.data is org.bukkit.block.data.type.Candle }
            .map { edit -> BlockEdit(edit.block, edit.data.clone()) }
    if (candleStates.isNotEmpty()) {
      candleStates.forEach { pendingCandles[it.block] = it.data }
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            candleStates.forEach { edit ->
              if (pendingCandles[edit.block] !== edit.data) return@forEach
              pendingCandles.remove(edit.block)
              if (
                  edit.block.type == edit.data.material &&
                      edit.block.blockData.asString != edit.data.asString
              ) {
                edit.block.setBlockData(edit.data.clone(), false)
              }
            }
          },
      )
    }
    if (editSound(player))
        player.playSound(
            edits.first().block.location,
            Sound.BLOCK_WOODEN_BUTTON_CLICK_ON,
            0.3f,
            1.5f,
        )
    player.sendActionBar(Component.text(describe(edits.first().data)))
  }

  private fun snapshot(block: Block): BlockSnapshot {
    val body =
        if (block.type in setOf(Material.BELL, Material.ENCHANTING_TABLE, Material.CREAKING_HEART))
            BlockEntityAccess.hasBody(block)
        else null
    val tile = if (body == false) null else (block.state as? TileState)?.copy()
    return BlockSnapshot(
        block.world.uid,
        block.x,
        block.y,
        block.z,
        block.blockData.clone(),
        body,
        updateMode.captureState(block),
        tile,
    )
  }

  /** 同じ編集経路で更新抑制・ログを扱い、復元自体を新しい履歴にはしない。 */
  fun restore(player: Player, snapshots: List<BlockSnapshot>): Boolean {
    val available =
        snapshots.mapNotNull { state ->
          val world = plugin.server.getWorld(state.world) ?: return@mapNotNull null
          if (state.y !in world.minHeight until world.maxHeight) return@mapNotNull null
          world.getChunkAt(state.x shr 4, state.z shr 4)
          world.getBlockAt(state.x, state.y, state.z) to state
        }
    if (available.isEmpty()) return false
    val blocks = available.map { it.first }
    flush()
    updateMode.beforeEdit(player, blocks)
    val before = blocks.map { it.state }
    available.forEach { (block, state) ->
      pendingCandles.remove(block)
      // アイテム入れるために空にしとく
      (block.state as? Container)?.let { container ->
        container.snapshotInventory.clear()
        check(container.update(false, false)) { "Could not clear container at ${block.location}" }
      }
      if (state.body == null) block.setBlockData(state.data.clone(), false)
      else BlockEntityAccess.setBody(block, state.data.clone(), state.body)
      if (state.tile != null)
          check(state.tile.copy(block.location).update(true, false)) {
            "Could not restore block entity at ${block.location}"
          }
      updateMode.restoreState(block, state.updates)
    }
    blocks.forEachIndexed { index, block ->
      blockChangeLog?.record(player.name, before[index], block.location, block.blockData.clone())
    }
    return true
  }

  /** CoreProtect有効時だけ、同じ座標の連続変更を既存の保留ログへまとめる。 */
  private fun queueEdit(player: Player, before: BlockState, block: Block, after: BlockData) {
    if (blockChangeLog == null) return
    val key = EditKey(player.uniqueId, block.world.uid, block.x, block.y, block.z)
    val pending = pendingEdits[key]
    if (pending == null) {
      pendingEdits[key] = PendingEdit(player.name, block, before, after, tickCount)
    } else {
      pending.after = after
      pending.lastChangedTick = tickCount
    }
  }

  /** 最終変更から40tick経ったログを記録し、保留表から取り除く。 */
  private fun flushExpiredEdits() {
    val iterator = pendingEdits.iterator()
    while (iterator.hasNext()) {
      val (_, pending) = iterator.next()
      if (tickCount - pending.lastChangedTick < HAND_LOG_IDLE_TICKS) continue
      iterator.remove()
      blockChangeLog?.record(pending.user, pending.before, pending.block.location, pending.after)
    }
  }

  /** player指定時はその人だけ、nullなら全員の保留ログを直ちに記録する。 */
  fun flush(player: UUID? = null) {
    val iterator = pendingEdits.iterator()
    while (iterator.hasNext()) {
      val (key, pending) = iterator.next()
      if (player != null && key.player != player) continue
      iterator.remove()
      blockChangeLog?.record(pending.user, pending.before, pending.block.location, pending.after)
    }
  }

  /** 操作後に表示する短い状態説明を、主な形状ごとに作る。 */
  private fun describe(data: BlockData) =
      when (data) {
        is Stairs -> "階段: ${data.shape.name.lowercase()} / ${data.half.name.lowercase()}"
        is Wall ->
            "壁: ${data.isUp} " +
                faces.joinToString(" ") {
                  "${it.name.lowercase()}=${data.getHeight(it).name.lowercase()}"
                }
        is Fence -> "フェンス: " + data.faces.joinToString { it.name.lowercase() }
        is GlassPane -> "ガラス板: " + data.faces.joinToString { it.name.lowercase() }
        is Slab -> "ハーフブロック: ${data.type.name.lowercase()}"
        else -> "ブロック: ${data.material.key.key}"
      }
}
