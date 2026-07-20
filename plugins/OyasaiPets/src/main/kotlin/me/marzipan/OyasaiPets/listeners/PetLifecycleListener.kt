@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.logging.Logger
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDeathEvent
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.entity.EntityMountEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

/**
 * ペットライフサイクル関連のイベントリスナー
 * - ペットの死亡
 * - プレイヤー切断時のペット位置記録
 * - ペット降車時の処理
 */
class PetLifecycleListener(
    private val plugin: JavaPlugin,
    private val logger: Logger,
    private val onPlayerQuitCallback: (Player) -> Unit,
) : Listener {

  private val activeFlyDescentTasks = ConcurrentHashMap<UUID, BukkitTask>()

  /** ペット死亡時の処理 */
  @EventHandler
  fun onPetDeath(event: EntityDeathEvent) {
    val entity = event.entity
    val petId = entity.petId ?: return
    val ownerId = entity.ownerId ?: return

    val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: return

    // レジストリから登録解除
    ActivePetRegistry.unregister(entity.uniqueId)

    // 死亡データを記録
    PetDataManager.recordDeath(ownerUuid, entity)

    // オーナーにメッセージを送信
    val owner = Bukkit.getPlayer(ownerUuid)
    if (owner != null) {
      val petName = entity.customName()?.let { PLAIN_TEXT.serialize(it) } ?: entity.type.name
      owner.sendMessage(Component.text("あなたのペット「$petName」が死亡しました...", RED))
      owner.sendMessage(Component.text("/bigwolf dead で死亡したペットを確認できます。", GRAY))
      owner.sendMessage(
          Component.text("/bigwolf revive <番号> で ${BigWolfConfig.reviveCost}pt で復活できます。", GRAY)
      )
    }

    logger.info("Pet died: Owner=$ownerId, PetId=$petId")
  }

  /** プレイヤー切断時の処理 */
  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val player = event.player

    // 位置更新を先に行う（storeAllPetsがunregisterするため、順序が重要）
    val vehicle = player.vehicle as? LivingEntity
    val vehiclePetId = vehicle?.petId
    val vehicleOwnerId = vehicle?.ownerId
    if (vehicle != null && vehiclePetId != null && vehicleOwnerId != null) {
      runCatching { UUID.fromString(vehicleOwnerId) }
          .getOrNull()
          ?.let { PetDataManager.updateLastLocation(it, vehiclePetId, vehicle.location) }
    }

    // 所有する全ペットの位置も更新
    val playerUuidStr = player.uniqueId.toString()
    for (entity in ActivePetRegistry.getByOwner(playerUuidStr)) {
      val petId = entity.petId ?: continue
      PetDataManager.updateLastLocation(player.uniqueId, petId, entity.location)
    }

    // コールバックでプラグイン側のクリーンアップを実行（storeAllPets含む）
    onPlayerQuitCallback(player)
  }

  /** ペット降車時の処理 */
  @EventHandler
  fun onPetDismount(event: EntityDismountEvent) {
    if (event.entity !is Player) return
    val entity = event.dismounted as? LivingEntity ?: return
    if (entity.ownerId == null) return
    // 降車中の降下タスクが残っていればキャンセル
    activeFlyDescentTasks.remove(entity.uniqueId)?.cancel()

    if (entity is Parrot) {
      // 肩乗り防止: 降車直後に座り状態へ
      entity.isSitting = true
      // 空中降車: テレポートで強制降下 + エフェクト
      if (!entity.isOnGround) {
        // 地面Y座標を走査（最大128ブロック下）
        val startLoc = entity.location
        var targetY = startLoc.y
        for (dy in 1..128) {
          val check = startLoc.clone().subtract(0.0, dy.toDouble(), 0.0)
          if (check.block.type.isSolid) {
            targetY = check.block.y.toDouble() + 1.0
            break
          }
        }
        val finalTargetY = targetY
        var currentY = startLoc.y
        var ticks = 0
        val task =
            object : BukkitRunnable() {
              override fun run() {
                if (!entity.isValid || entity.isDead || ticks++ > 1000) {
                  activeFlyDescentTasks.remove(entity.uniqueId)
                  cancel()
                  return
                }
                // Nブロック/tick でテレポート降下
                currentY = (currentY - 0.3).coerceAtLeast(finalTargetY)
                val nextLoc = entity.location.clone()
                nextLoc.y = currentY
                entity.teleport(nextLoc)
                // 着地完了 — isOnGroundはテレポート後に不正確なためY座標のみで判定
                if (currentY <= finalTargetY) {
                  activeFlyDescentTasks.remove(entity.uniqueId)
                  cancel()
                }
              }
            }
        activeFlyDescentTasks[entity.uniqueId] = task.runTaskTimer(plugin, 1L, 1L)
        // 降下中も魔法浮遊エフェクトを起動（タイムアウト1000秒）
        ParrotFloatEffectRegistry.start(plugin, entity, 20000)
      }
    }
  }

  /** オウムへの乗車時: AI復帰 + 座り解除 */
  @EventHandler
  fun onPetMount(event: EntityMountEvent) {
    if (event.entity !is Player) return
    val entity = event.mount as? Parrot ?: return
    if (entity.ownerId == null) return
    entity.isSitting = false
    ParrotFloatEffectRegistry.stop(entity.uniqueId)
  }
}
