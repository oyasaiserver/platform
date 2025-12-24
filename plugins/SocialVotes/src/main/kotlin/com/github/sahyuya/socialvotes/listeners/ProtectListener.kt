package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.SocialVotes
import org.bukkit.block.Sign
import org.bukkit.block.data.type.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent

class ProtectListener : Listener {

    @EventHandler
    fun onBlockBreak(e: BlockBreakEvent) {
        val block = e.block
        val dm = SocialVotes.dataManager

        // =========================
        // ① 看板自体の破壊防止
        // =========================
        val state = block.state
        if (state is Sign) {
            if (dm.getSignAt(block.location) != null) {
                e.isCancelled = true
                return
            }
        }

        // =========================
        // ② 依存ブロック破壊防止
        // =========================
        for (sv in dm.signById.values) {
            if (sv.world != block.world.name) continue

            val signBlock = block.world.getBlockAt(sv.x, sv.y, sv.z)
            val data = signBlock.blockData

            val attached = getAttachedBlock(signBlock, data) ?: continue

            if (attached.location == block.location) {
                e.isCancelled = true
                return
            }
        }
    }

    /**
     * 看板の依存ブロックを正確に取得
     */
    private fun getAttachedBlock(
        signBlock: org.bukkit.block.Block,
        data: org.bukkit.block.data.BlockData
    ): org.bukkit.block.Block? {

        return when (data) {

            // ────────────────
            // 床置き看板
            // ────────────────
            is org.bukkit.block.data.type.Sign ->
                signBlock.getRelative(0, -1, 0)

            // ────────────────
            // 壁看板
            // ────────────────
            is WallSign ->
                signBlock.getRelative(data.facing.oppositeFace)

            // ────────────────
            // 吊り看板（天井）
            // ────────────────
            is HangingSign ->
                signBlock.getRelative(0, 1, 0)

            // ────────────────
            // 壁吊り看板
            // ────────────────
            is WallHangingSign ->
                null

            else -> null
        }
    }
}