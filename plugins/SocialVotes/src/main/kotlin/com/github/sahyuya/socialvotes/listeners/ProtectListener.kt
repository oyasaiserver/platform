package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.SocialVotes
import kotlin.math.abs
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.Sign
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.type.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockBurnEvent
import org.bukkit.event.block.BlockExplodeEvent
import org.bukkit.event.block.BlockFadeEvent
import org.bukkit.event.block.BlockPistonExtendEvent
import org.bukkit.event.block.BlockPistonRetractEvent
import org.bukkit.event.block.LeavesDecayEvent
import org.bukkit.event.entity.EntityChangeBlockEvent
import org.bukkit.event.entity.EntityExplodeEvent

class ProtectListener : Listener {

  @EventHandler(ignoreCancelled = true)
  fun onBlockBreak(e: BlockBreakEvent) {
    if (isProtectedBlock(e.block)) {
      e.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onBlockBurn(e: BlockBurnEvent) {
    if (isProtectedBlock(e.block)) {
      e.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onLeavesDecay(e: LeavesDecayEvent) {
    if (isProtectedBlock(e.block)) {
      e.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onBlockFade(e: BlockFadeEvent) {
    if (isProtectedBlock(e.block)) {
      e.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onEntityChangeBlock(e: EntityChangeBlockEvent) {
    if (isProtectedBlock(e.block)) {
      e.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onEntityExplode(e: EntityExplodeEvent) {
    e.blockList().removeIf { isProtectedBlock(it) }
  }

  @EventHandler(ignoreCancelled = true)
  fun onBlockExplode(e: BlockExplodeEvent) {
    e.blockList().removeIf { isProtectedBlock(it) }
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonExtend(e: BlockPistonExtendEvent) {
    if (e.blocks.any { isProtectedBlock(it) || isProtectedBlock(it.getRelative(e.direction)) }) {
      e.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonRetract(e: BlockPistonRetractEvent) {
    if (e.blocks.any { isProtectedBlock(it) || isProtectedBlock(it.getRelative(e.direction)) }) {
      e.isCancelled = true
    }
  }

  private fun isProtectedBlock(block: Block): Boolean {
    val dm = SocialVotes.dataManager

    // =========================
    // ① 看板自体の破壊防止
    // =========================
    val state = block.state
    if (state is Sign) {
      if (dm.getSignAt(block.location) != null) {
        return true
      }
      val signId = dm.readSignIdFromBlock(state)
      if (signId != null && dm.signById.containsKey(signId)) {
        return true
      }
    }

    // =========================
    // ② 依存ブロック破壊防止（未ロードチャンクの同期ロードを防ぐため座標距離を先に比較）
    // =========================
    val worldName = block.world.name
    val bx = block.x
    val by = block.y
    val bz = block.z

    for (sv in dm.signById.values) {
      if (sv.world != worldName) continue
      if (sv.x == bx && sv.y == by && sv.z == bz) return true

      // 看板と隣接（マンハッタン距離1）していないブロックは支持ブロックになり得ない
      if (abs(sv.x - bx) + abs(sv.y - by) + abs(sv.z - bz) != 1) continue

      val signBlock = block.world.getBlockAt(sv.x, sv.y, sv.z)
      val data = signBlock.blockData

      if (isAttachedBlock(signBlock, data, block)) {
        return true
      }
    }
    return false
  }

  /** 看板の依存ブロックかどうかを判定 */
  private fun isAttachedBlock(
      signBlock: Block,
      data: BlockData,
      target: Block,
  ): Boolean {
    return when (data) {
      // 床置き看板
      is org.bukkit.block.data.type.Sign ->
          signBlock.getRelative(0, -1, 0).location == target.location

      // 壁看板
      is WallSign -> signBlock.getRelative(data.facing.oppositeFace).location == target.location

      // 吊り看板（天井）
      is HangingSign -> signBlock.getRelative(0, 1, 0).location == target.location

      // 壁吊り看板（横方向の支持ブロック）
      is WallHangingSign -> {
        val sideFaces =
            when (data.facing) {
              BlockFace.NORTH,
              BlockFace.SOUTH -> listOf(BlockFace.EAST, BlockFace.WEST)
              BlockFace.EAST,
              BlockFace.WEST -> listOf(BlockFace.NORTH, BlockFace.SOUTH)
              else -> listOf(BlockFace.NORTH, BlockFace.SOUTH, BlockFace.EAST, BlockFace.WEST)
            }
        sideFaces.any { face -> signBlock.getRelative(face).location == target.location }
      }

      else -> false
    }
  }
}
