package io.oyasai.directstate.integration

import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldguard.WorldGuard
import com.sk89q.worldguard.bukkit.WorldGuardPlugin
import com.sk89q.worldguard.protection.flags.StateFlag
import com.sk89q.worldguard.protection.flags.registry.FlagConflictException
import io.oyasai.directstate.update.PlayerUpdateRule
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

// 完全AI生成
/** WorldGuard領域フラグを、プレイヤー単位の更新抑制条件として提供する任意連携。 */
internal class WorldGuardUpdates
private constructor(private val owner: JavaPlugin, private val flag: StateFlag) : PlayerUpdateRule {
  private var warned = false

  /** プレイヤーがいる領域でdirectstate-no-updatesがALLOWならtrue。 */
  override fun suppress(player: Player): Boolean {
    if (!owner.server.pluginManager.isPluginEnabled("WorldGuard")) return false
    return try {
      // 対象ブロックではなく、意図的に操作したプレイヤーの位置を使う。
      val query = WorldGuard.getInstance().platform.regionContainer.createQuery()
      val regions = query.getApplicableRegions(BukkitAdapter.adapt(player.location))
      if (regions.isVirtual) return false
      regions.queryState(WorldGuardPlugin.inst().wrapPlayer(player), flag) == StateFlag.State.ALLOW
    } catch (error: Exception) {
      if (!warned)
          owner.logger.warning("WorldGuard update rule could not be queried: ${error.message}")
      warned = true
      false
    }
  }

  companion object {
    /** WorldGuardへフラグを登録し、同名の互換フラグがあれば再利用する。 */
    fun register(owner: JavaPlugin): PlayerUpdateRule? {
      val registry = WorldGuard.getInstance().flagRegistry
      var flag = StateFlag("directstate-no-updates", false)
      try {
        registry.register(flag)
      } catch (_: FlagConflictException) {
        flag =
            registry.get("directstate-no-updates") as? StateFlag
                ?: run {
                  owner.logger.severe(
                      "WorldGuard flag directstate-no-updates is registered with an incompatible type."
                  )
                  return null
                }
      } catch (error: IllegalStateException) {
        owner.logger.severe(
            "WorldGuard flag registration failed; fully restart the server: ${error.message}"
        )
        return null
      }
      owner.logger.info(
          "WorldGuard flag registered: directstate-no-updates (allow = suppress player updates)."
      )
      return WorldGuardUpdates(owner, flag)
    }
  }
}
