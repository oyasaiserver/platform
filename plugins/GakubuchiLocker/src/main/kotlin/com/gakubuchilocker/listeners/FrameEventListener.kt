package com.gakubuchilocker.listeners

import com.gakubuchilocker.GakubuchiLockerPlugin
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntitySpawnEvent
import org.bukkit.event.hanging.HangingBreakByEntityEvent
import org.bukkit.event.hanging.HangingBreakEvent
import org.bukkit.event.hanging.HangingPlaceEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.persistence.PersistentDataType

class FrameEventListener(
    private val plugin: GakubuchiLockerPlugin,
) : Listener {
  private fun checkAndLockFromPdc(frame: ItemFrame) {
    if (frame.isDead) return
    if (plugin.db.isLocked(frame.uniqueId)) return
    val pdc = frame.persistentDataContainer
    val ownerUuidStr = pdc.get(plugin.ownerKey, PersistentDataType.STRING) ?: return
    val ownerUuid = runCatching { UUID.fromString(ownerUuidStr) }.getOrNull() ?: return
    plugin.db.lockFrame(frame, ownerUuid)
  }

  // =====================================================
  // EntitySpawnEvent: FAWE/WE等でスポーンした額縁のPDCからロック情報を同期
  // =====================================================
  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onEntitySpawn(event: EntitySpawnEvent) {
    if (event.entity.isDead) return
    val frame = event.entity as? ItemFrame ?: return
    if (frame.isDead) return

    checkAndLockFromPdc(frame)

    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable { checkAndLockFromPdc(frame) },
            1L,
        )
  }

  // =====================================================
  // 額縁設置時: 自動ロック & 自動透明化
  // =====================================================
  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onHangingPlace(event: HangingPlaceEvent) {
    val frame = event.entity as? ItemFrame ?: return
    val player = event.player ?: return

    plugin.db.lockFrame(frame, player.uniqueId)
    player.sendMessage("§a[Gakubuchi] §f額縁を自動でロックしました。")

    if (plugin.toumeiPlayers.contains(player.uniqueId)) {
      frame.isVisible = false
      player.sendMessage("§a[Gakubuchi] §f額縁を透明化しました。")
    }
  }

  // =====================================================
  // 左クリック: ロック済み保護
  // =====================================================
  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = false)
  fun onEntityDamage(event: EntityDamageByEntityEvent) {
    val frame = event.entity as? ItemFrame ?: return
    checkAndLockFromPdc(frame)

    // 雪玉・矢などの投擲物によるダメージは、撃った相手がオーナーやOPであっても
    // ロック済み額縁を破壊・中身排出させないよう常にキャンセルする
    val player = event.damager as? Player
    if (player == null) {
      if (plugin.db.isLocked(frame.uniqueId)) {
        event.isCancelled = true
      }
      return
    }

    // 通常時: ロック済みで、かつオーナー以外なら保護 (OP は例外)
    if (
        plugin.db.isLocked(frame.uniqueId) &&
            plugin.db.getOwner(frame.uniqueId) != player.uniqueId &&
            !player.isOp
    ) {
      event.isCancelled = true
      player.sendMessage("§c[Gakubuchi] §fこの額縁はロックされており破壊できません。")
    }
  }

  // =====================================================
  // 右クリック: ロック / アンロック操作 & アイテム出し入れ・回転防止
  // =====================================================
  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = false)
  fun onPlayerInteractEntity(event: PlayerInteractEntityEvent) {
    val frame = event.rightClicked as? ItemFrame ?: return
    checkAndLockFromPdc(frame)
    val player = event.player
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

        plugin.db.unlockFrame(frame)
        player.sendMessage("§a[Gakubuchi] §f額縁のロックを解除しました！ §7(/gakubuchiunlock off で終了)")
      }

      null -> {
        if (
            plugin.db.isLocked(frame.uniqueId) &&
                plugin.db.getOwner(frame.uniqueId) != player.uniqueId
        ) {
          event.isCancelled = true
          player.sendMessage("§c[Gakubuchi] §fこの額縁はロックされています。")
        }
      }
    }
  }

  // Paper では PlayerInteractAtEntityEvent も発火するため両方キャンセル
  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = false)
  fun onPlayerInteractAtEntity(event: PlayerInteractAtEntityEvent) {
    val frame = event.rightClicked as? ItemFrame ?: return
    checkAndLockFromPdc(frame)
    val player = event.player
    val mode = plugin.pendingMode[player.uniqueId]

    if (mode != null) {
      event.isCancelled = true
      return
    }

    if (
        plugin.db.isLocked(frame.uniqueId) && plugin.db.getOwner(frame.uniqueId) != player.uniqueId
    ) {
      event.isCancelled = true
    }
  }

  // =====================================================
  // プレイヤーによる破壊 (HangingBreakByEntity)
  // =====================================================
  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun onHangingBreakByEntity(event: HangingBreakByEntityEvent) {
    val frame = event.entity as? ItemFrame ?: return
    checkAndLockFromPdc(frame)
    if (!plugin.db.isLocked(frame.uniqueId)) return

    val remover = event.remover
    if (
        remover is Player &&
            (plugin.db.getOwner(frame.uniqueId) == remover.uniqueId || remover.isOp)
    ) {
      // オーナー本人、または OP が破壊 → DBからロック情報を削除して通過
      plugin.db.unlockFrame(frame)
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
    checkAndLockFromPdc(frame)

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
    plugin.toumeiPlayers.remove(event.player.uniqueId)
  }
}
