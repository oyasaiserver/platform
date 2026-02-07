package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import org.bukkit.Bukkit
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector
import java.util.UUID
import kotlin.random.Random

/**
 * 非定型ペットの子供AI システム
 * 非定型ペットに子供っぽい活発な挙動を追加
 */
class ChildAISystem(private val plugin: JavaPlugin) {

    // アクティブなAIタスク
    private val activeTasks = mutableMapOf<UUID, BukkitTask>()

    // クールダウン管理（各ペットごと）
    private val lastActionTime = mutableMapOf<UUID, Long>()

    // アクション間隔（ミリ秒）
    private val minActionInterval = 5000L  // 5秒
    private val maxActionInterval = 15000L // 15秒

    /**
     * 全ワールドの非定型ペットに対してAIを開始
     */
    fun startGlobalAITask() {
        if (!BigWolfConfig.childAiEnabled) return

        object : BukkitRunnable() {
            override fun run() {
                if (!BigWolfConfig.childAiEnabled) return

                for (world in Bukkit.getWorlds()) {
                    for (entity in world.livingEntities) {
                        if (!entity.isPet()) continue
                        if (!entity.isAtypical()) continue

                        // 騎乗中はスキップ（ペットに誰かが乗っている場合）
                        if (entity.passengers.isNotEmpty()) continue

                        // オーナーが近くにいるか確認
                        val ownerId = entity.ownerId ?: continue
                        val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: continue
                        val owner = Bukkit.getPlayer(ownerUuid) ?: continue

                        // オーナーが何かに乗っている場合（他のペット含む）はスキップ
                        if (owner.isInsideVehicle) continue

                        if (entity.location.distance(owner.location) > 30) continue

                        // クールダウンチェック
                        val now = System.currentTimeMillis()
                        val lastAction = lastActionTime[entity.uniqueId] ?: 0L
                        val interval = Random.nextLong(minActionInterval, maxActionInterval)
                        if (now - lastAction < interval) continue

                        // ランダムアクション実行
                        performRandomAction(entity, owner)
                        lastActionTime[entity.uniqueId] = now
                    }
                }
            }
        }.runTaskTimer(plugin, 20L, 20L) // 1秒ごとにチェック
    }

    /**
     * ランダムなアクションを実行
     */
    private fun performRandomAction(entity: LivingEntity, owner: Player) {
        val action = Random.nextInt(100)

        when {
            action < 30 -> performJump(entity)           // 30%: ジャンプ
            action < 50 -> performApproachOwner(entity, owner)  // 20%: 飼い主に近づく
            action < 70 -> performWander(entity)         // 20%: 周囲を探索
            action < 85 -> performPlaySound(entity)      // 15%: 鳴き声
            else -> performSpin(entity)                  // 15%: くるくる回る
        }
    }

    /**
     * ジャンプアクション
     */
    private fun performJump(entity: LivingEntity) {
        if (entity.isOnGround || entity.isInWater) {
            val currentVel = entity.velocity
            entity.velocity = Vector(currentVel.x * 0.5, 0.5, currentVel.z * 0.5)
            entity.world.spawnParticle(Particle.HAPPY_VILLAGER, entity.location.add(0.0, 0.5, 0.0), 5, 0.3, 0.3, 0.3, 0.0)
        }
    }

