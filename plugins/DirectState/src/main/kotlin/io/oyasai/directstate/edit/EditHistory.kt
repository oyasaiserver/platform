package io.oyasai.directstate.edit

import io.oyasai.directstate.edit.hand.HangingEditor
import io.oyasai.directstate.update.UpdateMode
import java.util.UUID
import org.bukkit.Location
import org.bukkit.Server
import org.bukkit.block.BlockState
import org.bukkit.block.data.BlockData
import org.bukkit.entity.Cushion
import org.bukkit.entity.Entity
import org.bukkit.entity.Player

/** DSが変更する状態を保存する。 */
internal data class BlockSnapshot(
    val world: UUID,
    val x: Int,
    val y: Int,
    val z: Int,
    val data: BlockData,
    val body: Boolean?,
    val updates: UpdateMode.EditState,
    val tile: BlockState? = null,
    val itemHolder: Boolean = false,
)

internal class EditHistory(
    private val server: Server,
    private val restoreBlocks: (Player, List<BlockSnapshot>) -> Boolean,
    private val canEditEntity: (Player, Location) -> Boolean = { _, _ -> true },
    private val restoreBlocksWithExpected:
        ((Player, List<BlockSnapshot>, List<BlockSnapshot>) -> Boolean)? =
        null,
) {
  private sealed interface Change {
    data class Blocks(val before: List<BlockSnapshot>, val after: List<BlockSnapshot>) : Change

    data class Hanging(
        val entity: UUID,
        val position: Position,
        val before: HangingEditor.State,
        val after: HangingEditor.State,
    ) : Change

    data class CushionMove(val entity: UUID, val before: Position, val after: Position) : Change
  }

  private data class Position(
      val world: UUID,
      val x: Double,
      val y: Double,
      val z: Double,
      val yaw: Float,
      val pitch: Float,
  ) {
    constructor(
        location: Location
    ) : this(location.world!!.uid, location.x, location.y, location.z, location.yaw, location.pitch)

    fun location(server: Server): Location? =
        server.getWorld(world)?.let { Location(it, x, y, z, yaw, pitch) }
  }

  private class History(var name: String) {
    val entries = mutableListOf<Change>()
    var cursor = 0
  }

  data class Result(val applied: Int, val skipped: Int)

  private val histories = mutableMapOf<UUID, History>()

  fun findPlayer(name: String): UUID? =
      server.getPlayerExact(name)?.uniqueId
          ?: histories.entries.firstOrNull { it.value.name.equals(name, true) }?.key

  fun playerNames(): List<String> = histories.values.map { it.name }

  fun recordBlocks(player: Player, before: List<BlockSnapshot>, after: List<BlockSnapshot>) {
    record(player, Change.Blocks(before, after))
  }

  fun recordCushion(player: Player, cushion: Cushion, before: Location) {
    val after = cushion.location
    if (before != after)
        record(player, Change.CushionMove(cushion.uniqueId, Position(before), Position(after)))
  }

  fun recordHanging(player: Player, entity: Entity, before: HangingEditor.State) {
    val after = HangingEditor.snapshot(entity) ?: return
    if (before != after)
        record(player, Change.Hanging(entity.uniqueId, Position(entity.location), before, after))
  }

  private fun record(player: Player, change: Change) {
    val history = histories.getOrPut(player.uniqueId) { History(player.name) }
    history.name = player.name
    history.entries.subList(history.cursor, history.entries.size).clear()
    history.entries += change
    if (history.entries.size > 100) history.entries.removeAt(0)
    history.cursor = history.entries.size
  }

  /** WEと同じく履歴位置を前後させ、毎回保存済みのbefore/afterを再生する。 */
  fun replay(player: Player, owner: UUID, count: Int, redo: Boolean): Result {
    require(count > 0)
    val history = histories[owner] ?: return Result(0, 0)
    var applied = 0
    var skipped = 0
    repeat(count) {
      val index = if (redo) history.cursor else history.cursor - 1
      val change = history.entries.getOrNull(index) ?: return Result(applied, skipped)
      if (restore(player, change, redo)) applied++ else skipped++
      history.cursor += if (redo) 1 else -1
    }
    return Result(applied, skipped)
  }

  private fun isSpawnProtected(player: Player, location: Location): Boolean {
    val world = location.world ?: return false
    if (player.isOp || server.operators.isEmpty() || world != server.worlds.firstOrNull()) {
      return false
    }
    val spawn = world.spawnLocation ?: return false
    val radius = server.spawnRadius
    return radius > 0 &&
        kotlin.math.max(
            kotlin.math.abs(location.blockX - spawn.blockX),
            kotlin.math.abs(location.blockZ - spawn.blockZ),
        ) <= radius
  }

  private fun canModifyAt(player: Player, location: Location): Boolean =
      !isSpawnProtected(player, location) && canEditEntity(player, location)

  private fun restore(player: Player, change: Change, redo: Boolean): Boolean =
      when (change) {
        is Change.Blocks -> {
          val expected = if (redo) change.before else change.after
          val states = if (redo) change.after else change.before
          if (restoreBlocksWithExpected != null) {
            restoreBlocksWithExpected(player, states, expected)
          } else {
            restoreBlocks(player, states)
          }
        }
        is Change.Hanging -> {
          val posLoc = change.position.location(server) ?: return false
          if (!canModifyAt(player, posLoc)) return false
          posLoc.world!!.getChunkAt(posLoc.blockX shr 4, posLoc.blockZ shr 4)
          val entity = server.getEntity(change.entity)
          entity != null &&
              entity.isValid &&
              canModifyAt(player, entity.location) &&
              HangingEditor.restore(entity, if (redo) change.after else change.before)
        }
        is Change.CushionMove -> {
          val beforeLoc = change.before.location(server) ?: return false
          val afterLoc = change.after.location(server) ?: return false
          if (!canModifyAt(player, beforeLoc) || !canModifyAt(player, afterLoc)) return false
          // 読込範囲外にあるクッションも、記録したチャンクを読み込んで探す。
          for (loc in listOf(beforeLoc, afterLoc)) {
            loc.world!!.getChunkAt(loc.blockX shr 4, loc.blockZ shr 4)
          }
          val cushion = server.getEntity(change.entity) as? Cushion
          val destination = if (redo) afterLoc else beforeLoc
          cushion != null &&
              cushion.isValid &&
              canModifyAt(player, cushion.location) &&
              cushion.teleport(destination)
        }
      }
}
