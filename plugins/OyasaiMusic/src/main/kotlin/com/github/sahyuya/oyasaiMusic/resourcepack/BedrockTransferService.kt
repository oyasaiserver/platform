package com.github.sahyuya.oyasaiMusic.resourcepack

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.ResourcePackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.interop.BedrockTransferCodec
import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicLong
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

/**
 * Bedrock (Geyser) pack application, Paper side. Paper owns persisted allow/deny and restores the
 * Velocity in-memory flag by issuing a transfer on the next ordinary Bedrock join. A
 * transfer-driven rejoin consumes [evac], restores the player and only then marks the external pack
 * available for playback.
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
  /**
   * UUIDs whose latest quit was caused by our own transfer. External quit consumers (e.g.
   * combat-log) consult this.
   */
  private val transferQuit = ConcurrentHashMap.newKeySet<UUID>()
  private val intentSequence = AtomicLong()
  private val intentRevisions = ConcurrentHashMap<UUID, Long>()

  companion object {
    /** Evac records older than this are dropped (failed/app-killed reconnects). Design: 60s TTL. */
    const val EVAC_TTL_MILLIS = 60_000L
    /** Ticks to wait after rejoin before teleport-restore (chunk load). */
    const val RESTORE_DELAY_TICKS = 10L
  }

  private fun configuredPackId(): String =
      plugin.config.getString("bedrock.pack-id", "").orEmpty().trim().ifBlank {
        plugin.config.getString("resource-pack.id", "").orEmpty().trim()
      }

  fun transferEnabled(): Boolean =
      plugin.config.getBoolean("bedrock.transfer-enabled", false) && configuredPackId().isNotBlank()

  /**
   * Emits one startup/reload line so a disabled production route is not mistaken for a pack error.
   */
  fun logConfiguration() {
    val enabledFlag = plugin.config.getBoolean("bedrock.transfer-enabled", false)
    val packId = configuredPackId()
    if (enabledFlag && packId.isNotBlank()) {
      plugin.logger.info(
          "Bedrock resource-pack transfer enabled (packId=$packId, channel=${BedrockTransferCodec.CHANNEL})."
      )
    } else {
      val reason =
          when {
            !enabledFlag -> "bedrock.transfer-enabled=false"
            else -> "bedrock.pack-id and resource-pack.id are blank"
          }
      plugin.logger.warning(
          "Bedrock resource-pack transfer disabled: $reason. /mm rp allow will only save the preference."
      )
    }
  }

  fun isTransferQuit(playerId: UUID): Boolean = transferQuit.contains(playerId)

  fun allow(player: Player) {
    if (!transferEnabled()) {
      // Disabled deployments retain the preference without attempting Java-pack delivery.
      val enabledFlag = plugin.config.getBoolean("bedrock.transfer-enabled", false)
      val reason = if (!enabledFlag) "bedrock.transfer-enabled=false" else "pack-idが空です"
      plugin.logger.warning(
          "Bedrock pack allow was not transferred for ${player.uniqueId}: $reason"
      )
      player.sendMessage("§c統合版の拡張音域転送はサーバー設定で無効です。設定は保存しますが、現在は通常音域で再生します。")
      plugin.resourcePackService.allow(player, acknowledge = false)
      return
    }
    player.sendMessage("§a統合版用拡張音域パックの有効化を受け付けました。適用時に再接続する場合があります。")
    val intentRevision = intentSequence.incrementAndGet()
    intentRevisions[player.uniqueId] = intentRevision
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              runCatching { preferences.set(player.uniqueId, ResourcePackPreference.ALLOW) }
                  .onSuccess {
                    Bukkit.getScheduler()
                        .runTask(
                            plugin,
                            Runnable {
                              if (
                                  !player.isOnline ||
                                      intentRevisions[player.uniqueId] != intentRevision
                              )
                                  return@Runnable
                              evacuate(player)
                              val packId = configuredPackId()
                              if (!sendTransferRequest(player, true, packId)) {
                                evac.remove(player.uniqueId)
                                transferQuit.remove(player.uniqueId)
                                player.sendMessage("§c統合版の拡張音域転送要求を送信できませんでした。通常音域で再生します。")
                                return@Runnable
                              }
                              player.sendMessage("§e拡張音域パック適用のため再接続します。そのままお待ちください。")
                            },
                        )
                  }
                  .onFailure {
                    Bukkit.getScheduler()
                        .runTask(
                            plugin,
                            Runnable {
                              if (
                                  player.isOnline &&
                                      intentRevisions[player.uniqueId] == intentRevision
                              ) {
                                player.sendMessage("§c設定の保存に失敗したため、許可状態は変更しませんでした。")
                              }
                            },
                        )
                  }
            },
        )
  }

  fun deny(player: Player) {
    val intentRevision = intentSequence.incrementAndGet()
    intentRevisions[player.uniqueId] = intentRevision
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val saved =
                  runCatching { preferences.set(player.uniqueId, ResourcePackPreference.DENY) }
                      .isSuccess
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!player.isOnline || intentRevisions[player.uniqueId] != intentRevision)
                            return@Runnable
                        if (!saved) {
                          player.sendMessage("§c設定の保存に失敗したため、停止状態は変更しませんでした。")
                          return@Runnable
                        }
                        evac.remove(player.uniqueId)
                        transferQuit.remove(player.uniqueId)
                        plugin.resourcePackService.forget(player.uniqueId)
                        val packId = configuredPackId()
                        sendTransferRequest(player, false, packId)
                        player.sendMessage("§e統合版の拡張音域パックを停止しました。次回入室時から通常音域になります。")
                      },
                  )
            },
        )
  }

  private fun sendTransferRequest(player: Player, allow: Boolean, packId: String): Boolean =
      runCatching {
            player.sendPluginMessage(
                plugin,
                BedrockTransferCodec.CHANNEL,
                BedrockTransferCodec.encode(player.uniqueId, allow, packId),
            )
          }
          .fold(
              onSuccess = {
                plugin.logger.info(
                    "Sent Bedrock pack ${if (allow) "ALLOW" else "DENY"} request for ${player.uniqueId} (packId=$packId).",
                )
                true
              },
              onFailure = { error ->
                plugin.logger.warning(
                    "Failed to send Bedrock pack ${if (allow) "ALLOW" else "DENY"} request for ${player.uniqueId}: ${error.message}",
                )
                false
              },
          )

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
    // If Velocity cannot transfer the player, do not leave an ordinary later quit classified
    // as transfer-driven for the full server lifetime.
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              val saved = evac[player.uniqueId] ?: return@Runnable
              if (saved.expiresAtMillis <= System.currentTimeMillis() && player.isOnline) {
                evac.remove(player.uniqueId, saved)
                transferQuit.remove(player.uniqueId)
              }
            },
            EVAC_TTL_MILLIS / 50L + 1L,
        )
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    val player = event.player
    val saved =
        evac.remove(player.uniqueId)
            ?: run {
              transferQuit.remove(player.uniqueId)
              restorePersistedAllow(player)
              return
            }
    transferQuit.remove(player.uniqueId)
    if (System.currentTimeMillis() > saved.expiresAtMillis) return
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              if (!player.isOnline) return@Runnable
              runCatching { player.teleport(saved.location) }
              runCatching { player.gameMode = saved.gameMode }
              runCatching { player.allowFlight = saved.allowFlight }
              runCatching { if (saved.flying) player.isFlying = true }
              plugin.resourcePackService.markExternalSuccess(player.uniqueId)
            },
            RESTORE_DELAY_TICKS,
        )
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    intentRevisions.remove(event.player.uniqueId)
  }

  /** Rehydrates Velocity's intentionally in-memory flag after proxy/Paper restarts. */
  private fun restorePersistedAllow(player: Player) {
    if (!transferEnabled()) return
    val bedrockPrefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    if (!BedrockUtil.isBedrock(player, bedrockPrefix)) return
    val intentRevision = intentSequence.incrementAndGet()
    intentRevisions[player.uniqueId] = intentRevision
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val allowed =
                  runCatching { preferences.get(player.uniqueId) == ResourcePackPreference.ALLOW }
                      .getOrDefault(false)
              Bukkit.getScheduler()
                  .runTaskLater(
                      plugin,
                      Runnable {
                        if (
                            !allowed ||
                                !player.isOnline ||
                                evac.containsKey(player.uniqueId) ||
                                intentRevisions[player.uniqueId] != intentRevision
                        )
                            return@Runnable
                        evacuate(player)
                        val packId = configuredPackId()
                        if (!sendTransferRequest(player, true, packId)) {
                          evac.remove(player.uniqueId)
                          transferQuit.remove(player.uniqueId)
                          return@Runnable
                        }
                        player.sendMessage("§e拡張音域パックの状態を復元するため再接続します。そのままお待ちください。")
                      },
                      20L,
                  )
            },
        )
  }
}
