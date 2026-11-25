package io.oyasai.particles.selection

import io.oyasai.particles.integration.ProtectionResult
import io.oyasai.particles.integration.WorldGuardHook
import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.service.AreaService
import org.bukkit.World
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.entity.Player

data class AreaLimitsConfig(
    val maxAreasPerPlayer: Int,
    val maxBoxSide: Int,
    val maxBoxVolume: Long,
    val maxCylinderRadius: Double,
    val maxCylinderHeight: Int,
) {
  companion object {
    fun fromConfig(config: FileConfiguration): AreaLimitsConfig =
        AreaLimitsConfig(
            maxAreasPerPlayer = config.getInt("limits.max-areas-per-player", 10).coerceAtLeast(1),
            maxBoxSide = config.getInt("limits.max-box-side", 64).coerceAtLeast(1),
            maxBoxVolume = config.getLong("limits.max-box-volume", 65536L).coerceAtLeast(1L),
            maxCylinderRadius =
                config.getDouble("limits.max-cylinder-radius", 32.0).coerceAtLeast(1.0),
            maxCylinderHeight = config.getInt("limits.max-cylinder-height", 64).coerceAtLeast(1),
        )
  }
}

sealed interface ValidationResult {
  data object Ok : ValidationResult

  data class Error(val message: String) : ValidationResult
}

class AreaLimitValidator(
    private val limits: AreaLimitsConfig,
    private val areaService: AreaService,
    private val worldGuardHook: WorldGuardHook,
) {

  fun validateNewArea(player: Player, world: World, shape: AreaShape): ValidationResult {
    val isAdmin = player.hasPermission("oyasaiparticles.admin")
    if (!isAdmin && areaService.countAreasOwnedBy(player.uniqueId) >= limits.maxAreasPerPlayer) {
      return ValidationResult.Error("所持できるパーティクルエリアの上限 (${limits.maxAreasPerPlayer}個) に達しています。")
    }
    return validateShapeAndProtection(player, world, shape)
  }

  fun validateShapeAndProtection(player: Player, world: World, shape: AreaShape): ValidationResult {
    val isAdmin = player.hasPermission("oyasaiparticles.admin")
    if (!isAdmin) {
      val shapeError = validateShapeLimits(shape)
      if (shapeError != null) return ValidationResult.Error(shapeError)
    }

    return when (val wgResult = worldGuardHook.canModifyArea(player, world, shape)) {
      is ProtectionResult.Allowed -> ValidationResult.Ok
      is ProtectionResult.Denied -> ValidationResult.Error(wgResult.reason)
    }
  }

  private fun validateShapeLimits(shape: AreaShape): String? {
    return when (shape) {
      is AreaShape.Box -> {
        if (shape.maxSide() > limits.maxBoxSide) {
          return "四角エリアの一辺が上限 (${limits.maxBoxSide} ブロック) を超えています。"
        }
        val volume = runCatching { shape.volume() }.getOrDefault(Long.MAX_VALUE)
        if (volume > limits.maxBoxVolume) {
          return "四角エリアの体積が上限 (${limits.maxBoxVolume} ブロック) を超えています。"
        }
        null
      }
      is AreaShape.Cylinder -> {
        if (shape.radius > limits.maxCylinderRadius) {
          return "円柱エリアの半径が上限 (${limits.maxCylinderRadius}) を超えています。"
        }
        if (shape.height() > limits.maxCylinderHeight) {
          return "円柱エリアの高さが上限 (${limits.maxCylinderHeight}) を超えています。"
        }
        null
      }
    }
  }
}
