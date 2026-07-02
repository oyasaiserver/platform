package com.gakubuchilocker.listeners

import com.gakubuchilocker.GakubuchiLockerPlugin
import org.bukkit.entity.GlowItemFrame
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.hanging.HangingBreakByEntityEvent
import org.bukkit.event.hanging.HangingBreakEvent
import org.bukkit.event.hanging.HangingPlaceEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerQuitEvent

class FrameEventListener(private val plugin: GakubuchiLockerPlugin) : Listener {

    // =====================================================
    // 額縁設置時: 自動ロック
    // =====================================================
    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onHangingPlace(event: HangingPlaceEvent) {
        val frame = event.entity as? ItemFrame ?: return
        val player = event.player ?: return

        plugin.db.lockFrame(frame, player.uniqueId)
        player.sendMessage("§a[Gakubuchi] §f額縁を自動でロックしました。")
    }

    // =====================================================
    // 左クリック: ロック / アンロック操作 & ロック済み保護
    // =====================================================
    @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = false)
    fun onEntityDamage(event: EntityDamageByEntityEvent) {
        val frame = event.entity as? ItemFrame ?: return
        val player = event.damager as? Player ?: return

        val mode = plugin.pendingMode[player.uniqueId]

        when (mode) {
            GakubuchiLockerPlugin.PendingMode.LOCK -> {
                event.isCancelled = true

                if (plugin.db.isLocked(frame.uniqueId)) {
                    player.sendMessage("§c[Gakubuchi] §fこの額縁はすでにロックされています。")
                    return
                }

                plugin.db.lockFrame(frame, player.uniqueId)
                player.sendMessage("§a[Gakubuchi] §f額縁をロックしました！ §7(/gakubuchilock off で終了)")
            }

            GakubuchiLockerPlugin.PendingMode.UNLOCK -> {
                event.isCancelled = true

                if (!plugin.db.isLocked(frame.uniqueId)) {
                    player.sendMessage("§c[Gakubuchi] §fこの額縁はロックされていません。")
                    return
                }

                val owner = plugin.db.getOwner(frame.uniqueId)
                if (owner != player.uniqueId) {
                    player.sendMessage("§c[Gakubuchi] §fこの額縁は別のプレイヤーがロックしています。解除できません。")
                    return
                }

                plugin.db.unlockFrame(frame.uniqueId)
                player.sendMessage("§a[Gakubuchi] §f額縁のロックを解除しました！ §7(/gakubuchiunlock off で終了)")
            }

            null -> {
                // 通常時: ロック済みで、かつオーナー以外なら保護 (OP は例外)
                if (plugin.db.isLocked(frame.uniqueId) && plugin.db.getOwner(frame.uniqueId) != player.uniqueId && !player.isOp) {
                    event.isCancelled = true
                    player.sendMessage("§c[Gakubuchi] §fこの額縁はロックされており破壊できません。")
                }
            }
        }
    }

    // =====================================================
    // 右クリック: アイテムの出し入れ・回転防止
    // =====================================================
    @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
    fun onPlayerInteractEntity(event: PlayerInteractEntityEvent) {
        val frame = event.rightClicked as? ItemFrame ?: return

        if (plugin.db.isLocked(frame.uniqueId) && plugin.db.getOwner(frame.uniqueId) != event.player.uniqueId) {
            event.isCancelled = true
            event.player.sendMessage("§c[Gakubuchi] §fこの額縁はロックされています。")
        }
    }

    // Paper では PlayerInteractAtEntityEvent も発火するため両方キャンセル
    @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
    fun onPlayerInteractAtEntity(event: PlayerInteractAtEntityEvent) {
        val frame = event.rightClicked as? ItemFrame ?: return

        if (plugin.db.isLocked(frame.uniqueId) && plugin.db.getOwner(frame.uniqueId) != event.player.uniqueId) {
            event.isCancelled = true
        }
    }

    // =====================================================
    // プレイヤーによる破壊 (HangingBreakByEntity)
    // =====================================================
    @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
    fun onHangingBreakByEntity(event: HangingBreakByEntityEvent) {
        val frame = event.entity as? ItemFrame ?: return
        if (!plugin.db.isLocked(frame.uniqueId)) return

        val remover = event.remover
        if (remover is Player && (plugin.db.getOwner(frame.uniqueId) == remover.uniqueId || remover.isOp)) {
            // オーナー本人、または OP が破壊 → DBからロック情報を削除して通過
            plugin.db.unlockFrame(frame.uniqueId)
            return
        }

        event.isCancelled = true
        if (remover is Player) {
            remover.sendMessage("§c[Gakubuchi] §fこの額縁はロックされており破壊できません。")
        }
    }

    // =====================================================
    // 爆発・ピストン等による破壊を防止 (HangingBreakEvent)
    // =====================================================
    @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
    fun onHangingBreak(event: HangingBreakEvent) {
        // HangingBreakByEntityEvent は HangingBreakEvent のサブクラスなので
        // 上のハンドラと重複しないよう ByEntity は除外
        if (event is HangingBreakByEntityEvent) return

        val frame = event.entity as? ItemFrame ?: return

        if (plugin.db.isLocked(frame.uniqueId)) {
            event.isCancelled = true
        }
    }

    // =====================================================
    // プレイヤーがログアウトしたらモードをリセット
    // =====================================================
    @EventHandler
    fun onPlayerQuit(event: PlayerQuitEvent) {
        plugin.pendingMode.remove(event.player.uniqueId)
    }
}
