package io.oyasai.particles.engine

import io.oyasai.particles.integration.WorldGuardHook
import io.oyasai.particles.model.AmbientSoundPreset
import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.model.ParticleArea
import io.oyasai.particles.model.ParticlePreset
import io.oyasai.particles.model.PseudoWeather
import io.oyasai.particles.model.TimePreset
import io.oyasai.particles.model.resolveSoundByKey
import io.oyasai.particles.service.AreaService
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ThreadLocalRandom
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.entity.Player

class ParticleRenderEngine(
    private val areaService: AreaService,
    private val worldGuardHook: WorldGuardHook,
    config: FileConfiguration,
) {
  val tickInterval: Long = config.getLong("render.tick-interval", 4L).coerceIn(1L, 20L)
  private val maxParticlesPerPlayer: Int =
      config.getInt("render.max-particles-per-player-per-tick", 80).coerceIn(10, 300)
  private val playerRenderRadius: Double =
      config.getDouble("render.player-render-radius", 24.0).coerceIn(6.0, 48.0)

  private val appliedTimePlayers = ConcurrentHashMap<UUID, Long>()
  private val soundNextTick = ConcurrentHashMap<UUID, Long>()
  private val thunderNextTick = ConcurrentHashMap<UUID, Long>()
  private val activeWeatherSounds = ConcurrentHashMap<UUID, Sound>()
  private var tickCounter: Long = 0L

  fun tick() {
    tickCounter++
    val allAreasByWorld = areaService.allAreas().groupBy { it.worldName }
    val online = Bukkit.getOnlinePlayers()

    for (player in online) {
      val uuid = player.uniqueId
      if (!areaService.isVisualEnabled(uuid)) {
        resetPlayerState(player)
        continue
      }

      val worldAreas = allAreasByWorld[player.world.name].orEmpty()
      val loc = player.location
      val insideAreas =
          worldAreas.filter { area ->
            area.shape.contains(loc.x, loc.y + 0.5, loc.z) &&
                worldGuardHook.isDisplayAllowed(player, loc)
          }

      if (insideAreas.isEmpty()) {
        resetPlayerState(player)
        continue
      }

      // 個人時間：最初に見つかった時間指定付きエリア（新しいもの優先）を適用
      val timeTarget =
          insideAreas
              .sortedByDescending { it.updatedAt }
              .firstOrNull { it.effect.time != TimePreset.DEFAULT }
              ?.effect
              ?.time
              ?.ticks
      if (timeTarget != null) {
        if (appliedTimePlayers[uuid] != timeTarget) {
          player.setPlayerTime(timeTarget, false)
          appliedTimePlayers[uuid] = timeTarget
        }
      } else {
        resetPlayerTimeIfApplied(player)
      }

      // 環境音：最も新しい音指定付きエリアを再生
      val soundArea =
          insideAreas
              .sortedByDescending { it.updatedAt }
              .firstOrNull { it.effect.sound != AmbientSoundPreset.NONE }
      if (soundArea != null) {
        processAmbientSound(player, soundArea.effect.sound)
      } else {
        stopPlayerSoundsIfActive(player)
      }

      // パーティクル・疑似天候の描画（1プレイヤーあたり発生上限を厳守）
      var remainingBudget = maxParticlesPerPlayer
      for (area in insideAreas) {
        if (remainingBudget <= 0) break
        remainingBudget -= renderAreaForPlayer(player, area, remainingBudget)
      }
    }
  }

  fun resetPlayerState(player: Player) {
    resetPlayerTimeIfApplied(player)
    stopPlayerSoundsIfActive(player)
  }

  fun releasePlayer(player: Player) {
    resetPlayerState(player)
    soundNextTick.remove(player.uniqueId)
    thunderNextTick.remove(player.uniqueId)
  }

  fun resetAllOnlinePlayers() {
    for (player in Bukkit.getOnlinePlayers()) {
      releasePlayer(player)
    }
  }

  private fun resetPlayerTimeIfApplied(player: Player) {
    if (appliedTimePlayers.remove(player.uniqueId) != null) {
      player.resetPlayerTime()
    }
  }

  private fun stopPlayerSoundsIfActive(player: Player) {
    val activeSound = activeWeatherSounds.remove(player.uniqueId)
    if (activeSound != null) {
      player.stopSound(activeSound, SoundCategory.AMBIENT)
    }
  }

  private fun processAmbientSound(player: Player, preset: AmbientSoundPreset) {
    val uuid = player.uniqueId
    val mainSound = preset.resolveSound()
    if (mainSound != null) {
      val prevSound = activeWeatherSounds[uuid]
      if (prevSound != null && prevSound != mainSound) {
        player.stopSound(prevSound, SoundCategory.AMBIENT)
      }
      val nextAt = soundNextTick[uuid] ?: 0L
      if (tickCounter >= nextAt) {
        player.playSound(
            player.location,
            mainSound,
            SoundCategory.AMBIENT,
            preset.volume,
            preset.pitch,
        )
        activeWeatherSounds[uuid] = mainSound
        soundNextTick[uuid] = tickCounter + (preset.intervalTicks / tickInterval).coerceAtLeast(1L)
      }
    } else {
      stopPlayerSoundsIfActive(player)
    }

    if (preset.hasPeriodicThunder) {
      val thunderAt = thunderNextTick[uuid] ?: 0L
      if (tickCounter >= thunderAt) {
        val thunderSound = resolveAnySound("entity.lightning_bolt.thunder")
        if (thunderSound != null) {
          val random = ThreadLocalRandom.current()
          val offsetLoc =
              player.location
                  .clone()
                  .add(random.nextDouble(-12.0, 12.0), 8.0, random.nextDouble(-12.0, 12.0))
          player.playSound(
              offsetLoc,
              thunderSound,
              SoundCategory.AMBIENT,
              random.nextDouble(0.35, 0.7).toFloat(),
              random.nextDouble(0.85, 1.15).toFloat(),
          )
        }
        val delayTicks = ThreadLocalRandom.current().nextLong(120L, 280L)
        thunderNextTick[uuid] = tickCounter + (delayTicks / tickInterval).coerceAtLeast(10L)
      }
    }
  }

  private fun renderAreaForPlayer(player: Player, area: ParticleArea, budget: Int): Int {
    var used = 0
    val random = ThreadLocalRandom.current()
    val density = area.effect.density.coerceIn(1, 5)
    val baseLoc = player.location

    if (area.effect.particle != ParticlePreset.NONE) {
      val particle = area.effect.particle.resolveParticle()
      if (particle != null) {
        val count = (density * 4).coerceAtMost(budget)
        for (i in 0 until count) {
          val spawnLoc = randomPointInside(baseLoc, area.shape, random) ?: continue
          if (spawnSafeParticle(player, particle, spawnLoc, area.effect.particle)) {
            used++
          }
        }
      }
    }

    val weatherBudget = (budget - used).coerceAtLeast(0)
    if (weatherBudget > 0 && area.effect.weather != PseudoWeather.NONE) {
      used += renderPseudoWeather(player, area.shape, area.effect.weather, density, weatherBudget)
    }
    return used
  }

  private fun renderPseudoWeather(
      player: Player,
      shape: AreaShape,
      weather: PseudoWeather,
      density: Int,
      budget: Int,
  ): Int {
    var used = 0
    val random = ThreadLocalRandom.current()
    val baseLoc = player.location

    when (weather) {
      PseudoWeather.NONE -> Unit
      PseudoWeather.RAIN -> {
        val rainParticle = resolveAnyParticle("RAIN", "FALLING_WATER", "DRIPPING_WATER")
        val splashParticle = resolveAnyParticle("SPLASH", "WATER_SPLASH")
        val rainCount = (density * 6).coerceAtMost(budget)
        if (rainParticle != null) {
          for (i in 0 until rainCount) {
            val loc = randomWeatherDropPoint(baseLoc, shape, random) ?: continue
            player.spawnParticle(rainParticle, loc, 1, 0.15, 0.4, 0.15, 0.1)
            used++
          }
        }
        if (splashParticle != null && used < budget) {
          val splashCount = (density * 2).coerceAtMost(budget - used)
          for (i in 0 until splashCount) {
            val ground = randomGroundPoint(baseLoc, shape, random) ?: continue
            player.spawnParticle(splashParticle, ground, 1, 0.2, 0.05, 0.2, 0.05)
            used++
          }
        }
      }
      PseudoWeather.SNOW -> {
        val snowParticle = resolveAnyParticle("SNOWFLAKE", "WHITE_ASH", "END_ROD")
        if (snowParticle != null) {
          val snowCount = (density * 6).coerceAtMost(budget)
          for (i in 0 until snowCount) {
            val loc = randomPointInside(baseLoc, shape, random) ?: continue
            player.spawnParticle(snowParticle, loc, 1, 0.35, 0.2, 0.35, 0.01)
            used++
          }
        }
      }
      PseudoWeather.STORM -> {
        val rainParticle = resolveAnyParticle("RAIN", "FALLING_WATER", "DRIPPING_WATER")
        val splashParticle = resolveAnyParticle("SPLASH", "WATER_SPLASH")
        val rainCount = (density * 9).coerceAtMost(budget)
        if (rainParticle != null) {
          for (i in 0 until rainCount) {
            val loc = randomWeatherDropPoint(baseLoc, shape, random) ?: continue
            player.spawnParticle(rainParticle, loc, 1, 0.25, 0.6, 0.25, 0.2)
            used++
          }
        }
        if (splashParticle != null && used < budget) {
          val splashCount = (density * 3).coerceAtMost(budget - used)
          for (i in 0 until splashCount) {
            val ground = randomGroundPoint(baseLoc, shape, random) ?: continue
            player.spawnParticle(splashParticle, ground, 1, 0.25, 0.05, 0.25, 0.08)
            used++
          }
        }
        if (used < budget && random.nextDouble() < 0.08) {
          val flash = resolveAnyParticle("ELECTRIC_SPARK", "FLASH", "END_ROD")
          if (flash != null) {
            val sky =
                baseLoc
                    .clone()
                    .add(
                        random.nextDouble(-10.0, 10.0),
                        random.nextDouble(6.0, 12.0),
                        random.nextDouble(-10.0, 10.0),
                    )
            if (shape.contains(sky.x, sky.y, sky.z)) {
              player.spawnParticle(flash, sky, 2, 0.5, 2.0, 0.5, 0.02)
              used++
            }
          }
        }
      }
    }
    return used
  }

  private fun randomPointInside(
      playerLoc: Location,
      shape: AreaShape,
      random: ThreadLocalRandom,
  ): Location? {
    val world = playerLoc.world ?: return null
    val r = playerRenderRadius
    for (attempt in 0 until 3) {
      val x = playerLoc.x + random.nextDouble(-r, r)
      val y =
          (playerLoc.y + random.nextDouble(-4.0, 10.0)).coerceIn(
              shape.minY.toDouble(),
              (shape.maxY + 1).toDouble(),
          )
      val z = playerLoc.z + random.nextDouble(-r, r)
      if (shape.contains(x, y, z)) {
        return Location(world, x, y, z)
      }
    }
    return null
  }

  private fun randomWeatherDropPoint(
      playerLoc: Location,
      shape: AreaShape,
      random: ThreadLocalRandom,
  ): Location? {
    val world = playerLoc.world ?: return null
    val r = (playerRenderRadius * 0.75).coerceAtLeast(6.0)
    for (attempt in 0 until 3) {
      val x = playerLoc.x + random.nextDouble(-r, r)
      val y =
          (playerLoc.y + random.nextDouble(1.0, 11.0)).coerceIn(
              shape.minY.toDouble(),
              (shape.maxY + 1).toDouble(),
          )
      val z = playerLoc.z + random.nextDouble(-r, r)
      if (shape.contains(x, y, z)) {
        return Location(world, x, y, z)
      }
    }
    return null
  }

  private fun randomGroundPoint(
      playerLoc: Location,
      shape: AreaShape,
      random: ThreadLocalRandom,
  ): Location? {
    val world = playerLoc.world ?: return null
    val r = (playerRenderRadius * 0.6).coerceAtLeast(5.0)
    val x = playerLoc.x + random.nextDouble(-r, r)
    val z = playerLoc.z + random.nextDouble(-r, r)
    val y =
        (playerLoc.y + random.nextDouble(-0.5, 1.5)).coerceIn(
            shape.minY.toDouble(),
            (shape.maxY + 1).toDouble(),
        )
    return if (shape.contains(x, y, z)) Location(world, x, y, z) else null
  }

  private fun spawnSafeParticle(
      player: Player,
      particle: Particle,
      loc: Location,
      preset: ParticlePreset,
  ): Boolean {
    return runCatching {
          when (preset) {
            ParticlePreset.NOTE ->
                player.spawnParticle(
                    particle,
                    loc,
                    1,
                    ThreadLocalRandom.current().nextDouble(),
                    0.0,
                    0.0,
                    1.0,
                )
            else -> player.spawnParticle(particle, loc, 1, 0.15, 0.15, 0.15, 0.01)
          }
          true
        }
        .getOrDefault(false)
  }

  private fun resolveAnyParticle(vararg keys: String): Particle? {
    for (key in keys) {
      val found = runCatching { Particle.valueOf(key) }.getOrNull()
      if (found != null) return found
    }
    return null
  }

  private fun resolveAnySound(vararg keys: String): Sound? {
    for (key in keys) {
      val found = resolveSoundByKey(key)
      if (found != null) return found
    }
    return null
  }
}
