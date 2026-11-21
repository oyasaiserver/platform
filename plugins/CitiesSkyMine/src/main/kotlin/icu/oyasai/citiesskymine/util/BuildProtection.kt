package icu.oyasai.citiesskymine.util

import com.sk89q.worldedit.bukkit.BukkitAdapter
import java.lang.reflect.Array as ReflectArray
import java.util.logging.Level
import java.util.logging.Logger
import kotlin.math.abs
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.entity.Player

internal object BuildProtection {

  fun canBuild(player: Player, location: Location, logger: Logger? = null): Boolean {
    runCatching { Bukkit.getServer() }.getOrNull() ?: return true
    if (location.world == null) return false
    if (!checkWorldGuard(player, location, logger)) return false
    if (!checkSpawnProtection(player, location)) return false
    return true
  }

  private fun checkSpawnProtection(player: Player, location: Location): Boolean {
    if (player.isOp) return true
    val radius = Bukkit.getSpawnRadius()
    if (radius <= 0) return true
    val world = location.world ?: return false
    val spawn = world.spawnLocation
    val dx = abs(location.blockX - spawn.blockX)
    val dz = abs(location.blockZ - spawn.blockZ)
    return dx > radius || dz > radius
  }

  private fun checkWorldGuard(player: Player, location: Location, logger: Logger?): Boolean {
    val wgBukkitPlugin = Bukkit.getPluginManager().getPlugin("WorldGuard") ?: return true
    if (!wgBukkitPlugin.isEnabled) return true
    return try {
      val world = location.world ?: return false
      val wgClass = Class.forName("com.sk89q.worldguard.WorldGuard")
      val wg = wgClass.getMethod("getInstance").invoke(null)
      val platform = wgClass.getMethod("getPlatform").invoke(wg)

      val wgPluginClass = Class.forName("com.sk89q.worldguard.bukkit.WorldGuardPlugin")
      val localPlayer =
          wgPluginClass.getMethod("wrapPlayer", Player::class.java).invoke(wgBukkitPlugin, player)

      val localPlayerClass = Class.forName("com.sk89q.worldguard.LocalPlayer")
      val weWorldClass = Class.forName("com.sk89q.worldedit.world.World")
      val sessionManager = platform.javaClass.getMethod("getSessionManager").invoke(platform)
      val hasBypass =
          sessionManager.javaClass
              .getMethod("hasBypass", localPlayerClass, weWorldClass)
              .invoke(sessionManager, localPlayer, BukkitAdapter.adapt(world)) as Boolean
      if (hasBypass) return true

      val container = platform.javaClass.getMethod("getRegionContainer").invoke(platform)
      val query = container.javaClass.getMethod("createQuery").invoke(container)
      val weLocClass = Class.forName("com.sk89q.worldedit.util.Location")
      val associableClass =
          Class.forName("com.sk89q.worldguard.protection.association.RegionAssociable")
      val stateFlagClass = Class.forName("com.sk89q.worldguard.protection.flags.StateFlag")
      val emptyFlags = ReflectArray.newInstance(stateFlagClass, 0)
      val testBuild =
          query.javaClass.getMethod("testBuild", weLocClass, associableClass, emptyFlags.javaClass)
      testBuild.invoke(query, BukkitAdapter.adapt(location), localPlayer, emptyFlags) as Boolean
    } catch (e: Exception) {
      logger?.log(Level.WARNING, "WorldGuard 権限確認に失敗したため安全側で拒否しました", e)
      false
    }
  }
}
