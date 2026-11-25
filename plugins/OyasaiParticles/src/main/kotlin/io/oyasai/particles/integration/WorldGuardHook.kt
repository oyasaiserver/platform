package io.oyasai.particles.integration

import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldguard.WorldGuard
import com.sk89q.worldguard.bukkit.WorldGuardPlugin
import com.sk89q.worldguard.protection.flags.StateFlag
import com.sk89q.worldguard.protection.flags.registry.FlagConflictException
import io.oyasai.particles.model.AreaShape
import java.util.logging.Level
import org.bukkit.Location
import org.bukkit.World
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

sealed interface ProtectionResult {
  data object Allowed : ProtectionResult

  data class Denied(val reason: String) : ProtectionResult
}

class WorldGuardHook(private val plugin: JavaPlugin) {
  private var areaFlag: StateFlag? = null
  private var warned = false

  fun registerFlag() {
    if (plugin.server.pluginManager.getPlugin("WorldGuard") == null) return
    try {
      areaFlag = WorldGuardDelegate.registerFlag(plugin)
    } catch (t: Throwable) {
      plugin.logger.log(Level.WARNING, "WorldGuard フラグの登録に失敗しました: ${t.message}", t)
    }
  }

  fun canModifyArea(player: Player, world: World, shape: AreaShape): ProtectionResult {
    if (player.hasPermission("oyasaiparticles.admin")) {
      return ProtectionResult.Allowed
    }
    val wgPlugin = plugin.server.pluginManager.getPlugin("WorldGuard")
    if (wgPlugin == null || !wgPlugin.isEnabled) {
      return ProtectionResult.Allowed
    }
    return try {
      WorldGuardDelegate.canModifyArea(player, world, shape, areaFlag)
    } catch (t: Throwable) {
      if (!warned) {
        plugin.logger.log(Level.WARNING, "WorldGuard 保護判定に失敗したため安全側で拒否しました", t)
        warned = true
      }
      ProtectionResult.Denied("保護プラグインの権限確認に失敗したため操作を中止しました。")
    }
  }

  fun isDisplayAllowed(player: Player, location: Location): Boolean {
    val flag = areaFlag ?: return true
    val wgPlugin = plugin.server.pluginManager.getPlugin("WorldGuard")
    if (wgPlugin == null || !wgPlugin.isEnabled) return true
    return try {
      WorldGuardDelegate.isDisplayAllowed(player, location, flag)
    } catch (_: Throwable) {
      true
    }
  }
}

private object WorldGuardDelegate {
  private const val FLAG_NAME = "oyasai-particles"

  fun registerFlag(owner: JavaPlugin): StateFlag? {
    val registry = WorldGuard.getInstance().flagRegistry
    val candidate = StateFlag(FLAG_NAME, true)
    return try {
      registry.register(candidate)
      candidate
    } catch (_: FlagConflictException) {
      (registry.get(FLAG_NAME) as? StateFlag).also {
        if (it == null) {
          owner.logger.severe("WorldGuard フラグ $FLAG_NAME が互換性のない型で登録されています。")
        }
      }
    } catch (e: IllegalStateException) {
      owner.logger.warning("WorldGuard フラグ登録にはサーバー再起動が必要です: ${e.message}")
      null
    }
  }

  fun canModifyArea(
      player: Player,
      world: World,
      shape: AreaShape,
      flag: StateFlag?,
  ): ProtectionResult {
    val wg = WorldGuard.getInstance()
    val localPlayer = WorldGuardPlugin.inst().wrapPlayer(player)
    val adaptedWorld = BukkitAdapter.adapt(world)
    if (wg.platform.sessionManager.hasBypass(localPlayer, adaptedWorld)) {
      return ProtectionResult.Allowed
    }

    val query = wg.platform.regionContainer.createQuery()
    for ((x, y, z) in shape.sampleProtectionPoints(step = 8)) {
      val loc = BukkitAdapter.adapt(Location(world, x.toDouble(), y.toDouble(), z.toDouble()))
      if (!query.testBuild(loc, localPlayer)) {
        return ProtectionResult.Denied("選択範囲内に建築権限のない保護領域が含まれています ($x, $y, $z)。")
      }
      if (flag != null) {
        val state = query.queryState(loc, localPlayer, flag)
        if (state == StateFlag.State.DENY) {
          return ProtectionResult.Denied("選択範囲内の保護領域で oyasai-particles フラグが禁止されています ($x, $y, $z)。")
        }
      }
    }
    return ProtectionResult.Allowed
  }

  fun isDisplayAllowed(player: Player, location: Location, flag: StateFlag): Boolean {
    val query = WorldGuard.getInstance().platform.regionContainer.createQuery()
    val localPlayer = WorldGuardPlugin.inst().wrapPlayer(player)
    val state = query.queryState(BukkitAdapter.adapt(location), localPlayer, flag)
    return state != StateFlag.State.DENY
  }
}
