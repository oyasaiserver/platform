@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

/** オウムペットの空中浮遊エフェクトを一元管理する */
object ParrotFloatEffectRegistry {
  private val tasks = ConcurrentHashMap<UUID, BukkitTask>()

  fun start(plugin: JavaPlugin, entity: Parrot, timeoutTicks: Int) {
    tasks.remove(entity.uniqueId)?.cancel()
    var tick = 0
    val task =
        object : BukkitRunnable() {
          override fun run() {
            if (
                !entity.isValid ||
                    entity.isDead ||
                    entity.isOnGround ||
                    entity.isInWater ||
                    entity.passengers.isNotEmpty() ||
                    tick++ > timeoutTicks
            ) {
              tasks.remove(entity.uniqueId)
              cancel()
              return
            }
            // 足元を中心に円軌道でパーティクルを放出
            val loc = entity.location.clone()
            val angle = 2 * Math.PI * (tick % 30) / 30.0
            val x = Math.cos(angle) * 0.5
            val z = Math.sin(angle) * 0.5
            entity.world.spawnParticle(
                Particle.ENCHANT,
                loc.clone().add(x, 0.0, z),
                2,
                0.0,
                0.1,
                0.0,
                0.05,
            )
            if (tick % 10 == 0) {
              entity.world.spawnParticle(Particle.END_ROD, loc, 1, 0.2, 0.1, 0.2, 0.01)
            }
          }
        }
    tasks[entity.uniqueId] = task.runTaskTimer(plugin, 1L, 1L)
  }

  fun stop(entityUuid: UUID) {
    tasks.remove(entityUuid)?.cancel()
  }

  fun isRunning(entityUuid: UUID) = tasks.containsKey(entityUuid)
}
