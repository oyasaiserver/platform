package me.ankokunsan.entityPose

import java.util.UUID
import kotlin.math.roundToInt
import org.bukkit.Particle
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Entity
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.EulerAngle

object FollowEntity {

  // プレイヤーが現在操作中のエンティティとタスクをペアで管理
  val activePreviews = mutableMapOf<UUID, Pair<Entity, BukkitTask>>()

  @Suppress("UNCHECKED_CAST")
  fun <T : Entity> start(player: Player, type: EntityType, setup: (T) -> Unit) {
    if (activePreviews.containsKey(player.uniqueId)) {
      player.sendMessage("§6[EntityPose] §cもうエンティティ出してるよ～！！！")
      return
    }
    val distance = 2.5
    val entity = player.world.spawnEntity(player.location, type) as T
    // 共通設定
    entity.setGravity(false)
    entity.isPersistent = false // サーバー再起動時に残らないように
    // LivingEntity（狼、猫、防具立て等）固有の設定
    if (entity is LivingEntity) {
      entity.setAI(false)
      entity.isCollidable = false
      entity.isInvulnerable = true
    }

    if (entity is ArmorStand) {
      entity.setBasePlate(false)
      val zero = EulerAngle(0.0, 0.0, 0.0)
      entity.headPose = zero
      entity.bodyPose = zero
      entity.leftArmPose = zero
      entity.rightArmPose = zero
      entity.leftLegPose = zero
      entity.rightLegPose = zero
    }

    setup(entity)

    val task =
        object : BukkitRunnable() {
              override fun run() {
                if (!player.isOnline || entity.isDead) {
                  cancel()
                  activePreviews.remove(player.uniqueId)
                  return
                }
                // 視線方向から位置を計算
                val eyeLoc = player.eyeLocation
                val dir = eyeLoc.direction.normalize()
                val target = eyeLoc.clone().add(dir.multiply(distance))

                target.x = target.blockX + 0.5
                target.y = target.blockY.toDouble()
                target.z = target.blockZ + 0.5

                val directionToPlayer =
                    eyeLoc.toVector().subtract(target.toVector()) // プレイヤーへの方向ベクトル
                val lookAtPlayerLoc = target.clone().setDirection(directionToPlayer)
                val snappedYaw = ((lookAtPlayerLoc.yaw / 45.0).roundToInt() * 45.0).toFloat()
                // ベクトルをLocationの向きに変換
                target.yaw = snappedYaw
                target.pitch = 0f

                val bx = target.blockX.toDouble()
                val by = target.blockY.toDouble()
                val bz = target.blockZ.toDouble()
                // 頂点を結ぶようにパーティクルを配置
                val w = target.world!!
                w.spawnParticle(Particle.FLAME, bx, by, bz, 1, 0.0, 0.0, 0.0, 0.0)
                w.spawnParticle(Particle.FLAME, bx + 1, by, bz, 1, 0.0, 0.0, 0.0, 0.0)
                w.spawnParticle(Particle.FLAME, bx, by, bz + 1, 1, 0.0, 0.0, 0.0, 0.0)
                w.spawnParticle(Particle.FLAME, bx + 1, by, bz + 1, 1, 0.0, 0.0, 0.0, 0.0)

                entity.teleport(target)
              }
            }
            .runTaskTimer(EntityPose.INSTANCE, 0L, 1L)

    activePreviews[player.uniqueId] = Pair(entity, task)
  }

  fun stop(player: Player): Entity? {
    val data = activePreviews.remove(player.uniqueId) ?: return null

    val entity = data.first
    val task = data.second
    // 1. 追従タスク（タイマー）を即座に停止
    task.cancel()
    // 2. エンティティが生きている場合、最終的な状態を確定させる
    if (!entity.isDead) {
      entity.setGravity(false) // 重力を無効化（空中浮遊を維持する場合）
      entity.isPersistent = true // 設置後はサーバー再起動で消えないようにする（任意）

      if (entity is LivingEntity) {
        entity.setAI(false) // AIを完全に停止
        entity.isCollidable = true // 設置後は当たり判定を戻す（必要に応じて）
        entity.isInvulnerable = false
        entity.isSilent = true
        entity.persistentDataContainer.set(
            EntityPose.INVINCIBLE, PersistentDataType.BYTE, 1.toByte())
      }
    }

    return entity
  }
}
