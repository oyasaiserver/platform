package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.domain.PetCategory
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.foodLevel
import me.marzipan.OyasaiPets.isHovering
import me.marzipan.OyasaiPets.isSilentMode
import me.marzipan.OyasaiPets.skillType
import me.marzipan.OyasaiPets.statDistance
import me.marzipan.OyasaiPets.statJumps
import me.marzipan.OyasaiPets.statToys
import me.marzipan.OyasaiPets.statBrushes
import me.marzipan.OyasaiPets.statTreats
import me.marzipan.OyasaiPets.speedMultiplier
import me.marzipan.OyasaiPets.jumpMultiplier
import org.bukkit.Material
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Sittable
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector
import java.util.UUID

/**
 * プレイヤーの入力に合わせてペットの移動・ジャンプを制御する
 */
class PetControlSystem(
    private val plugin: JavaPlugin,
    private val particleCallback: (LivingEntity) -> Unit
) : Listener {

    private val activeControlTasks = mutableMapOf<UUID, BukkitRunnable>()
    private val dashEndTimes = mutableMapOf<UUID, Long>()

    @EventHandler
    fun onPlayerQuit(event: PlayerQuitEvent) {
        cleanup(event.player.uniqueId)
    }

    fun cleanup(playerId: UUID) {
        dashEndTimes.remove(playerId)
    }

    fun startControlTask(player: Player, entity: LivingEntity) {
        activeControlTasks[entity.uniqueId]?.cancel()
        val spec = PetRegistry.get(entity.type)

        val task = object : BukkitRunnable() {
            var lastPos = entity.location.toVector()
            var rideDistance = 0.0
            var ticks = 0
            var lastJumpPressed = false

            override fun run() {
                if (!entity.isValid || !player.isOnline || player !in entity.passengers) {
                    if (entity.isValid) entity.isSilent = false
                    if (rideDistance > 0.0 && entity.isValid) {
                        entity.statDistance = entity.statDistance + rideDistance
                    }
                    cancel()
                    activeControlTasks.remove(entity.uniqueId)
                    return
                }
                if (entity is Sittable) entity.isSitting = false

                val level = entity.foodLevel
                val progress = level.toDouble() / BigWolfConfig.maxFoodLevel
                var speed = spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress
                speed *= entity.speedMultiplier

                entity.isSilent = entity.isSilentMode
                val inWater = entity.isInWater

                when (spec.category) {
                    PetCategory.LAND -> if (inWater && entity.skillType != 3) speed *= 0.3
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
                    if (entity.skillType == 3 && entity.isHovering) {
                        val loc = entity.location
                        val isSurface = loc.block.type == Material.WATER ||
                            loc.clone().subtract(0.0, 0.5, 0.0).block.type == Material.WATER
                        if (isSurface) {
                            speed *= 2.5
                            if (velocity.lengthSquared() > 0) {
                                velocity.normalize().multiply(speed)
                                velocity.y = 0.05
                                entity.world.spawnParticle(
                                    Particle.SPLASH, entity.location, 5, 0.5, 0.0, 0.5, 0.0
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

                if (isDashing) {
                    particleCallback(entity)
                } else {
                    if (velocity.lengthSquared() > 0) {
                        val isWaterSkillActive =
                            (spec.category == PetCategory.WATER &&
                                inWater &&
                                entity.skillType == 3 &&
                                entity.isHovering)

                        if (!isWaterSkillActive) {
                            velocity.normalize().multiply(speed)
                            if (spec.category != PetCategory.WATER || !inWater) {
                                velocity.y = entity.velocity.y
                            }
                        }

                        if (inWater && input.isJump && spec.category != PetCategory.WATER) {
                            velocity.y = 0.4
                            if (!lastJumpPressed) {
                                entity.statJumps = entity.statJumps + 1
                            }
                        }
                        entity.velocity = velocity
                        particleCallback(entity)
                    }
                }

                val jumpPressedNow = input.isJump

                if (spec.category == PetCategory.FLYING) {
                    if (input.isJump) {
                        val vel = entity.velocity
                        vel.y = 0.4 * entity.jumpMultiplier
                        entity.velocity = vel
                        if (!lastJumpPressed) {
                            entity.statJumps = entity.statJumps + 1
                        }
                    } else if (!entity.isOnGround) {
                        if (entity.skillType == 3 && entity.isHovering) {
                            val vel = entity.velocity
                            vel.y = 0.0
                            entity.velocity = vel
                            if (entity.ticksLived % 10 == 0) {
                                entity.world.spawnParticle(
                                    Particle.END_ROD, entity.location, 1, 0.1, 0.0, 0.1, 0.0
                                )
                            }
                        } else {
                            val vel = entity.velocity
                            vel.y = -0.15
                            entity.velocity = vel
                        }
                    }
                } else {
                    if (input.isJump && entity.isOnGround && !inWater) {
                        entity.velocity = entity.velocity.setY(spec.jumpPower * entity.jumpMultiplier)
                        if (!lastJumpPressed) {
                            entity.statJumps = entity.statJumps + 1
                        }
                    }

                    if (entity.type == EntityType.RABBIT && entity.isOnGround && !inWater) {
                        if (velocity.length() > 0.1 && entity.ticksLived % 8 == 0) {
                            try {
                                entity.playEffect(org.bukkit.EntityEffect.RABBIT_JUMP)
                            } catch (e: Exception) {
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
                if (ticks % 200 == 0 && rideDistance > 0.0) {
                    entity.statDistance = entity.statDistance + rideDistance
                    rideDistance = 0.0
                }
            }
        }

        task.runTaskTimer(plugin, 0L, 1L)
        activeControlTasks[entity.uniqueId] = task
    }

    private fun isDashing(player: Player): Boolean {
        val endTime = dashEndTimes[player.uniqueId] ?: return false
        return System.currentTimeMillis() < endTime
    }

    fun setDashEndTime(player: Player, endTime: Long) {
        dashEndTimes[player.uniqueId] = endTime
    }
}
