package com.github.sahyuya.oyasaiMusic.resourcepack

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.ResourcePackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.interop.BedrockTransferCodec
import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent

/**
 * Bedrock (Geyser) pack application, Paper side.
 * Phase-1 covers: persisted allow/deny, pre-transfer state evac, transfer-request send,
 * and post-rejoin restore. The Velocity/Geyser consumer (Transfer execution + .mcpack
 * injection) lands in phase-2; until then [transferEnabled] stays false and Bedrock
 * players keep folded vanilla playback.
 */
class BedrockTransferService(
    private val plugin: OyasaiMusic,
    private val preferences: ResourcePackPreferenceRepository,
) : Listener {
  data class Evac(
      val location: Location,
      val gameMode: GameMode,
      val allowFlight: Boolean,
      val flying: Boolean,
      val expiresAtMillis: Long,
  )

  private val evac = ConcurrentHashMap<UUID, Evac>()
  /** UUIDs whose latest quit was caused by our own transfer. External quit consumers (e.g. combat-log) consult this. */
  private val transferQuit = ConcurrentHashMap.newKeySet<UUID>()

  companion object {
    /** Evac records older than this are dropped (failed/app-killed reconnects). Design: 60s TTL. */
    const val EVAC_TTL_MILLIS = 60_000L
    /** Ticks to wait after rejoin before teleport-restore (chunk load). */
    const val RESTORE_DELAY_TICKS = 10L
  }

  fun transferEnabled(): Boolean =
      plugin.config.getBoolean("bedrock.transfer-enabled", false) &&
          plugin.config.getString("bedrock.pack-id", "").orEmpty().isNotBlank()

  fun isTransferQuit(playerId: UUID): Boolean = transferQuit.contains(playerId)

  fun allow(player: Player) {
    if (!transferEnabled()) {
      // Phase-1 fallback: same behavior as before (persisted allow, Java pack untouched).
      plugin.resourcePackService.allow(player)
      return
    }
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      runCatching { preferences.set(player.uniqueId, ResourcePackPreference.ALLOW) }
          .onSuccess {
            Bukkit.getScheduler().runTask(plugin, Runnable {
              if (!player.isOnline) return@Runnable
              evacuate(player)
              // The pack lands via Transfer re-login; mark loaded so Paper routes
              // extended bank events once applied.
              plugin.resourcePackService.markExternalSuccess(player.uniqueId)
              val packId = plugin.config.getString("bedrock.pack-id", "").orEmpty()
              sendTransferRequest(player, packId)
              player.sendMessage("§e拡張音域パック適用のため再接続します。そのままお待ちください。")
            })
          }
          .onFailure {
            Bukkit.getScheduler().runTask(plugin, Runnable {
              if (player.isOnline) player.sendMessage("§c設定の保存に失敗したため、許可状態は変更しませんでした。")
            })
          }
    })
  }

  fun deny(player: Player) {
    evac.remove(player.uniqueId)
    transferQuit.remove(player.uniqueId)
    // Deny unloads at the next natural login (no forced reconnect): forget pack state now.
    plugin.resourcePackService.forget(player.uniqueId)
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      val saved = runCatching { preferences.set(player.uniqueId, ResourcePackPreference.DENY) }.isSuccess
      Bukkit.getScheduler().runTask(plugin, Runnable {
        if (!player.isOnline) return@Runnable
        if (!saved) {
          player.sendMessage("§c設定の保存に失敗したため、停止状態は変更しませんでした。")
          return@Runnable
        }
        player.sendMessage("§e統合版の拡張音域パックを停止しました。次回入室時から通常音域になります。")
      })
    })
  }

  private fun sendTransferRequest(player: Player, packId: String) {
    runCatching {
      player.sendPluginMessage(
          plugin,
          BedrockTransferCodec.CHANNEL,
          BedrockTransferCodec.encode(player.uniqueId, true, packId),
      )
    }
  }

  private fun evacuate(player: Player) {
    evac[player.uniqueId] =
        Evac(
            player.location.clone(),
            player.gameMode,
            player.allowFlight,
            player.isFlying,
            System.currentTimeMillis() + EVAC_TTL_MILLIS,
        )
    transferQuit.add(player.uniqueId)
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    val player = event.player
    val saved = evac.remove(player.uniqueId) ?: run {
      transferQuit.remove(player.uniqueId)
      return
    }
    transferQuit.remove(player.uniqueId)
    if (System.currentTimeMillis() > saved.expiresAtMillis) return
    Bukkit.getScheduler().runTaskLater(plugin, Runnable {
      if (!player.isOnline) return@Runnable
      runCatching { player.teleport(saved.location) }
      runCatching { player.gameMode = saved.gameMode }
      runCatching { player.allowFlight = saved.allowFlight }
      runCatching { if (saved.flying) player.isFlying = true }
    }, RESTORE_DELAY_TICKS)
  }
}
