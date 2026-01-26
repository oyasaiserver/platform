package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetCategory
import me.marzipan.OyasaiPets.domain.PetRegistry
import org.bukkit.Location
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector
import java.util.UUID

/**
 * ペット移動・ジャンプ制御システム
 * プレイヤーの入力に応じたペットの移動、ジャンプ、特殊動作を管理
 */
class PetControlSystem(private val plugin: JavaPlugin) {

    // アクティブな制御タスク管理
    private val activeControlTasks = mutableMapOf<UUID, BukkitRunnable>()

    // ダッシュ終了時間管理
    private val dashEndTimes = mutableMapOf<UUID, Long>()

    /**
     * 制御タスクを開始
     */
    fun startControlTask(player: Player, entity: LivingEntity) {
        // 既存のタスクをキャンセル
        activeControlTasks[entity.uniqueId]?.cancel()

        val spec = PetRegistry.get(entity.type)

        val task = object : BukkitRunnable() {
            override fun run() {
                if (!entity.isValid || entity.isDead || !player.isOnline) {
                    cancel()
                    activeControlTasks.remove(entity.uniqueId)
                    return
                }

                if (!entity.passengers.contains(player)) {
                    cancel()
                    activeControlTasks.remove(entity.uniqueId)
                    return
                }

                val inputVec = player.location.direction.clone().setY(0).normalize()

                // プレイヤーが移動しているかチェック（簡易版）
                val playerVel = player.velocity
                val isMoving = playerVel.lengthSquared() > 0.01
                val isJumping = !entity.isOnGround && playerVel.y > 0

                // 移動速度計算
                val currentLevel = entity.foodLevel
                val speedMultiplier = entity.speedMultiplier
                val baseSpeed = spec.baseSpeed * speedMultiplier
                val maxSpeed = spec.maxSpeed * speedMultiplier
                val speedBoost = (currentLevel.toDouble() / BigWolfConfig.maxFoodLevel) * (maxSpeed - baseSpeed)
                val finalSpeed = baseSpeed + speedBoost

                // ダッシュ中のボーナス速度
                val dashBonus = if (isDashing(player)) 1.5 else 1.0
                val speed = finalSpeed * dashBonus

                // 移動ベクトル計算（プレイヤーの向きベース）
                var moveVec = Vector(0.0, 0.0, 0.0)

                if (isMoving) {
                    moveVec = inputVec.clone().multiply(speed)
                }

                // カテゴリ別の特殊処理
                when (spec.category) {
                    PetCategory.LAND -> handleLandMovement(entity, moveVec, isJumping, spec.jumpPower)
                    PetCategory.WATER -> handleWaterMovement(entity, moveVec, isJumping, spec.jumpPower)
                    PetCategory.FLYING -> handleFlyingMovement(entity, moveVec, isJumping, spec.jumpPower)
                }

                // 位置統計更新
                updateDistanceStat(entity)
            }
        }

        task.runTaskTimer(plugin, 0L, 1L)
        activeControlTasks[entity.uniqueId] = task
    }

    /**
     * 陸上型の移動処理
     */
    private fun handleLandMovement(entity: LivingEntity, moveVec: Vector, jump: Boolean, jumpPower: Double) {
        if (moveVec.lengthSquared() > 0) {
            val currentVel = entity.velocity
            val newVel = moveVec.clone().setY(currentVel.y)
            entity.velocity = newVel
        }

        if (jump && entity.isOnGround) {
            val jumpMultiplier = entity.jumpMultiplier
            entity.velocity = entity.velocity.setY(jumpPower * jumpMultiplier)
            entity.statJumps++
        }
    }

    /**
     * 水生型の移動処理
     */
    private fun handleWaterMovement(entity: LivingEntity, moveVec: Vector, jump: Boolean, jumpPower: Double) {
        if (entity.isInWater) {
            // 水中では高速移動
            if (moveVec.lengthSquared() > 0) {
                entity.velocity = moveVec.multiply(1.5)
            }
            if (jump) {
                entity.velocity = entity.velocity.setY(0.3)
            }
        } else {
            // 陸上では遅い
            if (moveVec.lengthSquared() > 0) {
                val currentVel = entity.velocity
                entity.velocity = moveVec.multiply(0.5).setY(currentVel.y)
            }
            if (jump && entity.isOnGround) {
                entity.velocity = entity.velocity.setY(jumpPower * 0.7)
            }

            // 水面走行モード
            if (entity.isHovering && isNearWater(entity.location)) {
                entity.velocity = entity.velocity.setY(0.1)
            }
        }
    }

    /**
     * 飛行型の移動処理
     */
    private fun handleFlyingMovement(entity: LivingEntity, moveVec: Vector, jump: Boolean, jumpPower: Double) {
        if (entity.isHovering) {
            // ホバリングモード：自由飛行
            if (moveVec.lengthSquared() > 0) {
                entity.velocity = moveVec.setY(0.0)
            }
            if (jump) {
                entity.velocity = entity.velocity.setY(0.4)
            } else {
                // ゆっくり降下
                if (!entity.isOnGround) {
                    entity.velocity = entity.velocity.setY(-0.1)
                }
            }
        } else {
            // 通常モード：陸上型と同じ
            handleLandMovement(entity, moveVec, jump, jumpPower)
        }
    }

    /**
     * 水面が近くにあるかチェック
     */
    private fun isNearWater(loc: Location): Boolean {
        for (dx in -1..1) {
            for (dz in -1..1) {
                val block = loc.world?.getBlockAt(loc.blockX + dx, loc.blockY - 1, loc.blockZ + dz)
                if (block != null && block.isLiquid) {
                    return true
                }
            }
        }
        return false
    }

    /**
     * ダッシュ中かチェック
     */
    private fun isDashing(player: Player): Boolean {
        val endTime = dashEndTimes[player.uniqueId] ?: return false
        return System.currentTimeMillis() < endTime
    }

    /**
     * ダッシュ終了時間を設定
     */
    fun setDashEndTime(player: Player, endTime: Long) {
        dashEndTimes[player.uniqueId] = endTime
    }

    /**
     * 移動距離統計を更新
     */
    private fun updateDistanceStat(entity: LivingEntity) {
        val vel = entity.velocity
        val distance = Math.sqrt(vel.x * vel.x + vel.z * vel.z) * 0.05 // tick単位なので調整
        if (distance > 0.01) {
            entity.statDistance += distance
        }
    }

    /**
     * 制御タスクを停止
     */
    fun stopControlTask(entity: LivingEntity) {
        activeControlTasks[entity.uniqueId]?.cancel()
        activeControlTasks.remove(entity.uniqueId)
    }

    /**
     * プレイヤーのクリーンアップ
     */
    fun cleanupPlayer(playerUuid: UUID) {
        dashEndTimes.remove(playerUuid)
    }
}