    /**
     * 飼い主に近づくアクション
     */
    private fun performApproachOwner(entity: LivingEntity, owner: Player) {
        val direction = owner.location.toVector().subtract(entity.location.toVector())
        val distance = direction.length()

        if (distance > 3.0 && distance < 15.0) {
            val moveVec = direction.normalize().multiply(0.3)
            val spec = PetRegistry.get(entity.type)

            // 水中か飛行系の場合はY成分も考慮
            if (spec.category == me.marzipan.OyasaiPets.domain.PetCategory.FLYING ||
                (spec.category == me.marzipan.OyasaiPets.domain.PetCategory.WATER && entity.isInWater)) {
                entity.velocity = moveVec
            } else {
                moveVec.y = entity.velocity.y
                entity.velocity = moveVec
            }

            // ペットの向きをプレイヤーの方向に設定
            val yaw = Math.toDegrees(kotlin.math.atan2(-direction.x, direction.z)).toFloat()
            entity.setRotation(yaw, 0f)

            entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 2, 0.2, 0.2, 0.2, 0.0)
        }
    }

    /**
     * 周囲を探索するアクション
     */
    private fun performWander(entity: LivingEntity) {
        val randomAngle = Random.nextDouble() * 2 * Math.PI
        val wanderVec = Vector(
            Math.cos(randomAngle) * 0.25,
            0.0,
            Math.sin(randomAngle) * 0.25
        )

        val spec = PetRegistry.get(entity.type)
        if (spec.category == me.marzipan.OyasaiPets.domain.PetCategory.FLYING ||
            (spec.category == me.marzipan.OyasaiPets.domain.PetCategory.WATER && entity.isInWater)) {
            wanderVec.y = (Random.nextDouble() - 0.5) * 0.2
            entity.velocity = wanderVec
        } else {
            wanderVec.y = entity.velocity.y
            entity.velocity = wanderVec
        }

        // ペットの向きを移動方向に設定
        val yaw = Math.toDegrees(kotlin.math.atan2(-wanderVec.x, wanderVec.z)).toFloat()
        entity.setRotation(yaw, 0f)

        // 好奇心エフェクト
        entity.world.spawnParticle(Particle.END_ROD, entity.location.add(0.0, 1.2, 0.0), 3, 0.2, 0.2, 0.2, 0.01)
    }

    /**
     * 鳴き声アクション
     */
    private fun performPlaySound(entity: LivingEntity) {
        val sound = when (entity.type) {
            org.bukkit.entity.EntityType.WOLF -> Sound.ENTITY_WOLF_WHINE
            org.bukkit.entity.EntityType.CAT -> Sound.ENTITY_CAT_AMBIENT
            org.bukkit.entity.EntityType.PARROT -> Sound.ENTITY_PARROT_AMBIENT
            org.bukkit.entity.EntityType.FOX -> Sound.ENTITY_FOX_AMBIENT
            org.bukkit.entity.EntityType.DOLPHIN -> Sound.ENTITY_DOLPHIN_AMBIENT
            org.bukkit.entity.EntityType.BEE -> Sound.ENTITY_BEE_LOOP
            org.bukkit.entity.EntityType.FROG -> Sound.ENTITY_FROG_AMBIENT
            org.bukkit.entity.EntityType.RABBIT -> Sound.ENTITY_RABBIT_AMBIENT
            org.bukkit.entity.EntityType.PANDA -> Sound.ENTITY_PANDA_AMBIENT
            org.bukkit.entity.EntityType.ALLAY -> Sound.ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM
            org.bukkit.entity.EntityType.AXOLOTL -> Sound.ENTITY_AXOLOTL_IDLE_AIR
            else -> Sound.ENTITY_PLAYER_BREATH
        }
        entity.world.playSound(entity.location, sound, 0.6f, 1.2f)
    }

    /**
     * くるくる回るアクション
     */
    private fun performSpin(entity: LivingEntity) {
        val startYaw = entity.location.yaw

        object : BukkitRunnable() {
            var ticks = 0
            override fun run() {
                if (!entity.isValid || entity.isDead || ticks >= 10) {
                    cancel()
                    return
                }

                val newYaw = startYaw + (ticks * 36f) // 10tickで1回転
                entity.setRotation(newYaw, entity.location.pitch)
                entity.world.spawnParticle(Particle.FIREWORK, entity.location.add(0.0, 0.5, 0.0), 1, 0.2, 0.2, 0.2, 0.0)
                ticks++
            }
        }.runTaskTimer(plugin, 0L, 2L)
    }

    /**
     * クリーンアップ
     */
    fun cleanup() {
        activeTasks.values.forEach { it.cancel() }
        activeTasks.clear()
        lastActionTime.clear()
    }
}
