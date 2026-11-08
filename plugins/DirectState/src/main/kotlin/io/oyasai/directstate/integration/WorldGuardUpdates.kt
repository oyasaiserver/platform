package io.oyasai.directstate.integration

import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldguard.WorldGuard
import com.sk89q.worldguard.bukkit.WorldGuardPlugin
import com.sk89q.worldguard.protection.flags.StateFlag
import com.sk89q.worldguard.protection.flags.registry.FlagConflictException
import io.oyasai.directstate.update.PlayerUpdateRule
import org.bukkit.Location
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

// 完全AI生成
/** WorldGuard領域フラグを、プレイヤー単位の更新抑制条件として提供する任意連携。 */
internal class WorldGuardUpdates
private constructor(
    private val owner: JavaPlugin,
    private val flag: StateFlag,
    private val forceFlag: StateFlag,
    private val keepFlag: StateFlag,
) : PlayerUpdateRule {
  private var warned = false

  /** プレイヤーがいる領域でdirectstate-no-updatesがALLOWならtrue。 */
  override fun suppress(player: Player): Boolean = query(player, flag) == true

  override fun forcePlacement(player: Player): Boolean? = query(player, forceFlag)

  override fun keepState(player: Player): Boolean? = query(player, keepFlag)

  private fun query(player: Player, selected: StateFlag): Boolean? {
    if (!owner.server.pluginManager.isPluginEnabled("WorldGuard")) return null
    return try {
      // 対象ブロックではなく、意図的に操作したプレイヤーの位置を使う。
      val query = WorldGuard.getInstance().platform.regionContainer.createQuery()
      val regions = query.getApplicableRegions(BukkitAdapter.adapt(player.location))
      if (regions.isVirtual) return null
      regions.queryState(WorldGuardPlugin.inst().wrapPlayer(player), selected)?.let {
        it == StateFlag.State.ALLOW
      }
    } catch (error: Exception) {
      if (!warned)
          owner.logger.warning("WorldGuard update rule could not be queried: ${error.message}")
      warned = true
      null
    }
  }

  companion object {
    fun canBuild(player: Player, location: Location): Boolean {
      val worldGuard = WorldGuard.getInstance()
      val local = WorldGuardPlugin.inst().wrapPlayer(player)
      return worldGuard.platform.sessionManager.hasBypass(
          local,
          BukkitAdapter.adapt(location.world!!),
      ) ||
          worldGuard.platform.regionContainer
              .createQuery()
              .testBuild(BukkitAdapter.adapt(location), local)
    }

    /** WorldGuardへフラグを登録し、同名の互換フラグがあれば再利用する。 */
    fun register(owner: JavaPlugin): PlayerUpdateRule? {
      val registry = WorldGuard.getInstance().flagRegistry
      fun flag(name: String): StateFlag? {
        val candidate = StateFlag(name, false)
        return try {
          registry.register(candidate)
          candidate
        } catch (_: FlagConflictException) {
          (registry.get(name) as? StateFlag).also {
            if (it == null) owner.logger.severe("WorldGuard flag $name has an incompatible type.")
          }
        } catch (error: IllegalStateException) {
          owner.logger.severe(
              "WorldGuard flag registration failed; fully restart the server: ${error.message}"
          )
          null
        }
      }
      val flag = flag("directstate-no-updates") ?: return null
      val force = flag("directstate-force-placement") ?: return null
      val keep = flag("directstate-keep-state") ?: return null
      owner.logger.info(
          "WorldGuard flag registered: directstate-no-updates (allow = suppress player updates)."
      )
      return WorldGuardUpdates(owner, flag, force, keep)
    }
  }
}
