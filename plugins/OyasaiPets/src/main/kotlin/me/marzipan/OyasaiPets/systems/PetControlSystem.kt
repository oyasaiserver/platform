@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

/** プレイヤーの入力に合わせてペットの移動・ジャンプを制御する */
class PetControlSystem(
    private val plugin: JavaPlugin,
    private val particleCallback: (LivingEntity, Int) -> Unit,
) : Listener {

  private val activeControlTasks = ConcurrentHashMap<UUID, BukkitRunnable>()
  private val dashEndTimes = ConcurrentHashMap<UUID, Long>()
  // 飛行MOBのイナーシャ用XZ速度キャッシュ（entity UUID → 前ティックのXZベクトル）
  private val flyingVelocities = ConcurrentHashMap<UUID, Vector>()

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    cleanup(event.player.uniqueId)
  }

  fun cleanup(playerId: UUID) {
    dashEndTimes.remove(playerId)
  }

  /** サーバー停止時に全タスクをキャンセルしてクリア */
  fun clearAllTasks() {
    activeControlTasks.values.forEach { it.cancel() }
    activeControlTasks.clear()
    dashEndTimes.clear()
    flyingVelocities.clear()
  }

  fun startControlTask(player: Player, entity: LivingEntity) {
    activeControlTasks[entity.uniqueId]?.cancel()
    val spec = PetRegistry.get(entity.type)

    // 騎乗開始時にAIの移動速度を0にする（勝手に動かないように）
    // ※ setAI(false) は velocity が無視されるため使用不可。属性ゼロで AI 駆動移動を抑制する
    val originalSpeed = entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue ?: 0.0
    val originalFlyingSpeed = entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue
    entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
    entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0

    val task =
        object : BukkitRunnable() {
          var lastPos = entity.location.toVector()
          var rideDistance = 0.0
          var ticks = 0
          var lastJumpPressed = false
          var cachedParticleType = entity.particleType
          // PDC キャッシュ（毎tick読み取りを回避）
          var cachedFood = entity.foodLevel
          var cachedSpeed = entity.speedMultiplier
          var cachedSkillType = entity.skillType
          var cachedIsHovering = entity.isHovering
          var cachedJumpMul = entity.jumpMultiplier
          var localJumps = 0
          var hoverTick = -1 // -1: ホバー外、0+: 固定サイクル進行中
          var internalYVel = 0.0 // サーバー重力干渉を排除した内部管理Y速度

          override fun run() {
            val debugEnabled = PetDebugger.isEnabled(player.uniqueId)
            val tickStartNs = if (debugEnabled) System.nanoTime() else 0L

            if (!entity.isValid || !player.isOnline || player !in entity.passengers) {
              if (entity.isValid) {
                entity.isSilent = false
                // 降車時に速度属性を復元
                entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = originalSpeed
                originalFlyingSpeed?.let {
                  entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue = it
                }
                // LAND/WATER はAIを無効化していないので何もしない
                flyingVelocities.remove(entity.uniqueId)
              }
              if (rideDistance > 0.0 && entity.isValid) {
                entity.statDistance += rideDistance
              }
              if (localJumps > 0 && entity.isValid) {
                entity.statJumps += localJumps
              }
              cancel()
              activeControlTasks.remove(entity.uniqueId)
              return
            }
            if (entity is Sittable) entity.isSitting = false
            // アルマジロが丸まっている場合は解除
            if (entity is Armadillo && entity.state != Armadillo.State.IDLE) {
              entity.rollOut()
            }

            // 20tickごとにPDCキャッシュを更新
            if (ticks % 20 == 0) {
              cachedFood = entity.foodLevel
              cachedSpeed = entity.speedMultiplier
              cachedSkillType = entity.skillType
              cachedIsHovering = entity.isHovering
              cachedJumpMul = entity.jumpMultiplier
            }

            val progress = cachedFood.toDouble() / BigWolfConfig.maxFoodLevel
            var speed = spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress
            speed *= cachedSpeed

            val inWater = entity.isInWater

            when (spec.category) {
              PetCategory.LAND -> if (inWater && cachedSkillType != 3) speed *= 0.3
              PetCategory.WATER -> {
                speed *= if (inWater) 1.2 else if (entity.type == EntityType.TURTLE) 0.3 else 0.6
              }
              PetCategory.FLYING -> if (inWater) speed *= 0.3
            }

            val now = System.currentTimeMillis()
            val isDashing = now < dashEndTimes.getOrDefault(player.uniqueId, 0L)
            val input = player.currentInput
            val dir = player.location.direction.setY(0).normalize()
            val right = dir.clone().crossProduct(Vector(0, 1, 0))
            val velocity = Vector(0, 0, 0)

            if (input.isForward) velocity.add(dir)
            if (input.isBackward) velocity.subtract(dir)
            if (input.isLeft) velocity.subtract(right)
            if (input.isRight) velocity.add(right)

            if (spec.category == PetCategory.WATER && inWater) {
              if (cachedSkillType == 3 && cachedIsHovering) {
                val loc = entity.location
                val isSurface =
                    loc.block.type == Material.WATER ||
                        loc.clone().subtract(0.0, 0.5, 0.0).block.type == Material.WATER
                if (isSurface) {
                  speed *= 2.5
                  if (velocity.lengthSquared() > 0) {
                    velocity.normalize().multiply(speed)
                    velocity.y = 0.05
                    entity.world.spawnParticle(
                        Particle.SPLASH,
                        entity.location,
                        5,
                        0.5,
                        0.0,
                        0.5,
                        0.0,
                    )
                  }
                } else if (input.isForward || input.isBackward) {
                  velocity.normalize().multiply(speed * 1.5)
                  velocity.y = 0.2
                }
              } else if (input.isForward || input.isBackward) {
                velocity.y = player.location.direction.y * speed
              }
            }

            // 20tickごとにparticleTypeキャッシュを更新（PDC読み取りを毎tick→毎秒に削減）
            if (ticks % 20 == 0) cachedParticleType = entity.particleType

            val jumpPressedNow = input.isJump

            if (spec.category == PetCategory.FLYING) {
              // ===== 飛行MOB専用速度制御（イナーシャ付き）=====
              // XZ: Lerpで加速・ドラッグで減速（慣性）
              // Y:  entity.velocity.y（重力適用済み）を基に加工（自然な重力加速）

              val prevXZ = flyingVelocities.getOrDefault(entity.uniqueId, Vector(0.0, 0.0, 0.0))

              // --- Y速度（内部管理: サーバー重力干渉を排除） ---
              // entity.velocity.y はサーバーが鶏等に重力を加算した後の値のため読まない
              // ホバー固定サイクル定数
              val hoverPeriod = 60 // 1サイクル tick数（3秒）
              val hoverHeight = 0.2 // 最大高さ（ブロック）
              // spec.jumpPower で上昇加速量・上限を MOB ごとに制御
              val jumpAccel = 0.06 * spec.jumpPower * cachedJumpMul
              val jumpCap = 0.4 * spec.jumpPower * cachedJumpMul
              // (1) XZ入力があればホバーサイクルを即キャンセル
              if (
                  hoverTick >= 0 &&
                      (input.isForward || input.isBackward || input.isLeft || input.isRight)
              ) {
                hoverTick = -1
              }
              val yVel =
                  when {
                    input.isJump -> {
                      if (!lastJumpPressed) localJumps++
                      hoverTick = -1 // ホバー中断
                      // 毎tick上昇推力を加算し、上限でキャップ
                      minOf(internalYVel + jumpAccel, jumpCap)
                    }
                    cachedSkillType == 3 && cachedIsHovering -> {
                      hoverTick = -1 // ホバー中断
                      // ホバースキル: Y速度を減衰して空中静止
                      if (entity.ticksLived % 10 == 0) {
                        entity.world.spawnParticle(
                            Particle.END_ROD,
                            entity.location,
                            1,
                            0.1,
                            0.0,
                            0.1,
                            0.0,
                        )
                      }
                      internalYVel * 0.75
                    }
                    hoverTick >= 0 -> {
                      // (2) テレポート後などで地面から離れていたらホバーキャンセル
                      val nearGround =
                          entity.isOnGround ||
                              entity.location.clone().subtract(0.0, 0.6, 0.0).block.type.isSolid
                      if (!nearGround) {
                        hoverTick = -1
                        maxOf(internalYVel - 0.04, -0.5)
                      } else {
                        // 固定サイクルホバー: 正弦波 h(t)=H*sin(π*t/T) の速度成分
                        // v(t) = H*π/T * cos(π*t/T)
                        val phase = Math.PI * hoverTick.toDouble() / hoverPeriod
                        val vel = hoverHeight * Math.PI / hoverPeriod * Math.cos(phase)
                        hoverTick++
                        if (hoverTick >= hoverPeriod) hoverTick = -1 // サイクル終了、次の接地で再開
                        vel
                      }
                    }
                    entity.isOnGround -> {
                      // 接地: サイクル開始（cos(0)=1 なので初速 H*π/T）
                      hoverTick = 0
                      hoverHeight * Math.PI / hoverPeriod
                    }
                    // 自前重力シミュレート（全飛行MOB統一: サーバー重力に依存しない）
                    else -> maxOf(internalYVel - 0.04, -0.5)
                  }
              internalYVel = yVel

              // --- XZ速度 ---
              if (isDashing) {
                // ダッシュ中: エンティティの現在XZを慣性マップに保存してYのみ制御
                val ev = entity.velocity
                flyingVelocities[entity.uniqueId] = Vector(ev.x, 0.0, ev.z)
                ev.y = yVel
                entity.velocity = ev
                particleCallback(entity, cachedParticleType)
              } else {
                val inputVec = Vector(0.0, 0.0, 0.0)
                if (input.isForward) inputVec.add(dir)
                if (input.isBackward) inputVec.subtract(dir)
                if (input.isLeft) inputVec.subtract(right)
                if (input.isRight) inputVec.add(right)

                val targetXZ =
                    if (inputVec.lengthSquared() > 0) inputVec.normalize().multiply(speed)
                    else Vector(0.0, 0.0, 0.0)

                val newXZ =
                    if (targetXZ.lengthSquared() > 0) {
                      // 加速: 現在速度をターゲットへLerp（~3tickでフル速度）
                      prevXZ.clone().multiply(0.70).add(targetXZ.clone().multiply(0.30))
                    } else {
                      // 減速: ドラッグ係数で自然に収束（~6tickで停止）
                      prevXZ.clone().multiply(0.82)
                    }

                flyingVelocities[entity.uniqueId] = newXZ.clone()

                entity.velocity = Vector(newXZ.x, yVel, newXZ.z)
                if (targetXZ.lengthSquared() > 0) particleCallback(entity, cachedParticleType)
              }
            } else {
              // ===== LAND / WATER カテゴリ =====
              if (isDashing) {
                particleCallback(entity, cachedParticleType)
              } else {
                if (velocity.lengthSquared() > 0) {
                  val isWaterSkillActive =
                      (spec.category == PetCategory.WATER &&
                          inWater &&
                          cachedSkillType == 3 &&
                          cachedIsHovering)

                  if (!isWaterSkillActive) {
                    velocity.normalize().multiply(speed)
                    if (spec.category != PetCategory.WATER || !inWater) {
                      velocity.y = entity.velocity.y
                    }
                  }

                  if (inWater && input.isJump && spec.category != PetCategory.WATER) {
                    velocity.y = 0.4
                    if (!lastJumpPressed) {
                      localJumps++
                    }
                  }
                  entity.velocity = velocity
                  particleCallback(entity, cachedParticleType)
                }
              }

              if (input.isJump && entity.isOnGround && !inWater) {
                entity.velocity = entity.velocity.setY(spec.jumpPower * cachedJumpMul)
                if (!lastJumpPressed) {
                  localJumps++
                }
              }

              if (entity.type == EntityType.RABBIT && entity.isOnGround && !inWater) {
                if (velocity.length() > 0.1 && entity.ticksLived % 8 == 0) {
                  try {
                    entity.playEffect(EntityEffect.RABBIT_JUMP)
                  } catch (_: Exception) {
                    val vel = entity.velocity
                    vel.y = 0.4
                    entity.velocity = vel
                  }
                }
              }
            }

            lastJumpPressed = jumpPressedNow
            entity.setRotation(player.location.yaw, 0f)

            val curr = entity.location.toVector()
            val delta = curr.distance(lastPos)
            if (delta.isFinite()) {
              if (delta < 100.0) {
                rideDistance += delta.coerceAtMost(8.0)
              }
            }
            lastPos = curr

            ticks++
            val statWriteThisTick = ticks % 200 == 0
            if (statWriteThisTick) {
              if (rideDistance > 0.0) {
                entity.statDistance += rideDistance
                rideDistance = 0.0
              }
              if (localJumps > 0) {
                entity.statJumps += localJumps
                localJumps = 0
              }
            }

            if (debugEnabled) {
              val tickNs = System.nanoTime() - tickStartNs
              val jumpThisTick = input.isJump && !lastJumpPressed
              PetDebugger.recordControlTick(
                  player.uniqueId,
                  tickNs,
                  jumpThisTick,
                  statWriteThisTick,
              )
              val progress = cachedFood.toDouble() / BigWolfConfig.maxFoodLevel
              val curSpeed =
                  spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress * cachedSpeed
              PetDebugger.updateActionBar(
                  player,
                  ticks,
                  cachedFood,
                  curSpeed,
                  cachedSkillType,
                  jumpThisTick,
                  tickNs,
              )
              if (ticks % 20 == 0) {
                PetDebugger.flushControlSummary(player, cachedFood, curSpeed)
              }
            }
          }
        }

    task.runTaskTimer(plugin, 0L, 1L)
    activeControlTasks[entity.uniqueId] = task
  }

  fun setDashEndTime(player: Player, endTime: Long) {
    dashEndTimes[player.uniqueId] = endTime
  }
}
