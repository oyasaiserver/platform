package com.github.sahyuya.oyasaiMusic.resourcepack

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.ResourcePackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.interop.BedrockPackStatusCodec
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
 * Bedrock (Geyser) pack application, Paper side. Paper owns the player preference. Velocity
 * persists only the corresponding validated Bedrock XUID so Geyser can attach the pack before a
 * later first backend join. A transfer-driven rejoin consumes [evac]; ordinary joins never trigger
 * a second transfer.
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

  /** Completion is always invoked on the Paper main thread and reports preference persistence. */
  fun allow(player: Player, completion: ((Boolean) -> Unit)? = null) {
    if (!transferEnabled()) {
      // Disabled deployments retain the preference without attempting Java-pack delivery.
      val enabledFlag = plugin.config.getBoolean("bedrock.transfer-enabled", false)
      val reason = if (!enabledFlag) "bedrock.transfer-enabled=false" else "pack-idが空です"
      plugin.logger.warning(
          "Bedrock pack allow was not transferred for ${player.uniqueId}: $reason"
      )
      player.sendMessage("§c統合版の拡張音域転送はサーバー設定で無効です。設定は保存しますが、現在は通常音域で再生します。")
      plugin.resourcePackService.allow(player, acknowledge = false, completion = completion)
      return
    }
    player.sendMessage("§a統合版用拡張音域パックの有効化を受け付けました。適用時に再接続する場合があります。")
    player.sendMessage("§7ダウンロードは任意です。キャンセルした場合も参加でき、参加後に /mm rp deny で次回以降の表示を停止できます。")
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
                              ) {
                                completion?.invoke(false)
                                return@Runnable
                              }
                              completion?.invoke(true)
                              evacuate(player)
                              val packId = configuredPackId()
                              if (!sendTransferRequest(player, true, packId)) {
                                evac.remove(player.uniqueId)
                                transferQuit.remove(player.uniqueId)
                                player.sendMessage("§c統合版の拡張音域転送要求を送信できませんでした。通常音域で再生します。")
                                return@Runnable
                              }
                              player.sendMessage("§e拡張音域パックの適用状態を確認しています。必要な場合のみ再接続します。")
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
                              completion?.invoke(false)
                            },
                        )
                  }
            },
        )
  }

  /** Completion is always invoked on the Paper main thread and reports preference persistence. */
  fun deny(player: Player, completion: ((Boolean) -> Unit)? = null) {
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
                        if (
                            !player.isOnline || intentRevisions[player.uniqueId] != intentRevision
                        ) {
                          completion?.invoke(false)
                          return@Runnable
                        }
                        if (!saved) {
                          player.sendMessage("§c設定の保存に失敗したため、停止状態は変更しませんでした。")
                          completion?.invoke(false)
                          return@Runnable
                        }
                        evac.remove(player.uniqueId)
                        transferQuit.remove(player.uniqueId)
                        plugin.resourcePackService.forget(player.uniqueId)
                        val packId = configuredPackId()
                        sendTransferRequest(player, false, packId)
                        player.sendMessage("§e統合版の拡張音域パックを停止しました。次回入室時から通常音域になります。")
                        completion?.invoke(true)
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

  /** Accepts only Velocity's current-player, current-pack confirmation. */
  fun handlePackStatus(player: Player, status: BedrockPackStatusCodec.Status) {
    if (!transferEnabled()) return
    if (status.playerId != player.uniqueId) {
      plugin.logger.warning("Rejected Bedrock pack status with mismatched player UUID.")
      return
    }
    val expectedPackId = configuredPackId()
    if (expectedPackId.isBlank() || !status.packId.equals(expectedPackId, ignoreCase = true)) {
      plugin.logger.warning(
          "Rejected Bedrock pack status for ${player.uniqueId}: expected packId=$expectedPackId, received=${status.packId}",
      )
      return
    }
    val bedrockPrefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    if (!BedrockUtil.isBedrock(player, bedrockPrefix)) {
      plugin.logger.warning(
          "Rejected Bedrock pack status for non-Bedrock player ${player.uniqueId}."
      )
      return
    }

    val hadPendingTransfer = evac.remove(player.uniqueId) != null
    transferQuit.remove(player.uniqueId)
    if (status.loaded) {
      // Velocity confirms delivery, but Paper's persisted preference remains the
      // authoritative opt-in. Never let a status packet override a DENY row.
      val playerId = player.uniqueId
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                val preference = runCatching { preferences.get(playerId) }
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          if (Bukkit.getPlayer(playerId) !== player || !player.isOnline)
                              return@Runnable
                          if (preference.isFailure) {
                            plugin.logger.warning(
                                "Could not verify Paper pack preference for $playerId; ignoring Velocity status."
                            )
                            return@Runnable
                          }
                          val allowed = preference.getOrNull() == ResourcePackPreference.ALLOW
                          if (allowed) {
                            plugin.resourcePackService.markExternalSuccess(playerId)
                            if (hadPendingTransfer) {
                              player.sendMessage("§a統合版用拡張音域パックをGeyserへ登録しました。")
                              player.sendMessage(
                                  "§7端末側でダウンロードをキャンセルした場合は /mm rp deny を実行すると通常音域へ戻せます。"
                              )
                            }
                            plugin.logger.info(
                                "Velocity confirmed Bedrock pack registration for $playerId (client acceptance is not observable through the public Geyser API)."
                            )
                          } else {
                            plugin.resourcePackService.forget(playerId)
                            sendTransferRequest(player, false, expectedPackId)
                            plugin.logger.warning(
                                "Ignored a loaded Bedrock pack status for $playerId because Paper preference is DENY."
                            )
                          }
                        },
                    )
              },
          )
    } else {
      plugin.resourcePackService.forget(player.uniqueId)
      if (hadPendingTransfer && player.isOnline) {
        player.sendMessage("§e拡張音域パックを現在の接続には適用できませんでした。次回参加時に再試行します。")
      }
      plugin.logger.info(
          "Velocity reported no Bedrock pack for ${player.uniqueId}; using vanilla range."
      )
    }
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    val player = event.player
    val saved =
        evac.remove(player.uniqueId)
            ?: run {
              transferQuit.remove(player.uniqueId)
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
            },
            RESTORE_DELAY_TICKS,
        )
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    intentRevisions.remove(event.player.uniqueId)
  }
}
