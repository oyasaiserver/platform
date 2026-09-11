package io.oyasai.directstate.integration

import io.oyasai.directstate.edit.BlockChangeLog
import java.util.logging.Level
import net.coreprotect.CoreProtect
import net.coreprotect.CoreProtectAPI
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.BlockState
import org.bukkit.block.data.BlockData
import org.bukkit.plugin.java.JavaPlugin

// 完全AI生成
/** BlockChangeLogをCoreProtectの除去・設置・操作ログへ変換する任意連携。 */
internal class CoreProtectLogging
private constructor(
    private val owner: JavaPlugin,
    private val coreProtect: CoreProtect,
    private val api: CoreProtectAPI,
) : BlockChangeLog {
  private var warned = false

  /** BlockState同士の記録を、座標とBlockDataを使う共通処理へ渡す。 */
  override fun record(user: String, before: BlockState, after: BlockState) {
    record(user, before, after.location, after.blockData)
  }

  /** 一つの編集を、除去・設置・DirectState印の三つのCoreProtectログとして残す。 */
  override fun record(user: String, before: BlockState, location: Location, after: BlockData) {
    val block = location.block
    val hiddenBody = block.blockData.takeIf {
      (it.material == Material.BELL || it.material == Material.ENCHANTING_TABLE) &&
          !BlockEntityAccess.hasBody(block)
    }
    try {
      if (!coreProtect.isEnabled || !api.isEnabled) {
        warn("CoreProtect logging is unavailable; shape changes are not being logged.")
        return
      }
      val removed = api.logRemoval(user, before)
      val placed = api.logPlacement(user, location, after.material, after)
      val marker = api.logInteraction("DirectState", location)
      if (!removed || !placed || !marker) {
        warn(
            "CoreProtect rejected DirectState logging for $user at ${location}: removal=$removed placement=$placed marker=$marker"
        )
      }
    } catch (error: Exception) {
      warn("CoreProtect failed to log a DirectState change for $user at $location", error)
    } finally {
      // CoreProtectのgetState()は欠けているBlockEntityを再生成する。ログ取得後に元の非表示状態へ戻す。
      if (hiddenBody != null && block.type == hiddenBody.material) {
        BlockEntityAccess.setBody(block, block.blockData, false)
      }
    }
  }

  /** 任意連携の故障でログを埋めないよう、最初の一回だけ警告する。 */
  private fun warn(message: String, error: Exception? = null) {
    // 壊れた任意ロガーによって毎tick通知を出したり、ブロック編集を停止したりしない。
    if (!warned) owner.logger.log(Level.WARNING, message, error)
    warned = true
  }

  companion object {
    /** 対応APIが利用できる場合だけロガーを作り、利用不能ならnullを返す。 */
    fun connect(owner: JavaPlugin): BlockChangeLog? {
      val plugin =
          owner.server.pluginManager.getPlugin("CoreProtect") as? CoreProtect ?: return null
      val api = plugin.api
      if (!api.isEnabled || api.APIVersion() < 10) {
        owner.logger.warning(
            "CoreProtect logging requires an enabled API version 10+ (CoreProtect 22.4+)."
        )
        return null
      }
      owner.logger.info("CoreProtect block change logging enabled (API ${api.APIVersion()}).")
      return CoreProtectLogging(owner, plugin, api)
    }
  }
}
